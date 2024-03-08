

function hide_show_mobile_food_nav(){
  if (window.innerWidth < 600) {
    document.querySelector("#navigation_food_images").style.display="none"

  }


}
window.addEventListener("load", hide_show_mobile_food_nav)
window.addEventListener("scroll", hide_show_mobile_food_nav)
window.addEventListener("resize", hide_show_mobile_food_nav)

function slider_switcher() {
  if (window.innerWidth > 600) {
    timer2 = setInterval(() => {
      document.querySelector(".offers_room_container_imgs_food").scrollLeft +=
        $(".offers_room_container_imgs_food").width() * 1;
    }, 3000);

    timer = setInterval(() => {
      document.querySelector(
        ".offers_room_container_imgs_food"
      ).scrollLeft -= 99999;
    }, 12001);
  }
}

function slider_switcher_mobile() {
  if (window.innerWidth < 600) {
    timer2 = setInterval(() => {
      document.querySelector(".offers_room_container_imgs_food").scrollLeft +=
        $(".offers_room_container_imgs_food").width() * 1;
    }, 1500);

    timer = setInterval(() => {
      document.querySelector(
        ".offers_room_container_imgs_food"
      ).scrollLeft -= 99999;
    }, 12001);
  }
}

window.addEventListener("load", slider_switcher);

window.addEventListener("load", slider_switcher_mobile);

function check_element_visible_on_screen_anchor_food() {
  const anchor_for_mobile_food_nav = document.querySelector(".anchor_for_mobile_food_nav");
  const anchor_for_mobile_food_nav2 = document.querySelector(".anchor_for_mobile_food_nav2");
  const anchor_for_mobile_food_nav3 = document.querySelector(".anchor_for_mobile_food_nav3");
  const anchor_for_mobile_food_nav4 = document.querySelector(".anchor_for_mobile_food_nav4");
  const navigation_food_images = document.getElementById("navigation_food_images");

  const rect = anchor_for_mobile_food_nav.getBoundingClientRect();
  const rect2 = anchor_for_mobile_food_nav2.getBoundingClientRect();
  const rect3 = anchor_for_mobile_food_nav3.getBoundingClientRect();
  const rect4 = anchor_for_mobile_food_nav4.getBoundingClientRect();
  if (
    rect2.top >= 0 &&
    rect2.left >= 0 &&
    rect2.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect2.right <= (window.innerWidth || document.documentElement.clientWidth) 
    
    
  ) 
  {
    navigation_food_images.style.display = "none";
    navigation_food_images.style.animation = "fadeIn_extra 0.7s forwards";
  }
 
 if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    
  ) 
  {
    navigation_food_images.style.display = "block";
    navigation_food_images.style.animation = "fadeIn_extra 0.7s forwards";
  }


  if (
    rect4.top >= 0 &&
    rect4.left >= 0 &&
    rect4.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect4.right <= (window.innerWidth || document.documentElement.clientWidth) 
    
  ) 
  {
    navigation_food_images.style.display = "block";
    navigation_food_images.style.animation = "fadeIn_extra 0.7s forwards";
  }

  if (
    rect3.top >= 0 &&
    rect3.left >= 0 &&
    rect3.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect3.right <= (window.innerWidth || document.documentElement.clientWidth) 
    
  ) 
  {
    navigation_food_images.style.display = "none";
    navigation_food_images.style.animation = "fadeIn_extra 0.7s forwards";
  }
 


}
document.addEventListener("scroll", check_element_visible_on_screen_anchor_food);

// checking if element is visible on screen text1

function check_element_visible_on_screen_book() {
  const anchor_book_text = document.querySelector(".anchor_book_text");
  const top_text_book = document.getElementById("book_p_text");

  const rect = anchor_book_text.getBoundingClientRect();
  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) {
    top_text_book.style.visibility = "visible";
    top_text_book.style.animation = "fadeIn_extra 0.7s forwards";
  }
}
document.addEventListener("scroll", check_element_visible_on_screen_book);

function check_element_visible_on_screen_food() {
  const anchor_food_text = document.querySelector(".anchor_food_text");
  const top_text_food = document.getElementById("food_text_p");

  const rect = anchor_food_text.getBoundingClientRect();
  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) {
    top_text_food.style.visibility = "visible";
    top_text_food.style.animation = "fadeIn_extra 0.7s forwards";
  }
}
document.addEventListener("scroll", check_element_visible_on_screen_food);

function check_element_visible_on_screen_staff() {
  const anchor_staff_text = document.querySelector(".staff_text_anchor");
  const top_text_staff = document.querySelector(".staff_text1");

  const rect = anchor_staff_text.getBoundingClientRect();
  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) {
    top_text_staff.style.visibility = "visible";
    top_text_staff.style.animation = "fadeIn_extra 0.7s forwards";
  }
}
document.addEventListener("scroll", check_element_visible_on_screen_staff);

function check_element_visible_on_screen_rooms() {
  const anchor_rooms_text = document.querySelector(".anchor_text_rooms");
  const top_text_rooms = document.getElementById("rooms_text");

  const rect = anchor_rooms_text.getBoundingClientRect();
  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) {
    top_text_rooms.style.visibility = "visible";
    top_text_rooms.style.animation = "fadeIn_extra 0.7s forwards";
  }
}
document.addEventListener("scroll", check_element_visible_on_screen_rooms);
function show_mobile_menu() {
  $(".mobile_nav_content").css(
    "animation",
    "mobile_nav_animation 0.5s forwards"
  );
  $(".mobile_nav_content").css("display", "flex");
 
  $("html").css("overflow-y", "hidden");
}

function hide_mobile_menu() {
  $(".mobile_nav_content").css(
    "animation",
    "mobile_nav_animation2 0.5s forwards"
  );
  setTimeout(() => {
    $(".mobile_nav_content").css("display", "none");
    $(".background_mobile").css("display", "none");
   
    $("html").css("overflow-y", "scroll");
  }, 501);
}

document
  .querySelector(".mobile_icon22")
  .addEventListener("click", hide_mobile_menu);
document
  .querySelector(".hamb_icon")
  .addEventListener("click", show_mobile_menu);

const hide_nav_wide = () => {
  if ($("#nav").css("display") == "flex") {
    $(".navigation_container").css("animation", "hide_nav_wide 1s forwards");
    $(".hamb_wide_screen_icon").css("animation", "rotate_hamb 1s forwards");
    setTimeout(() => {
      $(".navigation_container").css("display", "none");
      $("#nav").css("display", "none");
    }, 1001);
  } else {
    show_nav_wide();
  }
};

document
  .querySelector(".hamb_wide_screen_icon")
  .addEventListener("click", hide_nav_wide);

const show_nav_wide = () => {
  $(".navigation_container").css("animation", "show_nav_wide 0.5s forwards");
  $(".hamb_wide_screen_icon").css(
    "animation",
    "rotate_hamb_back 0.5s forwards"
  );
  setTimeout(() => {
    $("#nav").css("display", "flex");
    $(".navigation_container").css("display", "block");
  }, 501);
};

function show_deserts_menu() {
  $(".salads_dishes_cols").css("display", "none");
  $(".drinks_dishes_cols").css("display", "none");
  $(".starters_dishes_cols").css("display", "none");
  $(".main_dishes_cols").css("display", "none");

  $(".deserts_dishes_cols").css("display", "block");

  display_and_hide_food(".desert_container",".main_container",".starters_container",".salad_container",".drinks_container")

  for (i=1; i<=5; i++) {
    $("#food"+i).addClass("food_kind");
  }
  
  for (i=1; i<=5; i++) {
    $("#food"+i+i).addClass("food_kind");
  }

  $("#food2").removeClass("food_kind");
  $("#food2").addClass("food_kind_active");

  $("#food22").removeClass("food_kind");
  $("#food22").addClass("food_kind_active");
}
document.querySelector("#food22").addEventListener("click", show_deserts_menu);
document.querySelector("#food2").addEventListener("click", show_deserts_menu);
const display_and_hide_food = function(show, hide1, hide2, hide3, hide4) {

  $(hide1).css("display", "none");
  $(hide2).css("display", "none");
  $(hide3).css("display", "none");
  $(hide4).css("display", "none");

  $(show).css("display", "block");

}
function show_mains_menu() {


  display_and_hide_food(".main_dishes_cols",".salads_dishes_cols",".drinks_dishes_cols", ".starters_dishes_cols", ".deserts_dishes_cols" )
  display_and_hide_food(".main_container",".starters_container",".salad_container",".drinks_container",  ".desert_container" )

  for (i=1; i<=5; i++) {
    $("#food"+i).addClass("food_kind");
  }
  
  for (i=1; i<=5; i++) {
    $("#food"+i+i).addClass("food_kind");
  }

  $("#food1").removeClass("food_kind");
  $("#food1").addClass("food_kind_active");
  $("#food11").removeClass("food_kind");
  $("#food11").addClass("food_kind_active");
}

document.querySelector("#food1").addEventListener("click", show_mains_menu);
document.querySelector("#food11").addEventListener("click", show_mains_menu);

function show_starters_menu() {
  display_and_hide_food(".starters_dishes_cols",".main_dishes_cols",".salads_dishes_cols",".drinks_dishes_cols", ".deserts_dishes_cols" )

  display_and_hide_food(".starters_container",".salad_container",".drinks_container", ".main_container", ".desert_container" )

  for (i=1; i<=5; i++) {
    $("#food"+i).addClass("food_kind");
  }
  
  for (i=1; i<=5; i++) {
    $("#food"+i+i).addClass("food_kind");
  }

  $("#food3").removeClass("food_kind");
  $("#food3").addClass("food_kind_active");
  $("#food33").removeClass("food_kind");
  $("#food33").addClass("food_kind_active");
}

document.querySelector("#food3").addEventListener("click", show_starters_menu);
document.querySelector("#food33").addEventListener("click", show_starters_menu);
function show_salads_menu() {
  display_and_hide_food(".salads_dishes_cols",".main_dishes_cols",".drinks_dishes_cols", ".starters_dishes_cols", ".deserts_dishes_cols" )
  display_and_hide_food(".salad_container",".desert_container",".main_container",".starters_container",".drinks_container")

  for (i=1; i<=5; i++) {
    $("#food"+i).addClass("food_kind");
  }
  
  for (i=1; i<=5; i++) {
    $("#food"+i+i).addClass("food_kind");
  }

  $("#food4").removeClass("food_kind");
  $("#food4").addClass("food_kind_active");
  $("#food44").removeClass("food_kind");
  $("#food44").addClass("food_kind_active");
}


document.querySelector("#food4").addEventListener("click", show_salads_menu);
document.querySelector("#food44").addEventListener("click", show_salads_menu);
function show_drinks_menu() {
  display_and_hide_food(".drinks_dishes_cols",".salads_dishes_cols",".main_dishes_cols", ".starters_dishes_cols", ".deserts_dishes_cols" )
  display_and_hide_food(".drinks_container", ".salad_container",".desert_container",".main_container",".starters_container",)
  for (i=1; i<=5; i++) {
    $("#food"+i).addClass("food_kind");
  }
  
  for (i=1; i<=5; i++) {
    $("#food"+i+i).addClass("food_kind");
  }
  
 

  $("#food5").removeClass("food_kind");
  $("#food5").addClass("food_kind_active");

  $("#food55").removeClass("food_kind");
  $("#food55").addClass("food_kind_active");
}
document.querySelector("#food55").addEventListener("click", show_drinks_menu);
document.querySelector("#food5").addEventListener("click", show_drinks_menu);
