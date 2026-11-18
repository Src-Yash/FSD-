
function map(arr,call){
    let res=[];

    for(let i=0; i<arr.length;i++){
        res.push(call(arr[i],i,arr));
    }
    return res;
}

let ArrNum=[1,2,3,4,5];

function square(num){
    return num*num;
}

let newArray = map(ArrNum,square);

console.log("Original ->", ArrNum);
console.log("New Array ->", newArray);
