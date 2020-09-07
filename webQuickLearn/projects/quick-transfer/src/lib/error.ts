import { ErrorLevel } from './error-level.enum';

export class Error {

    /**
     * 错误等级
     */
    public errorLevel: ErrorLevel;


    /**
     * 错误代码
     */
    public errorCode?: string;

    /**
     * 友好提示
     */
    public friendlyMessage?: string;


    /**
     * 详细提示
     */
    public detailMessage?: string;
}