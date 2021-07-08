define([
    'jquery',
    "matchMedia",
    'accordion'
], function ($, mediaCheck, accordion) {

    var linksItem = $(".footer-links-item"),
        linksTitle = $(".footer-links-item h2"),
        linksList =  $(".footer-links-item ul"),
        linksWrapper = $(".footer-links-wrapper");

    mediaCheck({
        media: '(max-width: 768px)',
        entry: function () {
            linksItem.attr('data-role', 'collapsible');
            linksTitle.attr('data-role', 'trigger');
            linksList.attr('data-role', 'content');
            linksList.attr('style', 'display: none;');
            linksWrapper.accordion({active: true, collapsible: true});
        },
        exit: function () {
            linksList.removeAttr('style');
            linksWrapper.accordion({active: false});
        }
    });
});
