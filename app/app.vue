<template>
  <div class="wrapper">
    <AppHeader />
    <div class="wrapper__content">
      <NuxtPage />
    </div>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &__content {
    flex-grow: 1;
  }
}
</style>