"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Module */
class App {
    constructor(params) {
        if (!params) {
            throw new Error('Application parameters was not provided.');
        }
        if (!params.appInfo) {
            throw new Error('Application informations was not provided.');
        }
        if (!params.config) {
            throw new Error('Application configuration was not provided.');
        }
        this.appInfo = params.appInfo;
        this.appConfig = params.config;
        this.appConnectionName = params.connectionName;
        this.appDb = params.db;
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
