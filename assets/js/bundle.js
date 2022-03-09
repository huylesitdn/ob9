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

$('#navMenu').on('click', function (e) {
  $('#mySidenav').addClass('active')
})

$('#mySidenav .backdrop, #mySidenav a').on('click', function (e) {
  $('#mySidenav').removeClass('active')
})

console.log('--- index.jsaaa')