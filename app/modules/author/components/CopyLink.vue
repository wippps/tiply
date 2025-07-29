<script setup>
const props = defineProps({
  type: { 
    type: String,
    default: 'page', // 'page' | 'alert' | 'widget'
    validator: (value) => ['page', 'alert', 'widget'].includes(value)
  }
})

const items = {
  page: {
    title: 'Настройки страницы доната',
    text: 'Основная ссылка. По указанной ниже ссылке Ваши зрители могут отправить Вам донат.',
    mark: 'Это ваша персональная ссылка для получения донатов. Вы можете скопировать и разместить в ваших соц.сетях.',
    link: 'https://t.me/Tirikchilikdonatbot'
  },
  alert: {
    title: 'Настройки оповещения для доната',
    text: 'Пожалуйста, создайте события, от которых будет зависеть оповещение на стриме. Это позволит вам получать уведомления во время трансляции.',
    mark: 'Это ссылка для появления донатов на стриме, запустив его через OBS с использованием этой ссылки.',
    link: 'https://t.me/Tirikchilikdonatbot/alert'
  },
  widget: {
    title: 'Виджет донатов',
    text: 'Создайте виджет донатов за все время.',
    mark: 'Это ссылка для появления списка донатов на стриме через OBS.',
    link: 'https://t.me/Tirikchilikdonatbot/widget'
  }
}

const currentItem = items[props.type]

const copyLink = () => {
  navigator.clipboard.writeText(currentItem.link)
}
</script>

<template>
    <div class="setting">
        <div class="setting__content">
            <div class="setting__content-donationMarker">
                <buttton class="setting__content-questionIcon">
                    <img src="@/assets/images/author/settings/question.png" alt="">
                </buttton>
                <h4 class="setting__content-donationTitle">
                    {{ currentItem.title }}
                </h4>
            </div>
            <p class="setting__content-settingsText">
                {{ currentItem.text }}
            </p>
            <div class="setting__content-copy">
                {{ currentItem.link }}
                <button class="setting__content-copyBtn">
                    скопировать
                    <img src="@/assets/images/author/settings/copy.png" alt="">
                </button>
            </div>
            <p class="setting__content-mark">
                {{ currentItem.mark }}
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.setting{
    &__content{
        &-donationMarker{
            display: flex;
            gap: 5px;
            align-items: center;
        }

        &-questionIcon{
            padding: 6px;
            border-radius: 5px;
            background: #FF6D4D;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &-donationTitle{
            font-size: 20px;
            font-weight: 700;
            color: #42444D;
        }

        &-settingsText{
            font-weight: 500;
            font-size: 13px;
            color: #42444D;
            margin: 15px 0 30px 0;
            letter-spacing: 0;
        }

        &-copy{
            padding: 11px 35px 11px 25px;
            background: #FF563166;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 500;
            font-size: 12px;
            color: #42444D;
            border-radius: 10px;
        }

        &-copyBtn{
            padding: 6px 10px;
            background: #fff;
            border-radius: 8px;
            border: none;
            
            font-weight: 500;
            font-size: 15px;
            color: #42444D;

            display: flex;
            align-items: center;
            gap: 5px;
        }

        &-mark{
            font-weight: 500;
            font-size: 10px;
            color: #42444D99;
            margin-top: 6px;
        }
    }
}
</style>