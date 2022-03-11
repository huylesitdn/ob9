// Translator

const LANGUAGES = {
  EN: 'en',
  ZH: 'zh'
}

var translator = new Translator({
  defaultLanguage: 'en',
  detectLanguage: true,
  selector: '[data-i18n]',
  debug: false,
  registerGlobally: '__',
  persist: false,
  persistKey: 'preferred_language',
  filesLocation: '/i18n',
});

translator.fetch([LANGUAGES.EN, LANGUAGES.ZH]).then(() => {
  // -> Translations are ready...
  translator.translatePageTo(LANGUAGES.EN);
});

/**
 * MENU SLIDE
 * 
 */

$('#navMenu').on('click', function (e) {
  $('#mySidenav').addClass('active')
})

$('#mySidenav .backdrop, #mySidenav a.left-nav__top__nav__item__link').on('click', function (e) {
  $('#mySidenav').removeClass('active');
})

var selectLanguageModal = new bootstrap.Modal(document.getElementById('selectLanguage'), {});
$('.choose-language').on('click', function (e) {
    selectLanguageModal.hide();
    $('#mySidenav').removeClass('active')
})
/**
 * MENU SLIDE
 * 
 */

/**
 * SCROLL TEXT 
 * 
 */

//this is the useful function to scroll a text inside an element...
function startScrolling(scroller_obj, velocity, start_from) {
  //bind animation  inside the scroller element
  scroller_obj.bind('marquee', function (event, c) {
      //text to scroll
      var ob = $(this);
      //scroller width
      var sw = parseInt(ob.closest('.text-animated').width());
      //text width
      var tw = parseInt(ob.width());
      //text left position relative to the offset parent
      var tl = parseInt(ob.position().left);
      //velocity converted to calculate duration
      var v = velocity > 0 && velocity < 100 ? (100 - velocity) * 1000 : 5000;
      //same velocity for different text's length in relation with duration
      var dr = (v * tw / sw) + v;
      //is it scrolling from right or left?
      switch (start_from) {
          case 'right':
            //   console.log('here')
              //is it the first time?
              if (typeof c == 'undefined') {
                  //if yes, start from the absolute right
                  ob.css({
                      left: sw
                  });
                  sw = -tw;
              } else {
                  //else calculate destination position
                  sw = tl - (tw + sw);
              };
              break;
          default:
              if (typeof c == 'undefined') {
                  //start from the absolute left
                  ob.css({
                      left: -tw
                  });
              } else {
                  //else calculate destination position
                  sw += tl + tw;
              };
      }
      //attach animation to scroller element and start it by a trigger
      ob.animate({
          left: sw
      }, {
          duration: dr,
          easing: 'linear',
          complete: function () {
              ob.trigger('marquee');
          },
          step: function () {
              //check if scroller limits are reached
              if (start_from == 'right') {
                  if (parseInt(ob.position().left) < -parseInt(ob.width())) {
                      //we need to stop and restart animation
                      ob.stop();
                      ob.trigger('marquee');
                  };
              } else {
                  if (parseInt(ob.position().left) > parseInt(ob.parent().width())) {
                      ob.stop();
                      ob.trigger('marquee');
                  };
              };
          }
      });
  }).trigger('marquee');
  //pause scrolling animation on mouse over
  scroller_obj.mouseover(function () {
      $(this).stop();
  });
  //resume scrolling animation on mouse out
  scroller_obj.mouseout(function () {
      $(this).trigger('marquee', ['resume']);
  });
};


$(function() {
  $('.text-animated').each(function(i, obj) {
      if ($(this).find('.text-overflow').width() > $(this).width()) {
          //settings to pass to function
    var scroller = $(this).find('.text-overflow'); // element(s) to scroll
    var scrolling_velocity = 95; // 1-99
    var scrolling_from = 'right'; // 'right' or 'left'
    //call the function and start to scroll..
    startScrolling(scroller, scrolling_velocity, scrolling_from);
      }
  });
});

/**
 * END SCROLL TEXT 
 * 
 */

console.log('--- index.jsaaa')