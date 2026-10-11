const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log(id);

const articles = {
    1: {
        title: "A Weekend in Thessaly",
        category: "Nature",
        author: "John",
        image: "Thessaly.jpg",
        description: "A beautiful weekend exploring Thessaly and its natural landscapes.",
        date: "Aug 20, 2026",
        readTime: "5 min read"
    },

    2: {
        title: "What to Expect When Visiting Neoi Poroi Beach",
        category: "Beaches",
        author: "Maria",
        image: "neoiporoi.jpg",
        description: "A practical guide to visiting Neoi Poroi Beach and enjoying the seaside destination.",
        date: "Aug 22, 2026",
        readTime: "4 min read"
    },

    3: {
        title: "Exploring Mount Olympos",
        category: "Mountains",
        author: "Alex",
        image: "olympos.jpg",
        description: "Discover the beauty of Mount Olympos and explore its impressive natural landscape.",
        date: "Aug 25, 2026",
        readTime: "6 min read"
    }
};

const selectedArticle = articles[id];
const title = document.querySelector("#article-title");
title.textContent = selectedArticle.title;

const category = document.querySelector("#article-category");
category.textContent = selectedArticle.category;

const description = document.querySelector("#article-description");
description.textContent = selectedArticle.description;

const meta = document.querySelector("#article-meta");
meta.textContent = `${selectedArticle.author} · ${selectedArticle.date} · ${selectedArticle.readTime}`;

const image = document.querySelector("#article-image");
image.src = selectedArticle.image;