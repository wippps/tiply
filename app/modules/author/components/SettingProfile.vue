<template>
    <div class="profile">
        <div class="profile__content">
            <form class="profile__content-form">
                <label class="profile__content-label">
                    Счет
                </label>
                <input type="text" class="profile__content-input">
                <label class="profile__content-label">
                    Имя
                </label>
                <input type="text" class="profile__content-input">
                <label class="profile__content-label">
                    Псевдоним
                </label>
                <input type="text" class="profile__content-input">
                <label class="profile__content-label">
                    Никнейм
                </label>
                <input type="text" class="profile__content-input">
            </form>
            <h2 class="profile__content-title">
                Текст
            </h2>
            <Message 
                placeholder="Введите сообщение"
                maxLength="300"
                mode="auth"
            />
            <div class="profile__content-medias">
                <h2 class="profile__content-title">
                    Социальные сети
                </h2>
                <p class="profile__content-mediasText">
                    Указанные социальные сети должны быть в открытом доступе и принадлежать вам.
                </p>
            </div>
            <LinkMedia />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.profile{
    width: 60%;
    &__content{
        &-form{
            display: flex;
            flex-direction: column;
            width: 100%;
        }

        &-label{
            font-weight: 700;
            font-size: 20px;
            color: #42444D;
            margin-bottom: 8px;
        }

        &-input{
            width: 100%;
            padding: 20px;
            border: 1px solid #00000033;
            border-radius: 10px;
            margin-bottom: 30px;
            outline: none;
        }

        &-title{
            font-weight: 700;
            font-size: 25px;
            color: #42444D;
            margin-bottom: 10px;
        }

        &-mediasText{
            font-weight: 500;
            font-size: 15px;
            color: #42444D99;
            margin-bottom: 35px;
        }
    }
}
</style>