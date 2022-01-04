import { isFunction, isString, isObject } from 'myrmidon';

export default class Visitor {
    constructor(tags) {
        this.tags = tags;
    }

    visit = (node) => {
        const result = {};
        const handler = this.tags[node.type];

        if (handler) {
            if (isFunction(handler)) {
                const parsed = handler(node);

                if (isObject(parsed)) {
                    Object.assign(result, parsed);
                }

                if (isString(parsed)) return parsed;
            }

            if (isString(handler)) {
                result.tag = handler;
            }
        }

        if (node.children) {
            result.children = node.children.map(n => this.visit(n));
            if (node.type === 'root') return result.children;
        }

        return result;
    }
}
