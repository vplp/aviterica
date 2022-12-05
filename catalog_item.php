<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <?php include('components/headlink.php') ?>
</head>
<body>
    <?php include('components/header.php') ?>
    <?php include('components/breadcrumbs.php') ?>

    <div class="wrapper">
        <div class="content">
            <main class="container">
                <div class="catalog">
                    <h1 class="catalog__title">Читаем правила применения тарифов</h1>
                    <div class="catalog__wrapper">
                        <div class="catalog__content">
                            <div class="catalog__info">
                                <div class="catalog__text">
                                    <p>Всяко разный текст типа… По заказу одной компании инструктор Учебного центра был направлен для проведения семинара на заданную заказчиком тему. 
                                        Программа семинара была заранее согласована и утверждена приглашающей стороной. Проведя 8 часов в самолёте, инструктор прибыл на место и, несмотря на значительную разницу во времени и усталость, сразу приступил к работук.
                                        Для корректной работы обучающей программы вам потребуется следующее оборудование:
                                    </p>
                                    <p>Компьютер или планшет с выходом в Интернет. Колонки или наушники (если ваш компьютер не оборудован ими)Микрофон и видеокамера (если ваш компьютер не оборудован ими) для тех, кто проходит обучение на курсах для железнодорожных кассиров. Они потребуются для сдачи экзамена.</p>   
                                    <div class="panel panel_desc">
                                        <p>Вы можете выбрать одновременно несколько курсов. 
                                        <br>Чем больше курсов в заказе, тем меньше цена каждого из них!</p>
                                    </div>
                                </div>
                                <div class="course-price">
                                    <div class="course-price__title_desc">
                                        <span class="time_title">Срок доступа</span>
                                        <span class="time">20 дней</span>
                                    </div>
                                    <div class="course-price__title_mobile">
                                        <span class="time_title">Срок доступа: </span>
                                        <span class="time">&nbsp;20 дней</span>
                                    </div>
                                    <span class="price">3700 руб.</span>
                                    <span class="choose-course"><button data-action="choose-product" data-id-product="1">Выбрать курс</button></span>
                                </div>
                            </div>
                        </div>
                        <div class="catalog__cart">
                        <div class="count-courses">
                            <img src="/assets/img/icons/cart_red.svg" alt="Корзина">
                            <div class="total-price">
                                <p class="cart-is-empty">В корзине нет товаров</p>
                                <div class="cart-not-empty _hidden">
                                    <p class="total-price__title"><span></span> курсов</p>
                                    <div class="total-price__sum"><span></span> ₽</div>
                                </div>
                            </div>
                        </div>
                        <div class="cart-items"></div>

                        <a href="" class="do-order _hidden">
                            <button class="btn-main" data-order>Оформить заказ</button>
                        </a>
                    </div>
                    </div>
                    <div class="panel panel_mobile">
                        <p>Вы можете выбрать одновременно несколько курсов. 
                        <br>Чем больше курсов в заказе, тем меньше цена каждого из них!</p>
                    </div>
                </div>
            </main>
        
            <?php include('components/feedback.php') ?>
        </div>

        <?php include('components/footer.php') ?>
    </div>

    <div class="cart-down _hidden">
        <div class="cart-down__items">
            <img src="./assets/img/icons/cart_red.svg" alt="" class="img">
            <div class="summary-price">
                <p class="cart-down__count"><span></span> курс</p>
                <p class="cart-down__price"><span></span> ₽</p>
            </div>
        </div>
        <a href="/cart.php" class="cart-down__link">
            Оформить
        </a>
    </div>
    <?php include('components/callback_popup.php') ?>
    <?php include('components/login_popup.php') ?>
    <?php include('components/order_popup.php') ?>
    <script src="./dist/js/app.min.js"></script>
</body>
</html>