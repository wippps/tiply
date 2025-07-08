<template>
  <header class="header">
      <nav class="header__nav">
          <div class="header__nav-content container">
              <div class="header__nav-logoBox">
                  <img src="@/assets/images/header/logo.png" alt="" class="header__nav-logo">
              </div>
              <div class="header__nav-right">
                  <button class="header__nav-langBtn">
                    EN
                  </button>
                  <button class="header__nav-signBtn">
                      <img src="@/assets/images/header/exitIcon.png" alt="" class="header__nav-icon">
                      <p class="header__nav-text">
                        SIGN UP
                      </p>
                  </button>
              </div>
          </div>
      </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
}

.header__nav {
  padding: 40px 0;
}

.header__nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__nav-logoBox {
  width: 20%;
}

.heaedr__nav-logo {
  width: 100%;
}

.header__nav-right {
  display: flex;
  align-items: center;
  gap: 30px;
}

.header__nav-langBtn {
  border: none;
  background-color: inherit;
  font-family: var(--MM500);
  font-size: 20px;
  color: #42444d;
  cursor: pointer;
}

.header__nav-signBtn {
  border: none;
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 8px 17px;
  background-color: #42444d;
  border-radius: 10px;
  cursor: pointer;
}

.header__nav-text {
  font-family: var(--MR400);
  font-size: 20px;
  color: #fff;
}
</style>