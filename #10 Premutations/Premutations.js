str = 'ABC';
let findPremutations = (str) => {
    if (str.length < 2) {
        return str;
    }

    let res = [];

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        let chars = str.slice(0, i) + str.slice(i + 1, str.length);

        for (let permutation of findPremutations(chars)) {
            res.push(char + permutation);
        }
    }
    return res;
}
console.log(findPremutations(str));

