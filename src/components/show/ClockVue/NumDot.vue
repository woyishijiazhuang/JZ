<template>
    <div class="num-dot"></div>
</template>

<style lang="less">
.num-dot {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 0 1rem;

    &::after,
    &::before {
        content: '';
        width: 1rem;
        height: 1rem;
        background-color: var(--color);
    }
}
</style>