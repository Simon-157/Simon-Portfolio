window.scroll({
  top: 1000,
  behavior: 'smooth'  //  
});




const observer = new IntersectionObserver(entries =>{
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.querySelectorAll(".project")[0].classList.add("fadeIn")
      document.querySelectorAll(".project")[1].classList.add("fadeIn")
      document.querySelectorAll(".project")[2].classList.add("fadeIn")
      document.querySelectorAll(".project")[3].classList.add("fadeIn")
    }
  })
})

observer.observe(document.querySelector(".container"));







