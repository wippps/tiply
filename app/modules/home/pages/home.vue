<template>
    <div class="header__hero">
        <img src="@/assets/images/header/headerDecor.png" alt="" class="header__info-img">
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
    <section class="main__support">
        <div class="main__support__content container">
            <div class="support__content-btns">
                <button class="support__content-btn">
                    Мы готовы 
                </button>
                <button class="support__content-btn">
                    поддержать 
                </button>
                <button class="support__content-btn">
                    юных стримеров  
                </button>
            </div>
            <div class="support__content-imgBox">
                <img src="@/assets/images/home/mainImg.png" alt="" class="support__content-img">
            </div>
            <div class="support__content-bottom">
                <button class="support__content-subBtn">
                    топ стримеры
                </button>
                <button class="support__content-subBtn">
                    смотри
                </button>
                <button class="support__content-subBtn">
                    наслаждайся
                </button>
            </div>
        </div>
    </section>
    <section class="main__strimers">
        <div class="main__strimers-content container-fluid">
            <div class="strimers__content-head">
                <div class="strimers__content-searchBox">
                    <p class="strimers__content-text">
                        Найти своего любимого стримера
                    </p>
                    <input type="search" class="strimers__content-search">
                </div>
                <button class="strimers__content-btn">
                    найти
                </button>
            </div>
            <div class="strimers__content-cards">
              <card />
            </div>
        </div>
    </section>
</template>

<style scoped>
.header__hero {
  flex-grow: 1;
  background-image: url(@/assets/images/header/headerImg.png);
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
.main__support {
padding: 150px 0 80px 0;
position: relative;
}

.main__support__content {
display: flex;
flex-direction: column;
gap: 400px;
}

.support__content-btns {
width: 65%;
display: flex;
flex-wrap: wrap;
column-gap: 14px;
row-gap: 19px;
}

.support__content-btn {
padding: 15px 25px;
font-family: var(--MB700);
font-size: 35px;
color: #fff;
border-radius: 10px;
background: linear-gradient(to right, #ff6d4d, #ff5631);
border: none;
text-transform: uppercase;
}

.support__content-btn:nth-child(2) {
background: #42444d;
}

.support__content-imgBox {
position: absolute;
top: -12%;
right: 260px;
width: 35%;
}

.support__content-img {
width: 100%;
}

.support__content-bottom {
width: 100%;
display: flex;
gap: 20px;
}

.support__content-subBtn {
/* width: 100%; */
padding: 15px 40px;
border: none;
border-radius: 20px;
font-family: var(--MB700);
font-size: 37.99px;
text-transform: uppercase;
background: #42444d;
color: #fff;
}

.support__content-subBtn:nth-child(2) {
padding: 15px 75px;
background: linear-gradient(to right, #ff6d4d, #ff5631);
}

.main__strimers {
padding: 50px 0 200px 0;
}

.main__strimers-content {
display: flex;
flex-direction: column;
gap: 60px;
}

.strimers__content-head {
display: flex;
justify-content: space-between;
align-items: end;
}

.strimers__content-searchBox {
width: 40%;
display: flex;
flex-direction: column;
gap: 15px;
}

.strimers__content-text {
font-family: var(--ML300);
font-size: 20px;
color: #42444d;
}

.strimers__content-search {
width: 100%;
padding: 20px 13px;
font-family: var(--MR400);
color: #42444d;
font-size: 20px;
outline: none;
border: solid 1px #42444d99;
border-radius: 10px;
}

.strimers__content-btn {
width: 21%;
border: solid 1px #ff5631;
color: #ff5631;
border-radius: 10px;
font-family: var(--MSB600);
font-size: 30px;
background: inherit;
height: 66px;
transition: 0.7s;
}

.strimers__content-btn:hover{
  color: #fff;
  background: linear-gradient(to right, #ff6d4d, #ff5631);
}

.strimers__content-cards{
  display: flex;
  align-items: flex-end;
  gap: 32px;
}
</style>