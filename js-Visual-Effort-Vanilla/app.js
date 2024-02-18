function scrollAppear(){
    var introtext=document.querySelector(".intro-text");
    var introposition=introtext.getBoundingClientRect().top;
    var screenposition=window.innerHeight/2;

    if(introposition < screenposition){
        introtext.classList.add('intro-appear')
    }
}


window.addEventListener('scroll',scrollAppear);


// document.addEventListener('DOMContentLoaded', function() {
//     const revealText = document.querySelector('.intro-text');
  
//     function handleScroll() {
//       // Calculate the distance from the top of the document to the top of the #revealText element
//       const revealTextTop = revealText.getBoundingClientRect().top;
//       console.log(revealTextTop);
  
//       // Adjust the threshold as needed
//       const revealTrigger = window.innerHeight / 2;
  
//       // Check if the #revealText element is in the viewport
//       if (revealTextTop > revealTrigger) {
//         revealText.classList.add('intro-appear');
//         // Remove the event listener after the text is revealed (optional)
//       }
//     }
  
//     // Attach the scroll event listener
//     window.addEventListener('scroll', handleScroll);
//   });
  

