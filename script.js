
const inputbtn = document.querySelector(".inputbtn");
const inputstyle = document.querySelector(".inputstyle");
const article = document.querySelectorAll(".latest-article");
const noresult = document.querySelector(".no-results");
const categButtons = document.querySelectorAll(".catbuttons");



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
        console.log(category.textContent);
        article.forEach(function(article){
            if(article.textContent.toLowerCase().includes(category.textContent.toLowerCase())) {
                article.style.display = "block";
            } else {
                article.style.display = "none";
            }
        });
    });
});

