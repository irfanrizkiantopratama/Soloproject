/* How to Use Jqeury */

$(function(){
    
    $('h1').hide(500).show(500); 

    $('#main').css({
        color: 'red',
        fontSize: 25
    });


    $('h1').click(function() {

        $('.content').css({
            color: 'blue',
            fontSize: 50
        });

    });
    
});


$(window).on("load", function(){
   alert.("windows is loaded."); 
});