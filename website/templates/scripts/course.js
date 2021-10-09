function filterContent(){
    var x = document.getElementById("search").value.toLowerCase();
    var video_list = $('#video_container div')

    var is_course_find = false;
    Array.from(video_list).forEach(video_div => {
        var video_title = video_div.getElementsByTagName('p')[0].textContent.toLowerCase();
    
        if(video_title.includes(x)){
            video_div.style.display = "inline";
            is_course_find = true
        } else{
            video_div.style.display = "none";
        }
    });

    if (is_course_find == false){
        alert("There is no course with the topic \"" + x + "\". Check your spelling!")
    }



};


$(document).ready(function () {



    $('a').mouseover(
        function(){
            $(this).css('color', 'red');
        }
    );
    $("a").mouseout(function () {
        $(this).css("color", "blue");
    });
    
    $('p').mouseover(
        function(){
            $(this).css('font-weight', 'bold');
        }
    );
    $("p").mouseout(function () {
        $(this).css('font-weight', 'normal');
    });
    

    // $("#nav_item1").mouseover(function () {
    //     $("#nav_item1").css("color", "red");
    // });

    // $("#nav_item2").mouseover(function () {
    //     $("#nav_item2").css("color", "red");
    // });

    // $("#sitemap").mouseover(function () {
    //     $("#sitemap").css("color", "red");
    // });

    // $("a").mouseout(function () {
    //     $("a").css("color", "blue");
    // });


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

    // $("#dropdown_item1").mouseover(function () {
    //     $("#dropdown_item1").css("color", "red");
    // });
    // $("#dropdown_item2").mouseover(function () {
    //     $("#dropdown_item2").css("color", "red");
    // });
    // $("#dropdown_item3").mouseover(function () {
    //     $("#dropdown_item3").css("color", "red");
    // });

    // $(".dropdown_items").mouseout(function () {
    //     $(".dropdown_items").css("color", "blue");
    // });
    


});









