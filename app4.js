let products = [
    {
        name: "I5-13400f",
        price: 4500,
        discount: 10,
    },
    {
        name: "I3-14400f",
        price: 3000,
        discount: 15,
    },
    {
        name: "I7-14700f",
        price: 9000,
        discount: 25,
    },
    {
        name: "I5-14400f",
        price: 5500,
        discount: 15,
    },
    {
        name: "I5-14600kf",
        price: 6300,
        discount: 20,
    },

];

function showProductCount() {

    products.forEach(product => {
        let discountAmount = (product.price * product.discount) / 100;
        let finalPrice = product.price - discountAmount;

        console.log(`สินค้า: ${product.name}`);
        console.log(`ราคาเดิม: ${product.price} บาท`);
        console.log(`ส่วนลด: ${product.discount}%`);
        console.log(`ราคาหลังหักส่วนลด: ${finalPrice} บาท`);
        console.log("-------------------------------------");
    });
}

function showProductSummary() {
    let productCount = products.length;
    let totalPrice = 0;

    products.forEach(product => {
        let discountAmount = (product.price * product.discount) / 100;
        let finalPrice = product.price - discountAmount;
        totalPrice += finalPrice;
    });

    console.log(`จำนวนทั้งหมด: ${productCount} ชิ้น`);
    console.log(`ราคารวมสุทธิหลังส่วนลด: ${totalPrice} บาท`);
    console.log("==========================================");
}
showProductCount();
showProductSummary();