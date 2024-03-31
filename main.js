// explain v-if in the project
const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inventory: 100,
            // solution
            onSale: true
            // solution
        }
    }
})