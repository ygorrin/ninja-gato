$('img').click(function () {

    if ($(this).attr("src") == "img/ninja0.png") {
        $(this).attr("src", "img/cat0.png");
    } else {
        if ($(this).attr("src") == "img/cat0.png") {
            $(this).attr("src", "img/ninja0.png");
        }
    }
    if ($(this).attr("src") == "img/ninja1.png") {
        $(this).attr("src", "img/cat1.png");
    } else {
        if ($(this).attr("src") == "img/cat1.png") {
            $(this).attr("src", "img/ninja1.png");
        }
    }
    if ($(this).attr("src") == "img/ninja2.png") {
        $(this).attr("src", "img/cat2.png");
    } else {
        if ($(this).attr("src") == "img/cat2.png") {
            $(this).attr("src", "img/ninja2.png");
        }
    }
    if ($(this).attr("src") == "img/ninja3.png") {
        $(this).attr("src", "img/cat3.png");
    } else {

        if ($(this).attr("src") == "img/cat3.png") {
            $(this).attr("src", "img/ninja3.png");
        }
    }
    if ($(this).attr("src") == "img/ninja4.png") {
        $(this).attr("src", "img/cat4.png");
    } else {
        if ($(this).attr("src") == "img/cat4.png") {
            $(this).attr("src", "img/ninja4.png");
        }
    }
});

