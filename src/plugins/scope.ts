import Commit from '../entities/commit';
import Plugin from '../entities/plugin';
import { ConfigOptions } from '../entities/config';
import { Option } from '../utils/types';
import Key from '../utils/key';

interface Config extends ConfigOptions {
    scopes: {
        only: boolean | undefined;
        list: Option;
    };
}

export default class ScopePlugin extends Plugin {
    private scopes: Map<string, string> = new Map();
    private onlyConfigured: boolean = false;

    public async init(config: Config): Promise<void> {
        const { scopes } = config;

        if (typeof scopes === 'object') {
            const { only, list } = scopes;

            this.onlyConfigured = !!only;

            if (typeof list === 'object') {
                Object.keys(list).forEach(
                    (name: string): void => {
                        const title = list[name];

                        if (typeof title === 'string' && !this.scopes.has(name)) {
                            this.scopes.set(Key.unify(name), title);
                        }
                    }
                );
            }
        }
    }

    public async parse(commit: Commit): Promise<void> {
        const scope: string | undefined = commit.getScope();

        if (scope) {
            const { scopes, onlyConfigured } = this;
            let accent = Key.inMap(scope, scopes);

            if (!accent && !onlyConfigured) accent = scope;
            if (accent) commit.addAccent(accent);
        }
    }
}