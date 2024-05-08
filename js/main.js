$(function () {
    $("#loadCards").on("click", function () {
        $(".fourthCards li").each(function () {
            $(this).show()
        })
        $(".viewMore").hide()
    })
})