<template>
    <div class="target">
        <h2 class="target__titleKit">Цель набора:</h2>
        <h3 class="target__titleHeadphone">НАУШНИКИ XYPER X PRO LINE</h3>
        <div class="target__circle">
            <div class="circle-progress">
                <div class="circle-progress__collected"></div>
                <div class="circle-progress__needed"></div>
                <div class="circle-progress__center">
                    <p class="target__textCollected">Собрано</p>
                    <p class="target__textNeeded">Нужно собрать</p>
                </div>
            </div>
        </div>
        <h3 class="target__completed">
            Собрано: <span>1250$</span>
        </h3>
        <h3 class="target__completed">
            Нужная сумма: <span>2000$</span>
        </h3>
    </div>
</template>

<style lang="scss" scoped>
.target {
    padding: 30px 60px;
    border-radius: 30px;
    box-shadow: 0px 4px 40px 5px #0000001A;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 160px;

    &__titleKit {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 30px;
        color: #42444D;
        margin-bottom: 15px;
    }

    &__titleHeadphone {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 18px;
        color: #FF5631;
        margin-bottom: 30px;
    }

    &__circle {
        position: relative;
        width: 300px;
        height: 300px;
        margin: 30px 0;
    }

    &__completed{
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 20px;
        color: #42444D;

        & span{
            color: #FF5722;
        }
    }
}

.circle-progress {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    
    &__needed {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        clip: rect(0, 151px, 173px, 0);
        background: #FF5722;
        transform: rotate(-22deg);
    }

    &__collected {
        background: #42444D;
        transform: rotate(0deg); 
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        clip: rect(0, 300px, 300px, 0);
    }

    &__center {
        position: absolute;
        width: 160px;
        height: 160px;
        background: white;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: inset 0 0 10px rgba(0,0,0,0.1);
    }
}

.target__textCollected {
    color: #FF5631;
    position: absolute;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 12px;
    left: -65%;
    top: -17%;
}

.target__textNeeded {
    color: #42444D;
    position: absolute;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 12px;
    left: 140%;
    bottom: -12%;
}
</style>