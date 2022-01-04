const Tags = {
    text : node => node.value,

    softbreak        : 'br',
    linebreak        : 'br',
    'thematic_break' : 'br',

    emph   : 'em',
    strong : 'strong',

    link  : node => ({ tag: 'a', attrs: { href: node.url } }),
    image : node => ({ tag: 'img', attrs: { href: node.url } }),

    code : node => ({ tag: 'code', children: node.value }),

    'block_quote' : 'blockquote',

    heading : node => ({ tag: node.depth === 1 ? 'h3' : 'h4' }),
    list    : node => ({ tag: node.ordered ? 'ol' : 'ul' }),

    listItem  : 'li',
    paragraph : 'p'

};

export default Tags;
