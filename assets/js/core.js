
$({property: 0}).animate({property: 105}, {
    duration: 4000,
    step: function() {
        var _percent = Math.round(this.property);
        $('#progress').css('width',  _percent+"%");
        if(_percent == 105) {
            $("#progress").addClass("done");
        }
    },
    complete: function() {
       
        $('.wrapper').css('visibility','visible').fadeIn(300);
        $('.loader-div').fadeOut(300);
        $('body').css('position','relative');
        $('html').css('position','relative');
    }
});
jQuery(window).load(function () {
    $('.wrapper').css('visibility','visible');
    $('.loader-div').fadeOut(300);
    $('body').css('position','relative');
    $('html').css('position','relative');
});




$(".expand-about").click(function () {
    $(".about-page-content-2").css ("display","inline-block");
    $(".about-page-content-3").css ("display","inline-block");
});


$(function() {

  // Scroll smoothly
  $('[data-smooth-scroll]').on('click', function(e) {
    var targetEl = $($(this).attr('href'))

    // Make sure the target is on this page
    if (targetEl.length < 1) return

    $('body, html').animate({scrollTop: targetEl.offset().top}, 800)

    e.preventDefault()
  })

})


jQuery(function($)  
{
    $("#contact_form").submit(function()
    {
        var email = $("#email").val(); // get email field value
        var name = $("#name").val(); // get name field value
        var msg = $("#msg").val(); // get message field value
        $.ajax(
        {
            type: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: {
                'key': 'sVRLFidC1A7K56TuUkyUQg',
                'message': {
                    'from_email': email,
                    'from_name': name,
                    'headers': {
                        'Reply-To': email
                    },
                    'subject': 'Website Contact Form Submission',
                    'text': msg,
                    'to': [
                    {
                        'email': 'riyadh@bscheme.com',
                        'name': 'Riyadh Al Nur',
                        'type': 'to'
                    }]
                }
            }
        })
        .done(function(response) {
            alert('Your message has been sent. Thank you!'); // show success message
            $("#name").val(''); // reset field after successful submission
            $("#email").val(''); // reset field after successful submission
            $("#msg").val(''); // reset field after successful submission
        })
        .fail(function(response) {
            alert('Error sending message.');
        });
        return false; // prevent page refresh
    });
});


// mobile menu
$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
   
  });


$(function() {

  // Scroll smoothly
  $('[data-smooth-scroll]').on('click', function(e) {
    var targetEl = $($(this).attr('href'))

    // Make sure the target is on this page
    if (targetEl.length < 1) return

    $('body, html').animate({scrollTop: targetEl.offset().top}, 800)

    e.preventDefault()
  })

})
$(document).ready(function() {
 $(".hidden-nav").css('transform','translateY(-150px)');
    var topOfOthDiv = $("#mydiv").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) { 
            $(".hidden-nav").css('-webkit-transform','translateY(30px)');
            $(".hidden-nav").css('-moz-transform','translateY(30px)'); 
            $(".hidden-nav").css('-o-transform','translateY(30px)'); 
            $(".hidden-nav").css('-ms-transform','translateY(30px)'); 
            $(".hidden-nav").css('transform','translateY(30px)'); 

            $("header").css('-webkit-transform','translateY(-130px)');
            $("header").css('-moz-transform','translateY(-130px)');
            $("header").css('-o-transform','translateY(-130px)');
            $("header").css('-ms-transform','translateY(-130px)');
            $("header").css('transform','translateY(-130px)');           
        }
        else{
            
            $(".hidden-nav").css('-webkit-transform','translateY(-130px)');
            $(".hidden-nav").css('-moz-transform','translateY(-130px)');
            $(".hidden-nav").css('-o-transform','translateY(-130px)');
            $(".hidden-nav").css('-ms-transform','translateY(-130px)');
            $(".hidden-nav").css('transform','translateY(-130px)');

            $("header").css('-webkit-transform','translateY(0px)');
            $("header").css('-moz-transform','translateY(0px)');
            $("header").css('-o-transform','translateY(0px)');
            $("header").css('-ms-transform','translateY(0px)');
            $("header").css('transform','translateY(0px)');
        }
        
    });
});
$(document).ready(function(){
  
  //Hiding Labels Initially
  $('form li').each(function(){
    $(this).addClass('js-hide-label');
  });
  
  //Now adding and removing classes on Events - keyup,blur,focus
  $('form li').find('input,textarea').on('keyup blur focus',function(e) {
    
      var $this = $(this),
          $parent = $this.parent();
      
      if(e.type=='keyup') {
          if($this.val()==''){
            $parent.addClass('js-hide-label');
          }
          else{
            $parent.removeClass('js-hide-label') ;
          }
      }
    else if(e.type=='blur'){
      if($this.val()==''){
        $parent.addClass('js-hide-label');
      }
      else{
        $parent.removeClass('js-hide-label , js-highlight-label').addClass('js-unhighlight-label');
      }
    }
    
      else if(e.type=='focus'){
        
        if($this.val()==''){
          $parent.addClass('js-hide-label');
        }
        else{
        $parent.addClass('js-highlight-label');
        }
        
      }
    
  });
  
});