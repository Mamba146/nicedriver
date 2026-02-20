// ------------------------------
// 1. Переводы
// ------------------------------
const translations = {
    en: {
        menu_services: "Services",
        menu_fleet: "Fleet",
        menu_about: "About",
        menu_contact: "Contact",
        book_now: "Book now",

        hero_title: "Premium Chauffeur on the Côte d’Azur",
        hero_subtitle: "Discreet, punctual and luxurious transfers for your business and leisure.",
        hero_book: "Book your ride",
        hero_fleet: "View fleet",

        services_title: "Our Services",

        pickup_placeholder: "Pickup location",
        dropoff_placeholder: "Drop-off location",
        date_placeholder: "Date",
        time_placeholder: "Time",
        passengers: "Passengers",
        request_quote: "Request a quote",

        contact_title: "Contact",
        contact_get_in_touch: "Get in Touch",
        contact_available: "We are available 24/7 for bookings and inquiries.",
        contact_phone: "Phone:",
        contact_whatsapp: "WhatsApp:",
        contact_whatsapp_chat: "Chat on WhatsApp",
        contact_email: "Email:",
        contact_address: "Address:",

        your_name: "Your Name",
        your_email: "Email",
        your_phone: "Phone",
        your_message: "Your Message",
        send_message: "Send Message",

        // ------------------------------
        // SERVICES — EN
        // ------------------------------
        service_airport_title: "Airport Transfers",
        service_airport_desc: "Seamless and stress‑free transfers to all major airports on the Côte d’Azur.",

        service_business_title: "Business Chauffeur",
        service_business_desc: "Professional, discreet and punctual transportation for meetings and events.",

        service_events_title: "Events & Weddings",
        service_events_desc: "Elegant vehicles and experienced chauffeurs for special occasions.",

        service_tours_title: "Private Tours",
        service_tours_desc: "Discover the French Riviera with a private driver.",

        service_hourly_title: "Hourly Service",
        service_hourly_desc: "Your personal chauffeur at disposal for as many hours as needed.",

        service_vip_title: "VIP & Celebrity Transport",
        service_vip_desc: "Maximum discretion, security and comfort for VIP clients.",

        // ------------------------------
        // FLEET — EN
        // ------------------------------
        fleet_title: "Our Fleet",
        fleet_page_title: "Our Fleet",
        fleet_subtitle: "Premium Mercedes vehicles for business, airport transfers and VIP travel.",

        fleet_eclass_title: "Mercedes E-Class",
        fleet_eclass_desc: "Elegant and comfortable, ideal for business travel and airport transfers.",
        fleet_eclass_meta: "3 passengers • 2 suitcases",

        fleet_sclass_title: "Mercedes S-Class",
        fleet_sclass_desc: "The ultimate luxury sedan with exceptional comfort and refinement.",
        fleet_sclass_meta: "3 passengers • 2 suitcases",

        fleet_maybach_title: "Mercedes Maybach",
        fleet_maybach_desc: "Unmatched prestige, privacy and first‑class comfort for VIP clients.",
        fleet_maybach_meta: "3 passengers • 2 suitcases",

        fleet_vclass_title: "Mercedes V-Class",
        fleet_vclass_desc: "Spacious and luxurious, perfect for families, groups and business teams.",
        fleet_vclass_meta: "7 passengers • 7 suitcases",

        fleet_sprinter_title: "Mercedes Sprinter VIP",
        fleet_sprinter_desc: "VIP minibus with lounge interior for events, tours and premium travel.",
        fleet_sprinter_meta: "16 passengers • 16 suitcases",

        fleet_gls_title: "Mercedes GLS",
        fleet_gls_desc: "Premium SUV combining power, comfort and elegance.",
        fleet_gls_meta: "4 passengers • 4 suitcases",

        fleet_cta_title: "Ready to book your vehicle?",
        fleet_cta_text: "Contact us for availability, pricing and personalised chauffeur services.",

        // ------------------------------
        // CONTACT PAGE — EN
        // ------------------------------
        contact_page_title: "Contact Us",
        contact_page_get_in_touch: "Get in Touch",
        contact_page_intro: "We are available 24/7 for bookings, inquiries and premium transportation services across the Côte d’Azur.",
        contact_page_address: "Nice, Côte d’Azur, France",
        contact_hours: "Working Hours:",
        contact_page_hours: "24/7 — Always Available",
        your_phone_number: "Phone Number"
    },

    // ------------------------------
    // FRENCH TRANSLATIONS
    // ------------------------------
    fr: {
        menu_services: "Services",
        menu_fleet: "Flotte",
        menu_about: "À propos",
        menu_contact: "Contact",
        book_now: "Réserver",

        hero_title: "Chauffeur privé sur la Côte d’Azur",
        hero_subtitle: "Transferts discrets, ponctuels et luxueux pour affaires et loisirs.",
        hero_book: "Réserver un trajet",
        hero_fleet: "Voir la flotte",

        services_title: "Nos Services",

        pickup_placeholder: "Lieu de prise en charge",
        dropoff_placeholder: "Lieu de dépose",
        date_placeholder: "Date",
        time_placeholder: "Heure",
        passengers: "Passagers",
        request_quote: "Demander un devis",

        contact_title: "Contact",
        contact_get_in_touch: "Contactez-nous",
        contact_available: "Disponible 24/7 pour réservations et informations.",
        contact_phone: "Téléphone:",
        contact_whatsapp: "WhatsApp:",
        contact_whatsapp_chat: "Discuter sur WhatsApp",
        contact_email: "Email:",
        contact_address: "Adresse:",

        your_name: "Votre nom",
        your_email: "Email",
        your_phone: "Téléphone",
        your_message: "Votre message",
        send_message: "Envoyer",
        your_phone_number: "Numéro de téléphone",

        // ------------------------------
        // SERVICES — FR
        // ------------------------------
        service_airport_title: "Transferts aéroport",
        service_airport_desc: "Transferts fluides et sans stress vers tous les grands aéroports de la Côte d’Azur.",

        service_business_title: "Chauffeur d’affaires",
        service_business_desc: "Transport professionnel, discret et ponctuel pour réunions et événements.",

        service_events_title: "Événements & Mariages",
        service_events_desc: "Véhicules élégants et chauffeurs expérimentés pour vos occasions spéciales.",

        service_tours_title: "Tours privés",
        service_tours_desc: "Découvrez la Côte d’Azur avec un chauffeur privé.",

        service_hourly_title: "Service à l’heure",
        service_hourly_desc: "Votre chauffeur personnel à disposition pour autant d’heures que nécessaire.",

        service_vip_title: "Transport VIP & Célébrités",
        service_vip_desc: "Discrétion maximale, sécurité et confort pour les clients VIP.",

        // ------------------------------
        // FLEET — FR
        // ------------------------------
        fleet_title: "Notre flotte",
        fleet_page_title: "Notre flotte",
        fleet_subtitle: "Véhicules Mercedes haut de gamme pour affaires, transferts aéroport et voyages VIP.",

        fleet_eclass_title: "Mercedes Classe E",
        fleet_eclass_desc: "L’équilibre parfait entre confort et élégance.",
        fleet_eclass_meta: "3 passagers • 2 valises",

        fleet_sclass_title: "Mercedes Classe S",
        fleet_sclass_desc: "La berline de luxe ultime, offrant un confort exceptionnel.",
        fleet_sclass_meta: "3 passagers • 2 valises",

        fleet_maybach_title: "Mercedes Classe S Maybach",
        fleet_maybach_desc: "L’expérience VIP ultime avec un prestige inégalé.",
        fleet_maybach_meta: "3 passagers • 2 valises",

        fleet_vclass_title: "Mercedes Classe V",
        fleet_vclass_desc: "Spacieuse et luxueuse pour familles et groupes professionnels.",
        fleet_vclass_meta: "7 passagers • 7 valises",

        fleet_sprinter_title: "Mercedes Sprinter VIP",
        fleet_sprinter_desc: "Minibus de luxe avec sièges style lounge.",
        fleet_sprinter_meta: "16 passagers • 16 valises",

        fleet_gls_title: "Mercedes GLS",
        fleet_gls_desc: "SUV premium alliant puissance, confort et élégance.",
        fleet_gls_meta: "4 passagers • 4 valises",

        fleet_cta_title: "Prêt à réserver votre véhicule ?",
        fleet_cta_text: "Contactez-nous pour la disponibilité, les tarifs et des services de chauffeur personnalisés."
    }
};
// ------------------------------
// 2. Определение языка
// ------------------------------
function detectLanguage() {
    const saved = localStorage.getItem("lang");
    if (saved) return saved;

    const browserLang = navigator.language.slice(0, 2);
    return ["en", "fr"].includes(browserLang) ? browserLang : "en";
}

// ------------------------------
// 3. Применение перевода
// ------------------------------
function applyTranslations(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
}

// ------------------------------
// 4. Подсветка активного языка
// ------------------------------
function highlightActiveLang(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.querySelector(`.lang-btn[onclick="setLang('${lang}')"]`);
    if (activeBtn) activeBtn.classList.add('active');
}

// ------------------------------
// 5. Установка языка
// ------------------------------
function setLang(lang) {
    localStorage.setItem("lang", lang);
    applyTranslations(lang);
    highlightActiveLang(lang);
}

// ------------------------------
// 6. Инициализация
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const lang = detectLanguage();
    applyTranslations(lang);
    highlightActiveLang(lang);
});
