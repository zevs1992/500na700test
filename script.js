const swiper = new Swiper('.image-slider_swiper', {
   
   navigation: {
      nextEl: '.s-button-next',
      prevEl: '.s-button-prev',
   },

   autoHeight: true,
   slidesPerView: 1.2,
   spaceBetween: 20,
   centeredSlides: true,
   loop: true,
   breakpoints: {
    400:{
        slidesPerView: 1,
        spaceBetween: 15,
    }
   },
});

// slider adaptiv news
const swiperNews = new Swiper('.news-slider', {
 
    autoHeight: true,
    slidesPerView: 1.7,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
 });

//  accordion
document.querySelectorAll('.accordion').forEach((el)=>{
   el.addEventListener('click', () => {
      let content = el.nextElementSibling;
      if(content.style.maxHeight){
         document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
      }else{
         document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
         content.style.maxHeight = content.scrollHeight + 'px'
      }
   })
})

// mask
document.addEventListener("DOMContentLoaded", function () {
   let phoneInputs = document.querySelectorAll('input[data-tel-input]');

   let getInputNumbersValue = function (input) {
       // Return stripped input value — just numbers
       return input.value.replace(/\D/g, '');
   }

   let onPhonePaste = function (e) {
       let input = e.target,
           inputNumbersValue = getInputNumbersValue(input);
       let pasted = e.clipboardData || window.clipboardData;
       if (pasted) {
           let pastedText = pasted.getData('Text');
           if (/\D/g.test(pastedText)) {
               // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
               // formatting will be in onPhoneInput handler
               input.value = inputNumbersValue;
               return;
           }
       }
   }

   let onPhoneInput = function (e) {
       let input = e.target,
           inputNumbersValue = getInputNumbersValue(input),
           selectionStart = input.selectionStart,
           formattedInputValue = "";

       if (!inputNumbersValue) {
           return input.value = "";
       }

       if (input.value.length != selectionStart) {
           // Editing in the middle of input, not last symbol
           if (e.data && /\D/g.test(e.data)) {
               // Attempt to input non-numeric symbol
               input.value = inputNumbersValue;
           }
           return;
       }

       if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
           if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
           let firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
           formattedInputValue = input.value = firstSymbols + " ";
           if (inputNumbersValue.length > 1) {
               formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
           }
           if (inputNumbersValue.length >= 5) {
               formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
           }
           if (inputNumbersValue.length >= 8) {
               formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
           }
           if (inputNumbersValue.length >= 10) {
               formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
           }
       } else {
           formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
       }
       input.value = formattedInputValue;
   }
   let onPhoneKeyDown = function (e) {
       // Clear input after remove last symbol
       let inputValue = e.target.value.replace(/\D/g, '');
       if (e.keyCode == 8 && inputValue.length == 1) {
           e.target.value = "";
       }
   }
   for (let phoneInput of phoneInputs) {
       phoneInput.addEventListener('keydown', onPhoneKeyDown);
       phoneInput.addEventListener('input', onPhoneInput, false);
       phoneInput.addEventListener('paste', onPhonePaste, false);
   }
})


// burger-menu

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})
