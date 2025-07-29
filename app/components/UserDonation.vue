<template>
    <div class="user">
        <div class="donation">
            <div class="donation__content">
                <div class="donation__content-profile">
                    <h3 class="donation__content-title">
                        Chingiz
                    </h3>
                    <div class="donation__content-social">
                        <div class="donation__content-username">
                            <p class="donation__content-text">
                                Username
                            </p>
                            <button class="donation__content-btnUser">
                                @chingiz_ogo
                            </button>
                        </div>
                        <div class="donation__content-medias">
                            <p class="donation__content-text">
                                Соц сети
                            </p>
                            <div class="donation__content-btns">
                                <button class="donation__content-btnSocial">
                                    <img src="@/assets/images/donation/socialMedias/inst.png" class="donation__content-imgSocial">
                                </button>
                                <button class="donation__content-btnSocial">
                                    <img src="@/assets/images/donation/socialMedias/tt.png" class="donation__content-imgSocial">
                                </button>
                                <button class="donation__content-btnSocial">
                                    <img src="@/assets/images/donation/socialMedias/youtube.png" class="donation__content-imgSocial">
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="donation__content-comment">
                        <p class="donation__content-commentText">
                            Raxmat akalar podderjka qvotganila uchun 
                        </p>
                        <button class="donation__content-commentBtn">
                            @chingiz_ogo
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="target">
            <h2 class="target__titleKit">Цель набора:</h2>
            <h3 class="target__titleHeadphone">НАУШНИКИ XYPER X PRO LINE</h3>
            <div class="target__circle">
                <div class="circle-progress">
                    <div class="circle-progress__collected"></div>
                    <div class="circle-progress__needed"></div>
                    <div class="circle-progress__center">
                        <p class="target__textCollected">Собрано</p>
                        <p class="target__textNeeded">Нужно собрать</p>
                    </div>
                </div>
            </div>
            <h3 class="target__completed">
                Собрано: <span>1250$</span>
            </h3>
            <h3 class="target__completed">
                Нужная сумма: <span>2000$</span>
            </h3>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.user{
    display: flex;
    flex-direction: column;
}
.donation{
    &__content{
        display: flex;
        gap: 90px;

        &-title{
            font-size: 50px;
            color: #42444D;
            margin-bottom: 20px;
        }

        &-social{
            display: flex;
            gap: 25px;
            align-items: center;
        }

        &-text{
            font-size: 15px;
            color: #000;
            margin-bottom: 12px;
        }

        &-btnUser{
            padding: 10px;
            font-size: 20px;
            color: #fff;

            background: #FF5631;
            border-radius: 10px;
            border: none;
        }

        &-btns{
            display: flex;
            gap: 10px;
            align-items: center;
        }

        &-btnSocial{
            width: 37px;
            height: 37px;
            background: #42444D;
            border-radius: 5px;
            border: none;
        }

        &-comment{
            padding: 20px 40px 40px 20px;
            margin-top: 50px;
            border: 1px solid #00000033;
            border-radius: 20px;
            position: relative;
        }

        &-commentText{
            font-size: 15px;
            color: #000;
            width: 80%;
        }

        &-commentBtn{
            padding: 5px 8px;
            background: #FF5631;
            border-radius: 4px;
            border: none;
            font-size: 10px;
            position: absolute;
            bottom: -10%;
            color: #fff;
        }

        &-targetTitle{
            font-family: 'Montserrat';
            font-weight: 700;
            font-size: 30px;
            color: #42444D;
        }

        &-targetHeadphones{
            font-family: 'Montserrat';
            font-weight: 700;
            font-size: 16px;
            color: #FF5631;
        }

        &-targetCircle{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px;
        }
    }
}

.target {
    padding: 30px 60px;
    border-radius: 30px;
    box-shadow: 0px 4px 40px 5px #0000001A;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 160px;

    &__titleKit {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 30px;
        color: #42444D;
        margin-bottom: 15px;
    }

    &__titleHeadphone {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 18px;
        color: #FF5631;
        margin-bottom: 30px;
    }

    &__circle {
        position: relative;
        width: 300px;
        height: 300px;
        margin: 30px 0;
    }

    &__completed{
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 20px;
        color: #42444D;

        & span{
            color: #FF5722;
        }
    }
}

.circle-progress {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    
    &__needed {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        clip: rect(0, 151px, 173px, 0);
        background: #FF5722;
        transform: rotate(-22deg);
    }

    &__collected {
        background: #42444D;
        transform: rotate(0deg); 
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        clip: rect(0, 300px, 300px, 0);
    }

    &__center {
        position: absolute;
        width: 160px;
        height: 160px;
        background: white;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: inset 0 0 10px rgba(0,0,0,0.1);
    }
}

.target__textCollected {
    color: #FF5631;
    position: absolute;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 12px;
    left: -65%;
    top: -17%;
}

.target__textNeeded {
    color: #42444D;
    position: absolute;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 12px;
    left: 140%;
    bottom: -12%;
}
</style>

