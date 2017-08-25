"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by ybc on 2017/8/25.
 */
const path = require("path");
const jwt = require("jsonwebtoken");
const PromiseB = require("bluebird");
const fs = require("fs");
function loadSslFile(isPrivate) {
    return __awaiter(this, void 0, void 0, function* () {
        let privateKeyPath;
        let publicPemPath;
        const sslFilePath = path.join(__dirname, "../", "config", "ssl");
        privateKeyPath = path.join(sslFilePath, "private.key");
        publicPemPath = path.join(sslFilePath, "public.pem");
        var readFileAsync = PromiseB.promisify(fs.readFile);
        return yield readFileAsync(isPrivate ? privateKeyPath : publicPemPath);
    });
}
exports.loadSslFile = loadSslFile;
function verify(token) {
    return __awaiter(this, void 0, void 0, function* () {
        const jwtVerityAsync = PromiseB.promisify(jwt.verify);
        const cert = yield loadSslFile(false);
        return jwtVerityAsync(token, cert);
    });
}
exports.verify = verify;
//# sourceMappingURL=Utils.js.map