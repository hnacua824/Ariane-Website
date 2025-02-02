const navItems = {
    navAboutUs: document.querySelector('.navAboutUs a'),
    navServices: document.querySelector('.navServices a'),
    navContact: document.querySelector('.navContact a'),
    navBooking: document.querySelector('.navBooking a'),
    bookNow: document.querySelector('.bookNow'),
    section1H1: document.querySelector('.section1H1'),
    section1P: document.querySelector('.section1P'),
    section2H1: document.querySelector('.section2Image h1'),
    section2H3_1: document.querySelectorAll('.section2Text h3')[0],
    section2P_1: document.querySelectorAll('.section2Text p')[0],
    section2H3_2: document.querySelectorAll('.section2Text h3')[1],
    section2P_2: document.querySelectorAll('.section2Text p')[1],
    section2H3_3: document.querySelectorAll('.section2Text h3')[2],
    section2P_3: document.querySelectorAll('.section2Text p')[2],
    section3LashH1: document.querySelector('#section3 h1'),
    lash1H4: document.querySelector('#lash1 h4'),
    lash1H3: document.querySelector('#lash1 h3'),
    lash1P: document.querySelector('#lash1 .lashCardFront p'),
    lash1BackP: document.querySelector('#lash1 .lashCardBack p'),
    lash2H4: document.querySelector('#lash2 h4'),
    lash2H3: document.querySelector('#lash2 h3'),
    lash2P: document.querySelector('#lash2 .lashCardFront p'),
    lash2BackP: document.querySelector('#lash2 .lashCardBack p'),
    lash3H4: document.querySelector('#lash3 h4'),
    lash3H3: document.querySelector('#lash3 h3'),
    lash3P: document.querySelector('#lash3 .lashCardFront p'),
    lash3BackP: document.querySelector('#lash3 .lashCardBack p'),
    fmTitle: document.querySelector('.fmTitle'),
    section3FacialH1: document.querySelector('.section3:last-of-type h1'),
    fm1H4: document.querySelector('#fm1 h4'),
    fm1H3: document.querySelector('#fm1 h3'),
    fm1P: document.querySelector('#fm1 .fmCardFront p'),
    fm1BackP: document.querySelector('#fm1 .fmCardBack p'),
    fm2H4: document.querySelector('#fm2 h4'),
    fm2H3: document.querySelector('#fm2 h3'),
    fm2P: document.querySelector('#fm2 .fmCardFront p'),
    fm2BackP: document.querySelector('#fm2 .fmCardBack p'),
    fm3H4: document.querySelector('#fm3 h4'),
    fm3H3: document.querySelector('#fm3 h3'),
    fm3P: document.querySelector('#fm3 .fmCardFront p'),
    fm3BackP: document.querySelector('#fm3 .fmCardBack p'),
    section5ImageH1: document.querySelector('.section5Image h1'),
    section5Text1P: document.querySelectorAll('.section5Text .spaces p')[0],
    section5Text2P: document.querySelectorAll('.section5Text .spaces p')[1],
    section5Text3P: document.querySelector('.section5Text .spaces3 p'),
    section7H1: document.querySelector('.section7Text h1'),
    section7P: document.querySelector('.section7Text p'),
    contactH1: document.querySelector('.section8Form .contactH1'),
    nameLabel: document.querySelector('.section8Form .nameLabel'),
    emailLabel: document.querySelector('.section8Form .emailLabel'),
    phoneLabel: document.querySelector('.section8Form .phoneLabel'),
    messageLabel: document.querySelector('.section8Form .messageLabel'),
    submitBtn: document.querySelector('.section8Form .submitBtn'),
    phoneTitle: document.querySelector('.section8Text .phoneTitle'),
    phoneNumber: document.querySelector('.section8Text .phoneNumber'),
    emailTitle: document.querySelector('.section8Text .emailTitle'),
    emailAddress: document.querySelector('.section8Text .emailAddress'),
    socialTitle: document.querySelector('.section8Text .socialTitle'),
    socialHandle: document.querySelector('.section8Text .socialHandle'),
    bookAppointmentTitle: document.querySelector('.BookingNow h3'),
    bookAppointmentText: document.querySelector('.BookingNow p'),
    bookNowButton: document.querySelector('.BookingNow .button'),
    selectServiceTitle: document.querySelector('.serviceForm h3'),
    selectServiceText: document.querySelector('.serviceForm p'),
    chooseServiceButton: document.querySelector('.serviceForm .button'),
};

const translations = {
    en: {
        navAboutUs: 'About Us',
        navServices: 'Services',
        navContact: 'Contact',
        navBooking: 'Book Appointment',
        bookNow: 'Book Now',
        section1H1: 'Embrace The Glamorous Glow',
        section1P: 'Because gorgeous, glowing skin is for everyone',
        section2H1: 'Ariane Centeno',
        section2H3_1: 'Beauty and Lash Services',
        section2P_1: 'Skilled technicians offer customized lash enhancements, from subtle to dramatic. Focus on meticulous detail ensures lashes are both stunning and comfortable.',
        section2H3_2: 'Facial Massage Experience',
        section2P_2: 'Experts use advanced techniques to revitalize skin and improve circulation. Sessions are personalized, aiming for relaxation and radiance.',
        section2H3_3: 'Overall Experience',
        section2P_3: 'A serene oasis committed to elevating beauty routines with luxury and expertise. Emphasizes a transformative self-care journey.',
        section3LashH1: 'Lash',
        fmTitle:'Facial Massage',
        lash1H4: 'Wispy to Mega Volume',
        lash1H3: 'Eyelashes',
        lash1P: '€35',
        lash1BackP: 'This service offers a dramatic, full lash look tailored to your preferences. High-quality materials ensure lasting results.',
        lash2H4: 'Kera Eyelashes',
        lash2H3: 'Lash Lift and Tint',
        lash2P: '€12',
        lash2BackP: 'Enjoy a natural lash enhancement with a gentle lift and tone that adds subtle beauty to your eyes.',
        lash3H4: 'Eyebrows',
        lash3H3: 'Brow Lamination',
        lash3P: '€15',
        lash3BackP: 'Achieve perfectly shaped and polished brows with our lamination service. Long-lasting and stunning results.',
        section3FacialH1: 'Facial Massage',
        fm1H4: 'Advanced Services',
        fm1H3: 'Basic Facial',
        fm1P: '€35/session',
        fm1BackP: 'A rejuvenating facial treatment designed to cleanse, hydrate, and refresh your skin.',
        fm2H4: 'Advanced Services',
        fm2H3: 'Facial Massage',
        fm2P: '€55/session',
        fm2BackP: 'Relax and unwind with our expert facial massage, designed to relieve tension and promote glowing skin.',
        fm3H4: 'Advanced Services',
        fm3H3: 'GuanSha Massage',
        fm3P: '€70/session',
        fm3BackP: 'Experience the ancient art of GuanSha, a soothing massage technique that improves circulation and skin vitality.',
        section5ImageH1: 'Start Your Glow With...',
        section5Text1P: 'Relaxing Oasis Studio',
        section5Text2P: 'Skincare specialist with professional training',
        section5Text3P: 'Hypoallergenic, dermatologist-approved products',
        section7H1: 'Your Skin Care Saviours',
        section7P: `At Luxuriose Aesthetik we offer specialized services to enhance your 
        natural beauty and well-being. Our facial massage treatments rejuvenate the skin, improve circulation, and reduce tension for a refreshed look. We also provide lash extensions and lifts for fuller, elegantly curled lashes, eliminating the need for daily mascara. Additionally, our eyebrow lifting and tinting services frame your face beautifully, creating a youthful appearance. 
        Our skilled professionals ensure a personalized experience that boosts your confidence and promotes self-care. Discover the transformative effects of our beauty services with us.`,
        contactH1: 'Let\'s Chat',
        nameLabel: 'Name:',
        emailLabel: 'Email:',
        phoneLabel: 'Phone Number:',
        messageLabel: 'Message:',
        submitBtn: 'Submit',
        phoneTitle: 'Phone',
        phoneNumber: '(49) 15737818479',
        emailTitle: 'E-mail',
        emailAddress: 'hello@Luxuriosestudio.com',
        socialTitle: 'Social',
        socialHandle: '@LuxurioseAesthetik',
        bookAppointmentTitle: 'Book Your Appointment',
        bookAppointmentText: 'Select a date and time for your appointment.',
        bookNowButton: 'Book Now',
        selectServiceTitle: 'Select Your Service',
        selectServiceText: 'Choose the services you\'d like to book from our list.',
        chooseServiceButton: 'Choose Service',
    },
    de: {  navAboutUs: 'Über uns',
        navServices: 'Dienstleistungen',
        navContact: 'Kontakt',
        navBooking: 'Termin buchen',
        bookNow: 'Jetzt Buchen',
        section1H1: 'Begrüßen Sie das glamouröse Leuchten',
        section1P: 'Denn wunderschöne, strahlende Haut ist für alle da.',
        section2H1: 'Ariane Centeno',
        section2H3_1: 'Schönheits- und Wimpernservices',
        section2P_1: 'Erfahrene Techniker bieten maßgeschneiderte Wimpernverlängerungen an, von dezent bis dramatisch. Der Fokus auf akribische Details sorgt dafür, dass die Wimpern atemberaubend und komfortabel sind.',
        section2H3_2: 'Erlebnis der Gesichtsmassage',
        section2P_2: 'Experten verwenden fortschrittliche Techniken, um die Haut zu revitalisieren und die Durchblutung zu verbessern. Jede Sitzung ist individuell angepasst, um Entspannung und Ausstrahlung zu fördern.',
        section2H3_3: 'Gesamterlebnis',
        section2P_3: 'Eine ruhige Oase, die sich der Verbesserung Ihrer Schönheitsroutine mit Luxus und Fachwissen widmet. Betont eine transformative Selbstpflege-Reise.',
        section3LashH1: 'Wimpern',
        lash1H4: 'Von Wispy bis Mega-Volumen',
        lash1H3: 'Wimpern',
        lash1P: '€35',
        fmTitle:'Gesichtsmassage',
        lash1BackP: 'Dieser Service bietet einen dramatischen, vollen Wimpern-Look, der auf Ihre Wünsche abgestimmt ist. Hochwertige Materialien sorgen für langanhaltende Ergebnisse.',
        lash2H4: 'Kera Wimpern',
        lash2H3: 'Wimpernlifting und Tönen',
        lash2P: '€12',
        lash2BackP: 'Genießen Sie eine natürliche Wimpernverschönerung mit einem sanften Lifting und einer Tönung, die subtile Schönheit verleiht.',
        lash3H4: 'Augenbrauen',
        lash3H3: 'Brauen Laminierung',
        lash3P: '€15',
        lash3BackP: 'Perfekt geformte und gepflegte Augenbrauen mit unserem Laminierungsservice. Lang anhaltende und atemberaubende Ergebnisse.',
        section3FacialH1: 'Gesichtsmassagen',
        fm1H4: 'Erweiterte Services',
        fm1H3: 'Basisgesichtsbehandlung',
        fm1P: '€35/Sitzung',
        fm1BackP: 'Eine verjüngende Gesichtsbehandlung, die entwickelt wurde, um Ihre Haut zu reinigen, mit Feuchtigkeit zu versorgen und zu erfrischen.',
        fm2H4: 'Erweiterte Services',
        fm2H3: 'Gesichtsmassage',
        fm2P: '€55/Sitzung',
        fm2BackP: 'Entspannen Sie sich mit unserer professionellen Gesichtsmassage, die entwickelt wurde, um Verspannungen zu lösen und strahlende Haut zu fördern.',
        fm3H4: 'Erweiterte Services',
        fm3H3: 'GuanSha-Massage',
        fm3P: '€70/Sitzung',
        fm3BackP: 'Erleben Sie die alte Kunst der GuanSha-Massage, eine beruhigende Technik, die die Durchblutung und Vitalität der Haut verbessert.',
        section5ImageH1: 'Beginnen Sie Ihr Strahlen mit...',
        section5Text1P: 'Entspannendes Oasis Studio',
        section5Text2P: 'Hautpflegespezialist mit professioneller Ausbildung',
        section5Text3P: 'Hypoallergene, dermatologisch getestete Produkte',
        section7H1: 'Ihre Hautpflege-Retter',
        section7P: `Bei Luxuriose Aesthetik bieten wir spezialisierte Dienstleistungen an, um Ihre natürliche Schönheit und Ihr Wohlbefinden zu verbessern. Unsere Gesichtsmassagebehandlungen verjüngen die Haut, verbessern die Durchblutung und reduzieren Verspannungen für ein erfrischtes Aussehen. Wir bieten auch Wimpernverlängerungen und Lifts für vollere, elegant geschwungene Wimpern, sodass tägliches Mascara-Auftragen überflüssig wird. Zusätzlich rahmen unsere Augenbrauen-Lifting- und Tönungsdienste Ihr Gesicht wunderschön ein und sorgen für ein jugendliches Erscheinungsbild.
        Unsere erfahrenen Fachleute sorgen für ein personalisiertes Erlebnis, das Ihr Selbstbewusstsein stärkt und zur Selbstpflege beiträgt. Entdecken Sie die transformative Wirkung unserer Schönheitsdienstleistungen bei uns.`,
        contactH1: 'Lass uns reden',
        nameLabel: 'Name:',
        emailLabel: 'E-Mail:',
        phoneLabel: 'Telefonnummer:',
        messageLabel: 'Nachricht:',
        submitBtn: 'Absenden',
        phoneTitle: 'Telefon',
        phoneNumber: '(49) 15737818479',
        emailTitle: 'E-Mail',
        emailAddress: 'hello@Luxuriosestudio.com',
        socialTitle: 'Soziale Medien',
        socialHandle: '@LuxurioseAesthetik',
        bookAppointmentTitle: 'Buchen Sie Ihren Termin',
        bookAppointmentText: 'Wählen Sie ein Datum und eine Uhrzeit für Ihren Termin.',
        bookNowButton: 'Jetzt Buchen',
        selectServiceTitle: 'Wählen Sie Ihre Dienstleistung',
        selectServiceText: 'Wählen Sie die Dienstleistungen aus, die Sie aus unserer Liste buchen möchten.',
        chooseServiceButton: 'Dienstleistung wählen', }
};

const languageSelect = document.querySelector('#language-select');

function switchLanguage() {
    const selectedLanguage = languageSelect.value;
    const currentTranslations = translations[selectedLanguage];

    for (const [key, element] of Object.entries(navItems)) {
        if (element) {
            element.textContent = currentTranslations[key] || '';
        }
    }
}

// Event Listener
languageSelect.addEventListener('change', switchLanguage);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // Get the navbar element
  const navbar = document.querySelector(".navBar");

  // Check if the page is scrolled more than 50px
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.style.backgroundColor = "rgba(183, 76, 76, .85)";  // Fully opaque
  } else {
    navbar.style.backgroundColor = "rgba(33, 32, 32, 0)";  // Transparent
  }
}

document.getElementById('bookNow').addEventListener('click', function() {
  window.location.href = "booking.html";
});



document.getElementById('bookNow').addEventListener('click', function() {
  window.location.href = "booking.html";
});


let menuList = document.getElementById("menuList");
menuList.style.maxHeight="0px";


function toggleMenu(){
  if(menuList.style.maxHeight=="0px"){
    menuList.style.maxHeight="300px"
  }
  else{
    menuList.style.maxHeight="0px"
  }
}


document.querySelectorAll('.lashCard, .fmCard').forEach(card => {
  card.addEventListener('click', () => {
      card.classList.toggle('flipped');
  });
});


