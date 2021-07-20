/*
# scroolToSomeWhere Function you can use it in any place just use like this :
# in HTML File :
# <a href="#" data-section=".example">About</a>
# <div class = "example">
#   ......
#   ....
# </div>
*/

//Select All links
const allLinks = document.querySelectorAll(".navbar .navbar-nav .nav-item a");

function scroolToSomeWhere(elements) {
  elements.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

scroolToSomeWhere(allLinks);
