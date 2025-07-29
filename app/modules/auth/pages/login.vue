<script setup>
import { useAuthStore } from '../stores/useAuth'

const authStore = useAuthStore()

const fields = [
  { label: "Ввдеит юзернейм", type: "text", value: "" },
  { label: "Введите пароль", type: "password", value: "" },
];

const currentStep = ref(0);

const changeStep = (e) => {
  e.preventDefault();
  if (currentStep.value < 1) {
    currentStep.value++;
  } else {
    const user = {
      username: fields[0].value,
      password: fields[1].value,
      act: 'auth',
      type: 'user'
    };

    authStore.login(user)
  }
};
</script>

<template>
  <section class="auth container">
    <div class="auth__head">
      <h2 class="auth__title">Добро пожаловать</h2>
      <p class="auth__text">Введите свои данные для входа в аккаунт</p>
    </div>
    <div class="auth__content">
      <form action="" class="auth__content-form">
        <ui-field
          v-for="(field, idx) of fields"
          :key="idx"
          v-model="field.value"
          :field="field"
          class="auth__content-field"
          v-show="currentStep === idx"
        />
        <button class="auth__content-btn" @click="changeStep">
          {{ currentStep === 0 ? "Далее" : "Войти" }}
        </button>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.auth {
  padding-bottom: 120px;
  &__head {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 40px;
    background: #42444d;
    color: white;
    padding: 15px 25px;
    border-radius: 20px;
  }

  &__text {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 30px;
    background: linear-gradient(180deg, #ff6d4d 0%, #ff5631 100%);
    color: white;
    padding: 10px 20px;
    border-radius: 15px;
    margin-top: 15px;
    transform: rotate(2deg);
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 80px;

    &-form {
      max-width: 600px;
      width: 100%;

      display: flex;
      flex-direction: column;
    }

    &-btn {
      font-family: "Montserrat";
      font-weight: 600;
      font-size: 30px;

      color: white;
      background: #ff6d4d;

      border: none;
      border-radius: 8px;
      padding: 10px 0;

      margin-top: 50px;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background: #cb5338;
      }
    }
  }
}
</style>