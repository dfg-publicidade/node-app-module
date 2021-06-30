"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Module */
class App {
    constructor(params) {
        this.components = {};
        if (!params) {
            throw new Error('Application parameters was not provided.');
        }
        if (!params.appInfo || !params.appInfo.name || !params.appInfo.version) {
            throw new Error('Application informations was not provided.');
        }
        if (!params.config) {
            throw new Error('Application configuration was not provided.');
        }
        this.appInfo = params.appInfo;
        this.appConfig = params.config;
    }
    get info() {
        return this.appInfo;
    }
    get config() {
        return this.appConfig;
    }
    add(name, component) {
        this.components[name] = component;
    }
    get(name) {
        return this.components[name] ? this.components[name] : undefined;
    }
}
exports.default = App;
