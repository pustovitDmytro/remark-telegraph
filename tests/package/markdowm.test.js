
import path from 'path';
import fs from 'fs-extra';
import { PluginTester, load } from '../utils';
import { testsRootFolder } from '../constants';
import { assert } from 'chai';

const plugin = new PluginTester(load('.').default);

const examplesFolder = path.join(testsRootFolder, './examples');

suite('Markdown');

const examples = [
    'markdown-it'
]

for( const example of examples) {
    test(example, async function () {
        const name = example;
        const md = await fs.readFile(path.join(examplesFolder, `${name}.md`));
        const content = await plugin.getContent(md);
        assert.isNotEmpty(content.contents, example);
        assert.isNotEmpty(JSON.parse(content.contents))
        assert.deepEqual(
            JSON.parse(content.contents), 
            await fs.readJSON(path.join(examplesFolder, `${name}.json`)),
            example
        )
    });
}
