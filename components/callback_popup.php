<div class="popup popup-callback _hidden">
    <div class="popup__wrapper" data-popup-close></div>
    <div class="callback-popup">
        <div class="popup__body">
            <p class="callback-popup__title">Заказать звонок</p>
            <p class="callback-popup__subtitle">Укажите свои данные, и мы свяжемся с Вами в ближайшее время</p>
            <div class="callback-popup__form">
                <form action="/">
                    <div class="name">
                        <p>Ваше имя</p>
                        <input type="text" name="name" data-required>
                    </div>
                    <div class="telephone">
                        <p>Номер телефона</p>
                        <input type="tel" name="phone" data-required placeholder="+7 (___) ___-__-__">
                    </div>
                    <button type="submit" class="btn-main">Отправить</button>
                </form>
            </div>
            <svg class="popup__close" width="16" height="16" viewBox="0 0 16 16" stroke="#969696" xmlns="http://www.w3.org/2000/svg" data-popup-close>
                <path d="M2 14L14 2" stroke-width="2" stroke-linecap="round" fill="red"/>
                <path d="M14 14L2 2" stroke-width="2" stroke-linecap="round" fill="red"/>
            </svg>
            <!-- <img src="../assets/img/icons/popup_close.svg" alt="закрыть" class="popup__close" data-popup-close> -->
        </div>
    </div>
    <?php include('success_popup.php') ?>
</div>
