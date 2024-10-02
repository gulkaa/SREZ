'use stict';
//Выпадающее меню
let menuElems = document.querySelectorAll('.menu__elem')

menuElems.forEach(menuElem=>{
    let submenu = menuElem.querySelector('.submenu');
    let btn = menuElem.querySelector('.menu__btn');

    
    menuElem.addEventListener('mouseenter',function(){
        submenu.classList.add('active');
        btn.classList.add('active');
    })
    menuElem.addEventListener('mouseleave',function(){
        submenu.classList.remove('active');
        btn.classList.remove('active');
    })
})
//Выпадающее меню закончилось

//Слайдер

let sliderBody = document.querySelector('.slider__body')
let sliderNav = document.querySelector('.slider__nav')
let sliderImages = document.querySelector('.slider__images')
let sliderItems = Array.from(document.querySelectorAll('.slider__item'))
let sliderDots = Array.from(document.querySelectorAll('.slider__dot'))

sliderBody.addEventListener('click', function(event){
    let targetArrow = event.target.closest('.slider__arrow');
    if(!targetArrow) return;

    let currentActiveImage = document.querySelector('.slider__item.active');
    let currentActiveIndex = sliderItems.indexOf(currentActiveImage);

    currentActiveImage.classList.remove('active');
    document.querySelector('.slider__dot.active').classList.remove('active');

    changeActive(targetArrow, currentActiveIndex)

    let newActiveImage = document.querySelector('.slider__item.active');
    let newActiveIndex = sliderItems.indexOf(newActiveImage);

    scrollSlider(newActiveIndex)


})
function scrollSlider(index){
    sliderImages.style.transform = `translateX(${-100*index}%)`;
}
function changeActive(arrow, currentIndex){
    if(arrow.classList.contains('left')){
        if(currentIndex == 0){
            sliderItems.at(-1).classList.add('active');
            sliderDots.at(-1).classList.add('active');
        }else{
            sliderItems[currentIndex-1].classList.add('active');
            sliderDots[currentIndex-1].classList.add('active');
        }
    }else{
        if(currentIndex == sliderItems.length - 1){
            sliderItems[0].classList.add('active');
            sliderDots[0].classList.add('active');
        }else{
            sliderItems[currentIndex+1].classList.add('active');
            sliderDots[currentIndex+1].classList.add('active');
        }
    }
}

sliderNav.addEventListener('click', function(event){
    let targetDot = event.target.closest('.slider__dot');
    if(!targetDot) return;

    if(targetDot.classList.contains('active')) return;

    document.querySelector('.slider__dot.active').classList.remove('active');
    targetDot.classList.add('active');
    document.querySelector('.slider__item.active').classList.remove('active');
    sliderItems[targetDot.dataset.index].classList.add('active');

    scrollSlider(targetDot.dataset.index)
})
//Слайдер закончился

// Вкладка
const tabs = document.querySelectorAll('.tab__btn');
const tabTexts = document.querySelectorAll('.tab__text');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tabTexts.forEach(t => {
            t.classList.remove('active');
            t.style.transition = 'opacity 0.5s ease-in-out'; 
        });

        tab.classList.add('active');

        const activeTabText = tabTexts[index];
        activeTabText.classList.add('active');
        activeTabText.style.transition = 'opacity 0.5s ease-in-out'; 
    });
});
// Вкладка закончилась

//Гармошка

document.querySelector('.faq').addEventListener('click', function(event){
    let target = event.target.closest('.faq__item');
    if(!target) return;

    target.classList.toggle('active');
    let p = target.querySelector('p');

    if(target.classList.contains('active')){
        p.style.height = p.scrollHeight + 'px';
    }else{
        p.style.height = '';
    }
})
//Гармошка закончилась

// Телефон
const modal = document.getElementById("phoneModal");
const span = document.getElementsByClassName("close")[0];

function showModal() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            showModal();
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5 
});

const target = document.getElementById('zagolovv');
observer.observe(target);
// Телефон закончился

