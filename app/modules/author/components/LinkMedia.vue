<script setup>
import youtube from '@/assets/images/components/youtube.png';
import twitter from '@/assets/images/components/twitter.png';
import inst from '@/assets/images/components/inst.png';
import facebook from '@/assets/images/components/facebook.png';
import telegram from '@/assets/images/components/tg.png';
import twitch from '@/assets/images/components/twitch.png';

const images = [
  { src: youtube, alt: 'YouTube' },
  { src: twitter, alt: 'Twitter' },
  { src: inst, alt: 'Instagram' },
  { src: facebook, alt: 'Facebook' },
  { src: telegram, alt: 'Telegram' },
  { src: twitch, alt: 'twitch' }
];
</script>

<template>
    <div class="media" v-for="image in images" :key="image.alt">
        <div class="media__content">
            <input type="text" class="media__content-input" placeholder="Вставьте URL-ссылку на вашу соц-сеть">
            <button class="media__content-btn">
                <img :src="image.src" :alt="image.alt">
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.media{
    display: flex;
    align-items: center;
    gap: 20px;
    flex-direction: column;
    margin-bottom: 20px;
    

    &__content{
        width: 100%;
        display: flex;
        align-items: center;
        gap: 15px;

        &-input{
            width: 100%;
            padding: 20px;
            border-radius: 10px;
            border: 1px solid #E5E7EB;
            font-size: 15px;
            color: #42444D99;
            font-weight: 500;
            outline: none;

            &::placeholder{
                color: #42444D99;
                font-weight: 500;
                font-size: 15px;
            }
        }

        &-btn{
            width: 58px;
            height: 58px;
            border-radius: 10px;
            background-color: #FF5631;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            border: 1px solid #00000033;
        }
    }
}
</style>