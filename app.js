const simpleBookmarking = document.getElementById("Simple-Bookmarking")
const speedySearching = document.getElementById("Speedy-Searching")
const easySharing = document.getElementById("Easy-Sharing")
const featureTitle = document.getElementById("featureTitle")
const featureParagraph = document.getElementById("featureP")
const featureImg = document.getElementById("featureImg")

const contactBtn = document.getElementById("contactBtn")
const email = document.getElementById("email")
const emailDiv = document.getElementById("emailDiv")

const questions = document.querySelectorAll(".faq__questions__q")
const answers = document.querySelectorAll(".answer")
const i = document.querySelectorAll(".fa-chevron-down")

const featuresMap = new Map()

featuresMap.set("simple-bookmarking", {
  title: "Bookmark in one click",
  paragraph: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  src:"./images/illustration-features-tab-1.svg"
})

featuresMap.set("speedy-searching", {
  title: "Intelligent search",
  paragraph: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks",
  src:"./images/illustration-features-tab-2.svg"
})

  featuresMap.set("easy-sharing", {
  title: "Share your bookmarks",
  paragraph: "Easily share your bookmarks and collections with others. Create a sharebale link that you can send at the click of a button",
  src:"./images/illustration-features-tab-3.svg"
})


const featureHandler = key => {
  let title = featuresMap.get(key).title
  let paragraph = featuresMap.get(key).paragraph
  let img = featuresMap.get(key).src
  featureTitle.textContent = title
  featureParagraph.textContent = paragraph
  featureImg.src = img
  if (key == "simple-bookmarking") {
    applyCurrentFeature(simpleBookmarking)
  }
  else if (key == "speedy-searching") {
    applyCurrentFeature(speedySearching)
  }
  else if (key == "easy-sharing") {
    applyCurrentFeature(easySharing)
  }
}

const applyCurrentFeature = div => {
  if (div === simpleBookmarking) {
    simpleBookmarking.classList.add("activeFeature")
    speedySearching.classList.remove("activeFeature")
    easySharing.classList.remove("activeFeature")
  }
  else if (div === speedySearching) {
    speedySearching.classList.add("activeFeature")
    easySharing.classList.remove("activeFeature")
    simpleBookmarking.classList.remove("activeFeature")
  }
  else if (div === easySharing) {
    easySharing.classList.add("activeFeature")
    speedySearching.classList.remove("activeFeature")
    simpleBookmarking.classList.remove("activeFeature")
  }
}

const showAnswer = answerIndex => {
  answers[answerIndex].classList.toggle("visible")
  i[answerIndex].classList.toggle("fa-chevron-down")
  i[answerIndex].classList.toggle("fa-chevron-up")
}

const sendEmail = e => {
  e.preventDefault()
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  console.log(emailRegex.test(email.value));
  if(!emailRegex.test(email.value)) {
    emailDiv.classList.add("error")
    email.classList.add("errorInpt")
  }
  else {
    email.classList.add("errorInpt")
    emailDiv.classList.remove("error")
    email.value = ""
  }
}

speedySearching.addEventListener("click", featureHandler.bind(this, "speedy-searching"))
simpleBookmarking.addEventListener("click", featureHandler.bind(this, "simple-bookmarking"))
easySharing.addEventListener("click", featureHandler.bind(this, "easy-sharing"))
contactBtn.addEventListener("click", sendEmail)
questions.forEach(function(e, index) {
  e.addEventListener("click", showAnswer.bind(this, index))
})

console.log(i);