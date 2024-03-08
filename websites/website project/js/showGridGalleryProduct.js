



function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  function check_visisblity_element() {
    if (isInViewport(line) ===true) {
      document.querySelector(".nav_grid").style.animation="show_grid_nav 0.3s forwards"
      setTimeout(() => {
        document.querySelector(".nav_grid").style.display="block"
      }, 300);



    }
    else {
      document.querySelector(".nav_grid").style.animation="show_grid_nav_backward 0.3s forwards"
      setTimeout(() => {
        document.querySelector(".nav_grid").style.display="none"
      }, 300);


    }
  }
  const line = document.querySelector(".element_fixed_to_check")
  window.addEventListener("scroll",check_visisblity_element )


showPlastic()


const x_to_close_col_about = document.querySelector(".x_to_close")

const products_switcher1 =  document.querySelector("#prod_switcher1")
const products_switcher2 =  document.querySelector("#prod_switcher2")

const products_desc1 = `<h1>About us</h1>
<p>The company's unique upcycling process not only helps to reduce waste, but also transforms old fabrics and clothing into new and useful products that can be donated to those in need. </p>`

const products_desc2 = `<h1>Expand the reach</h1>
<p>In addition to their sustainable product offerings, the company also donates clothing to those in need and contributes a portion of their profits to charity.</p>`

const show_col_about1 = function(show_content) {
  document.querySelector(".about_display_window_content_background").style.display="block"
  document.querySelector(".about_display_window_content").style.display="block"
  document.querySelector("body").style.overflow="hidden"
  document.querySelector(".about_display_window_content #text_about_window").innerHTML = show_content

}
const hide_col_about1 = function() {
  document.querySelector(".about_display_window_content_background").style.display="none"
  document.querySelector(".about_display_window_content").style.display="none"
  document.querySelector("body").style.overflow="scroll"
  document.querySelector("#about_iframe").style.display="none"
  stopVideos()

}


x_to_close_col_about.addEventListener("click", hide_col_about1)
products_switcher1.addEventListener("click", show_col_about1.bind(null, products_desc1))
products_switcher2.addEventListener("click", show_col_about1.bind(null, products_desc2))