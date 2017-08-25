/**
 * Created by ybc on 2017/8/25.
 */
import * as path from "path";
import * as jwt from "jsonwebtoken";
import * as PromiseB from "bluebird";
import * as fs from "fs";

  export async function  loadSslFile(isPrivate:boolean):Promise<Buffer> {
       let privateKeyPath: string;
       let publicPemPath: string;
       const sslFilePath = path.join(__dirname, "../", "config", "ssl");
       privateKeyPath = path.join(sslFilePath, "private.key");
       publicPemPath = path.join(sslFilePath, "public.pem");

       var readFileAsync = PromiseB.promisify(fs.readFile);
       return await readFileAsync(isPrivate ? privateKeyPath : publicPemPath);
   }


  export async function verify(token:string):Promise<any> {
    const jwtVerityAsync = PromiseB.promisify(jwt.verify);
    const cert = await  loadSslFile(false);
    return jwtVerityAsync(token, cert);
  }
