let colonPosition = "0";
let dashPosition = "0";
function getSupplier(code){
    colonPosition = code.indexOf(":");
    return code.substring(0, colonPosition);
}
function getProductNum(code){
    dashPosition = code.indexOf("-");
    return code.substring(colonPosition + 1, dashPosition);
}
function getSize(code){
    return code.substring(dashPosition + 1)
}
let sample1 = "ACME:123-L";
let sample2 = "DI:12345-M";
let sample3 = "ACE:1-12";
console.log("Supplier Code: " + getSupplier(sample1));
console.log("Product Number: " + getProductNum(sample1));
console.log("Size : " + getSize(sample1));
console.log("Supplier Code: " + getSupplier(sample2));
console.log("Product Number: " + getProductNum(sample2));
console.log("Size : " + getSize(sample2));
console.log("Supplier Code: " + getSupplier(sample3));
console.log("Product Number: " + getProductNum(sample3));
console.log("Size : " + getSize(sample3));