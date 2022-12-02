<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <?php include('components/headlink.php') ?>
</head>
<body>    
    <?php include('components/header.php') ?>

    <div class="wrapper">
        <div class="content">
            <div class="banner">
                <h1 class="banner__title">Школа дополнительного 
                    профессионального образования
                    в сфере авиаперевозок
                </h1>
                <a href="/catalog.php" class="banner__follow">
                    <span>Курсы полезные всем</span>
                    <!-- <img src="/assets/img/icons/arrow.svg" alt=""> -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <circle class="img-arrow" cx="20" cy="20" r="20" fill="#E30613"/>
                        <path d="M14 20H26" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        <path d="M21 15L26 20L21 25" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </a>
            </div>
            <div class="banner-info-mobile">
                <h1>Школа дополнительного
                    профессионального образования
                    в сфере авиаперевозок
                </h1>
                <a href="/catalog.php" class="">
                    <span>Курсы полезные всем</span>
                    <!-- <img src="/assets/img/icons/arrow.svg" alt=""> -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <circle class="img-arrow" cx="20" cy="20" r="20" fill="#E30613"/>
                        <path d="M14 20H26" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        <path d="M21 15L26 20L21 25" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </a>
                <div class="panel">
                    <p>Вы можете выбрать одновременно несколько курсов. 
                       Чем больше курсов в заказе, тем меньше цена каждого из них!
                    </p>
                </div>
            </div>
            <main class="container">
                
        
                <div class="courses">
                    <p class="courses__title">Вы можете выбрать одновременно несколько курсов.<br>
                        Чем больше курсов в заказе, тем меньше цена каждого из них! 
                    </p>
                    <div class="courses__cards">
                        <div class="courses-item">
                            <div class="courses-item__logo">
                                <img src="/assets/img/index/item1.png" alt="Sirena">
                            </div>
                            <div class="courses-item__link">
                                <a href="">Выбрать курс</a>
                            </div>
                        </div>
                        <div class="courses-item">
                            <div class="courses-item__logo">
                                <img src="/assets/img/index/item2.png" alt="Amadeus">
                            </div>
                            <div class="courses-item__link">
                                <a href="">Выбрать курс</a>
                            </div>
                        </div>
                        <div class="courses-item">
                            <div class="courses-item__logo">
                                <img src="/assets/img/index/item3.png" alt="Sabre">
                            </div>
                            <div class="courses-item__link">
                                <a href="">Выбрать курс</a>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div class="practice">
                    <p class="practice__title">Всё познаётся на практике!</p>
                    <div class="practice__cards">
                        <a href="individual.php">
                            <div href='individual.php' class="practice-item item1">
                                <div class="practice-item__logo">
                                    <img src="/assets/img/icons/practice1.svg" alt="Индивидуальные занятия" class="individual-img">
                                </div>
                                <div class="practice-item__info">
                                    <div class="practice-item__text">Индивидуальные<br> занятия</div>
                                    <span class="practice-item__more">Узнать подробнее</span>
                                </div>
                            </div>
                        </a>
                        <a href="practice.php">
                            <div class="practice-item">
                                <div class="practice-item__logo">
                                    <img src="/assets/img/icons/practice2.svg" alt="Практика на реальном пульте" class="practice-img">
                                </div>
                                <div class="practice-item__info">
                                    <div class="practice-item__text">Практика<br> на реальном пульте</div>
                                    <span class="practice-item__more">Узнать подробнее</span>
                                </div>
                            </div>
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