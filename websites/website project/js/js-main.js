






window.addEventListener("resize", function() {
  if (window.matchMedia("(min-width: 760px)").matches) {
    for (let i=1;i<10;i++) {
      document.querySelector("#img_container"+i).style.display="inline-block"
    }}


})
window.addEventListener("resize", function() {
  if (window.matchMedia("(min-width: 600px)").matches) {
    for (let i=1;i<10;i++) {
      document.querySelector("#img_container"+i).style.display="inline-block"


    }}


})



const slideMobileMenuDown = function() {
  const hamb = document.querySelector(".navigation_mobile_open")
  hamb.style.transform == "translateY(0%)"?  hamb.style.transform = "translateY(-200%)":hamb.style.transform = "translateY(0%)"

}

document.querySelector(".hamb").addEventListener("click",slideMobileMenuDown )







// CHANGE CONTENT OF COLUMNS IN BLOG USING EXTERNAL JS FILE NAMED DATACOLSBLOG.JS

function fillContentBlog(blog, blogData, colIndex) {
  document.querySelector(blog+" .imgageBlog").src =blogData["col"+colIndex].img
  document.querySelector(blog+" .blog_text h1").innerHTML =blogData["col"+colIndex].title
  document.querySelector(blog+" .blog_text .blog_date").innerHTML = blogData["col"+colIndex].date
  document.querySelector(blog+" .blog_text .text_main").innerHTML =blogData["col"+colIndex].text


}



// SWITCHERS TO CHANGE THE COLUMNS

const switcherCol1 = document.querySelector("#switch1")
const switcherCol2 = document.querySelector("#switch2")
const switcherCol3 = document.querySelector("#switch3")
const switcherCol4 = document.querySelector("#switch4")


// FUNCTIONS TO CHANGE COLUMNS


// MAIN FUNCTION
function MainSwitcherFunction(data) {
  for (let i=1; i<=4; i++) {
    fillContentBlog("#blog"+i, data, i);
  }
}







list_of_switchers = [switcherCol1, switcherCol2, switcherCol3, switcherCol4]

// ADDING CLASS TO SWITCHERS TO CHANGE COLORS
function addClassSwtitcher() {
  list_of_switchers.forEach(switcher => {
    switcher.classList.add("switcher")
    switcher.classList.remove("switcher_active")
  });
  if (this.classList.contains("switcher")) {
    this.classList.add("switcher_active");
  }



}
const triggerAnimation = function() {
  document.querySelector(".blog_container").style.animation="fadeInEffect 0.4s forwards"
  setTimeout(() => {
    document.querySelector(".blog_container").style.animation=""
  }, 401);
}
// LISTENERS FOR EVERY SWTICHERS ADDED

switcherCol1.addEventListener("click", function() {
  MainSwitcherFunction(blogData1)
  addClassSwtitcher.call(switcherCol1)
  triggerAnimation()
})

switcherCol2.addEventListener("click", function() {
  MainSwitcherFunction(blogData2)
  addClassSwtitcher.call(switcherCol2)
  triggerAnimation()

}
)
switcherCol3.addEventListener("click", function() {
  MainSwitcherFunction(blogData3)
  addClassSwtitcher.call(switcherCol3)
  triggerAnimation()
}
)
switcherCol4.addEventListener("click", function() {
  MainSwitcherFunction(blogData4)
  addClassSwtitcher.call(switcherCol4)
  triggerAnimation()
}
)



const slider_fade_effect1 = function() {
  document.querySelector("#img_container1").style.animation="fadeInEffect 0.5s forwards"
  document.querySelector("#img_container2").style.animation="fadeInEffect 0.5s forwards"
  document.querySelector("#img_container1").style.display="inline-block"
  document.querySelector("#img_container2").style.display="inline-block"

  for (let i=3;i<10;i++) {
    document.querySelector("#img_container"+i).style.display="none"
  }


}

const slider_fade_effect2 = function() {
  document.querySelector("#img_container1").style.display="none"
  document.querySelector("#img_container2").style.display="none"

  document.querySelector("#img_container3").style.display="inline-block"
  document.querySelector("#img_container4").style.display="inline-block"
  document.querySelector("#img_container3").style.animation="fadeInEffect 0.5s forwards"
  document.querySelector("#img_container4").style.animation="fadeInEffect 0.5s forwards"
  for (let i=5;i<10;i++) {
    document.querySelector("#img_container"+i).style.display="none"
  }

}
const slider_fade_effect3 = function() {
  for (let i=1;i<5;i++) {
    document.querySelector("#img_container"+i).style.display="none"
  }
  document.querySelector("#img_container5").style.display="inline-block"
  document.querySelector("#img_container6").style.display="inline-block"
  document.querySelector("#img_container5").style.animation="fadeInEffect 0.5s forwards"
  document.querySelector("#img_container6").style.animation="fadeInEffect 0.5s forwards"
  for (let i=7;i<10;i++) {
    document.querySelector("#img_container"+i).style.display="none"
  }
}

const slider_fade_effect4 = function() {
  for (let i=1;i<8;i++) {
    document.querySelector("#img_container"+i).style.display="none"
  }
  document.querySelector("#img_container7").style.display="inline-block"
  document.querySelector("#img_container8").style.display="inline-block"
  document.querySelector("#img_container7").style.animation="fadeInEffect 0.5s forwards"
  document.querySelector("#img_container8").style.animation="fadeInEffect 0.5s forwards"


}


document.querySelector(".circle1_mid_screen").addEventListener("click", slider_fade_effect1)
document.querySelector(".circle2_mid_screen").addEventListener("click", slider_fade_effect2)
document.querySelector(".circle3_mid_screen").addEventListener("click", slider_fade_effect3)
document.querySelector(".circle4_mid_screen").addEventListener("click", slider_fade_effect4)



const slider_mobile1 = function() {

  document.querySelector("#img_container1").style.display="inline-block"
  document.querySelector("#img_container1").style.animation="fadeInEffect 0.5s forwards"


  for (let i=2;i<10;i++) {
    document.querySelector("#img_container"+i).style.display="none"
    document.querySelector("#img_container"+i).style.animation=""
  }

}
const slider_mobile2 = function() {

  document.querySelector("#img_container2").style.display="inline-block"
  document.querySelector("#img_container2").style.animation="fadeInEffect 0.5s forwards"

  document.querySelector("#img_container1").style.animation=""
  document.querySelector("#img_container1").style.display="none"

  for (let i=3;i<10;i++) {
    document.querySelector("#img_container"+i).style.display="none"
    document.querySelector("#img_container"+i).style.animation=""
  }

}
const slider_mobile3 = function() {

  document.querySelector("#img_container3").style.display="inline-block"
  document.querySelector("#img_container3").style.animation="fadeInEffect 0.5s forwards"
  document.querySelector("#img_container1").style.animation=""
  document.querySelector("#img_container1").style.display="none"
  document.querySelector("#img_container2").style.animation=""
  document.querySelector("#img_container2").style.display="none"

  for (let i=4;i<10;i++) {
    document.querySelector("#img_container"+i).style.display="none"
    document.querySelector("#img_container"+i).style.animation=""
  }

}

const slider_mobile4 = function() {

  document.querySelector("#img_container4").style.display="inline-block"
  document.querySelector("#img_container4").style.animation="fadeInEffect 0.5s forwards"
  for (let i=1;i<4;i++) {
    document.querySelector("#img_container"+i).style.display="none"
    document.querySelector("#img_container"+i).style.animation=""
  }

  for (let i=5;i<10;i++) {
    document.querySelector("#img_container"+i).style.display="none"
    document.querySelector("#img_container"+i).style.animation=""
  }

}
const slider_mobile5 = function() {

  document.querySelector("#img_container5").style.display="inline-block"
  document.querySelector("#img_container5").style.animation="fadeInEffect 0.5s forwards"
  for (let i=1;i<5;i++) {
    document.querySelector("#img_container"+i).style.display="none"
    document.querySelector("#img_container"+i).style.animation=""
  }

  for (let i=6;i<10;i++) {
    document.querySelector("#img_container"+i).style.display="none"
    document.querySelector("#img_container"+i).style.animation=""
  }

}

const slider_mobile6 = function() {

  document.querySelector("#img_container6").style.display="inline-block"
  document.querySelector("#img_container6").style.animation="fadeInEffect 0.5s forwards"
  for (let i=1;i<6;i++) {
    document.querySelector("#img_container"+i).style.display="none"
    document.querySelector("#img_container"+i).style.animation=""
  }

  for (let i=7;i<10;i++) {
    document.querySelector("#img_container"+i).style.display="none"
    document.querySelector("#img_container"+i).style.animation=""
  }

}

const slider_mobile7 = function() {

  document.querySelector("#img_container7").style.display="inline-block"
  document.querySelector("#img_container7").style.animation="fadeInEffect 0.5s forwards"
  for (let i=1;i<7;i++) {
    document.querySelector("#img_container"+i).style.display="none"
    document.querySelector("#img_container"+i).style.animation=""
  }

  for (let i=8;i<10;i++) {
    document.querySelector("#img_container"+i).style.display="none"
    document.querySelector("#img_container"+i).style.animation=""
  }

}

const slider_mobile8 = function() {

  document.querySelector("#img_container8").style.display="inline-block"
  document.querySelector("#img_container8").style.animation="fadeInEffect 0.5s forwards"
  for (let i=1;i<8;i++) {
    document.querySelector("#img_container"+i).style.display="none"
    document.querySelector("#img_container"+i).style.animation=""
  }

  for (let i=9;i<10;i++) {
    document.querySelector("#img_container"+i).style.display="none"
    document.querySelector("#img_container"+i).style.animation=""
  }

}

const slider_mobile9 = function() {

  document.querySelector("#img_container9").style.display="inline-block"
  document.querySelector("#img_container9").style.animation="fadeInEffect 0.5s forwards"
  for (let i=1;i<9;i++) {
    document.querySelector("#img_container"+i).style.display="none"
    document.querySelector("#img_container"+i).style.animation=""
  }


}





document.querySelector(".circle1_mobile").addEventListener("click", slider_mobile1)
document.querySelector(".circle2_mobile").addEventListener("click", slider_mobile2)
document.querySelector(".circle3_mobile").addEventListener("click", slider_mobile3)
document.querySelector(".circle4_mobile").addEventListener("click", slider_mobile4)
document.querySelector(".circle5_mobile").addEventListener("click", slider_mobile5)
document.querySelector(".circle6_mobile").addEventListener("click", slider_mobile6)
document.querySelector(".circle7_mobile").addEventListener("click", slider_mobile7)
document.querySelector(".circle8_mobile").addEventListener("click", slider_mobile8)
document.querySelector(".circle9_mobile").addEventListener("click", slider_mobile9)







const slider_function_right = function() {
    const image_length = document.querySelector(".image_container").clientWidth;
    document.querySelector(".carousel_container").scrollBy({
    top: 0,
    left: image_length,
    behavior: 'smooth'
  })
}

const slider_function_left = function() {
    const image_length = document.querySelector(".image_container").clientWidth;
   document.querySelector(".carousel_container").scrollBy({
    top: 0,
    left: -image_length -8,
    behavior: 'smooth'
  })

}
document.querySelector(".right_arrow").addEventListener("click", slider_function_right)
document.querySelector(".left_arrow").addEventListener("click", slider_function_left)


const cricle1 = document.querySelector(".circle1")
const cricle2 = document.querySelector(".circle2")
const cricle3 = document.querySelector(".circle3")

const cricle1_mid = document.querySelector(".circle1_mid_screen")
const cricle2_mid = document.querySelector(".circle2_mid_screen")
const cricle3_mid = document.querySelector(".circle3_mid_screen")
const cricle4_mid = document.querySelector(".circle4_mid_screen")




// cricle1_mid.classList.add("activeBullet");
cricle1.classList.add("activeBullet");

const addActiveClassBullets = function(bulletActive, bulletInactive1, bulletInactive2 ) {
  const deActivatedBullet2 = bulletInactive2.style.pointerEvents = "all"; bulletInactive2.style.filter = "invert(80%) sepia(4%) saturate(256%) hue-rotate(314deg) brightness(85%) contrast(87%)";
  const deActivatedBullet1 = bulletInactive1.style.pointerEvents = "all"; bulletInactive1.style.filter = "invert(80%) sepia(4%) saturate(256%) hue-rotate(314deg) brightness(85%) contrast(87%)";
  const newBullet = bulletActive.style.pointerEvents = "none"; bulletActive.style.filter = "invert(30%) sepia(12%) saturate(3140%) hue-rotate(199deg) brightness(94%) contrast(93%)"; bulletActive.classList.add("activeBullet");
  bulletActive.classList.add("activeBullet");
  bulletInactive1.classList.remove("activeBullet");
  bulletInactive2.classList.remove("activeBullet");
  return (newBullet, deActivatedBullet1, deActivatedBullet2)
}

$(".circle2").click(function(){
  const image_length = document.querySelector(".image_container").clientWidth;
  if(cricle1.classList.contains("activeBullet") || cricle1.classList.contains("")) {
    document.querySelector(".carousel_container").scrollBy({
      top: 0,
      left: image_length *3 +8,
      behavior: 'smooth'}),
      addActiveClassBullets(this, cricle1, cricle3 )

    }
  else {

      document.querySelector(".carousel_container").scrollBy({
        top: 0,
        left: -image_length *3 +8,
        behavior: 'smooth'}),
        addActiveClassBullets(this, cricle1, cricle3 )
      }

  }

)




$(".circle1").click(function(){
  const image_length = document.querySelector(".image_container").clientWidth;

  document.querySelector(".carousel_container").scrollBy({
    top: 0,
    left: -image_length *9,
    behavior: 'smooth'}),

    addActiveClassBullets(this, cricle2, cricle3 )

  }
)
$(".circle3").click(function(){
  const image_length = document.querySelector(".image_container").clientWidth;

  document.querySelector(".carousel_container").scrollBy({
    top: 0,
    left: image_length *9,
    behavior: 'smooth'}),

    addActiveClassBullets(this, cricle2, cricle1 )

  }
)





jQuery(document).ready(function($) {

  'use strict';


  $(".slider").slick({
      autoplay:true,
      speed:1000,
      slidesToShow:1,
      slidesToScroll:1,
      pauseOnHover:false,
      dots:true,
      fade: true,
      pauseOnDotsHover:true,
      cssEase:'linear',
      // fade:true,
      draggable:false,
      prevArrow:'<button class="PrevArrow"></button>',
      nextArrow:'<button class="NextArrow"></button>',
    });

})
const showHiddenText = function(imageContainer, text){



  document.querySelector(imageContainer).addEventListener("mouseover", function() {
    document.querySelector(text).style.transform= "translateY(0%)"
    document.querySelector(text).style.animation= "fadeInEffect 0.8s forwards"
  })
  document.querySelector(imageContainer).addEventListener("mouseleave", function() {
    document.querySelector(text).style.transform= "translateY(100%)"
    document.querySelector(text).style.animation= "fadeOutEffect 0.5s forwards"

  })

}

const runDisplayTextHiddenAll = function() {
  // const text1 = "#img_container"+i
  // const text1 = "#img_container"+i
  for (let i=1;i<=9;i++) {
    showHiddenText("#img_container"+i, "#textHidden"+i)
  }
}




