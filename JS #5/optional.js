let object1 = {
    x: 0,
    y: 1,
    z: 2,
};

let object2 = {
    x: 0,
    y: 1,
    z: 3,
    a: 1,
    b: 2,
};

function intersect(first, ...rest) {
    return rest.reduce((acc, obj) => {
        return Object.fromEntries(
            Object.entries(acc).filter(
                ([key, value]) => {
                    return (
                        key in obj && value === obj[key]
                    );
                })
        );
    }, first);
}
console.log(intersect(object1, object2));