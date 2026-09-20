
const inputbtn = document.querySelector(".inputbtn");
const inputstyle = document.querySelector(".inputstyle");
const article = document.querySelectorAll(".latest-article");
const noresult = document.querySelector(".no-results");
const categButtons = document.querySelectorAll(".catbuttons");
const homebtn = document.querySelector(".home");
const explorebtn = document.querySelector(".Explore");
const categoriesbtn = document.querySelector(".Categories");
const categories = document.querySelector(".categories");
const aboutbtn = document.querySelector(".About");
const latest = document.querySelector(".latest");



inputbtn.addEventListener("click", function() {
    const searchTerm = inputstyle.value;

    let found = false;

    if(searchTerm === "") {
            article.forEach(function(article){
                article.style.display = "block";
            });
            noresult.textContent = "";
            return;
        } 

    article.forEach(function(article) {

            if (article.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
            article.style.display = "block";
            article.scrollIntoView();
            found = true;
        } else {
            article.style.display = "none";
            
        }
        
    });
    
        if (found) {
            noresult.textContent = "";
        } else {
            noresult.textContent = "Δεν βρέθηκαν άρθρα.";
        }
});
categButtons.forEach(function(category){
    category.addEventListener("click", function(){

        if (category.textContent === "All") {
    article.forEach(function(article) {
        article.style.display = "block";
    });
} else {
        
        article.forEach(function(article){
            if(article.textContent.toLowerCase().includes(category.textContent.toLowerCase())) {
                article.style.display = "block";
            } else {
                article.style.display = "none";
            }
        });
      }
    });
});
homebtn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});
explorebtn.addEventListener("click", function() {
    latest.scrollIntoView();
});
categoriesbtn.addEventListener("click", function() {
    categories.scrollIntoView();
});

article.forEach(function(article) {
    article.addEventListener("click", function() {
        const id = article.dataset.id;
        window.location.href = `article.html?id=${id}`;
    });
});


