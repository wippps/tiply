<template>
    <div class="profile">
        <ProfilePhoto />
        <div class="profile__content container">
            <UserDonation />
            <SettingDonation />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.profile{
    padding: 140px 0 340px 0;
    &__content{
        display: flex;
        gap: 130px;
    }
}
</style>