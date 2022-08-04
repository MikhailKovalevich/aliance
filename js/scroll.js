// header scroll

document.body.onscroll = function() {
  document.querySelector('.header').classList.remove('_no-scroll')
  if(window.pageYOffset == 0){
    document.querySelector('.header').classList.add('_no-scroll')
  }
}
