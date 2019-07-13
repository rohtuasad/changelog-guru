import Commit from '../entities/commit';
import Plugin from '../entities/plugin';
import { ConfigurationOptions } from '../entities/config';
import Key from '../utils/key';
import { Option, OptionValue } from '../utils/types';
import Section, { Position } from '../entities/section';

export interface Configuration extends ConfigurationOptions {
    sections: Option;
}

export default class SectionPlugin extends Plugin {
    private blocks: Map<string, Section> = new Map();

    public async init(config: Configuration): Promise<void> {
        const { sections } = config;

        if (Array.isArray(sections)) {
            sections.forEach((block): void => {
                if (typeof block === 'object') {
                    Object.keys(block).forEach((name: string): void => {
                        const types: OptionValue = block[name];

                        if (Array.isArray(types)) {
                            const section = this.context.addSection(name, Position.Body);

                            types.forEach((type: string): void => {
                                this.blocks.set(Key.unify(type), section);
                            });
                        }
                    });
                }
            });
        }
    }

    public async parse(commit: Commit): Promise<void> {
        const type = commit.getType();

        if (type) {
            const section = Key.inMap(type, this.blocks);

            if (section) section.assign(commit);
        }
    }
}
