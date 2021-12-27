window.addEventListener('DOMContentLoaded', ()=>{
    const categor__popupSec = document.querySelectorAll('.categor__popup-sec');


    function showElem(i){
    categor__popupSec.forEach(item=>{
        let img = item.querySelectorAll('img');

        for(let i =0; i<img.length; i++){
            img[i].style.display = 'none';
        }
        img[i].style.display = 'block';
        let control = item.querySelector('.categor__popup-control');

        for(let i =0; i<img.length; i++){
            let item = document.createElement('div');
            item.classList.add('categor__popup-item');

            control.append(item);
        }

        control.querySelectorAll('.categor__popup-item')[i].classList.add('categor__popup-item-active')

    })
    }
    showElem(0);
    addEvent();
    function addEvent(){
        categor__popupSec.forEach(item =>{
            let img = item.querySelectorAll('img');
            item.querySelectorAll('.categor__popup-item').forEach((elem, i)=>{
                elem.addEventListener('click', (e)=>{
                    img.forEach(item=>{
                        item.style.display="none";
                    })
                    item.querySelectorAll('.categor__popup-item').forEach((elem)=>{
                        elem.classList.remove('categor__popup-item-active');
                    })  
                    elem.classList.add('categor__popup-item-active');
                    img[i].style.display="block";
                })
            })
        })
    }

    

    // открытие Категории
    const catalog__block = document.querySelectorAll('.catalog__block');
    const categor__popupContent = document.querySelector('.categor__popup-content');
    const popupCategor = document.querySelector('#popupCategor');

    catalog__block.forEach(item =>{
        item.addEventListener('click', ()=>{
            popupCategor.style.display = 'flex';
            let id = `#${item.id}`;

            categor__popupContent.querySelector(id).style.display ='block';
        })
    })

    const categorExit = document.querySelector('#categorExit');

    categorExit.addEventListener('click', ()=>{
        categor__popupSec.forEach(item =>{
            item.style.display = 'none';
        })
    })

    // Переключение по стрелкам 

    const controlLeft = document.querySelectorAll('.categor__popup-control-left');
    const controlRight = document.querySelectorAll('.categor__popup-control-right');

    controlRight.forEach(item =>{

        item.addEventListener('click', ()=>{
            let colnrolItem = item.parentElement.querySelectorAll('.categor__popup-item');
            let colnrolImg = item.parentElement.querySelectorAll('img');
            let index;
            colnrolItem.forEach((item,i)=>{
                if (item.classList.contains('categor__popup-item-active')){
                    index = i;
                }
            })

            
            colnrolImg[index].style.display = 'none';
            colnrolItem[index].classList.remove('categor__popup-item-active');
            index++;
            if (index > colnrolItem.length - 1){
                index = 0;
            }
            colnrolImg[index].style.display = 'block';
            colnrolItem[index].classList.add('categor__popup-item-active');
        })
    })

    controlLeft.forEach(item =>{

    item.addEventListener('click', ()=>{
        let colnrolItem = item.parentElement.querySelectorAll('.categor__popup-item');
        let colnrolImg = item.parentElement.querySelectorAll('img');
        let index;
        colnrolItem.forEach((item,i)=>{
            if (item.classList.contains('categor__popup-item-active')){
                index = i;
            }
        })


        colnrolImg[index].style.display = 'none';
        colnrolItem[index].classList.remove('categor__popup-item-active');
        index--;
        if (index < 0){
            index = colnrolItem.length - 1;
        }
        colnrolImg[index].style.display = 'block';
        colnrolItem[index].classList.add('categor__popup-item-active');
    })
})
})