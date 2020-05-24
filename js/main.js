// console.log("test JS connection!")

// NEWS COLLAPSE
const newsArticle = document.getElementsByClassName("news-article")

for (let i = 0; i < newsArticle.length; i++) {
  newsArticle[i].addEventListener("click", function () {
    this.classList.toggle("active")
    var newsContent = this.lastElementChild
    if (newsContent.style.maxHeight) {
      newsContent.style.maxHeight = null
    } else {
      newsContent.style.maxHeight = newsContent.scrollHeight + "px"
    }
  })
}
