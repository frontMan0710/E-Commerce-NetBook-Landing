$(function () {
    $(".tabContent").not(":first").hide()
    $(".thirdTabs .tab").on("click", function () {
        $(".thirdTabs .tab").removeClass("active").eq($(this).index()).addClass("active")
        $(".tabContent").hide().eq($(this).index()).fadeIn()
    })
})