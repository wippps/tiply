<script setup>
import Target from "../components/Target.vue"
</script>

<template>
    <div class="donation">
        <div class="donation__content container">
            <div class="donation__content-left">
                <div class="donation__content-profile">
                    <h3 class="donation__content-title">
                        Chingiz
                    </h3>
                    <div class="donation__content-social">
                        <div class="donation__content-username">
                            <p class="donation__content-text">
                                Username
                            </p>
                            <button class="donation__content-btnUser">
                                @chingiz_ogo
                            </button>
                        </div>
                        <div class="donation__content-medias">
                            <p class="donation__content-text">
                                Соц сети
                            </p>
                            <div class="donation__content-btns">
                                <button class="donation__content-btnSocial">
                                    <img src="@/assets/images/donation/socialMedias/inst.png" class="donation__content-imgSocial">
                                </button>
                                <button class="donation__content-btnSocial">
                                    <img src="@/assets/images/donation/socialMedias/tt.png" class="donation__content-imgSocial">
                                </button>
                                <button class="donation__content-btnSocial">
                                    <img src="@/assets/images/donation/socialMedias/youtube.png" class="donation__content-imgSocial">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="donation__content-comment">
                    <p class="donation__content-commentText">
                        Raxmat akalar podderjka qvotganila uchun 
                    </p>
                    <button class="donation__content-commentBtn">
                        @chingiz_ogo
                    </button>
                </div>
                <Target />
            </div>
            <div class="donation__content-right">
                <PayForm />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.donation{
    padding: 100px 0 200px 0;

    &__content{
        display: flex;
        gap: 90px;

        &-title{
            font-size: 50px;
            color: #42444D;
            margin-bottom: 20px;
        }

        &-social{
            display: flex;
            gap: 25px;
            align-items: center;
        }

        &-text{
            font-size: 15px;
            color: #000;
            margin-bottom: 12px;
        }

        &-btnUser{
            padding: 10px;
            font-size: 20px;
            color: #fff;

            background: #FF5631;
            border-radius: 10px;
            border: none;
        }

        &-btns{
            display: flex;
            gap: 10px;
            align-items: center;
        }

        &-btnSocial{
            width: 37px;
            height: 37px;
            background: #42444D;
            border-radius: 5px;
            border: none;
        }

        &-comment{
            padding: 20px 40px 40px 20px;
            margin-top: 50px;
            border: 1px solid #00000033;
            border-radius: 20px;
            position: relative;
        }

        &-commentText{
            font-size: 15px;
            color: #000;
            width: 80%;
        }

        &-commentBtn{
            padding: 5px 8px;
            background: #FF5631;
            border-radius: 4px;
            border: none;
            font-size: 10px;
            position: absolute;
            bottom: -10%;
            color: #fff;
        }
    }
}
</style>