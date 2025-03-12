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

let paragraphELement=document.querySelectorAll(".landmark_location-Heading")
paragraphELement.forEach((question,i)=>{
    question.addEventListener("click",()=>{
      let Heading=question.firstElementChild
      let paragraph=question.nextElementSibling
      paragraph.classList.toggle("ShowparaLandmarkLocation")
       if(Heading.outerHTML=='<i class="fa-solid fa-minus"></i>'){
        Heading.outerHTML='<i class="fa-solid fa-plus"></i>'
       }
       else{
        Heading.outerHTML='<i class="fa-solid fa-minus"></i>'
       }

    })
})

let FaqsElement=document.querySelectorAll(".FAQs_Q")

FaqsElement.forEach((question,i)=>{
    question.addEventListener("click",()=>{
        // question.lastElementChild.classList.toggle("FAQsShowAns")
        let icon=question.firstElementChild
        if(icon.outerHTML.includes('<i class="fa-solid fa-minus"></i>')){
            icon.outerHTML='<i class="fa-solid fa-plus"></i>'
            question.nextElementSibling.classList.add("FAQsShowAns")
        }
        else{
            icon.outerHTML='<i class="fa-solid fa-minus"></i>'
            question.nextElementSibling.classList.remove("FAQsShowAns")
        }
        
    })
})

let DownloadIconElement=document.querySelector(".DownloadFormIcon")
let FormElement=document.querySelector(".Download-form")
console.log(DownloadIconElement)
DownloadIconElement.addEventListener("click",()=>{
    console.log(FormElement)
    FormElement.classList.toggle("ShowDownload-form")
    console.log(FormElement.classList)
})

