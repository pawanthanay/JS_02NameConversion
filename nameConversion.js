let btn = document.getElementById("convert-btn");
btn.onclick = convert;

function convert(){
    let name = document.getElementById("text").value;
    cc = camelCase(name);
    document.getElementById("camel-case").innerHTML = cc;
    pc = pascalCase(name);
    document.getElementById("pascal-case").innerHTML = pc;
    sc = snakeCase(name);
    document.getElementById("snake-case").innerHTML = sc;
    ssc = screamingSnakeCase(name);
    document.getElementById("screaming-snake-case").innerHTML = ssc;
    kc = kebabCase(name);
    document.getElementById("kebab-case").innerHTML = kc;
    skc = screamingKebabCase(name);
    document.getElementById("screaming-kebab-case").innerHTML = skc;
}

function camelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index)
    {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}

function pascalCase(str) {
    return str.replace(/(\w)(\w*)/g,
                function(g0,g1,g2){return g1.toUpperCase() + g2.toLowerCase();});
}

function snakeCase(str) {
    return str &&
           str
            .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(x => x.toLowerCase())
            .join('_');
}

function screamingSnakeCase(str) {
    return str &&
           str
            .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(x => x.toUpperCase())
            .join('_');
}

function kebabCase(str) {
    return str &&
           str
            .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(x => x.toLowerCase())
            .join('-');
}

function screamingKebabCase(str) {
    return str &&
           str
            .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(x => x.toUpperCase())
            .join('-');
}


