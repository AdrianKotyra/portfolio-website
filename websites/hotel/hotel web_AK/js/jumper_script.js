function beta() {
  const img1 = document.querySelector(".near_img_slider").scrollWidth;
  document.querySelector(".near_box_slider").scrollBy({
    top: 0,
    left: img1,
    behavior: "smooth",
  });
}

document.getElementById("near_arrow_right").addEventListener("click", beta);

function beta2() {
  const img2 = document.querySelector(".near_img_slider").scrollWidth;
  document.querySelector(".near_box_slider").scrollBy({
    top: 0,
    left: -img2,
    behavior: "smooth",
  });
}

document.querySelector("#near_arrow_left").addEventListener("click", beta2);

// scroll to section about

// ---------slider function --------

const slider_switcher = () => {
  timer2 = setInterval(() => {
    document.querySelector(".offers_room_container_imgs").scrollLeft +=
      $(".offers_room_container_imgs").width() * 1;
  }, 1500);

  timer = setInterval(() => {
    document.querySelector(".offers_room_container_imgs").scrollLeft -= 5999;
  }, 6001);
};

slider_switcher();

// stop smooth himp into clear timer function
function clear_timer() {
  clearInterval(timer);
  clearInterval(timer2);
}

// stop smooth himp into clear timer function

const close_more = () => {
  $(".extra_nav_slide_down").css(
    "animation",
    "fadeIn2_menu_extra_nav_close 0.4s forwards"
  );
  setTimeout(() => {
    $(".extra_nav_slide_down").css("display", "none");
  }, 300);
};

function jump_to_section_about_mobile() {
  clear_timer();
  document
    .querySelector(".about_anchor")
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
  hide_mobile_menu();
  slider_switcher();
}
document
  .querySelector("#about_link_jumper")
  .addEventListener("click", jump_to_section_about_mobile);

function jump_to_section_contact() {
  clear_timer();
  document
    .querySelector(".contact_section")
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
  close_more();
  slider_switcher();
}
document
  .querySelector("#contact_nav")
  .addEventListener("click", jump_to_section_contact);

function jump_to_section_contact_mobile() {
  clear_timer();
  document
    .querySelector(".contact_section")
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
  hide_mobile_menu();
  slider_switcher();
}

document
  .querySelector("#contact_link_jumper")
  .addEventListener("click", jump_to_section_contact_mobile);

function jump_to_section_feedback() {
  clear_timer();
  document
    .querySelector(".anchor_feedback_scroll")
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
  close_more();
  slider_switcher();
}
document
  .querySelector("#feedback_nav")
  .addEventListener("click", jump_to_section_feedback);
function jump_to_section_feedback_mobile() {
  document
    .querySelector(".anchor_feedback_scroll")
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
  clear_timer();
  hide_mobile_menu();
  slider_switcher();
}

document
  .querySelector("#feedback_link_jumper")
  .addEventListener("click", jump_to_section_feedback_mobile);

function jump_to_section_about() {
  clear_timer();
  document
    .querySelector(".about_anchor")
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
  close_more();
  slider_switcher();
}

document
  .querySelector("#about_nav")
  .addEventListener("click", jump_to_section_about);

function jump_to_section_gallery() {
  clear_timer();
  document
    .querySelector(".anchor_gallery_scroll")
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
  close_more();
  slider_switcher();
}

document
  .querySelector("#gallery_nav")
  .addEventListener("click", jump_to_section_gallery);

function jump_to_section_gallery_mobiler() {
  clear_timer();
  document
    .querySelector(".anchor_gallery_scroll")
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
  hide_mobile_menu();
  slider_switcher();
}

document
  .querySelector("#gallery_link_jumper")
  .addEventListener("click", jump_to_section_gallery_mobiler);
