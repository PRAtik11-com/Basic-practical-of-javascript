function just(two) {
    return two.reduce((acc, curr) => acc * curr, 1);
}
const arr1 = [1,2,3,4,5,6,7]
let ans = just(arr1)
console.log(ans);
