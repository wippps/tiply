<template>
    <footer class="footer">
        <div class="footer__content container">
            <div class="footer__content-left">
                <div class="footer__content-header">
                    <a href="#" class="footer__content-link">Стать автором</a>
                    <a href="#" class="footer__content-link">Авторы</a>
                </div>
                <div class="footer__content-info">
                    <p class="footer__content-text">
                        Сервис и платежные услуги оказываются со стороны АО "MULTICARD PAYMENT" на условиях и в порядке, определенных <a href="#" class="footer__content-subLink">пользовательским соглашением</a> , и <a href="#" class="footer__content-subLink">лицензии платежной организации №26 от 25.06.2021 г.</a> , выданной Центральным банком Республики Узбекистан.
                    </p>
                    <p class="footer__content-text">
                        Продажа товаров осуществляется со стороны ООО "Tirikchilik". Условия работы магазина регулируются <a href="#" class="footer__content-subLink">Публичной офертой</a>, <a href="#" class="footer__content-subLink">Условиями возврата и доставки</a> и <a href="#" class="footer__content-subLink">Политикой конфиденциальности.</a>
                    </p>
                </div>
                <div class="footer__content-bottom">
                    <p class="footer__content-subText">
                        2025 TIPLY - Сбор донатов и поддержака стримеров
                    </p>
                    <div class="footer__content-bottomRight">
                        <h3 class="footer__content-title">
                            Наши соц сети
                        </h3>
                        <div class="footer__content-socials">
                            <a href="#" class="footer__content-social">
                                <img src="@/assets/images/footer/instagram.png" alt="instagram" class="footer__content-socialIcon">
                            </a>
                            <a href="#" class="footer__content-social">
                                <img src="@/assets/images/footer/tiktok.png" alt="tiktok" class="footer__content-socialIcon">
                            </a>
                            <a href="#" class="footer__content-social">
                                <img src="@/assets/images/footer/youtube.png" alt="youtube" class="footer__content-socialIcon">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer__content-logoBox">
                <img src="@/assets/images/footer/Cargo-5 2.png" alt="logo" class="footer__content-logo">
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer{
  padding: 57px 0 51px 0;
  background: linear-gradient(to right, #42444D 63.5%, #FF6D4D 63.5%);
}

.footer__content{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer__content-left{
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 35px;
}

.footer__content-header{
  display: flex;
  gap: 30px;
  align-items: center;
}

.footer__content-link{
  font-family: var(--MR400);
  font-size: 25px;
  color: #fff;
}

.footer__content-info{
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.footer__content-text{
  font-family: var(--MR400);
  font-size: 10px;
  color: #fff;
}

.footer__content-subLink{
  color: #fff;
  text-decoration: underline;
}

.footer__content-bottom{
  width: 100%;
  display: flex;
  gap: 80px;
  align-items: center;
}

.footer__content-subText{
  font-family: var(--MR400);
  font-size: 18px;
  color: #fff;
}

.footer__content-bottomRight{
  display: flex;
  align-items: center;
  gap: 27px;
}

.footer__content-title{
  text-align: end;
  font-family: var(--MSB600);
  font-size: 20px;
  color: #ffff;
  width: 25%;
}

.footer__content-socials{
  display: flex;
  gap: 20px;
}

.footer__content-social{
  border-radius: 10px;
  background: linear-gradient(to right, #ff6d4d, #ff5631);
  padding: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer__content-logoBox{
  width: 21%;
}

.footer__content-logo{
  width: 100%;
}
</style>