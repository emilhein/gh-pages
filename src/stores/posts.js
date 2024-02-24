import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePostsStore = defineStore('posts', () => {
    const posts = ref([])
    const apiPath = Math.random() < 0.5
        ? 'https://iwa1uk4vy8.execute-api.us-east-1.amazonaws.com/dev/posts_node'
        : 'https://iwa1uk4vy8.execute-api.us-east-1.amazonaws.com/dev/post_llrt';
    const getPosts = async () => {
        const data = await fetch(apiPath)
        const toJson = await data.json()
        posts.value = toJson.sort((a, b) => b.firstPublishedAt - a.firstPublishedAt)
    }
    // Runs the very first time the store is used. i.e., when the store is initialized.
    getPosts()
    return { posts }
})