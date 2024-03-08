

function contact_message()
{
  var name = document.getElementById("first_name").value
  
 
  if (name=="tomil" || name=="Tomil") {
    document.getElementById("show_message").innerHTML="O tak pol godziny pisac na darmo i potem i tak nie dostane pracy i bede pracowac jak niewolnik o tak bym w cos pogral ale trzeba sie uczyc" }
    
  
  else
  document.getElementById("show_message").innerHTML="Thank you for your message " + "<br>"+ name

  
  
}

function feedback_message()
{
  var name = document.getElementById("first_name").value
  
  document.getElementById("show_message").innerHTML="Thank you for your message " + name
  

  
  
}


function claire_text_function()
{

  var show_object = document.getElementById("claire_text_display");
  if (show_object.style.display === "inline-block") {
    show_object.style.display ="none";
  } else{
    show_object.style.display ="inline-block";
    
  }



}


function robbie_text_function()
{

  var show_object = document.getElementById("robbie_text_display");
  if (show_object.style.display === "inline-block") {
    show_object.style.display ="none";
  } else{
    show_object.style.display ="inline-block";
  }



}



function marion_text_function()
{

  var show_object = document.getElementById("marion_text_display");
  if (show_object.style.display === "inline-block") {
    show_object.style.display ="none";
  } else{
    show_object.style.display ="inline-block";
  }
  


}



function claire_text_mobile()
{
  var show_object = document.getElementById("mobile_js_claire");
  if (show_object.style.display === "table") {
    show_object.style.display ="none";
  } else{
    show_object.style.display ="table";
  }




}



function robbie_text_mobile()
{
  

  var show_object = document.getElementById("mobile_js_robbie");
  if (show_object.style.display === "table") {
    show_object.style.display ="none";
  } else{
    show_object.style.display ="table";
  }

  
}



function marion_text_mobile()
{
  var show_object = document.getElementById("mobile_js_marion");
  if (show_object.style.display === "table") {
    show_object.style.display ="none";
  } else{
    show_object.style.display ="table";
  }





}





//main_hamburger_menu//




function hidebar_main()
{
  var bars = document.getElementById("menu_beta_home_active")
  var bars2 = document.getElementById("menu_beta_activites")
  var bars3 = document.getElementById("menu_beta_staff")
  var bars4 = document.getElementById("menu_beta_gallery")
  var bars5 = document.getElementById("menu_beta_contact")
  var bars6 = document.getElementById("menu_beta_feedback")
  var hamburger = document.getElementById("hamburger_mobile")
  var whole_menu = document.getElementById("nav_menu")
  

  if (bars.style.display === "none") {
    bars.style.display ="flex", bars2.style.display ="flex", bars3.style.display ="flex",bars4.style.display ="flex",bars5.style.display ="flex",bars6.style.display ="flex", whole_menu.style.backgroundColor="#ffffffdc"
  } else{
    bars.style.display ="none", bars2.style.display ="none",bars3.style.display ="none",bars4.style.display ="none",bars5.style.display ="none",bars6.style.display ="none", whole_menu.style.backgroundColor="transparent", hamburger.style.backgroundColor="#ffffffdc"
  }
  hamburger_animation()
  
  
  
 


}




function hidebar_mobile_main()
{
  var bars = document.getElementById("menu_beta_home_active_mobile")
  var bars2 = document.getElementById("menu_beta_activites_mobile_acitve")
  var bars3 = document.getElementById("menu_beta_staff_mobile")
  var bars4 = document.getElementById("menu_beta_gallery_mobile")
  var bars5 = document.getElementById("menu_beta_contact_mobile")
  var bars6 = document.getElementById("menu_beta_feedback_mobile")
  var hamburger = document.getElementById("hamburger_mobile")
  var whole_menu = document.getElementById("nav_menu_mobile")
  

  if (bars.style.display === "none" ) {
    bars.style.display ="inline-block", bars2.style.display ="inline-block", bars3.style.display ="inline-block",bars4.style.display ="inline-block",bars5.style.display ="inline-block",bars6.style.display ="inline-block", whole_menu.style.backgroundColor="#ffffffdc";
  } else{
    bars.style.display ="none", bars2.style.display ="none",bars3.style.display ="none",bars4.style.display ="none",bars5.style.display ="none",bars6.style.display ="none", whole_menu.style.backgroundColor="transparent", hamburger.style.float ="left", hamburger.style.backgroundColor="#ffffffdc"; 
  }
  
}




//activites_hamburger_menu//

function hidebar_mobile_activities()
{
  var bars = document.getElementById("menu_beta_home_mobile")
  var bars2 = document.getElementById("menu_beta_activites_mobile_active")
  var bars3 = document.getElementById("menu_beta_staff_mobile")
  var bars4 = document.getElementById("menu_beta_gallery_mobile")
  var bars5 = document.getElementById("menu_beta_contact_mobile")
  var bars6 = document.getElementById("menu_beta_feedback_mobile")
  var hamburger = document.getElementById("hamburger_mobile")
  var whole_menu = document.getElementById("nav_menu_mobile")
  

  if (bars.style.display === "none" ) {
    bars.style.display ="inline-block", bars2.style.display ="inline-block", bars3.style.display ="inline-block",bars4.style.display ="inline-block",bars5.style.display ="inline-block",bars6.style.display ="inline-block", whole_menu.style.backgroundColor="#ffffffdc";
  } else{
    bars.style.display ="none", bars2.style.display ="none",bars3.style.display ="none",bars4.style.display ="none",bars5.style.display ="none",bars6.style.display ="none", whole_menu.style.backgroundColor="transparent", hamburger.style.float ="left", hamburger.style.backgroundColor="#ffffffdc"; 
  }
  
}


function hidebar_activities()
{
  var bars = document.getElementById("menu_beta_home")
  var bars2 = document.getElementById("menu_beta_activites_active")
  var bars3 = document.getElementById("menu_beta_staff")
  var bars4 = document.getElementById("menu_beta_gallery")
  var bars5 = document.getElementById("menu_beta_contact")
  var bars6 = document.getElementById("menu_beta_feedback")
  var hamburger = document.getElementById("hamburger_mobile")
  var whole_menu = document.getElementById("nav_menu")
  

  if (bars.style.display === "none" ) {
    bars.style.display ="flex", bars2.style.display ="flex", bars3.style.display ="flex",bars4.style.display ="flex",bars5.style.display ="flex",bars6.style.display ="flex", whole_menu.style.backgroundColor="#ffffffdc";
  } else{
    bars.style.display ="none", bars2.style.display ="none",bars3.style.display ="none",bars4.style.display ="none",bars5.style.display ="none",bars6.style.display ="none", whole_menu.style.backgroundColor="transparent", hamburger.style.backgroundColor="#ffffffdc";
  }
  


}


//staff_hamburger_menu//

function hidebar_mobile_staff()
{
  var bars = document.getElementById("menu_beta_home_active_mobile")
  var bars2 = document.getElementById("menu_beta_activites_mobile")
  var bars3 = document.getElementById("menu_beta_staff_active_mobile")
  var bars4 = document.getElementById("menu_beta_gallery_mobile")
  var bars5 = document.getElementById("menu_beta_contact_mobile")
  var bars6 = document.getElementById("menu_beta_feedback_mobile")
  var hamburger = document.getElementById("hamburger_mobile")
  var whole_menu = document.getElementById("nav_menu_mobile")
  

  if (bars.style.display === "none" ) {
    bars.style.display ="inline-block", bars2.style.display ="inline-block", bars3.style.display ="inline-block",bars4.style.display ="inline-block",bars5.style.display ="inline-block",bars6.style.display ="inline-block", whole_menu.style.backgroundColor="#ffffffdc";
  } else{
    bars.style.display ="none", bars2.style.display ="none",bars3.style.display ="none",bars4.style.display ="none",bars5.style.display ="none",bars6.style.display ="none", whole_menu.style.backgroundColor="transparent", hamburger.style.float ="left", hamburger.style.backgroundColor="#ffffffdc"; 
  }
  
}

function hidebar_mobile_rope()
{
  var bars = document.getElementById("menu_beta_home_active_mobile")
  var bars2 = document.getElementById("menu_beta_activites_mobile_active")
  var bars3 = document.getElementById("menu_beta_staff_mobile")
  var bars4 = document.getElementById("menu_beta_gallery_mobile")
  var bars5 = document.getElementById("menu_beta_contact_mobile")
  var bars6 = document.getElementById("menu_beta_feedback_mobile")
  var hamburger = document.getElementById("hamburger_mobile")
  var whole_menu = document.getElementById("nav_menu_mobile")
  

  if (bars.style.display === "none" ) {
    bars.style.display ="inline-block", bars2.style.display ="inline-block", bars3.style.display ="inline-block",bars4.style.display ="inline-block",bars5.style.display ="inline-block",bars6.style.display ="inline-block", whole_menu.style.backgroundColor="#ffffffdc";
  } else{
    bars.style.display ="none", bars2.style.display ="none",bars3.style.display ="none",bars4.style.display ="none",bars5.style.display ="none",bars6.style.display ="none", whole_menu.style.backgroundColor="transparent", hamburger.style.float ="left", hamburger.style.backgroundColor="#ffffffdc"; 
  }
  
}

function hidebar_mobile_water()
{
  var bars = document.getElementById("menu_beta_home_active_mobile")
  var bars2 = document.getElementById("menu_beta_activites_mobile_active")
  var bars3 = document.getElementById("menu_beta_staff_mobile")
  var bars4 = document.getElementById("menu_beta_gallery_mobile")
  var bars5 = document.getElementById("menu_beta_contact_mobile")
  var bars6 = document.getElementById("menu_beta_feedback_mobile")
  var hamburger = document.getElementById("hamburger_mobile")
  var whole_menu = document.getElementById("nav_menu_mobile")
  

  if (bars.style.display === "none" ) {
    bars.style.display ="inline-block", bars2.style.display ="inline-block", bars3.style.display ="inline-block",bars4.style.display ="inline-block",bars5.style.display ="inline-block",bars6.style.display ="inline-block", whole_menu.style.backgroundColor="#ffffffdc";
  } else{
    bars.style.display ="none", bars2.style.display ="none",bars3.style.display ="none",bars4.style.display ="none",bars5.style.display ="none",bars6.style.display ="none", whole_menu.style.backgroundColor="transparent", hamburger.style.float ="left", hamburger.style.backgroundColor="#ffffffdc"; 
  }
  
}
function hidebar_staff()
{
  var bars = document.getElementById("menu_beta_home")
  var bars2 = document.getElementById("menu_beta_activites")
  var bars3 = document.getElementById("menu_beta_staff_active")
  var bars4 = document.getElementById("menu_beta_gallery")
  var bars5 = document.getElementById("menu_beta_contact")
  var bars6 = document.getElementById("menu_beta_feedback")
  var hamburger = document.getElementById("hamburger_mobile")
  var whole_menu = document.getElementById("nav_menu")
  

  if (bars.style.display === "none" ) {
    bars.style.display ="flex", bars2.style.display ="flex", bars3.style.display ="flex",bars4.style.display ="flex",bars5.style.display ="flex",bars6.style.display ="flex", whole_menu.style.backgroundColor="#ffffffdc";
  } else{
    bars.style.display ="none", bars2.style.display ="none",bars3.style.display ="none",bars4.style.display ="none",bars5.style.display ="none",bars6.style.display ="none", whole_menu.style.backgroundColor="transparent", hamburger.style.backgroundColor="#ffffffdc";
  }
  


}


//gallery_hamburger_menu//

function hidebar_gallery()
{
  var bars = document.getElementById("menu_beta_home")
  var bars2 = document.getElementById("menu_beta_activites")
  var bars3 = document.getElementById("menu_beta_staff")
  var bars4 = document.getElementById("menu_beta_gallery_active")
  var bars5 = document.getElementById("menu_beta_contact")
  var bars6 = document.getElementById("menu_beta_feedback")
  var hamburger = document.getElementById("hamburger_mobile")
  var whole_menu = document.getElementById("nav_menu")
  

  if (bars.style.display === "none" ) {
    bars.style.display ="flex", bars2.style.display ="flex", bars3.style.display ="flex",bars4.style.display ="flex",bars5.style.display ="flex",bars6.style.display ="flex", whole_menu.style.backgroundColor="#ffffffdc";
  } else{
    bars.style.display ="none", bars2.style.display ="none",bars3.style.display ="none",bars4.style.display ="none",bars5.style.display ="none",bars6.style.display ="none", whole_menu.style.backgroundColor="transparent", hamburger.style.backgroundColor="#ffffffdc";
  }
  

}




function hidebar_mobile_gallery()
{
  var bars = document.getElementById("menu_beta_home_mobile")
  var bars2 = document.getElementById("menu_beta_activites_mobile_acitve")
  var bars3 = document.getElementById("menu_beta_staff_mobile")
  var bars4 = document.getElementById("menu_beta_gallery_mobile_active")
  var bars5 = document.getElementById("menu_beta_contact_mobile")
  var bars6 = document.getElementById("menu_beta_feedback_mobile")
  var hamburger = document.getElementById("hamburger_mobile")
  var whole_menu = document.getElementById("nav_menu_mobile")
  

  if (bars.style.display === "none" ) {
    bars.style.display ="inline-block", bars2.style.display ="inline-block", bars3.style.display ="inline-block",bars4.style.display ="inline-block",bars5.style.display ="inline-block",bars6.style.display ="inline-block", whole_menu.style.backgroundColor="#ffffffdc";
  } else{
    bars.style.display ="none", bars2.style.display ="none",bars3.style.display ="none",bars4.style.display ="none",bars5.style.display ="none",bars6.style.display ="none", whole_menu.style.backgroundColor="transparent", hamburger.style.float ="left", hamburger.style.backgroundColor="#ffffffdc"; 
  }
  
}


//contact_hamburger_menu//

function hidebar()
{
  var bars = document.getElementById("menu_beta_home")
  var bars2 = document.getElementById("menu_beta_activites")
  var bars3 = document.getElementById("menu_beta_staff")
  var bars4 = document.getElementById("menu_beta_gallery")
  var bars5 = document.getElementById("menu_beta_contact_active")
  var bars6 = document.getElementById("menu_beta_feedback")
  var hamburger = document.getElementById("hamburger_mobile")
  var whole_menu = document.getElementById("nav_menu")
  

  if (bars.style.display === "none" ) {
    bars.style.display ="flex", bars2.style.display ="flex", bars3.style.display ="flex",bars4.style.display ="flex",bars5.style.display ="flex",bars6.style.display ="flex", whole_menu.style.backgroundColor="#ffffffdc";
  } else{
    bars.style.display ="none", bars2.style.display ="none",bars3.style.display ="none",bars4.style.display ="none",bars5.style.display ="none",bars6.style.display ="none", whole_menu.style.backgroundColor="transparent", hamburger.style.backgroundColor="#ffffffdc";
  }
  

}




function hidebar_mobile()
{
  var bars = document.getElementById("menu_beta_home_mobile")
  var bars2 = document.getElementById("menu_beta_activites_mobile_acitve")
  var bars3 = document.getElementById("menu_beta_staff_mobile")
  var bars4 = document.getElementById("menu_beta_gallery_mobile")
  var bars5 = document.getElementById("menu_beta_contact_mobile_active")
  var bars6 = document.getElementById("menu_beta_feedback_mobil")
  var hamburger = document.getElementById("hamburger_mobile")
  var whole_menu = document.getElementById("nav_menu_mobile")
  

  if (bars.style.display === "none" ) {
    bars.style.display ="inline-block", bars2.style.display ="inline-block", bars3.style.display ="inline-block",bars4.style.display ="inline-block",bars5.style.display ="inline-block",bars6.style.display ="inline-block", whole_menu.style.backgroundColor="#ffffffdc";
  } else{
    bars.style.display ="none", bars2.style.display ="none",bars3.style.display ="none",bars4.style.display ="none",bars5.style.display ="none",bars6.style.display ="none", whole_menu.style.backgroundColor="transparent", hamburger.style.float ="left", hamburger.style.backgroundColor="#ffffffdc"; 
  }
  
}

function hidebar_mobile_contact()
{
  var bars = document.getElementById("menu_beta_home_mobile")
  var bars2 = document.getElementById("menu_beta_activites_mobile_acitve")
  var bars3 = document.getElementById("menu_beta_staff_mobile")
  var bars4 = document.getElementById("menu_beta_gallery_mobile")
  var bars5 = document.getElementById("menu_beta_contact_mobile_active")
  var bars6 = document.getElementById("menu_beta_feedback_mobile")
  var hamburger = document.getElementById("hamburger_mobile")
  var whole_menu = document.getElementById("nav_menu_mobile")
  

  if (bars.style.display === "none" ) {
    bars.style.display ="inline-block", bars2.style.display ="inline-block", bars3.style.display ="inline-block",bars4.style.display ="inline-block",bars5.style.display ="inline-block",bars6.style.display ="inline-block", whole_menu.style.backgroundColor="#ffffffdc";
  } else{
    bars.style.display ="none", bars2.style.display ="none",bars3.style.display ="none",bars4.style.display ="none",bars5.style.display ="none",bars6.style.display ="none", whole_menu.style.backgroundColor="transparent", hamburger.style.float ="left", hamburger.style.backgroundColor="#ffffffdc"; 
  }
  
}

//feedback_hamburger_menu//




function hidebar_mobile_feedback()
{
  var bars = document.getElementById("menu_beta_home_mobile")
  var bars2 = document.getElementById("menu_beta_activites_mobile_acitve")
  var bars3 = document.getElementById("menu_beta_staff_mobile")
  var bars4 = document.getElementById("menu_beta_gallery_mobile")
  var bars5 = document.getElementById("menu_beta_contact_mobile")
  var bars6 = document.getElementById("menu_beta_feedback_mobile_active")
  var hamburger = document.getElementById("hamburger_mobile")
  var whole_menu = document.getElementById("nav_menu_mobile")
  

  if (bars.style.display === "none" ) {
    bars.style.display ="inline-block", bars2.style.display ="inline-block", bars3.style.display ="inline-block",bars4.style.display ="inline-block",bars5.style.display ="inline-block",bars6.style.display ="inline-block", whole_menu.style.backgroundColor="#ffffffdc";
  } else{
    bars.style.display ="none", bars2.style.display ="none",bars3.style.display ="none",bars4.style.display ="none",bars5.style.display ="none",bars6.style.display ="none", whole_menu.style.backgroundColor="transparent", hamburger.style.float ="left", hamburger.style.backgroundColor="#ffffffdc"; 
  }
  
}

function hidebar_feedback()
{
  var bars = document.getElementById("menu_beta_home")
  var bars2 = document.getElementById("menu_beta_activites")
  var bars3 = document.getElementById("menu_beta_staff")
  var bars4 = document.getElementById("menu_beta_gallery")
  var bars5 = document.getElementById("menu_beta_contact")
  var bars6 = document.getElementById("menu_beta_feedback_active")
  var hamburger = document.getElementById("hamburger_mobile")
  var whole_menu = document.getElementById("nav_menu")
  

  if (bars.style.display === "none" ) {
    bars.style.display ="flex", bars2.style.display ="flex", bars3.style.display ="flex",bars4.style.display ="flex",bars5.style.display ="flex",bars6.style.display ="flex", whole_menu.style.backgroundColor="#ffffffdc" 
  } else{
    bars.style.display ="none", bars2.style.display ="none",bars3.style.display ="none",bars4.style.display ="none",bars5.style.display ="none",bars6.style.display ="none", whole_menu.style.backgroundColor="transparent", hamburger.style.backgroundColor="#ffffffdc";
  }
  
  


}



