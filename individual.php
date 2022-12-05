<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <?php include('components/headlink.php') ?>
</head>
<body>
    <?php include('components/header.php') ?>
    <div class="course-banner-mobile individual-course">
        <img src="/assets/img/individual/banner.png" alt="">
    </div>
    <?php include('components/breadcrumbs.php') ?>

    <div class="wrapper">
        <div class="content">
            <main class="container">
                <div class="about-course">
                    <h1 class="title">Индивидуальные занятия / Корпоративное обучение</h1>
                    <div class="about-course__info">
                        <div class="about-course__text">
                            <p>Всяко разный текст типа... По заказу одной компании инструктор Учебного центра был направлен для проведения семинара на заданную заказчиком тему. Программа семинара была заранее согласована и утверждена приглашающей стороной. 
                                <span>Проведя 8 часов в самолете, инструктор прибыл на место и, несмотря на значительную разницу во времени и усталость, сразу приступил к работе с</span> 
                                <span>тыры пары и в том числе список:</span>
                            </p>
                            <ul>
                                <li>Усталость, сразу приступил к работе с тыры пары и в том числе список:</li>
                                <li>Проведя 8 часов в самолете</li>
                                <li>По заказу одной компании</li>
                            </ul>
                        </div>
                        <div class="about-course__link">
                            <img src="/assets/img/icons/practice1.svg" alt="Отправить запрос">
                            <button class="btn-main" data-callback>Отправить запрос</button>
                        </div>
                    </div>
                </div>

                <div class="course-banner">
                    <img src="/assets/img/individual/banner.png" alt="">
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