window.addEventListener('DOMContentLoaded', ()=>{
    const formDef = document.querySelector('#formDef');
    const formDefBtn = document.querySelector('#formDefBtn');


    formDefBtn.addEventListener('click', ()=>{
        formDef.style.display = 'flex';
    })

    const formCall = document.querySelector('#formCall');
    const formCallBtn = document.querySelector('#formCallBtn');

    formCallBtn.addEventListener('click', ()=>{
        formCall.style.display ='flex';
    })

    const formCatolog = document.querySelector('#formCatolog');
    const formCatologBtn = document.querySelector('#formCatologBtn');

    formCatologBtn.addEventListener('click', ()=>{
        formCatolog.style.display ='flex';
    })
})