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
