$(function () {
    $("#burgerIcon").on("click", function () {
        $(this).toggleClass("active")
        if ($(window).width() < 1024) {
            $("#menuContent").toggleClass("active")
        }
        if ($(window).width() < 768) {
            $("body").toggleClass("lock")
        }
    })
    $headerHeight = $("header").height()
    if($(window).width() < 1024) {
        $("#menuContent").css({"top":$headerHeight + "px"})
    }
})