const changeImage = (link) => {
    const img = document.getElementById('samsung-s22');
    const s22White = '../../img/page_shop_single_product/view.png';
    const s22Green = '../../img/page_shop_single_product/s22-xanh.png';
    const s22Pink = '../../img/page_shop_single_product/s22-hong.jpg';
    if (link === '1') {
        img.src = s22White;

    } else if (link === '2') {
        img.src = s22Green;
    }
    else {
        img.src = s22Pink;
    }
};

const showCount = document.getElementById('cart__quantity--number')
console.log(showCount)
let count = 1;

const increase = () => {
    count += 1;
    console.log(count)
    showCount.innerText = count;
};

const reduce = () => {
    if (count <= 1) {
        count = 1;
    } else {

        count -= 1;
    }
    console.log(count)
    showCount.innerText = count;
};

