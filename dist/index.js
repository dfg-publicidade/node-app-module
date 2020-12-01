"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Module */
class App {
    constructor(params) {
        this.appInfo = params === null || params === void 0 ? void 0 : params.appInfo;
        this.appConfig = params === null || params === void 0 ? void 0 : params.config;
        this.appConnectionName = params === null || params === void 0 ? void 0 : params.connectionName;
        this.appDb = params === null || params === void 0 ? void 0 : params.db;
    }
    get info() {
        return this.appInfo;
    }
    get config() {
        return this.appConfig;
    }
    get connectionName() {
        return this.appConnectionName;
    }
    get db() {
        return this.appDb;
    }
}
exports.default = App;
