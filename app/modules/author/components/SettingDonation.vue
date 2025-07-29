<script setup>
import { ref } from 'vue';

const isAnonymous = ref(false)
const payCommission = ref(false)
const rangeValue = ref(100);
const rangeInput = ref(null);
const active = ref(false)

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
                                    <div class="setting__content-eventCheckbox" 
                                        :class="{ active: active }"
                                        @click="toggleActive"
                                    >
                                        <div class="setting__content-eventCircle"></div>
                                    </div>
                                    <p class="setting__content-checkboxText">
                                        Выкл
                                    </p>
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
                                        <button class="settibg__content-eventHandler">
                                            <img src="@/assets/images/author/settings/setting.png" alt="">
                                        </button>
                                        <button class="settibg__content-eventHandler">
                                            <img src="@/assets/images/author/settings/play.png" alt="">
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="setting__content-addEvent">
                        <h3 class="setting__content-eventTitle">
                            Событие
                        </h3>
                        <div class="setting__content-add">
                            <div class="setting__content-addTools">
                                <button class="setting__content-addBtn">
                                    <img src="" alt="">
                                </button>
                                <h4 class="setting__content-addTitle">
                                    Добавить еще
                                </h4>
                            </div>
                        </div>
                    </div>
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
        }

        &-event{
            padding: 15px 16px;
            background: #D9D9D94F;
            border-radius: 10px;
            width: 45%;
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
    }
}
.warning{
    font-weight: 500;
    font-size: 10px;
    color: #FF5631;
}
</style>