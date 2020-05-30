// console.log("test JS connection :) ")

// RESPONSIVE NAVBAR - HAMBURGER
function hamburger() {
  const li = document.getElementsByClassName("nav-item")
  //console.log(li)

  for (let i = 0; i < li.length; i++) {
    if (li[i].className === "nav-item") {
      li[i].className += " responsive"
    } else {
      li[i].className = "nav-item"
    }
  }
}

// NEWS COLLAPSE
const newsArticle = document.getElementsByClassName("news-article")

for (let i = 0; i < newsArticle.length; i++) {
  newsArticle[i].addEventListener("click", function () {
    this.classList.toggle("active")
    const newsContent = this.lastElementChild
    if (newsContent.style.maxHeight) {
      newsContent.style.maxHeight = null
    } else {
      newsContent.style.maxHeight = newsContent.scrollHeight + "px"
    }
  })
}
