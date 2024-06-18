const productsList = [
    { name: "Tablet", price: 25000 },
    { name: "Smartphone", price: 45000 },
    { name: "Desktop", price: 90000 },
    { name: "Laptop", price: 75000 },
    { name: "Monitor", price: 15000 },
    { name: "Keybord", price: 5000 },
    { name: "Mouse", price: 3500 },
    { name: "Headphones", price: 8500 },
];

const app = {
    data() {
        return {
            products: productsList,
        };
    },
    methods: {
        sortUp() {
            this.products.sort((a, b) => a.price - b.price);
        },
        sortDown() {
            this.products.sort((a, b) => b.price - a.price);
        },
    },
};

Vue.createApp(app).mount("#app");
