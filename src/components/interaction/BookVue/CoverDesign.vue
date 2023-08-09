<template>
    <div class="coverDesign blue">
        <h1>相册</h1>
        <p>假装</p>
    </div>
</template>

<style>
/* 封面文字样式 */
.coverDesign {
    position: absolute;
    inset: 0px;
    overflow: hidden;
    backface-visibility: hidden;
}

.coverDesign::after {
    background-image: linear-gradient(-135deg, rgba(255, 255, 255, 0.45) 0%, transparent 100%);
    position: absolute;
    inset: 0px;
}

.coverDesign h1 {
    color: rgb(255, 255, 255);
    font-size: 2.2em;
    letter-spacing: 0.05em;
    text-align: center;
    margin: 50% 0px 0px;
    text-shadow: rgba(0, 0, 0, 0.1) -1px -1px 0px;
}

.coverDesign p {
    color: rgb(248, 248, 248);
    font-size: 1em;
    text-align: center;
    text-shadow: rgba(0, 0, 0, 0.1) -1px -1px 0px;
}

.blue {
    background-color: rgb(52, 152, 219);
    background-image: -webkit-linear-gradient(top, rgb(52, 152, 219) 58%, rgb(42, 144, 212) 0%);
}
</style>