// document.querySelector(".btn").addEventListener("click", function() {
//     console.log("test");
// })

$(document).ready(function() {
    //1.text,html,value in jquery
    // $(".btn").click(function() {

    //     $(this).text("Changed")
    //     $(this).html("<b>Changed</b>")
    // })

    // $(".inputValue").val("Sagol");



    // 2.ClastList in jquery

    // $(".btn").click(function() {
    // $(this).removeClass("btn-primary")
    // console.log($(this).hasClass("btn-primary"))
    // $(this).removeClass("btn-primary").addClass("btn-success")
    // })

    // 3.Attribute in jquery

    // $(".btn").click(function() {
    // console.log($(this).attr("title"))

    // $(this).attr("title", "Ferid");

    // $(this).attr({
    //     "id": "Ferid",
    //     "title": "Reshad",
    //     "class": "Shirvan"
    // })
    // console.log($(this).attr("id"))
    // })

    //4.CSS in Jquery
    // $(".btn").click(function() {
    // $(".inputValue").css("margin-bottom", "50px")
    //     $(".inputValue").css({
    //         "margin-bottom": "50px",
    //         "background-color": "red"
    //     })
    // })

    // 5.Create Element in Jquery

    // $("#createLi").click(function() {
    //     var li = $("<li></li>");
    //     li.text("test");
    //     li.addClass("list-group-item");
    // $(".ul").append(li);
    // $(".ul").prepend(li)
    //     $(".ul").before(li)

    // })

    // 6.Navigation in Jquery
    // $("#createLi").click(function() {
    // console.log($(".ul").parentsUntil("body"))
    // console.log($(".ul .ilkin").nextUntil(".shirvan"))

    // $(".ul").remove()
    // $(".ul").empty();

    // })

    // 7.Animation
    $("#createLi").click(function() {
        $(".ul").css("color", "red")
            .slideUp(2000)
            .slideDown(2000);;
    })
})