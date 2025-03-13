let ChangeIcon = document.querySelector(".MenuIcon")
let headerNavShow = document.querySelector("header nav")
ChangeIcon.addEventListener("click", () => {
    if (ChangeIcon.innerHTML == '<i class="fa-solid fa-bars"></i>') {
        ChangeIcon.innerHTML = '<i class="fa-solid fa-x"></i>'
        headerNavShow.classList.add("headernavShow")
    }
    else {
        ChangeIcon.innerHTML = '<i class="fa-solid fa-bars"></i>'
        headerNavShow.classList.remove("headernavShow")
    }
})

let paragraphELement = document.querySelectorAll(".landmark_location-Heading")
paragraphELement.forEach((question, i) => {
    question.addEventListener("click", () => {
        let Heading = question.firstElementChild
        let paragraph = question.nextElementSibling
        paragraph.classList.toggle("ShowparaLandmarkLocation")
        if (Heading.outerHTML == '<i class="fa-solid fa-minus"></i>') {
            Heading.outerHTML = '<i class="fa-solid fa-plus"></i>'
        }
        else {
            Heading.outerHTML = '<i class="fa-solid fa-minus"></i>'
        }

    })
})

let FaqsElement = document.querySelectorAll(".FAQs_Q")

FaqsElement.forEach((question, i) => {
    question.addEventListener("click", () => {
        // question.lastElementChild.classList.toggle("FAQsShowAns")
        let icon = question.firstElementChild
        if (icon.outerHTML.includes('<i class="fa-solid fa-minus"></i>')) {
            icon.outerHTML = '<i class="fa-solid fa-plus"></i>'
            question.nextElementSibling.classList.add("FAQsShowAns")
        }
        else {
            icon.outerHTML = '<i class="fa-solid fa-minus"></i>'
            question.nextElementSibling.classList.remove("FAQsShowAns")
        }

    })
})

let BlackBgElement = document.querySelector(".FullblackBackground")
let DownloadIconElement = document.querySelector(".DownloadFormIcon")
let FormElement = document.querySelector(".Download-form")
let ActiveCross = document.querySelectorAll(".DownloadForm-Heading i")
let AnotherDownloadBTN = document.querySelector(".ScheduleVisit-Button")

DownloadIconElement.addEventListener("click", () => {
    FormElement.classList.toggle("ShowDownload-form")
    BlackBgElement.classList.add("BlackBackgroundShow")
})

BlackBgElement.addEventListener("click", () => {
    FormElement.classList.remove("ShowDownload-form")
    BlackBgElement.classList.remove("BlackBackgroundShow")
})
let DownloadBrochureBTN = AnotherDownloadBTN.lastElementChild
DownloadBrochureBTN.addEventListener("click", () => {
    FormElement.classList.toggle("ShowDownload-form")
    BlackBgElement.classList.add("BlackBackgroundShow")
})

let BookonlineBTNElement = document.querySelector(".BookonlineBTN")
let enquireformElement = document.querySelector(".EnquireNowForm")

BookonlineBTNElement.addEventListener("click", () => {
    enquireformElement.classList.add("ShowDownload-form")
    BlackBgElement.classList.add("BlackBackgroundShow")
})

BlackBgElement.addEventListener("click", () => {
    enquireformElement.classList.remove("ShowDownload-form")
    BlackBgElement.classList.remove("BlackBackgroundShow")
    FormElement.classList.remove("ShowDownload-form")

})

let DownloadBrochureBtnElement = document.querySelector(".DownloadBrochureBtn")
DownloadBrochureBtnElement.addEventListener("click", () => {
    FormElement.classList.toggle("ShowDownload-form")
    BlackBgElement.classList.add("BlackBackgroundShow")
})

let BooksiteVisitBtnElement = document.querySelector(".BookSiteVisitBtn")
BooksiteVisitBtnElement.addEventListener("click", () => {
    enquireformElement.classList.add("ShowDownload-form")
    BlackBgElement.classList.add("BlackBackgroundShow")
})

console.log(ActiveCross)
ActiveCross.forEach((question, i) => {
    question.addEventListener("click", () => {
        BlackBgElement.classList.remove("BlackBackgroundShow")
        FormElement.classList.remove("ShowDownload-form")
        enquireformElement.classList.remove("ShowDownload-form")
        console.log(ActiveCross)

    })
})

let arrow = document.querySelector("#arrow")
window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
        arrow.style.display = "block";
    }
    else {
        arrow.style.display = "none";
    }
})
