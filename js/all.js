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
  //breakpoint 相當於 min-width
  $('#jq-c_img_div').slick({
    // device < 480
    mobileFirst:true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
    responsive: [{
      // device > 960
        breakpoint: 960,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 3,
        }
      },
      {
        //480 < device < 960 
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 2
        }
      }
    ]

  });

  $("#jq-icon_touch").click(function (e) {
    // e.preventDefault();
    animateCSS("#jq-icon_touch", 'bounce', function (e) {
      $("#list_slide").toggle("fast");
    });

  });


});