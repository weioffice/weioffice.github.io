// 解決 animate.css 動畫 不重複的問題
function animateCSS(element, animationName, callback) {
  const node = document.querySelector(element)
  node.classList.add('animated', animationName)

  function handleAnimationEnd() {
    node.classList.remove('animated', animationName)
    node.removeEventListener('animationend', handleAnimationEnd)

    if (typeof callback === 'function') callback()
  }

  node.addEventListener('animationend', handleAnimationEnd)
}

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
  

  //點擊 icon圖
  $("#js-icon_img_div").click(function (event) {
    // icon圖 出現 bounce 動畫
    animateCSS("#js-icon_img_div", 'bounce', function () {
      // icon選單 slide
      $("#js-slide").slideToggle("fast");
    })

  });

  //  $("#js-hover").hover(function(event){

  //  });

  

});