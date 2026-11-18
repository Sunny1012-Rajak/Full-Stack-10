// ------------------------question 1----------------
const marks=[34,56,78,98,56];
console.log("original marks: "+marks);

const map=marks.map((square)=>
{
    return square*square;
})
console.log(map);

const map1=marks.map((value,index)=>
{
    return `${index+1}:${value * value}`
});
console.log(map1);

// --------------------------question 2---------------

const product =["laptop","pendrive","joystick","trackpad","monitor"];
const price =[1000,300,2000,4000,5000];
console.log(`${product}:${price}`);

const tax= price.map((value)=>
{
    return value+(value * 18 / 100);
});
console.log(tax);


const result = product.map((value, index) => {
    return `${value} - Original Price: ₹${price[index]}`;
});
console.log(result);



