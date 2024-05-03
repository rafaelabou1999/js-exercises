

const dogImg = document.querySelectorAll("[data-dog]");
const dogContent = document.querySelectorAll(".content");

const dogArray = Array.from(dogImg);
const contentArray = Array.from(dogContent);

let dogClicked = null;
dogImg.forEach((dog) => {
    dog.addEventListener("click", (e) => {
        if (!dogClicked || dogClicked === e.target) {
            dogClick(e.target);
            dogClicked = e.target;
        }
    });
});

function dogClick(element){
    const clickedIndex = dogArray.indexOf(element);

    contentArray.forEach((content, index) => {
        if(clickedIndex === index){
            content.style.display = "block";
            document.body.classList.add("active");
            document.addEventListener("click", clickOutside);
        }
    });
}

function clickOutside(e){   
    const clickedArea = e.target;

    if (!clickedArea.closest("[data-dog]") && !clickedArea.closest(".content")) {
        contentArray.forEach((content) => {
            content.style.display = "none";
        });
        document.body.classList.remove("active");
        document.removeEventListener("click", clickOutside);
        dogClicked = null;
    }
}
 
