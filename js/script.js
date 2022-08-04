



// hero slider

$(document).ready(function(){
  $('.hero__bottom-cards').slick({
    arrows: false,
    slidesToShow: 5,
  });
});

// step slider

$(document).ready(function(){
  $('.step__cards').slick({
    arrows: false,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          mobileFirst: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        }
      },
    ]
  });
});

// blog slider

$(document).ready(function(){
  $('.blog__cards').slick({
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          mobileFirst: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        }
      },
    ]
  });
});

// center slider

$(document).ready(function(){
  $('.center__slider').slick({
    arrows: true,
    slidesToShow: 2,
    // variableWidth: true,
  });
});


// burger menu
const burgerMenu = document.querySelector('.header__burger');

if(burgerMenu){
  const bodyMenu = document.querySelector('.header__nav');
  const menuLinks = document.querySelectorAll('.header__nav-item-link');


  burgerMenu.addEventListener('click', function(){
  document.body.classList.toggle('_lock');
  burgerMenu.classList.toggle('_active');
  bodyMenu.classList.toggle('_active');

  if(menuLinks.length > 0) {

    menuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', onMenuClick)
    })

    function onMenuClick() {
      if(burgerMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        burgerMenu.classList.remove('_active');
        bodyMenu.classList.remove('_active');
      }
    }
  }

  });
}




// popup

document.querySelector('.header__button').addEventListener('click', function(){
  document.querySelector('.popup').classList.add('popup_active');
  document.querySelector('body').classList.add('_lock')
})

document.querySelector('.popup__button-close').addEventListener('click', function(){
  document.querySelector('.popup').classList.remove('popup_active');
  document.querySelector('body').classList.remove('_lock')
})


// mask

var selector = document.querySelector("input[type='tel']");
let popup = document.querySelector('.popup__input-tel')


var im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);
im.mask(popup);



  // validate

new JustValidate('#form', {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 15,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }

    },
  },
  colorWrong: '#D11616',
  messages: {
    name: {
      required: 'Как вас зовут?',
      minLength: 'Имя слишком короткое',
      maxLength: 'Имя слишком длинное'
    },
    tel: {
      required: 'Укажите ваш телефон'
    },
  },
});


new JustValidate('#offer', {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 15,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }

    },
  },
  colorWrong: '#D11616',
  messages: {
    name: {
      required: 'Как вас зовут?',
      minLength: 'Имя слишком короткое',
      maxLength: 'Имя слишком длинное'
    },
    tel: {
      required: 'Укажите ваш телефон'
    },
  },
});


