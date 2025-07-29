<template>
    <div class="donation">
        <div class="donation__head">
            <img src="@/assets/images/home/chingiz.png" alt="" class="donation__head-img">
            <img src="@/assets/images/donation/chingiz.png" alt="" class="donation__head-img">
        </div>
        <div class="donation__content container">
            <UserDonation />
            <div class="donation__content-right">
                <PayForm />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.donation{
    padding: 100px 0 200px 0;

    &__head{
        display: flex;
        gap: 25px;
        align-content: center;
        justify-content: center;
        margin-bottom: 40px;
    }

    &__content{
        display: flex;
        justify-content: space-between;
    }
}
</style>