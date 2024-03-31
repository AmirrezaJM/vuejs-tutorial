// create application with the function createApp 
// In here we use option API Method of vue 
// Option API will use in Vue 2 and Vue 3. but right now, it's not so popular as compostion API but in here I will teach both.
const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            // Solution
            description: 'A warm fuzzy pair of socks.' 
            // Solution
        }
    }
})