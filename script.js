
const main_container=document.querySelector("container");
const btn_in=document.querySelector("btn-in")
const btn_up=document.querySelector("btn-up")

btn_in.addEventListener("click", ()=>{
    main_container.classList.add("active")
})