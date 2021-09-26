

$(document).ready(function () {

    $("#nav_item1").mouseover(function () {
        $("#nav_item1").css("color", "red");
    });

    $("#nav_item2").mouseover(function () {
        $("#nav_item2").css("color", "red");
    });

    $("#sitemap").mouseover(function () {
        $("#sitemap").css("color", "red");
    });

    $("a").mouseout(function () {
        $("a").css("color", "blue");
    });


    $("#search").mouseover(function () {
        $("#search").css("background-color", "white");
    });
    $("#search").mouseout(function () {
        $("#search").css("background-color", "lightgray");
    });


    $("#home").mouseover(function () {
        $("#home").css("background-color", "white");
    });
    $("#home").mouseout(function () {
        $("#home").css("background-color", "lightgray");
    });

    $("#dropdown_item1").mouseover(function () {
        $("#dropdown_item1").css("color", "red");
    });
    $("#dropdown_item2").mouseover(function () {
        $("#dropdown_item2").css("color", "red");
    });
    $("#dropdown_item3").mouseover(function () {
        $("#dropdown_item3").css("color", "red");
    });

    $(".dropdown_items").mouseout(function () {
        $(".dropdown_items").css("color", "blue");
    });





    


});









