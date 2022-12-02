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
            <div class="cart">
                    <h1 class="cart-title">Корзина</h1>

                    <p class="cart-is-empty _hidden">Корзина пуста</p>

                    <div class="cart-table">
                        <div class="cart-table__row cart-table__row1">
                            <div class="name">
                                <span class="name-head">Наименование</span>
                            </div>
                            <div class="price">
                                <span class="price-head">Цена</span>
                            </div>
                            <div class="counter">
                                <span class="counter-head">Количество</span>
                            </div>
                            <div class="total-price">
                                <span class="total-price-head">Стоимость</span>
                            </div>
                        </div>

                        <div class="cart-container"></div>

                        <!-- <div class="cart-table__row">
                            <a href="/catalog_item.php" class="item-name row-item">Электронные документы. Как это работает?</a>
                            <span class="item-price row-item"><span class="price-product">5200</span> руб.</span>
                            <div class="counter row-item">
                                <span class="counter__dec" data-action="minus">−</span>
                                <span class="counter__count" data-counter>2</span>
                                <span class="counter__inc" data-action="plus">+</span>
                            </div>
                            <div class="total-price">
                                <span class="item-total-price row-item"><span>10400</span> руб.</span>
                                <button class="delete-item row-item" data-action="delete">Удалить</button>
                            </div>
                        </div>

                        <div class="cart-table__row">
                            <a href="/catalog_item.php" class="item-name row-item">Читаем правила применения тарифов</a>
                            <span class="item-price row-item"><span class="price-product">3700</span> руб.</span>
                            <div class="counter row-item">
                                <span class="counter__dec" data-action="minus">−</span>
                                <span class="counter__count" data-counter>1</span>
                                <span class="counter__inc" data-action="plus">+</span>
                            </div>
                            <div class="total-price">
                                <span class="item-total-price row-item"><span>3700</span> руб.</span>
                                <button class="delete-item row-item" data-action="delete">Удалить</button>
                            </div>
                        </div> -->

                        <div class="cart-table__footer">
                            <div class="">
                                <span>Сумма к оплате:</span>
                                <span class="total-price"><span></span> руб.</span>
                            </div>
                            <button class="btn-main" data-order>Оформить заказ</button>
                        </div>
                    </div>
                </div>
            </main>
        
            <?php include('components/feedback.php') ?>
        </div>

        <?php include('components/footer.php') ?>
        
    </div>
    <?php include('components/callback_popup.php') ?>
    <?php include('components/login_popup.php') ?>
    <?php include('components/order_popup.php') ?>
    <script src="./dist/js/app.min.js"></script>
</body>
</html>