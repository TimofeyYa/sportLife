window.addEventListener('DOMContentLoaded', ()=>{
    const header__sliderItem = document.querySelectorAll('.header__slider-item');

    const controlLeft = document.querySelector('.header__bottom-control-left'),
          controlRight = document.querySelector('.header__bottom-control-right');

    const header__grad = document.querySelector('.header__grad');
    const styleListArr = ['header__grad1', 'header__grad2', 'header__grad3','header__grad4'];

    let itemIndex = 0;
    let itemIndexLast = 0;

    const header__gradImg = document.querySelectorAll('.header__grad img');


    header__sliderItem[0].style.zIndex = '2';
    header__sliderItem[1].style.zIndex = '1';
    header__sliderItem[2].style.zIndex = '1';
    header__sliderItem[3].style.zIndex = '1';
    
    header__sliderItem[1].style.display = 'none';
    header__sliderItem[2].style.display = 'none';
    header__sliderItem[3].style.display = 'none';



    function startShow(i){
        
        removeAllList();
        header__gradImg[i].style.display ='block';


    }

    function showPic(i, iLast){
        console.log(i, iLast);
        header__sliderItem[i].style.display = 'block';
        header__sliderItem[iLast].style.opacity = '0';
        setTimeout(()=>{
            header__sliderItem[iLast].style.display = 'none';
            header__sliderItem[iLast].style.opacity = '1';
            header__sliderItem[i].style.zIndex = '2';
            header__sliderItem[iLast].style.zIndex = '1';
        }, 250)
        


    }
    

    startShow(itemIndex);

    controlLeft.addEventListener('click', ()=>{
        itemIndex--;

        if (itemIndex < 0){
            itemIndex = header__sliderItem.length - 1;
            startShow(itemIndex);
            showPic(itemIndex, itemIndexLast);
        } else {
            startShow(itemIndex);
            showPic(itemIndex, itemIndexLast);
        }
        itemIndexLast =itemIndex;
        
    })

    controlRight.addEventListener('click', ()=>{
        itemIndex++;

        if (itemIndex > header__sliderItem.length - 1){
            itemIndex = 0;
            startShow(itemIndex);
            showPic(itemIndex, itemIndexLast);
        } else {
            startShow(itemIndex);
            showPic(itemIndex, itemIndexLast);
        }
        itemIndexLast =itemIndex;
        
    })
    

    function removeAllList(){
        for(let i =0; i<header__gradImg.length;i++){
            header__gradImg[i].style.display ='none';

        }
        
    }

    setInterval(()=>{
        itemIndex++;

        if (itemIndex > header__sliderItem.length - 1){
            itemIndex = 0;
            startShow(itemIndex);
            showPic(itemIndex, itemIndexLast);
        } else {
            startShow(itemIndex);
            showPic(itemIndex, itemIndexLast);
        }
        itemIndexLast =itemIndex;
        
    }, 3700)
})