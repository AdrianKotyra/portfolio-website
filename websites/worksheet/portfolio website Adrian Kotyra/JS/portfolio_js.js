
var arrow_left = document.getElementById("slider_arrow1")
var arrow_right = document.getElementById("slider_arrow2")
var slider_container = document.getElementById("img_container")
var text_slider = document.getElementById("text_scroll")



var gray_img1 = document.getElementById("img1_gray")
var gray_img2 = document.getElementById("img2_gray")
var gray_img3 = document.getElementById("img3_gray")
var gray_img4 = document.getElementById("img4_gray")
var gray_img5 = document.getElementById("img5_gray")


var gray_container = document.getElementById("container_gray")
var button1_gray_slider = document.getElementById("window_settings_text_2")
var button2_gray_slider = document.getElementById("window_settings_text_3")
var button3_gray_slider = document.getElementById("window_settings_text_4")
var button4_gray_slider = document.getElementById("window_settings_text_5")





var head3 = document.getElementById("check_scroll_img")
var head4 = document.getElementById("head_white4")
var head5 = document.getElementById("head_white5")
var head6 = document.getElementById("check_scroll_img2")
var head7 = document.getElementById("head_white7")
var head8 = document.getElementById("check_scroll_img3")
var head9 = document.getElementById("head_white9")
var imgwhite = document.getElementById("img_white")
var half2 = document.getElementById("white_half2")





nav = document.getElementById("navigation")


window.addEventListener('scroll', () =>{
const scrolled = window.scrollY;
if (window.scrollY>>0) {
  
  nav.style.backgroundColor="black", nav.style.animation="fadeEffect 0.7s forwards";
}
else if ((scrolled==0)) { 
  
  
  nav.style.backgroundColor="", nav.style.animation="fade_out_background 0.7s forwards"; 
}


})

window.addEventListener('scroll', () =>{
  var nav_mobile = document.getElementById("nav_mobile")
  const scrolled = window.scrollY;
  if (window.scrollY>>0) {
    mobile_get_started.style.animation="appear 1s forwards",
    mobile_get_started.style.display="block", 
    nav_mobile.style.backgroundColor="black", nav_mobile.style.animation="fadeEffect 0.7s forwards";
  }
  else if ((scrolled==0)) { 

    
    mobile_get_started.style.animation="fade_out 0.7s forwards", 
    nav_mobile.style.backgroundColor="", nav_mobile.style.animation="fade_out_background 0.7s forwards"; 
  }
  
  
})



function mobile_get_started_hide() {
  const scrolled = window.scrollY;
  if ((scrolled==0)) { 
    setTimeout(() => {
      mobile_get_started.style.display="none"

      
    }, 700);
    
    
    
  }



}
window.addEventListener('scroll',mobile_get_started_hide)
  


  
  


function change_inner_html_right_arrow (){

  var text1 = document.querySelector("#text_img1")
  var text2 = document.querySelector("#text_img2")
  var text3 = document.querySelector("#text_img3")
  var text4 = document.querySelector("#text_img4")
  var text5 = document.querySelector("#text_img5")
  var text6 = document.querySelector("#text_img6")
  var text7 = document.querySelector("#text_img7")
  var text8 = document.querySelector("#text_img8")
  var rect1 = text1.getBoundingClientRect();
  var rect2 = text2.getBoundingClientRect();
  var rect3 = text3.getBoundingClientRect();
  var rect4 = text4.getBoundingClientRect();
  var rect5 = text5.getBoundingClientRect();
  var rect6 = text6.getBoundingClientRect();
  var rect7 = text7.getBoundingClientRect();
  var rect8 = text8.getBoundingClientRect();


  setTimeout(() => {
    if (document.querySelector("#number_to_change").innerHTML==01 &&
    rect1.top >= 0 &&
    rect1.left >= 0 &&
    rect1.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect1.right <= (window.innerWidth || document.documentElement.clientWidth)) {
    document.querySelector("#number_to_change").innerHTML="02"; }
    else
    if (document.querySelector("#number_to_change").innerHTML==02 &&
    rect2.top >= 0 &&
    rect2.left >= 0 &&
    rect2.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect2.right <= (window.innerWidth || document.documentElement.clientWidth)) {
      document.querySelector("#number_to_change").innerHTML="03";
      
    }
    else
    if (document.querySelector("#number_to_change").innerHTML==03 &&
    rect3.top >= 0 &&
    rect3.left >= 0 &&
    rect3.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect3.right <= (window.innerWidth || document.documentElement.clientWidth)) {
      document.querySelector("#number_to_change").innerHTML="04";
      
    }
    else
    if (document.querySelector("#number_to_change").innerHTML==04 &&
    rect4.top >= 0 &&
    rect4.left >= 0 &&
    rect4.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect4.right <= (window.innerWidth || document.documentElement.clientWidth))  {
      document.querySelector("#number_to_change").innerHTML="05";
      
    }
    else
    if (document.querySelector("#number_to_change").innerHTML==05 &&
    rect5.top >= 0 &&
    rect5.left >= 0 &&
    rect5.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect5.right <= (window.innerWidth || document.documentElement.clientWidth)) {
      document.querySelector("#number_to_change").innerHTML="06";
      
    }

    else
    if (document.querySelector("#number_to_change").innerHTML==06 &&
    rect6.top >= 0 &&
    rect6.left >= 0 &&
    rect6.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect6.right <= (window.innerWidth || document.documentElement.clientWidth)) {
      document.querySelector("#number_to_change").innerHTML="07";
      
    }

    else
    if (document.querySelector("#number_to_change").innerHTML==07 &&
    rect7.top >= 0 &&
    rect7.left >= 0 &&
    rect7.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect7.right <= (window.innerWidth || document.documentElement.clientWidth)) {
      document.querySelector("#number_to_change").innerHTML="08";
      
    }
    else
    if (document.querySelector("#number_to_change").innerHTML==08 &&
    rect8.top >= 0 &&
    rect8.left >= 0 &&
    rect8.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect8.right <= (window.innerWidth || document.documentElement.clientWidth)) {
      document.querySelector("#number_to_change").innerHTML="01";
      
    }
    
    

    
    




  }, 500);
  
}



// -----------------------------------------------------------------------------------

function change_inner_html_left_arrow (){
  var text1 = document.querySelector("#text_img1")
  var text2 = document.querySelector("#text_img2")
  var text3 = document.querySelector("#text_img3")
  var text4 = document.querySelector("#text_img4")
  var text5 = document.querySelector("#text_img5")
  var text6 = document.querySelector("#text_img6")
  var text7 = document.querySelector("#text_img7")
  var text8 = document.querySelector("#text_img8")
  var rect1 = text1.getBoundingClientRect();
  var rect2 = text2.getBoundingClientRect();
  var rect3 = text3.getBoundingClientRect();
  var rect4 = text4.getBoundingClientRect();
  var rect5 = text5.getBoundingClientRect();
  var rect6 = text6.getBoundingClientRect();
  var rect7 = text7.getBoundingClientRect();
  var rect8 = text8.getBoundingClientRect();
  setTimeout(() => {
    if (document.querySelector("#number_to_change").innerHTML==08 &&
    rect8.top >= 0 &&
    rect8.left >= 0 &&
    rect8.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect8.right <= (window.innerWidth || document.documentElement.clientWidth)) {
    document.querySelector("#number_to_change").innerHTML="07"; }
    else
    if (document.querySelector("#number_to_change").innerHTML==07 &&
    rect7.top >= 0 &&
    rect7.left >= 0 &&
    rect7.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect7.right <= (window.innerWidth || document.documentElement.clientWidth)) {
      document.querySelector("#number_to_change").innerHTML="06";
      
    }
    else
    if (document.querySelector("#number_to_change").innerHTML==06 &&
    rect6.top >= 0 &&
    rect6.left >= 0 &&
    rect6.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect6.right <= (window.innerWidth || document.documentElement.clientWidth)) {
      document.querySelector("#number_to_change").innerHTML="05";
      
    }
    else
    if (document.querySelector("#number_to_change").innerHTML==05 &&
    rect5.top >= 0 &&
    rect5.left >= 0 &&
    rect5.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect5.right <= (window.innerWidth || document.documentElement.clientWidth)) {
      document.querySelector("#number_to_change").innerHTML="04";
      
    }
    else
    if (document.querySelector("#number_to_change").innerHTML==04 &&
    rect4.top >= 0 &&
    rect4.left >= 0 &&
    rect4.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect4.right <= (window.innerWidth || document.documentElement.clientWidth)) {
      document.querySelector("#number_to_change").innerHTML="03";
      
    }

    else
    if (document.querySelector("#number_to_change").innerHTML==03 &&
    rect3.top >= 0 &&
    rect3.left >= 0 &&
    rect3.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect3.right <= (window.innerWidth || document.documentElement.clientWidth)) {
      document.querySelector("#number_to_change").innerHTML="02";
      
    }

    else
    if (document.querySelector("#number_to_change").innerHTML==02 &&
    rect2.top >= 0 &&
    rect2.left >= 0 &&
    rect2.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect2.right <= (window.innerWidth || document.documentElement.clientWidth)) {
      document.querySelector("#number_to_change").innerHTML="01";
      
    }
    else
    if (document.querySelector("#number_to_change").innerHTML==01 &&
    rect1.top >= 0 &&
    rect1.left >= 0 &&
    rect1.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect1.right <= (window.innerWidth || document.documentElement.clientWidth)) {
      document.querySelector("#number_to_change").innerHTML="08";
      
    }
    
    

    
    




  }, 500);
  
}









// This is scroll function

function scroll_pictures_right() {
  var img1slider = document.querySelector('#img1_text1')
  var img2slider = document.querySelector('#img1_text2')
  var img3slider = document.querySelector('#img1_text3')
  var img4slider = document.querySelector('#img1_text4')
  var img5slider = document.querySelector('#img1_text5')
  var img6slider = document.querySelector('#img1_text6')
  var img7slider = document.querySelector('#img1_text7')
  var img8slider = document.querySelector('#img1_text8')





  var rect1 = img1slider.getBoundingClientRect()
  var rect = img2slider.getBoundingClientRect()
  var rect2 = img3slider.getBoundingClientRect()
  var rect3 = img4slider.getBoundingClientRect()
  var rect4 = img5slider.getBoundingClientRect()
  var rect5 = img6slider.getBoundingClientRect()
  var rect6 = img7slider.getBoundingClientRect()
  var rect7 = img8slider.getBoundingClientRect()
  
  
  if (
    rect1.top >= 0 &&
    rect1.left >= 0 &&
    rect1.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect1.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
  {

    document.querySelector("#number_to_change").style.animation="number_animation_appear 1s forwards"
    
    document.querySelector('#img2').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

  
   
  
  }



 

  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
  {

    document.querySelector("#number_to_change").style.animation="number_animation_appear 1s forwards"
    
    document.querySelector('#img3').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

  
   
  
  }
  if (
    rect2.top >= 0 &&
    rect2.left >= 0 &&
    rect2.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect2.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
  {
    document.querySelector("#number_to_change").style.animation="number_animation 1s forwards"
  document.querySelector('#img4').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  
  }

  if (
    rect3.top >= 0 &&
    rect3.left >= 0 &&
    rect3.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect3.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
  {
    document.querySelector("#number_to_change").style.animation="number_animation_appear 1s forwards"
  document.querySelector('#img5').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  
  }

  if (
    rect4.top >= 0 &&
    rect4.left >= 0 &&
    rect4.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect4.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
  {
    document.querySelector("#number_to_change").style.animation="number_animation 1s forwards"
  document.querySelector('#img6').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  
  }

  
  if (
    rect5.top >= 0 &&
    rect5.left >= 0 &&
    rect5.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect5.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
  {
    document.querySelector("#number_to_change").style.animation="number_animation_appear 1s forwards"
  document.querySelector('#img7').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  
  }

  if (
    rect6.top >= 0 &&
    rect6.left >= 0 &&
    rect6.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect6.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
  {
    document.querySelector("#number_to_change").style.animation="number_animation 1s forwards"
  document.querySelector('#img8').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
 
  }

  if (
    rect7.top >= 0 &&
    rect7.left >= 0 &&
    rect7.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect7.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
  {
    document.querySelector("#number_to_change").style.animation="number_animation_appear 1s forwards"
  document.querySelector('#img1').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

  }





};









var checkpoint_slider = document.getElementById("checkpoint_slider")
  var rect = checkpoint_slider.getBoundingClientRect()
  
  
  

  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) 
  {
    slider_container.style.display="flex"
}
  
  
 



  



function scroll_pictures_left() {
  var img1slider = document.querySelector('#img1_text1')
  var img2slider = document.querySelector('#img1_text2')
  var img3slider = document.querySelector('#img1_text3')
  var img4slider = document.querySelector('#img1_text4')
  var img5slider = document.querySelector('#img1_text5')
  var img6slider = document.querySelector('#img1_text6')
  var img7slider = document.querySelector('#img1_text7')
  var img8slider = document.querySelector('#img1_text8')
  var rect  = img1slider.getBoundingClientRect()
  var rect1 = img2slider.getBoundingClientRect()
  var rect2 = img3slider.getBoundingClientRect()
  var rect3 = img4slider.getBoundingClientRect()
  var rect4 = img5slider.getBoundingClientRect()
  var rect5 = img6slider.getBoundingClientRect()
  var rect6 = img7slider.getBoundingClientRect()
  var rect7 = img8slider.getBoundingClientRect()
  
  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
  {



  document.querySelector("#number_to_change").style.animation="number_animation_appear 1s forwards"
  document.querySelector('#img8').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }
 

  if (
    rect7.top >= 0 &&
    rect7.left >= 0 &&
    rect7.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect7.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
  {
    document.querySelector("#number_to_change").style.animation="number_animation 1s forwards"
  document.querySelector('#img7').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

  }
  if (
    rect6.top >= 0 &&
    rect6.left >= 0 &&
    rect6.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect6.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
  {
    document.querySelector("#number_to_change").style.animation="number_animation_appear 1s forwards"
  document.querySelector('#img6').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

  }

  if (
    rect5.top >= 0 &&
    rect5.left >= 0 &&
    rect5.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect5.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
  {
    document.querySelector("#number_to_change").style.animation="number_animation 1s forwards"
  document.querySelector('#img5').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

  }

  if (
    rect4.top >= 0 &&
    rect4.left >= 0 &&
    rect4.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect4.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
  {
    document.querySelector("#number_to_change").style.animation="number_animation_appear 1s forwards"
  document.querySelector('#img4').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

  }

  
  if (
    rect3.top >= 0 &&
    rect3.left >= 0 &&
    rect3.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect3.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
  {
    document.querySelector("#number_to_change").style.animation="number_animation 1s forwards"
  document.querySelector('#img3').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

  }

  if (
    rect2.top >= 0 &&
    rect2.left >= 0 &&
    rect2.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect2.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
  {
    document.querySelector("#number_to_change").style.animation="number_animation_appear 1s forwards"
  document.querySelector('#img2').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  

  }

  if (
    rect1.top >= 0 &&
    rect1.left >= 0 &&
    rect1.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect1.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
  {
    document.querySelector("#number_to_change").style.animation="number_animation 1s forwards"
  document.querySelector('#img1').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  
  }





};




  
  
  
  


 
arrow_right.addEventListener("click", scroll_pictures_right)
arrow_right.addEventListener("click", change_inner_html_right_arrow)
arrow_right.addEventListener("click", change_squares_right_click)


arrow_left.addEventListener("click", scroll_pictures_left)
arrow_left.addEventListener("click", change_inner_html_left_arrow)
arrow_left.addEventListener("click", change_squares_left_click)







button1_gray_slider.addEventListener("click", () =>{
  gray_img1.style.display="inline-block", gray_img2.style.display="none", gray_img3.style.display="none", gray_img4.style.display="none", gray_img5.style.display="none",
  button1_gray_slider.style.backgroundColor = "rgb(197, 216, 216)", button2_gray_slider.style.backgroundColor = "", button3_gray_slider.style.backgroundColor = "" 
  button4_gray_slider.style.backgroundColor = ""
  

})

button2_gray_slider.addEventListener("click", () =>{
  gray_img1.style.display="none", gray_img2.style.display="inline-block", gray_img3.style.display="none", gray_img4.style.display="none", gray_img5.style.display="none",
  button2_gray_slider.style.backgroundColor = "rgb(197, 216, 216)", button1_gray_slider.style.backgroundColor = "", button3_gray_slider.style.backgroundColor = "" 
  button4_gray_slider.style.backgroundColor = ""
})
  

button3_gray_slider.addEventListener("click", () =>{
  gray_img1.style.display="none", gray_img2.style.display="none", gray_img3.style.display="inline-block", gray_img4.style.display="none", gray_img5.style.display="none",
  button3_gray_slider.style.backgroundColor = "rgb(197, 216, 216)", button1_gray_slider.style.backgroundColor = "", button2_gray_slider.style.backgroundColor = "" 
  button4_gray_slider.style.backgroundColor = ""
})
  

button4_gray_slider.addEventListener("click", () =>{
  gray_img1.style.display="none", gray_img2.style.display="none", gray_img3.style.display="none", gray_img4.style.display="inline-block", gray_img5.style.display="none",
  button4_gray_slider.style.backgroundColor = "rgb(197, 216, 216)", button1_gray_slider.style.backgroundColor = "", button2_gray_slider.style.backgroundColor = "" 
  button3_gray_slider.style.backgroundColor = ""
})
  












// magic scroll split screen parallex
function splitscroll() { 
  
  const controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    duration: '290%',
    triggerElement:'#wrapper_white',
    triggerHook:0
  })
  .setPin('#white_half1')
  .addTo(controller);


}
splitscroll()








  // document.getElementById("white_half1").innerHTML="<h1 id=\"head_white\">Lorem ipsum dolor</h1> <img id=\"img_white\" src=\"IMG/10.jpg\">"
  




// checking if element is visible on screen

// function isInViewport(head3) {
 
//   var rect = head3.getBoundingClientRect();

//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }






// checking if element is visible on screen








function change_img_on_scroll2() {
  
  var rect2 = head3.getBoundingClientRect();
  var rect3 = head6.getBoundingClientRect();
  var rect4 = head8.getBoundingClientRect();

  if (rect2.top >= 0 &&
    rect2.left >= 0 &&
    rect2.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect2.right <= (window.innerWidth || document.documentElement.clientWidth)
  )

  {
    

    document.querySelector("#img_white_hidden1").offsetWidth;

    document.querySelector("#img_white_hidden2").offsetWidth;
    

    document.querySelector("#img_white_hidden1").style.animation="show_up_effect_revert 1s forwards"
    document.querySelector("#img_white_hidden2").style.animation="show_up_effect_revert 1s forwards"

   
    
  
    document.querySelector("#img_white").style.animation="none"


    // document.getElementById("white_half1").innerHTML="<h1 id=\"head_white\">Lorem ipsum dolor</h1> <img id=\"img_white\" src=\"IMG/10.jpg\">"
    
    
    
    
  } 
 
  
  

 

  

  if (rect3.top >= 0 &&
    rect3.left >= 0 &&
    rect3.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect3.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
    

  { 

    
    document.querySelector("#img_white_hidden2").offsetWidth;
    document.querySelector("#img_white_hidden1").offsetWidth;
    document.querySelector("#img_white").offsetWidth;
    document.querySelector("#img_white").style.animation="show_up_effect_revert 1s forwards"

    
    document.querySelector("#img_white_hidden2").style.animation="show_up_effect_revert 1s forwards"
    
   
    document.querySelector("#img_white_hidden1").style.animation="none"
    
    
  }

  
    
    

    // document.getElementById("white_half1").innerHTML="<h1 id=\"head_white\">Lorem ipsum dolor</h1> <img id=\"img_white\" src=\"IMG/16.jpg\">"
    
  


 
  if (rect4.top >= 0 &&
    rect4.left >= 0 &&
    rect4.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect4.right <= (window.innerWidth || document.documentElement.clientWidth)
  )

  {
    
  
     document.querySelector("#img_white").offsetWidth;
    document.querySelector("#img_white_hidden2").offsetWidth;
    document.querySelector("#img_white_hidden1").offsetWidth;

    document.querySelector("#img_white_hidden1").style.animation="show_up_effect_revert 1s forwards"
    document.querySelector("#img_white").style.animation="show_up_effect_revert 1s forwards"
    document.querySelector("#img_white_hidden2").style.animation="none"

   
  }

    
      
    


    
    // document.getElementById("white_half1").innerHTML="<h1 id=\"head_white\">Lorem ipsum dolor</h1> <img id=\"img_white\" src=\"IMG/14.jpg\">"
    
}






  




function clear_img (){
  document.getElementById("white_half1").style.animation=""
}


document.addEventListener("scroll",change_img_on_scroll2)

// checking if element is visible on screen

var checkpoint1 = document.getElementById("checkpoint1")
var middle_content = document.getElementById("two_texts")
var text_middle5 = document.getElementById("text_middle5")
function appear_elements_animation() {

  
  var rect = checkpoint1.getBoundingClientRect();
  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
  ) 
   
  { setTimeout(() => {
    middle_content.style.display="flex",  middle_content.style.visibility="visible", middle_content.style.animation="appear 2s forwards"
    
  }, 500);
    
  }

  
  else {
    // middle_content.style.display="none"
  }
  
  

}

document.addEventListener("scroll", appear_elements_animation)
  



var text_gray_all = document.getElementById("text_gray_all")
var text_gray1 = document.getElementById("text_gray1")

var top_content = document.getElementById("top_content")
var checkpoint222 = document.getElementById("checkpoint2")

function appear_elements_animation2() {

  
  var rect111 = checkpoint222.getBoundingClientRect();
  
  if (
    rect111.top >= 0 &&
    rect111.left >= 0 &&
    rect111.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect111.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) 
  { setTimeout(() => {
    text_gray_all.style.visibility="visible"
    text_gray_all.style.animation="appear 2s forwards"
    
  }, 300);
    

  }
  else {
    
    
    
    // text_gray_all.style.display="none"
  }
}
 
document.addEventListener("scroll", appear_elements_animation2)

  
  
  
  



var checkpoint3 = document.getElementById("checkpoint3")


function appear_elements_animation3() {
  var rect = checkpoint3.getBoundingClientRect()
  var text_semi_black_both = document.getElementById("text_semi_black_both")
  

  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) 
  {
    setTimeout(() => {
      text_semi_black_both.style.display="inline-block", text_semi_black_both.style.visibility="visible", text_semi_black_both.style.animation="appear 2s forwards"
      
    }, 300);
    
  }
  else {
    
    
    
    // text_semi_black_both.style.display="none"
  }
}
  
document.addEventListener("scroll", appear_elements_animation3)



var checkpoint_bottom = document.getElementById("checkpoint_bottom")
var bottom_text = document.getElementById("bottom_text")


function appear_elements_animation4() {
  var rect = checkpoint_bottom.getBoundingClientRect()
  
  

  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) 
  { setTimeout(() => {
    bottom_text.style.visibility="visible", bottom_text.style.animation="appear 2s forwards"
    
  }, 300);
    
  }
  else {
    
    
    // bottom_text.style.display="none"
  }
}

document.addEventListener("scroll", appear_elements_animation4)


function appear_slider(){

  var checkpoint_slider = document.getElementById("checkpoint_slider")
  var rect = checkpoint_slider.getBoundingClientRect()
  
  
  

  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) 
  {
    slider_container.style.display="flex"
  }
  
}






function appear_elements_animation33() {
  var text_black_bottom_checkpoint = document.getElementById("text_black_bottom_checkpoint")
  var text_black_bottom = document.getElementById("text_black_bottom")
  var rect = text_black_bottom_checkpoint.getBoundingClientRect()
  
  

  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) 
  {
    text_black_bottom.style.display="table"
  }
  else {
    
    
    
    // text_black_bottom.style.display="none"
  }
}
  

document.addEventListener("scroll", appear_elements_animation33)




var wrapper_full_screen = document.getElementById("wrapper_full_screen")
var coli_text_and_img = document.getElementById("coli_text_and_img")
var coli_text_and_img2 = document.getElementById("coli_text_and_img2")
function display_full_screen(){
  
  
  

}

coli_text_and_img.addEventListener("click", display_full_screen )
coli_text_and_img2.addEventListener("click", display_full_screen )
document.querySelector("#container_mobile_element1").addEventListener("click", display_full_screen)
document.querySelector("#container_mobile_element1").addEventListener("click", display_full_screen)
























document.addEventListener("scroll", appear_slider)

var nav_arrow2 = document.getElementById("nav_arrow2")
var nav_arrow1 = document.getElementById("nav_arrow1")
var middle_nav1 = document.getElementById("middle_nav1")
var middle_nav3 = document.getElementById("middle_nav3")


function arrow_animation_nav3(){
  
 
  nav_arrow2.style.transform="rotateX(180deg)"
 



}
function arrow_animation_nav4(){
  
 
  nav_arrow2.style.transform="rotateX(0deg)"
 



}


function arrow_animation_nav(){
  
 
  nav_arrow1.style.transform="rotateX(180deg)"
 



}







var extra_navigation_display_onhover = document.getElementById("extra_navigation_display_onhover")
var container_4_col = document.getElementById("container_4_col")
function appear_extra_nav() {
  extra_navigation_display_onhover.style.animation="appear_extra_nav 0.5s forwards"
  extra_navigation_display_onhover.style.display="block"
  nav_arrow1.style.transform="rotateX(180deg)"
  extra_nav_2.style.display="none"




}



function hide_extra_nav() {

  setTimeout(function(){
  extra_navigation_display_onhover.style.display="none"
  nav_arrow1.style.transform="rotateX(0deg)"
  nav_arrow2.style.transform="rotateX(0deg)"
  }, 200)
  
  

}


function hide_extra_nav_animation() {
  
  extra_navigation_display_onhover.style.animation="fade_out_nav 0.5s forwards"
    
}

var navigation = document.getElementById("navigation")


middle_nav1.addEventListener("mouseover",appear_extra_nav )
container_4_col.addEventListener("mouseleave", hide_extra_nav )
container_4_col.addEventListener("mouseleave",hide_extra_nav_animation )


// middle_nav3.addEventListener("mouseover",appear_extra_nav2 )

var extra_nav2_container=document.getElementById("extra_nav2_container")

var extra_nav_2= document.getElementById("extra_nav_2")

function appear_extra_nav2() {
  
  extra_nav2_container.style.animation="appear_extra_nav 0.5s forwards, appear2 0.2s forwards"
  extra_nav_2.style.display="block"
  nav_arrow2.style.transform="rotateX(180deg)"
 
  extra_navigation_display_onhover.style.display="none"


}

function hide_extra_nav2_animation() {
  extra_nav2_container.style.animation="fade_out_nav 0.5s forwards"
}


function hide_extra_nav2() {

  setTimeout(function(){
    nav_arrow2.style.transform="rotateX(0deg)" 
    nav_arrow1.style.transform="rotateX(0deg)" 
    

  extra_nav_2.style.display="none"} ,200)
  
  
}

middle_nav3.addEventListener("mouseover",appear_extra_nav2)
extra_nav2_container.addEventListener("mouseleave", hide_extra_nav2)
extra_nav2_container.addEventListener("mouseleave", hide_extra_nav2_animation)




var extra_nav2_text12=document.getElementById("extra_nav2_text12")
var extra_nav2_text13=document.getElementById("extra_nav2_text13")
var extra_nav2_text14=document.getElementById("extra_nav2_text14")
var extra_nav2_text12=document.getElementById("extra_nav2_text12")
var extra_nav2_text12=document.getElementById("extra_nav2_text12")
var extra_nav2_text12=document.getElementById("extra_nav2_text12")
var extra_nav2_text_to_display=document.getElementById("extra_nav2_text_to_display")
var extra_nav2_img=document.getElementById("extra_nav2_img")
var slider_arrow_extra_nav1 = document.getElementById("slider_arrow_extra_nav1")
function extra_nav_2_change_imgs() {

  slider_arrow_extra_nav1.style.display="inline-block"
  extra_nav2_text_to_display.style.animation="appear3 0.5s forwards"
  extra_nav2_text_to_display.innerHTML="Simple Python projects I created during my learning progress with this language."
  extra_nav2_img.style.animation="appear3 0.5s forwards";
  extra_nav2_img.src="IMG/python_projects.jpg"


}


extra_nav2_text12.addEventListener("mouseout",yyy)
extra_nav2_text12.addEventListener("mouseover",extra_nav_2_change_imgs)


function extra_nav_2_change_imgs2() {
  slider_arrow_extra_nav2.style.display="inline-block"
  extra_nav2_text_to_display.style.animation="appear3 0.5s forwards"
  extra_nav2_text_to_display.innerHTML="Javascript projects I created during my learning progress with this language."
  extra_nav2_img.style.animation="appear3 0.5s forwards";
  extra_nav2_img.src="IMG/js_projects.jpg"


}
extra_nav2_text13.addEventListener("mouseout",yyy)
extra_nav2_text13.addEventListener("mouseover",extra_nav_2_change_imgs2)



function extra_nav_2_change_imgs3() {
  slider_arrow_extra_nav3.style.display="inline-block"
  extra_nav2_text_to_display.style.animation="appear3 0.5s forwards"
  extra_nav2_text_to_display.innerHTML="React.js projects and notes uploaded to github, while learning this language "
  extra_nav2_img.style.animation="appear3 0.5s forwards";
  extra_nav2_img.src="IMG/react_projects.jpg"


}

function default_img_change () {
  extra_nav2_img.src="IMG/pexels-kevin-ku-577585.jpg"
}
var text_extra_nav2 = document.getElementById("text_extra_nav2")
text_extra_nav2.addEventListener("mouseout",default_img_change)
extra_nav2_text14.addEventListener("mouseout",yyy)
extra_nav2_text14.addEventListener("mouseover",extra_nav_2_change_imgs3)








function yyy(){
  extra_nav2_img.style.animation=""
  extra_nav2_text_to_display.style.animation=""
  slider_arrow_extra_nav1.style.display="none"
  slider_arrow_extra_nav2.style.display="none"
  slider_arrow_extra_nav3.style.display="none"
  slider_arrow_extra_nav4.style.display="none"
  slider_arrow_extra_nav5.style.display="none"
}
function extra_nav_2_change_imgs4() {
  slider_arrow_extra_nav4.style.display="inline-block"
  extra_nav2_text_to_display.style.animation="appear3 0.5s forwards"
  extra_nav2_text_to_display.style.display="table";
  extra_nav2_text_to_display.innerHTML="Main website project created at the end of the web and design NPA lvl 5 course";
  extra_nav2_img.style.animation="appear3 0.5s forwards";
  extra_nav2_img.src="IMG/lochquarry.jpg"
  


}
extra_nav2_text15.addEventListener("mouseout",yyy)
extra_nav2_text15.addEventListener("mouseover",extra_nav_2_change_imgs4)





// --------------------------------------------------------------









function window_appear(){
  var window_settings = document.getElementById("window_settings")
  var window_checkpoint = document.getElementById("window_checkpoint")
  var rect = window_checkpoint.getBoundingClientRect()
  
  
  

  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) 
  {
    window_settings.style.display="inline-block"
  }
  
  
}




document.addEventListener("scroll", window_appear)


function close_window_fullscreen() {
  setTimeout(function(){
  document.querySelector("#wrapper_full_screen").style.animation="appear4 0.5s forwards"
  document.querySelector("#wrapper_full_screen").style.display="none"
  document.querySelector("#x_to_close_window").style.display="none"}, 500)

}

document.querySelector("#x_to_close_window").addEventListener("click", close_window_fullscreen )
document.querySelector("#x_to_close_window").addEventListener("click", fade_out_element )


function appear_window_fullscreen() {
  
  document.querySelector("#wrapper_full_screen").style.display="flex"
  document.querySelector("#x_to_close_window").style.display="flex"

  





}

function fade_out_element () {
  document.querySelector("#wrapper_full_screen").style.animation="fade_out 0.5s forwards"



}




document.querySelector("#coli_text_and_img").addEventListener("click", appear_window_fullscreen)
document.querySelector("#coli_text_and_img2").addEventListener("click", appear_window_fullscreen)

document.querySelector("#container_mobile_element1").addEventListener("click", appear_window_fullscreen)
document.querySelector("#container_mobile_element2").addEventListener("click", appear_window_fullscreen)





function open_mobile_open_nav() {
  document.querySelector("#nav_mobile_open").style.display="block"
  document.querySelector("body").style.overflowY="hidden"
  document.querySelector("#nav_mobile").style.visibility="hidden"
  document.querySelector("#nav_mobile_open").style.animation="nav_mobile_open_animation 0.7s forwards"
  

  
  

}
document.querySelector("#hamburger_mobile").addEventListener("click",open_mobile_open_nav )


function hide_open_mobile(){
  setTimeout(() => {document.querySelector("body").style.overflowY="visible"
  document.querySelector("#nav_mobile_open").style.display="none"
  document.querySelector("#nav_mobile").style.visibility="visible"
    
  }, 600);
  



}

document.querySelector("#cross_mobile_open").addEventListener("click",hide_open_mobile )


function hide_open_mobile_animation (){
  document.querySelector("#nav_mobile_open").style.animation="nav_mobile_open_animation_hide  0.7s forwards"

}

document.querySelector("#cross_mobile_open").addEventListener("click",hide_open_mobile_animation )


function change_squares_right_click() {

  var text1 = document.querySelector("#img1_text1")
  var text2 = document.querySelector("#img1_text2")
  var text3 = document.querySelector("#img1_text3")
  var text4 = document.querySelector("#img1_text4")
  var text5 = document.querySelector("#img1_text5")
  var text6 = document.querySelector("#img1_text6")
  var text7 = document.querySelector("#img1_text7")
  var text8 = document.querySelector("#img1_text8")

  var rect1 = text1.getBoundingClientRect();
  var rect2 = text2.getBoundingClientRect();
  var rect3 = text3.getBoundingClientRect();
  var rect4 = text4.getBoundingClientRect();
  var rect5 = text5.getBoundingClientRect();
  var rect6 = text6.getBoundingClientRect();
  var rect7 = text7.getBoundingClientRect();
  var rect8 = text8.getBoundingClientRect();
  setTimeout(() => {
    if (document.querySelector("#square1").src.match("IMG/icons/square_regular_full.svg") &&
    rect1.top >= 0 &&
    rect1.left >= 0 &&
    rect1.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect1.right <= (window.innerWidth || document.documentElement.clientWidth)) {

    document.querySelector("#square1").style.animation="show_up_effect 1s forwards"
    document.querySelector("#square1").src = "IMG/icons/square_regular_empty.svg"
    document.querySelector("#square2").src = "IMG/icons/square_regular_full.svg"

  }
  else
  if(document.querySelector("#square2").src.match("IMG/icons/square_regular_full.svg") &&
  rect2.top >= 0 &&
  rect2.left >= 0 &&
  rect2.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  rect2.right <= (window.innerWidth || document.documentElement.clientWidth)) {

    document.querySelector("#square1").style.animation="none"
    document.querySelector("#square2").style.animation="show_up_effect 1s forwards"
    document.querySelector("#square2").src = "IMG/icons/square_regular_empty.svg"
    document.querySelector("#square3").src = "IMG/icons/square_regular_full.svg"
  }
  else
  if(document.querySelector("#square3").src.match("IMG/icons/square_regular_full.svg") &&
  rect3.top >= 0 &&
  rect3.left >= 0 &&
  rect3.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  rect3.right <= (window.innerWidth || document.documentElement.clientWidth)) {
    document.querySelector("#square2").style.animation="none"
    document.querySelector("#square3").style.animation="show_up_effect 1s forwards"
    document.querySelector("#square3").src = "IMG/icons/square_regular_empty.svg"
    document.querySelector("#square4").src = "IMG/icons/square_regular_full.svg"
  }
  else
  if(document.querySelector("#square4").src.match("IMG/icons/square_regular_full.svg") &&
  rect4.top >= 0 &&
  rect4.left >= 0 &&
  rect4.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  rect4.right <= (window.innerWidth || document.documentElement.clientWidth)) {
    document.querySelector("#square3").style.animation="none"
    document.querySelector("#square4").style.animation="show_up_effect 1s forwards"
    document.querySelector("#square4").src = "IMG/icons/square_regular_empty.svg"
    document.querySelector("#square5").src = "IMG/icons/square_regular_full.svg"
  }
  else
  if(document.querySelector("#square5").src.match("IMG/icons/square_regular_full.svg") &&
  rect5.top >= 0 &&
  rect5.left >= 0 &&
  rect5.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  rect5.right <= (window.innerWidth || document.documentElement.clientWidth)) {
    document.querySelector("#square4").style.animation="none"
    document.querySelector("#square5").style.animation="show_up_effect 1s forwards"
    document.querySelector("#square5").src = "IMG/icons/square_regular_empty.svg"
    document.querySelector("#square6").src = "IMG/icons/square_regular_full.svg"
  }

  else
  if(document.querySelector("#square6").src.match("IMG/icons/square_regular_full.svg") &&
  rect6.top >= 0 &&
  rect6.left >= 0 &&
  rect6.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  rect6.right <= (window.innerWidth || document.documentElement.clientWidth)) {
    document.querySelector("#square5").style.animation="none"
    document.querySelector("#square6").style.animation="show_up_effect 1s forwards"
    document.querySelector("#square6").src = "IMG/icons/square_regular_empty.svg"
    document.querySelector("#square7").src = "IMG/icons/square_regular_full.svg"
  }

  else
  if(document.querySelector("#square7").src.match("IMG/icons/square_regular_full.svg")&&
  rect7.top >= 0 &&
  rect7.left >= 0 &&
  rect7.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  rect7.right <= (window.innerWidth || document.documentElement.clientWidth)) {
    document.querySelector("#square6").style.animation="none"
    document.querySelector("#square7").style.animation="show_up_effect 1s forwards"
    document.querySelector("#square7").src = "IMG/icons/square_regular_empty.svg"
    document.querySelector("#square8").src = "IMG/icons/square_regular_full.svg"
  }
  else
  if(document.querySelector("#square8").src.match("IMG/icons/square_regular_full.svg") &&
  rect8.top >= 0 &&
  rect8.left >= 0 &&
  rect8.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  rect8.right <= (window.innerWidth || document.documentElement.clientWidth)) {
    document.querySelector("#square7").style.animation="none"
    document.querySelector("#square8").style.animation="show_up_effect 1s forwards"
    document.querySelector("#square8").src = "IMG/icons/square_regular_empty.svg"
    document.querySelector("#square1").src = "IMG/icons/square_regular_full.svg"
  }


  
    
  }, 500); 
  


}
  
// -------------------------------------------------------------------------------------- 



function change_squares_left_click() {

  var text1 = document.querySelector("#img1_text1")
  var text2 = document.querySelector("#img1_text2")
  var text3 = document.querySelector("#img1_text3")
  var text4 = document.querySelector("#img1_text4")
  var text5 = document.querySelector("#img1_text5")
  var text6 = document.querySelector("#img1_text6")
  var text7 = document.querySelector("#img1_text7")
  var text8 = document.querySelector("#img1_text8")

  var rect1 = text1.getBoundingClientRect();
  var rect2 = text2.getBoundingClientRect();
  var rect3 = text3.getBoundingClientRect();
  var rect4 = text4.getBoundingClientRect();
  var rect5 = text5.getBoundingClientRect();
  var rect6 = text6.getBoundingClientRect();
  var rect7 = text7.getBoundingClientRect();
  var rect8 = text8.getBoundingClientRect();


  setTimeout(() => {

    if (document.querySelector("#square8").src.match("IMG/icons/square_regular_full.svg") &&
    rect8.top >= 0 &&
    rect8.left >= 0 &&
    rect8.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect8.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) {
    document.querySelector("#square8").style.animation="show_up_effect 1s forwards"
    document.querySelector("#square8").src = "IMG/icons/square_regular_empty.svg"
    document.querySelector("#square7").src = "IMG/icons/square_regular_full.svg"
  }
  else
  if(document.querySelector("#square7").src.match("IMG/icons/square_regular_full.svg") &&
  rect7.top >= 0 &&
  rect7.left >= 0 &&
  rect7.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  rect7.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) {
    document.querySelector("#square8").style.animation="none"
    document.querySelector("#square7").style.animation="show_up_effect 1s forwards"
    document.querySelector("#square7").src = "IMG/icons/square_regular_empty.svg"
    document.querySelector("#square6").src = "IMG/icons/square_regular_full.svg"
  }
  else
  if(document.querySelector("#square6").src.match("IMG/icons/square_regular_full.svg") &&
  rect6.top >= 0 &&
  rect6.left >= 0 &&
  rect6.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  rect6.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) {
    document.querySelector("#square7").style.animation="none"
    document.querySelector("#square6").style.animation="show_up_effect 1s forwards"
    document.querySelector("#square6").src = "IMG/icons/square_regular_empty.svg"
    document.querySelector("#square5").src = "IMG/icons/square_regular_full.svg"
  }
  else
  if(document.querySelector("#square5").src.match("IMG/icons/square_regular_full.svg") &&
  rect5.top >= 0 &&
  rect5.left >= 0 &&
  rect5.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  rect5.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) {
    document.querySelector("#square6").style.animation="none"
    document.querySelector("#square5").style.animation="show_up_effect 1s forwards"
    document.querySelector("#square5").src = "IMG/icons/square_regular_empty.svg"
    document.querySelector("#square4").src = "IMG/icons/square_regular_full.svg"
  }
  else
  if(document.querySelector("#square4").src.match("IMG/icons/square_regular_full.svg") &&
  rect4.top >= 0 &&
  rect4.left >= 0 &&
  rect4.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  rect4.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) {
    document.querySelector("#square5").style.animation="none"
    document.querySelector("#square4").style.animation="show_up_effect 1s forwards"
    document.querySelector("#square4").src = "IMG/icons/square_regular_empty.svg"
    document.querySelector("#square3").src = "IMG/icons/square_regular_full.svg"
  }

  else
  if(document.querySelector("#square3").src.match("IMG/icons/square_regular_full.svg")&&
  rect3.top >= 0 &&
  rect3.left >= 0 &&
  rect3.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  rect3.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) {
    document.querySelector("#square4").style.animation="none"
    document.querySelector("#square3").style.animation="show_up_effect 1s forwards"
    document.querySelector("#square3").src = "IMG/icons/square_regular_empty.svg"
    document.querySelector("#square2").src = "IMG/icons/square_regular_full.svg"
  }

  else
  if(document.querySelector("#square2").src.match("IMG/icons/square_regular_full.svg") &&
  rect2.top >= 0 &&
  rect2.left >= 0 &&
  rect2.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  rect2.right <= (window.innerWidth || document.documentElement.clientWidth)) {
    document.querySelector("#square3").style.animation="none"
    document.querySelector("#square2").style.animation="show_up_effect 1s forwards"
    document.querySelector("#square2").src = "IMG/icons/square_regular_empty.svg"
    document.querySelector("#square1").src = "IMG/icons/square_regular_full.svg"
  }

  else
  if(document.querySelector("#square1").src.match("IMG/icons/square_regular_full.svg") &&
  rect1.top >= 0 &&
  rect1.left >= 0 &&
  rect1.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  rect1.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) {
    document.querySelector("#square2").style.animation="none"
    document.querySelector("#square1").style.animation="show_up_effect 1s forwards"
    document.querySelector("#square1").src = "IMG/icons/square_regular_empty.svg"
    document.querySelector("#square8").src = "IMG/icons/square_regular_full.svg"
  }
  




  
    
  }, 500); 
  


}





function square1_to_image(){
  document.querySelector('#img1').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  document.querySelector("#square1").src = "IMG/icons/square_regular_full.svg"
  document.querySelector("#square2").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square3").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square4").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square5").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square6").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square7").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square8").src = "IMG/icons/square_regular_empty.svg"


}


document.querySelector("#square1").addEventListener("click",square1_to_image)




function square2_to_image(){

  document.querySelector('#img2').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  document.querySelector("#square1").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square2").src = "IMG/icons/square_regular_full.svg"
  document.querySelector("#square3").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square4").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square5").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square6").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square7").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square8").src = "IMG/icons/square_regular_empty.svg"

  
}

document.querySelector("#square2").addEventListener("click",square2_to_image)



function square3_to_image(){
  document.querySelector('#img3').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  document.querySelector("#square1").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square2").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square3").src = "IMG/icons/square_regular_full.svg"
  document.querySelector("#square4").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square5").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square6").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square7").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square8").src = "IMG/icons/square_regular_empty.svg"


  
}
document.querySelector("#square3").addEventListener("click",square3_to_image)
  
 
function square4_to_image(){
  document.querySelector('#img4').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  document.querySelector("#square1").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square2").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square3").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square4").src = "IMG/icons/square_regular_full.svg"
  document.querySelector("#square5").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square6").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square7").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square8").src = "IMG/icons/square_regular_empty.svg"


  
}
document.querySelector("#square4").addEventListener("click",square4_to_image)
  
 
function square5_to_image(){
  document.querySelector('#img5').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  document.querySelector("#square1").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square2").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square3").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square4").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square5").src = "IMG/icons/square_regular_full.svg"
  document.querySelector("#square6").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square7").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square8").src = "IMG/icons/square_regular_empty.svg"


  
}
document.querySelector("#square5").addEventListener("click",square5_to_image)
  
 
function square6_to_image(){
  document.querySelector('#img6').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  document.querySelector("#square1").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square2").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square3").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square4").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square5").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square6").src = "IMG/icons/square_regular_full.svg"
  document.querySelector("#square7").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square8").src = "IMG/icons/square_regular_empty.svg"


  
}
document.querySelector("#square6").addEventListener("click",square6_to_image)
  
 
function square7_to_image(){
  document.querySelector('#img7').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  document.querySelector("#square1").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square2").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square3").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square4").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square5").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square6").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square7").src = "IMG/icons/square_regular_full.svg"
  document.querySelector("#square8").src = "IMG/icons/square_regular_empty.svg"


  
}
document.querySelector("#square7").addEventListener("click",square7_to_image)
 
function square8_to_image(){
  document.querySelector('#img8').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  document.querySelector("#square1").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square2").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square3").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square4").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square5").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square6").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square7").src = "IMG/icons/square_regular_empty.svg"
  document.querySelector("#square8").src = "IMG/icons/square_regular_full.svg"


  
}

document.querySelector("#square8").addEventListener("click",square8_to_image)
  
 
  


function appear_hidden_content_open_menu(){
  if (document.querySelector("#hidden_content_nav_open").style.display=="none") {
    document.querySelector("#open_nav_arrow1").style.animation="arrowsYanimation1 0.4s forwards"
  document.querySelector("#hidden_content_nav_open").style.animation="appear_extra_nav_hidden 0.7s forwards",
  document.querySelector("#hidden_content_nav_open").style.display="flex"
  


  }

  else  {
  if (document.querySelector("#hidden_content_nav_open").style.display=="flex" ) {
    document.querySelector("#open_nav_arrow1").style.animation="arrowsYanimation2 0.4s forwards"
    document.querySelector("#hidden_content_nav_open").style.animation="appear_extra_nav_hidden2 0.7s forwards" 
  }
  
  
  
  setTimeout(() => { document.querySelector("#hidden_content_nav_open").style.display="none"
  
    
  }, 500);


}
}


appear_hidden_content_open_menu()

document.querySelector("#nav_mobile_open_3_col1").addEventListener("click", appear_hidden_content_open_menu)

  
 
    


function appear_hidden_content_open_menu2(){

  if (document.querySelector("#hidden_content_nav_open2").style.display=="none") {
    document.querySelector("#open_nav_arrow2").style.animation="arrowsYanimation1 0.4s forwards"
    document.querySelector("#hidden_content_nav_open2").style.animation="appear_extra_nav_hidden 0.7s forwards"
    document.querySelector("#hidden_content_nav_open2").style.display="flex"
  


  }

  else  {
  if (document.querySelector("#hidden_content_nav_open2").style.display=="flex" ) {
    document.querySelector("#open_nav_arrow2").style.animation="arrowsYanimation2 0.4s forwards"
    document.querySelector("#hidden_content_nav_open2").style.animation="appear_extra_nav_hidden2 0.7s forwards" 
  }
  
  
  
  setTimeout(() => { document.querySelector("#hidden_content_nav_open2").style.display="none"
  
    
  }, 500);


}
}


appear_hidden_content_open_menu2()

document.querySelector("#nav_mobile_open_3_col3").addEventListener("click", appear_hidden_content_open_menu2)




function change_img_and_text_location() {
   {
  setInterval(() => {
    if (window.innerWidth<760) {
    document.querySelector("#white_mobile_p1").innerHTML="<div id=\"white_mobile_p1\"><div id=\"text_mobile_white1\"><h1 id=\"head_white_mobile\">Lorem ipsum dolor</h1><h1 id=\"p_white_mobile\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat malesuada ligula ac ultricies. Proin id suscipit dui. Curabitur sed tincidunt arcu. Aliquam arcu ex, vulputate et libero sed, scelerisque.</h1></div><img id=\"img_white1\" src=\"IMG/16.jpg\"></div>" }
      
  }, 100);

}}

   
  


function change_img_and_text_location2() {
  setInterval(() => {
    if (window.innerWidth>760) {
      document.querySelector("#white_mobile_p1").innerHTML="<img id=\"img_white1\" src=\"IMG/16.jpg\"><div id=\"text_mobile_white1\"><h1 id=head_white_mobile\">Lorem ipsum dolor</h1><h1 id=\"p_white_mobile\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat malesuada ligula ac ultricies. Proin id suscipit dui. Curabitur sed tincidunt arcu. Aliquam arcu ex, vulputate et libero sed, scelerisque.</h1>" 
    }
    
  }, 100);

  
}





window.onload=change_img_and_text_location()
window.onload=change_img_and_text_location2()




function change_img_and_text_location3() {
  {
 setInterval(() => {
   if (window.innerWidth<760) {
   document.querySelector("#white_mobile_p2").innerHTML="<div id=\"white_mobile_p1\"><div id=\"text_mobile_white1\"><h1 id=\"head_white_mobile\">Lorem ipsum dolor</h1><h1 id=\"p_white_mobile\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat malesuada ligula ac ultricies. Proin id suscipit dui. Curabitur sed tincidunt arcu. Aliquam arcu ex, vulputate et libero sed, scelerisque.</h1></div><img id=\"img_white1\" src=\"IMG/14.jpg\"></div>" }
     
 }, 100);

}}

  
 


function change_img_and_text_location4() {
 setInterval(() => {
   if (window.innerWidth>760) {
     document.querySelector("#white_mobile_p2").innerHTML="<img id=\"img_white1\" src=\"IMG/14.jpg\"><div id=\"text_mobile_white1\"><h1 id=head_white_mobile\">Lorem ipsum dolor</h1><h1 id=\"p_white_mobile\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat malesuada ligula ac ultricies. Proin id suscipit dui. Curabitur sed tincidunt arcu. Aliquam arcu ex, vulputate et libero sed, scelerisque.</h1>" 
   }
   
 }, 100);

 
}


window.onload=change_img_and_text_location3()
window.onload=change_img_and_text_location4()


function change_img_and_text_location5() {
  {
 setInterval(() => {
   if (window.innerWidth<760) {
   document.querySelector("#white_mobile_p3").innerHTML="<div id=\"white_mobile_p1\"><div id=\"text_mobile_white1\"><h1 id=\"head_white_mobile\">Lorem ipsum dolor</h1><h1 id=\"p_white_mobile\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat malesuada ligula ac ultricies. Proin id suscipit dui. Curabitur sed tincidunt arcu. Aliquam arcu ex, vulputate et libero sed, scelerisque.</h1></div><img id=\"img_white1\" src=\"IMG/21.jpg\"></div>" }
     
 }, 100);

}}

  
 


function change_img_and_text_location6() {
 setInterval(() => {
   if (window.innerWidth>760) {
     document.querySelector("#white_mobile_p3").innerHTML="<img id=\"img_white1\" src=\"IMG/21.jpg\"><div id=\"text_mobile_white1\"><h1 id=head_white_mobile\">Lorem ipsum dolor</h1><h1 id=\"p_white_mobile\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat malesuada ligula ac ultricies. Proin id suscipit dui. Curabitur sed tincidunt arcu. Aliquam arcu ex, vulputate et libero sed, scelerisque.</h1>" 
   }
   
 }, 100);

 
}




window.onload=change_img_and_text_location5()
window.onload=change_img_and_text_location6()



function change_img_and_text_location7() {
  {
 setInterval(() => {
   if (window.innerWidth<760) {
   document.querySelector("#white_mobile_p4").innerHTML="<div id=\"white_mobile_p1\"><div id=\"text_mobile_white1\"><h1 id=\"head_white_mobile\">Lorem ipsum dolor</h1><h1 id=\"p_white_mobile\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat malesuada ligula ac ultricies. Proin id suscipit dui. Curabitur sed tincidunt arcu. Aliquam arcu ex, vulputate et libero sed, scelerisque.</h1></div><img id=\"img_white1\" src=\"IMG/22.jpg\"></div>" }
     
 }, 100);

}}

  
 


function change_img_and_text_location8() {
 setInterval(() => {
   if (window.innerWidth>760) {
     document.querySelector("#white_mobile_p4").innerHTML="<img id=\"img_white1\" src=\"IMG/22.jpg\"><div id=\"text_mobile_white1\"><h1 id=head_white_mobile\">Lorem ipsum dolor</h1><h1 id=\"p_white_mobile\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat malesuada ligula ac ultricies. Proin id suscipit dui. Curabitur sed tincidunt arcu. Aliquam arcu ex, vulputate et libero sed, scelerisque.</h1>" 
   }
   
 }, 100);

 
}

window.onload=change_img_and_text_location7()
window.onload=change_img_and_text_location8()













function change_arrow_hidden_mobile1 (){


  if (document.querySelector("#col6_arrow_mobile1").style.transform=="rotateZ(0deg)")
  {
  document.querySelector("#col6_arrow_mobile1").style.transform="rotateZ(180deg)"}
  
  else
  {document.querySelector("#col6_arrow_mobile1").style.transform="rotateZ(0deg)" }
  
}
 

change_arrow_hidden_mobile1()









function bottom_hidden_content_appear_mobile () {
  if (document.querySelector("#hidden_mobile_content_6col").style.display=="none") {
    document.querySelector("#hidden_mobile_content_6col").style.animation="appear_extra_nav_hidden_bottom 0.5s forwards",
    document.querySelector("#hidden_mobile_content_6col").style.display="block" }
  
  else document.querySelector("#hidden_mobile_content_6col").style.animation="hide_extra_nav_hidden_bottom 0.5s forwards",
  
  setTimeout(() => {document.querySelector("#hidden_mobile_content_6col").style.display="none"
    
  }, 500); {}

}




bottom_hidden_content_appear_mobile () 


document.querySelector("#col1_mobile").addEventListener("click", bottom_hidden_content_appear_mobile) 

document.querySelector("#col1_mobile").addEventListener("click", change_arrow_hidden_mobile1) 








function bottom_hidden_content_appear_mobile2 () {
  if (document.querySelector("#hidden_mobile_content_6col2").style.display=="none") {
    document.querySelector("#hidden_mobile_content_6col2").style.animation="appear_extra_nav_hidden_bottom 0.5s forwards"
    document.querySelector("#hidden_mobile_content_6col2").style.display="block" }
  
  else document.querySelector("#hidden_mobile_content_6col2").style.animation="hide_extra_nav_hidden_bottom 0.5s forwards", 
  setTimeout(() => {document.querySelector("#hidden_mobile_content_6col2").style.display="none"
    
  }, 500); {}

}
 



function change_arrow_hidden_mobile2 (){


  if (document.querySelector("#col6_arrow_mobile2").style.transform=="rotateZ(0deg)")
  {
  document.querySelector("#col6_arrow_mobile2").style.transform="rotateZ(180deg)"}
  
  else
  {document.querySelector("#col6_arrow_mobile2").style.transform="rotateZ(0deg)" }
  
}






change_arrow_hidden_mobile2 ()

bottom_hidden_content_appear_mobile2 () 


document.querySelector("#col2_mobile").addEventListener("click", bottom_hidden_content_appear_mobile2) 

document.querySelector("#col2_mobile").addEventListener("click", change_arrow_hidden_mobile2) 




function bottom_hidden_content_appear_mobile3 () {
  if (document.querySelector("#hidden_mobile_content_6col3").style.display=="none") {
    document.querySelector("#hidden_mobile_content_6col3").style.animation="appear_extra_nav_hidden_bottom 0.5s forwards"
    document.querySelector("#hidden_mobile_content_6col3").style.display="block" }
  
  else document.querySelector("#hidden_mobile_content_6col3").style.animation="hide_extra_nav_hidden_bottom 0.5s forwards", 
  setTimeout(() => {document.querySelector("#hidden_mobile_content_6col3").style.display="none"
    
  }, 500); {}

}



function change_arrow_hidden_mobile3 (){


  if (document.querySelector("#col6_arrow_mobile3").style.transform=="rotateZ(0deg)")
  {
  document.querySelector("#col6_arrow_mobile3").style.transform="rotateZ(180deg)"}
  
  else
  {document.querySelector("#col6_arrow_mobile3").style.transform="rotateZ(0deg)" }
  
}


change_arrow_hidden_mobile3()

bottom_hidden_content_appear_mobile3 () 
document.querySelector("#col3_mobile").addEventListener("click", change_arrow_hidden_mobile3) 

document.querySelector("#col3_mobile").addEventListener("click", bottom_hidden_content_appear_mobile3) 


function bottom_hidden_content_appear_mobile4 () {
  if (document.querySelector("#hidden_mobile_content_6col4").style.display=="none") {
    document.querySelector("#hidden_mobile_content_6col4").style.animation="appear_extra_nav_hidden_bottom 0.5s forwards"
    document.querySelector("#hidden_mobile_content_6col4").style.display="block" }
  
  else document.querySelector("#hidden_mobile_content_6col4").style.animation="hide_extra_nav_hidden_bottom 0.5s forwards", 
  setTimeout(() => {document.querySelector("#hidden_mobile_content_6col4").style.display="none"
    
  }, 500); {}

}

function change_arrow_hidden_mobile4 (){


  if (document.querySelector("#col6_arrow_mobile4").style.transform=="rotateZ(0deg)")
  {
  document.querySelector("#col6_arrow_mobile4").style.transform="rotateZ(180deg)"}
  
  else
  {document.querySelector("#col6_arrow_mobile4").style.transform="rotateZ(0deg)" }
  
}
change_arrow_hidden_mobile4 ()


bottom_hidden_content_appear_mobile4 () 



document.querySelector("#col4_mobile").addEventListener("click", change_arrow_hidden_mobile4) 

document.querySelector("#col4_mobile").addEventListener("click", bottom_hidden_content_appear_mobile4) 


function bottom_hidden_content_appear_mobile5 () {
  if (document.querySelector("#hidden_mobile_content_6col5").style.display=="none") {
    document.querySelector("#hidden_mobile_content_6col5").style.animation="appear_extra_nav_hidden_bottom 0.5s forwards"
    document.querySelector("#hidden_mobile_content_6col5").style.display="block" }
  
  else document.querySelector("#hidden_mobile_content_6col5").style.animation="hide_extra_nav_hidden_bottom 0.5s forwards", 
  setTimeout(() => {document.querySelector("#hidden_mobile_content_6col5").style.display="none"
    
  }, 500); {}

}



function change_arrow_hidden_mobile5 (){


  if (document.querySelector("#col6_arrow_mobile5").style.transform=="rotateZ(0deg)")
  {
  document.querySelector("#col6_arrow_mobile5").style.transform="rotateZ(180deg)"}
  
  else
  {document.querySelector("#col6_arrow_mobile5").style.transform="rotateZ(0deg)" }
  
}

change_arrow_hidden_mobile5()
bottom_hidden_content_appear_mobile5 () 

document.querySelector("#col5_mobile").addEventListener("click", bottom_hidden_content_appear_mobile5) 
document.querySelector("#col5_mobile").addEventListener("click", change_arrow_hidden_mobile5) 









function top_text_animation1() {

  document.querySelector("#text1_top").style.display="block"
  setTimeout(() => {
    document.querySelector("#text1_top").style.animation=""
  }, 8000);
}

  

function top_text_animation1_hide() {

  document.querySelector("#text1_top").style.animation="text1_top_animation_hide 10s forwards"
  
}

  




function top_text_animation2() {
 
  document.querySelector("#text2_top").style.display="block"
  setTimeout(() => {
    document.querySelector("#text2_top").style.animation=""
  }, 6000);
  
}

function top_text_animation2_hide() {

  document.querySelector("#text2_top").style.animation="text1_top_animation_hide 8s forwards"
}


  
function top_text_animation3() {
 
  document.querySelector("#text3_top").style.display="block"
  setTimeout(() => {
    document.querySelector("#text3_top").style.animation=""
  }, 4000);
 
}

function top_text_animation3_hide() {

  document.querySelector("#text3_top").style.animation="text1_top_animation_hide 6s forwards"

}



function top_text_animation4() {
  
  document.querySelector("#text4_top").style.display="block"
  setTimeout(() => {
    document.querySelector("#text4_top").style.animation=""
  }, 2000);
  
  

}


function top_text_animation4_hide() {

  document.querySelector("#text4_top").style.animation="text1_top_animation_hide 4s forwards"
}

    
 
  
function show_top_texts() {
  setTimeout(() => {
    top_text_animation1()
    
  }, 1000);
  
  setTimeout(() => {
    top_text_animation2()
    
  }, 4000);
  
  
  
  setTimeout(() => {
    top_text_animation3()
    
  }, 6000);
  
  setTimeout(() => {
    top_text_animation4()
    
  }, 8000);


}


function hide_hide() {
  setTimeout(() => {
    hide_top_texts()

    
  }, 10000);
}





function hide_top_texts() {
  setTimeout(() => {
    top_text_animation1_hide()
    
  }, 2000);
  
  setTimeout(() => {
    top_text_animation2_hide()
    
  }, 4000);
  
  
  setTimeout(() => {
    top_text_animation3_hide()
    
  }, 6000);
  
  setTimeout(() => {
    top_text_animation4_hide()
    
  }, 8000);

}

function show_show_text() {
  setInterval(() => {
    show_top_texts()
    
  }, 15000);
}

function hide_hide_text() {
  setInterval(() => {
    hide_hide()
    
  }, 30000);
}


hide_hide()
show_top_texts()

hide_hide_text()
show_show_text()






















$(window).scroll(function(){
  if ($(window).scrollTop() > $('#wrapper_black').position().top) {

    $("#nav_mobile_open_bottom_text2").css("background-color", "black")
    $("#nav_mobile_open_bottom_text2").css("color", "white")
    $("#nav_mobile_open_bottom_text1").css("color", "black")
    $("#open_nav_arrow1").attr("src", "IMG/icons/arrow-down-solid-black.svg");
    $("#open_nav_arrow2").attr("src", "IMG/icons/arrow-down-solid-black.svg");
    $("#hidden_content_nav_open").css("color", "black")
    $("#hidden_content_nav_open2").css("color", "black")
    $("#nav_mobile_open_3_col1").css("color", "black")
    $("#nav_mobile_open_3_col2").css("color", "black")
    $("#nav_mobile_open_3_col3").css("color", "black")
    $("#nav_mobile_open").css("background-color", "white"); 
    $("#nav_mobile").css("background-color", "white"); 
    $("#mobile_get_started").css("color", "black")
    $("#hamburger_mobile").attr("src", "IMG/icons/bars-solid-black.svg");
    $("#cross_mobile_open").attr("src", "IMG/icons/times-solid-black.svg");
    $("#logo_mobile").attr("src", "IMG/icons/pen-solid-black.svg");
  
  
  }


  else {

    $("#nav_mobile_open_bottom_text2").css("background-color", "white")
    $("#nav_mobile_open_bottom_text2").css("color", "black")
    $("#nav_mobile_open_bottom_text1").css("color", "white")
    $("#open_nav_arrow1").attr("src", "IMG/icons/arrow-down-solid.svg");
    $("#open_nav_arrow2").attr("src", "IMG/icons/arrow-down-solid.svg");
    $("#nav_mobile_open_3_col1").css("color", "white")
    $("#nav_mobile_open_3_col2").css("color", "white")
    $("#nav_mobile_open_3_col3").css("color", "white")
    $("#hidden_content_nav_open").css("color", "white")
    $("#hidden_content_nav_open2").css("color", "white")
    $("#cross_mobile_open").attr("src", "IMG/icons/times-solid.svg");
    $("#nav_mobile_open").css("background-color", "black"); 
    $("#logo_mobile").attr("src", "IMG/icons/pen-solid.svg");
    $("#nav_mobile").css("background-color", "black"); 
    $("#mobile_get_started").css("color", "white")
    $("#hamburger_mobile").attr("src", "IMG/icons/bars-solid.svg");
  }
});










 




$(window).scroll(function(){
  
  if ($(window).scrollTop() > $('#wrapper_black').position().top) {

    $("#extra_nav2_text12").hover(function () {
      $(this).css("color", "black")
    }, function(){
      $(this).css("color", "gray")

    })

    $("#extra_nav2_text13").hover(function () {
      $(this).css("color", "black")
       }, function(){
      $(this).css("color", "gray")

    })
    
    $("#extra_nav2_text14").hover(function () {
      $(this).css("color", "black")
    }, function(){
      $(this).css("color", "gray")

    })
    
    $("#extra_nav2_text15").hover(function () {
      $(this).css("color", "black")
    }, function(){
      $(this).css("color", "gray")

    })
    
    $("#extra_nav2_text16").hover(function () {
      $(this).css("color", "black")
    }, function(){
      $(this).css("color", "gray")

    })
    

    
    
  
    
   

    $("#container_4_col").css("background-color", "white"); 
    $("#extra_nav2_container").css("background-color", "white"); 
    $("#container_4_col").css("color", "black"); 
    $("#extra_nav2_text_to_display").css("color", "black"); 
    
   
    
    $("#nav_arrow1").attr("src", "IMG/icons/angle-down-solid-black.svg");
    $("#nav_arrow2").attr("src", "IMG/icons/angle-down-solid-black.svg");
    $("#logo_img_file").attr("src", "IMG/icons/pen-solid-black.svg");
    $(".link_github").css("color", "black"); 
    
    $("#navigation").css("background-color", "white"); 
    $("#github_img").attr("src", "./IMG/icons/github_black.png")
    $("#logo_name").css("color", "rgb(236, 160, 236);");
    $("#nav_3_middle").css("color", "black");
    $("#right_nav1").css("color", "black");
    $("#right_nav2").css("color", "white");
    $("#right_nav2").css("background-color", "black");
      

  }

  else {


    $("#extra_nav2_text12").hover(function () {
      $(this).css("color", "white")
    }, function(){
      $(this).css("color", "gray")

    })

    $("#extra_nav2_text13").hover(function () {
      $(this).css("color", "white")
       }, function(){
      $(this).css("color", "gray")

    })
    
    $("#extra_nav2_text14").hover(function () {
      $(this).css("color", "white")
    }, function(){
      $(this).css("color", "gray")

    })
    
    $("#extra_nav2_text15").hover(function () {
      $(this).css("color", "white")
    }, function(){
      $(this).css("color", "gray")

    })
    
    $("#extra_nav2_text16").hover(function () {
      $(this).css("color", "white")
    }, function(){
      $(this).css("color", "gray")

    })
    


  
    
    $(".link_github").css("color", "white"); 
    $("#github_img").attr("src", "./IMG/icons/github-512.webp")
    $("#extra_nav2_text_to_display").css("color", "white"); 
    $("#container_4_col").css("color", "white"); 
    $("#extra_nav2_container").css("background-color", "black"); 
    $("#nav_arrow1").attr("src", "IMG/icons/angle-down-solid.svg");
    $("#nav_arrow2").attr("src", "IMG/icons/angle-down-solid.svg");
    $("#logo_img_file").attr("src", "IMG/icons/pen-solid.svg");
    $("#navigation").css("background-color", "black"); 
    $("#container_4_col").css("background-color", "black"); 
    $("#logo_name").css("color", "rgb(236, 160, 236);");
    $("#nav_3_middle").css("color", "white");
    $("#right_nav1").css("color", "white");
    $("#right_nav2").css("color", "black");
    $("#right_nav2").css("background-color", "white");

  }
});






function show_hidden_content_text1(){
  $("#img1_text1").click(function () {
    document.addEventListener("scroll", show_hidden_content_imgs_fade_animation)
    window.scrollTo(0, 0)
    $("#img_slider_text1_content_wrapper").fadeIn(2000)
    $("#text_1_wrapper_nav").show()
    
    $("#title_img").hide()
    $("#middle_wrapper").hide()
    $("#wrapper_black").hide()
    $("#wrapper_semi_black").hide()
    $("#wrapper_white2").hide()
    
    
    
    

   
    
    
  });

  
}

// $("#img_slider_text1_content_wrapper").fadeIn(2000)
// $("#text_1_wrapper_nav").show()
// $("#navigation").hide()
// $("#title_img").hide()
// $("#middle_wrapper").hide()
// $("#wrapper_black").hide()
// $("#wrapper_semi_black").hide()
// $("#wrapper_white2").hide()
// $("#white_content").hide()
// $("#white_content_mobile").hide()

show_hidden_content_text1()



function hide_hidden_content_text1() {

  $("#x_to_close").click(function(){

    
    $("#img_slider_text1_content_wrapper").fadeIn(500)
    $("#img_slider_text1_content_wrapper").hide(500)
   
    $("#text_1_wrapper_nav").hide()
    $("#title_img").show()
    $("#middle_wrapper").show()
    $("#wrapper_black").show()
    $("#wrapper_semi_black").show()
    $("#wrapper_white2").show()
    
    $("#text_1_wrapper_nav").hide()
    setTimeout(() => {
      
      document.querySelector('#img1').scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'center' });
     
      
    }, 500);
    


    
    

    




  
  

  });
}

hide_hidden_content_text1()



function show_hidden_content_imgs_fade_animation() {
  var img1_hidden_content = document.getElementById("col1_img_hidden")
  var rect = img1_hidden_content.getBoundingClientRect();
  var img1_hidden_content2 = document.getElementById("col1_img_hidden2")
  var rect2 = img1_hidden_content2.getBoundingClientRect();

  var img1_hidden_content3 = document.getElementById("col1_img_hidden3")
  var rect3 = img1_hidden_content3.getBoundingClientRect();

  var img1_hidden_content4 = document.getElementById("col2_img_hidden1")
  var rect4 = img1_hidden_content4.getBoundingClientRect();

  var img1_hidden_content5 = document.getElementById("col2_img_hidden2")
  var rect5 = img1_hidden_content5.getBoundingClientRect();

  var img1_hidden_content6 = document.getElementById("col2_img_hidden3")
  var rect6 = img1_hidden_content6.getBoundingClientRect();

  var img1_hidden_content7 = document.getElementById("col2_img_hidden4")
  var rect7 = img1_hidden_content7.getBoundingClientRect();

  var img1_hidden_content8 = document.getElementById("col3_img_hidden1")
  var rect8 = img1_hidden_content8.getBoundingClientRect();

  var img1_hidden_content9 = document.getElementById("col3_img_hidden2")
  var rect9 = img1_hidden_content9.getBoundingClientRect();

  var img1_hidden_content10 = document.getElementById("col3_img_hidden3")
  var rect10 = img1_hidden_content10.getBoundingClientRect();


  var img1_hidden_content11 = document.getElementById("btn_hidden_wrapper")
  var rect11 = img1_hidden_content11.getBoundingClientRect();








  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  
  {
    document.querySelector("#col1_img_hidden").style.visibility="visible"
    document.querySelector("#col1_img_hidden").style.animation="appear 1s forwards"
  }

  if (
    rect2.top >= 0 &&
    rect2.left >= 0 &&
    rect2.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect2.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  
  {
    document.querySelector("#col1_img_hidden2").style.visibility="visible"
    document.querySelector("#col1_img_hidden2").style.animation="appear 1s forwards"
  }


  if (
    rect3.top >= 0 &&
    rect3.left >= 0 &&
    rect3.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect3.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  
  {
    document.querySelector("#col1_img_hidden3").style.visibility="visible"
    document.querySelector("#col1_img_hidden3").style.animation="appear 1s forwards"
  }

  if (
    rect4.top >= 0 &&
    rect4.left >= 0 &&
    rect4.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect4.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  
  {
    document.querySelector("#col2_img_hidden1").style.visibility="visible"
    document.querySelector("#col2_img_hidden1").style.animation="appear 1s forwards"
  }

  if (
    rect5.top >= 0 &&
    rect5.left >= 0 &&
    rect5.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect5.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  
  {
    document.querySelector("#col2_img_hidden2").style.visibility="visible"
    document.querySelector("#col2_img_hidden2").style.animation="appear 1s forwards"
  }

  if (
    rect6.top >= 0 &&
    rect6.left >= 0 &&
    rect6.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect6.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  
  {
    document.querySelector("#col2_img_hidden3").style.visibility="visible"
    document.querySelector("#col2_img_hidden3").style.animation="appear 1s forwards"
  }

  if (
    rect7.top >= 0 &&
    rect7.left >= 0 &&
    rect7.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect7.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  
  {
    document.querySelector("#col2_img_hidden4").style.visibility="visible"
    document.querySelector("#col2_img_hidden4").style.animation="appear 1s forwards"
  }

  if (
    rect8.top >= 0 &&
    rect8.left >= 0 &&
    rect8.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect8.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  
  {
    document.querySelector("#col3_img_hidden1").style.visibility="visible"
    document.querySelector("#col3_img_hidden1").style.animation="appear 1s forwards"
  }

  if (
    rect9.top >= 0 &&
    rect9.left >= 0 &&
    rect9.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect9.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  
  {
    document.querySelector("#col3_img_hidden2").style.visibility="visible"
    document.querySelector("#col3_img_hidden2").style.animation="appear 1s forwards"
  }

  if (
    rect10.top >= 0 &&
    rect10.left >= 0 &&
    rect10.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect10.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  
  {
    document.querySelector("#col3_img_hidden3").style.visibility="visible"
    document.querySelector("#col3_img_hidden3").style.animation="appear 1s forwards"
  }


  if (
    rect11.top >= 0 &&
    rect11.left >= 0 &&
    rect11.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect11.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  
  {
    document.querySelector("#img_hidden_content1").style.visibility="visible"
    document.querySelector("#img_hidden_content1").style.animation="appear 1s forwards"
  }










}











document.getElementById("hamb_content_mobile").addEventListener("click",() =>{
  

  document.getElementById("change_content").style.display="none"
  document.getElementById("text_1_wrapper_nav").style.display="none"
  document.getElementById("wrapper_gray").style.visibility="hidden"
  document.getElementById("hidden_hidden_menu").style.display="table"
  document.getElementById("nav_mobile").style.visibility="hidden"
  document.getElementById("white_content_mobile").style.visibility="hidden"
  document.querySelector("body").style.overflowY="hidden"
 
  
  
  


} )


document.getElementById("x_to_close_hidden").addEventListener("click",() =>{
  
  document.getElementById("change_content").style.animation="appear 1s forwards"
  document.getElementById("change_content").style.display="table"
  document.getElementById("text_1_wrapper_nav").style.display="block"
  document.getElementById("wrapper_gray").style.visibility="visible"
  document.getElementById("hidden_hidden_menu").style.display="none"
  document.getElementById("nav_mobile").style.visibility="visible"
  document.getElementById("white_content_mobile").style.visibility="visible"
  document.querySelector("body").style.overflowY="scroll"
  
  
} )



document.querySelector("#middle_middle_short").addEventListener("mouseover", ()=>{
  document.querySelector("#middle_arrow").style.transition="0.3s"
  document.querySelector("#middle_arrow").style.transform="rotateZ(90deg)"
})

document.querySelector("#middle_middle_short").addEventListener("mouseout", ()=>{
  document.querySelector("#middle_arrow").style.transition="0.3s"
  document.querySelector("#middle_arrow").style.transform="rotateZ(0deg)"
})




document.querySelector("#img1_text2").addEventListener("click", ()=>{
  window.scrollTo(0, 0);
  $("#main").hide()
  document.querySelector("#text_1_wrapper_nav3_sub_main").style.display="inline-block"
  $("#sub_main2").show()
  
  
  
  

})

document.querySelector("#x_to_close_submain").addEventListener("click", ()=>{
  $("#sub_main2").fadeIn()
  $("#main").show()
  $("#text_1_wrapper_nav3_sub_main").hide()
  $("#sub_main2").hide()
  $("#text_1_wrapper_nav").hide()

  document.querySelector('#img1_text2').scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'center' });

})



function sub_main_top_slide_up() {
  if  (window.scrollY>10) {
    document.getElementById("top_sub_main").style.animation="slide_up_submain 1s forwards"
    
  }
  else {
    document.getElementById("top_sub_main").style.animation="slide_down_submain 1s forwards"

  }

}
document.addEventListener("scroll", sub_main_top_slide_up)





function sub_main_top_mobile_slide_up() {
  if  (window.scrollY>10) {
    document.getElementById("top_sub_main_mobile").style.animation="slide_up_submain 1s forwards"
    
  }
  else {
    document.getElementById("top_sub_main_mobile").style.animation="slide_down_submain 1s forwards"

  }

}
document.addEventListener("scroll", sub_main_top_mobile_slide_up)






function show_mobile_hamb_sub_main_content() {
  $("#mobile_hamb_content_sub").show()
  $("#sub_main2_content").hide()
  $("#hamb_top_mobile_svg").hide()
  $("#hamb_top_mobile_svg_switch").show()
  $("#text_1_wrapper_nav3_sub_main").fadeOut(200)
  setTimeout(() => {
    $("#text_1_wrapper_nav3_sub_main").hide()
    
  }, 500);

  
  
  



}


function hide_mobile_hamb_sub_main_content() {
  $("#mobile_hamb_content_sub").hide()
  $("#sub_main2_content").show()
  $("#hamb_top_mobile_svg").show()
  $("#hamb_top_mobile_svg_switch").hide()
  $("#text_1_wrapper_nav").show()
  $("#text_1_wrapper_nav3_sub_main").fadeIn()
  



}
document.querySelector("#hamb_top_mobile_svg").addEventListener("click",show_mobile_hamb_sub_main_content)
document.querySelector("#hamb_top_mobile_svg_switch").addEventListener("click",hide_mobile_hamb_sub_main_content)








const show_messenger = () => {

 
  $("#contact_messenger").css("display", "block")
}



function show_messenger_main () {
  var messenger = document.getElementById("contact_messenger")
  var rect1 = messenger.getBoundingClientRect();


  if (
  rect1.top >= 0 &&
  rect1.left >= 0 &&
  rect1.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  rect1.right <= (window.innerWidth || document.documentElement.clientWidth)) 

  

 {show_messenger()
  }
  else {
    $("#contact_messenger").css("display", "none")
  
  }

}



document.addEventListener("scroll", show_messenger_main)




function hide_messenger_show_pen() {

  document.getElementById("contact_img").style.animation="fade_out 0.3s forwards"
  setTimeout(() => {
    $("#contact_img").css("display", "none")
    $("#messenger_pen_img").css("display", "block")
    document.getElementById("contact_img").style.animation="appear_messenger 1s forwards;"
    
  }, 302);

 





}

document.getElementById("contact_img").addEventListener("mouseover", hide_messenger_show_pen)





function show_message_window() {
  $("#window_messenger").css("display", "block")
  $("#messenger_pen_img").css("display", "none")
}

document.getElementById("messenger_pen_img").addEventListener("click", show_message_window)

function hide_message_window() {
  document.getElementById("window_messenger").style.animation="hide_messenger 0.8s forwards"
  setTimeout(() => {
    $("#window_messenger").css("display", "none")
    document.getElementById("window_messenger").style.animation="appear_messenger 1s forwards"
    $("#messenger_pen_img").css("display", "block")


    
  }, 800);

}
document.getElementById("messenger_hamb_img").addEventListener("click", hide_message_window)



function current_learning_animation () {
  
  document.getElementById("text_middle3").style.animation="current_learning 0.4s forwards"
  setTimeout(() => {
    document.getElementById("text_middle3").style.animation=""
  }, 500);
    

}

function set(){
  setInterval(() => {
    current_learning_animation()
    
  }, 2000);


}

set()




function hide_messenger_show_messenger_email () {
  $("#window_messenger").css("animation", "none")
  $("#window_messenger").fadeOut(300)
  setTimeout(() => {
    document.getElementById("window_messenger").style.display="none"
    $("#window_messenger_email").fadeIn()
    $("#window_messenger").css("animation", "appear_messenger 1s forwards")



  }, 400);


}

document.getElementById("send_image_messenger").addEventListener("click",hide_messenger_show_messenger_email )

function hide_messenger_email(){

  $("#window_messenger_email").css("animation", "none")
  $("#window_messenger_email").fadeOut(300)
  setTimeout(() => {
    $("#messenger_pen_img").fadeIn()
    $("#window_messenger_email").css("animation", "appear_messenger 1s forwards")


    
  }, 301);
    




  


}

document.getElementById("messenger_hamb_img_email").addEventListener("click", hide_messenger_email)




function hide_message_sent_show_thanks () {
  $("#window_messenger_email").css("animation", "none")
  $("#window_messenger_email").fadeOut(300)
  setTimeout(() => {
    $("#window_messenger_message_sent").css("display", "block")
  },400)
  setTimeout(() => {
    $("#window_messenger_message_sent").css("animation", "hide_message_sent_messager 1.5s forwards" )
    
    
  }, 3000);
  setTimeout(() => {
    $("#window_messenger_email").css("animation", "appear_messenger 1s forwards")
    $("#window_messenger_email").css("display", "none")
    $("#window_messenger_message_sent").css("display", "none")
    $("#window_messenger_message_sent").css("animation", "appear_messenger 1s forwards" )
    $("#messenger_pen_img").fadeIn()

    
  }, 4501);
 


    
 

}
document.getElementById("send_image_messenger_message_sent").addEventListener("click", hide_message_sent_show_thanks)



function show_img_content3() {
  checkpoint= document.getElementById("checkpoint_content3")
  var rect = checkpoint.getBoundingClientRect()
  
  

  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) 
  { $("#img_content3").css("visibility", "visible")

    $("#img_content3").css("animation", "appear 1.3s forwards")
  }

}
document.addEventListener("scroll", show_img_content3)



function content3_slide_up_nav() {
  if  (window.scrollY>400) {
    document.getElementById("content_middle_hidden3_nav").style.animation="slide_up_submain 1s forwards"
    
  }
  else {
    document.getElementById("content_middle_hidden3_nav").style.animation="slide_down_submain 1s forwards"

  }

}
document.addEventListener("scroll", content3_slide_up_nav)




function show_conent3() {
  window.scrollTo(0, 0);

  $("#main").fadeOut(300)
  setTimeout(() => {
    $("#content_hidden3").fadeIn(600)
    
    
  }, 301);
 
  

}


document.getElementById("img1_text3").addEventListener("click", show_conent3)



function hide_content3_show_main() {
  
  $("#content_hidden3").fadeOut(600)
  setTimeout(() => {
    $("#main").fadeIn(600)
    
  }, 601);
  setTimeout(() => {
    document.getElementById("img1_text3").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    
  }, 602);

  
  
  
 
    
  


  
}

document.getElementById("x_to_close_submain_content3").addEventListener("click", hide_content3_show_main)



function top_background_animation() {
  setTimeout(() => {
    document.getElementById("title_img").style.animation="background_animation 4s forwards"
    
  }, 700);

}
top_background_animation()

