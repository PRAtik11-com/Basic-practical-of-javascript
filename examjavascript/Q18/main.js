function filter(arr) {
    return arr.filter(a => a % 2 === 0);
}
const arr1 = [10, 50, 55 , 65 , 78 , 45];
const ans = filter(arr1);
console.log(ans);