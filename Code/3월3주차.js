// 배열 계절 저장
const sp = "spring";
const sm = "summer";
const fl = "fall";

const se = ["따뜻한 겨울", "여름", "서늘한 겨울", "겨울"];
console.log(se[0]);

const num = 15/2;
const num2 = 15%2;
console.log(parseInt(num));
console.log(num2)

console.log(3 == '3')
console.log(3 === '3')

let sum = 0;
// 그냥 하는건가 1000까지 더하는거
for(let a=1;a<1001;a++){
    sum += a;
}
console.log(sum);
/*
for(let _=1;_<=9;_++){
    for(let __=1;__<=9;__++){
        console.log(_ + " x " + __ + " = " + _ * __);
    }
    console.log("----------");
    if(__ === 3) break;
}
*/

function add(a, b){
    const addsum = a + b;
    return addsum;
}

const sum1 = add(1, 2);
console.log(sum1);

const sum2 = () => {
    const result = 3;
    console.log(result);
}

const minus = function(c, d) {
    return c-d;
}

const minus2 = (e, f) => {
    const resultMinus = e - f;
    return resultMinus;
}
console.log(minus2(5, 2));