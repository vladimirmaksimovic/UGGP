// console.log("test JS :) ")

/**
 * RESPONSIVE NAVBAR - HAMBURGER
 */

// open hamburger navbar
function hamburger() {
  const li = document.getElementsByClassName("nav-item");
  //console.log(li)

  for (let i = 0; i < li.length; i++) {
    if (li[i].className === "nav-item") {
      li[i].className += " responsive";
    } else {
      li[i].className = "nav-item";
    }
  }
}

// close hamburger navbar
const a = document.getElementsByClassName("nav-link");
//console.log(a);

for (let i = 0; i < a.length; i++) {
  a[i].addEventListener("click", function () {
    const li = document.getElementsByClassName("nav-item");
    for (let i = 0; i < li.length; i++) {
      li[i].className = "nav-item";
    }
  });
}

/**
 * NEWS COLLAPSE
 */

const newsArticle = document.getElementsByClassName("news-article");
//console.log(newsArticle);

for (let i = 0; i < newsArticle.length; i++) {
  newsArticle[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const newsContent = this.lastElementChild;
    if (newsContent.style.maxHeight) {
      newsContent.style.maxHeight = null;
    } else {
      newsContent.style.maxHeight = newsContent.scrollHeight + "px";
    }
  });
}
