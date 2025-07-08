<script setup>
import { ref } from 'vue'

import kakletkaImg from '@/assets/images/home/kakletka.png';
import chingizImg from '@/assets/images/home/chingiz.png';
import yakudzaImg from '@/assets/images/home/yakudza.png';
import raisboyImg from '@/assets/images/home/raisboy.png';

const cards = ([
    {name: 'kakletka', src: kakletkaImg},
    {name: 'chingiz', src: chingizImg},
    {name: 'yakudza', src: yakudzaImg},
    {name: 'raisboy', src: raisboyImg}
])
</script>


<template>
    <div class="card"
    v-for=" item in cards"
    :key = item.name
    >
        <div class="card__border">
            <img :src="item.src" class="card__img">
        </div>
        <button class="card__btn">
            {{ item.name.toUpperCase() }}
        </button>
    </div>
</template>

<style lang="scss" scoped>
.card{
    display: flex;
    flex-direction: column;
    gap: 30px;

    &__border{
        padding: 30px;
        background: linear-gradient(90deg, #FF6D4D 0%, #FF5631 100%);
        border-radius: 30px;
    }

    &__btn{
        padding: 15px 30px;
        background: #42444D;
        border-radius: 20px;
        border: none;

        font-size: 30px;
        color: #fff;
    }
}
</style>