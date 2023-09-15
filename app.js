const app = Vue.createApp({
    data() {
        return {
            url: "https://www.google.com",
            showBooks: true,
            books: [
                {
                    title: "A Game of Thrones",
                    author: "George R. R. Martin",
                    img: "assets/AGameOfThrones.jpg",
                    isFav: true,
                },
                {
                    title: "A Storm of Swords",
                    author: "George R. R. Martin",
                    img: "assets/AStormOfSwords.jpg",
                    isFav: true,
                },
                {
                    title: "A Feast  for Crows",
                    author: "George R. R. Martin",
                    img: "assets/AFeastForCrows.jpg",
                    isFav: false,
                },
                {
                    title: "A Clash of Kings",
                    author: "George R. R. Martin",
                    img: "assets/AClashOfKings.jpg",
                    isFav: false,
                },
                {
                    title: "A Dance with Dragons",
                    author: "George R. R. Martin",
                    img: "assets/ADanceWithDragons.jpg",
                    isFav: false,
                },
            ],
            x: 0,
            y: 0,
        };
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        toggleFav(book) {
            book.isFav = !book.isFav;
        },
        handleEvent(e, data) {
            console.log(e, e.type, data);

            if (data) {
                console.log(data);
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav);
        },
    },
});

app.mount("#app");
