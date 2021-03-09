import chai, { Chai } from 'chai';
import { describe, it } from 'mocha';
import App from '../src/index';

/* Tests */
const expect: Chai.ExpectStatic = chai.expect;

describe('index.ts', (): void => {
    it('constructor', async (): Promise<void> => {
        const app: App = new App({
            appInfo: undefined,
            config: undefined,
            connectionName: undefined,
            db: undefined
        });
    });
});
