import path from 'path';
import remarkParse from 'remark-parse';
import unified from 'unified';
import { entry } from './constants';

export function load(relPath, clearCache) {
    const absPath = path.resolve(entry, relPath);

    if (clearCache) delete require.cache[require.resolve(absPath)];
    // eslint-disable-next-line security/detect-non-literal-require
    const result =  require(absPath);

    if (clearCache) delete require.cache[require.resolve(absPath)];

    return result;
}

export function resolve(relPath) {
    return require.resolve(path.join(entry, relPath));
}

export class PluginTester {
    constructor(plugin) {
        this.plugin = plugin;
    }

    async getContent(markdown) {
        return unified()
            .use(remarkParse)
            .use(this.plugin)
            .process(markdown);
    }
}
