<script setup>
import { ref } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

const fieldType = ref(true)

function switchField() {
    fieldType.value = !fieldType.value
}
</script>

<template>
    <div class="register">
        <input 
            :type="fieldType ? type : 'text'"
            class="register__field"
        />
        <button 
            class="register__show"
            @click.prevent="switchField"
            type="button"
        >
            <img src="@/assets/images/components/show.png" alt="" v-if="type === 'password'">
        </button>
    </div>
</template>

<style lang="scss" scoped>
.register {
    position: relative;
    &__field {
        width: 100%;
        background: #D9D9D9;
        border: none;
        border-radius: 20px;
        padding: 30px;
        outline: none;
        color: #42444D99;
        font-size: 18px;
    }

    &__show {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        background: transparent;
        border: none;
        cursor: pointer;

        & img{
            width: 50px;
            height: 50px;
        }
    }
}
</style>