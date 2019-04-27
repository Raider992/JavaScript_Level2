"use strict";


class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    render() {
        return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}


class GoodsList {
    constructor() {
        this.goods = [];
    }


    fetchGoods() {
        this.goods = [
            {title: 'Shirt', price: 150},
            {title: 'Socks', price: 50},
            {title: 'Jacket', price: 350},
            {title: 'Shoes', price: 250},
        ];
    }

    countTotalPrice() {
        let price = 0;
        this.goods.forEach(good => {
            price += good.price;
        });
        console.log(price);//чтоб показать, что работает
        return price;
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}

class Basket {
    constructor() {
        this.items = [];
    }

    addItem(){}           //мы будем добавлять элементы в корзину

    removeItem(){}        //и удалять их из неё, если не подошли

    countTotalPrice(){}   //подсчёт общей стоимости товаров

    countTotalNumber() {} //подсчитать общее число предметов в корзине

    submitAndBuy(){}      //не уверен, будем ли мы это реализовать в курсе, но должна же быть у корзины кнопка "оформить заказ"

    render() {}           //это всё, конечно, нужно отрисовывать
}

class basketItem {
    constructor(title, price, quantity) {
        this.title = title;
        this.price = price;
        this.quantity = quantity;
    }

    render() {
        return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p><p>${this.quantity}</p></div>`;
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.countTotalPrice();