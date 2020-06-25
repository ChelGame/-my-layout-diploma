$(function () {
  var width = 0;

// Теги

  if ($(window).width() > 1024) {
    $('.brackets').css({
      "top": "138px",
      "left": "127px"
    });

    $('.grid').css({
      "top": "373px",
      "left": "245px"
    });

    $('.img_copy').css({
      "top": "674px",
      "left": "380px"
    });

    $('.div1').css({
      "top": "543px",
      "left": "952px"
    });

    $('.div2').css({
      "top": "168px",
      "left": "790px"
    });
  } else if ($(window).width() < 500) {
    $('.brackets').css({
      "top": "103px",
      "left": "49px",
      "width": "22px"
    });

    $('.grid').css({
      "width": "17px",
      "top": "210px",
      "left": "37px"
    });

    $('.img_copy').css({
      "top": "84px",
      "left": "174px",
      "width": "24px",
      "transform": "rotate(-10deg)"
    });

    $('.div1').css({
      "top": "543px",
      "left": "952px"
    });

    $('.div2').css({
      "top": "146px",
      "left": "247px",
      "width": "35px",
      "transform": "rotate(0deg)"
    });
  } else {
    $('.brackets').css({
      "top": "160px",
      "left": "128px"
    });

    $('.grid').css({
      "top": "641px",
      "left": "58px"
    });

    $('.img_copy').css({
      "top": "589px",
      "left": "361px"
    });

    $('.img_copy_1024').css({
      "top": "238px",
      "left": "425px",
      "transform": "rotate(37deg)",
      "width": "60px"
    });

    $('.div2').css({
      "top": "152px",
      "left": "890px",
      "width": "63px"
    });
  };

  if ($(window).width() < 1024) {
    $('.list__list').slideUp();
  };

// Менюшка

  $('.nav__list_b').click(function () {

    $('.list__list').slideToggle(500);

  });

  //  Штучки для слайдера

  width = $('.slide__img').width();
  var length = $('.slide__img').length;
  width = (width + 20)* length;
  $('.images__port').width(width);

  // Слайдер

  var viewport = $('.viewport').width();
  var slide = 0;
  var left = $('.images__port').css('left')
  left = left.replace('px', '')
  width = width / length ;
  $(document).on('click', '.arrow', function(e) {
    if ($(this).hasClass('none__rewers')) {
      if (left < 0) {
        left = left + width;
        $('.images__port').css({'left': left});
      }
    } else {
      if (left >= -(($('.images__port').width() - viewport))) {
        left = left - width;
        $('.images__port').css({'left': left})
      }
    }
  });

// Кнопки

  for (var i = 0; i < length; i++) {
    $('.slide').append('<button class="slide__button slide__button' + i + ' " type="button" name="slide"></button>')
  }

  $(document).on('click', '.slide__button', function(c) {
    $('.slide__button').css({'background-color':'#ebebeb'});
    console.log(this);
    $(this).css({'background-color':'#ff4e2e'});
    var num = $(this).attr('class');
    num = num.replace('slide__button', '');
    num = num.replace('slide__button', '');
    slide = left;
    left =  -width * num;
    $('.images__port').css({'left': left})
    left = slide;
  });
});
