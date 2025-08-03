<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'Введите сообщение'
  },
  maxLength: {
    type: Number,
    default: 100
  },
  mode: {
    type: String as PropType<'user' | 'auth'>,
    default: 'auth'
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const localValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});
</script>

<template>
  <div 
    class="message"
    :class="`message__${mode}`"
  >
    <textarea 
      class="message__textarea" 
      :placeholder="placeholder"
      v-model="localValue"
      :maxlength="maxLength"
      :disabled="disabled"
      @input="handleInput"
    ></textarea>
    <p class="message__limit">
      <span>{{ localValue.length }}</span>/{{ maxLength }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.message{
  position: relative;
  margin-bottom: 27px;

  &__textarea{
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

  &__limit{
    position: absolute;
    bottom: 15px;
    right: 25px;
    font-weight: 500;
    color: #42444D;
    font-size: 10px;
  }
}

.message__auth{
  position: relative;
  margin-bottom: 77px;
  
  .message__textarea{
    width: 100%;
    height: 200px;
    padding: 15px;
    border: 1px solid #00000033;
    border-radius: 20px;
    font-weight: 500;
    font-size: 12px;
    color: #42444D99;
    outline: none;
    resize: none;

    .message::placeholder{
      color: #42444D99;
      font-weight: 500;
      font-size: 12px;
    }
  }

  .message__limit{
    position: absolute;
    bottom: 15px;
    right: 25px;
    font-weight: 500;
    color: #42444D;
    font-size: 10px;
  }
}
</style>