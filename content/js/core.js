var options = {
    strings: [
        'Piilve Statsmitoimist', // Cloudic (Latin)
        'Пиилвэ Статсмитоимист', // Cloudic (Cyrillic)
        'CloudCraftin hallitus', // Finnish
        'CloudCraft-regjeringen', // Norwegian
        'CloudCraft ríkisstjórn', // Icelandic
        'CloudCraftap naalagaassuseqa',
        'CloudCraftaid Ráđđehus', // Northern Sámi
        'CloudCraftin abuniekkut', // Karelian
        'CloudCrafti valitsus', // Estonian
        'Oficina Gubernamental de CloudCraft', // Spanish
        'Escritório do Governo da CloudCraft', // Portugese
        'Oifig Rialtais CloudCraft', // Irish Gaelic
    ],
    typeSpeed: 40,
    backSpeed: 50,
    loop: true,
    backDelay: 2000,
};

var typed = new Typed('#navbar-brand', options);

jQuery('div.dropdown').hover(function() {

    jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(300);
  }, function() {
  jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(300);
});
