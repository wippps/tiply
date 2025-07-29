<script setup>
defineProps({
  field: {
    type: Object,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);
function onInput(event) {
  emit("update:modelValue", event.target.value);
}
</script>

<template>
  <div class="field">
    <label>{{ field.label }}</label>
    <input :type="field.type" :value="modelValue" @input="onInput" />
  </div>
</template>

<style lang="scss" scoped>
.field {
  display: flex;
  flex-direction: column;
  & label {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 30px;
    color: #42444d;
  }

  & input {
    background: #d9d9d9;
    border: none;
    border-radius: 8px;
    padding: 15px 10px;
    outline: none;
    margin-top: 10px;

    font-size: 18px;

    font-family: "Montserrat";
    font-weight: 400;
  }
}
</style>