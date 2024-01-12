import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePostsStore = defineStore('posts', () => {

    const posts = ref([])

    function getPosts() {
        fetch('https://iwa1uk4vy8.execute-api.us-east-1.amazonaws.com/dev/posts')
            .then(response => response.json())
            .then(data => {
                console.log('Got ', data.length, ' posts');

                posts.value = data.sort((a, b) => b.firstPublishedAt - a.firstPublishedAt)
                console.log('Data is fetched.')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // Runs the very first time the store is used. i.e., when the store is initialized.
    getPosts()
    return {
        posts
    }



})