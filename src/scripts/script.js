$(function() {

/*----------------------------------------------------------------------------------
    | BACKUPS
----------------------------------------------------------------------------------*/
//Opera Mini backup
    var isOperaMini = (navigator.userAgent.indexOf('Opera Mini') > -1);
    if (isOperaMini)
    { 
        $('#operamini').show(); 
    }

 
/*----------------------------------------------------------------------------------
    | SMOOTH SCROLL
----------------------------------------------------------------------------------*/    
    $('a[href*=#]:not([href=#])').click(function()
    {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname)
        {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length)
            {
                
                if(!( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) || $(window).innerWidth() >= 768)
                {
                    $('html,body').animate({
                    scrollTop: target.offset().top - 100}, 1000);
                }else{
                    $('html,body').animate({
                    scrollTop: target.offset().top - 180}, 1000);
                }
            
                return false;
            }
        }
    });

    $('.sec-button').css('width', $('.main-button').css('width'));

});