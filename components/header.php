<div class="menu-popup" id="menu-popup"></div>
<header class="header">
    <div class="header-wrap">
        <div class="header-main">
            <a href="/" class="header-main__logo">
                <img src="/assets/img/icons/logo.svg" alt="aviterica">
            </a>
            <div class="header-main__btn">
                <button class="btn-main">
                    <a href="/catalog.php">Каталог курсов</a> 
                </button>
            </div>
        </div>
        <div class="header-navigation">
            <div class="header-navigation__tel">
                <button class="btn" data-callback>Заказать звонок</button>
            </div>
            <div class="header-navigation__cart">
                <div class="cart-is-empty">
                    <a href="/cart.php">Корзина</a>
                </div>
                <div class="cart-not-empty">
                    <a href="/cart.php" data-cart-link><span></span> товара</a>
                    <p class="total-price"><span></span> руб.</p>
                </div>
            </div>
            <div class="header-navigation__login">
                <button class="btn-transparent" data-login>Вход</button>
            </div>
        </div>
    
        <div class="header-burger">
            <ul class="header-burger__menu">
                <li><span href="" data-callback><img src="/assets/img/icons/phone.svg" alt=""></span></li>
                <li>
                    <a href="/cart.php">
                        <img src="/assets/img/icons/cart.svg" alt="">
                        <div class="header-cart-mobile _hidden"><span>2</span></div>
                    </a>
                </li>
                <li><span href="" data-login><img src="/assets/img/icons/person.svg" alt=""></span></li>
                <li>
                    <a href="">
                        <div class="hamb">
                            <div class="hamb__field" id="hamb">
                                <span class="bar"></span>
                                <span class="bar"></span>
                                <span class="bar"></span>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</header>