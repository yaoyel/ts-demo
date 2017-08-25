/**
 * Created by ybc on 2017/8/24.
 */
import {KoaMiddlewareInterface} from "routing-controllers";

export class LoggingMiddleware implements KoaMiddlewareInterface { // interface implementation is optional

   async use(context: any, next: (err?: any) => Promise<any>): Promise<any>{
        console.log(context);
        await next();
    }

}