import { OptionDefinition, CommandLineOptions } from 'command-line-args';
import { ChangelogOptions } from '../typings/types';

export enum CommandType {
    String = 1,
    Number = 2,
    Boolean = 3,
    List = 4,
}

export abstract class Command {
    public readonly name: string;
    public readonly description: string;
    public readonly alias?: string;

    protected changelogOptions: ChangelogOptions = {
        types: new Map(),
        exclusions: new Map(),
        provider: undefined,
        filePath: undefined,
        bump: undefined,
        branch: undefined,
    };

    private options: Map<string, [string, CommandType]> = new Map();
    private defaultOption: [string, string, CommandType] | undefined = undefined;

    public constructor(name: string, alias: string, description: string) {
        this.name = name;
        this.alias = alias;
        this.description = description;
    }

    public static getDefinition(name: string, type: CommandType, defaultOption?: boolean): OptionDefinition {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let typeCallback: ((str: string) => any) | undefined;
        let multiple = false;

        switch (type) {
            case CommandType.Boolean:
                typeCallback = Boolean;
                break;
            case CommandType.String:
                typeCallback = String;
                break;
            case CommandType.Number:
                typeCallback = Number;
                break;
            case CommandType.List:
                typeCallback = String;
                multiple = true;
                break;
            default:
                typeCallback = undefined;
                break;
        }

        return {
            name,
            multiple,
            defaultOption,
            type: typeCallback,
        };
    }

    public isMatched(name: string): boolean {
        return name === this.name || name === this.alias;
    }

    public setOption(name: string, description: string, type: CommandType = CommandType.String): void {
        this.options.set(name, [description, type]);
    }

    public setDefaultOption(name: string, description: string, type: CommandType = CommandType.String): void {
        this.defaultOption = [name, description, type];
    }

    public getDefinitions(): OptionDefinition[] {
        const definitions = [];

        if (this.defaultOption) {
            const [name, , type] = this.defaultOption;

            definitions.push(Command.getDefinition(name, type, true));
        }

        this.options.forEach(([, type], name): void => {
            definitions.push(Command.getDefinition(name, type));
        });

        return definitions;
    }

    public abstract async execute(options: CommandLineOptions): Promise<void>;
}
