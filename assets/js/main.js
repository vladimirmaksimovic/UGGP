/**
 * RESPONSIVE NAVBAR - HAMBURGER BUTTON
 */

const hamburgerIcon = document.querySelector("#hamburger");
const li = document.querySelectorAll(".nav-item");
const newsArticle = document.querySelectorAll(".news-article");
const newsContent = document.querySelectorAll(".news-content");
//console.log(newsContent);
//const a = document.querySelectorAll(".nav-link");

const hamburgerHandler = () => {
  li.forEach(li => {
    li.className === "nav-item" ?
      li.classList.add("responsive") :
      li.classList.remove("responsive");
  });
}

hamburgerIcon.addEventListener("click", hamburgerHandler, false);

/**
 * NEWS ACCORDION F-N
 */

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

/* const newsArticleHandler = () => {
  newsArticle.forEach(article => {
    article.classList.toggle("active");

    newsContent.style.maxHeight ?
      newsContent.style.maxHeight = null :
      newsContent.style.maxHeight = newsContent.scrollHeight + "px";
  });
}

newsArticle.forEach(newsArticle => {
  newsArticle.addEventListener("click", newsArticleHandler, false)
}); */

//newsArticle.addEventListener("click", newsArticleHandler, false);
/* for (let i = 0; i < a.length; i++) {
  a[i].addEventListener("click", function () {
    //const li = document.getElementsByClassName("nav-item");
    for (let i = 0; i < li.length; i++) {
      li[i].className = "nav-item";
    }
  });
} */

// open hamburger navbar
/* function hamburger() {
  const li = document.getElementsByClassName("nav-item");
 
  for (let i = 0; i < li.length; i++) {
    if (li[i].className === "nav-item") {
      li[i].className += " responsive";
    } else {
      li[i].className = "nav-item";
    }
  }
 
  //const li = document.querySelectorAll(".nav-item");
 
  li.forEach(li => {
    li.className === "nav-item" ?
      li.classList.add("responsive") :
      li.classList.remove("responsive");
  });
} */

// close hamburger navbar
//const a = document.getElementsByClassName("nav-link");

/* for (let i = 0; i < a.length; i++) {
  a[i].addEventListener("click", function () {
    //const li = document.getElementsByClassName("nav-item");
    for (let i = 0; i < li.length; i++) {
      li[i].className = "nav-item";
    }
  });
} */

/**
 * NEWS COLLAPSE
 */

//const newsArticle = document.getElementsByClassName("news-article");

/* for (let i = 0; i < newsArticle.length; i++) {
  newsArticle[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const newsContent = this.lastElementChild;
    if (newsContent.style.maxHeight) {
      newsContent.style.maxHeight = null;
    } else {
      newsContent.style.maxHeight = newsContent.scrollHeight + "px";
    }
  });
} */

/**
 * GALLERY MODAL F-N
 */

// get modal, image and button elements
const modal = document.querySelectorAll(".modal-body");
const img = document.querySelectorAll(".img-item");
const closeModalBtn = document.querySelectorAll(".close-modal");

// loop through images
for (let i = 0; i < img.length; i++) {

  // open modal f-n
  const openModal = () => {
    modal[i].style.display = "flex";
  }

  // close modal f-n
  const closeModal = () => {
    modal[i].style.display = "none";
  }

  img[i].addEventListener("click", openModal);
  closeModalBtn[i].addEventListener("click", closeModal);
}

/**
 * SHOW DESIGNER LINK
 */

const designer = document.querySelector(".designer");
const alterEgo = document.querySelector(".alt-ego");
const designIcon = document.querySelector(".fa-paint-roller");

function showAltEgo() {
  alterEgo.style.display = "inline";
  alterEgo.style.color = "#ffc400";
  designIcon.style.color = "#ffc400";
}

designer.addEventListener("mouseover", showAltEgo);