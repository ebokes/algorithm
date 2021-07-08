function capitalize(sentence) {
    const words = sentence.split(' ');
    const upperCasedWord = [];
    for (word of words) {
        upperCasedWord.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
    return upperCasedWord.join(' ');
}
console.log(capitalize("How can mirrors be real if our eyes aren't real"));