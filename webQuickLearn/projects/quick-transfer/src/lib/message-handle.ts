import { ErrorLevel } from './error-level.enum';
import { Error } from './error';

export class MessageHandle {

    private id: number;

    constructor(id: number) {
        this.id = id;
    }

    public getMessageHandleId() {
        return this.id;
    }

    /**
     * 在发送请求之前要执行的操作
     */
    public beforeSend: () => { isSysLoading: boolean }
    public onBeforeSend(fun: () => { isSysLoading: boolean }): MessageHandle {
        this.beforeSend = fun;
        return this;
    }

    /**
     * 在收到服务器之前要执行的操作
     */
    public beforeReceived: () => { isSysLoaddone: boolean }
    public onBeforeReceived(fun: () => { isSysLoaddone: boolean }): MessageHandle {
        this.beforeReceived = fun;
        return this;
    }

    /**
     * 在收到服务器数据后要执行的操作
     */
    public received: (data: any) => void;
    public onReceived(fun: (data: any) => void): MessageHandle {
        this.received = fun;
        return this;
    }


    /**
     * 统一异常处理
     */
    public catchErrorMap: { [key: number]: boolean }
    public catchError(errorLev: ErrorLevel): boolean {
        return this.catchErrorMap && this.catchErrorMap[errorLev];
    }
    public error: (error: Error) => { isSysError: boolean }
    public onError(fun: (error: Error) => { isSysError: boolean }, catchErrors?: ErrorLevel[]): MessageHandle {
        this.catchErrorMap = {};
        if (catchErrors && catchErrors.length > 0) {
            for (let i = 0; i < catchErrors.length; i++) {
                this.catchErrorMap[catchErrors[i]] = true;
            }
        } else {
            this.catchErrorMap[ErrorLevel.SYSTEM] = true;
            this.catchErrorMap[ErrorLevel.SESSION_TIMEOUT] = true;
            this.catchErrorMap[ErrorLevel.PERMISSION_DENIED] = true;
            this.catchErrorMap[ErrorLevel.USER] = true;
        }
        this.error = fun;
        return this;
    }
    public fireError(error: Error): void {
        this.error && this.error(error);
    }
}