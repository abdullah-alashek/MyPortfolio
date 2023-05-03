// Get the element
var element = document.getElementById("myElement");
var img = document.getElementById("image");
const mycard = document.querySelectorAll(".portfolio .container .card");



// mycard.forEach(function(item) {
//  console.log(item);
//  item.addEventListener("mouseover", function() {
//   item.classList.add("hoverCard");
//     });
// });
// mycard.forEach(function(item) {
//   console.log(item);
//   item.addEventListener("mouseout", function() {
//     item.classList.remove("hoverCard");
//     });
// });

  var screenWidth = window.innerWidth;
  var divElement = document.getElementById("myDiv");
  if (screenWidth <= 991) {
    img.style.opacity="0.4";
    // var newElement = document.createElement("p");
    // var textNode = document.createTextNode("This is a new paragraph element");
    // newElement.appendChild(textNode);
    console.log(divElement);
    divElement.textContent="Me.";
  }
  else {
    divElement.textContent= "";
  }


window.onscroll = function() {
  var screenWidth = window.innerWidth;
  if (screenWidth <= 991) {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPosition > 10) {
      element.classList.add("newc");
    }
    if (scrollPosition > 150){
      element.classList.add("newc");
      element.style.height = "auto";
    } 
    if (scrollPosition == 0){
      element.classList.remove("newc");
      element.style.height = "auto";
    } 
  }
else{
  element.classList.remove("newc");
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollPosition > 10) {
    element.classList.add("newc");
  }
  if (scrollPosition > 150){
    element.classList.add("newc");
    element.style.height = "60px";
  } 
  if (scrollPosition == 0){
    element.classList.remove("newc");
    element.style.height = "75px";
  } 
}
};



const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const currentSection = entry.target;
      var id =currentSection.getAttribute('id');
      var hero = document.getElementById("hom");
      var services = document.getElementById("ser");
      var about = document.getElementById("abo");
      var portfolio = document.getElementById("por");
      var client = document.getElementById("cli");
      var contact = document.getElementById("con");

      if (id == "hero") {
        hero.style.color='#207165';
        services.style.color='#000';
        about.style.color='#000';
        portfolio.style.color='#000';
        client.style.color='#000';
        contact.style.color='#000';
      }
      if (id == "services") {
        services.style.color='#207165';
        hero.style.color='#207165';
        about.style.color='#000';
        portfolio.style.color='#000';
        client.style.color='#000';
        contact.style.color='#000';
      }
      if (id == "about") {
        about.style.color='#207165';
        hero.style.color='#207165';
        services.style.color='#000';
        portfolio.style.color='#000';
        client.style.color='#000';
        contact.style.color='#000';
      }
      if (id == "portfolio") {
        portfolio.style.color='#207165';
        hero.style.color='#207165';
        services.style.color='#000';
        about.style.color='#000';
        client.style.color='#000';
        contact.style.color='#000';
      }
      if (id == "client") {
        client.style.color='#207165';
        hero.style.color='#207165';
        services.style.color='#000';
        about.style.color='#000';
        portfolio.style.color='#000';
        contact.style.color='#000';
      }
      if (id == "contact") {
        contact.style.color='#207165';
        hero.style.color='#207165';
        services.style.color='#000';
        about.style.color='#000';
        portfolio.style.color='#000';
        client.style.color='#000';
      }
      
    }
  });
});

sections.forEach(section => {
  observer.observe(section);
});