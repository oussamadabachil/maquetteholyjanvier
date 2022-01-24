let menn = document.querySelector("#first_li")
let text_change_men_women = document.querySelector(".genre_change")
let womenn = document.querySelector("#second_li")

let grid_ch_homme = document.querySelector(".mini_banniere_grid")
let grid_ch_femme = document.querySelector(".mini_banniere_grid-w")

let chaussure_choix_femme = document.querySelector(".overflowy_femme")
let vetements_choix_femme = document.querySelector(".overflowx_femme")

chaussure_choix_femme.style.display="none"

let banniere_show_homme = document.querySelector(".homme_choix")
let banniere_show_femme = document.querySelector(".femme_choix")
    banniere_show_femme.style.display="none"
let bannieres = document.querySelector(".banniere")


let first_li_butt= document.querySelector("#vett")
first_li_butt.setAttribute("style","background-color:rgb(50,54,93);transition:all .3s;color:white;padding:.5rem;");

let second_li_butt= document.querySelector("#shoess")
let third_li_butt= document.querySelector("#access")

let first_li_butt_w = document.querySelector("#vettf")
first_li_butt_w.setAttribute("style","background-color:rgb(238,215,203);transition:all .3s;padding:0.5rem;");

first_li_butt_w.addEventListener("click",()=>{
    chaussure_choix_femme.style.display="none"
    second_li_butt_w.setAttribute("style","background-color:transparent;padding:0rem");
    first_li_butt_w.setAttribute("style","background-color:rgb(238,215,203);transition:all .3s;padding:0.5rem");

    vetements_choix_femme.style.display="grid"
})

let second_li_butt_w = document.querySelector("#shoessf")
second_li_butt_w.addEventListener("click",()=>{
    chaussure_choix_femme.style.display="grid"
    first_li_butt_w.setAttribute("style","color:black;transition:all .3s;padding:0rem;");

    second_li_butt_w.setAttribute("style","background-color:rgb(238,215,203);transition:all .3s;padding:0.5rem");
    vetements_choix_femme.style.display="none"
})
let div_vet = document.querySelector(".overflowx");
let div_shoes = document.querySelector(".overflowy");
div_shoes.style.display="none"
let div_access = document.querySelector(".overflowz")
div_access.style.display="none"



    first_li_butt.addEventListener("click",()=>{
        div_access.style.display="none"
        div_shoes.style.display="none"
        div_vet.style.display="grid"

        first_li_butt.setAttribute("style","background-color:rgb(50,54,93);transition:all .3s;color:white;padding:.5rem;");
        second_li_butt.setAttribute("style","background-color:transparent;padding:0rem;transition:all .3s;");
        third_li_butt.setAttribute("style","background-color:transparent;padding:0rem;transition:all .3s;");
    })
    second_li_butt.addEventListener("click",()=>{
        div_access.style.display="none"
        div_shoes.style.display="grid"
        div_vet.style.display="none"
        second_li_butt.setAttribute("style","background-color:rgb(50,54,93);transition:all .3s;color:white;padding:.5rem;");
        first_li_butt.setAttribute("style","background-color:transparent;padding:0rem;transition:all .3s;");
        third_li_butt.setAttribute("style","background-color:transparent;padding:0rem;transition:all .3s;");
    })
    third_li_butt.addEventListener("click",()=>{
        div_access.style.display="grid"
        div_shoes.style.display="none"
        div_vet.style.display="none"
        third_li_butt.setAttribute("style","background-color:rgb(50,54,93);transition:all .3s;color:white;padding:.5rem;");
        second_li_butt.setAttribute("style","background-color:transparent;padding:0rem;transition:all .3s;");
        first_li_butt.setAttribute("style","background-color:transparent;padding:0rem;transition:all .3s;");

    })


   
menn.addEventListener("click",()=>{
    if (window.matchMedia("(max-width: 600px)").matches) {
        bannieres.setAttribute("style","              background-image: url(../asset/visuelmobilefirstbanniere-2/2.jpg);background-size:cover");
        banniere_show_femme.style.display="none"
        banniere_show_homme.style.display="block"
          } else {
      
    bannieres.setAttribute("style","    background-image: url(../asset/BANNIERES/1.jpg) ;background-size:cover");
    banniere_show_femme.style.display="none"
    banniere_show_homme.style.display="block"
      }

})

womenn.addEventListener("click",()=>{
    if (window.matchMedia("(max-width: 600px)").matches) {
        bannieres.setAttribute("style","              background-image: url(../asset/visuelmobilefirstbanniere-2/1.jpg);background-size:cover");
        banniere_show_femme.style.display="none"
        banniere_show_homme.style.display="block"
          }else{
    bannieres.setAttribute("style","    background-image: url(../asset/BANNIERES/2.jpg);background-size:cover");
    banniere_show_femme.style.display="block"
    banniere_show_homme.style.display="none"
          }
})
