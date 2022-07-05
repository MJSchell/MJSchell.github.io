$(window).scroll(function() {
    if ($(this).scrollTop() >= 600) {
        $('#header').css("background-color","#3a3838");    
    } else {
        $('#header').css("background-color","transparent");
    }
});