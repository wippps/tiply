<script setup>
import { ref } from 'vue';

const isAnonymous = ref(false)
const payCommission = ref(false)
const activeButton = ref(null)

const inputValue = ref('')
const message = ref('');
const cardNumber = ref('');
const cardDate = ref('');

const resetForm = () => {
  inputValue.value = '';
  isAnonymous.value = false;
  payCommission.value = false;
  message.value = '';
}

const toggleAnonymous = () => {
    isAnonymous.value = !isAnonymous.value;
}

const toggleCommission = () => {
    payCommission.value = !payCommission.value;
}

const transferAmounts = ["10 000", "20 000", "50 000", "100 000"];

const setTransferAmount = (amount) => {
  inputValue.value = amount;
}

const setActiveButton = (index) => {
  if (activeButton.value === index) {
    activeButton.value = null;
  } else {
    activeButton.value = index;
  }
}

const formatCardNumber = () => {
  let formatted = cardNumber.value.replace(/\D/g, '');
  
  formatted = formatted.replace(/(.{4})(?=.)/g, '$1 '); 
  
  cardNumber.value = formatted;
};

const formatCardDate = () => {
    let formatted = cardDate.value.replace(/\D/g, '');
    if (formatted.length > 2) {
        formatted = formatted.slice(0, 2) + '/' + formatted.slice(2, 4);
    }

    cardDate.value = formatted;
}

</script>

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
                    <div class="pay__register-checkboxBtn" 
                        :class="{ active: isAnonymous }"
                        @click="toggleAnonymous"
                    >
                        <div class="pay__register-circle"></div>
                    </div>
                </div>
            </div>
            <div class="pay__register-donation">
                <input type="text" class="pay__register-input" :min="5000" placeholder="5.000" v-model="inputValue">
                <div class="pay__register-wallet">
                    <img src="@/assets/images/donation/pay/wallet.png" alt="">
                </div>
                <div class="pay__register-checkbox">
                    <p class="pay__register-checkboxText">
                        оплачу сам комиссию
                    </p>
                    <div class="pay__register-checkboxBtn" 
                        :class="{ active: payCommission }"
                        @click="toggleCommission"
                    >
                        <div class="pay__register-circle"></div>
                    </div>
                </div>
            </div>
            <div class="pay__register-prompt">
                <p class="pay__register-promptText">
                    Минимум: 5 000 UZS
                </p> 
                <p class="pay__register-promptText">
                    Автор получит 7 600 UZS
                </p> 
            </div>
            <div class="pay__register-btns">
                <button class="pay__register-transfer"
                    v-for="amount in transferAmounts"
                    :key="amount"
                    @click="setTransferAmount(amount)"
                    type="button"
                >
                    {{ amount }} <span>UZS</span>
                </button>
            </div>
            <Message 
                v-model="message"
                mode="user"
                placeholder="Введите сообщение к донату"
                :max-length="100"
            />
        </div>
        <div class="pay__type">
            <h3 class="pay__type-title">
                Выберите способ оплаты:
            </h3>
            <div class="pay__type-btns">
                <button 
                    class="pay__type-transfer" 
                    type="button"
                    @click="setActiveButton(0)"
                    :class="{ active: activeButton === 0 }"
                >
                    <img src="@/assets/images/donation/pay/uzcard.png" class="pay__type-img">
                    <img src="@/assets/images/donation/pay/humo.png" class="pay__type-img">
                </button>
                <button
                    class="pay__type-transfer" 
                    type="button"
                    @click="setActiveButton(1)"
                    :class="{ active: activeButton === 1 }"
                >
                    <img src="@/assets/images/donation/pay/payMe.png" class="pay__type-img">
                </button>
                <button
                    class="pay__type-transfer" 
                    type="button"
                    @click="setActiveButton(2)"
                    :class="{ active: activeButton === 2 }"
                >
                    <img src="@/assets/images/donation/pay/uzum.png" class="pay__type-img">
                </button>
                <button
                    class="pay__type-transfer" 
                    type="button"
                    @click="setActiveButton(3)"
                    :class="{ active: activeButton === 3 }"
                >
                    <img src="@/assets/images/donation/pay/click.png" class="pay__type-img">
                </button>
            </div>
            <div class="pay__type-texts">
                <p class="pay__type-text">
                    Номер карты:
                </p>
                <p class="pay__type-text">
                    Срок действия карты
                </p>
            </div>
            <div class="pay__type-card">
                <input type="text" class="pay__type-cardNumber" placeholder="7777 8888 9999 0000" maxlength="19" v-model="cardNumber" @input="formatCardNumber">
                <input type="text" class="pay__type-cardDate" placeholder="01/25" v-model="cardDate" @input="formatCardDate">
            </div>
            <button class="pay__type-donation">
                <img src="@/assets/images/donation/pay/gift.png" alt="arrow" class="pay__type-arrow">
                Оплатить
            </button>
        </div>
    </form>
</template>

<style lang="scss" scoped>
.pay{
    padding: 140px 60px 70px 60px;
    position: relative;
    border: 1px solid #00000033;
    border-radius: 20px;

    &__btn{
        padding: 10px 0;
        background: linear-gradient(90deg, #FF5631 0%, #FF6D4D 100%);
        border-radius: 20px;
        border: none;
        color: #fff;
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 35px;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 100%;
        position: absolute;
        left: 0;
        top: -1px;
    }

    &__register{
        &-title{
            font-family: 'Montserrat';
            font-weight: 700;
            font-size: 20px;
            color: #42444D;
            margin-bottom: 30px;
        }

        &-donation{
            padding: 17px 25px 18px 70px;
            position: relative;
            border: 1px solid #00000033;
            border-radius: 10px;
            margin-bottom: 17px;
        }

        &-input{
            border: none;
            color: #000;
            font-weight: 200;
            font-size: 15px;
            outline: none;
            
            &::placeholder{
                font-weight: 200;
                font-size: 15px;
                color: #000;
            }
        }

        &-user{
            padding: 11px 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #FF6D4D;
            border-radius: 10px;
            background: #FF6D4D;
            position: absolute;
            left: -1px;
            top: 0;
        }

        &-wallet{
            padding: 11px 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            border-radius: 10px;
            background: #42444D;
            position: absolute;
            left: -1px;
            top: 0;

            img{
                width: 33px;
                height: 33px;
            }
        }

        &-checkbox{
            display: flex;
            align-items: center;
            gap: 10px;
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
        }

        &-checkboxText{
            font-family: 'Montserrat';
            font-weight: 500;
            font-size: 12px;
            color: #42444D;
            margin-right: 12px;
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

        &-prompt{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 27px;
        }

        &-promptText{
            font-weight: 500;
            font-size: 10px;
            color: #42444D;
        }

        &-btns{
            display: flex;
            gap: 15px;
            align-items: center;
            margin-bottom: 45px;
        }

        &-transfer{
            padding: 12px 20px;
            background: linear-gradient(90deg, #FF5631 0%, #FF6D4D 100%);
            border-radius: 30px;
            border: none;

            font-weight: 700;
            font-size: 15px;
            color: #fff;

            & span{
                font-weight: 500;
            }
        }
        
        &-message{
            position: relative;
            margin-bottom: 27px;
        }

        &-textarea{
            width: 100%;
            height: 140px;
            padding: 15px 25px;
            border: 1px solid #00000033;
            border-radius: 20px;
            font-weight: 500;
            font-size: 12px;
            color: #42444D99;
            outline: none;
            resize: none;

            &::placeholder{
                color: #42444D99;
                font-weight: 500;
                font-size: 12px;
            }
        }

        &-limit{
            position: absolute;
            bottom: 15px;
            right: 25px;
            font-weight: 500;
            color: #42444D;
            font-size: 10px;
        }
    }

    &__type{
        &-title{
            font-weight: 700;
            font-size: 20px;
            color: #42444D;
            margin-bottom: 10px;
        }

        &-btns{
            display: flex;
            gap: 15px;
            align-items: center;
            justify-content: center;
            margin-bottom: 30px;
        }

        &-transfer{
            height: 75px;
            width: 25%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            background: #00000033;
            border-radius: 15px;
            border: none;

            &.active {
                background: linear-gradient(90deg, #FF5631 0%, #FF6D4D 100%);
            }
        }

        &-texts{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &-text{
            font-weight: 700;
            font-size: 10px;
            color: #42444D;
            margin-bottom: 7px;
        }

        &-card{
            display: flex;
            gap: 17px;
            align-items: center;
        }

        &-cardNumber{
            width: 80%;
            padding: 15px;
            border: 1px solid #00000033;
            border-radius: 10px;
            outline: none;

            font-weight: 500;
            font-size: 15px;
            color: #000;

            &::placeholder{
                font-weight: 500;
                font-size: 15px;
                color: #000;
            }
        }

        &-cardDate{
            width: 23%;
            padding: 15px;
            border: 1px solid #00000033;
            border-radius: 10px;
            outline: none;
            text-align: center;

            font-weight: 500;
            font-size: 15px;
            color: #000;

            &::placeholder{
                font-weight: 500;
                font-size: 15px;
                color: #000;
            }
        }

        &-donation{
            display: flex;
            gap: 7px;
            align-items: center;
            padding: 10px 0;
            background: linear-gradient(90deg, #FF5631 0%, #FF6D4D 100%);
            border-radius: 20px;
            width: 100%;
            margin-top: 37px;
            justify-content: center;
            border: none;

            font-weight: 700;
            font-size: 20px;
            color: #fff;
        }
    }
}
</style>