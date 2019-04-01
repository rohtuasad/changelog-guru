import Author from './author';
import Modifier from './modifier';
import Process from '../utils/process';

export default class Commit {
    public readonly header: string;
    public readonly body: string[];
    public readonly modifiers: Modifier[] = [];
    public readonly timestamp: number;

    private url: string;
    private author: Author;
    private types: string[] = [];
    private scope: string = '';
    private priority: number = 0;
    private breaking: boolean = false;
    private deprecated: boolean = false;
    private visible: boolean = true;

    constructor(timestamp: number, message: string, url: string, author: Author) {
        this.timestamp = timestamp;

        let lines = message.split('\n').map(line => line.trim());

        this.header = lines.shift() || '';
        this.body = lines;
        this.url = url;
        this.author = author;
        this.author.contribute();

        const match = this.header.match(/(?<type>[a-z, ]+) {0,1}(\((?<scope>[a-z,]+)\)){0,1}(?=:)/i);
        if (match && match.groups) {
            if (match.groups.types) {
                this.types = match.groups.types.split(',').map(type => type.trim());
            }

            if (match.groups.scope) {
                this.scope = match.groups.scope;
            }
        }
    }

    public break() {
        this.breaking = true;
        this.increasePriority();
    }

    public deprecate() {
        this.deprecated = true;
        this.increasePriority();
    }

    public hide() {
        if (!this.isImportant()) {
            this.visible = false;
        }
    }

    public increasePriority() {
        this.priority++;
    }

    public isBreaking(): boolean {
        return this.breaking;
    }

    public isDeprecated(): boolean {
        return this.deprecated;
    }

    public isImportant(): boolean {
        return this.isBreaking() && this.isDeprecated();
    }

    public isVisible(): boolean {
        return this.visible
    }

    public isValid(): boolean {
        return !!this.header.length;
    }

    /**
        @see https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines

        -----------------------commit-----------------------
        <type>(<scope>): <subject>
        [<flags>]
        <body>

        <footer>
        ----------------------------------------------------
    */
}
