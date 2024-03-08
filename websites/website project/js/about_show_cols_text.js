
const video_col1_content_html = `
<iframe id="about_iframe" src="https://www.youtube.com/embed/CKbxSRjldpw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
`



const about_col1_content_html = `<h1>Create beautiful and unique products</h1>
<p>The company's primary goal could be to produce high-quality, visually appealing products that stand out from what competitors are offering. </p>
<p>This could involve using a variety of colors, patterns, and textures to create designs that appeal to a wide range of customers.
</p>

`


const about_col2_content_html = `<h1>Promote sustainability</h1>
<p>The founders of the company are clearly committed to reducing waste and promoting sustainability. </p>
<p>One of the company's goals could be to continue to find new ways to reduce waste and create products that are environmentally friendly.</p>
<p>For example, they could use organic or recycled materials, or focus on developing products that are designed to last a long time.</p>`



const about_col3_content_html = `<h1>Build a loyal customer base:</h1>
<p>In order to be successful, the company will need to build a loyal customer base.  </p>
<p>This could involve offering exceptional customer service, creating a strong brand identity, and developing a reputation for high-quality, sustainable products.</p>
<p>By building a strong following of repeat customers, the company can ensure steady sales and revenue.</p>`


const about_col4_content_html = `<h1>Expand the reach</h1>
<p> Finally, the company may want to focus on expanding its reach and entering new markets. </p>
<p>This could involve developing new product lines or expanding into different geographic regions.</p>
<p>By expanding their reach, the company can increase sales and grow its customer base over time.</p>`


const products_desc1 = `<h1>Expand the reach</h1>
<p> Finally, the company may want to focus on expanding its reach and entering new markets. </p>
<p>This could involve developing new product lines or expanding into different geographic regions.</p>
<p>By expanding their reach, the company can increase sales and grow its customer base over time.</p>`

const products_desc2 = `<h1>Expand the reach</h1>
<p> Finally, the company may want to focus on expanding its reach and entering new markets. </p>
<p>This could involve developing new product lines or expanding into different geographic regions.</p>
<p>By expanding their reach, the company can increase sales and grow its customer base over time.</p>`


const about_switcher1 = document.querySelector("#about_cont1")
const about_switcher2 = document.querySelector("#about_cont2")
const about_switcher3 = document.querySelector("#about_cont3")
const about_switcher4 = document.querySelector("#about_cont4")
const video_switcher = document.querySelector("#video_button")


const x_to_close_col_about = document.querySelector(".x_to_close")

const show_col_about = function(show_content) {
  document.querySelector(".about_display_window_content_background").style.display="block"
  document.querySelector(".about_display_window_content").style.display="block"
  document.querySelector("body").style.overflow="hidden"
  document.querySelector(".about_display_window_content #text_about_window").innerHTML = show_content

}

// -------------function to stop all videos---------------
var stopVideos = function () {
	var videos = document.querySelectorAll('iframe, video');
	Array.prototype.forEach.call(videos, function (video) {
		if (video.tagName.toLowerCase() === 'video') {
			video.pause();
		} else {
			var src = video.src;
			video.src = src;
		}
	});
};

const hide_col_about = function() {
  document.querySelector(".about_display_window_content_background").style.display="none"
  document.querySelector(".about_display_window_content").style.display="none"
  document.querySelector("body").style.overflow="scroll"
  document.querySelector("#about_iframe").style.display="none"
  stopVideos()

}


x_to_close_col_about.addEventListener("click", hide_col_about)

video_switcher.addEventListener("click", show_col_about.bind(null, video_col1_content_html))


about_switcher1.addEventListener("click", show_col_about.bind(null, about_col1_content_html))
about_switcher2.addEventListener("click", show_col_about.bind(null, about_col2_content_html))
about_switcher3.addEventListener("click", show_col_about.bind(null, about_col3_content_html))
about_switcher4.addEventListener("click", show_col_about.bind(null, about_col4_content_html))

