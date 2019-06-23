function animateCSS(element, animationName, callback) {
  const node = document.querySelector(element)
  node.classList.add('animated', animationName)

  function handleAnimationEnd() {
      node.classList.remove('animated', animationName)
      node.removeEventListener('animationend', handleAnimationEnd)

      if (typeof callback === 'function') callback()
  }

  node.addEventListener('animationend', handleAnimationEnd)
};

$(document).ready(function () {

  // content 圖片輪播
  $('.content_img_div').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 240,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ],
    autoplay: true,
    autoplaySpeed: 2000

});

$("#jq-icon_touch").click(function (e) { 
  // e.preventDefault();
  animateCSS("#jq-icon_touch",'bounce', function(e){
    $("#list_slide").toggle("fast");
  });
  
});
  

  });

  
