const change_text_title_main = function () {
  const text1 = document.querySelector(".main_text1_display_box");
  const text2 = document.querySelector(".main_text2_display_box");
  const text3 = document.querySelector(".main_text3_display_box");
  const text4 = document.querySelector(".main_text4_display_box");

  const display_each_block = function (text, time1, time2, time3) {
    setTimeout(() => {
      text.style.display = "inline-block";
    }, time1);

    setTimeout(() => {
      text.style.animation = "fadeOut 1s forwards";
    }, time2);

    setTimeout(() => {
      text.style.display = "none";
      text.style.animation = "fadeIn 1s forwards";
    }, time3);
  };

  text1.style.animation = "fadeOut 1s forwards";
  setTimeout(() => {
    text1.style.display = "none";
    text1.style.animation = "fadeIn 1s forwards";
  }, 1001);
  display_each_block(text2, 1100, 3200, 4200);

  display_each_block(text3, 4300, 6300, 7300);

  display_each_block(text4, 7400, 9400, 10400);

  display_each_block(text1, 10500, 12500, 13500);
};

function auto_text_display_main() {
  change_text_title_main();
  setInterval(() => {
    change_text_title_main();
  }, 13500);
}
window.addEventListener("load", auto_text_display_main);

// detect if object is visible on screen function
function get_and_inject_value_from_input() {
  const name = document.querySelector(".feedback_input1").value;
  document.querySelector(".text_dispplay_after_send_feedback").textContent =
    `Thank you for your feedback ` + name + `!`;
}

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}
// ----------------------------------

function detect_feedback_window_height() {
  var elem = document.querySelector(".anchor_feedback_scroll");
  var elem2 = document.querySelector(".anchor_feedback_scroll2");
  if (isScrolledIntoView(elem) == true || isScrolledIntoView(elem2) == true) {
    $(".leave_feed_back_window").css("animation", "fadeIn 0.7s forwards");
  }
}

window.addEventListener("scroll", detect_feedback_window_height);

function show_feedback_window() {
  $(".leave_feed_back_window").css("animation", "fadeOut 0.4s forwards");
  setTimeout(() => {
    $(".leave_feed_back_window").css("display", "none");
    $(".feedback_window").css("display", "flex");
  }, 401);
}
document
  .querySelector(".leave_feed_back_window")
  .addEventListener("click", show_feedback_window);

function close_chat_feedback_window_submit() {
  $(".feedback_window").css("display", "none");
  $(".feedback_window_message").css("display", "flex");
  get_and_inject_value_from_input();
  setTimeout(() => {
    $(".feedback_window_message").css("animation", "fadeOut 1s forwards");
    setTimeout(() => {
      $(".feedback_window_message").css("display", "none");
    }, 1001);
  }, 1001);
}
document
  .querySelector(".feedback_button_window")
  .addEventListener("click", close_chat_feedback_window_submit);

// rotate arrows_read_more
const rotate1 = () => {
  $("#arrows_gallery").css("transform", "rotatez(90deg)");
};
const rotate2 = () => {
  $("#arrows_gallery").css("transform", "rotatez(0deg)");
};

document.querySelector(".text_gallery3").addEventListener("mouseover", rotate1);
document
  .querySelector(".text_gallery3")
  .addEventListener("mouseleave", rotate2);

const rotate3 = () => {
  $("#feedback_arrow").css("transform", "rotatez(90deg)");
};
const rotate4 = () => {
  $("#feedback_arrow").css("transform", "rotatez(0deg)");
};

document
  .querySelector(".see_more_feedback")
  .addEventListener("mouseover", rotate3);
document
  .querySelector(".see_more_feedback")
  .addEventListener("mouseleave", rotate4);

const rotate5 = () => {
  $("#read_more_arrow").css("transform", "rotatez(90deg)");
};
const rotate6 = () => {
  $("#read_more_arrow").css("transform", "rotatez(0deg)");
};

document
  .querySelector(".mid_section_text4")
  .addEventListener("mouseover", rotate5);
document
  .querySelector(".mid_section_text4")
  .addEventListener("mouseleave", rotate6);

// checking if element is visible on screen near_text

function check_element_visible_on_screen_near() {
  const anchor_near_text = document.querySelector(".anchor_near");
  const near_text = document.querySelector(".text_near_container");

  const rect = anchor_near_text.getBoundingClientRect();
  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) {
    near_text.style.visibility = "visible";
    near_text.style.animation = "fadeIn_extra 0.7s forwards";
  }
}
document.addEventListener("scroll", check_element_visible_on_screen_near);

// checking if element is visible on screen text1

const anchor_mid_text = document.querySelector(
  ".anchor_fade_in_effect_mid_text"
);
const top_text = document.querySelector(".mid_section_text_container");

function check_element_visible_on_screen() {
  const rect = anchor_mid_text.getBoundingClientRect();
  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) {
    top_text.style.visibility = "visible";
    top_text.style.animation = "fadeIn_extra 0.7s forwards";
  }
}
document.addEventListener("scroll", check_element_visible_on_screen);

// checking if element is visible on screen text2

const anchor_mid_text2 = document.querySelector(
  ".anchor_fade_in_effect_mid_text2"
);
const top_text2 = document.querySelector(".gallery_text_content");

function check_element_visible_on_screen2() {
  const rect = anchor_mid_text2.getBoundingClientRect();
  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) {
    top_text2.style.visibility = "visible";
    top_text2.style.animation = "fadeIn_extra 0.7s forwards";
  }
}
document.addEventListener("scroll", check_element_visible_on_screen2);
// checking if element is visible on screen text3

const anchor_mid_text3 = document.querySelector(
  ".anchor_fade_in_effect_mid_text3"
);
const top_text3 = document.querySelector(".hotel_offers_section_text");

function check_element_visible_on_screen3() {
  const rect = anchor_mid_text3.getBoundingClientRect();
  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) {
    top_text3.style.visibility = "visible";
    top_text3.style.animation = "fadeIn_extra 0.7s forwards";
  }
}
document.addEventListener("scroll", check_element_visible_on_screen3);

// checking if element is visible on screen text3

const anchor_mid_text4 = document.querySelector(
  ".anchor_fade_in_effect_mid_text4"
);
const top_text4 = document.querySelector(".feedback_section_text_container");

function check_element_visible_on_screen4() {
  const rect = anchor_mid_text4.getBoundingClientRect();
  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) {
    top_text4.style.visibility = "visible";
    top_text4.style.animation = "fadeIn_extra 0.7s forwards";
  }
}
document.addEventListener("scroll", check_element_visible_on_screen4);

check_element_visible_on_screen();
function show_mobile_menu() {
  $(".mobile_nav_content").css(
    "animation",
    "mobile_nav_animation 0.5s forwards"
  );
  $(".mobile_nav_content").css("display", "flex");
  $(".background_mobile").css("display", "block");

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

function show_mobile_menu_more() {
  $(".mobile_nav_content").css("animation", "fadeOut 0.5s forwards");
  $(".mobile_nav_content_more").css("animation", "fadeIn 0.5s forwards");
  setTimeout(() => {
    $(".mobile_nav_content").css("display", "none");
    $(".mobile_nav_content_more").css("display", "flex");
  }, 501);
}
function hide_mobile_menu_more() {
  $(".mobile_nav_content_more").css(
    "animation",
    "mobile_nav_animation2 0.5s forwards"
  );
  setTimeout(() => {
    $(".mobile_nav_content_more").css("display", "none");
    $(".background_mobile").css("display", "none");
    $("body").css("overflow-y", "scroll");
    $("html").css("overflow-y", "scroll");
  }, 501);
}

function hide_mobile_menu_more_go_for_prev() {
  $(".mobile_nav_content_more").css("animation", "fadeOut 0.5s forwards");
  setTimeout(() => {
    $(".mobile_nav_content_more").css("display", "none");
    $(".mobile_nav_content").css("animation", "fadeIn 0.5s forwards");
    $(".mobile_nav_content").css("display", "flex");
  }, 501);
}

document
  .querySelector(".mobile_icon1")
  .addEventListener("click", hide_mobile_menu_more_go_for_prev);

document
  .getElementById("more_mobile_link")
  .addEventListener("click", show_mobile_menu_more);
document
  .querySelector(".mobile_icon2")
  .addEventListener("click", hide_mobile_menu_more);

document
  .querySelector(".mobile_icon22")
  .addEventListener("click", hide_mobile_menu);
document
  .querySelector(".hamb_icon")
  .addEventListener("click", show_mobile_menu);

// hide nav wide screen
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

// hide nav wide screen

// show nav wide screen
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

// show nav wide screen
changeNavToMobile = function () {
  // -------links socials----------
  if ($(window).width() < 800) {
    $(".links_socials_book_container").css("display", "none");
    $(".hamb_wide_screen_icon").css("display", "none");

    $(".hamb_icon").css("display", "block");
    $(".mobile_nav").css("display", "block");
    $(".mobile_nav_book").css("display", "block");
    // -------links socials----------
  } else {
    // -------links socials----------
    $(".hamb_wide_screen_icon").css("display", "block");
    $(".links_socials_book_container").css("display", "flex");
    $(".hamb_icon").css("display", "block");
    $(".mobile_nav").css("display", "none");
    $(".mobile_nav_book").css("display", "none");

    // -------links socials----------
  }
};
const disable_logo_nav = () => {
  if ($(window).width() < 1000) {
    $("#nav").css("width", "100%");
    $(".logo_hamb_container").css("display", "none");
  } else {
    $("#nav").css("width", "auto");
    $(".logo_hamb_container").css("display", "flex");
  }
};

window.addEventListener("resize", disable_logo_nav); // change it on resize listener
window.addEventListener("load", disable_logo_nav); // change it on load listener

window.addEventListener("resize", changeNavToMobile); // change it on resize listener
window.addEventListener("load", changeNavToMobile); // change it on load listener

function change_props_of_mid_section2() {
  // ----------gallery---------

  if ($(window).width() < 1000) {
    $(".img_container_gallery1").css("width", "100%");
    $(".img_container_gallery2").css("width", "100%");

    $(".img_container_gallery1").css("height", "60vw");
    $(".img_container_gallery2").css("height", "60vw");
    $(".img_container_gallery3").css("height", "60vw");
    $(".img_container_gallery4").css("height", "60vw");
    $(".img_container_gallery5").css("height", "60vw");

    $(".gallery_text_content").css("margin-left", "0");
    $(".gallery_text_content").css("margin-right", "0");

    $(".img_container_gallery1").css("margin-bottom", "30px");
    $(".img_container_gallery2").css("margin-bottom", "30px");
    $(".img_container_gallery3").css("margin-bottom", "30px");
    $(".img_container_gallery4").css("margin-bottom", "30px");
    $(".img_container_gallery5").css("margin-bottom", "30px");

    $(".gallery_col1").css("flex-direction", "column");
    $(".img_container_gallery_all").css("flex-direction", "column");

    // $(".img_container").css("margin-right","0%");
    // $(".img_container").css("margin-left","0%");
    // $(".mid_section").css("flex-direction","column");
    // $(".img_container").css("width","100%");
    // $(".mid_section_text_container").css("width","100%");

    $(".gallery_col1").css("height", "100%");
    $(".img_container_gallery_all").css("height", "100%");
    $(".gallery_col1").css("height", "100%");
    // ----------gallery---------
  } else {
    // ----------gallery---------

    $(".img_container_gallery1").css("height", "auto");
    $(".img_container_gallery2").css("height", "auto");
    $(".img_container_gallery3").css("height", "500px");
    $(".img_container_gallery4").css("height", "500px");
    $(".img_container_gallery5").css("height", "500px");

    $(".gallery_text_content").css("margin-left", "25%");
    $(".gallery_text_content").css("margin-right", "25%");

    $(".img_container_gallery1").css("margin-bottom", "2%");
    $(".img_container_gallery2").css("margin-bottom", "2%");
    $(".img_container_gallery3").css("margin-bottom", "2%");
    $(".img_container_gallery4").css("margin-bottom", "2%");
    $(".img_container_gallery5").css("margin-bottom", "2%");

    $(".gallery_col1").css("flex-direction", "row");
    $(".img_container_gallery_all").css("flex-direction", "row");

    // $(".mid_section_text_container").css("width","50%");
    // $(".mid_section").css("flex-direction","row");
    // $(".img_container").css("width","50%");
    $(".gallery_col1").css("height", "400px");
    $(".gallery_col1").css("height", "400px");

    // ----------gallery---------
  }
}

window.addEventListener("resize", change_props_of_mid_section2); // change it on resize listener
window.addEventListener("load", change_props_of_mid_section2); // change it on load listener

// ---------slider function --------

function change_color_arrow1() {
  $(".watch_vide_arrow").css(
    "filter",
    "invert(0%) sepia(0%) saturate(13%) hue-rotate(235deg) brightness(99%) contrast(105%)",
    1000
  );
}
function change_color_arrow2() {
  $(".watch_vide_arrow").css(
    "filter",
    "invert(100%) sepia(0%) saturate(7472%) hue-rotate(183deg) brightness(95%) contrast(106%)",
    1000
  );
}
document
  .querySelector(".watch_video_button")
  .addEventListener("mouseover", change_color_arrow1);
document
  .querySelector(".watch_video_button")
  .addEventListener("mouseleave", change_color_arrow2);

function show_hidden_iframe() {
  $(".feedback_container_box").css("display", "none");
  $("html").css("overflow-y", "hidden");

  $(".hidden_video_iframe_content").css(
    "animation",
    "fadeIn_animation 0.7s forwards"
  );
  $(".hidden_video_iframe_content").css("display", "block");
}
document
  .querySelector(".watch_video_button")
  .addEventListener("click", show_hidden_iframe);

function hide_hidden_iframe() {
  $("html").css("overflow-y", "scroll");
  $(".hidden_video_iframe_content").css(
    "animation",
    "fadeOut_animation 0.7s forwards"
  );
  setTimeout(() => {
    $(".hidden_video_iframe_content").css("display", "none");

    // stop video function

    document.querySelectorAll("iframe").forEach((v) => {
      v.src = v.src;
    });
    document.querySelectorAll("video").forEach((v) => {
      v.pause();
    });

    // stop video function
    $(".feedback_container_box").css("display", "block");
  }, 700);
}
document
  .querySelector(".bg_color")
  .addEventListener("click", hide_hidden_iframe);

// gallery show more function

function show_more_gallery() {
  $(".gallery_col3").css("display", "block");
  $(".gallery_col4").css("display", "block");
  $(".text_gallery3").css("display", "none");
}
document
  .querySelector(".text_gallery3")
  .addEventListener("click", show_more_gallery);

function read_more_display_text() {
  $(".mid_section_text4").css("display", "none");
  $(".mid_section_text3_hiden").css("display", "block");
}
document
  .querySelector(".mid_section_text4")
  .addEventListener("click", read_more_display_text);

// show extra nav
function show_extra_navigator() {
  $(".extra_nav_slide_down").css(
    "animation",
    "fadeIn2_menu_extra_nav 0.4s forwards"
  );
  if ($(".extra_nav_slide_down").css("display") == "none") {
    $(".extra_nav_slide_down").css("display", "flex");
  } else {
    $(".extra_nav_slide_down").css(
      "animation",
      "fadeIn2_menu_extra_nav_close 0.4s forwards"
    );
    setTimeout(() => {
      $(".extra_nav_slide_down").css("display", "none");
    }, 300);
  }
}

document
  .querySelector("#more_nav")
  .addEventListener("click", show_extra_navigator);

// show extra nav

function change_square_customer1() {
  $("#square1").attr("src", "./icons/square_full.svg");
  for (i = 2; i <= 5; i++) {
    $("#square" + i).attr("src", "./icons/square.svg");
  }
}
function change_square_customer2() {
  $("#square1").attr("src", "./icons/square.svg");
  $("#square2").attr("src", "./icons/square_full.svg");
  for (i = 3; i <= 5; i++) {
    $("#square" + i).attr("src", "./icons/square.svg");
  }
}
function change_square_customer3() {
  for (i = 1; i <= 2; i++) {
    $("#square" + i).attr("src", "./icons/square.svg");
  }
  $("#square3").attr("src", "./icons/square_full.svg");
  for (i = 4; i <= 5; i++) {
    $("#square" + i).attr("src", "./icons/square.svg");
  }
}
function change_square_customer4() {
  for (i = 1; i <= 3; i++) {
    $("#square" + i).attr("src", "./icons/square.svg");
  }
  $("#square4").attr("src", "./icons/square_full.svg");
  $("#square5").attr("src", "./icons/square.svg");
}
function change_square_customer5() {
  for (i = 1; i <= 4; i++) {
    $("#square" + i).attr("src", "./icons/square.svg");
  }
  $("#square5").attr("src", "./icons/square_full.svg");
}

// feedback_slider
function show_customer1() {
  change_square_customer1();

  $(".customer_plate0").css("display", "flex");
  for (i = 1; i <= 4; i++) {
    $(".customer_plate" + i).css("display", "none");
  }
}

function show_customer2() {
  change_square_customer2();

  $("#square2").attr("src", "./icons/square_full.svg");
  $(".customer_plate0").css("display", "none");
  $(".customer_plate1").css("display", "flex");
  for (i = 2; i <= 4; i++) {
    $(".customer_plate" + i).css("display", "none");
  }
}

function show_customer3() {
  change_square_customer3();
  for (i = 0; i <= 1; i++) {
    $(".customer_plate" + i).css("display", "none");
  }
  $(".customer_plate2").css("display", "flex");
  for (i = 3; i <= 4; i++) {
    $(".customer_plate" + i).css("display", "none");
  }
}

function show_customer4() {
  change_square_customer4();
  for (i = 0; i <= 2; i++) {
    $(".customer_plate" + i).css("display", "none");
  }
  $(".customer_plate3").css("display", "flex");
  $(".customer_plate4").css("display", "none");
}

function show_customer5() {
  change_square_customer5();
  for (i = 0; i <= 3; i++) {
    $(".customer_plate" + i).css("display", "none");
  }
  $(".customer_plate4").css("display", "flex");
}

document.querySelector("#square1").addEventListener("click", show_customer1);
document.querySelector("#square2").addEventListener("click", show_customer2);
document.querySelector("#square3").addEventListener("click", show_customer3);
document.querySelector("#square4").addEventListener("click", show_customer4);
document.querySelector("#square5").addEventListener("click", show_customer5);

// feedback_slider

function review_slider() {
  if ($(".customer_plate0").css("display") == "flex") {
    show_customer2();
  } else if ($(".customer_plate1").css("display") == "flex") {
    show_customer3();
  } else if ($(".customer_plate2").css("display") == "flex") {
    show_customer4();
  } else if ($(".customer_plate3").css("display") == "flex") {
    show_customer5();
  } else if ($(".customer_plate4").css("display") == "flex") {
    show_customer1();
  }
}

document
  .querySelector(".feedback_arrow_right")
  .addEventListener("click", review_slider);

for (i = 2; i <= 5; i++) {
  document
    .querySelector(".feedback_arrow_right" + i)
    .addEventListener("click", review_slider);
}

for (i = 1; i <= 5; i++) {
  document
    .querySelector(".arrow_img_container_mobile" + i)
    .addEventListener("click", review_slider);
}

// show more feedbacks

function show_more_feedback() {
  $(".review_section").css("display", "block");
  $(".see_more_feedback").css("display", "none");
}

document
  .querySelector(".see_more_feedback")
  .addEventListener("click", show_more_feedback);
