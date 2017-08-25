/**
 * Created by Developer on 13.06.2017.
 */
$(window).ready(function() {

    var carusel_click=0;

    $(".wrap_carusel").click(function () {
      if(carusel_click<3){
          $(this).animate({left: "-=1200px"},500);
          carusel_click+=1;
          console.log(carusel_click)
      }
      else
      {
          carusel_click=0;
          $(this).animate({left: "+=3600px"},500);
      }
    })



});
