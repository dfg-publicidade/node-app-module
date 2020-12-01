import { Db } from 'mongodb';
import AppInfo from './interfaces/appInfo';

/* Module */
class App {
    private readonly appInfo: AppInfo;
    private readonly appConfig: any;
    private readonly appConnectionName: string;
    private readonly appDb: Db;

    public constructor(params: {
        appInfo: AppInfo;
        config: any;
        connectionName: string;
        db: Db;
    }) {
        this.appInfo = params?.appInfo;
        this.appConfig = params?.config;
        this.appConnectionName = params?.connectionName;
        this.appDb = params?.db;
    }

    public get info(): AppInfo {
        return this.appInfo;
    }

    public get config(): any {
        return this.appConfig;
    }

    public get connectionName(): string {
        return this.appConnectionName;
    }

    public get db(): Db {
        return this.appDb;
    }
}

export default App;
