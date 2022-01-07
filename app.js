const btns=document.getElementsByClassName("btn")
const sections=document.getElementsByClassName("section")

const sectionsArray=Array.prototype.slice.call(sections)
const btnsArray=Array.prototype.slice.call(btns)


btnsArray.forEach((btn)=>{
    btn.addEventListener("click",()=>{
       hideAll();
       animate(btn.id);
    })

})

function hideAll(){

    sectionsArray.forEach((section)=>{
         section.setAttribute("style", "visibility:hidden")
    })

}
function animate(id){
    if(id==="1"){
       slide(".section-1")
    }

    else if(id==="2"){
       slide(".section-2")
    }
    else if(id==="3"){
       slide(".section-3")
    }
    else if(id==="4"){
       slide(".section-4")
    }
    else if(id==="5"){
       slide(".section-5")
    }
    else if(id==="6"){
       slide(".section-6")
    }
    else if(id==="6"){
       slide(".section-6")
    }
    else if(id==="7"){
       slide(".section-7")
    }
    else if(id==="8"){
       slide(".section-8")
    }
    else if(id==="9"){
       slide(".section-9")
    }

     else if(id==="10"){
       slide(".section-10")
    }


}

function slide(name) {
    const section = document.querySelector(name);
    section.style.visibility="visible"

}