import path from 'path';
import { State } from '../../../src/entities/state';

export class MockState extends State {
    public static MOCK_PLUGIN_NAME = 'plugin.mock';
    public static MOCK_PLUGIN_EXTENSION = 'ts';

    public constructor() {
        super();

        this.pluginsPath = path.resolve(__dirname, '../plugins');
        this.pluginsExtension = MockState.MOCK_PLUGIN_EXTENSION;
    }
}