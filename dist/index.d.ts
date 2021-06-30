import AppInfo from './interfaces/appInfo';
declare class App {
    private readonly appInfo;
    private readonly appConfig;
    private readonly components;
    constructor(params: {
        appInfo: AppInfo;
        config: any;
    });
    get info(): AppInfo;
    get config(): any;
    add(name: string, component: any): void;
    get(name: string): any;
}
export default App;
export { AppInfo };
