//NAVBAR STICKY FUNCTION
var navbar = document.getElementById('nav-bar');
var menu = document.getElementById('menu');

window.onscroll= function(){
    if(window.pageYOffset>= menu.offsetTop){
        navbar.classList.add('sticky');
    }
    else{
        navbar.classList.remove('sticky');
    }
}
document.querySelector('.nav-wrapper').classList.remove('move_now')
const toggle = document.querySelector('#toggler')

toggle.addEventListener('click',()=>{
    console.log('click')
    document.querySelector('.nav-wrapper').classList.toggle('move_now')
   const icon= document.querySelector('#nav-icon')
const arr  = document.querySelector('.nav-wrapper').className.split(" ")
if(arr.indexOf("move_now") !== -1){

    icon.className = "uil uil-multiply"
}else{
    icon.className = "uil uil-bars"

}
  
})

//-------------- FAQ TOGGLE -----------
const faqs = document.querySelectorAll('.faqs__container');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //changes icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-angle-down'){
            icon.className = "uil uil-angle-up"
        }else{
            icon.className = "uil uil-angle-down"
        }
    })
})

//---------------- SWIPER JS -----------
