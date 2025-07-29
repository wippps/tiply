<script setup>
import { CopyLink } from '#components';
import { ref } from 'vue';

const isAnonymous = ref(false)
const payCommission = ref(false)
const rangeValue = ref(100);
const rangeInput = ref(null);
const active = ref(false)
const modaration = ref(false)

const updateValue = (e) => {
  rangeValue.value = e.target.value;
  updateFillStyle();
};

const updateFillStyle = () => {
  if (rangeInput.value) {
    const percent = (rangeValue.value / 200) * 100;
    rangeInput.value.style.setProperty('--fill-percent', `${percent}%`);
  }
};

const toggleAnonymous = () => {
    isAnonymous.value = !isAnonymous.value;
}

const toggleCommission = () => {
    payCommission.value = !payCommission.value;
}

const toggleActive = () => {
    active.value = !active.value;
}

const toggleModeration = () => {
    modaration.value = !modaration.value;
}

</script>

<template>
    <div class="setting">
        <div class="setting__content">
            <div class="setting__content-donation">
                <CopyLink type="page"/>
                <div class="setting__content-sums">
                    <div class="setting__content-minSum">
                        <h2 class="setting__content-sumTitle">
                            Минимальная сумма
                        </h2>
                        <input type="number" placeholder="5000" class="setting__content-sumInput">
                    </div>
                    <div class="setting__content-minSum">
                        <h2 class="setting__content-sumTitle">
                            Отображаемая сумма
                        </h2>
                        <input type="number" placeholder="5000" class="setting__content-sumInput">
                    </div>
                </div>
                <div class="setting__content-proposed">
                    <h2 class="setting__content-proposedTitle">
                        Предлагаемая сумма
                    </h2>
                    <div class="setting__content-amounts">
                        <input type="number" placeholder="10000" class="setting__content-amount">
                        <input type="number" placeholder="20000" class="setting__content-amount">
                        <input type="number" placeholder="50000" class="setting__content-amount">
                        <input type="number" placeholder="100000" class="setting__content-amount">
                        <input type="number" placeholder="250000" class="setting__content-amount">
                    </div>
                </div>
                <div class="setting__content-symbols">
                    <h2 class="setting__content-symbolTitle">
                        Количество символов в сообщении
                    </h2>
                    <div class="setting__content-bar">
                        <input 
                            type="range"
                            v-model="rangeValue"
                            min="0" 
                            max="200" 
                            step="1" 
                            @input="updateValue"
                            class="setting__content-rangeInput"
                        >
                        <button class="setting__content-rangeValue">
                            {{ rangeValue  }}
                        </button>
                    </div>
                </div>

                <div class="setting__content-textBtn">
                    <h2 class="setting__content-btnTitle">
                        Текст кнопки
                    </h2>
                    <input type="text" placeholder="Отправить" class="setting__content-btnInput">
                </div>

                <div class="setting__content-form">
                    <div class="setting__content-formImage">
                        <h3 class="setting__content-formTitle">
                            Изображение под формой
                        </h3>
                        <div class="setting__content-file">
                            <button class="setting__content-fileBtn">
                                <img src="@/assets/images/author/settings/file.png" alt="">
                            </button>
                            <h4 class="setting__content-fileTitle">
                                Заменить файл
                            </h4>
                        </div>  
                        <h4 class="setting__content-backTitle">
                            Изображение фона страницы 
                        </h4>
                        <div class="setting__content-back">
                            <img src="@/assets/images/author/settings/fon.png" alt="" class="setting__content-fon">
                            <img src="@/assets/images/home/chingiz.png" alt="" class="setting__content-avatar">
                        </div>
                        <p class="setting__content-hold">
                            ? Ожидайте подтверждения 
                        </p>
                        <div class="setting__content-checkbox">
                            <div class="setting__content-checkboxBtn" 
                                :class="{ active: isAnonymous }"
                                @click="toggleAnonymous"
                            >
                                <div class="setting__content-circle"></div>
                            </div>
                            <p class="setting__content-checkboxText">
                                Заполнять изображением все пространство фона
                            </p>
                        </div>
                    </div>
                    <div class="setting__content-qr">
                        <h2 class="setting__content-qrTitle">
                            QR-код
                        </h2>
                        <p class="setting__content-qrText">
                            Ваши зрители автоматически попадут на вашу страницу отправки сообщений после сканирования этого QR-кода.
                        </p>
                        <div class="setting__content-qrImage">
                            <img src="@/assets/images/author/settings/qr.png" alt="" class="setting__content-qrImg">
                            <div class="setting__content-qrBtns">
                                <button class="setting__content-qrBtn">
                                    Скачать PNG картинку кода
                                </button>
                                <button class="setting__content-qrBtn">
                                    Копировать URL картинки кода
                                </button>
                            </div>
                        </div>
                        <div class="setting__content-handler">
                            <button class="setting__content-qrReset">
                                <img src="@/assets/images/author/settings/setting.png" alt="">
                                Сбросить
                            </button>
                            <button class="setting__content-qrSave">
                                <img src="@/assets/images/author/settings/true.png" alt="">
                                Сохранить
                            </button>
                        </div>
                    </div>
                </div>
                <CopyLink type="alert"/>
                <p class="warning">
                    Никому не показывайте ссылку!
                </p>
                <div class="setting__content-events">
                    <div class="setting__content-event">
                        <h3 class="setting__content-title">
                            Событие 1
                        </h3>
                        <div class="setting__content-eventRedact">
                            <img src="@/assets/images/author/settings/fon.png" alt="" class="setting__content-eventImg">
                            <div class="setting__content-eventTools">
                                <div class="setting__content-eventTime">
                                    <p class="setting__content-eventText">
                                        8 сек
                                    </p>
                                    <div class="setting__content-eventCheck"> 
                                        <div class="setting__content-eventCheckbox" 
                                            :class="{ active: active }"
                                            @click="toggleActive"
                                        >
                                            <div class="setting__content-eventCircle"></div>
                                        </div>
                                        <p class="setting__content-eventTurn">
                                            Выкл
                                        </p>
                                    </div>
                                </div>
                                <div class="setting__content-volume">
                                    <div class="setting__content-volumeCount">
                                        <p class="setting__content-eventText">
                                            от 0
                                        </p>
                                        <button class="setting__content-volumeBtn">
                                            <img src="@/assets/images/author/settings/volume.png" alt="">
                                        </button>
                                    </div>
                                    <div class="setting__content-eventBtns">
                                        <button class="setting__content-eventHandler">
                                            <img src="@/assets/images/author/settings/setting.png" alt="">
                                        </button>
                                        <button class="setting__content-eventPlay">
                                            <img src="@/assets/images/author/settings/play.png" alt="">
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="setting__content-addEvent">
                        <h3 class="setting__content-title">
                            Событие
                        </h3>
                        <div class="setting__content-add">
                            <div class="setting__content-addTools">
                                <button class="setting__content-addBtn">
                                    <img src="@/assets/images/author/settings/plus.png" alt="">
                                </button>
                                <h4 class="setting__content-addTitle">
                                    Добавить еще
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="setting__content-moderation">
                    <p class="setting__content-moderationText">
                        Проводить модерацию через @Tirikchilikdonatbot
                    </p>
                    <div class="setting__content-checkboxBtn" 
                        :class="{ active: modaration }"
                        @click="toggleModeration"
                    >
                        <div class="setting__content-circle"></div>
                    </div>
                </div>
                <CopyLink type="widget" />
            </div>
            <div class="notification">
                <div class="notification__inputs">
                    <label class="input__label" for="">Тип данных</label>
                    <input class="input__field top__donations" type="text" placeholder="Топ донаты">
                    <label class="input__label" for="">Период</label>
                    <input class="input__field last__days" type="text" placeholder="За 7 дней">
                    <label class="input__label" for="">Топ донатер</label>
                    <div class="donate__inputs">
                        <input class="input__field donate__input" type="number" placeholder="5000">
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider"></span>
                        </label>
                    </div>
                </div>
                <div class="displayMethod">
                    <label class="input__label" for="">Способ отображения</label>
                    <input class="input__field method" type="text" placeholder="Список">
                    <label class="input__label" for="">Максимальное кол-во донатеров</label>
                    <input class="input__field max" type="number" placeholder="10">
                    <label class="input__label" for="">Длительность анимации</label>
                    <div class="input-wrapper">
                        <input type="number" value="3" min="0" />
                        <span>сек</span>
                    </div>
                </div>
            </div>
            <div class="setting__text">
                <h2 class="setting__text-title">
                    Текст
                </h2>
                <div class="setting__text-fonts">
                    <div class="setting__text-font">
                        <p class="setting__text-text">
                            Стиль заголовка
                        </p>
                        <div class="setting__text-fontStyle">
                            <button class="setting__text-fontBtn">
                                а
                            </button>
                            <p class="setting__text-fontText">
                                Стилизовать шрифт
                            </p>
                        </div>
                    </div>
                     <div class="setting__text-font">
                        <p class="setting__text-text">
                            Стиль донатеров
                        </p>
                        <div class="setting__text-fontStyle">
                            <button class="setting__text-fontBtn">
                                а
                            </button>
                            <p class="setting__text-fontText">
                                Стилизовать шрифт
                            </p>
                        </div>
                    </div>
                </div>
                <div class="setting__text-donat">
                    <img src="@/assets/images/author/settings/fon.png" alt="" class="setting__text-back">
                    <h3 class="setting__text-example">
                        Anonymus - 5000 NickName - 5000 Test - 20000
                    </h3>
                </div>
                <div class="setting__text-btns">
                    <button class="setting__text-btn orange">
                        <img src="@/assets/images/author/settings/setting.png" alt="">
                        Сбросить
                    </button>
                    <button class="setting__text-btn black">
                        <img src="@/assets/images/author/settings/true.png" alt="">
                        Сохранить
                    </button>
                    <button class="setting__text-btn grey">
                        <img src="@/assets/images/author/settings/play.png" alt="">
                        Посмотреть
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.setting{
    &__content{
        &-sums{
            display: flex;
            gap: 12px;
            align-items: center;
            margin-top: 30px;
            margin-bottom: 20px;
        }

        &-minSum{
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        &-sumTitle{
            font-weight: 700;
            font-size: 15px;
            color: #42444D;
        }

        &-sumInput{
            padding: 13px 12px;
            border: 1px solid #00000033;
            border-radius: 5px;
            font-weight: 500;
            font-size: 12px;
            color: #42444D;
            outline: none;

            &::placeholder{
                font-weight: 500;
                font-size: 12px;
                color: #42444D;
            }
        }

        &-proposed{
            display: flex;
            flex-direction: column;
            gap: 6px;
            margin-bottom: 30px;
        }
        
        &-proposedTitle{
            font-weight: 700;
            font-size: 15px;
            color: #42444D;
        }

        &-amounts{
            display: flex;
            gap: 12px;
            align-items: center;
        }

        &-amount{
            padding: 13px 12px;
            border: 1px solid #00000033;
            border-radius: 5px;
            font-weight: 500;
            font-size: 12px;
            color: #42444D;
            outline: none;
            width: 20%;

            &::placeholder{
                font-weight: 500;
                font-size: 12px;
                color: #42444D;
            }
        }

        &-symbolTitle{
            font-weight: 700;
            font-size: 15px;
            color: #42444D;
        }

        &-bar{
            display: flex;
            gap: 40px;
            align-items: center;
            margin-bottom: 15px;
        }

        &-rangeInput {
            width: 504px;
            height: 10px; 
            -webkit-appearance: none;
            background: transparent;
            margin: 15px 0;
            position: relative;

            &::-webkit-slider-runnable-track {
            width: 100%;
            height: 2px;
            background: #FF5631;
            border-radius: 1px;
            }

            &::-webkit-slider-thumb {
                -webkit-appearance: none;
                width: 20px; 
                height: 20px;
                background: #FF5631;
                border: 2px solid #FFFFFF;
                border-radius: 50%;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                cursor: pointer;
                margin-top: -9px; 
                position: relative;
                z-index: 2;
            }
        }

        &-rangeValue{
            padding: 10px 25px;
            border: 1px solid #00000033;
            background: inherit;
            width: 80px;

            font-weight: 500;
            font-size: 12px;
            color: #42444D;
            border-radius: 5px;
        }

        &-btnTitle{
            font-weight: 700;
            font-size: 15px;
            color: #42444D;
            margin-bottom: 12px;
        }

        &-btnInput{
            padding: 13px 12px;
            border: 1px solid #00000033;
            border-radius: 5px;
            font-weight: 500;
            font-size: 12px;
            color: #42444D;
            outline: none;
            width: 80%;

            &::placeholder{
                font-weight: 500;
                font-size: 12px;
                color: #42444D;
            }
        }
        
        &-form{
            margin-top: 44px;
            display: flex;
            gap: 60px;
            margin-bottom: 60px;
        }

        &-formTitle{
            font-weight: 700;
            font-size: 20px;
            color: #42444D;
        }

        &-file{
            display: flex;
            gap: 4px;
            align-items: center;
            margin-top: 10px;
        }

        &-fileBtn{
            padding: 2px;
            background: #FF5631;
            border-radius: 5px;
            border: none;
        }

        &-fileTitle{
            font-weight: 600;
            font-size: 13px;
            color: #42444D;
        }

        &-backTitle{
            margin: 20px 0 10px 0;
            font-size: 500;
            font-size: 10px;
            color: #42444D99;
        }

        &-back{
            position: relative;
        }

        &-fon{
            z-index: -1;
            position: relative;
        }

        &-avatar{
            position: absolute;
            top: 50%;
            left: 35%;
            width: 98px;
            height: 98px;
            top: 8%;
            left: 12%;
        }

        &-checkbox{
            display: flex;
            gap: 5px;
            align-items: center;
        }

        &-checkboxText{
            font-family: 'Montserrat';
            font-weight: 500;
            font-size: 10px;
            color: #42444D99;
        }

        &-hold{
            font-weight: 500;
            font-size: 10px;
            margin: 5px 0;
            color: #FF5631;
        }

        &-checkboxBtn{
            width: 40px;
            height: 17px;
            background: #D9D9D94F;
            border-radius: 10px;
            position: relative;
            cursor: pointer;
            transition: background 0.3s ease;

            &.active {
                background: #FF6D4D;

                & div {left: calc(100% - 17px);}
            }
        }

        &-circle{
            width: 15px;
            height: 15px;
            background: #fff;
            border-radius: 50%;
            position: absolute;
            left: 2px; 
            top: 1px;
            transition: left 0.3s ease; 
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }

        &-qrTitle{
            font-weight: 700;
            font-size: 20px;
            color: #42444D;
            margin-bottom: 12px;
        }

        &-qrText{
            font-weight: 500;
            font-size: 10px;
            color: #42444D99;
        }

        &-qrImage{
            display: flex;
            align-items: center;
            gap: 40px;
            margin: 20px 0 25px 0;
        }

        &-qrBtns{
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        &-qrBtn{
            padding: 9px 15px;
            background: #FF6D4D;
            border-radius: 5px;
            border: none;

            font-weight: 700;
            font-size: 9px;
            color: #FFFFFF;
            width: 80%;
        }

        &-handler{
            display: flex;
            gap: 10px;
        }

        &-qrReset{
            padding: 6px 8px;
            max-width: 126px;
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            
            font-weight: 700;
            font-size: 12px;
            color: #fff;
            background: #FF6D4D;
            border-radius: 5px;
            border: none;
        }

        &-qrSave{
            padding: 6px 8px;
            max-width: 126px;
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            
            font-weight: 700;
            font-size: 12px;
            color: #fff;
            background: #42444D;
            border-radius: 5px;
            border: none;
        }

        &-events{
            margin-top: 20px;
            display: flex;
            gap: 15px;
            justify-content: space-between;
        }

        &-event{
            padding: 15px 16px;
            background: #D9D9D94F;
            border-radius: 10px;
            width: 47%;
        }

        &-title{
            font-weight: 700;
            font-size: 10px;
            color: #42444D;
            margin-bottom: 8px;
        }

        &-eventRedact{
            padding: 11px;
            display: flex;
            background: #fff;
            border-radius: 10px;
            background-size: cover;
        }

        &-eventImg{
            width: 95px;
            height: 95px;
        }

        &-eventTools{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 11px;
            width: 100%;
        }

        &-eventTime{
            display: flex;
            justify-content: space-between;
        }

        &-eventText{
            font-size: 12px;
            font-weight: 500;
            color: #42444D;
        }

        &-volume{
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        }

        &-eventCheck{
            display: flex;
            align-items: center;
            gap: 5px;
        }

        &-eventCheckbox{
            width: 23px;
            height: 11px;
            background: #D9D9D94F;
            border-radius: 10px;
            position: relative;
            cursor: pointer;
            transition: background 0.3s ease;

            &.active {
                background: #FF6D4D;

                & div {left: calc(100% - 9px);}
            }
        }

        &-eventCircle{
            width: 8px;
            height: 8px;
            background: #fff;
            border-radius: 50%;
            position: absolute;
            left: 2px; 
            top: 1px;
            transition: left 0.3s ease; 
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }

        &-eventTurn{
            font-weight: 500;
            font-size: 12px;
            color: #42444D;
        }

        &-volumeBtn{
            padding: 3px;
            background: #42444D99;
            border-radius: 3px;
            border: none;
            display: flex;
            align-items: center;
        }

        &-eventBtns{
            display: flex;
            gap: 4px;
        }

        &-eventHandler{
            padding: 3px;
            background: #42444D99;
            border-radius: 3px;
            border: none;
            display: flex;
            align-items: center;
            height: 18px;

            & img{
                width: 12px;
                height: 12px;
            }
        }

        &-eventPlay{
            padding: 3px;
            background: #FF5631;
            border-radius: 3px;
            border: none;
            display: flex;
            align-items: center;
            height: 18px;

            & img{
                width: 12px;
                height: 12px;
            }
        }

        &-addEvent{
            padding: 15px 16px;
            background: #D9D9D94F;
            border-radius: 10px;
            width: 47%;
        }

        &-add{
            border: 1px dashed #00000033;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            height: 85%;
        }

        &-addTools{
            display: flex;
            gap: 7px;
            align-items: center;
        }

        &-addBtn{
            background: none;
            border: none;
        }

        &-addTitle{
            font-weight: 500;
            color: #42444D99;
        }

        &-moderation{
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }

        &-moderationText{
            margin-top: 15px;
            color: #FF5631;
            margin-right: 5px;
            margin-bottom: 80px;
        }
    }

    &__text{
        width: 60%;

        &-title{
            font-weight: 700;
            font-size: 15px;
            color: #42444D;
            margin-bottom: 15px;
        }

        &-fonts{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }

        &-text{
            font-weight: 500;
            font-size: 13px;
            color: #42444D;
            margin-bottom: 7px;
        }

        &-fontStyle{
            display: flex;
            gap: 4px;
            text-align: center;
            align-items: center;
        }
        
        &-fontBtn{
            padding: 0 3px;
            background: #FF6D4D;
            border-radius: 3px;

            font-weight: 500;
            font-size: 13px;
            color: #FFFFFF;
            border: none;
            text-align: center;
            height: 17px;
        }

        &-fontText{
            font-weight: 500;
            font-size: 10px;
            color: #42444D;
        }

        &-donat{
            position: relative;
            margin-bottom: 20px;
        }

        &-back{
            z-index: -1;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 321px;
            height: 158px;
        }

        &-example{
            position: absolute;
            top: 25%;
            left: 17%;
            width: 200px;

            font-size: 20px;
            color: #FF5631;
            text-align: center;
        }
        
        &-btns{
            display: flex;
            gap: 8px;
        }

        &-btn{
            width: 100px;
            padding: 5px;
            border: none;
            border-radius: 5px;
            display: flex;
            gap: 5px;
            align-items: center;

            font-weight: 700;
            font-size: 10px;
            color: #fff;

            & img{
                width: 19px;
                height: 19px;
            }

            &.grey{
                background: #42444DDB;
            }
            
            &.black{
                background: #42444D;
            }

            &.orange{
                background: #FF6D4D;
            }
        }
    }
}
.warning{
    font-weight: 500;
    font-size: 10px;
    color: #FF5631;
}
.notification {
    display: flex;
    gap: 15px;
    margin: 30px 0;

    &__inputs {
        display: flex;
        flex-direction: column;
    }
}

.switch {
    position: relative;
    width: 40px;
    height: 19px;

    & input {
        opacity: 0;
        width: 0px;
        height: 0;
    }
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    border-radius: 999px;
    transition: 0.3s;

    &::before{
        content: "";
        position: absolute;
        height: 17px;
        width: 17px;
        left: 1px;
        top: 1px;
        background-color: white;
        border-radius: 50%;
        transition: 0.3s;
    }

    &:checked+.slider {
        background-color: #4caf50;

    }

    &:checked+.slider::before {
        transform: translateX(21px);

    }
}

.input__label {
    font-weight: 700;
    font-size: 15px;
    color: #42444D;
    line-height: 100%;
    margin-bottom: 7px;
}

.input__field,.input-wrapper {
    border: 1px solid #00000033;
    border-radius: 5px;
    font-size: 12px;
    line-height: 100%;
    padding: 10px 0 10px 12px;
    outline: none;
}

.top__donations,
.last__days,
.method,
.max {
    margin-bottom: 13px;
}

.donate__inputs {
    display: flex;
    align-items: center;
    gap: 17px;
}

.donate__input {
    max-width: 145px;
    width: 100%;
}

.displayMethod {
    display: flex;
    flex-direction: column;
}

.input-wrapper span {    
    color: #888;
    margin-right: 15px;
}

.input-wrapper {
    display: flex;
    align-items: center;
    width: fit-content;
}

.input-wrapper input {
    border: none;
    outline: none;
}
</style>