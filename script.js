"use strict";
const goods = [
    {title: 'Shirt', price: 150},
    {title: 'Socks', price: 50},
    {title: 'Jacket', price: 350},
    {title: 'Shoes', price: 250},
];

const goodList = {

    renderGoodsItem(title = 'Nothing', price = 0) {
        return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
    },

    renderGoodsList(list) {
        document.querySelector('.goods-list').innerHTML = list.map(item => this.renderGoodsItem(item.title, item.price)).join('');
    }
};
goodList.renderGoodsList(goods);
