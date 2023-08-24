

// бургер меню 
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function(){
    document.querySelector("header").classList.toggle("open")
  }
  )
}
)

// кнопка поиска

document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById("open-search-form").addEventListener("click", (e) =>{
    document.getElementById("search-form").classList.add("search__form_show")
  })


  document.getElementById('search-form-close').addEventListener('click', (e) =>{
    document.getElementById('search-form').classList.remove('search__form_show')
  })

  // чтоб форма не отправлялась

  document.getElementById('search-form').addEventListener('submit', (e) => {
e.preventDefault()
})
}
)


const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  a11y: {
    paginationBulletMessage: 'Переходим на слайд {{index}}',
  }
});

let tabsBtn = document.querySelectorAll('.how__step');
let tabsItem = document.querySelectorAll('.how__content');


tabsBtn.forEach(function (element){
  element.addEventListener('click', function (e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn){ btn.classList.remove('how__step--active')});
    e.currentTarget.classList.add('how__step--active');

    tabsItem.forEach(function (element){ element.classList.remove('how__content--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('how__content--active');

  });
});

// new Accordion ( '.faq__list',{
//   elementclass:'accordion',
//   triggerclass:'faq__control',
//   panelclass:'faq__panel',
//   activeclass:'accordion--active'
// });

new Accordion('.faq__list', {
	elementClass: 'accordion',
	triggerClass: 'faq__control',
	panelClass: 'faq__panel',
	activeClass: 'accordion--active'
});



  // tabsBtn.addEventListener('click', function(e){
  // const path = e.currentTarget.dataset.path;
  // document.querySelectorAll('.how__step').forEach(function(btn){
  // btn.classList.remove('how__step--active')});
  // e.currentTarget.classList.add('how__step--active');
  // document.querySelectorAll('.how__content').forEach(function(tabsBtn){
  // tabsBtn.classList.remove('how__content--active')});
  // document.querySelector(`[data-target="${path}"]`).classList.add('how__content--active');
  // });
  // });
