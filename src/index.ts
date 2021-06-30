import AppInfo from './interfaces/appInfo';

/* Module */
class App {
    private readonly appInfo: AppInfo;
    private readonly appConfig: any;
    private readonly components: any = {};

    public constructor(params: {
        appInfo: AppInfo;
        config: any;
    }) {
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

    public get info(): AppInfo {
        return this.appInfo;
    }

    public get config(): any {
        return this.appConfig;
    }

    public add(name: string, component: any): void {
        this.components[name] = component;
    }

    public get(name: string): any {
        return this.components[name] ? this.components[name] : undefined;
    }
}

export default App;
export { AppInfo };
