function Open_hamb_mobile_menu() {
    $(".navigation_container_hamburger").css("display", "none")
    $(".mobile_nav").css("display", "block")

    
}







document.querySelector(".navigation_container_hamburger").addEventListener("click", Open_hamb_mobile_menu)



function close_hamb_mobile_menu() {
    $(".mobile_nav").css("animation", "nav_mobile_close_animation 0.7s forwards")
    setTimeout(() => {
        $(".mobile_nav").css("display", "none")
        $(".navigation_container_hamburger").css("display", "block")
        $(".mobile_nav").css("animation", "nav_mobile_open_animation 0.7s forwards")
        
       
    }, 500);

   

    
}



document.querySelector(".icons_cross").addEventListener("click", close_hamb_mobile_menu)


changeNavToMobile = function() {
   
if ($(window).width() > 799) {
    $(".navigation_container_hamburger").css("display", "none")
    $(".nav_hamb").css("display", "none")
    
    $(".mobile_nav").css("display", "none")
    
   

}
else {
    $(".navigation_container_hamburger").css("display", "block")
    $(".nav_hamb").css("display", "block")
    

}
} 
window.addEventListener("scroll",changeNavToMobile)
window.addEventListener("resize",changeNavToMobile) // change it on resize listener
window.addEventListener("load", changeNavToMobile)// change it on load listener
function hide_background_default () {
    if (window.innerWidth<=800 )
    {$(".nav_background").css("display", "none")

    }
    else {
        {$(".nav_background").css("display", "block")
    }

}}
window.addEventListener("resize", hide_background_default)

function hide_background_nav(){
    if (window.scrollY<<200 && window.innerWidth>=800 ) {
    $(".nav_background").css("animation", "background_nav_animation2 1s forwards")
    
}}

window.addEventListener("scroll", hide_background_nav)
function move_nav_position_on_scroll() {
    if (window.scrollY>>200 && window.innerWidth>=800) {
        
        
      

        $(".background_nav").css("display", "block")
        
       
        $("#link1").css("animation", "change_nav_position_animation_home 2s forwards")
        $("#link2").css("animation", "change_nav_position_animation_resume 2s forwards")
        $("#link3").css("animation", "change_nav_position_animation_github 2s forwards")
        $("#link4").css("animation", "change_nav_position_animation_websites 2s forwards")
        $("#link5").css("animation", "change_nav_position_animation_contact 2s forwards")




        $("#link1").css("position", "fixed")
        $("#link2").css("position", "fixed")
        $("#link3").css("position", "fixed")
        $("#link4").css("position", "fixed")
        $("#link5").css("position", "fixed")

       


    }
    else {
        if (window.scrollY<<200 && window.innerWidth>=800) {

      
        
        $(".nav_background").css("animation", "background_nav_animation 1s forwards")
        setTimeout(() => {
            $(".nav_background").css("display", "block")
            
        }, 1001);
        
       

        $(".background_nav").css("display", "none")

        $("#link1").css("animation", "change_nav_position_animation_home_back 1s forwards")
        $("#link2").css("animation", "change_nav_position_animation_resume_back 1s forwards")
        $("#link3").css("animation", "change_nav_position_animation_github_back 1s forwards")
        $("#link4").css("animation", "change_nav_position_animation_websites_back 1s forwards")
        $("#link5").css("animation", "change_nav_position_animation_contact_back 1s forwards")

     

    }  }

}

window.addEventListener("scroll", move_nav_position_on_scroll)


function background_funct_off() {
    if (window.innerWidth <800) {
       
       
        $(".background_nav").css("display", "none")
    }

    
}
window.addEventListener("scroll", background_funct_off)
window.addEventListener("resize", background_funct_off)



// ------------show github slide down -----------
var timer;

function open_github_slide_down() {
    timer = setTimeout(() => {
        $("#navigation_slide_off_websites").addClass("slide_up_animation");
        $("#navigation_slide_off_resume").addClass("slide_up_animation");
        setTimeout(() => {

            $("#link4").css("font-size", "1.5rem");
            $("#link4").css("margin-top", "20px");
            $("#link2").css("font-size", "1.5rem");
            $("#link2").css("margin-top", "20px");
            $("#link1").css("transform", "1.5rem");
            $("#link1").css("margin-top", "20px");

            $("#link1").css("color", "rgb(189, 188, 188)");
            $("#link2").css("color", "rgb(189, 188, 188)");
            $("#link4").css("color", "rgb(189, 188, 188)");

            $("#link3").css("font-size", "3rem");
            $("#link3").css("margin", "0");
            $("#navigation_slide_off_websites").css("display", "none")
            $("#navigation_slide_off_resume").css("display", "none")
            $("#link3").css("color", "white");
            $("#navigation_slide_off_github").removeClass("slide_up_animation");
            $("#navigation_slide_off_github").css("display", "block")
            $("#navigation_slide_off_github").addClass("slide_down_animation");
            
            
        }, 140);
        
    }, 100);
    
}
function clear_timer (){
    clearTimeout(timer)
}

document.querySelector("#link1").addEventListener("mouseleave", clear_timer)   
document.querySelector("#link2").addEventListener("mouseleave", clear_timer)  
document.querySelector("#link3").addEventListener("mouseleave", clear_timer) 
document.querySelector("#link4").addEventListener("mouseleave", clear_timer) 

function close_github_slide_down() {
    $("#link5").css("color", "rgb(189, 188, 188)");
    $("#link4").css("color", "rgb(189, 188, 188)");
    $("#link3").css("color", "rgb(189, 188, 188)");
    $("#link2").css("color", "rgb(189, 188, 188)");
    $("#link1").css("color", "rgb(189, 188, 188)");
 
    $("#navigation_slide_off_github").removeClass("slide_down_animation");
    $("#navigation_slide_off_github").addClass("slide_up_animation");
    document.querySelector(".link_description").innerHTML=""; 
    document.querySelector(".link_description_websites").innerHTML=""; 
    $("#link3").css("font-size", "1.5rem");
    $("#link3").css("margin-top", "20px");
    
}

document.querySelector("#link3").addEventListener("mouseover", open_github_slide_down)
document.querySelector("#navigation_slide_off_github").addEventListener("mouseleave", close_github_slide_down)


// ------------show github slide down -----------





function open_websites_slide_down() {
    timer = setTimeout(() => {
        $("#navigation_slide_off_github").addClass("slide_up_animation");
        $("#navigation_slide_off_resume").addClass("slide_up_animation");
        setTimeout(() => {
            $("#link2").css("font-size", "1.5rem");
            $("#link2").css("margin-top", "20px");
            $("#link3").css("font-size", "1.5rem");
            $("#link3").css("margin-top", "20px");
            $("#link1").css("font-size", "1.5rem");
            $("#link1").css("margin-top", "20px");

            $("#link1").css("color", "rgb(189, 188, 188)");
            $("#link2").css("color", "rgb(189, 188, 188)");
            $("#link3").css("color", "rgb(189, 188, 188)");

            $("#link4").css("font-size", "3rem");
            $("#link4").css("margin", "0");
            $("#navigation_slide_off_resume").css("display", "none")
            $("#navigation_slide_off_github").css("display", "none")
            $("#link4").css("color", "white");
            $("#navigation_slide_off_websites").removeClass("slide_up_animation");
            $("#navigation_slide_off_websites").css("display", "block")
            $("#navigation_slide_off_websites").addClass("slide_down_animation");
        
        }, 140);
        
    }, 100);
   
    

}

    
function close_open_websites_slide_down_slide_down() {
    $("#link5").css("color", "rgb(189, 188, 188)");
    $("#link4").css("color", "rgb(189, 188, 188)");
    $("#link3").css("color", "rgb(189, 188, 188)");
    $("#link2").css("color", "rgb(189, 188, 188)");
    $("#link1").css("color", "rgb(189, 188, 188)");
    $("#navigation_slide_off_websites").removeClass("slide_down_animation");
    $("#navigation_slide_off_websites").addClass("slide_up_animation");
    document.querySelector(".link_description_websites").innerHTML=""; 
    $("#link4").css("font-size", "1.5rem");
    $("#link4").css("margin-top", "20px");
   
   

}


document.querySelector("#link4").addEventListener("mouseover", open_websites_slide_down)
document.querySelector("#navigation_slide_off_websites").addEventListener("mouseleave", close_open_websites_slide_down_slide_down)


// ------------show websites slide down -----------


// ------------show resume slide down -----------


function open_slide_home() {
    timer = setTimeout(() => {
        $("#link1").css("font-size", "3rem");
        $("#link1").css("margin", "0"); 
        $("#link1").css("color", "white"); 

        $("#link3").css("color", "rgb(189, 188, 188)");
        $("#link2").css("color", "rgb(189, 188, 188)");
        $("#link4").css("color", "rgb(189, 188, 188)");

        $("#link2").css("font-size", "1.5rem");
        $("#link2").css("margin-top", "20px");
        $("#link4").css("font-size", "1.5rem");
        $("#link4").css("margin-top", "20px");
        $("#link3").css("font-size", "1.5rem");
        $("#link3").css("margin-top", "20px");
        
    }, 100);
   
   
   
}

 
function close_slide_home() {
    $("#link1").css("color", "rgb(189, 188, 188)"); 
    $("#link1").css("font-size", "1.5rem");
    $("#link1").css("margin-top", "20px");
}
document.getElementById("link1").addEventListener("mouseleave", close_slide_home)
document.getElementById("link1").addEventListener("mouseover", open_slide_home)


function open_slide_contact() {
    timer = setTimeout(() => {
        $("#link5").css("font-size", "3rem");
        $("#link5").css("margin", "0"); 
        $("#link5").css("color", "white"); 

        $("#link3").css("color", "rgb(189, 188, 188)");
        $("#link1").css("color", "rgb(189, 188, 188)");
        $("#link4").css("color", "rgb(189, 188, 188)");

        $("#link1").css("font-size", "1.5rem");
        $("#link1").css("margin-top", "20px");
        $("#link2").css("font-size", "1.5rem");
        $("#link2").css("margin-top", "20px");
        $("#link4").css("font-size", "1.5rem");
        $("#link4").css("margin-top", "20px");
        $("#link3").css("font-size", "1.5rem");
        $("#link3").css("margin-top", "20px");
        
    }, 100);
   
   
   
}

 
function close_slide_contact() {
    $("#link5").css("color", "rgb(189, 188, 188)");
    $("#link4").css("color", "rgb(189, 188, 188)");
    $("#link3").css("color", "rgb(189, 188, 188)");
    $("#link2").css("color", "rgb(189, 188, 188)");
    $("#link1").css("color", "rgb(189, 188, 188)");
    $("#link5").css("color", "rgb(189, 188, 188)"); 
    $("#link5").css("font-size", "1.5rem");
    $("#link5").css("margin-top", "20px");
}
document.getElementById("link5").addEventListener("mouseleave", clear_timer)

document.getElementById("link5").addEventListener("mouseleave", close_slide_contact)
document.getElementById("link5").addEventListener("mouseover", open_slide_contact)

function open_resume_slide_down() {
    timer = setTimeout(() => {
        $("#navigation_slide_off_websites").addClass("slide_up_animation");
        $("#navigation_slide_off_github").addClass("slide_up_animation");
        setTimeout(() => {


            $("#link3").css("color", "rgb(189, 188, 188)");
            $("#link1").css("color", "rgb(189, 188, 188)");
            $("#link4").css("color", "rgb(189, 188, 188)");

            $("#link4").css("font-size", "1.5rem");
            $("#link4").css("margin-top", "20px");
            $("#link3").css("font-size", "1.5rem");
            $("#link3").css("margin-top", "20px");
            $("#link1").css("font-size", "1.5rem");
            $("#link1").css("margin-top", "20px");
            $("#link5").css("font-size", "1.5rem");
            $("#link5").css("margin-top", "20px");

            $("#link2").css("font-size", "3rem");
            $("#link2").css("margin", "0");
           
            
            $("#navigation_slide_off_websites").css("display", "none")
            $("#navigation_slide_off_github").css("display", "none")
            $("#link2").css("color", "white");
            $("#navigation_slide_off_resume").removeClass("slide_up_animation");
            $("#navigation_slide_off_resume").css("display", "block")
            $("#navigation_slide_off_resume").addClass("slide_down_animation");
            
            
        }, 140);
        
    }, 100);
   

   

}

    
function close_open_resume_slide_down_slide_down() {
    
    $("#link5").css("color", "rgb(189, 188, 188)");
    $("#link4").css("color", "rgb(189, 188, 188)");
    $("#link3").css("color", "rgb(189, 188, 188)");
    $("#link2").css("color", "rgb(189, 188, 188)");
    $("#link1").css("color", "rgb(189, 188, 188)");
   
    $("#navigation_slide_off_resume").removeClass("slide_down_animation");
    $("#navigation_slide_off_resume").addClass("slide_up_animation");
    $("#link2").css("font-size", "1.5rem");
    $("#link2").css("margin-top", "20px");
    
    
   
   

}
document.getElementById("link2").addEventListener("mouseover", open_resume_slide_down)
document.querySelector("#navigation_slide_off_resume").addEventListener("mouseleave", close_open_resume_slide_down_slide_down)

// ------------show resume slide down -----------

// change image in nav extra github

function change_image_github () {
    if (document.querySelector("#links_image").getAttribute('src')  == './img/Python-Emblem.png') {
    } else {
        $(".link_description").removeClass("animation_class_links");
        document.querySelector(".link_description").innerHTML="My Python projects."; 
        $("#links_image").removeClass("animation_class_links");
        timer = setTimeout(() => {
            $("#links_image").attr('src','./img/Python-Emblem.png')
            $("#links_image").addClass("animation_class_links");
            $(".link_description").addClass("animation_class_links");
            
        
                
            
        }, 200);
    }
    
  
}    
   
    



function change_image_github2 () {
    if (document.querySelector("#links_image").getAttribute('src')  == 'img/js.png') {
    } else {
        $(".link_description").removeClass("animation_class_links");
        document.querySelector(".link_description").innerHTML="My Javascript projects."; 
        $("#links_image").removeClass("animation_class_links");
        timer = setTimeout(() => {
            $("#links_image").attr('src','img/js.png')
            $("#links_image").addClass("animation_class_links");
            $(".link_description").addClass("animation_class_links");
           
           
            
        }, 200);

    }
   
   
   
        
    
  
}
   

function change_image_github3 () {
    if (document.querySelector("#links_image").getAttribute('src')  == "img/react.png") {
    } else {
        $(".link_description").removeClass("animation_class_links");
        document.querySelector(".link_description").innerHTML="My React.js projects."; 
        $("#links_image").removeClass("animation_class_links");
        timer = setTimeout(() => {
            
            $("#links_image").attr('src','img/react.png')
            $("#links_image").addClass("animation_class_links");
            $(".link_description").addClass("animation_class_links");
    
        
        }, 200);
    

    }

    
    
        
    
  
   

}


document.querySelector(".python_link").addEventListener("mouseleave", clear_timer)
document.querySelector(".javascript_link").addEventListener("mouseleave", clear_timer)
document.querySelector(".react_link").addEventListener("mouseleave", clear_timer)

document.querySelector(".python_link").addEventListener("mouseover", change_image_github)
document.querySelector(".javascript_link").addEventListener("mouseover", change_image_github2)
document.querySelector(".react_link").addEventListener("mouseover", change_image_github3)


// change image in nav extra github



function current_learning_animation () {
  
    document.getElementById("name_text").style.animation="current_learning 0.4s forwards"
    setTimeout(() => {
      document.getElementById("name_text").style.animation=""
    }, 500);
      
  
  }
function set(){
  setInterval(() => {
    current_learning_animation()
    
  }, 2000);


}

set() 


function show_github_mobile_nav() {
    $(".mobile_nav").css("animation", "nav_mobile_open_animation 0.6s forwards")
    $(".mobile_nav_github").css("display", "flex")
    $(".mobile_nav").css("display", "none")
   

}

function show_websites_mobile_container() {
    $(".mobile_nav").css("animation", "nav_mobile_open_animation 0.6s forwards")
    $(".websites_mobile_container").css("display", "flex")
    $(".mobile_nav").css("display", "none")
   

}
function back_show_websites_mobile_container() {
    
    $(".mobile_nav").css("animation", "background_nav_animation 0.6s forwards")
    
    $(".websites_mobile_container").css("display", "none")
    $(".mobile_nav").css("display", "block")
  

}
function back_github_mobile_nav() {
    
    $(".mobile_nav").css("animation", "background_nav_animation 0.6s forwards")
    $(".mobile_nav_github").css("display", "none")
    $(".mobile_nav").css("display", "block")
  

}

function close_github_mobile () {
    $(".mobile_nav").css("animation", "nav_mobile_open_animation 0.6s forwards")
    $(".navigation_container_hamburger").css("display", "block")
    $(".mobile_nav_github").css("display", "none")
    $("#link5").css("display", "block")
   
}

function close_web_mobile () {
    $(".mobile_nav").css("animation", "nav_mobile_open_animation 0.6s forwards")
    $(".navigation_container_hamburger").css("display", "block")
    $(".websites_mobile_container").css("display", "none")
    $("#link5").css("display", "block")
   
   
  
   
}

document.querySelector("#mobile_web_nav").addEventListener("click", show_websites_mobile_container)
document.querySelector(".icons_cross_arrow_left_web").addEventListener("click",back_show_websites_mobile_container )
document.querySelector(".icons_cross_web").addEventListener("click",close_web_mobile )

document.querySelector(".icons_cross_github").addEventListener("click",close_github_mobile )
document.querySelector(".icons_cross_github_arrow_left").addEventListener("click",back_github_mobile_nav )
document.querySelector("#github_mobile_open").addEventListener("click",show_github_mobile_nav )



const image_nav = document.querySelector(".links_image_websites")




function change_website_links3() {
   

    $(".link_description_websites").removeClass("animation_class_links");
  
    $(".image_container_websites").removeClass("image_container_websites_animation_class_lq");
    $(".image_container_websites").removeClass("image_container_websites_animation_class_hotel");
    timer = setTimeout(() => {
        document.querySelector(".link_description_websites").innerHTML="Website I have created to develop my coding skills"; 
     
        $(".image_container_websites").removeClass("animation_class_links");

        $(".link_description_websites").addClass("animation_class_links");
       
        setTimeout(() => {
            $(".image_container_websites").addClass("image_container_websites_animation_class_ws");
            $(".animation_container_image_web").addClass("animation_class_links");
        }, 200);
        setTimeout(() => {
            $(".animation_container_image_web").removeClass("animation_class_links");
        }, 1000);
    

        
    }, 200);

}

    


document.querySelector(".worksheet_website").addEventListener("mouseleave", clear_timer)
document.querySelector(".worksheet_website").addEventListener("mouseover",change_website_links3 )

// ------------------------------------------------------------------------------------------------------------------------------------

function change_website_links4() {
    
    $(".link_description_websites").removeClass("animation_class_links");
    document.querySelector(".link_description_websites").innerHTML="Website I have created at the end of npa lvl 5 course."; 
    $(".image_container_websites").removeClass("image_container_websites_animation_class_ws");
    $(".image_container_websites").removeClass("image_container_websites_animation_class_hotel");
    timer = setTimeout(() => {
      
        $(".image_container_websites").removeClass("animation_class_links");
     
        $(".link_description_websites").addClass("animation_class_links");
       
        setTimeout(() => {
            $(".image_container_websites").addClass("image_container_websites_animation_class_lq");
            $(".animation_container_image_web").addClass("animation_class_links");
        }, 200);
        setTimeout(() => {
            $(".animation_container_image_web").removeClass("animation_class_links");
        }, 1000);
        

        
    }, 200);

}
   
 


   
    

document.querySelector(".NPA_lvl_5website").addEventListener("mouseleave",clear_timer )


document.querySelector(".NPA_lvl_5website").addEventListener("mouseover",change_website_links4 )

// ------------------------------------------------------------------------------------------------------------------------------------
function change_website_links5() {
    
    $(".link_description_websites").removeClass("animation_class_links");
    document.querySelector(".link_description_websites").innerHTML="Website I have created at the end of npa lvl 6 course."; 
    $(".image_container_websites").removeClass("image_container_websites_animation_class_ws");
    $(".image_container_websites").removeClass("image_container_websites_animation_class_lq");
    timer = setTimeout(() => {
     
        $(".image_container_websites").removeClass("animation_class_links");
       
        $(".link_description_websites").addClass("animation_class_links");
        setTimeout(() => {
            $(".image_container_websites").addClass("image_container_websites_animation_class_hotel");
            $(".animation_container_image_web").addClass("animation_class_links");
            setTimeout(() => {
                $(".animation_container_image_web").removeClass("animation_class_links");
                
            }, 1000);
            
            
        }, 200);
       
    

    
    }, 200);

}
    
    


document.querySelector(".NPA_lvl_6_website").addEventListener("mouseleave",clear_timer )
document.querySelector(".NPA_lvl_6_website").addEventListener("mouseover",change_website_links5 )



function change_desc_resume() {
    $(".resume_desc").removeClass("animation_class_links");
    timer = setTimeout(() => {
        $(".resume_desc").addClass("animation_class_links");
        $(".resume_desc").html("Download my CV")
        
    }, 200);
    
}
function change_desc_resume_mouse_leave(){
    $(".resume_desc").removeClass("animation_class_links");
    setTimeout(() => {
        $(".resume_desc").addClass("animation_class_links");
        $(".resume_desc").html("")
    
        
    }, 1);
   
}
document.querySelector(".resume_text").addEventListener("mouseleave",change_desc_resume_mouse_leave )
document.querySelector(".resume_text").addEventListener("mouseleave",clear_timer )
document.querySelector(".resume_text").addEventListener("mouseover",change_desc_resume )



function take_me_to_about_mobile () {
    document.querySelector(".about_img").scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    $("#navigation_slide_off_websites").addClass("slide_up_animation");
    $("#navigation_slide_off_github").addClass("slide_up_animation");
    $("#navigation_slide_off_resume").addClass("slide_up_animation");

    close_hamb_mobile_menu()

  


   

    $("#link4").css("font-size", "1.5rem");
    $("#link4").css("margin-top", "20px");
    $("#link3").css("font-size", "1.5rem");
    $("#link3").css("margin-top", "20px");
    $("#link2").css("font-size", "1.5rem");
    $("#link2").css("margin-top", "20px");
    $("#link1").css("font-size", "1.5rem");
    $("#link1").css("margin-top", "20px");
    $("#link5").css("font-size", "1.5rem");
    $("#link5").css("margin-top", "20px");
}


function take_me_to_about () {
    document.querySelector(".about_section_text_container").scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    $("#navigation_slide_off_websites").addClass("slide_up_animation");
    $("#navigation_slide_off_github").addClass("slide_up_animation");
    $("#navigation_slide_off_resume").addClass("slide_up_animation");

    close_hamb_mobile_menu()

  


   

    $("#link4").css("font-size", "1.5rem");
    $("#link4").css("margin-top", "20px");
    $("#link3").css("font-size", "1.5rem");
    $("#link3").css("margin-top", "20px");
    $("#link2").css("font-size", "1.5rem");
    $("#link2").css("margin-top", "20px");
    $("#link1").css("font-size", "1.5rem");
    $("#link1").css("margin-top", "20px");
    $("#link5").css("font-size", "1.5rem");
    $("#link5").css("margin-top", "20px");
}
document.querySelector("#link1").addEventListener("click",take_me_to_about)
document.querySelector("#link_1_mobile").addEventListener("click",take_me_to_about_mobile)


function take_me_to_resume () {
    document.querySelector(".experience_col1").scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    $("#navigation_slide_off_websites").addClass("slide_up_animation");
    $("#navigation_slide_off_github").addClass("slide_up_animation");
    $("#navigation_slide_off_resume").addClass("slide_up_animation");

    close_hamb_mobile_menu()

    
    $("#link4").css("font-size", "1.5rem");
    $("#link4").css("margin-top", "20px");
    $("#link3").css("font-size", "1.5rem");
    $("#link3").css("margin-top", "20px");
    $("#link2").css("font-size", "1.5rem");
    $("#link2").css("margin-top", "20px");
    $("#link1").css("font-size", "1.5rem");
    $("#link1").css("margin-top", "20px");
    $("#link5").css("font-size", "1.5rem");
    $("#link5").css("margin-top", "20px");
   

}

function take_me_to_resume_mobile () {
    document.querySelector(".mid_section_header").scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center' });
    $("#navigation_slide_off_websites").addClass("slide_up_animation");
    $("#navigation_slide_off_github").addClass("slide_up_animation");
    $("#navigation_slide_off_resume").addClass("slide_up_animation");

    close_hamb_mobile_menu()

    
    $("#link4").css("font-size", "1.5rem");
    $("#link4").css("margin-top", "20px");
    $("#link3").css("font-size", "1.5rem");
    $("#link3").css("margin-top", "20px");
    $("#link2").css("font-size", "1.5rem");
    $("#link2").css("margin-top", "20px");
    $("#link1").css("font-size", "1.5rem");
    $("#link1").css("margin-top", "20px");
    $("#link5").css("font-size", "1.5rem");
    $("#link5").css("margin-top", "20px");
   

}
document.querySelector("#link2").addEventListener("click",take_me_to_resume)
document.querySelector("#link_2_mobile").addEventListener("click",take_me_to_resume_mobile)


function take_me_to_contact () {
    $("#navigation_slide_off_websites").addClass("slide_up_animation");
    $("#navigation_slide_off_github").addClass("slide_up_animation");
    $("#navigation_slide_off_resume").addClass("slide_up_animation");

    document.querySelector(".contact_input_container").scrollIntoView({behavior: "smooth", block: "start", inline: "center"});

    close_hamb_mobile_menu()

  
    $("#link4").css("font-size", "1.5rem");
    $("#link4").css("margin-top", "20px");
    $("#link3").css("font-size", "1.5rem");
    $("#link3").css("margin-top", "20px");
    $("#link2").css("font-size", "1.5rem");
    $("#link2").css("margin-top", "20px");
    $("#link1").css("font-size", "1.5rem");
    $("#link1").css("margin-top", "20px");

    $("#link5").css("font-size", "1.5rem");
    $("#link5").css("margin-top", "20px");
    

}

function take_me_to_contact_mobile () {
    $("#navigation_slide_off_websites").addClass("slide_up_animation");
    $("#navigation_slide_off_github").addClass("slide_up_animation");
    $("#navigation_slide_off_resume").addClass("slide_up_animation");

    document.querySelector(".contact_header").scrollIntoView({behavior: "smooth", block: "start", inline: "center"});

    close_hamb_mobile_menu()

  
    $("#link4").css("font-size", "1.5rem");
    $("#link4").css("margin-top", "20px");
    $("#link3").css("font-size", "1.5rem");
    $("#link3").css("margin-top", "20px");
    $("#link2").css("font-size", "1.5rem");
    $("#link2").css("margin-top", "20px");
    $("#link1").css("font-size", "1.5rem");
    $("#link1").css("margin-top", "20px");

    $("#link5").css("font-size", "1.5rem");
    $("#link5").css("margin-top", "20px");
    

}
document.querySelector("#link5").addEventListener("click",take_me_to_contact)
document.querySelector("#link_3_mobile").addEventListener("click",take_me_to_contact_mobile)