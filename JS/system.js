window.addEventListener('DOMContentLoaded', ()=>{
    // меню навигации оживим
    const dostavkaNav = document.querySelector('#dostavkaNav');
    const catalogNav = document.querySelector('#catalogNav');
    const aboutNav = document.querySelector('#aboutNav');
    const contactsNav = document.querySelector('#contactsNav');
    const formPayment = document.querySelector('#formPayment');
    const contactsSec = document.querySelector('#contactsSec');
    const aboutSec = document.querySelector('#aboutSec');
    const catalogSec = document.querySelector('#catalogSec');
    
    dostavkaNav.addEventListener('click', ()=>{
        formPayment.style.display = 'flex';
    })
    catalogNav.addEventListener('click', ()=>{
        scrollToElement(catalogSec);
    })
    aboutNav.addEventListener('click', ()=>{
        scrollToElement(aboutSec);
    })
    contactsNav.addEventListener('click', ()=>{
        scrollToElement(contactsSec);
    })
    function scrollToElement(element) {
        
        window.scroll({

            top: element.offsetTop,
            behavior: "smooth"
        });
    }



    formPayment.style.height = document.documentElement.offsetHeight + "px";

    // вылет телефона

    const inst = document.querySelector('.inst');
    const instPic = document.querySelector('.inst-pic');

    window.addEventListener('scroll', seePhone);

   function seePhone(){
       if (inst.offsetTop < window.scrollY + 500){
        instPic.style.display ='block';
        setTimeout(()=>{
           instPic.classList.remove('inst-pic-hidden');
        window.removeEventListener('scroll', seePhone); 
        }, 100)
        
    }
   }
    
   

   if (window.screen.width >= 800 ){
    $('.ourWear__content').flipster({
        style: 'flat',
        spacing: -0.28
       });
   }
   if (window.screen.width < 800 && window.screen.width > 600){
    $('.ourWear__content').flipster({
        style: 'flat',
        spacing: -0.5
       });
   }
   if (window.screen.width <= 600 ){
    $('.ourWear__content').flipster({
        style: 'flat',
        spacing: -0.85
       });
   }


   // работа с попапом

   const popup = document.querySelectorAll('.popup'),
         popup_exit = document.querySelectorAll('.popup_exit');

    popup_exit.forEach(item =>{
        item.addEventListener('click',()=>{
            popup.forEach(elem=>{
                elem.style.display = 'none';
            })
        })
    })

    const stopVideo = document.querySelector('#stopVideo');
    const video__popupIf = document.querySelector('.video__popup-content iframe');

    stopVideo.addEventListener('click', ()=>{
        let src = video__popupIf.src;

        video__popupIf.src = '';
        video__popupIf.src = src;
    })

    const about__controlBtn = document.querySelector('.about__control-btn');
    const videoPop = document.querySelector('#videoPop');

    about__controlBtn.addEventListener('click', ()=>{
        videoPop.style.display = 'flex';
    })


    const mobMenuBtn = document.querySelector('.header__contacts-mobMenu');
    const header__navList = document.querySelector('.header__top-nav');
    const navExitBtn = document.querySelector('.header__top-navExit');

    mobMenuBtn.addEventListener('click', ()=>{
        header__navList.classList.add('header__top-nav-active');
    })
    navExitBtn.addEventListener('click', ()=>{
        header__navList.classList.remove('header__top-nav-active');
    })


    const navListLink = document.querySelectorAll('.header__nav-list a');
    if (window.screen.width < 900 ){
    navListLink.forEach(item =>{
        item.addEventListener('click', ()=>{
            header__navList.classList.remove('header__top-nav-active');
           
        })
    })
    }
})