
const images = document.querySelectorAll(".slider_image");
let currentIndex = 0;

function changeImage() {
    if(images[currentIndex]) {
    images[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = "flex";
    }
}

function startSlideshow() {
    // Initial image display
    if(images[currentIndex]) {
    images[currentIndex].style.display = "flex";
    }

    // Change image every 5 seconds
    setInterval(changeImage, 5000);
}



function runSliderAutomatically(timeBetweenSlides) {
    const leftImageSlider = document.querySelector(".slider_image");

    
    // Start the slideshow immediately

    startSlideshow();



    const linkline1Hr = document.querySelector(".link_line1 hr")
    const linkline2Hr = document.querySelector(".link_line2 hr")
    const linkline3Hr = document.querySelector(".link_line3 hr")
    const linkline4Hr = document.querySelector(".link_line4 hr")
    const linkline5Hr = document.querySelector(".link_line5 hr")
    const linkline6Hr = document.querySelector(".link_line6 hr")
    const linkline7Hr = document.querySelector(".link_line7 hr")
    const linkline8Hr = document.querySelector(".link_line8 hr")
    const allLines = document.querySelectorAll(".link_line_container hr")
    function displayanddisplayOfflines(lineOn) {

        allLines.forEach(ele=>ele.style.animation="");


        setTimeout(() => {
            if(lineOn) {
            lineOn.style.animation="linesSlider 8s forwards"
            }
        }, 1);


    }
    const linkSliderWebpages = document.querySelector(".slider_link_button");
    function changeLinkSlider(href) {
        if(linkSliderWebpages) {
        linkSliderWebpages.href = href;
        }
    }

    const text_slider_top = document.querySelector(".text_slider_top")
    // create a list of products so dont need to fill the argument list with so many while invoking the function
    const listRestProducts= ["Organic Honey", "Organic Duck","Organic Pork","Organic Beef","Organic Chicken","Organic Veal","Organic Lamb","Organic Turkey"]
    // que the slider to start from the 8th second
    setInterval(() => {
        changeLinkSlider("./honey.html")
        displayanddisplayOfflines(linkline1Hr)
        addAndRemoveFadeAniamtion()
        sliderInjectionItems("Organic Honey", "Great Value and Price", ...listRestProducts)
        if(text_slider_top) {
            text_slider_top.innerHTML='"Pure, golden sweetness from natures own bees."'
        }
        addAndRemoveActiveLinks(linkLine1)

        setTimeout(() => {
            changeLinkSlider("./duck.html")
            displayanddisplayOfflines(linkline2Hr)
            addAndRemoveFadeAniamtion()
            if(text_slider_top) {
            text_slider_top.innerHTML='"Savor organic duck: pure, natural flavors that delight."'
            }
            sliderInjectionItems("Organic Duck", "From the best Butchers", ...listRestProducts)
            addAndRemoveActiveLinks(linkLine2)

        }, timeBetweenSlides);
        setTimeout(() => {
            changeLinkSlider("./pork.html")
            displayanddisplayOfflines(linkline3Hr)
            addAndRemoveFadeAniamtion()
            if(text_slider_top) {
            text_slider_top.innerHTML='"Savor the succulence of premium, organic pork."'}
            sliderInjectionItems("Organic Pork", "Recommended by People", ...listRestProducts)
            addAndRemoveActiveLinks(linkLine3)

        }, timeBetweenSlides * 2);
        setTimeout(() => {
            changeLinkSlider("./beef.html")
            displayanddisplayOfflines(linkline4Hr)
            addAndRemoveFadeAniamtion()
            if(text_slider_top) {
            text_slider_top.innerHTML='"Discover the richness of organic, tender beef."'}
            sliderInjectionItems("Organic Beef", "Your Healthy Beef Choice",  ...listRestProducts)
            addAndRemoveActiveLinks(linkLine4)

        }, timeBetweenSlides * 3);
        setTimeout(() => {
            changeLinkSlider("./chicken.html")
            displayanddisplayOfflines(linkline5Hr)
            addAndRemoveFadeAniamtion()
            if(text_slider_top) {
            text_slider_top.innerHTML='"Delight in organic, tender chicken perfection."'}
            sliderInjectionItems("Organic Chicken", "Free-Range Organic Chicken", ...listRestProducts)
            addAndRemoveActiveLinks(linkLine5)

        }, timeBetweenSlides * 4);
        setTimeout(() => {
            changeLinkSlider("./veal.html")
            displayanddisplayOfflines(linkline6Hr)
            addAndRemoveFadeAniamtion()
            if(text_slider_top) {
            text_slider_top.innerHTML='"Experience the delicate taste of organic veal."'}
            sliderInjectionItems("Organic Veal", "Exceptional Taste and Quality", ...listRestProducts)
            addAndRemoveActiveLinks(linkLine6)

        }, timeBetweenSlides * 5);
        setTimeout(() => {
            changeLinkSlider("./lamb.html")
            displayanddisplayOfflines(linkline7Hr)
            addAndRemoveFadeAniamtion()
            if(text_slider_top) {
            text_slider_top.innerHTML='"Savor the exquisite flavor of organic lamb."'}
            sliderInjectionItems("Organic Lamb", "A Taste of the Pasture", ...listRestProducts)
            addAndRemoveActiveLinks(linkLine7)

        }, timeBetweenSlides * 6);
        setTimeout(() => {
            changeLinkSlider("./turkey.html")
            displayanddisplayOfflines(linkline8Hr)
            addAndRemoveFadeAniamtion()
            if(text_slider_top) {
            text_slider_top.innerHTML='"Enjoy the pure, natural taste of organic turkey."'}
            sliderInjectionItems("Organic Turkey", "Organic Thanksgiving Turkey", ...listRestProducts)
            addAndRemoveActiveLinks(linkLine8)

        }, timeBetweenSlides * 7);

    }, timeBetweenSlides * 8);



    // start the slider from the loading page

    addAndRemoveFadeAniamtion()
        changeLinkSlider("./honey.html")
        if(text_slider_top) {
        text_slider_top.innerHTML='"Pure, golden sweetness from natures own bees."'}
        sliderInjectionItems("Organic Honey", "Great Value and Price", ...listRestProducts)
        displayanddisplayOfflines(linkline1Hr)
        addAndRemoveActiveLinks(linkLine1)

        setTimeout(() => {
            addAndRemoveFadeAniamtion()
            changeLinkSlider("./duck.html")
            if(text_slider_top) {
            text_slider_top.innerHTML='"Savor organic duck: pure, natural flavors that delight."'}
            sliderInjectionItems("Organic Duck", "From the best Butchers", ...listRestProducts)
            addAndRemoveActiveLinks(linkLine2)
            displayanddisplayOfflines(linkline2Hr)
        }, timeBetweenSlides);
        setTimeout(() => {
            changeLinkSlider("./pork.html")
            if(text_slider_top) {
            text_slider_top.innerHTML='"Savor the succulence of premium, organic pork."'}
            addAndRemoveFadeAniamtion()
            sliderInjectionItems("Organic Pork", "Recommended by People", ...listRestProducts)
            addAndRemoveActiveLinks(linkLine3)
            displayanddisplayOfflines(linkline3Hr)
        }, timeBetweenSlides * 2);
        setTimeout(() => {
            changeLinkSlider("./beef.html")
            if(text_slider_top) {
            text_slider_top.innerHTML='"Discover the richness of organic, tender beef."'}
            displayanddisplayOfflines(linkline4Hr)
            addAndRemoveFadeAniamtion()
            sliderInjectionItems("Organic Beef", "Your Healthy Beef Choice",  ...listRestProducts)
            addAndRemoveActiveLinks(linkLine4)

        }, timeBetweenSlides * 3);
        setTimeout(() => {
            changeLinkSlider("./chicken.html")
            if(text_slider_top) {
            text_slider_top.innerHTML='"Delight in organic, tender chicken perfection."'}
            displayanddisplayOfflines(linkline5Hr)
            addAndRemoveFadeAniamtion()
            sliderInjectionItems("Organic Chicken", "Free-Range Organic Chicken", ...listRestProducts)
            addAndRemoveActiveLinks(linkLine5)

        }, timeBetweenSlides * 4);
        setTimeout(() => {
            changeLinkSlider("./veal.html")
            if(text_slider_top) {
            text_slider_top.innerHTML='"Experience the delicate taste of organic veal."'}
            displayanddisplayOfflines(linkline6Hr)
            addAndRemoveFadeAniamtion()
            sliderInjectionItems("Organic Veal", "Exceptional Taste and Quality", ...listRestProducts)
            addAndRemoveActiveLinks(linkLine6)

        }, timeBetweenSlides * 5);
        setTimeout(() => {
            changeLinkSlider("./lamb.html")
            if(text_slider_top) {
            text_slider_top.innerHTML='"Savor the exquisite flavor of organic lamb."'}
            displayanddisplayOfflines(linkline7Hr)
            addAndRemoveFadeAniamtion()
            sliderInjectionItems("Organic Lamb", "A Taste of the Pasture", ...listRestProducts)
            addAndRemoveActiveLinks(linkLine7)

        }, timeBetweenSlides * 6);
        setTimeout(() => {
            changeLinkSlider("./turkey.html")
            if(text_slider_top) {
            text_slider_top.innerHTML='"Enjoy the pure, natural taste of organic turkey."'}
            displayanddisplayOfflines(linkline8Hr)
            addAndRemoveFadeAniamtion()
            sliderInjectionItems("Organic Turkey", "Organic Thanksgiving Turkey", ...listRestProducts)
            addAndRemoveActiveLinks(linkLine8)

        }, timeBetweenSlides * 7);




}

// initiate the fuction on page load
window.onload = function () {
    runSliderAutomatically(5000);
};



const courses_links_cont = document.querySelector(".courses_links_cont");
if(courses_links_cont) {
    courses_links_cont.addEventListener("click", function(){
        const drop_down_courses = document.querySelector(".drop_down_courses");

        if(drop_down_courses.classList.contains("active_dropdown")) {
            drop_down_courses.style.animation="heightdropdownReverse 0.7s forwards";
            setTimeout(() => {
                drop_down_courses.style.display="none";
                setTimeout(() => {
                    drop_down_courses.classList.remove("active_dropdown")
                }, 1);
            }, 701);

        }
        else {
            drop_down_courses.style.display="flex";
            drop_down_courses.classList.add("active_dropdown");
            drop_down_courses.style.animation="heightdropdown 0.7s forwards";
        }

    })

}
const top_courser_dropdown = document.querySelector(".top_drop");
if(top_courser_dropdown) {
    top_courser_dropdown.addEventListener("click", function(){
        const top_courser_dropdown_container = document.querySelector(".top_courser_dropdown_container");

        if(top_courser_dropdown_container.classList.contains("active_dropdown")) {
            top_courser_dropdown_container.style.animation="heightdropdownReverse 0.7s forwards";
            setTimeout(() => {
                top_courser_dropdown_container.style.display="none";
                setTimeout(() => {
                    top_courser_dropdown_container.classList.remove("active_dropdown")
                }, 1);
            }, 701);

        }
        else {

            top_courser_dropdown_container.style.display="flex";
            top_courser_dropdown_container.classList.add("active_dropdown");
            top_courser_dropdown_container.style.animation="heightdropdown 0.7s forwards";
        }

    })

}
function handleClick(event) {

    // Get the element's name from the data-element-name attribute
    const elementSrc = event.target.getAttribute("src");
    const nameProduct = event.target.getAttribute("data-name");
    const descriptionProduct = event.target.getAttribute("data-desc");
    const priceProduct = event.target.getAttribute("data-price");
    // Do something with the element's name

    const modalWindow =
        `<div class="modal_window_all">
        <img class="modal_window_cross"src="./icons/cross.svg" alt="">
        <div class="modal_window">
            <div class="modal_window_content">
                <div class="modal_wrapper">

                    <div class="modal_window_content_text">
                        <h3>${nameProduct}</h3>
                        <div class="product_container">

                            <img  src="${elementSrc}" alt="">
                            <h3> ${priceProduct} </h3>
                            <p> ${descriptionProduct} </p>




                        </div>


                    </div>

                    </div>
                </div>

            </div>



        </div>
        </div>
    `
    const container_modal = document.querySelector(".modalWindowContainer")
    container_modal.insertAdjacentHTML("afterbegin", modalWindow )
    document.querySelector("body").style.overflowY="hidden";
    closeModalWindow()
}

const allProducts = document.querySelectorAll(".example")
if(allProducts) {
    allProducts.forEach(element => {
        element.addEventListener("click", function() {
            handleClick(event)
        } )
    });
}















// ---REVIEW SECTION OBJECTS FEEDBACKS---


// CREATING FUNCTION TO RETURN IMG NAME AND CONTENT FEEDBACK
function createPerson(img, name, title,stars, content) {
    return {
        img: img,
        name: name,
        title:title,
        stars: stars,
        content: content,


    };
}
// CREATING LIST OF OBJECT INVOKING FUNCTION ABOVE
const peopleFeedback1 = [
    createPerson("./img/feedback/people (1).jpg", "Sophia Adams", "Exceptional Service and Quality",4, `"The organic chicken I purchased was incredibly tender and flavorful. I'm a customer for life!"`),
    createPerson("./img/feedback/people (2).jpg", "Ethan Carter","A Five-Star Experience!",3,`"I love the quality and taste of the organic beef - it's worth every penny."`),
    createPerson("./img/feedback/people (3).jpg", "Olivia Johnson","Impressed Beyond Expectations",4, `"The organic pork chops were delicious and had a clean, pure taste."`),
    createPerson("./img/feedback/people (4).jpg", "Liam Anderson","Absolutely Delighted",4,` "The organic lamb I bought was so succulent; it made for a fantastic meal."`),
    createPerson("./img/feedback/people (5).jpg", "Emma Wilson","The Best I've Ever Had",5, ` "Organic bacon is a game-changer; it's so much tastier and healthier."`),

    createPerson("./img/feedback/people (6).jpg", "Noah Davis", "Top-Notch Quality and Service",4, `"The organic turkey we had for Thanksgiving was a hit; everyone loved it."`),
    createPerson("./img/feedback/people (7).jpg", "Ava Martin", "Exceptionally Satisfied", 5,`"Organic sausages are top-notch in flavor and quality."`),
    createPerson("./img/feedback/people (8).jpg", "Jackson Thomas","Perfection in Every Way",4,  `"The organic ground beef is perfect for making the juiciest burgers."`),
    createPerson("./img/feedback/people (9).jpg", "Isabella White","Unparalleled Excellence", 4, `"I appreciate the ethical practices behind these organic meat products."`),
    createPerson("./img/feedback/people (10).jpg", "Aiden Harris","Absolutely Fantastic!",5,  `"The organic steak I grilled was a mouthwatering experience."`),

]
const peopleFeedback2 = [

    createPerson("./img/feedback/people (11).jpg", "Adrian Kotyra", "A Wonderful Surprise",4, `"I feel good knowing that my family is eating meat free from harmful chemicals."`),
    createPerson("./img/feedback/people (12).jpg", "Mia Turner","Flawless and Fabulous",4, `"These organic hot dogs are a hit with my kids and guilt-free for me."`),
    createPerson("./img/feedback/people (13).jpg", "Lucas Clark", "Highly Impressed with Every Aspect", 5,`"The organic deli meats are so fresh and flavorful; my sandwiches have never been better."`),
    createPerson("./img/feedback/people (14).jpg", "Harper King", "Exceeded My Wildest Expectations",4, `"Organic ground turkey is a healthier alternative without sacrificing taste."`),
    createPerson("./img/feedback/people (15).jpg", "Oliver Lee","A True Gem",4, `"The organic ham was the star of our holiday feast; it was divine."`),
    createPerson("./img/feedback/people (16).jpg", "Amelia Wright", "Absolutely Worth It", 5,`"I'm impressed by the consistency in quality across all their organic meats."`),
    createPerson("./img/feedback/people (17).jpg", "Elijah Hall","Unbeatable Quality and Service",4,  `"I love knowing that the animals were raised with care in organic conditions."`),
    createPerson("./img/feedback/people (18).jpg", "Charlotte Baker", "Thrilled with the Experience",4, `"These organic meat products are a real treat for the taste buds."`),
    createPerson("./img/feedback/people (19).jpg", "Benjamin Scott","Incredibly Pleased - Thank You!",4, `"The organic chicken tenders make for a quick and tasty meal."`),
    createPerson("./img/feedback/people (20).jpg", "Mason Mitchell", "A Wonderful Surprise",5, `"Organic meat is worth the investment for its superior taste and health benefits."`),

]




// CREATING ONE BIG ELEMENT USING LIST DATA ABOCE

const objectLiteralPeopleFeedback = function(listofPeople) {
    const people = listofPeople;
    let peopleFeedbackContainer = '';

    for (let i = 0; i < people.length; i++) {
        let starsObjectIteral = ''; // Define starsObjectIteral inside the loop for each person

        for (let x = 0; x < people[i].stars; x++) {
            starsObjectIteral += `
                <img class="empty_star star_feedback1" src="./icons/star-full-icon.svg" alt="">
            `;
        }

        peopleFeedbackContainer += `
            <div class="review_col_container">
                <div class="review_col">
                    <div class="img_name_cont_rev">
                        <img class="img_review_person" src="${people[i].img}" alt="">
                        <p class="name_review_person">${people[i].name}</p>
                    </div>
                </div>
                <div class=feedback_col_text_star_cont>
                    <div class="review_col content_review">
                        <h3 id="title_review_person">${people[i].title}</h3>
                        <p>${people[i].content}</p>

                    </div>
                    <div class="stars_person_content">${starsObjectIteral}</div>
                </div>

            </div>
        `;
    }

    return peopleFeedbackContainer;
};



const allFeedbacks1 = objectLiteralPeopleFeedback(peopleFeedback1);
const allFeedbacks2 = objectLiteralPeopleFeedback(peopleFeedback2);
const feedbackContainer = document.querySelector(".review_section");
if(feedbackContainer) {
    feedbackContainer.insertAdjacentHTML("afterbegin", allFeedbacks1);
}


const btnMoreReview = document.querySelector("#button_display_more");
if (btnMoreReview) {
    btnMoreReview.addEventListener("click", function() {
        if(feedbackContainer.classList.contains("full")) {

        }
        else {
            feedbackContainer.insertAdjacentHTML("beforeend", allFeedbacks2);

            feedbackContainer.classList.add("full")
            btnMoreReview.remove()
        }

    })
}



// ---MODAL WINDOWS OBJECTS---
const gardeningChildren = {
    title: "Gardening Courses for Children",
    img_src: "./img/gardening/children/garden_children (2).jpg",
    text: "Ignite your child's curiosity and love for nature with Organic Me Company's exciting gardening course tailored exclusively for young green enthusiasts! Our engaging program is designed to inspire and educate children about the wonders of gardening in a fun and interactive way. Through hands-on activities, kids will explore the magic of seeds, learn about plant life cycles, and discover the joys of growing their own vibrant garden. ",
    href : "./children_courses.html"
}
const gardeningAdults = {
    title: "Gardening Courses for Adults",
    img_src: "./img/gardening/adults/garden_adults (3).jpg",
    text: "Unlock the wonders of gardening with Organic Me Company's exclusive course tailored for adults seeking a green-fingered journey! Dive into the world of organic cultivation through our comprehensive program designed to nurture both beginners and seasoned gardeners. Discover the art of sustainable gardening practices, learn expert techniques for soil enrichment, and delve into the secrets of cultivating vibrant, pesticide-free produce. ",
    href : "./adults_courses.html"
}
const narutalFlavor = {
    modal_title :"Natural Honey Flavor",
    modal_img1 :"./img/modal_windows/natural_flavor/img (1).jpg",
    modal_img1_title :"Crafted with care and dedication, our Organic Honey Flavor is a testament to our commitment to providing the finest, sustainably sourced ingredients for our customers. With a rich and luscious taste that's both sweet and aromatic, this honey flavor is the ideal accompaniment to elevate your organic meat dishes to new heights.",
    modal_img2 :"./img/modal_windows/natural_flavor/img (2).jpg",
    modal_img2_title :"Our Organic Honey Flavor is the result of a meticulous process that ensures it retains all the natural goodness of organic honey. It's sourced from hives nestled in pristine, pesticide-free environments, allowing the bees to forage freely and create a honey that's pure and unadulterated. Its distinct taste, infused with the essence of wildflowers, delivers a harmonious blend of sweetness and warmth that pairs effortlessly with our organic meats. ",
    modal_img3 :"./img/modal_windows/natural_flavor/img (3).jpg",
    modal_img3_title:"By choosing our Organic Honey Flavor, you're not only enhancing the taste of your dishes but also supporting sustainable farming practices. At the Organic Meat Company, we're dedicated to ensuring that our products are not only delicious but also environmentally responsible. We believe that our Organic Honey Flavor adds an exquisite touch to our organic meats, and we're proud to offer you a culinary experience that's rooted in quality, purity, and ethical farming practices.",
}

const EnvironmentalResponsibility  = {
    modal_title :"Environmental Responsibility",
    modal_img1 :"./img/modal_windows/EnvironmentalResponsibility/img (1).jpg",
    modal_img1_title :"Environmental Responsibility is a core principle at the Organic Meat Company, and our commitment extends beyond the quality of our products. We believe that a sustainable approach to agriculture is essential for the well-being of our planet and future generations. ",
    modal_img2 :"./img/modal_windows/EnvironmentalResponsibility/img (2).jpg",
    modal_img2_title :"Our farms are carefully managed to promote biodiversity, protect natural habitats, and prevent soil erosion. We prioritize the use of organic, non-GMO feed for our livestock, reducing the reliance on harmful pesticides and synthetic fertilizers. By opting for pasture-raised and free-range farming, we not only ensure the welfare of our animals but also minimize greenhouse gas emissions associated with confined animal farming systems. ",
    modal_img3 :"./img/modal_windows/EnvironmentalResponsibility/img (3).jpg",
    modal_img3_title:"Our dedication to environmental responsibility is an integral part of our mission, and we constantly strive to reduce our environmental footprint while providing our customers with the finest organic meat products. By choosing the Organic Meat Company, you're not just savoring the rich taste of our Organic Honey Flavor, but also supporting a commitment to a greener, more sustainable future.",
}

const ourMEat  = {
    modal_title :"Our Meat",
    modal_img1 :"./img/modal_windows/ourMEat/img (1).jpg",
    modal_img1_title :"At the heart of the Organic Meat Company, you'll find a passion for producing high-quality, organic meat that's second to none. Our organic meat is a testament to our unwavering commitment to the well-being of our animals, the environment, and the satisfaction of our customers. From the moment our livestock is born, we ensure they have access to lush, open pastures and organic, non-GMO feed. ",
    modal_img2 :"./img/modal_windows/ourMEat/img (2).jpg",
    modal_img2_title :"We understand that the journey from farm to table is a critical one. That's why we oversee every step of the process, from humane and ethical animal husbandry practices to responsible slaughter and meticulous butchery. Our organic meat is raised without the use of harmful chemicals, making it a healthier choice for you and your family. The result is meat that is lean, tender, and full of rich, natural flavor.",
    modal_img3 :"./img/modal_windows/ourMEat/img (3).jpg",
    modal_img3_title:"By choosing the Organic Meat Company, you're not just enjoying a delicious culinary experience; you're supporting sustainable, environmentally responsible farming practices. Our commitment to organic and regenerative agriculture helps reduce our environmental impact, preserving the earth's resources for future generations. ",
}

const ourMission  = {
    modal_title :"Our Mission",
    modal_img1  :"./img/modal_windows/ourMission/img (1).jpg",
    modal_img1_title :"The mission of the Organic Meat Company is deeply rooted in our core values, and it drives everything we do. Our primary aim is to provide our customers with the highest quality, organic meat products that promote health, sustainability, and ethical farming practices. We believe in a farm-to-table journey that not only delights the palate but also supports the well-being of our planet and our community.",
    modal_img2  :"./img/modal_windows/ourMission/img (2).jpg",
    modal_img2_title :"At the heart of our mission is a commitment to sustainability. We aspire to be a leading example of how agriculture can coexist harmoniously with the environment. This means ensuring that our farming practices promote biodiversity, reduce carbon emissions, and protect natural habitats. ",
    modal_img3 :"./img/modal_windows/ourMission/img (3).jpg",
    modal_img3_title:"Additionally, we are dedicated to fostering a sense of responsibility and awareness among our customers. Our mission includes educating consumers about the benefits of organic farming, transparency in food sourcing, and the importance of making conscious, environmentally-friendly choices. By selecting the Organic Meat Company, our customers not only enjoy exceptional meat but also actively participate in the promotion of responsible and sustainable agriculture. ",
}
const farming  = {
    modal_title :"Our farming",
    modal_img1  :"./img/modal_windows/about_farming/farming (1).jpg",
    modal_img1_title :"The mission of the Organic Meat Company is deeply rooted in our core values, and it drives everything we do. Our primary aim is to provide our customers with the highest quality, organic meat products that promote health, sustainability, and ethical farming practices. We believe in a farm-to-table journey that not only delights the palate but also supports the well-being of our planet and our community.",
    modal_img2  :"./img/modal_windows/about_farming/farming (2).jpg",
    modal_img2_title :"At the heart of our mission is a commitment to sustainability. We aspire to be a leading example of how agriculture can coexist harmoniously with the environment. This means ensuring that our farming practices promote biodiversity, reduce carbon emissions, and protect natural habitats. ",
    modal_img3 :"./img/modal_windows/about_farming/farming (3).jpg",
    modal_img3_title:"Additionally, we are dedicated to fostering a sense of responsibility and awareness among our customers. Our mission includes educating consumers about the benefits of organic farming, transparency in food sourcing, and the importance of making conscious, environmentally-friendly choices. By selecting the Organic Meat Company, our customers not only enjoy exceptional meat but also actively participate in the promotion of responsible and sustainable agriculture. ",
}

const animals  = {
    modal_title :"Our Animals",
    modal_img1  :"./img/modal_windows/about_farming/animals (1).jpg",
    modal_img1_title :"The mission of the Organic Meat Company is deeply rooted in our core values, and it drives everything we do. Our primary aim is to provide our customers with the highest quality, organic meat products that promote health, sustainability, and ethical farming practices. We believe in a farm-to-table journey that not only delights the palate but also supports the well-being of our planet and our community.",
    modal_img2  :"./img/modal_windows/about_farming/animals (2).jpg",
    modal_img2_title :"At the heart of our mission is a commitment to sustainability. We aspire to be a leading example of how agriculture can coexist harmoniously with the environment. This means ensuring that our farming practices promote biodiversity, reduce carbon emissions, and protect natural habitats. ",
    modal_img3 :"./img/modal_windows/about_farming/animals (3).jpg",
    modal_img3_title:"Additionally, we are dedicated to fostering a sense of responsibility and awareness among our customers. Our mission includes educating consumers about the benefits of organic farming, transparency in food sourcing, and the importance of making conscious, environmentally-friendly choices. By selecting the Organic Meat Company, our customers not only enjoy exceptional meat but also actively participate in the promotion of responsible and sustainable agriculture. ",
}

const transparency  = {
    modal_title :"Our Transparency",
    modal_img1  :"./img/modal_windows/about_farming/transparency (1).jpg",
    modal_img1_title :"The mission of the Organic Meat Company is deeply rooted in our core values, and it drives everything we do. Our primary aim is to provide our customers with the highest quality, organic meat products that promote health, sustainability, and ethical farming practices. We believe in a farm-to-table journey that not only delights the palate but also supports the well-being of our planet and our community.",
    modal_img2  :"./img/modal_windows/about_farming/transparency (2).jpg",
    modal_img2_title :"At the heart of our mission is a commitment to sustainability. We aspire to be a leading example of how agriculture can coexist harmoniously with the environment. This means ensuring that our farming practices promote biodiversity, reduce carbon emissions, and protect natural habitats. ",
    modal_img3 :"./img/modal_windows/about_farming/transparency (3).jpg",
    modal_img3_title:"Additionally, we are dedicated to fostering a sense of responsibility and awareness among our customers. Our mission includes educating consumers about the benefits of organic farming, transparency in food sourcing, and the importance of making conscious, environmentally-friendly choices. By selecting the Organic Meat Company, our customers not only enjoy exceptional meat but also actively participate in the promotion of responsible and sustainable agriculture. ",
}


const galleryFood = {
    modal_title: "Dishes Ideas",

    object1_p: "Lamb Kebabs",
    img1: "./img/modal_windows/gallery_dishes/meat_gallery (1).jpg",
    img1_sub:  "./img/modal_windows/gallery_dishes/meat_gallery_meal (1).jpg",

    object2_p: "Chicken Alfredo",
    img2: "./img/modal_windows/gallery_dishes/meat_gallery (2).jpg",
    img2_sub:  "./img/modal_windows/gallery_dishes/meat_gallery_meal (2).jpg",

    object3_p: "Beef Stroganoff",
    img3: "./img/modal_windows/gallery_dishes/meat_gallery (3).jpg",
    img3_sub:  "./img/modal_windows/gallery_dishes/meat_gallery_meal (3).jpg",

    object4_p: "Turkey Club Sandwich",
    img4: "./img/modal_windows/gallery_dishes/meat_gallery (4).jpg",
    img4_sub:  "./img/modal_windows/gallery_dishes/meat_gallery_meal (4).jpg",

    object5_p: "Pork Tacos",
    img5: "./img/modal_windows/gallery_dishes/meat_gallery (5).jpg",
    img5_sub:  "./img/modal_windows/gallery_dishes/meat_gallery_meal (5).jpg",

    object6_p: "Chicken Parmesan",
    img6: "./img/modal_windows/gallery_dishes/meat_gallery (6).jpg",
    img6_sub:  "./img/modal_windows/gallery_dishes/meat_gallery_meal (6).jpg",

    object7_p: "Beef Chilli",
    img7: "./img/modal_windows/gallery_dishes/meat_gallery (7).jpg",
    img7_sub:  "./img/modal_windows/gallery_dishes/meat_gallery_meal (7).jpg",

    object8_p: "Lamb Curry:",
    img8: "./img/modal_windows/gallery_dishes/meat_gallery (8).jpg",
    img8_sub:  "./img/modal_windows/gallery_dishes/meat_gallery_meal (8).jpg",

    object9_p: "Pulled Pork Sandwich",
    img9: "./img/modal_windows/gallery_dishes/meat_gallery (9).jpg",
    img9_sub:  "./img/modal_windows/gallery_dishes/meat_gallery_meal (9).jpg",

}

function displayModalWindow(object_modal) {


// -----MODAL WINDOW LITERAL OBJECT-----
const modalWindow =
    `<div class="modal_window_all">
    <img class="modal_window_cross"src="./icons/cross.svg" alt="">
    <div class="modal_window">
        <div class="modal_window_content">
            <div class="modal_wrapper">

                <div class="modal_window_content_text">
                    <h3> ${object_modal.modal_title}</h3>
                    <div class="modal_col_container">
                        <div class="col_modal col_image_modal">
                            <img src="${object_modal.modal_img1}" alt="">
                        </div>
                        <div class="col_modal col_text_modal">
                            <p>${object_modal.modal_img1_title}</p>
                        </div>


                    </div>
                    <div class="modal_col_container modal_col_2">
                        <div class="col_modal col_image_modal">
                            <img src="${object_modal.modal_img2}" alt="">
                        </div>
                        <div class="col_modal col_text_modal">
                            <p>${object_modal.modal_img2_title}</p>
                        </div>


                    </div>
                    <div class="modal_col_container">
                        <div class="col_modal col_image_modal">
                            <img src="${object_modal.modal_img3}" alt="">
                        </div>
                        <div class="col_modal col_text_modal">
                            <p>${object_modal.modal_img3_title}</p>
                        </div>


                    </div>
                </div>

            </div>

        </div>



    </div>
    </div>
    `
    const modalWindowHTMLContent = document.querySelector(".modalWindowContainer")

    const modalWindowContainer = document.querySelector(".modalWindowContainer");
    modalWindowContainer.insertAdjacentHTML("afterbegin", modalWindow);

    // ---STOP WEBPAGE FROM SCROLLING WHEN MODAL POP UP---
    document.querySelector("body").style.overflowY="hidden";

}



function displayModalWindowImagesGardening(object_modal) {


    // -----MODAL WINDOW LITERAL OBJECT-----
    const modalWindow =
        `    <div class="modal_window_all">
        <img class="modal_window_cross"src="./icons/cross.svg" alt="">
        <div class="modal_window">
            <div class="modal_window_content">
                <div class="modal_wrapper">

                    <div class="modal_window_content_text_gardening">
                        <div class="gardening_container">
                            <div class="gardening_col">
                                <img src="${object_modal.img_src}" alt="">

                            </div>
                            <div class="gardening_col gard_col">
                                <div class="gard_text">
                                    <h3>${object_modal.title}</h3>
                                    <p>${object_modal.text}</p>
                                    <a href=${object_modal.href}>
                                        <button class="button_main" id="gard_button">
                                            Sign Up now

                                        </button>
                                    </a>
                                </div>

                            </div>



                        </div>








                    </div>



                </div>

            </div>

        </div>



    </div>`
    const img_container_modal_gallery = document.querySelector(".img_container_modal_gallery");

    const modalWindowHTMLContent = document.querySelector(".modalWindowContainer")

    const modalWindowContainer = document.querySelector(".modalWindowContainer");
    modalWindowContainer.insertAdjacentHTML("afterbegin", modalWindow);

    // ---STOP WEBPAGE FROM SCROLLING WHEN MODAL POP UP---
    document.querySelector("body").style.overflowY="hidden";

}
function displayModalWindowImages(object_modal) {


    // -----MODAL WINDOW LITERAL OBJECT-----
    const modalWindow =
        `<div class="modal_window_all">
        <img class="modal_window_cross"src="./icons/cross.svg" alt="">
        <div class="modal_window">
            <div class="modal_window_content">
                <div class="modal_wrapper">

                    <div class="modal_window_content_text">
                        <h3> ${object_modal.modal_title}</h3>
                        <div class="about_3_cols_container">
                            <div class="cols_col modal_gallery_wind" id="cols_about_1">
                                <img id="visible_img" src="${object_modal.img1}" alt="">
                                <div id="invisible_img">
                                    <p>${object_modal.object1_p}</p>
                                    <img class="img_inv" src="${object_modal.img1_sub}" alt="">
                                </div>


                            </div>
                            <div class="cols_col modal_gallery_wind" id="cols_about_1">
                                <img id="visible_img" src="${object_modal.img2}" alt="">
                                <div id="invisible_img">
                                    <p>${object_modal.object2_p}</p>
                                    <img class="img_inv" src="${object_modal.img2_sub}" alt="">
                                </div>


                            </div>
                            <div class="cols_col modal_gallery_wind" id="cols_about_1">
                                <img id="visible_img" src="${object_modal.img3}" alt="">
                                <div id="invisible_img">
                                    <p>${object_modal.object3_p}</p>
                                    <img class="img_inv" src="${object_modal.img3_sub}" alt="">
                                </div>


                            </div>
                        </div>
                        <div class="about_3_cols_container">
                            <div class="cols_col modal_gallery_wind" id="cols_about_1">
                                <img id="visible_img" src="${object_modal.img4}" alt="">
                                <div id="invisible_img">
                                    <p>${object_modal.object4_p}</p>
                                    <img class="img_inv" src="${object_modal.img4_sub}" alt="">
                                </div>


                            </div>
                            <div class="cols_col modal_gallery_wind" id="cols_about_1">
                                <img id="visible_img" src="${object_modal.img5}" alt="">
                                <div id="invisible_img">
                                    <p>${object_modal.object5_p}</p>
                                    <img class="img_inv" src="${object_modal.img5_sub}" alt="">
                                </div>


                            </div>
                            <div class="cols_col modal_gallery_wind" id="cols_about_1">
                                <img id="visible_img" src="${object_modal.img6}" alt="">
                                <div id="invisible_img">
                                    <p>${object_modal.object6_p}</p>
                                    <img class="img_inv" src="${object_modal.img6_sub}" alt="">
                                </div>


                            </div>
                        </div>
                        <div class="about_3_cols_container">
                        <div class="cols_col modal_gallery_wind" id="cols_about_1">
                            <img id="visible_img" src="${object_modal.img7}" alt="">
                            <div id="invisible_img">
                                <p>${object_modal.object7_p}</p>
                                <img class="img_inv" src="${object_modal.img7_sub}" alt="">
                            </div>


                        </div>
                        <div class="cols_col modal_gallery_wind" id="cols_about_1">
                            <img id="visible_img" src="${object_modal.img8}" alt="">
                            <div id="invisible_img">
                                <p>${object_modal.object8_p}</p>
                                <img class="img_inv" src="${object_modal.img8_sub}" alt="">
                            </div>


                        </div>
                        <div class="cols_col modal_gallery_wind" id="cols_about_1">
                            <img id="visible_img" src="${object_modal.img9}" alt="">
                            <div id="invisible_img">
                                <p>${object_modal.object9_p}</p>
                                <img class="img_inv" src="${object_modal.img9_sub}" alt="">
                            </div>


                        </div>
                        </div>
                        </div>








                    </div>



                    </div>

                </div>

            </div>



        </div>
        </div>
        `
        const img_container_modal_gallery = document.querySelector(".img_container_modal_gallery");

        const modalWindowHTMLContent = document.querySelector(".modalWindowContainer")

        const modalWindowContainer = document.querySelector(".modalWindowContainer");
        modalWindowContainer.insertAdjacentHTML("afterbegin", modalWindow);

        // ---STOP WEBPAGE FROM SCROLLING WHEN MODAL POP UP---
        document.querySelector("body").style.overflowY="hidden";

}


const modal_dishes_ideas_btn = document.querySelector("#modal_dishes_ideas_btn")



const cols_about1 = document.querySelector("#cols_about_1");
const cols_about2 = document.querySelector("#cols_about_2");
const cols_about3 = document.querySelector("#cols_about_3");

const MeatModalButton = document.querySelector("#meat_button");
const MissionModalButton = document.querySelector("#mission_button");
const naturalFalvorButton1 = document.querySelector(".sticky_img_left1")
const naturalFalvorButton2 = document.querySelector(".sticky_img_left2")
const honeyWebButton1 = document.querySelector(".honey_btn1")
const honeyWebButton2 = document.querySelector(".honey_btn2")
const beefWebButton1 = document.querySelector(".beef_btn1")
const beefWebButton2 = document.querySelector(".beef_btn2")
const porkWebButton1 = document.querySelector(".pork_btn1")
const porkWebButton2 = document.querySelector(".pork_btn2")
const duckWebButton1 = document.querySelector(".duck_btn1")
const duckWebButton2 = document.querySelector(".duck_btn2")
const chickenWebButton1 = document.querySelector(".chicken_btn1")
const chickenWebButton2 = document.querySelector(".chicken_btn2")
const turkeyWebButton1 = document.querySelector(".turkey_btn1")
const turkeyWebButton2 = document.querySelector(".turkey_btn2")
const vealWebButton1 = document.querySelector(".veal_btn1")
const vealWebButton2 = document.querySelector(".veal_btn2")
const lambWebButton1 = document.querySelector(".lamb_btn1")
const lambWebButton2 = document.querySelector(".lamb_btn2")
const about_3_cols_container = document.querySelector(".about_3_cols_container")
const cols_about_1_garden = document.querySelector("#cols_about_1_garden");
const cols_about_2_garden = document.querySelector("#cols_about_2_garden");

// ---INVOKING FUNCTIONS PASSING OBJECTS TO DISPLAY MODAL WINDOWS---

const injectingModalDefault = function(ObjectModal) {
    const modalWindowHTMLContainer = document.querySelector(".modalWindowContainer")
    modalWindowHTMLContainer.style.display="block"
    displayModalWindow(ObjectModal)
    closeModalWindow()
}
if(cols_about_1_garden) {
    cols_about_1_garden.addEventListener("click", function() {
        displayModalWindowImagesGardening(gardeningChildren)
        closeModalWindow()
    })
}
if(cols_about_2_garden) {
    cols_about_2_garden.addEventListener("click", function() {
        displayModalWindowImagesGardening(gardeningAdults)
        closeModalWindow()
    })
}
if(cols_about1) {
    cols_about1.addEventListener("click", function() {
        injectingModalDefault(farming)
    })
}
if(cols_about2) {
    cols_about2.addEventListener("click", function() {
        injectingModalDefault(animals)
    })
}
if(cols_about3) {
    cols_about3.addEventListener("click", function() {
        injectingModalDefault(transparency)
    })
}
if(modal_dishes_ideas_btn) {
    modal_dishes_ideas_btn.addEventListener("click", function() {
        const modalWindowHTMLContainer = document.querySelector(".modalWindowContainer")
        modalWindowHTMLContainer.style.display="block"
        displayModalWindowImages(galleryFood)
        closeModalWindow()
    })
}
if(naturalFalvorButton1) {
    naturalFalvorButton1.addEventListener("click", function() {
        injectingModalDefault(narutalFlavor)
    })
}
if(honeyWebButton1) {
    honeyWebButton1.addEventListener("click", function() {
        injectingModalDefault(narutalFlavor)
    })
}
if(honeyWebButton2) {
    honeyWebButton2.addEventListener("click", function() {
        injectingModalDefault(EnvironmentalResponsibility)
    })
}


if(naturalFalvorButton2) {
    naturalFalvorButton2.addEventListener("click", function() {
        injectingModalDefault(EnvironmentalResponsibility)
    })
}

if(MissionModalButton) {
MissionModalButton.addEventListener("click", function() {
    injectingModalDefault(ourMission)
})
}
if(MeatModalButton) {
MeatModalButton.addEventListener("click", function() {
    injectingModalDefault(ourMEat)
})
}

function displayVideo() {
    const objectLiteralVideoWindowPopUp =
    `
        <div class="modal_window_all">
            <div class="cross_video_container">
            <img class="modal_window_cross" id="cross_video"src="./icons/cross.svg" alt="">
            </div>

            <div class="modal_window">
                <div class="modal_window_content_video">
                    <div class="modal_wrapper">
                        <div class="video_container">

                            <iframe  id="video_modal" width="100%" height="100%" src="https://www.youtube.com/embed/Lr1PdhwTkxg" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


                        </div>


                    </div>

                </div>



            </div>
        /div>
    `
    const modalWindowHTMLContent = document.querySelector(".modalWindowContainer")

    const modalWindowContainer = document.querySelector(".modalWindowContainer");
    modalWindowContainer.insertAdjacentHTML("afterbegin", objectLiteralVideoWindowPopUp);
    // ---STOP WEBPAGE FROM SCROLLING WHEN MODAL POP UP---
    document.querySelector("body").style.overflowY="hidden";


}

const videoButtonShowModal = document.querySelector("#video_button");
if (videoButtonShowModal) {
videoButtonShowModal.addEventListener("click", function() {
    displayVideo()
    closeModalWindow()

})
}

function closeModalWindow(modalObject) {

    const modalWindowHTMLContainer = document.querySelector(".modal_window_all")
    const crossModal = document.querySelector(".modal_window_cross");
    crossModal.addEventListener("click", function() {
        document.querySelector("body").style.overflowY="scroll";
        modalWindowHTMLContainer.style.display="none"
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
        stopVideos()
    })

   /**
 * Stop all iframes or HTML5 <video>'s from playing
 */


}








// -----ADDING ACTIVE LINK STICKY NAV MEAT CATS------

function addingUnderlineActiveLinks() {
    const allStickyLines = document.querySelectorAll(".arrow_link");
    const allStickyLinks = document.querySelectorAll(".link_img");
    allStickyLinks.forEach(element=>element.addEventListener("click", function(){
        const closestArrow = element.querySelector(".arrow_link");
        if (closestArrow) {
            if(closestArrow.classList.contains("arrow_link_active")) {
                closestArrow.classList.remove("arrow_link_active");
            }
            else {
                  // DEACTIVE ALL LINES BEFORE APPLY ACTIVE CLASS TO SELECTED ONE
                allStickyLines.forEach(line=>line.classList.remove("arrow_link_active"));
                setTimeout(() => {


                closestArrow.classList.add("arrow_link_active")


            }, 1);
            }


        }

    }))

}

addingUnderlineActiveLinks()


// -------------SLIDER TREND--------------
// ----------slider-----------

const left_button = document.querySelector("#arrow_left_trend")
const right_button = document.querySelector(".arrow_right_trend")

const slides = document.querySelectorAll(".slider")



let curSlide = 0
const maxSlides = slides.length
goToSlide(curSlide)
function nextSlide() {
    if (curSlide===maxSlides-4) {
        curSlide=0
    }
    else {
        curSlide ++

    }

    goToSlide(curSlide)

}

function prevSlide() {
    if (curSlide===0) {
        curSlide=maxSlides-4
    }
    else {
        curSlide --

    }

    goToSlide(curSlide)


}

if (right_button) {
right_button.addEventListener("click", function() {
    nextSlide()
    slides.forEach(function(slide, index) {
        slide.style.transform=`translateX(${100 * (index-curSlide)}%)`}
    )


})
}

function goToSlide(curSlide) {
    slides.forEach(function(slide, index) {
        slide.style.transform=`translateX(${100 * (index-curSlide)}%)`}
    )
}
if (left_button) {
left_button.addEventListener("click", function() {
    goToSlide(curSlide)
    prevSlide()
})
}

























// MOBILENAVOBJECTS FOR EACH PRODUCT



const navMobileBeef = {
    title: "Beef Products",
    img1: "./img/beef/sticky_nav_imgs/beef_sticky (1).jpg",
    img2: "./img/beef/sticky_nav_imgs/beef_sticky (2).jpg",
    img3: "./img/beef/sticky_nav_imgs/beef_sticky (3).jpg",
    img4: "./img/beef/sticky_nav_imgs/beef_sticky (4).jpg",
    img5: "./img/beef/sticky_nav_imgs/beef_sticky (5).jpg",
    img6: "./img/beef/sticky_nav_imgs/beef_sticky (6).jpg",

    imgTitle1: "Sirloin",
    imgTitle2: "Ribeye",
    imgTitle3: "Tenderloin",
    imgTitle4: "Chuck",
    imgTitle5: "Brisket",
    imgTitle6: "Flank Steak",

    link: "beef.html",
    description: "Our organic beef is a result of meticulous care and environmentally friendly practices. Our cattle are raised in open pastures where they graze on lush organic grasses and feed, leading to lean, flavorful, and naturally marbled beef. "

}

const navMobilePork = {
    title: "Pork Products",
    img1: "./img/pork/sticky_nav_imgs/pork_sticky (1).jpg",
    img2: "./img/pork/sticky_nav_imgs/pork_sticky (2).jpg",
    img3: "./img/pork/sticky_nav_imgs/pork_sticky (3).jpg",
    img4: "./img/pork/sticky_nav_imgs/pork_sticky (4).jpg",
    img5: "./img/pork/sticky_nav_imgs/pork_sticky (5).jpg",
    img6: "./img/pork/sticky_nav_imgs/pork_sticky (6).jpg",

    imgTitle1:  "Pork Loin",
    imgTitle2: "Pork Shoulder",
    imgTitle3: "Pork Belly",
    imgTitle4: "Pork Ribs",
    imgTitle5: "Pork Tenderloin",
    imgTitle6: "Pork Sausage",

    link: "pork.html",
    description: "Our pigs enjoy a life free from confinement, and their diet consists of organic, natural ingredients, resulting in pork that's tender, flavorful, and free from additives and antibiotics. "

}
const navMobileHoney = {
    title: "Honey Products",
    img1: "./img/honey/sticky_nav_imgs/honey_sticky (1).jpg",

    img2:  "./img/honey/sticky_nav_imgs/honey_sticky (2).jpg",

    img3:  "./img/honey/sticky_nav_imgs/honey_sticky (3).jpg",

    img4:  "./img/honey/sticky_nav_imgs/honey_sticky (4).jpg",

    img5:  "./img/honey/sticky_nav_imgs/honey_sticky (5).jpg",

    img6:  "./img/honey/sticky_nav_imgs/honey_sticky (6).jpg",

    imgTitle1: "Clover Honey",
    imgTitle2: "Wildflower Honey",
    imgTitle3: "Orange Blossom Honey",
    imgTitle4: "Lavender Honey",
    imgTitle5: "Manuka Honey",
    imgTitle6: "Acacia Honey",

    link: "honey.html",
    description: "Our organic honey is more than just a sweetener; it's a symbol of our unwavering dedication to the highest standards of organic agriculture. Enjoy the unparalleled taste of nature in a jar, with our organic honey that is as good for your taste buds as it is for the environment."

}
const navMobileDuck = {
    title: "Duck Products",
    img1: "./img/duck/sticky_nav_imgs/duck_sticky (1).jpg",

    img2: "./img/duck/sticky_nav_imgs/duck_sticky (2).jpg",

    img3: "./img/duck/sticky_nav_imgs/duck_sticky (3).jpg",

    img4: "./img/duck/sticky_nav_imgs/duck_sticky (4).jpg",

    img5: "./img/duck/sticky_nav_imgs/duck_sticky (5).jpg",

    img6: "./img/duck/sticky_nav_imgs/duck_sticky (6).jpg",

    imgTitle1: "Duck Breast",
    imgTitle2: "Duck Leg",
    imgTitle3: "Duck Thigh",
    imgTitle4: "Duck Wings",
    imgTitle5: "Duck Drumstick",
    imgTitle6: "Duck Liver",
    link: "duck.html",
    description: "We take immense pride in presenting our exceptional organic duck, a true embodiment of ethical farming and exquisite taste. Our commitment to organic principles means our ducks are raised in spacious, natural environments where they have access to fresh air and are nourished with organic grains and feed."

}

const navMobileLamb = {
    title: "Lamb Products",
    img1: "./img/lamb/sticky_nav_imgs/lamb_sticky (1).jpg",
    img2: "./img/lamb/sticky_nav_imgs/lamb_sticky (2).jpg",
    img3: "./img/lamb/sticky_nav_imgs/lamb_sticky (3).jpg",
    img4: "./img/lamb/sticky_nav_imgs/lamb_sticky (4).jpg",
    img5: "./img/lamb/sticky_nav_imgs/lamb_sticky (5).jpg",
    img6: "./img/lamb/sticky_nav_imgs/lamb_sticky (6).jpg",


    imgTitle1: "Lamb Chop",
    imgTitle2: "Lamb Scallopini",
    imgTitle3: "Lamb Osso Buco",
    imgTitle4: "Lamb Tenderloin",
    imgTitle5: "Lamb Rib",
    imgTitle6: "Lamb Shank",
    link: "lamb.html",
    description: " Our lambs graze on open pastures, enjoying a natural and stress-free life, nourished by organic feed that's free from harmful chemicals and antibiotics. This results in lamb meat that's incredibly tender, flavorful, and pristine in every way. "

}
const navMobileVeal = {
    title: "Veal Products",
    img1: "./img/veal/sticky_nav_imgs/veal_sticky (1).jpg",
    img2: "./img/veal/sticky_nav_imgs/veal_sticky (2).jpg",
    img3: "./img/veal/sticky_nav_imgs/veal_sticky (3).jpg",
    img4: "./img/veal/sticky_nav_imgs/veal_sticky (4).jpg",
    img5: "./img/veal/sticky_nav_imgs/veal_sticky (5).jpg",
    img6: "./img/veal/sticky_nav_imgs/veal_sticky (6).jpg",


    imgTitle1: "Veal Chop",
    imgTitle2: "Veal Scallopini",
    imgTitle3: "Veal Osso Buco",
    imgTitle4: "Veal Tenderloin",
    imgTitle5: "Veal Rib",
    imgTitle6: "Veal Shank",
    link: "veal.html",
    description: "Our veal calves enjoy spacious and natural surroundings, where they are raised with the utmost care and provided with organic feed that's free from synthetic additives and antibiotics. The outcome is veal meat that's exquisitely tender, mild in flavor, and pure in every sense. "

}
const navMobileChicken = {
    title: "Chicken Products",
    img1: "./img/chicken/sticky_nav_imgs/chicken_sticky (1).jpg",
    img2: "./img/chicken/sticky_nav_imgs/chicken_sticky (2).jpg",
    img3: "./img/chicken/sticky_nav_imgs/chicken_sticky (3).jpg",
    img4: "./img/chicken/sticky_nav_imgs/chicken_sticky (4).jpg",
    img5: "./img/chicken/sticky_nav_imgs/chicken_sticky (5).jpg",
    img6: "./img/chicken/sticky_nav_imgs/chicken_sticky (6).jpg",


    imgTitle1: "Chicken Breast",
    imgTitle2: "Chicken Thigh",
    imgTitle3: "Chicken Drumstick",
    imgTitle4: "Chicken Wing",
    imgTitle5: "Brisket",
    imgTitle6: "Flank Chicken Leg",
    link: "chickens.html",
    description: " Our organic chickens are raised in spacious, natural surroundings, where they have the freedom to roam and are provided with organic feed that's free from harmful chemicals and antibiotics. The result is chicken meat that's exceptionally tender, flavorful, and pure, reflecting the very best of nature.  "

}

const navMobileTurkey = {
    title: "turkey Products",
    img1: "./img/turkey/sticky_nav_imgs/turkey_sticky (1).jpg",
    img2: "./img/turkey/sticky_nav_imgs/turkey_sticky (2).jpg",
    img3: "./img/turkey/sticky_nav_imgs/turkey_sticky (3).jpg",
    img4: "./img/turkey/sticky_nav_imgs/turkey_sticky (4).jpg",
    img5: "./img/turkey/sticky_nav_imgs/turkey_sticky (5).jpg",
    img6: "./img/turkey/sticky_nav_imgs/turkey_sticky (6).jpg",


    imgTitle1: "Turkey Breast",
    imgTitle2: "Turkey Thigh",
    imgTitle3: "Turkey Wings",
    imgTitle4: "Turkey Drumsticks",
    imgTitle5: "Turkey Neck",
    imgTitle6: "Turkey Back",
    link: "turkey.html",
    description: "Organic turkey meat from an organic meat company involves highlighting the superior quality and ethical standards that come with this delectable poultry choice. Our organic turkey is raised with the utmost care and respect for the environment and animal welfare. "

}


















// OBJECTS REVIEWS COUNT 5

const review1 = {
    img_src: "./img/review_imgs/review_img (1).jpg",
    title: "Organic Bliss in Every Bite!",
    stars: `<img src="./icons/star.svg" alt="">
            <img src="./icons/star.svg" alt="">
            <img src="./icons/star.svg" alt="">
            <img src="./icons/star.svg" alt="">`,
    feedback:  "I recently tried Organic Meat's chicken breasts for a homemade curry, and the results were phenomenal! The meat was incredibly tender and full of flavor, and I felt good knowing it was sourced sustainably. I can't wait to explore more recipes with their organic meats.",

    reviewer: "Emily J."


}
const review2 = {
    img_src: "./img/review_imgs/review_img (2).jpg",
    title: "Sustainability Meets Deliciousness!",
    stars: `<img src="./icons/star.svg" alt="">
            <img src="./icons/star.svg" alt="">
            <img src="./icons/star.svg" alt="">
            <img src="./icons/star.svg" alt="">`,
    feedback:  '"Last night, I cooked a hearty spaghetti bolognese with Organic Meats ground beef, and it was a hit with my family. The taste was impeccable, and knowing that its organic made it even better. I appreciate their dedication to responsible farming practices."',
    reviewer: "David S."


}
const review3 = {
    img_src: "./img/review_imgs/review_img (3).jpg",
    title: "Honey-Glazed Perfection!",
    stars: `<img src="./icons/star.svg" alt="">
            <img src="./icons/star.svg" alt="">
            <img src="./icons/star.svg" alt="">
            <img src="./icons/star.svg" alt="">
            <img src="./icons/star.svg" alt="">`,
    feedback:  '"I used Organic Meats organic honey to glaze a roasted ham for a special occasion, and it turned out to be a showstopper! The honeys subtle sweetness added the perfect touch to the dish, and its great to support a brand that prioritizes environmental responsibility."',
    reviewer: "Sophia R."


}
const review4 = {
    img_src: "./img/review_imgs/review_img (4).jpg",
    title: "Unbeatable Organic Steaks!",
    stars: `<img src="./icons/star.svg" alt="">
            <img src="./icons/star.svg" alt="">
            <img src="./icons/star.svg" alt="">`,
    feedback:  '"Organic Meats ribeye steaks made for a restaurant-quality meal at home. They were succulent and flavorful, and I could tell the difference in taste and quality. Its a pleasure to indulge in organic meats that are not only delicious but also ethically sourced."',
    reviewer: "Daniel M."


}
const review5 = {
    img_src: "./img/review_imgs/review_img (5).jpg",
    title: "Top-Notch Pork Chops!",
    stars: `
            <img src="./icons/star.svg" alt="">
            <img src="./icons/star.svg" alt="">
            <img src="./icons/star.svg" alt="">
            <img src="./icons/star.svg" alt="">`,
    feedback:  '"I made pan-seared pork chops using Organic Meas organic pork, and they were absolutely scrumptious. The quality was evident from the first bite, and I appreciate the companys commitment to sustainable farming. Cant wait to explore their other cuts of meat!',
    reviewer: "Sarah H."

}
// ----STICKY NAVS OBJECTS----
const stickyNavDropdownObject1 = {
    // ---honey---
    img1_src: "./img/honey/sticky_nav_imgs/honey_sticky (1).jpg",
    img1_title: "Clover Honey",
    img2_src:  "./img/honey/sticky_nav_imgs/honey_sticky (2).jpg",
    img2_title: "Wildflower Honey",
    img3_src:  "./img/honey/sticky_nav_imgs/honey_sticky (3).jpg",
    img3_title: "Orange Blossom Honey",
    img4_src:  "./img/honey/sticky_nav_imgs/honey_sticky (4).jpg",
    img4_title: "Lavender Honey",
    img5_src:  "./img/honey/sticky_nav_imgs/honey_sticky (5).jpg",
    img5_title: "Manuka Honey",
    img6_src:  "./img/honey/sticky_nav_imgs/honey_sticky (6).jpg",
    img6_title: "Acacia Honey",

    link: "honey.html",
    object1TextTitle : "Orgnaic Honey",
    object2TextH3 : "Our organic honey is more than just a sweetener; it's a symbol of our unwavering dedication to the highest standards of organic agriculture. Enjoy the unparalleled taste of nature in a jar, with our organic honey that is as good for your taste buds as it is for the environment.",



}

const stickyNavDropdownObject2 = {

    img1_src: "./img/duck/sticky_nav_imgs/duck_sticky (1).jpg",
    img1_title: "Duck Breast",
    img2_src: "./img/duck/sticky_nav_imgs/duck_sticky (2).jpg",
    img2_title: "Duck Leg",
    img3_src: "./img/duck/sticky_nav_imgs/duck_sticky (3).jpg",
    img3_title: "Duck Thigh",
    img4_src: "./img/duck/sticky_nav_imgs/duck_sticky (4).jpg",
    img4_title: "Duck Wings",
    img5_src: "./img/duck/sticky_nav_imgs/duck_sticky (5).jpg",
    img5_title: "Duck Drumstick",
    img6_src: "./img/duck/sticky_nav_imgs/duck_sticky (6).jpg",
    img6_title: "Duck Liver",

    link: "duck.html",
    object1TextTitle : "Organic Duck",
    object2TextH3 : "We take immense pride in presenting our exceptional organic duck, a true embodiment of ethical farming and exquisite taste. Our commitment to organic principles means our ducks are raised in spacious, natural environments where they have access to fresh air and are nourished with organic grains and feed.",



}
const stickyNavDropdownObject3 = {

    img1_src: "./img/pork/sticky_nav_imgs/pork_sticky (1).jpg",
    img1_title: "Pork Loin",
    img2_src: "./img/pork/sticky_nav_imgs/pork_sticky (2).jpg",
    img2_title: "Pork Shoulder",
    img3_src: "./img/pork/sticky_nav_imgs/pork_sticky (3).jpg",
    img3_title: "Pork Belly",
    img4_src: "./img/pork/sticky_nav_imgs/pork_sticky (4).jpg",
    img4_title: "Pork Ribs",
    img5_src: "./img/pork/sticky_nav_imgs/pork_sticky (5).jpg",
    img5_title: "Pork Tenderloin",
    img6_src: "./img/pork/sticky_nav_imgs/pork_sticky (6).jpg",
    img6_title: "Pork Sausage",

    link: "pork.html",
    object1TextTitle : "Organic Pork",
    object2TextH3 : "Our pigs enjoy a life free from confinement, and their diet consists of organic, natural ingredients, resulting in pork that's tender, flavorful, and free from additives and antibiotics. ",


}

const stickyNavDropdownObject4 = {

    img1_src: "./img/beef/sticky_nav_imgs/beef_sticky (1).jpg",
    img1_title: "Sirloin",
    img2_src: "./img/beef/sticky_nav_imgs/beef_sticky (2).jpg",
    img2_title: "Ribeye",
    img3_src: "./img/beef/sticky_nav_imgs/beef_sticky (3).jpg",
    img3_title: "Tenderloin",
    img4_src: "./img/beef/sticky_nav_imgs/beef_sticky (4).jpg",
    img4_title: "Chuck",
    img5_src: "./img/beef/sticky_nav_imgs/beef_sticky (5).jpg",
    img5_title: "Brisket",
    img6_src: "./img/beef/sticky_nav_imgs/beef_sticky (6).jpg",
    img6_title: "Flank Steak",

    link: "beef.html",
    object1TextTitle : "Organic Beef",
    object2TextH3 : "Our organic beef is a result of meticulous care and environmentally friendly practices. Our cattle are raised in open pastures where they graze on lush organic grasses and feed, leading to lean, flavorful, and naturally marbled beef. ",


}
const stickyNavDropdownObject5 = {

    img1_src: "./img/chicken/sticky_nav_imgs/chicken_sticky (1).jpg",
    img1_title: "Chicken Breast",
    img2_src: "./img/chicken/sticky_nav_imgs/chicken_sticky (2).jpg",
    img2_title: "Chicken Thigh",
    img3_src: "./img/chicken/sticky_nav_imgs/chicken_sticky (3).jpg",
    img3_title: "Chicken Drumstick",
    img4_src: "./img/chicken/sticky_nav_imgs/chicken_sticky (4).jpg",
    img4_title: "Chicken Wing",
    img5_src: "./img/chicken/sticky_nav_imgs/chicken_sticky (5).jpg",
    img5_title: "Chicken Leg",
    img6_src: "./img/chicken/sticky_nav_imgs/chicken_sticky (6).jpg",
    img6_title: "Chicken Wingette and Drumette",

    link: "chickens.html",
    object1TextTitle : "Organic Chicken",
    object2TextH3 : " Our organic chickens are raised in spacious, natural surroundings, where they have the freedom to roam and are provided with organic feed that's free from harmful chemicals and antibiotics. The result is chicken meat that's exceptionally tender, flavorful, and pure, reflecting the very best of nature.  ",


}
const stickyNavDropdownObject6 = {

    img1_src: "./img/veal/sticky_nav_imgs/veal_sticky (1).jpg",
    img1_title: "Veal Chop",
    img2_src: "./img/veal/sticky_nav_imgs/veal_sticky (2).jpg",
    img2_title: "Veal Scallopini",
    img3_src: "./img/veal/sticky_nav_imgs/veal_sticky (3).jpg",
    img3_title: "Veal Osso Buco",
    img4_src: "./img/veal/sticky_nav_imgs/veal_sticky (4).jpg",
    img4_title: "Veal Tenderloin",
    img5_src: "./img/veal/sticky_nav_imgs/veal_sticky (5).jpg",
    img5_title: "Veal Rib",
    img6_src: "./img/veal/sticky_nav_imgs/veal_sticky (6).jpg",
    img6_title: "Veal Shank",

    link: "veal.html",
    object1TextTitle : "Organic Veal",
    object2TextH3 : "Our veal calves enjoy spacious and natural surroundings, where they are raised with the utmost care and provided with organic feed that's free from synthetic additives and antibiotics. The outcome is veal meat that's exquisitely tender, mild in flavor, and pure in every sense. ",


}
const stickyNavDropdownObject7 = {
    img1_src: "./img/lamb/sticky_nav_imgs/lamb_sticky (1).jpg",
    img1_title: "Lamb Chop",
    img2_src: "./img/lamb/sticky_nav_imgs/lamb_sticky (2).jpg",
    img2_title: "Lamb Scallopini",
    img3_src: "./img/lamb/sticky_nav_imgs/lamb_sticky (3).jpg",
    img3_title: "Lamb Osso Buco",
    img4_src: "./img/lamb/sticky_nav_imgs/lamb_sticky (4).jpg",
    img4_title: "Lamb Tenderloin",
    img5_src: "./img/lamb/sticky_nav_imgs/lamb_sticky (5).jpg",
    img5_title: "Lamb Rib",
    img6_src: "./img/lamb/sticky_nav_imgs/lamb_sticky (6).jpg",
    img6_title: "Lamb Shank",

    link: "lamb.html",
    object1TextTitle : "Organic Lamb",
    object2TextH3 : " Our lambs graze on open pastures, enjoying a natural and stress-free life, nourished by organic feed that's free from harmful chemicals and antibiotics. This results in lamb meat that's incredibly tender, flavorful, and pristine in every way. ",


}
const stickyNavDropdownObject8 = {

    img1_src: "./img/turkey/sticky_nav_imgs/turkey_sticky (1).jpg",
    img1_title: "Turkey Breast",
    img2_src: "./img/turkey/sticky_nav_imgs/turkey_sticky (2).jpg",
    img2_title: "Turkey Thigh",
    img3_src: "./img/turkey/sticky_nav_imgs/turkey_sticky (3).jpg",
    img3_title: "Turkey Wings",
    img4_src: "./img/turkey/sticky_nav_imgs/turkey_sticky (4).jpg",
    img4_title: "Turkey Drumsticks",
    img5_src: "./img/turkey/sticky_nav_imgs/turkey_sticky (5).jpg",
    img5_title: "Turkey Neck",
    img6_src: "./img/turkey/sticky_nav_imgs/turkey_sticky (6).jpg",
    img6_title: "Turkey Back",

    link: "turkey.html",
    object1TextTitle : "Organic Turkey",
    object2TextH3 : "  Organic turkey meat from an organic meat company involves highlighting the superior quality and ethical standards that come with this delectable poultry choice. Our organic turkey is raised with the utmost care and respect for the environment and animal welfare. ",


}
// ------------CREATING DROPDOWN STICKY-NAV--------------
const buttonsStickyNavDropdown = document.querySelectorAll(".link_img");
const buttonStickyNavDropdown1 = document.querySelector("#img_link1");
const buttonStickyNavDropdown2 = document.querySelector("#img_link2");
const buttonStickyNavDropdown3 = document.querySelector("#img_link3");
const buttonStickyNavDropdown4 = document.querySelector("#img_link4");
const buttonStickyNavDropdown5 = document.querySelector("#img_link5");
const buttonStickyNavDropdown6 = document.querySelector("#img_link6");
const buttonStickyNavDropdown7 = document.querySelector("#img_link7");
const buttonStickyNavDropdown8 = document.querySelector("#img_link8");


// ---HIDE FULL SCREEN MEAT CATS IF SCREEN LESS THAN 1000PX when resizing---
window.addEventListener("resize", function(){
    const allStickyLines = document.querySelectorAll(".arrow_link");
    const allStickyLinks = document.querySelectorAll(".link_img");
    if(window.innerWidth < 1000) {
        displayOffAllStickyDropdowns()
        hideCurrentWindow()
        const allLinks = document.querySelectorAll(".link_img");
        allLinks.forEach(element=>element.classList.remove("activeStickyLink"))
        allStickyLines.forEach(line=>line.classList.remove("arrow_link_active"));
    }
})


function hideCurrentWindow() {
    const currentWindow = document.querySelectorAll(".dropodown_menu_nav");
    const blackbackground_container = document.querySelector(".blackbackground_container");
    currentWindow.forEach(contentDropdown=>contentDropdown.style.animation="FADEOUT 0.3s forwards");
    setTimeout(() => {
        currentWindow.forEach(contentDropdown=>contentDropdown.style.display="none");
    }, 301);
    setTimeout(() => {
        blackbackground_container.style.animation="FADEOUT 0.3s forwards";
    }, 302);
    setTimeout(() => {
        blackbackground_container.style.display="none";
    }, 303);

}



const displayOffAllStickyDropdowns = function() {
    const allStickyDropdownsContents = document.querySelectorAll(".dropdown_menu_nav");
    if(allStickyDropdownsContents.length>0) {
        allStickyDropdownsContents.forEach(contentDropdown=>contentDropdown.style.animation="FADEOUT 0.3s forwards");
        setTimeout(() => {

            contentDropdown.style.display="none"
        }, 301);
    }

}

const objectLiteralStickyNavDropDown = function(object) {
    function returnLinkFromObject() {
        let link = object.link
        return link;
    }
    function returnImagesFromObject(object) {

        let imagesArray = [object.img1_src, object.img2_src, object.img3_src,object.img4_src,
        object.img5_src,object.img6_src];

        return imagesArray

    }
    function returnTitlesFromObject(object) {

        let titlesArray  =[object.img1_title,object.img2_title, object.img3_title, object.img4_title,
            object.img5_title,object.img6_title ];

        return titlesArray

    }
    function returnTextFromObject(object) {
        let textArray = [object.object1TextTitle, object.object2TextH3, object.object3TextH3,
            object.object4TextTitle,object.object5TextH3,object.object6TextH3,
            object.object7TextTitle, object.object8TextH3,object.object9TextH3, object.object10TextH3
        ];
        return textArray;
    }



    let link = returnLinkFromObject(object)
    let imagesObject = returnImagesFromObject(object);
    let titlesObject = returnTitlesFromObject(object);
    let textObject = returnTextFromObject(object);
    let objectLiteralDropdown =

    `<div class="dropdown_menu_nav_container">
        <div class="dropdown_img_desc_cont">
            <div class="col_dropdown_4_cols">
                <div class="drop_down_img_text_container">
                    <img src="${imagesObject[0]}" alt="">
                    <p>${titlesObject[0]}</p>
                </div>
                <div class="drop_down_img_text_container">
                    <img src="${imagesObject[1]}" alt="">
                    <p>${titlesObject[1]}</p>
                </div>

            </div>
            <div class="col_dropdown_4_cols">
                <div class="drop_down_img_text_container">
                    <img src="${imagesObject[2]}" alt="">
                    <p>${titlesObject[2]}</p>
                </div>
                <div class="drop_down_img_text_container">
                    <img src="${imagesObject[3]}" alt="">
                    <p>${titlesObject[3]}</p>
                </div>



            </div>
            <div class="col_dropdown_4_cols">
                <div class="drop_down_img_text_container">
                    <img src="${imagesObject[4]}" alt="">
                    <p>${titlesObject[4]}</p>
                </div>
                <div class="drop_down_img_text_container">
                    <img src="${imagesObject[5]}" alt="">
                    <p>${titlesObject[5]}</p>
                </div>
            </div>



        </div>








        <div class="dropdown_text_desc">
            <div class="dropdown_desc_text_container">
                <div class="drop_down_text_col">
                    <h3>${textObject[0]}</h3>
                    <p>${textObject[1]}</p>
                    <button class="button_main sticky_nav_button">
                    <a href="${link}"> <p>  Check here</p>  </a>

                </button>
                </div>
            </div>

        </div>
    </div>`;
    // ---DISPLAY OFF ALL NAV DROPDOWNS BEFORE DISPLAYING THE CURRENT ONE---

    const contentToBeInjected = document.querySelector(".dropodown_menu_nav");
    const blackbackground_container = document.querySelector(".blackbackground_container");
    const webBody = document.querySelector(".web_wrapper");


    // ---DISPLAY ON DROPDOWN MENU---
    blackbackground_container.style.animation = "FADEINOUT 0.3s forwards";
    contentToBeInjected.style.animation = "FADEINOUT 0.3s forwards";
    contentToBeInjected.style.display="block";

    contentToBeInjected.innerHTML = objectLiteralDropdown;
    setTimeout(() => {

        blackbackground_container.style.display="block";

        contentToBeInjected.style.animation = "";
        setTimeout(() => {
            blackbackground_container.style.animation = "FADEINOUT 0.3s forwards";
        }, 302);

    }, 301);
    }







// ----------NAV DROPDOWN LISTENERS---------

// ---check if button is active---
function CheckClickedItem(target, dropdownnumber) {


    if(target.classList.contains("activeStickyLink")) {
        hideCurrentWindow()
        setTimeout(() => {
            target.classList.remove("activeStickyLink");
        }, 1);
    }
    else {
        objectLiteralStickyNavDropDown(dropdownnumber)
        setTimeout(() => {
            target.classList.add("activeStickyLink");
        }, 1);

    }
     // ---reset active class---
    const allLinks = document.querySelectorAll(".link_img");
    allLinks.forEach(element=>element.classList.remove("activeStickyLink"))

}

const arrow1 = document.querySelector("#arrow1");
const arrow2 = document.querySelector("#arrow2");
const arrow3 = document.querySelector("#arrow3");
const arrow4 = document.querySelector("#arrow4");
const arrow5 = document.querySelector("#arrow5");
const arrow6 = document.querySelector("#arrow6");
const arrow7 = document.querySelector("#arrow7");
const arrow8 = document.querySelector("#arrow8");
const allArrows = document.querySelectorAll(".arrow_down");

function rotateArrowUP(arrowVAR) {
    // Remove "rotate_up" class from all arrows
    allArrows.forEach(arrow => arrow.classList.remove("rotate_up"));

    // Toggle "rotate_up" class on the clicked arrow
    if (!arrowVAR.classList.contains("rotate_up")) {
        arrowVAR.classList.add("rotate_up");
    }

}

buttonStickyNavDropdown1.addEventListener("click", function(){
    CheckClickedItem(buttonStickyNavDropdown1, stickyNavDropdownObject1)
    rotateArrowUP(arrow1)
})

buttonStickyNavDropdown2.addEventListener("click", function(){
    CheckClickedItem(buttonStickyNavDropdown2, stickyNavDropdownObject2)
    rotateArrowUP(arrow2)
})

buttonStickyNavDropdown3.addEventListener("click", function(){
    CheckClickedItem(buttonStickyNavDropdown3, stickyNavDropdownObject3)
    rotateArrowUP(arrow3)
})
buttonStickyNavDropdown4.addEventListener("click", function(){
    CheckClickedItem(buttonStickyNavDropdown4, stickyNavDropdownObject4)
    rotateArrowUP(arrow4)
})
buttonStickyNavDropdown5.addEventListener("click", function(){
    CheckClickedItem(buttonStickyNavDropdown5, stickyNavDropdownObject5)
    rotateArrowUP(arrow5)
})
buttonStickyNavDropdown6.addEventListener("click", function(){
    CheckClickedItem(buttonStickyNavDropdown6, stickyNavDropdownObject6)
    rotateArrowUP(arrow6)
})
buttonStickyNavDropdown7.addEventListener("click", function(){
    CheckClickedItem(buttonStickyNavDropdown7, stickyNavDropdownObject7)
    rotateArrowUP(arrow7)
})
buttonStickyNavDropdown8.addEventListener("click", function(){
    CheckClickedItem(buttonStickyNavDropdown8, stickyNavDropdownObject8)
    rotateArrowUP(arrow8)
})







// -----------TOP NAV TEXT ANIMATION 3 slides-------

const topNavTextAnimation = function(Interval) {
    const textTopNav = document.querySelector(".top_slider_text p");

    const addAndREsetFadeAnimation = function() {
        textTopNav.style.animation = "FADEINOUTREP 1s forwards";
        setTimeout(() => {
            textTopNav.style.animation = "";
        }, 1001);

    }

    setTimeout(() => {
        addAndREsetFadeAnimation()
        textTopNav.innerHTML="Good Reviews"
    }, Interval);
    setTimeout(() => {
        addAndREsetFadeAnimation()
        textTopNav.innerHTML="Best Quality"
    }, Interval*2);
    setTimeout(() => {
        addAndREsetFadeAnimation()
        textTopNav.innerHTML="Wide choice of products"
    }, Interval*3);

    setInterval(() => {
        setTimeout(() => {
            addAndREsetFadeAnimation()
            textTopNav.innerHTML="Good Reviews"
        }, Interval);
        setTimeout(() => {
            addAndREsetFadeAnimation()
            textTopNav.innerHTML="Best Quality"
        }, Interval*2);
        setTimeout(() => {
            addAndREsetFadeAnimation()
            textTopNav.innerHTML="Wide variety of choice"
        }, Interval*3);
    }, Interval*3);

}


topNavTextAnimation(2000)













function displayNavBarTop() {
    const phoneNumberImageContainer = document.querySelector(".container_top_slider_phone")
    const linksTopNavContainer = document.querySelector(".top_slider_text .links");
    linksTopNavContainer.style.display="flex";
    phoneNumberImageContainer.style.display="flex";
    phoneNumberImageContainer.style.animation = "FADEINOUT 0.5s forwards";
    linksTopNavContainer.style.animation = "FADEINOUT 0.5s forwards";
}
function displayOffNavBarTop() {
    const phoneNumberImageContainer = document.querySelector(".container_top_slider_phone")
    const linksTopNavContainer = document.querySelector(".top_slider_text .links");
    linksTopNavContainer.style.animation = "FADEOUT 0.5s forwards";
    phoneNumberImageContainer.style.animation = "FADEOUT 0.5s forwards";
    setTimeout(() => {
        linksTopNavContainer.style.display="none";
        phoneNumberImageContainer.style.display="none";
    }, 501);

}

// / -----------------INTERSECTION CHECKING IF VIEWER IS WATCHING THE OBJECT----------------
window.addEventListener("resize", function(){
    if(window.innerWidth <= 1000) {
        navLogo.style.animation = "FADEINOUT 1s forwards";
        displayNavBarTop()
        containerNavSticky.style.animation = "wide_to_Center 1s forwards"
    }
})
document.onload = function(){
    if(window.innerWidth <= 1000) {
        navLogo.style.animation = "FADEINOUT 1s forwards";
        displayNavBarTop()
        containerNavSticky.style.animation = "wide_to_Center 1s forwards"
    }
}

const initialCordsSticky = document.querySelector(".navigation_sticky_links")
const navLogo = document.querySelector(".logo_company_cont_mobile");
const containerNavSticky = document.querySelector(".container_nav_sticky_wrapper")
const container_nav_sticky = document.querySelector(".container_nav_sticky")
const ObsCallback = function(entries) {
    const [entry] = entries
    if(entry.isIntersecting===false || window.innerWidth <= 1000) {

        navLogo.style.animation = "FADEINOUT 1s forwards";
        displayNavBarTop()
        containerNavSticky.style.animation = "wide_to_Center 1s forwards"


    }
    else {
        displayOffNavBarTop()
        containerNavSticky.style.animation = "wide_to_Center_backwards 1s forwards"

        navLogo.style.animation = "FADEOUT 1s forwards";

    }

}
const ObsOptions = {
    root:null,
    threshold: 0,
    rootMargin: '-100px'
}
const observer = new IntersectionObserver(ObsCallback, ObsOptions)
observer.observe(initialCordsSticky)

// -------------------------------pattern function oberving 2 elements-------------------------------
function ObersveAndApplyfadeAnimation2Col(oberverArgument, objectsApplyAnimation1, objectsApplyAnimation2 ) {


    const ObsCallbacknext = function(entries) {
        const [entry] = entries
        if(entry.isIntersecting===true) {
            const objectsImtes = [objectsApplyAnimation1, objectsApplyAnimation2 ]
            if(objectsImtes) {
                objectsImtes[0].style.animation = "FADEINOUT 1.2s forwards";
                objectsImtes[1].style.animation = "FADEINOUT 1.6s forwards";
            }





        }
           // ---FOR MOBILE DONT RUN THIS ANIMATION---
        if(entry.isIntersecting===false && window.innerWidth<=600) {
            const objectsImtes = [objectsApplyAnimation1, objectsApplyAnimation2 ]
            if(objectsImtes) {
                objectsImtes[0].style.animation = "FADEINOUT 1.2s forwards";
                objectsImtes[1].style.animation = "FADEINOUT 1.6s forwards";
            }





        }



    }
    const ObsOptionsNext = {
        root:null,
        threshold: 0,
        rootMargin: '-10px'
    }
    const observerNext = new IntersectionObserver(ObsCallbacknext, ObsOptionsNext)
    observerNext.observe(oberverArgument)

}

function ObersveAndApplyfadeAnimation2ColSearch(oberverArgument, objectsApplyAnimation1, objectsApplyAnimation2 ) {


    const ObsCallbacknext = function(entries) {
        const [entry] = entries
        if(entry.isIntersecting===true) {
            const objectsImtes = [objectsApplyAnimation1, objectsApplyAnimation2 ]
            if(objectsImtes) {


                objectsImtes[0].style.width = "100%";


                objectsImtes[1].style.width = "100%";
            }





        }
           // ---FOR MOBILE DONT RUN THIS ANIMATION---
        if(entry.isIntersecting===false) {
            const objectsImtes = [objectsApplyAnimation1, objectsApplyAnimation2 ]
            if(objectsImtes) {





                objectsImtes[1].style.width = "30%";
            }





        }



    }
    const ObsOptionsNext = {
        root:null,
        threshold: 0,
        rootMargin: '-30px'
    }
    const observerNext = new IntersectionObserver(ObsCallbacknext, ObsOptionsNext)
    observerNext.observe(oberverArgument)

}
const container_two_cols = document.querySelector(".container_two_cols");
const text_two_cols = document.querySelector(".text_two_cols");
const container_img_two_cols_img = document.querySelector(".container_img_two_cols img");
if(container_two_cols&&container_img_two_cols_img&&text_two_cols) {
ObersveAndApplyfadeAnimation2Col(container_two_cols, container_img_two_cols_img, text_two_cols)
}
const search_container = document.querySelector(".search-container");
const btn_search_input = document.querySelector(".btn_search");
const grid_sub_cat = document.querySelector("#grid_sub_cat");
// if(search_container&&btn_search_input&&grid_sub_cat) {
//     ObersveAndApplyfadeAnimation2ColSearch(grid_sub_cat, btn_search_input, search_container)
// }
const lamb_cont_main = document.querySelector(".anchor_col1");
const lamb_cont_img = document.querySelector(".lamb_cont_img");
const lamb_text = document.querySelector(".lamb_text");
if(lamb_cont_main&&lamb_cont_img&&lamb_text) {
    ObersveAndApplyfadeAnimation2Col(lamb_cont_main, lamb_cont_img, lamb_text)
}
if (about_3_cols_container&&cols_about_1_garden&&cols_about_2_garden) {
    ObersveAndApplyfadeAnimation2Col(about_3_cols_container, cols_about_1_garden, cols_about_2_garden)
}

const lamb_cont_main2 = document.querySelector("#lamb_cont2")
const lamb_cont_img2 = document.querySelector("#lamb_img2");
const lamb_text2 = document.querySelector("#lamb_text_2")
if(lamb_cont_main2&&lamb_cont_img2&&lamb_text2) {
    ObersveAndApplyfadeAnimation2Col(lamb_cont_main2, lamb_cont_img2, lamb_text2)
}


const col_three_cols1 = document.querySelector("#three_col_col1");
const col_three_cols1_img = document.querySelector("#three_col_col1 img")
const col_three_cols1_text = document.querySelector("#three_col_col1 .container_three_cols_text")
if(col_three_cols1&&col_three_cols1_img&&col_three_cols1_text) {
ObersveAndApplyfadeAnimation2Col(col_three_cols1, col_three_cols1_img, col_three_cols1_text)
}

const col_three_cols2 = document.querySelector("#three_col_col2");
const col_three_cols2_img = document.querySelector("#three_col_col2 img")
const col_three_cols2_text = document.querySelector("#three_col_col2 .container_three_cols_text")
if(col_three_cols2&&col_three_cols2_img&&col_three_cols2_text) {
ObersveAndApplyfadeAnimation2Col(col_three_cols2, col_three_cols2_img, col_three_cols2_text)
}

const col_three_cols3= document.querySelector("#three_col_col3");
const col_three_cols3_img = document.querySelector("#three_col_col3 img")

const col_three_cols3_text = document.querySelector("#three_col_col3 .container_three_cols_text")
if(col_three_cols3&&col_three_cols3_img&&col_three_cols3_text) {
ObersveAndApplyfadeAnimation2Col(col_three_cols3, col_three_cols3_img, col_three_cols3_text)
}


// -------------------------------pattern function oberving 4 elements-------------------------------
function ObersveAndApplyfadeAnimation(oberverArgument, listobjectsApplyAnimation) {


    const ObsCallbacknext = function(entries) {
        const [entry] = entries
        if(entry.isIntersecting===true) {
            const objectsImtes = [...listobjectsApplyAnimation]
            if(objectsImtes) {
                objectsImtes[0].style.animation = "FADEINOUT 1s forwards";
                objectsImtes[1].style.animation = "FADEINOUT 1.2s forwards";
                objectsImtes[2].style.animation = "FADEINOUT 1.4s forwards";
                objectsImtes[3].style.animation = "FADEINOUT 1.6s forwards";
            }




        }

        // ---FOR MOBILE DONT RUN THIS ANIMATION---
        if(entry.isIntersecting===false && window.innerWidth<=600) {
            const objectsImtes = [...listobjectsApplyAnimation]
            if(objectsImtes) {
                objectsImtes[0].style.animation = "FADEINOUT 1s forwards";
                objectsImtes[1].style.animation = "FADEINOUT 1.2s forwards";
                objectsImtes[2].style.animation = "FADEINOUT 1.4s forwards";
                objectsImtes[3].style.animation = "FADEINOUT 1.6s forwards";
            }




        }



    }
    const ObsOptionsNext = {
        root:null,
        threshold: 0,
        rootMargin: '-80px'
    }
    const observerNext = new IntersectionObserver(ObsCallbacknext, ObsOptionsNext)
    if(oberverArgument) {
        observerNext.observe(oberverArgument)
    }


}


const col_grid1 = document.querySelector(".col_grid_1")
const col_grid2 = document.querySelector(".col_grid_2")
const col_grid3 = document.querySelector(".col_grid_3")
const cold_grid_container1 = document.querySelector("#cold_grid_container1")


const ObsCallbacknext = function(entries) {
    const [entry] = entries
    if(entry.isIntersecting===true) {

        col_grid1.style.animation = "FADEINOUT 0.6s forwards";
        col_grid2.style.animation = "FADEINOUT 0.8s forwards";
        col_grid3.style.animation = "FADEINOUT 1s forwards";


    }
    if(entry.isIntersecting===false&& window.innerWidth<=600) {
        col_grid1.style.animation = "FADEINOUT 0.6s forwards";
        col_grid2.style.animation = "FADEINOUT 0.8s forwards";
        col_grid3.style.animation = "FADEINOUT 1s forwards";
    }


}
const ObsOptionsNext = {
    root:null,
    threshold: 0,
    rootMargin: '-30px'
}
const observerNext = new IntersectionObserver(ObsCallbacknext, ObsOptionsNext)
if(cold_grid_container1) {
    observerNext.observe(cold_grid_container1)
}





// --------------------------------------------------------------------------
const col_grid4 = document.querySelector(".col_grid_4")
const col_grid5 = document.querySelector(".col_grid_5")
const col_grid6 = document.querySelector(".col_grid_6")
const cold_grid_container2 = document.querySelector("#cold_grid_container2")
const ObsCallbacknext1 = function(entries) {
    const [entry] = entries
    if(entry.isIntersecting===true) {

        col_grid4.style.animation = "FADEINOUT 0.6s forwards";
        col_grid5.style.animation = "FADEINOUT 0.8s forwards";
        col_grid6.style.animation = "FADEINOUT 1s forwards";


    }
    if(entry.isIntersecting===false&& window.innerWidth<=600) {
        col_grid1.style.animation = "FADEINOUT 0.6s forwards";
        col_grid2.style.animation = "FADEINOUT 0.8s forwards";
        col_grid3.style.animation = "FADEINOUT 1s forwards";
    }


}
const ObsOptionsNext1 = {
    root:null,
    threshold: 0,
    rootMargin: '-30px'
}
const observerNext1 = new IntersectionObserver(ObsCallbacknext1, ObsOptionsNext1)
if(cold_grid_container2) {
    observerNext1.observe(cold_grid_container2)
}


// --------------------------------------------------------------------------

const container_trend_section = document.querySelector(".container_trend_section");
const slideImage1 = document.querySelector("#slide1_sub")
const slideImage2 = document.querySelector("#slide2")
const slideImage3 = document.querySelector("#slide3")
const slideImage4 = document.querySelector("#slide4")
const listofImagesSlider = [slideImage1, slideImage2, slideImage3, slideImage4]

ObersveAndApplyfadeAnimation(container_trend_section, listofImagesSlider)

const sticky_img_left1 = document.querySelector(".sticky_img_left1");
const sticky_img_left2 = document.querySelector(".sticky_img_left2");
const img_sticky_mid = document.querySelector(".img_sticky_mid");
const images_text_sticky = document.querySelector(".images_text_sticky");
const mid_honey_container = document.querySelector(".container_sticky_section")
const arrayHoneyMain = [sticky_img_left1,sticky_img_left2,img_sticky_mid,images_text_sticky];

ObersveAndApplyfadeAnimation(mid_honey_container, arrayHoneyMain)

const logos_section = document.querySelector(".logos_section");
const title_logos = document.querySelector(".logos_section .title")
const logo_col1 = document.querySelector("#logo_col1");
const logo_col2 = document.querySelector("#logo_col2");
const logo_col3 = document.querySelector("#logo_col3");
const logosArray = [title_logos, logo_col1, logo_col2, logo_col3 ]

ObersveAndApplyfadeAnimation(logos_section, logosArray)


const about_3_cols = document.querySelector(".about_3_cols");
const title_about = document.querySelector(".about_3_cols .title");
const cols_about_1 = document.querySelector("#cols_about_1");
const cols_about_2 = document.querySelector("#cols_about_2");
const cols_about_3 = document.querySelector("#cols_about_3");

const arrayAbout3cols = [title_about,cols_about_1,cols_about_2,cols_about_3]
ObersveAndApplyfadeAnimation(about_3_cols, arrayAbout3cols)
// -----------------REVIEW SLIDER-------------------


// FUNCTION TO INJECT FROM OBJECTS DATA TO OBJECT LITERAL
const reviewObjectLiteral = function(img_src, title, stars, feedback, reviewer) {
    return`
    <div class="image_review_container">
    <img src="${img_src}" alt="">

    </div>

    <div class="review_text_col">

    <h3>${title}</h3>
    <div class="star_container">
        ${stars}
    </div>

    <p class="review_content">${feedback}</p>

    <p class="review_person">${reviewer}</p>

    <div class="dots_container">
        <span class="dot dot_active" id="dot1"></span>
        <span class="dot" id="dot2"></span>
        <span class="dot" id="dot3"></span>
        <span class="dot" id="dot4"></span>
        <span class="dot" id="dot5"></span>
    </div>

    </div>

    </div>
    </div>


`
}

const replaceInnerHtmlReviews = function(img_src, title, stars, feedback, reviewer) {
    const imgContent = document.querySelector(".image_review_container img");
    const reviewTitle = document.querySelector(".review_text_col h3");
    const reviewStarts = document.querySelector(".star_container");
    const reviewFeedback = document.querySelector(".review_content");
    const reviewReviewer = document.querySelector(".review_person");
    // injecting data from object

    imgContent.src = img_src;
    reviewTitle.innerHTML = title;
    reviewStarts.innerHTML = stars;
    reviewFeedback.innerHTML = feedback;
    reviewReviewer.innerHTML = reviewer;

}

// LOAD FIRST REVIEW ON PAGE LOAD


// INJECT FIRST LTIERAL TO DIV HTML

const containerReviewSlider = document.querySelector(".review_container");
if (containerReviewSlider) {
    containerReviewSlider.insertAdjacentHTML("afterbegin", reviewObjectLiteral(review1.img_src, review1.title, review1.stars, review1.feedback, review1.reviewer ))
}
const buttonsToChangeReviews = document.querySelectorAll(".dot");
const buttonToChangeReviews1 = document.querySelector("#dot1");
const buttonToChangeReviews2 = document.querySelector("#dot2");
const buttonToChangeReviews3 = document.querySelector("#dot3");
const buttonToChangeReviews4 = document.querySelector("#dot4");
const buttonToChangeReviews5 = document.querySelector("#dot5");

function changeDots(numberDot) {
    buttonsToChangeReviews.forEach(button => button.classList.remove("dot_active"));
    const buttonToChangeReviews = document.querySelector("#dot" + numberDot);
    buttonToChangeReviews.classList.add("dot_active");
}

function animationImageReviewSlier() {
    const imgContentSlider = document.querySelector(".image_review_container img");
    const feedbackContentSlider = document.querySelector(".review_content");
    imgContentSlider.style.animation="reviewSliding 0.5s forwards, FADEINOUT 0.4s forwards";
    feedbackContentSlider.style.animation="FADEINOUT 0.5s forwards";
    setTimeout(() => {
        imgContentSlider.style.animation="";
        feedbackContentSlider.style.animation="";
    }, 500);
}

// BUTTON1 chaning content
const changeReviewPatternDefault = function(objectReview, dotNumber) {

    animationImageReviewSlier()
    changeDots(dotNumber)
    replaceInnerHtmlReviews(objectReview.img_src, objectReview.title, objectReview.stars, objectReview.feedback, objectReview.reviewer )

}
const displayOnandDisplayOffRestDots = function(activeButton, objectReview, dotNumber) {
    if(activeButton.classList.contains("active_dot_slider_feedback_about")) {

    }
    else {
        buttonsToChangeReviews.forEach(button=>button.classList.remove("active_dot_slider_feedback_about"));
        setTimeout(() => {
            changeReviewPatternDefault(objectReview, dotNumber)
            activeButton.classList.add("active_dot_slider_feedback_about")
        }, 1);


    }
}
if(buttonToChangeReviews1) {
buttonToChangeReviews1.addEventListener("click", function() {

    displayOnandDisplayOffRestDots(buttonToChangeReviews1, review1, 1)

})
}

if(buttonToChangeReviews2) {
buttonToChangeReviews2.addEventListener("click", function() {
    displayOnandDisplayOffRestDots(buttonToChangeReviews2, review2, 2)
})
}

if(buttonToChangeReviews3) {
buttonToChangeReviews3.addEventListener("click", function() {
    displayOnandDisplayOffRestDots(buttonToChangeReviews3, review3, 3)
})
}
if(buttonToChangeReviews4) {
buttonToChangeReviews4.addEventListener("click", function() {
    displayOnandDisplayOffRestDots(buttonToChangeReviews4, review4, 4)
})
}
if(buttonToChangeReviews5) {
buttonToChangeReviews5.addEventListener("click", function() {
    displayOnandDisplayOffRestDots(buttonToChangeReviews5, review5, 5)
})
}




// REFACTORIZED CODE--- DRY VERSION





const link_line =  document.querySelectorAll(".link_line_container p");
const linkLine1 = document.querySelector(".link_line1 p");
const linkLine2 = document.querySelector(".link_line2 p");
const linkLine3 = document.querySelector(".link_line3 p");
const linkLine4 = document.querySelector(".link_line4 p");
const linkLine5 = document.querySelector(".link_line5 p");
const linkLine6 = document.querySelector(".link_line6 p");
const linkLine7 = document.querySelector(".link_line7 p");
const linkLine8 = document.querySelector(".link_line8 p");

const allLinks = [linkLine1,linkLine2,linkLine3,linkLine4, linkLine5, linkLine6, linkLine7, linkLine8]




const text_container = document.querySelector(".text_container")

function sliderInjectionItems(text1, text2, link1, link2, link3, link4, link5, link6, link7, link8) {
    const imageSlider = document.querySelector(".img_slider");

    const textSlider1 = document.querySelector(".text1_slider");
    const textSlider2 = document.querySelector(".text2_slider");




    if(textSlider1) {
        textSlider1.innerHTML = text1;
    }
    if(textSlider2) {
        textSlider2.innerHTML = text2;
    }


    linkLine1?linkLine1.innerHTML = link1: null;
    linkLine2?linkLine2.innerHTML = link2: null;
    linkLine3?linkLine3.innerHTML = link3: null;
    linkLine4?linkLine4.innerHTML = link4: null;
    linkLine5?linkLine5.innerHTML = link5: null;
    linkLine6?linkLine6.innerHTML = link6:null;
    linkLine7?linkLine7.innerHTML = link7: null;
    linkLine8?linkLine8.innerHTML = link8: null;


    // Add font weight to active link

}

function addAndRemoveFadeAniamtion() {
    if(text_container) {
    text_container.style.animation ="FADEINOUT 1s ease";
    setTimeout(() => {
        text_container.style.animation =""

    }, 1000);
    }
}
function addAndRemoveActiveLinks(linkNumberActive) {
    if(allLinks) {
    allLinks.forEach(element => {
        if(element) {
        element.classList.add("inactiveLink")
        }
    })}
    if(linkNumberActive) {
    linkNumberActive.classList.remove("inactiveLink")
    }
}




// ---DISPLAY MOBILE NAV FUNCTION---

const mobileNavdisplayOn = function() {
    const mobileNavContent = document.querySelector(".nav_mobile");
    const hambIcon = document.querySelector(".hamb_icon");
    const crossClose = document.querySelector(".cross_nav_mobile");
    const blackBackground = document.querySelector(".blackbackground_container");
    const body = document.querySelector("body")
    if (hambIcon) {
    hambIcon.addEventListener("click", function(){
        mobileNavContent.style.display="block";
        blackBackground.style.animation="FADEIN 0.3s forwards";
        blackBackground.style.display="block";
        body.style.overflowY="hidden"
    })
    }
    if (crossClose) {
    crossClose.addEventListener("click", function() {
        mobileNavContent.style.display="none";
        blackBackground.style.display="none";
        body.style.overflowY="scroll"
    })
    }
}
// INITIATE FUNCTION BELOW
mobileNavdisplayOn();


const mobileNavContentMeatDisplayOn = function() {
    const blackBackground = document.querySelector(".blackbackground_container");
    const arrowLeft = document.querySelector(".arrow_left");
    const mainNavMobileContent = document.querySelector(".nav_mobile");
    const meatNavMobileContent = document.querySelector(".ObjectLiteralCategoryMeat");
    const crossCloseContentMeat = document.querySelector("#meat_content_cross");
    const body = document.querySelector("body")
    if(crossCloseContentMeat) {
    crossCloseContentMeat.addEventListener("click", function() {
        meatNavMobileContent.style.display="none";
        mainNavMobileContent.style.display="none";
        blackBackground.style.display="none";
        body.style.overflowY="scroll"
    })
    }
    if(arrowLeft) {
    arrowLeft.addEventListener("click", function(){
        meatNavMobileContent.style.display="none";
        mainNavMobileContent.style.display="block"
    })
    }
    if(meatNavMobileContent) {
        meatNavMobileContent.style.display="block";
    }

}
// INITIATE FUNCTION BELOW
// mobileNavContentMeatDisplayOn();







function injectNavMobileMeatContent(title, img1, img2, img3, img4, img5, img6, imgtitle1,
    imgtitle2, imgtitle3, imgtitle4, imgtitle5, imgtitle6, link, description) {
    // OBJECT BUTTONS



    // OBJECT TITLE
    const titleToBeInjected = document.querySelector(".content_meat h3");
    // OBJECT IMAGES
    const imageContentMeat1 = document.querySelector(".content_meat_img1");
    const imageContentMeat2 = document.querySelector(".content_meat_img2");
    const imageContentMeat3 = document.querySelector(".content_meat_img3");
    const imageContentMeat4 = document.querySelector(".content_meat_img4");
    const imageContentMeat5 = document.querySelector(".content_meat_img5");
    const imageContentMeat6 = document.querySelector(".content_meat_img6");

    // OBJECT IMAGES TITLES
    const imageContentMeatTitle1 = document.querySelector(".meat_content_img_desc_1");
    const imageContentMeatTitle2 = document.querySelector(".meat_content_img_desc_2");
    const imageContentMeatTitle3 = document.querySelector(".meat_content_img_desc_3");
    const imageContentMeatTitle4 = document.querySelector(".meat_content_img_desc_4");
    const imageContentMeatTitle5 = document.querySelector(".meat_content_img_desc_5");
    const imageContentMeatTitle6 = document.querySelector(".meat_content_img_desc_6");
    const linkObjectButton = document.querySelector(".nav_meat_cat_link_button")
    // OBJECT DESCRIPTION
    const contentDescriptionMeat = document.querySelector(".content_meat_desc_container_text");
    // START INJECTING PROCESS

    titleToBeInjected.innerHTML=title;

    imageContentMeat1.src=img1;
    imageContentMeat2.src=img2;
    imageContentMeat3.src=img3;
    imageContentMeat4.src=img4;
    imageContentMeat5.src=img5;
    imageContentMeat6.src=img6;

    imageContentMeatTitle1.innerHTML = imgtitle1;
    imageContentMeatTitle2.innerHTML  = imgtitle2;
    imageContentMeatTitle3.innerHTML  = imgtitle3;
    imageContentMeatTitle4.innerHTML  = imgtitle4;
    imageContentMeatTitle5.innerHTML  = imgtitle5;
    imageContentMeatTitle6.innerHTML  = imgtitle6;

    linkObjectButton.href = link;
    contentDescriptionMeat.innerHTML=description;





}
// INVOKING ALL NAV MOBILE PRODUCTS BASED ON INDIVIDUAL LINKS OF PRODUCTS


// AS THE LINKS ARE NOT DEFINED WHEN THE PAGE LOAD BECAUSE ELEMENT IS DISPLAYED OFF I NEED TO RETURN THEM WHEN I CLICK ON HAMB
const hambIcon = document.querySelector(".hamb_icon") ;
function returnListofLinks() {
    let beefLink = document.querySelector(".beef_button");
    let honeyLink = document.querySelector(".honey_button");
    let lambLink = document.querySelector(".lamb_button");
    let porkLink = document.querySelector(".pork_button");
    let vealLink = document.querySelector(".veal_button");
    let chickenLink = document.querySelector(".chicken_button");
    let turkeyLink = document.querySelector(".turkey_button");
    let duckLink = document.querySelector(".duck_button");
    let listOfLinks = [beefLink,honeyLink,lambLink,porkLink,vealLink, chickenLink,turkeyLink,duckLink]
    return listOfLinks
}

hambIcon.addEventListener("click", function() {
    returnListofLinks()
})

function returnListofLinksSecondButtons() {
    let beefLink = document.querySelector(".beef_button2");
    let honeyLink = document.querySelector(".honey_button2");
    let lambLink = document.querySelector(".lamb_button2");
    let porkLink = document.querySelector(".pork_button2");
    let vealLink = document.querySelector(".veal_button2");
    let chickenLink = document.querySelector(".chicken_button2");
    let turkeyLink = document.querySelector(".turkey_button2");
    let duckLink = document.querySelector(".duck_button2");
    let listOfLinks = [beefLink,honeyLink,lambLink,porkLink,vealLink, chickenLink,turkeyLink,duckLink]
    return listOfLinks
}

hambIcon.addEventListener("click", function() {
    returnListofLinksSecondButtons()
})
let listofLinksContent2 = returnListofLinksSecondButtons()
let listofLinksContent = returnListofLinks()
// CREATED FUNCTION TO INJECT OBJECT BASED IN ARGUMENENTS BUTTON AND OBJECT
function injectObject(objectName, button, button2) {
    // CHECKING IF ELEMENT EXIST FROM THE PAGE LOAD SO THE ERROR DOESNT DISPLAY IN CONSOLE
    if(button) {
        button.addEventListener("click", function(){
            injectNavMobileMeatContent(objectName.title, objectName.img1, objectName.img2, objectName.img3,
                objectName.img4, objectName.img5, objectName.img6, objectName.imgTitle1, objectName.imgTitle2,
                objectName.imgTitle3, objectName.imgTitle4, objectName.imgTitle5, objectName.imgTitle6, objectName.link,
                objectName.description
            )
            mobileNavContentMeatDisplayOn();
        })
    }
    if(button2) {
        button2.addEventListener("click", function(){
            injectNavMobileMeatContent(objectName.title, objectName.img1, objectName.img2, objectName.img3,
                objectName.img4, objectName.img5, objectName.img6, objectName.imgTitle1, objectName.imgTitle2,
                objectName.imgTitle3, objectName.imgTitle4, objectName.imgTitle5, objectName.imgTitle6, objectName.link,
                objectName.description
            )
            mobileNavContentMeatDisplayOn();
        })
    }

}

injectObject(navMobileBeef, listofLinksContent[0], listofLinksContent2[0])
injectObject(navMobileHoney, listofLinksContent[1], listofLinksContent2[1])
injectObject(navMobileLamb, listofLinksContent[2], listofLinksContent2[2])
injectObject(navMobilePork, listofLinksContent[3], listofLinksContent2[3])
injectObject(navMobileVeal, listofLinksContent[4], listofLinksContent2[4])
injectObject(navMobileChicken, listofLinksContent[5], listofLinksContent2[5])
injectObject(navMobileTurkey, listofLinksContent[6], listofLinksContent2[6])
injectObject(navMobileDuck, listofLinksContent[7], listofLinksContent2[7])



const slider_reviews_section = document.querySelector(".slider_reviews_section");
const review_text_col_title = document.querySelector(".review_text_col_title");
const image_review_container = document.querySelector(".image_review_container")
const review_text_col = document.querySelector(".review_text_col")
const dots_container = document.querySelector(".dots_container")
const reviewArray = [review_text_col_title,image_review_container, review_text_col, dots_container ]
ObersveAndApplyfadeAnimation(slider_reviews_section, reviewArray)


// ---CHANGE STAR SOURCE IMG ON CLICK---
function changeStart() {
    const start1 = document.querySelector(".star_feedback1")
    const start2 = document.querySelector(".star_feedback2")
    const start3 = document.querySelector(".star_feedback3")
    const start4 = document.querySelector(".star_feedback4")
    const start5 = document.querySelector(".star_feedback5")
    const listofstars_about = [start1,start2,start3, start4, start5]
    const stars_empty_feedback = document.querySelectorAll(".empty_star");
    stars_empty_feedback.forEach(star=>star.addEventListener("click", function(target){
        if(star.classList.contains("star_feedback1"))  {

            if(start1.getAttribute("src")==="./icons/star-full-icon.svg") {
                listofstars_about.forEach(start=>start.src="./icons/star-empty-icon.svg")
                setTimeout(() => {
                start1.src="./icons/star-empty-icon.svg"
                }, 1);
            }

            else {
                listofstars_about.forEach(start=>start.src="./icons/star-empty-icon.svg")
                setTimeout(() => {
                    start1.src="./icons/star-full-icon.svg"

                }, 1);
            }

        }


        if(star.classList.contains("star_feedback2"))  {

            if(start2.getAttribute("src")==="./icons/star-full-icon.svg") {
                listofstars_about.forEach(start=>start.src="./icons/star-empty-icon.svg")
                setTimeout(() => {
                start1.src="./icons/star-empty-icon.svg"
                start2.src="./icons/star-empty-icon.svg"
                }, 0.00001);
            }
            else {
                listofstars_about.forEach(start=>start.src="./icons/star-empty-icon.svg")
                setTimeout(() => {
                    start1.src="./icons/star-full-icon.svg"
                    start2.src="./icons/star-full-icon.svg"

                }, 0.00001);
            }

        }


        if(star.classList.contains("star_feedback3"))  {

            if(start3.getAttribute("src")==="./icons/star-full-icon.svg") {
                listofstars_about.forEach(start=>start.src="./icons/star-empty-icon.svg")
                setTimeout(() => {
                start1.src="./icons/star-empty-icon.svg"
                start2.src="./icons/star-empty-icon.svg"
                start3.src="./icons/star-empty-icon.svg"
                }, 0.00001);
            }
            else {
                listofstars_about.forEach(start=>start.src="./icons/star-empty-icon.svg")
                setTimeout(() => {
                    start1.src="./icons/star-full-icon.svg"
                    start2.src="./icons/star-full-icon.svg"
                    start3.src="./icons/star-full-icon.svg"

                }, 0.00001);
            }

        }


        if(star.classList.contains("star_feedback4"))  {

            if(start4.getAttribute("src")==="./icons/star-full-icon.svg") {
                listofstars_about.forEach(start=>start.src="./icons/star-empty-icon.svg")
                setTimeout(() => {
                start1.src="./icons/star-empty-icon.svg"
                start2.src="./icons/star-empty-icon.svg"
                start3.src="./icons/star-empty-icon.svg"
                start4.src="./icons/star-empty-icon.svg"
                }, 0.00001);
            }
            else {
                listofstars_about.forEach(start=>start.src="./icons/star-empty-icon.svg")
                setTimeout(() => {
                    start1.src="./icons/star-full-icon.svg"
                    start2.src="./icons/star-full-icon.svg"
                    start3.src="./icons/star-full-icon.svg"
                    start4.src="./icons/star-full-icon.svg"

                }, 0.00001);
            }

        }


        if(star.classList.contains("star_feedback5"))  {

            if(start5.getAttribute("src")==="./icons/star-full-icon.svg") {
                listofstars_about.forEach(start=>start.src="./icons/star-empty-icon.svg")
                setTimeout(() => {
                start1.src="./icons/star-empty-icon.svg"
                start2.src="./icons/star-empty-icon.svg"
                start3.src="./icons/star-empty-icon.svg"
                start4.src="./icons/star-empty-icon.svg"
                start5.src="./icons/star-empty-icon.svg"
                }, 0.00001);
            }
            else {
                listofstars_about.forEach(start=>start.src="./icons/star-empty-icon.svg")
                setTimeout(() => {
                    start1.src="./icons/star-full-icon.svg"
                    start2.src="./icons/star-full-icon.svg"
                    start3.src="./icons/star-full-icon.svg"
                    start4.src="./icons/star-full-icon.svg"
                    start5.src="./icons/star-full-icon.svg"
                }, 0.00001);
            }

        }

    }))

}
changeStart()



// ---FILTER PRODUCTS---
function filterProducts() {
    var elements = document.querySelectorAll('[data-product-name]');
    var attributeValues = [];

    // Iterate over selected elements and get attribute values
    elements.forEach(function (element) {
        attributeValues.push(element.getAttribute('data-product-name'));
    });
    const listOgPruductsNames = attributeValues;


    const searchMessage = document.querySelector(".results_search");

    const allProducts = document.querySelectorAll("#col_grid");
    const searchInput = document.querySelector(".search-input")
    let searchInputValue = searchInput.value.toLowerCase();
    if(searchInputValue=== "") {
        allProducts.forEach(product =>product.style.display="block");
    }
    else {
        var containsSubstring = listOgPruductsNames.find(function(element) {
            return element.includes(searchInputValue);
        });
        if(containsSubstring) {
            const searchedProduct = document.querySelector(`[data-product-name="${containsSubstring}"]`);

            if(searchedProduct) {
                searchMessage.style.display="none";
                setTimeout(() => {
                    searchMessage.style.display="block";
                }, 1);
                searchMessage.innerHTML="Found Results"
                allProducts.forEach(product =>product.style.display="none");
                setTimeout(() => {

                    searchedProduct.style.display="block";
                }, 1);
                setTimeout(() => {
                    searchedProduct.scrollIntoView({ behavior: 'smooth', block: "end" });
                }, 2);

            }

        }
        else {
            searchMessage.style.display="none";
            setTimeout(() => {
                searchMessage.style.display="block";
            }, 1);
            searchMessage.innerHTML="No Results"
        }


    }



}
const btn_search = document.querySelector(".btn_search");
if(btn_search) {
    btn_search.addEventListener("click", function(){
        filterProducts()
    })
}

function keyDownFilterProducts(event) {
    if (event.key === "Enter" || event.code === "Enter") {
        filterProducts()
    }
}
document.addEventListener("keydown", keyDownFilterProducts);


var stickyElement = document.querySelector(".search-container");
var isSticky = false;

window.addEventListener("scroll", function() {
    if(stickyElement) {
        var rect = stickyElement.getBoundingClientRect();
    }

    if(rect) {
        if (rect.top == 90) {
            if (!isSticky) {
                // Element is starting to stick
                stickyElement.style.width="100%"
                isSticky = true;
            }
        } else {
            stickyElement.style.width="0%"
            isSticky = false;
        }
    }

});
