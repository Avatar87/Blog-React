import '../css/main.css';

class Developer {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHi() {
    return `Имя разработчика: ${this.firstName} ${this.lastName}`;
  }
}
var Dev1 = new Developer('Bogdan', 'Nechaenko');

function Basket(id) {
    this.id = id;
    this.countGoods = 0; // Количество товаров в корзине
    this.amount = 0; // Общая стоимость товаров
    this.basketItems = []; // Товары, которые находятся в корзине

    this.getBasket()
}

/**
 * Отрисовка корзины
 * @param root - Контейнер под корзину
 */
Basket.prototype.render = function(root) {
    var basketDiv = $('<div />', {
        id: this.id,
        text: 'Корзина'
    });

    var basketItemsDiv = $('<div />', {
        id: this.id + '_items'
    });


    basketItemsDiv.appendTo(basketDiv);

    basketDiv.appendTo(root);
};

/**
 * Получение товаров с сервера (из JSON файла)
 */
Basket.prototype.getBasket = function() {
    var appendId = '#' + this.id + '_items';

    // Способ 1
    // var self = this;

    $.get({
        url: './basket.json',
        dataType: 'json',
        context: this, // Способ 2
        success: function(data) {
            // console.log(this); // Что здесь выведется?
            var basketData = $('<div />', {
                id: 'basket_data'
            });

            this.countGoods = data.basket.length;
            this.amount = data.amount;
            this.basketItems = data.basket;

            // Вывод информации в DOM
            basketData.appendTo(appendId);

            // Перерисовка корзины
            this.refresh();
        },
        error: function(error) {
            console.error('Ошибка получения корзины', error.status, error.statusText);
        }
    });
};

/**
 * Метод добавления товара в корзину
 * @param idProduct - ID товара
 * @param price - Цена товара
 */
Basket.prototype.add = function(name, idProduct, price) {
    var basketItem = {
        name: name,
        id_product: idProduct,
        price: price
    };

    this.countGoods++;
    this.amount += price;
    this.basketItems.push(basketItem);

    // Перерисовка корзины
    this.refresh();
};

Basket.prototype.delete = function(idProduct) {
    for (var i in this.basketItems) {
        console.log(this.basketItems);
        if (this.basketItems[i].id_product == idProduct) {
            var removed = this.basketItems[i].price;
            this.basketItems.splice(i, 1);
            this.countGoods > 0 ? this.countGoods-- : console.log('В корзине нет товаров!');
            this.amount -= removed;
            break;
        }
    }
    this.refresh();
};

/**
 * Метод перерисовки корзины
 */
Basket.prototype.refresh = function() {
    var basketDataDiv = $('#basket_data');
    basketDataDiv.empty();
    basketDataDiv.append('<p>Всего товаров: ' + this.countGoods + '</p>');
    for (var i of this.basketItems) {
        basketDataDiv.append('<p>' + i.name + '</p>');
        var basketdelete = $('<button />', {
            class: "deleteitem",
            dataid: i.id_product,
            text: 'Удалить товар'
        });
        basketDataDiv.append(basketdelete);
    }

    basketDataDiv.append('<p>Сумма: ' + this.amount + ' руб.</p>');
    if (this.basketItems.length > 0)
        basketDataDiv.append('<input type = "submit" id = "submit" value = "Оформить заказ">');
};

$(document).ready(function() {
        $('#first').append("<button id = 'devbutton'> Имя разработчика </button>");
        $('#devbutton').on('click', function() {
            $('#first').append(Dev1.sayHi() + ' ');
        })
        $('#second').append("<button id = 'datebutton'>Текущая дата</button>");
        $('#datebutton').on('click', function() {
            let today = new Date();
            let dd = today.getDate();
            let mm = today.getMonth()+1;
            let yyyy = today.getFullYear();
            if(dd<10) {
                dd = '0'+dd
            } 
            if(mm<10) {
                mm = '0'+mm
            }
            today = dd + '/' + mm + '/' + yyyy + ' ';
            $('#second').append(today);
        })
        var basket = new Basket('basket')
        basket.render('#basket_wrapper');

        $('.good_buy').on('click', function() {
            var idProduct = parseInt($(this).attr('data-id'));
            var price = parseInt($(this).parent().find('.product-price').text());
            var name = $(this).attr('name');
            basket.add(name, idProduct, price);
        })
        $(document).on('click', '.deleteitem', function() {
            var idProduct = parseInt($(this).attr('dataid'));
            basket.delete(idProduct);
        })

        $(".good").draggable({ stack: "#basket_wrapper", helper: "clone" });
        $("#basket_wrapper").droppable({
            accept: ".good",
            over: function() {
                $("#basket_wrapper").css("background-color", "#F3E2A9");
            },
            out: function() {
                $("#basket_wrapper").css("background-color", "#ffffff");
            },
            drop: function() {
                $(this).css("background-color", "#ffffff");
                var newgood = $(".ui-draggable-dragging").clone();
                var goodbutton = newgood.find('button');
                var idProduct = parseInt($(goodbutton).attr('data-id'));
                var price = parseInt($(newgood).find('.product-price').text());
                var name = $(goodbutton).attr('name');
                basket.add(name, idProduct, price);
            }
        });
    });