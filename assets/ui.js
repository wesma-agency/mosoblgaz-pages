/*----- JS для динамических элементов ------*/
function activationAccordion(ACCORDIONS){
    ACCORDIONS.forEach((accordion) => {
        const ACCORDION_HEAD = accordion.querySelector('.js-accordion-head');
        const ACCORDION_BODY = accordion.querySelector('.js-accordion-body');
        ACCORDION_HEAD.addEventListener('click', ()=>{
            //ACCORDION_HEAD.classList.toggle('open-accordion-head')
            accordion.classList.toggle('open-accordion');
        })
    })
}


function activationShowMore(show_more){
    if(window.innerWidth <= 768){
        console.log(window.innerWidth);
        show_more.forEach(item => {
            const CONTAINER = item.querySelector('.js-show-more-container');
            const BUTTON = item.querySelector('.js-show-more-button');
            const BLOCKS = CONTAINER.querySelectorAll('.js-show-more-block');
    
            BLOCKS.forEach((block, index) => {
                if(index >= 3){
                    block.style.display = 'none';
                }
            })
            
            BUTTON.addEventListener('click', ()=>{
                BLOCKS.forEach(block =>{
                    block.removeAttribute("style");
                })
                item.classList.add('show-more-activate');
            })
        })
    }
    window.addEventListener('resize', ()=>{
        if(window.innerWidth <= 768){
            console.log(window.innerWidth);
            show_more.forEach(item => {
                const CONTAINER = item.querySelector('.js-show-more-container');
                const BUTTON = item.querySelector('.js-show-more-button');
                const BLOCKS = CONTAINER.querySelectorAll('.js-show-more-block');
        
                BLOCKS.forEach((block, index) => {
                    if(index >= 3){
                        block.style.display = 'none';
                    }
                })
                
                BUTTON.addEventListener('click', ()=>{
                    BLOCKS.forEach(block =>{
                        block.removeAttribute("style");
                    })
                    item.classList.add('show-more-activate');
                })
            })
        }
        else{
            show_more.forEach(item => {
                const CONTAINER = item.querySelector('.js-show-more-container');
                const BLOCKS = CONTAINER.querySelectorAll('.js-show-more-block');
                BLOCKS.forEach(block =>{
                    block.removeAttribute("style");
                })
            })
        }
    })
    
    
}

document.addEventListener('DOMContentLoaded', ()=>{
    const ACCORDIONS = document.querySelectorAll('.js-accordion');
    activationAccordion(ACCORDIONS);

    const SHOW_MORE = document.querySelectorAll('.js-show-more');
    
    activationShowMore(SHOW_MORE);
    //.js-show-more-container
    //.js-show-more-block
    //.js-show-more-button
    // const UI = {
    //     ACCORDION: document.querySelector(".js-menu"),
        // MENU_BUTTON: document.querySelector(".js-open-menu"),
        // MENU_CLOSE: document.querySelector(".js-close-menu"),
    // }

    // UI.MENU_BUTTON.addEventListener('click', ()=>{ 
    //     openMenu(UI.MENU, UI.MENU_CLOSE);
    // })
})