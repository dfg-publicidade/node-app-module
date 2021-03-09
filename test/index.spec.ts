import { expect } from 'chai';
import { describe, it } from 'mocha';
import { MongoClient } from 'mongodb';
import App, { AppInfo } from '../src/index';

/* Tests */
describe('index.ts', (): void => {
    it('constructor (incomplete)', async (): Promise<void> => {
        const app: App = new App(undefined);

        expect(app).to.exist;
        expect(app.info).to.not.exist;
        expect(app.config).to.not.exist;
        expect(app.connectionName).to.not.exist;
        expect(app.db).to.not.exist;
    });

    it('constructor', async (): Promise<void> => {
        const appInfo: AppInfo = {
            name: 'test',
            version: 'v1'
        };

        if (!process.env.MONGO_TEST_URL) {
            throw new Error('MONGO_TEST_URL must be set');
        }

        const client: MongoClient = await MongoClient.connect(process.env.MONGO_TEST_URL, {
            poolSize: 1,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const config: any = {
            test: 1,
            test2: 2
        };

        const app: App = new App({
            appInfo,
            config,
            connectionName: 'testConnection',
            db: client.db()
        });

        expect(app).to.exist;

        expect(app.info).to.exist;
        expect(app.info.name).to.exist;
        expect(app.info.name).to.be.eq('test');
        expect(app.info.version).to.exist;
        expect(app.info.version).to.be.eq('v1');

        expect(app.config).to.exist;
        expect(app.config).to.be.deep.eq(config);

        expect(app.connectionName).to.exist;
        expect(app.connectionName).to.be.eq('testConnection');

        expect(app.db).to.exist;
        expect(app.db.collection('test')).to.be.ok;

        await client.close();
    });
});
