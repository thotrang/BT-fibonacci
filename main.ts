
function F(n:number):number{
    if(n==0) return 0;
    else if(n==1) return 1;
    else return F(n-1)+F(n-2);
}

function tinhTong(x:number):number{
    let sum=0;
    for(let i=0;i<x;i++){
        sum+=F(i);
    }
    return sum;
}
// let x= 10 //độ dài dãy số fibonacci
const x = require("prompt-sync")({ sigint: true });
const n:number = +(x("nhập độ dài dãy số fibonacci "));
 
console.log(tinhTong(n));

