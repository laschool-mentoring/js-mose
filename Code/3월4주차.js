console.log("Today's Mentoring is : March 4th week");
const fruits = ["Apple", "Pear", "Tangerine"];
console.log(fruits[2]);
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
//과일
const line = () => {
    console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
}
//라인


for(let i=2;i<=9;i++)
{
    for(let j=2;j<=9;j++)
{
    console.log(j + ' x ' + i + ' = ' +  j*i);
}
console.log("ㅡㅡㅡ")
}
line();
//구구단 1


for(let i=2;i<=9;i++)
{
    for(let j=2;j<=9;j++)
{
    console.log(i + ' x ' + j + ' = ' + j*i);
    
}
console.log("ㅡㅡㅡ")
if(i === 3) break;
}
line();
//구구단 2

let a = 1, b = 1;
while(a <= 19)
{
    b = 1;
    while(b <= 19)
    {
        console.log(a + ' x ' + b + ' = ' + a*b);
        b++;
    }
    console.log("ㅡㅡㅡ")
    a++;
}
line();
//십구단

const GGD = (_,__) => {
    let p = 1, q = 1;
    while(p <= _)
{
    q = 1;
    while(q <= __)
    {
        console.log(p + ' x ' + q + ' = ' + p*q);
        q++;
    }
    console.log("ㅡㅡㅡ")
    p++;
}
}
line();
//함수화

GGD(23, 5);

//생존함