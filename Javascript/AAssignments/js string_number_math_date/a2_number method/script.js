
// --------------------------numbers----------------------------

const marks="89";
const fee="9000.443";
console.log("parseint: "+parseInt(marks));
console.log("parsefloat: "+parseFloat(fee));
console.log("isinteger: "+marks.isI);
console.log("isfinite: "+isFinite(999999999999));
console.log("issafeinteger: "+Number.isSafeInteger(fee));

const percent=234.56;
console.log("tofixed: "+percent.toFixed(0));
console.log("toprecision: " +percent.toPrecision(1));
console.log("toexponential: "+percent.toExponential(2));
console.log("tostring: "+percent.toString());
console.log("tolocalstring: "+percent.toLocaleString("en-IN"));
console.log("tolocalstring: "+percent.toLocaleString("en-IN",
     {
    style: "currency",
    currency: "INR"
    } )
);