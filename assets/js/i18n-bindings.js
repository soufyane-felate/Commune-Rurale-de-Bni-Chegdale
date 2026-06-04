/**
 * Associe data-translate aux éléments sans attribut (pages services, horaires, etc.)
 */
(function () {
    const bindingsByPage = {
        about: [
            ['.py-5:not(.bg-light) .card h3', 'aboutGeoInfo'],
            ['section.bg-light .text-center h2', 'aboutMissionTitle'],
            ['section.bg-light .text-center .lead.text-muted', 'aboutMissionSubtitle'],
            ['section.bg-light .card:nth-child(1) h4', 'aboutServiceAdmin'],
            ['section.bg-light .card:nth-child(1) .card-text', 'aboutServiceAdminText'],
            ['section.bg-light .card:nth-child(2) h4', 'aboutDevLocal'],
            ['section.bg-light .card:nth-child(2) .card-text', 'aboutDevLocalText'],
            ['section.bg-light .card:nth-child(3) h4', 'aboutProximity'],
            ['section.bg-light .card:nth-child(3) .card-text', 'aboutProximityText'],
            ['section.bg-light .card:nth-child(4) h4', 'aboutTransparency'],
            ['section.bg-light .card:nth-child(4) .card-text', 'aboutTransparencyText'],
            ['section.bg-light .card:nth-child(5) h4', 'aboutEnvironment'],
            ['section.bg-light .card:nth-child(5) .card-text', 'aboutEnvironmentText'],
            ['section.bg-light .card:nth-child(6) h4', 'aboutSolidarity'],
            ['section.bg-light .card:nth-child(6) .card-text', 'aboutSolidarityText'],
            ['section:has([data-translate="aboutValuesTitle"]) h2', 'aboutValuesTitle'],
            ['section:has([data-translate="aboutValuesTitle"]) .lead', 'aboutValuesSubtitle']
        ],
        services: [
            ['#etat-civil h2.text-primary', 'serviceCivilTitle'],
            ['#etat-civil .lead', 'serviceCivilSubtitle'],
            ['#urbanisme h2.text-primary', 'serviceUrbanTitle'],
            ['#urbanisme .lead', 'serviceUrbanSubtitle'],
            ['#impots h2.text-primary', 'serviceTaxesTitle'],
            ['#impots .lead', 'serviceTaxesSubtitle'],
            ['#social h2.text-primary', 'serviceSocialTitle'],
            ['#social .lead', 'serviceSocialSubtitle'],
            ['section.bg-primary h2', 'ctaNeedHelp'],
            ['section.bg-primary .lead', 'ctaNeedHelpDesc'],
            ['section.bg-primary .btn', 'btnContact'],
            ['footer .col-lg-4:first-child h5', 'footerTitle'],
            ['footer .col-lg-4:first-child p', 'footerTagline'],
            ['footer .col-lg-4:nth-child(2) h5', 'footerQuickLinks'],
            ['footer .col-lg-4:nth-child(3) h5', 'footerContact'],
            ['footer .text-md-end p', 'footerDesignedLine']
        ],
        hours: [
            ['table thead th:nth-child(1)', 'hoursDay'],
            ['table thead th:nth-child(2)', 'hoursSchedule'],
            ['table thead th:nth-child(3)', 'hoursStatus'],
            ['table .badge.bg-success', 'hoursOpen'],
            ['table .badge.bg-warning', 'hoursHalfDay'],
            ['.alert-info strong', 'hoursNoteLabel'],
            ['.alert-info', 'hoursNoteText', true],
            ['section.bg-light .lead.text-muted', 'hoursByServiceDesc'],
            ['section.bg-light .card:nth-child(1) h5', 'serviceCivil'],
            ['section.bg-light .card:nth-child(2) h5', 'serviceUrban'],
            ['section.bg-light .card:nth-child(3) h5', 'serviceFinance'],
            ['section.bg-light .card:nth-child(4) h5', 'serviceSocial'],
            ['section.bg-light .card:nth-child(5) h5', 'hoursReception'],
            ['section.bg-light .card:nth-child(6) h5', 'hoursSecretariat'],
            ['.card-header.bg-danger h3', 'hoursHolidaysTitle'],
            ['.card-header.bg-danger + .card-body > .lead', 'hoursHolidaysLead'],
            ['section.bg-primary h2', 'ctaMoreInfo'],
            ['section.bg-primary .lead', 'ctaMoreInfoDesc'],
            ['section.bg-primary .btn', 'btnContact']
        ],
        admin: [
            ['section.py-5:first-of-type .lead.text-muted', 'adminStructureDesc'],
            ['section.bg-light .lead.text-muted', 'adminCouncilDesc'],
            ['section.py-5:last-of-type .lead.text-muted', 'adminTeamDesc']
        ],
        contact: [
            ['label[for="nom"]', 'contactName'],
            ['label[for="email"]', 'contactEmailField'],
            ['label[for="telephone"]', 'contactPhoneField'],
            ['label[for="sujet"]', 'contactSubject'],
            ['label[for="message"]', 'contactMessage'],
            ['label[for="consentement"]', 'contactConsent'],
            ['#sujet option[value=""]', 'contactSubjectSelect'],
            ['#sujet option[value="etat-civil"]', 'serviceCivil'],
            ['#sujet option[value="urbanisme"]', 'serviceUrban'],
            ['#sujet option[value="impots"]', 'serviceTaxes'],
            ['#sujet option[value="social"]', 'serviceSocial'],
            ['#sujet option[value="administration"]', 'navAdmin'],
            ['#sujet option[value="autre"]', 'contactSubjectOther'],
            ['#contactForm button[type="submit"]', 'contactSend'],
            ['#formSuccess', 'contactSuccess'],
            ['#formError', 'contactError'],
            ['#nom + .invalid-feedback', 'contactErrName'],
            ['#email + .invalid-feedback', 'contactErrEmail'],
            ['#sujet + .invalid-feedback', 'contactErrSubject'],
            ['#message + .invalid-feedback', 'contactErrMessage'],
            ['#consentement + label + .invalid-feedback', 'contactErrConsent']
        ]
    };

    function bindOne(selector, key, replaceFullText) {
        document.querySelectorAll(selector).forEach((el) => {
            if (el.hasAttribute('data-translate')) return;
            el.setAttribute('data-translate', key);
            if (replaceFullText) el.setAttribute('data-translate-mode', 'full');
        });
    }

    function bindPageTranslations() {
        const page = document.body.getAttribute('data-page');
        const bindings = bindingsByPage[page];
        if (!bindings) return;

        bindings.forEach((args) => bindOne(args[0], args[1], args[2]));
    }

    function refreshLanguage() {
        if (window.languageManager) {
            languageManager.setLanguage(languageManager.getCurrentLanguage());
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            bindPageTranslations();
            refreshLanguage();
        });
    } else {
        bindPageTranslations();
        refreshLanguage();
    }
})();
