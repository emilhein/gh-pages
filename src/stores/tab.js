import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTabStore = defineStore('tab', () => {
    const tab = ref('MediumPreview')

    return { tab }
})