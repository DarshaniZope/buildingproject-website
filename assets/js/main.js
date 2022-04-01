//js for amentites slider
$(document).ready(function() {
    $(function() {
        $('.tabs nav a').on('click', function() {
            show_content($(this).index());
        });

        show_content(0);

        function show_content(index) {
            $('.tabs .content.visible').removeClass('visible');
            $('.tabs .content:nth-of-type(' + (index + 1) + ')').addClass('visible');


            $('.tabs nav a.selected').removeClass('selected');
            $('.tabs nav a:nth-of-type(' + (index + 1) + ')').addClass('selected');

        }
    });

    $('.next-tab').click(function() {
        var currentTab = $("a.selected");

        var newTab = currentTab.next();

        if (newTab.length === 0) {
            newTab = $(".tab").first();
        }
        currentTab.removeClass('selected');
        newTab.addClass('selected');

        var currentContent = $("div.visible");
        var newContent = currentContent.next();
        if (newContent.length === 0) {
            newContent = $(".content").first();
        }
        currentContent.removeClass('visible');
        newContent.addClass('visible');


    });

    $('.prev-tab').click(function() {
        var currentTab = $("a.selected");
        var newTab = currentTab.prev();
        if (newTab.length === 0) {
            newTab = $(".tab").last();
        }
        currentTab.removeClass('selected');
        newTab.addClass('selected');

        var currentContent = $("div.visible");
        var newContent = currentContent.prev();
        if (newContent.length === 0) {
            newContent = $(".content").last();
        }
        currentContent.removeClass('visible');
        newContent.addClass('visible');

    });
    var tabNo;
    tabNo = $(" nav a.selected").attr('data-index');
    // console.log(tabNo);
    // $(function() {
    var totalTab;
    totalTab = $('.tabs nav a').length;
    document.getElementById("pagination").innerHTML = tabNo + "/" + totalTab;
    // second slider


    $('ul.tabkey li').click(function() {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabkey li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })
    $('.pre-tab').click(function() {
        var currentTab = $(".tab-link.current");
        var newTab = currentTab.prev();
        if (newTab.length === 0) {
            newTab = $(".tab-link").last();
        }
        currentTab.removeClass('current');
        newTab.addClass('current');

        var currentContent = $(".tab-content.current");
        var newContent = currentContent.prev();
        if (newContent.length === 0) {
            newContent = $(".tab-content").last();
        }
        currentContent.removeClass('current');
        newContent.addClass('current');
    });
    $('.nex-tab').click(function() {
        var currentTab = $(".tab-link.current");

        var newTab = currentTab.next();

        if (newTab.length === 0) {
            newTab = $(".tab-link").first();
        }
        currentTab.removeClass('current');
        newTab.addClass('current');

        var currentContent = $(".tab-content.current");
        var newContent = currentContent.next();
        if (newContent.length === 0) {
            newContent = $(".tab-content").first();
        }
        currentContent.removeClass('current');
        newContent.addClass('current');
    });

    var owl = $(".owl-carousel");
    owl.owlCarousel({
        loop: true,
        center: true, // setting center true
        nav: false,
        touchDrag: false,
        mouseDrag: false,
        slideSpeed: 10000,
        smartSpeed: 1000,

        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 7,



            }
        }
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel();
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })
    $('.customPrevBtn').click(function() {
        owl.trigger('prev.owl.carousel');
    })




    $('.customPrevBtn').click(function() {

        var className = $('.center .item').attr('class');

        console.log(className);
        changeSlide(className);

    });

    $('.customNextBtn').click(function() {

        var className = $('.center .item').attr('class');
        // $("#three").css('border', "yellow", "important");
        console.log(className);
        changeSlide(className);
        // var id = $(this).attr('cl');
        // console.log(id);.
        $(".item key3").nextAll().css("border", "yellow");

    });

});

function changeSlide(className) {
    if (className == 'item key1') {
        var bi1 = $('.key1').css("background-image");
        var key1Bg = bi1.split(/"/)[1];
        console.log(key1Bg);
        $('.location-bg').css('background-image', 'url(' + key1Bg + ')');
    }
    if (className == 'item key2') {

        var bi2 = $('.key2').css("background-image");
        var key2Bg = bi2.split(/"/)[1];
        console.log(key2Bg);
        $('.location-bg').css('background-image', 'url(' + key2Bg + ')');
        console.log('hi12');

    }
    if (className == 'item key3') {
        var bi3 = $('.key3').css("background-image");
        var key3Bg = bi3.split(/"/)[1];
        console.log(key3Bg);
        $('.location-bg').css('background-image', 'url(' + key3Bg + ')');
    }
    if (className == 'item key4') {
        var bi4 = $('.key4').css("background-image");
        var key4Bg = bi4.split(/"/)[1];
        console.log(key4Bg);
        $('.location-bg').css('background-image', 'url(' + key4Bg + ')');
    }
    if (className == 'item key5') {
        var bi5 = $('.key5').css("background-image");
        var key5Bg = bi5.split(/"/)[1];
        console.log(key5Bg);
        $('.location-bg').css('background-image', 'url(' + key5Bg + ')');
    }
    if (className == 'item key6') {

        var bi6 = $('.key6').css("background-image");
        var key6Bg = bi6.split(/"/)[1];
        console.log(key6Bg);
        $('.location-bg').css('background-image', 'url(' + key6Bg + ')');

    }
}