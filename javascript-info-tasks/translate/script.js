function Camelize(text) {
    return text
        .split('-')
        .map(
            (index, word) => console.log(index, word)
        );
}

console.log(Camelize('-webkit-transition'));