import Commit from './commit';
import { Compare, Priority } from '../utils/enums';

export enum Position {
    Header = 1,
    Body = 2,
    Footer = 3,
    Group = 4,
    Subsection = 5,
}

export default class Section {
    public readonly title: string;

    private position: Position;
    private priority = Priority.Default;
    private commits: Map<string, Commit> = new Map();
    private sections: Map<string, Section> = new Map();

    public constructor(title: string, position: Position) {
        this.title = title;
        this.position = position;
    }

    public static compare(a: Section, b: Section): number {
        let result = a.getPosition() - b.getPosition() || a.getPriority() - b.getPriority();

        if (result === Compare.Equal) result = a.title.localeCompare(b.title);

        return result;
    }

    public setPosition(position: Position): void {
        this.position = position;
    }

    public getPosition(): Position {
        return this.position;
    }

    public getSections(sort: boolean = true): Section[] {
        const sections = [...this.sections.values()];

        return sort ? sections.sort(Section.compare) : sections;
    }

    public getCommits(sort: boolean = true): Commit[] {
        const commits = [...this.commits.values()];

        return sort ? commits.sort((a, b): number => a.timestamp - b.timestamp) : commits;
    }

    public isEmpty(): boolean {
        return !this.sections.size && !this.commits.size;
    }

    public assign(entity: Commit | Section): void {
        if (entity instanceof Commit) this.assignEntity(entity.hash, entity, this.commits);
        if (entity instanceof Section) {
            this.assignEntity(entity.title, entity, this.sections);
            entity.setPosition(Position.Subsection);
        }
    }

    public remove(entity: Commit | Section): void {
        if (entity instanceof Commit) this.removeEntity(entity.hash, this.commits);
        if (entity instanceof Section) {
            this.removeEntity(entity.title, this.sections);
            entity.setPosition(Position.Group);
        }
    }

    public getPriority(): number {
        if (this.priority === Priority.Default) {
            this.priority = this.getCommits().reduce(
                (acc, commit): number => acc + commit.getPriority(),
                Priority.Default
            );
        }

        return this.priority;
    }

    private assignEntity<T>(key: string, value: T, map: Map<string, T>): void {
        if (!map.has(key)) {
            map.set(key, value);
            this.priority = Priority.Default;
        }
    }

    private removeEntity<T>(key: string, map: Map<string, T>): void {
        if (map.has(key)) {
            map.delete(key);
            this.priority = Priority.Default;
        }
    }
}
