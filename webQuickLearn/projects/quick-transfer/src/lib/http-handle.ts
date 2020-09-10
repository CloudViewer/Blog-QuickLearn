import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Error } from './error';
import { MessageHandle } from './message-handle';
import { Response } from './response';
import { ErrorLevel } from './error-level.enum';

export class HttpHandle {

    private msgIdStep: number = 0;
    private httpUrl: string;
    private httpConnector: HttpClient;
    private tioLoading: any;
    private tioLoaddone: any;




    constructor(httpConnector: HttpClient, httpUrl: string) {
        this.httpConnector = httpConnector;
        this.httpUrl = httpUrl;
    }


    private getHttpOptions() {
        const jwt = localStorage.getItem('QL-TOKEN');
        console.log(`token获取：${jwt}`)
        if (jwt) {
            const httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json;charset=UTF-8',
                    'Authorization': `Bearer${jwt}`
                })
            }
            return httpOptions;
        } else {
            return null;
        }
    }




    /**
     * 发生错误要执行的方法
     */
    private error: (error: Error) => void;
    public onError(fun: (error: Error) => void): HttpHandle {
        this.error = fun;
        return this;
    }

    /**
     * 加载数据时需要执行的方法
     */
    private loading: () => void;
    public onLoading(fun: () => void): HttpHandle {
        this.loading = fun;
        return this;
    }

    /**
     * 数据加载完后要执行的方法
     */
    private loaddone: () => void;
    public onLoaddone(fun: () => void): HttpHandle {
        this.loaddone = fun;
        return this;
    }

    private timeoutLoading(sld: { isSysLoading: boolean }): void {
        if ((!sld || !sld.isSysLoading) && this.loaddone) {
            clearTimeout(this.tioLoaddone);
            clearTimeout(this.tioLoading);
            this.tioLoading = setTimeout(this.loading, 500);
        }
    }

    private timeoutLoaddone(sld: { isSysLoaddone: boolean }): void {
        if ((!sld || !sld.isSysLoaddone) && this.loaddone) {
            clearTimeout(this.tioLoading);
            clearTimeout(this.tioLoaddone);
            this.tioLoading = setTimeout(this.tioLoaddone, 200);
        }
    }

    public send(action: string, data: {}): MessageHandle {
        let messageHandle = new MessageHandle(++this.msgIdStep);
        setTimeout(() => {
            // 在发送前显示加载动画
            this.timeoutLoading(messageHandle && messageHandle.beforeSend ? messageHandle.beforeSend() : null);

            this.httpConnector.post<Response>(this.httpUrl.concat(action), { id: messageHandle.getMessageHandleId, data: data }, { headers: this.getHttpOptions().headers, withCredentials: true }).subscribe(
                (result: Response) => {
                    // 取消动画加载
                    this.timeoutLoaddone(messageHandle && messageHandle.beforeReceived ? messageHandle.beforeReceived() : null);

                    if (!result) {
                        this.error && this.error({ errorLevel: ErrorLevel.SYSTEM, friendlyMessage: '数据返回错误' });
                        return;
                    } else {
                        if (result.code == 0) {
                            messageHandle.received && messageHandle.received(result.data);
                        } else {
                            let er: Error = result.data;
                            this.catchError(messageHandle, er, result.data);
                        }
                    }
                },
                (error) => {
                    // 隐藏加载动画
                    this.timeoutLoaddone(messageHandle && messageHandle.beforeReceived ? messageHandle.beforeReceived() : null);
                    let er: Error = { errorLevel: ErrorLevel.NETWORK_ERROR, friendlyMessage: "网络连接错误", detailMessage: error.message };
                    this.catchError(messageHandle, er, er);
                }
            );
        }, 50);

        return messageHandle;
    }

    private catchError(messageHandle: MessageHandle, er: Error, data: any): void {
        let ise: { isSysError: boolean } = messageHandle && messageHandle.error
            && messageHandle.catchError(er.errorLevel) ? messageHandle.error(er) : null;
        if ((!ise || !ise.isSysError) && this.error) {
            this.error(data);
        }
    }
}