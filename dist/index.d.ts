import { Db } from 'mongodb';
import AppInfo from './interfaces/appInfo';
declare class App {
    private readonly appInfo;
    private readonly appConfig;
    private readonly appConnectionName;
    private readonly appDb;
    constructor(params: {
        appInfo: AppInfo;
        config: any;
        connectionName: string;
        db: Db;
    });
    get info(): AppInfo;
    get config(): any;
    get connectionName(): string;
    get db(): Db;
}
export default App;
export { AppInfo };
