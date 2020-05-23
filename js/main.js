// console.log("test JS connection!")

// NEWS COLLAPSE
const newsContainer = document.getElementsByClassName("news-container")

for (let i = 0; i < newsContainer.length; i++) {
  newsContainer[i].addEventListener("click", function () {
    this.classList.toggle("active")
    var newsContent = this.lastElementChild
    if (newsContent.style.maxHeight) {
      newsContent.style.maxHeight = null
    } else {
      newsContent.style.maxHeight = newsContent.scrollHeight + "px"
    }
  })
}
