document.addEventListener('DOMContentLoaded', () => {
  const langSwitcher = document.getElementById('lang-switcher');

  const setLanguage = (language) => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('language', language);

    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
      const key = element.getAttribute('data-key');
      if (translations[language] && translations[language][key]) {
        element.textContent = translations[language][key];
      }
    });

    langSwitcher.textContent = language === 'ar' ? 'English' : 'العربية';
  };

  langSwitcher.addEventListener('click', () => {
    const currentLanguage = localStorage.getItem('language') || 'en';
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
  });

  // Set initial language on page load
  const initialLanguage = localStorage.getItem('language') || 'en';
  setLanguage(initialLanguage);
});
