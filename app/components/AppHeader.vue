<template>
    <header class="header">
        <nav class="header__nav">
            <div class="header__nav-content container">
                <div class="header__nav-logoBox">
                    <img src="images/header/logo.png" alt="" class="header__nav-logo">
                </div>
                <div class="header__nav-right">
                    <button class="header__nav-langBtn">
                        EN
                    </button>
                    <button class="header__nav-signBtn">
                        <img src="images/header/exitIcon.png" alt="" class="header__nav-icon">
                        <p class="header__nav-text">
                            SIGN UP
                        </p>
                    </button>
                </div>
            </div>
        </nav>
        <div class="header__hero">
            <img src="images/header/headerDecor.png" alt="" class="header__info-img">
            <div class="header__hero-content container">
                <div class="hero__content-info">
                    <h1 class="hero__content-title">
                        Давай новый эмоции вместе с Tiply
                    </h1>
                    <p class="hero__content-text">
                        Данная платформа которая подарит новый эмоции в мир крутейшей стрименговой платформы
                    </p>
                    <div class="hero__content-btns">
                        <button class="hero__content-btn hero__content-btnHover">
                            Начать работу
                        </button>
                        <button class="hero__content-btn">
                            Как это работает
                        </button>
                    </div>
                    <div class="hero__content-infoBottom">
                        <div class="hero__content-donat">
                            <p class="hero__content-donatsNumber">
                                1 560 720 000
                            </p>
                            <p class="hero__content-subText">
                                Отправлено донатов
                            </p>
                        </div>
                        <div class="hero__content-strimer">
                            <p class="hero__content-strimersNumber">
                                120
                            </p>
                            <p class="hero__content-subText">
                                Стримеров
                            </p>
                        </div>
                    </div> 
                </div>
                <div class="hero__content-right">
                    <h2 class="hero__content-subTitle">
                        Наушники от HYPER X
                    </h2>
                    <div class="hero__content-progressBar">
                        <div class="hero__content-slider"></div>
                    </div>
                    <div class="hero__content-numbers">
                        <div class="hero__content-number">
                            0
                        </div>
                        <div class="hero__content-number">
                            1000
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header__nav {
  padding: 40px 0;
}

.header__nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__nav-logoBox {
  width: 20%;
}

.heaedr__nav-logo {
  width: 100%;
}

.header__nav-right {
  display: flex;
  align-items: center;
  gap: 30px;
}

.header__nav-langBtn {
  border: none;
  background-color: inherit;
  font-family: var(--MM500);
  font-size: 20px;
  color: #42444d;
  cursor: pointer;
}

.header__nav-signBtn {
  border: none;
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 8px 17px;
  background-color: #42444d;
  border-radius: 10px;
  cursor: pointer;
}

.header__nav-text {
  font-family: var(--MR400);
  font-size: 20px;
  color: #fff;
}

.header__hero {
  flex-grow: 1;
  background-image: url(../images/header/headerImg.png);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: end;
  position: relative;
}

.header__info-img {
  position: absolute;
  right: 0;
  top: -9%;
}

.header__hero-content {
  display: flex;
  justify-content: space-between;
  padding: 150px 0 120px 0;
}

.hero__content-info {
  width: 51%;
  display: flex;
  flex-direction: column;
  gap: 45px;
}

.hero__content-title {
  font-family: var(--ML300);
  font-size: 55px;
  color: #fff;
}

.hero__content-text {
  font-family: var(--ML300);
  font-size: 25px;
  color: #ffffff99;
}

.hero__content-btns {
  display: flex;
  gap: 30px;
  align-items: center;
}

.hero__content-btn {
  padding: 20px 27px;
  font-family: var(--MB700);
  font-size: 18px;
  color: #fff;
  border-radius: 10px;
  background-color: inherit;
  border: solid 1px #ffffff;
  text-transform: uppercase;
  transition: 0.7s;
  cursor: pointer;
}

.hero__content-btn:hover {
  background: linear-gradient(to right, #ff6d4d, #ff5631);
  border: solid 1px #ff6d4d;
}

.hero__content-btnHover {
  background: linear-gradient(to right, #ff6d4d, #ff5631);
  border: solid 1px #ff6d4d;
}

.hero__content-infoBottom {
  display: flex;
  gap: 30px;
  align-items: center;
}

.hero__content-donat {
  width: 36%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.hero__content-donatsNumber {
  font-family: var(--MM500);
  font-size: 25px;
  color: #ff6d4d;
}

.hero__content-subText {
  font-family: var(--ML300);
  font-size: 20px;
  color: #fff;
}

.hero__content-strimer {
  width: 36%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.hero__content-strimersNumber {
  font-family: var(--MM500);
  font-size: 25px;
  color: #ff6d4d;
}

.hero__content-right {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 15px;
}

.hero__content-subTitle {
  font-family: var(--MR400);
  font-size: 30px;
  color: #fff;
}

.hero__content-progressBar {
  width: 100%;
  height: 41px;
  border: solid 1px #fff;
  background-color: inherit;
  border-radius: 10px;
}

.hero__content-slider {
  width: 70%;
  height: 100%;
  background: linear-gradient(to right, #ff6d4d, #ff5631);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.hero__content-numbers {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.hero__content-number {
  font-family: var(--MM500);
  font-size: 20px;
  color: #fff;
}
</style>