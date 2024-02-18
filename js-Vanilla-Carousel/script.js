const carouselSlide=document.querySelector('.carousel-slide');
const carouselImages=document.querySelectorAll('.carousel-slide img');

//buttons
const prevBtn=document.querySelector('#prevbtn');
const nextBtn=document.querySelector('#nextbtn');

//Counter
let Counter=1;
const size=carouselImages[0].clientWidth;

carouselSlide.style.transform='translateX(' + (-size * Counter) + 'px)';

//Button listener
nextBtn.addEventListener('click',()=>{
    if(Counter >= carouselImages.length-1) return;
    carouselSlide.style.transition="transform 0.4s ease-in-out";
    Counter++;
    carouselSlide.style.transform='translateX(' + (-size * Counter) + 'px)';
    console.log(Counter);
});

prevBtn.addEventListener('click',()=>{
    if(Counter<=0) return;
    carouselSlide.style.transition="transform 0.4s ease-in-out";
    Counter--;
    carouselSlide.style.transform='translateX(' + (-size * Counter) + 'px)';
    console.log(Counter);
});

carouselSlide.addEventListener('transitionend',()=>{
    if(carouselImages[Counter].id==='lastimg'){
        carouselSlide.style.transition="none";
        Counter=carouselImages.length-2;
        carouselSlide.style.transform='translateX(' + (-size * Counter) + 'px)';
    }
    if(carouselImages[Counter].id==='firstimg'){
        carouselSlide.style.transition="none";
        Counter=carouselImages.length-Counter;
        carouselSlide.style.transform='translateX(' + (-size * Counter) + 'px)';
    }


});
