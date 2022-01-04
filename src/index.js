import Tags from './Tags';
import Visitor from './Visitor';

export default function remarkTelegraphPlugin() {
    const visitor = new Visitor(Tags);

    function Compiler(tree) {
        return JSON.stringify(visitor.visit(tree));
    }

    Object.assign(this, { Compiler });
}

export {
    Visitor,
    Tags
};
