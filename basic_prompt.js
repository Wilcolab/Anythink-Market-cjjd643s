function camelcase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map((word, idx) =>
            idx === 0
                ? word
                : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join('');
}

// Example usage:
// console.log(camelcase("i love you")); // Output: iLoveYou