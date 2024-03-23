<template>
    <v-image v-if="image" :config="myconfig" v-bind="$attrs"></v-image>
</template>

<script setup lang="ts" name="VImg">
import { ref, computed } from 'vue'

const props = defineProps({
    config: {
        type: Object,
        required: true
    }
})

const image = ref<boolean | HTMLImageElement>(false)

const myconfig = computed(() => ({...props.config, image: image.value}))

const img = new Image()
img.src = props.config.image
img.onload = () => (image.value = img)
img.onerror = e => console.warn(e)
</script>

<style lang="scss" scoped>

</style>