const wool_dontation = document.querySelector("#donation_wool img")
const wood_dontation = document.querySelector("#donation_wood img")
const plastic_dontation = document.querySelector("#donation_plastic img")
const cotton_dontation = document.querySelector("#donation_cotton img")


const wool_dontation_text = document.querySelector("#donation_wool .text_four_cols")
const wood_dontation_text = document.querySelector("#donation_wood .text_four_cols")
const plastic_dontation_text = document.querySelector("#donation_plastic .text_four_cols")
const cotton_dontation_text = document.querySelector("#donation_cotton .text_four_cols")

const background_wool = document.querySelector(".background_img_donation_wool")
const background_wood = document.querySelector(".background_img_donation_wood")
const background_plastic = document.querySelector(".background_img_donation_plastic")
const background_cotton = document.querySelector(".background_img_donation_cotton")

listOfDonationBackgrounds = [background_wool, background_wood, background_plastic, background_cotton]
listOfDonation_text = [wool_dontation_text, wood_dontation_text,plastic_dontation_text, cotton_dontation_text]
listOfDonation = [wool_dontation,wood_dontation, plastic_dontation, cotton_dontation]

const ChooseDonationActiveClass = function() {
  listOfDonation.forEach(donation=>donation.setAttribute("id", "donation_inactive_class"));


}

const showDonationTextChoice = function(){
  if (wool_dontation.getAttribute('id') === "donation_active_class") {
    listOfDonation_text.forEach(donation=>donation.style.color = "rgba(255, 255, 255, 0)")
    listOfDonationBackgrounds.forEach(background=>background.style.border = "none")
    document.querySelector("#donation_wool .text_four_cols").style.color = "rgba(255, 255, 255, 1)"
    background_wool.style.border = "5px solid #4e1bb8"

  }

  else if (wood_dontation.getAttribute('id') === "donation_active_class") {
    listOfDonation_text.forEach(donation=>donation.style.color = "rgba(255, 255, 255, 0)")
    listOfDonationBackgrounds.forEach(background=>background.style.border = "none")
    document.querySelector("#donation_wood .text_four_cols").style.color = "rgba(255, 255, 255, 1)"
    background_wood.style.border = "5px solid #4e1bb8"
  }
  else if (cotton_dontation.getAttribute('id') === "donation_active_class") {
    listOfDonation_text.forEach(donation=>donation.style.color = "rgba(255, 255, 255, 0)")
    listOfDonationBackgrounds.forEach(background=>background.style.border = "none")
    document.querySelector("#donation_cotton .text_four_cols").style.color = "rgba(255, 255, 255, 1)"
    background_cotton.style.border = "5px solid #4e1bb8"
  }
  else if (plastic_dontation.getAttribute('id') === "donation_active_class") {
    listOfDonation_text.forEach(donation=>donation.style.color = "rgba(255, 255, 255, 0)")
    listOfDonationBackgrounds.forEach(background=>background.style.border = "none")
    document.querySelector("#donation_plastic .text_four_cols").style.color = "rgba(255, 255, 255, 1)"
    background_plastic.style.border = "5px solid #4e1bb8"
  }


}



for (let i = 0; i < listOfDonation.length; i++) {
  listOfDonation[i].addEventListener('click', function() {
    ChooseDonationActiveClass()
    this.setAttribute("id", "donation_active_class")
    showDonationTextChoice()

  }
  )
}
