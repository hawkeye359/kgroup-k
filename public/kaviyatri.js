
const headline = document.querySelector(".kaviyatri-headline");
console.log(headline);


document.addEventListener("scroll", ()=>{
    if(window.scrollY>480){
        headline.classList.add("change");
    }
    else{
        headline.classList.remove("change");
    }
})