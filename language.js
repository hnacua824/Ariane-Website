
const navItems = {
    navAboutUs: document.querySelector('.navAboutUs a'),
    navServices: document.querySelector('.navServices a'),
    navContact: document.querySelector('.navContact a'),
    navBooking: document.querySelector('.navBooking a'),
    section1H1: document.querySelector('.section1H1'),
    section1P: document.querySelector('.section1P')
};

const translations = {
    en: {
        navAboutUs: 'About Us',
        navServices: 'Services',
        navContact: 'Contact',
        navBooking: 'Book Appointment',
        section1H1: 'Embrace the glamorous glow',
        section1P: 'Because gorgeous, glowing skin is for everyone'

    },
    de: {
        navAboutUs: 'Über uns',
        navServices: 'Dienstleistungen',
        navContact: 'Kontakt',
        navBooking: 'Termin buchen',
        section1H1: 'Begrüßen Sie das glamouröse Leuchten',
        section1P: 'Denn wunderschöne, strahlende Haut ist für alle da.'
    }
};


const languageSelect = document.querySelector('#language-select');

function switchLanguage() {
    const selectedLanguage = languageSelect.value;
    const currentTranslations = translations[selectedLanguage];

    for (const [key, element] of Object.entries(navItems)) {
        element.textContent = currentTranslations[key];
    }
}