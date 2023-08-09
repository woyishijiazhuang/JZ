import { ref } from 'vue'
import { getPictureAPI } from '@/api/free.js'

// 返回一个ref url，bug：这里有问题应该，写的很奇怪
export default function useImgUrl () {
    const url = ref('')
    getPictureAPI((data) => {
        url.value = data.url
    })
    return { url }
}