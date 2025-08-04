<script setup>
const labels = ([
    {text: "Счет"},
    {text: "Имя"},
    {text: "Псевдоним"},
    {text: "Никнейм"},
])

</script>

<template>
    <div class="inputBox" v-for="label in labels" :key="label.id">
        <label for="input" class="inputBox__label">{{ label.text }}</label>
        <input type="text" id="input" class="inputBox__input">
    </div>
</template>

<style lang="scss" scoped>
.inputBox {
    max-width: 630px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;

    &__label {
        font-size: 20px;
        font-family: Montserrat;
        font-weight: 700;
        color: #42444D;
    }


    &__input {
        padding: 20px;
        outline: none;
        border: 1px solid #00000033;
        border-radius: 10px;
    }
}
</style>