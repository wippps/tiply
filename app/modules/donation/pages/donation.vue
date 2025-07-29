<script setup lang="ts">
import ProfilePhoto from '~/components/ProfilePhoto.vue';

</script>

<template>
    <div class="donation">
        <ProfilePhoto />
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

    &__content{
        display: flex;
        justify-content: space-between;
    }
}
</style>