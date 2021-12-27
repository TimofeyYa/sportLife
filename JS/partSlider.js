window.addEventListener('DOMContentLoaded', ()=>{
    const controlLeft = document.querySelector('.partners__content-controlLeft');
    const controlRight = document.querySelector('.partners__content-controlRight');
    const contentBlock = document.querySelectorAll('.partners__content-block');
    const contentBlockImg = document.querySelectorAll('.partners__content-block img')

    function startShow(){
        contentBlock.forEach(item =>{
            item.style.display = 'none';
        })

        for(let i = 0; i < 9; i++){
            contentBlock[i].style.display = 'block';
        }
    }

    function light(){
        contentBlock.forEach(item =>{
            item.classList.add('partners__content-block-light');
        })
    }
    function dark(){
        contentBlock.forEach(item =>{
            item.classList.remove('partners__content-block-light');
        })
    }

    function selectPic(v){
        let firstPic = contentBlockImg[0].src;
        let lustPic =  contentBlockImg[contentBlock.length - 1].src

        if (v == 1){
           for (let i = 0; i < contentBlock.length; i++){
            if (i == contentBlock.length - 1){
                contentBlockImg[i].src = firstPic;
                continue;
            }
            contentBlockImg[i].src = contentBlockImg[i + 1].src;
        } 
        }

        if (v == 2){
            for (let i = contentBlock.length - 1; i >= 0; i--){
             if (i == 0){
                 contentBlockImg[i].src = lustPic;
                 continue;
             }
             contentBlockImg[i].src = contentBlockImg[i - 1].src;
         } 
         }
        
    }
    startShow();

    controlLeft.addEventListener('click', ()=>{
        light();
        setTimeout(()=>{
            selectPic(2)
        }, 120);
        setTimeout(dark, 300);
    })

    controlRight.addEventListener('click', ()=>{
        light();
        setTimeout(()=>{
            selectPic(1)
        }, 120);
        setTimeout(dark, 300);
    })
})