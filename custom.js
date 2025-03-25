document.addEventListener('touchmove', function (event) {
  if (event.scale !== 1) { event.preventDefault(); }
}, false);

$(document).ready(function() {
  AjaxForm.Message.success = function() {
    return false;
  };

  $('.wrapper-other-prod .wrapper-other-prod-title').matchHeight({
      byRow: true,
      property: 'height',
      target: null,
      remove: false
  });


  $("#callback-form #names").on('keyup keypress blur change paste', function(e) {
    let input =  $(this).closest('form').find('#count');
    input.val( Number(input.val()) + 1 );

    if (  Number(input.val()) > 1) {
      $(this).closest('form').find('[type="submit"]').attr('disabled', false);
     } else {
      $(this).closest('form').find('[type="submit"]').attr('disabled', true);
     }
   });
   $("#callback-form").on( "submit", function (e) {
    let input =  $(this).find('#count');
    if ( input.val() < 1)
    {
      return false;
    }
   });
   $("#consult-form").on( "submit", function (e) {
    let input =  $(this).find('#count');
    if ( input.val() < 1)
    {
      return false;
    }
   });

  $("#consult-form #names").on( "keyup keypress blur change paste", function (e) {
    let input =  $(this).closest('form').find('#count');
    input.val( Number(input.val()) + 1 );

    if (  Number(input.val()) > 1) {
      $(this).closest('form').find('[type="submit"]').attr('disabled', false);
     } else {
      $(this).closest('form').find('[type="submit"]').attr('disabled', true);
     }

   });

  $(".color-range li").on( "click", function (e){
  color = e.currentTarget.id;
  alias = $(".right-wrapper-single-prod").data("alias");
    $(".right-wrapper-single-prod").css("background-image", "url('/assets/img/"+alias+"/"+color+".png')");
  });
});
$(document).on('af_complete', function(event, response) {
  var form = response.form;
  if (response.success) {
    AjaxForm.Message.success = function() {
      return false;
    };
  
    $('.nav-btn').removeClass('active');
    $('.overlay').addClass('active');
    $('body').removeClass('fix').addClass('modal');
    $('.popup').removeClass('active');
    $('.popup-action2').addClass('active');
  }
});
