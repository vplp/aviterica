<div class="feedback">
    <div class="feedback-wrap">
        <div class="feedback-content">
            <div class="feedback-form">
                <?php include('components/feedback_success.php') ?> 
                <p class="feedback-form__title">Остались вопросы?</p>
                <p class="feedback-form__subtitle">Напишите свой вопрос, и мы ответим в течение суток</p>
                <form action="/" class="feedback-form__form">
                    <div class="feedback-form__name">
                        <p class="input-title">Ваше имя</p>
                        <input type="text" class="input" name="name" data-required data-type="name">
                    </div>
                    <div class="feedback-form__email">
                        <p class="input-title">Электронная почта</p>
                        <input type="email" class="input" name="email" data-required data-type="email">
                    </div>
                    <div class="feedback-form__comment">
                        <p class="input-title">Суть вопроса</p>
                        <textarea class="input"></textarea>
                    </div>
                    <div class="feedback-form__bottom">
                        <button type="submit" class="btn-main">Отправить</button>
                        <div class="feedback-form__agreement">
                            <input type="checkbox" id="agreement" id="agreement" class="checkbox" name="agreement" data-required data-type="agreement">
                            <label for="agreement"><span>Я согласен с <a href="/">политикой обработки персональных данных</a></span></label>
                        </div>
                    </div>
                </form>
            </div>
            <div class="feedback__img">
                <img src="/assets/img/feedback-img.png" alt="">
            </div>
        </div>
        <div class="feedback-menu" id="menu">
            <!-- <ul>
                <li><a href="/catalog.php">Каталог</a></li>
                <li><a href="/individual.php">Индивидуальные занятия</a></li>
                <li><a href="/practice.php">Практика</a></li>
                <li><a href="/">Библиотека</a></li>
                <li><a href="/about_school.php">О школе</a></li>
                <li><a href="/">Контакты</a></li>
            </ul> -->
            <div class="feedback-menu__container">
                <div class="feedback-menu__right">
                    <span><a href="/catalog.php">Каталог</a></span>
                    <span>
                        <a href="/individual.php" class="individual-desk">Индивидуальные занятия</a>
                        <a href="/individual.php" class="individual-mobile">Инд. занятия</a>
                    </span>
                    <span><a href="/practice.php">Практика</a></span>
                </div>
                <div class="feedback-menu__left">
                    <span><a href="/">Библиотека</a></span>
                    <span><a href="/about_school.php">О школе</a></span>
                    <span><a href="/">Контакты</a></span>
                </div>
            </div>
        </div>
    </div>
</div>