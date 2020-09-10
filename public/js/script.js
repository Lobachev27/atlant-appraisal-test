/*Модальные окна*/

function open_modal(e) {
    $('#'+ e).addClass('show');
    $('body').addClass('ov-hid');
}
function close_modal(e) {
    $('#'+ e).removeClass('show');
    $('body').removeClass('ov-hid');
}

$(document).click(function(event) {
    if(!$(event.target).closest('.modalDialog__wrapper').length
        && !$(event.target).hasClass('info__video-link')){
        $(".modalDialog").removeClass('show');
        $('body').removeClass('ov-hid');
    }
});

/*При клике play открывается соответствующее видео в модальном окне*/

$(function() {
    var videoSrc = '';
    $(".info").on('click', '.info__video-link', function() {
        videoSrc = 'https://www.youtube.com/embed/' + $(this).data('src') + "?autoplay=1";
        $('.videoModal__video').attr('src', videoSrc);
    });
    $('.close, .modalDialog').click(function(){
        videoSrc = '';
        $('.videoModal__video').attr('src', videoSrc);
    });
});

/*Услуги - переключение табов*/

$(document).ready(function() {
    $(function() {
        $(".services__wrapper").each(function(indx, el) {
            var li = $("nav .services__division", el),
            box = $(".services__list", el),
            arrow = $(".services__arrow", el),
            serviceTitle = $("#serviceTitle"),
            len = li.length - 1,
            i = 0;
            $(el).on("click", ".services__division", function() {
                i = li.index(this);
                li.removeClass("current").eq(i).addClass("current");
                box.removeClass("visible").eq(i).addClass("visible");
                serviceTitle.text(li.eq(i).text());
            });
            $(el).on("click", ".services__arrow", function(event) {
                event.preventDefault();
                i += $(this).is(".services__prev") ? -1 : 1;
                i < 0 && (i = len);
                i > len && (i = 0);
                li.eq(i).click()
            })
        })
    });
});
