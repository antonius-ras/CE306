let product = 1300;
let discount = 50;

let pricebf = (product*discount)/100
let priceaf = product-pricebf

if (priceaf <= 0) {
    console.log("ราคา 0 บาท")
}
if (priceaf <= 500) {
    let morepay = priceaf+50;
    console.log("ราคา", morepay,"บาท");
}
if (priceaf > 500) {
    let discountmore = priceaf+(priceaf*0.1);
    console.log("ราคา",discountmore,"บาท")
}