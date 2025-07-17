<template>
    <form class="pay">
        <button class="pay__btn">
            <img src="@/assets/images/donation/pay/wallet.png" alt="wallet" class="pay__btn-logo">
            Донаты
        </button>
        <div class="pay__register">
            <h3 class="pay__register-title">
                Введите ваше имя и сумму доната:
            </h3>
            <div class="pay__register-donation">
                <input type="text" class="pay__register-input" placeholder="Ваше имя">
                <div class="pay__register-user">
                    <img src="@/assets/images/donation/pay/user.png" alt="">
                </div>
                <div class="pay__register-checkbox">
                    <p class="pay__register-checkboxText">
                        отправить анонимно
                    </p>
                    <div class="pay__register-checkboxBtn">
                        <div class="pay__register-circle"></div>
                    </div>
                </div>
            </div>
            <div class="pay__register-donation">
                <input type="text" class="pay__register-input" placeholder="5.000">
                <div class="pay__register-user">
                    <img src="@/assets/images/donation/pay/wallet.png" alt="">
                </div>
                <div class="pay__register-checkbox">
                    <p class="pay__register-checkboxText">
                        оплачу сам комиссию
                    </p>
                    <div class="pay__register-checkboxBtn">
                        <div class="pay__register-circle"></div>
                    </div>
                </div>
            </div>
        </div>
        
    </form>
</template>