//ローディング画面の表示
$(window).on('load',function(){
  $("#loading").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#loading_box").delay(1200).fadeOut('slow');//ローディングテキストを1.2秒（1200ms）待機してからフェードアウト
});

// ============================
// ふわっとアニメーション
// ============================
$(window).on('scroll load', function () {
  var scroll = $(this).scrollTop();
  var windowHeight = $(window).height();

  $('.fade').each(function () {
    var elemTop = $(this).offset().top;

    if (scroll > elemTop - windowHeight + windowHeight / 3) {
      $(this).addClass('active');
    }
  });
});


// ============================
// ハンバーガーメニュー
// ============================
window.onload = function () {
  var hamburger = document.getElementById('js-hamburger');
  var blackBg = document.getElementById('js-black-bg');
  var body = document.body;

  hamburger.addEventListener('click', function () {
    body.classList.toggle('open');
  });

  blackBg.addEventListener('click', function () {
    body.classList.remove('open');
  });
};

var closeBtn = document.getElementById('js-close');

closeBtn.addEventListener('click', function() {
    nav.classList.remove('open');
});


// ============================
// ローディングアニメーション
// ============================
$(window).on('load', function () {
  $("#loading").delay(1500).fadeOut('slow');
  $("#loading_box").delay(1200).fadeOut('slow');
});
