$(function () {
    if($(window).width() < 1024) {
        $("ul.collapsible").hide()
        $(".h3Collapsible").on("click", function () {
            $(this).siblings("ul.collapsible").slideToggle(200)
            $(this).toggleClass("active")
        })
    }
})