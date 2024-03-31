/// we can use v-bind to assign them a string value dynamically, much like with other attributes. However,
/// trying to generate those values using string concatenation can be annoying and error-prone
const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            // solution
            url: 'https://www.vuemastery.com/'
            // solution
        }
    }
})