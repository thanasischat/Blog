const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log(id);

const articles = {
    1: {
        title: "A Weekend in Thessaly",
        category: "Nature",
        author: "John",
        image: "Thessaly.jpg"
    },

    2: {
        title: "What to Expect When Visiting Neoi Poroi Beach",
        category: "Beaches",
        author: "Maria",
        image: "neoiporoi.jpg"
    },

    3: {
        title: "Exploring Mount Olympos",
        category: "Mountains",
        author: "Alex",
        image: "olympos.jpg"
    }
};

const selectedArticle = articles[id];
const title = document.querySelector("#article-title");
title.textContent = selectedArticle.title;

const image = document.querySelector("#article-image");
image.src = selectedArticle.image;