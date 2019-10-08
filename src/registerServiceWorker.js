/* eslint-disable no-console */

// import {
//     register
// } from 'register-service-worker'

// if (process.env.NODE_ENV === 'production') {
// process.env.BASE_URL = 'http://localhost:8080/'
// register(`./sw.js`, {
//     ready() {
//         console.log(
//             'App is being served from cache by a service worker.\n' +
//             'For more details, visit https://goo.gl/AFskqB'
//         )
//     },
//     cached() {
//         console.log('Content has been cached for offline use.')
//     },
//     updated() {
//         console.log('New content is available; please refresh.')
//     },
//     offline() {
//         console.log('No internet connection found. App is running in offline mode.')
//     },
//     error(error) {
//         console.error('Error during service worker registration:', error)
//     }
// })
// }
window.addEventListener('load', () => {
    if (!('serviceWorker' in navigator)) {
      // service workers not supported 😣
      return
    }
  
    navigator.serviceWorker.register('/sw.js').then(
      () => {
          return
        // registered! 👍🏼
      },
      err => {
        console.error('SW registration failed! 😱', err)
      }
    )
  })