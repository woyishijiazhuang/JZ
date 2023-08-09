<template>
    <div class="olympic-rings-container" title="纯css background配合 clip-path做出来的"></div>
</template>

<style>
.olympic-rings-container {
    position: relative;
    width: 800px;
    min-width: 800px;
    height: 370px;
    min-height: 370px;
    /* border: 1px solid black; */
    background-image: 
        radial-gradient(circle, transparent 58%, #0081c8 58% 70%, transparent 70%),
        radial-gradient(circle, transparent 58%, black 58% 70%, transparent 70%),
        radial-gradient(circle, transparent 58%, #ee334e 58% 70%, transparent 70%),
        radial-gradient(circle, transparent 58%, #fcb131 58% 70%, transparent 70%),
        radial-gradient(circle, transparent 58%, #00a651 58% 70%, transparent 70%)
    ;
    background-size: 250px 250px;
    background-repeat: no-repeat;
    background-position: 0% 0%, 50% 0%, 100% 0%, 25% 100%, 75% 100%;

}
.olympic-rings-container::before,
.olympic-rings-container::after {
    position: absolute;
    width: inherit;
    height: inherit;
    content: '';
    top: 0;
    left: 0;
    background-image: 
        radial-gradient(circle, transparent 58%, #fcb131 58% 70%, transparent 70%),
        radial-gradient(circle, transparent 58%, #00a651 58% 70%, transparent 70%),
        radial-gradient(circle, transparent 58%, #0081c8 58% 70%, transparent 70%),
        radial-gradient(circle, transparent 58%, black 58% 70%, transparent 70%),
        radial-gradient(circle, transparent 58%, #ee334e 58% 70%, transparent 70%)
    ;

    background-size: inherit;
    background-repeat: no-repeat;
    background-position: 25% 100%, 75% 100%, 0% 0%, 50% 0%, 100% 0%;
    clip-path: polygon(33% 28%, 39% 28%, 39% 67%,16% 67%, 16% 57%, 33% 57%);
}
.olympic-rings-container::after {
  clip-path: polygon(68% 28%, 72% 28%, 72% 67%, 50% 67%, 50% 57%, 68% 57%);  
}

</style>