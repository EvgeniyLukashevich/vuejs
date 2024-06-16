const task1 = {
    data() {
        return {
            textButton: "ПЕРЕВЕРНУТЬ",
            isReverse: false,
        };
    },
    methods: {
        reverse() {
            this.isReverse = !this.isReverse;
            this.textButton = reverseString(this.textButton);
        },
    },
};

function reverseString(str) {
    return str.split("").reverse().join("");
}

const task2 = {
    data() {
        return {
            items: [],
        };
    },
    methods: {
        addItem() {
            this.items.push("Новый элемент списка");
        },
        removeItem(index) {
            this.items.splice(index, 1);
        },
    },
};

Vue.createApp(task1).mount("#task1");
Vue.createApp(task2).mount("#task2");
