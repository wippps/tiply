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
                placeholder="Тут можно написать о себе или поблагодарить пользователей за поддержку "
                :maxLength="300"
                mode="auth"
                v-model="messageText"
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
            <div class="profile__content-verification">
                <div class="profile__content-image">
                    <h2 class="profile__content-title">
                        Подтверждение социальных сетей
                    </h2>
                    <img src="@/assets/images/components/verification.png" alt="" class="profile__content-img">
                    <button class="profile__content-camera">
                        <img src="@/assets/images/components/camera.png" alt="">
                    </button>
                </div>
                <div class="profile__content-warning">
                    <p class="profile__content-text">
                        Для подтверждения владения вашими социальными сетями, загрузите скриншот, который демонстрирует, что одна из социальных сетей принадлежит вам.
                    </p>
                    <button class="profile__content-send">
                        Отправить
                    </button>
                    <p class="profile__content-text">
                        Убедитесь в верности написанной информации. После отправки на модерацию, вам придется подождать некотрое время, прежде чем снова вносить изменения. 
                        Заявки рассматриваются в течение 24 часов.
                    </p>
                </div>
            </div>
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

        &-verification{
            display: flex;
            flex-direction: column;
            gap: 40px;
            margin-top: 50px;
            width: 100%;
        }

        &-warning{
            display: flex;
            flex-direction: column;
            gap: 25px;
        }

        &-text{
            font-weight: 300;
            font-size: 15px;
            color: #000000;
        }

        &-send{
            width: 100%;
            padding: 15px 0;
            background: #42444D;
            border-radius: 5px;

            font-weight: 700;
            font-size: 20px;
            color: #ffffff;
            border: none;
            cursor: pointer;
        }

        &-image{
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 40px;
        }

        &-camera{
            padding: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #FF6D4D;
            border-radius: 8px;
            border: none;
            position: absolute;
            right: 0;
            bottom: -19px;
        }
    }
}
</style>