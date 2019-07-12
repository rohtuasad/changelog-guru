import Scope, { Config as ScopeConfig } from '../../src/plugins/scope';
import { TestContext } from '../mocks/context.mock';
import { Config } from '../../src/entities/config';
import Commit from '../../src/entities/commit';

const context = new TestContext();

describe('Scope', (): void => {
    it('Any scopes', (done): void => {
        const config = new Config();

        config.load().then((): void => {
            const plugin = new Scope(context);
            const commit = new Commit('b816518030dace1b91838ae0abd56fa88eba19f1', {
                timestamp: 0,
                message: `feat(Core, Jest 1, Jest 2): subject`,
                url: 'https://github.com/keindev/changelog-guru/commit/b816518030dace1b91838ae0abd56fa88eba19f1',
                author: 'keindev',
            });

            plugin.init(config.getOptions() as ScopeConfig);
            plugin.parse(commit);

            expect(commit.getAccents()).toStrictEqual(['Core', 'Jest 1', 'Jest 2']);

            done();
        });
    });

    it('Strict scopes', (done): void => {
        const config = new Config();

        config.load().then((): void => {
            const plugin = new Scope(context);
            const options = config.getOptions();
            const commit = new Commit('b816518030dace1b91838ae0abd56fa88eba19f1', {
                timestamp: 0,
                message: `feat(Core, Jest 1, Jest 2): subject`,
                url: 'https://github.com/keindev/changelog-guru/commit/b816518030dace1b91838ae0abd56fa88eba19f1',
                author: 'keindev',
            });

            (options as ScopeConfig).scopes.only = true;

            plugin.init(options as ScopeConfig);
            plugin.parse(commit);

            expect(commit.getAccents()).toStrictEqual(['Core']);

            done();
        });
    });
});
