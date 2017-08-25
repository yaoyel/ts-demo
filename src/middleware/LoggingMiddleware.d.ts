/**
 * Created by ybc on 2017/8/24.
 */
import { KoaMiddlewareInterface } from "routing-controllers";
export declare class LoggingMiddleware implements KoaMiddlewareInterface {
    use(context: any, next: (err?: any) => Promise<any>): Promise<any>;
}
