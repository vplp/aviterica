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
                <h1 class="catalog-courses__title">Каталог курсов</h1>
                <div class="catalog-courses">
                    <div class="column">
                        <div class="panel">
                            <p>Вы можете выбрать одновременно несколько курсов. 
                               <br>Чем больше курсов в заказе, тем меньше цена каждого из них!
                            </p>
                        </div>

                        <div class="catalog-container"></div>
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