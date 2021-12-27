window.addEventListener('DOMContentLoaded', ()=>{
    const catalog__block = document.querySelectorAll('.catalog__block');
    const picHover = document.querySelectorAll('.catalog__block-picHover');
    const picDef = document.querySelector('.catalog__block-picDef');

    catalog__block.forEach(item =>{
        item.addEventListener('mouseover', ()=>{
            item.classList.add('catalog__block-hover');
            const picHover = item.querySelector('.catalog__block-picHover');
            const picDef = item.querySelector('.catalog__block-picDef');
            if (item.classList.contains('catalog__block-hover')){
                picHover.style.opacity = '1';
                picDef.style.opacity = '0';
                
            } else{
                picHover.style.opacity = '0';
                picDef.style.opacity = '1';
            }
        })
    })
    catalog__block.forEach(item =>{
        item.addEventListener('mouseleave', ()=>{
            item.classList.remove('catalog__block-hover')
            const picHover = item.querySelector('.catalog__block-picHover');
            const picDef = item.querySelector('.catalog__block-picDef');
            if (item.classList.contains('catalog__block-hover')){
                picHover.style.opacity = '1';
                picDef.style.opacity = '0';
                
            } else{
                picHover.style.opacity = '0';
                picDef.style.opacity = '1';
            }
        })
    })
    function startShow(){
        catalog__block.forEach(item =>{
            const picHover = item.querySelector('.catalog__block-picHover');
            const picDef = item.querySelector('.catalog__block-picDef');
            if (item.classList.contains('catalog__block-hover')){
                picHover.style.opacity = '1';
                picDef.style.opacity = '0';
                
            } else{
                picHover.style.opacity = '0';
                picDef.style.opacity = '1';
            }
        })
    }

    startShow();


    // работа с попапом

  
})