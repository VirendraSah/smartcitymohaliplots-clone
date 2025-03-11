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

let paragraphELement=document.querySelectorAll(".keyLocation")
paragraphELement.forEach((question,i)=>{
    question.addEventListener("click",()=>{
      let Heading=question.firstElementChild.firstElementChild
      let paragraph=question.lastElementChild
      paragraph.classList.toggle("ShowparaLandmarkLocation")
       if(Heading.outerHTML=='<i class="fa-solid fa-minus"></i>'){
        Heading.outerHTML='<i class="fa-solid fa-plus"></i>'
       }
       else{
        Heading.outerHTML='<i class="fa-solid fa-minus"></i>'
       }

    })
})

let FaqsElement=document.querySelectorAll(".FAQs_QA")

FaqsElement.forEach((question,i)=>{
    question.addEventListener("click",()=>{
        question.lastElementChild.classList.toggle("FAQsShowAns")
        let icon=question.firstElementChild.firstElementChild
        if(icon.outerHTML.includes('<i class="fa-solid fa-minus"></i>')){
            icon.outerHTML='<i class="fa-solid fa-plus"></i>'
        }
        else{
            icon.outerHTML='<i class="fa-solid fa-minus"></i>'
        }
        
    })
})

