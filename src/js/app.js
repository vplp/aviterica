import $ from 'jquery';
import Inputmask from 'inputmask';


// localStorage.setItem("idProductsInCart", '[]');

$(document).ready(function() {
//----------- БУРГЕР МЕНЮ НАЧАЛО -----------//
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#menu-popup");
const body = document.body;
const menuItems = document.querySelectorAll('.header-burger__menu li');

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  for (let i = 0; i < menuItems.length - 1; i++) {
    menuItems[i].classList.toggle('_hidden');
  }
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}
//----------- БУРГЕР МЕНЮ КОНЕЦ -----------//


//----------- ПОПАПЫ НАЧАЛО -----------//
$('[data-callback]').on('click', function () {
  let form = $('.popup-callback');
  openPopupForm(form);
})

$('[data-login]').on('click', function () {
  let form = $('.popup-login');
  openPopupForm(form);
})

$('[data-order]').on('click', function (e) {
  e.preventDefault();
  let form = $('.popup-order');
  openPopupForm(form);
})

$('[data-popup-close]').on('click', function () {
  let form = $('.popup');
  closePopupForm(form);

  form.find('.callback-popup').removeClass('_hidden');
  form.find('.success-popup').addClass('_hidden');
})

$('[data-success-close]').on('click', function () {
  $(this).closest('.success').addClass('_hidden');
  $(this).closest('.popup').find('.success-popup').addClass('_hidden');
})

function openPopupForm(formWrap) {
  $('body').addClass('_overflow');
  formWrap.removeClass('_hidden');
  formWrap.addClass('_active');
}

function closePopupForm(formWrap) {
  $('body').removeClass('_overflow');
  formWrap.addClass('_hidden');
  formWrap.removeClass('_active');
}
//----------- ПОПАПЫ КОНЕЦ -----------//


//----------- ВАЛИДАЦИЯ НАЧАЛО -----------//
let im_phone = new Inputmask('+7 (999) 999-99-99', {
  clearIncomplete: true,
});
im_phone.mask($('form').find('[name="phone"]'));

var formSender = {
  to: '/sendmail/',
  $form: {},
  init: function () {
    $('form').each(function () {
      var $form = $(this);
      $form.find('[data-required]').each(function () {
        $(this).on('blur', function () {
          formSender.checkField($(this));
          formSender.checkValid($form);
        });
      });
      $form.on('submit', function (event) {
        formSender.sendIfValid($form, event);
      });
      $form.on('click', 'button.disabled', function (e) {
        e.preventDefault();
        return false;
      });
      $form.on('click', '.checkbox', function () {
        $(this).toggleClass('checkbox-on');
        formSender.checkField($(this));
      })
    });
  },
  checkValid: function ($form) {
    $form.find('button').removeClass('disabled');
    $form.find('.is-invalid').each(function () {
      $form.find('button[type=submit]').removeClass('disabled');
      return false;
    });
  },
  checkFields: function ($form) {
    var valid = true;
    $form.find('[data-required]').each(function () {
      if (!$(this).hasClass('is-valid')) {
        valid = false;
      }
      formSender.checkField($(this));
    });
    if (valid) {
      $form.find('button').removeClass('disabled');
    } else {
      $form.find('.is-invalid')[0].focus();
      $form.find('button[type=submit]').addClass('disabled');
    }
    return valid;
  },
  checkField: function ($field) {
    var valid = false;
    var name = $field.attr('name');
    var pattern_email = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
    var $custom_error = '';

    if (name == 'name' && $field.val().length < 2) {
      valid = false;
      $custom_error = 'Пожалуйста, укажите имя';
    } else {
      if (!(name == 'phone' || name == 'email' || name == 'agreement' || name == 'password')) {
        valid = true;
      }
    }

    if (name == 'phone' && $field.val().indexOf('(') <= 0) {
      valid = false;
      $custom_error = 'Пожалуйста, укажите телефон';
    } else {
      if (!(name == 'name' || name == 'email' || name == 'agreement' || name == 'password')) {
        valid = true;
      }
    }

    if (name == 'email' && !pattern_email.test($field.val())) {
      valid = false;
      $custom_error = 'Пожалуйста, укажите почту';
    } else {
      if (!(name == 'phone' || name == 'name' || name == 'agreement' || name == 'password')) {
        valid = true;
      }
    }

    if (name == 'password' && $field.val().length < 6) {
      valid = false;
      $custom_error = 'Пароль слишком короткий';
    } else {
      if (!(name == 'phone' || name == 'name' || name == 'agreement' || name == 'email')) {
        valid = true;
      }
    }

    if (name == 'agreement' && !$field.hasClass('checkbox-on')) {
      valid = false;
      $custom_error = 'Необходимо ваше согласие';
    } else {
      if (!(name == 'phone' || name == 'name' || name == 'email' || name == 'password')) {
        valid = true;
      }
    }

    if (valid) {
      $('form').find('button[type=submit]').removeClass('disabled');
      $field.removeClass('is-invalid').addClass('is-valid');
      $field.parent().find('.invalid-feedback').remove();
      $('.feedback-form__agreement').find('.invalid-feedback').addClass('_hidden');
    } else {
      $('form').find('button[type=submit]').addClass('disabled');
      $field.removeClass('is-valid').addClass('is-invalid');
      var $error_message = $custom_error || 'Заполните полe';
      $('.feedback-form__agreement').find('.invalid-feedback').removeClass('_hidden');
      if ($field.parent().find('.invalid-feedback').length == 0) {
        $field.parent()
          .append(
            '<div class="invalid-feedback">' +
            $error_message +
            '</div>'
          );
      } else {
        $field.next('.invalid-feedback').html($error_message);
      }
    }
  },
  reset: function ($form) {
    $form[0].reset();
    $form.find('input').removeClass('is-valid');
  },
  sendIfValid: function ($form, e) {
    e.preventDefault();
    var formData = new FormData($form[0]);
    $form.find('[data-required]').each(function () {
      formSender.checkField($(this));
    });
    if (formSender.checkFields($form, true)) {
      //если форма была заполнена верно и отправлена очищаем инпуты
      formSender.reset($form);
      $('.checkbox').removeClass('checkbox-on');

      //если это форма в попапе
      if ($form.closest('.popup') && $form.closest('.popup').length > 0) {
        $form.closest('.popup').find('.callback-popup').addClass('_hidden');
        $form.closest('.popup').find('.success-popup').removeClass('_hidden');
        //если это форма в блоке feedback
      } else {
        $('.feedback-success').removeClass('_hidden');
      }
    }
  }
}
formSender.init();

//----------- ВАЛИДАЦИЯ КОНЕЦ -----------//



//----------- КОРЗИНА НАЧАЛО -----------//
//тут мы рендерим товары из json
async function getProducts() {
  let response = await fetch('../../products.json');
  let productsArray = await response.json();
  renderProducts(productsArray);
}

async function getCategories() {
  let response = await fetch('../../categories.json');
  let categoriesArray = await response.json();
  renderCategories(categoriesArray);
}

getCategories();
getProducts();

function renderCategories(categoriesArray) {
  categoriesArray.forEach(function (item) {
    let categoriesHTML = `
    <div class="column-block${item.id} column-block" data-id-category=${item.id}>
      <h2 class="column-block__title">${item.title}</h2>
      
    </div>`;

    $('.catalog-container').append(categoriesHTML);
  })
}

function renderProducts(productsArray) {
  productsArray.forEach(function (item) {
    let productHTML = `
        <div class="column-block__item">
          <div class="name-course">
            <span>
                <a href="/catalog_item.php">
                  ${item.title}
                </a>
            </span>
            <div class="special">
                <div class="${item.new}">${item.new}</div>
                <div class="${item.hit}">${item.hit}</div>
            </div>
          </div>
          <div class="info-course">
              <span class="price">${item.price} руб.</span>
              <button class="select-course" data-action="choose-product" data-id-product="${item.id}">Выбрать курс</button>
          </div>
        </div>`;

    $(`.column-block${item.category_id}`).append(productHTML);
    renderCartBlock();
    renderCartDown()
  })
}

//тут счетчик для корзины (cart.php)
$('.cart').on('click', function (e) {

  if (e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus' || e.target.dataset.action === 'delete') {
    renderCart();
    let rowNumber = parseInt(e.target.closest('.cart-table__row').getAttribute('data-row-number'));
    let storage = JSON.parse(localStorage.getItem("idProductsInCart"));

    if (e.target.dataset.action === 'plus') {
      let counter = e.target.closest('.counter').querySelector('.counter__count');
      counter.innerText = ++counter.innerText;
      storage.push(rowNumber);
      localStorage.setItem("idProductsInCart", JSON.stringify(storage));
      renderCartInHeader();
    }

    else if (e.target.dataset.action === 'minus') {
      let index = storage.indexOf(rowNumber);
      if (parseInt(index) >= 0) {
        storage.splice(index, 1);
      }
      localStorage.setItem("idProductsInCart", JSON.stringify(storage));
      isEmptyCart();
      renderCartInHeader();

      let counter = e.target.closest('.counter').querySelector('.counter__count');
      // Проверяем чтобы счетчик был больше 1, иначе удаляем строку из таблицы
      if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText;
      } else if (e.target.closest('.cart') && parseInt(counter.innerText) === 1) {
        e.target.closest('.cart-table__row').remove();
      }
    }

    else if (e.target.dataset.action === 'delete') {
      let updateStorage = storage.filter(function (i) {
        return i != rowNumber;
      })

      localStorage.setItem("idProductsInCart", JSON.stringify(updateStorage));
      isEmptyCart();
      renderCartInHeader();
      e.target.closest('.cart-table__row').remove();
    }
  }
})

//если в корзине нет товаров, то выводим надпись "Корзина пуста"
function isEmptyCart() {
  if (localStorage.getItem("idProductsInCart") === null ) {
    $('.cart-is-empty').removeClass('_hidden');
  }
  else if (localStorage.getItem("idProductsInCart") == '[]') {
    $('.cart-table').addClass('_hidden');
    $('.cart-is-empty').removeClass('_hidden');
  } else {
    $('.cart-table').removeClass('_hidden');
    $('.cart-is-empty').addClass('_hidden');
  }
}

//тут добавление товаров в корзину
$('body').on('click', function (e) {
  var idProductsInCart = [];

  if (localStorage.getItem("idProductsInCart") !== null) {
    var idProductsInCart = JSON.parse(localStorage.getItem("idProductsInCart"));
  }

  if (e.target.dataset.action == "choose-product") {
    let idProduct = parseInt(e.target.getAttribute('data-id-product'));
    idProductsInCart.push(idProduct);

    //Записываем массив продуктов в корзине в localstorage
    localStorage.setItem("idProductsInCart", JSON.stringify((idProductsInCart)))
    renderCart();
    renderCartBlock();
    renderCartDown()
    renderCartInHeader();
  }
})


//тут рендерим корзину из находящихся в ней продуктов
async function renderCart() {
  let response = await fetch('../../products.json');
  let productsArray = await response.json();

  isEmptyCart();
  $('.cart-container').html('');

  if (localStorage.getItem("idProductsInCart") !== null) {
    let storage = [...new Set(JSON.parse(localStorage.getItem("idProductsInCart")))];

    let i = 0; //счетчик кол-ва товаров в корзине
    productsArray.forEach(function (item) {
      //если продукт добавлен в корзину, то рендерим его
      if (storage.indexOf(item.id) >= 0) {
        let cart = JSON.parse(localStorage.getItem("idProductsInCart"));
        let itemCount = calcItemCount(cart, item.id);

        let cartHTML = `
         <div class="cart-table__row" data-row-number="${item.id}">
           <a href="/catalog_item.php" class="item-name row-item">${item.title}</a>
           <span class="item-price row-item"><strong>Цена: </strong> <span class="price-product">${item.price}</span> руб.</span>
           <div class="counter row-item">
               <span class="counter__dec" data-action="minus">−</span>
               <span class="counter__count" data-counter>${itemCount}</span>
               <span class="counter__inc" data-action="plus">+</span>
           </div>
           <div class="total-price">
               <span class="item-total-price row-item"><strong>Стоимость: </strong> <span>${item.price}</span> руб.</span>
               <button class="delete-item row-item" data-action="delete">Удалить</button>
           </div>
         </div>`;

        $('.cart-container').append(cartHTML);

        //подсчитываем стоимость товара с учетом кол-ва
        let priceItemEl = document.querySelectorAll('.item-total-price span');
        priceItemEl[i].innerText = parseInt(getPriceItem(productsArray, item.id));
        i++;
      }
    });
  }

  //общая стоимость всех курсов
  $('.cart-table__footer .total-price > span')[0].innerText = getTotalSum(productsArray);
}
renderCart();

//тут рендерим карточку с товарами в корзине на странице "Каталог курсов"
async function renderCartBlock() {
  let response = await fetch('../../products.json');
  let productsArray = await response.json();

  $('.cart-items').html('');

  let storage = [...new Set(JSON.parse(localStorage.getItem("idProductsInCart")))];
  let cart = JSON.parse(localStorage.getItem("idProductsInCart"));
  let i = 0; //счетчик кол-ва курсов в корзине
  productsArray.forEach(function (item) {
    if (storage.indexOf(item.id) >= 0) {
      let itemCount = calcItemCount(cart, item.id);

      let cartBlockHTML = `
        <div class="cart-item" data-item-id="${item.id}">
          <div class="cart-item__info">
              <p class="cart-item__paragraph">${item.title}</p>
              <div class="cart-item__total">
                  <span class="count">${itemCount} шт.</span> — <span class="price">${item.price * itemCount} руб.</span>
              </div>
          </div>
          <div class="cart-item__btn-close" data-delete-item>
              <svg class="img-close" width="16" height="16" viewBox="0 0 16 16" stroke="#969696" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 14L14 2" stroke-width="2" stroke-linecap="round" fill="red"/>
                <path d="M14 14L2 2" stroke-width="2" stroke-linecap="round" fill="red"/>
              </svg>
          </div>
        </div>
      `;

      $('.cart-items').append(cartBlockHTML);
      i++;
    }
  })

  $('.total-price__title span').html(i);
  $('.total-price__sum span').html(getTotalSum(productsArray));

  if (localStorage.getItem("idProductsInCart") === null) {
    $('.total-price .cart-is-empty').removeClass('_hidden');
  }
  else if (localStorage.getItem("idProductsInCart") == '[]') {
    $('.total-price .cart-is-empty').removeClass('_hidden');
    $('.cart-not-empty').addClass('_hidden');
    $('.do-order').addClass('_hidden');
  } else {
    $('.count-courses').removeClass('_hidden');
    $('.total-price .cart-is-empty').addClass('_hidden');
    $('.do-order').removeClass('_hidden');
    $('.cart-not-empty').removeClass('_hidden');
  }
}
renderCartBlock();

//удаление продукта (на карточке корзины)
$('body').on('click', '[data-delete-item]', function () {
  let id = $(this).closest('.cart-item').attr('data-item-id');
  let storage = JSON.parse(localStorage.getItem("idProductsInCart"));

  let updateStorage = storage.filter(function (i) {
    return i != id;
  })

  localStorage.setItem("idProductsInCart", JSON.stringify((updateStorage)))
  renderCartBlock();
  renderCartDown()
  renderCartInHeader();
})

//Функция подсчета стоимости одного курса с учетом его кол-ва в корзине
function getPriceItem(arr, item) {
  let storage = JSON.parse(localStorage.getItem("idProductsInCart"));

  let sum = 0;
  let count = calcItemCount(storage, item);

  arr.forEach(function (i) {
    if (i.id == item) {
      sum = i.price * count;
    }
  })

  return sum;
}

//функция подсчета общей стоимости
function getTotalSum(arr) {
  let sum = 0;
  let storage = JSON.parse(localStorage.getItem("idProductsInCart"));

  for (let i = 0; i < storage.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].id == storage[i])
        sum += arr[j].price;
    }
  }

  return sum;
}

//функция, возвращающая кол-во курсОВ в корзине
function getCountProducts() {
  let count = 0;
  let storage = [...new Set(localStorage.getItem("idProductsInCart"))];
  storage.forEach(function(item) {
    if (item != '[' && item != ']' && item != ',') {
      count++;
    }
  })

  return count;
}

//Функция, возвращающая кол-во курсА в корзине
function calcItemCount(arr, item) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      count++;
    }
  }
  return count;
}

//тут рендерим состояние корзины в хэдере
async function renderCartInHeader() {
  let response = await fetch('../../products.json');
  let productsArray = await response.json();

  if (localStorage.getItem("idProductsInCart") == '[]' || localStorage.getItem("idProductsInCart") === null) {
    $('.header-navigation__cart .cart-is-empty').removeClass('_hidden');
    $('.header-navigation__cart .cart-not-empty').addClass('_hidden');
    $('.header-cart-mobile').addClass('_hidden');
  } else {
    $('.header-cart-mobile').removeClass('_hidden');
    $('.header-navigation__cart .cart-is-empty').addClass('_hidden');
    $('.header-navigation__cart .cart-not-empty').removeClass('_hidden');
  }

  $('.header-cart-mobile span')[0].innerText = getCountProducts();
  $('.cart-not-empty a span')[0].innerText = getCountProducts();
  $('.cart-not-empty .total-price span')[0].innerText = getTotalSum(productsArray);
}
renderCartInHeader();


//тут рендерим cart-down
async function renderCartDown() {
  let response = await fetch('../../products.json');
  let productsArray = await response.json();

  if (localStorage.getItem("idProductsInCart") == '[]' || localStorage.getItem("idProductsInCart") === null) {
    $('.cart-down').addClass('_hidden');
  } else {
    $('.cart-down').removeClass('_hidden');
  }
  
  $('.cart-down__count span')[0].innerText = getCountProducts();
  $('.cart-down__price span')[0].innerText = getTotalSum(productsArray);
}
renderCartDown();

// var getScrollBarSize = (function() {
//   var el = window.document.createElement('textarea'), style = {
//     'visibility': 'hidden', 'position': 'absolute', 'zIndex': '-2147483647',
//     'top': '-1000px', 'left': '-1000px', 'width': '1000px', 'height': '1000px',
//     'overflow': 'scroll', 'margin': '0', 'border': '0', 'padding': '0'
//   }, support = el.clientWidth !== undefined && el.offsetWidth !== undefined;

//   for (var key in style) {
//     if (style.hasOwnProperty(key)) {
//       el.style[key] = style[key];
//     }
//   }

//   return function() {
//     var size = null;
//     if (support && window.document.body) {
//       window.document.body.appendChild(el);
//       size = [el.offsetWidth - el.clientWidth, el.offsetHeight - el.clientHeight];
//       window.document.body.removeChild(el);
//     }
//     return size;
//   };
// })();

// console.log('scroll', getScrollBarSize())



//----------- КОРЗИНА КОНЕЦ -----------//
})
