// scroll reveal - shows elements as you scroll down
var revealElements = document.querySelectorAll(".reveal");

var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");

      // animate skill bars when they come into view
      var bars = entry.target.querySelectorAll(".bar-fill");
      bars.forEach(function(bar) {
        setTimeout(function() {
          bar.style.width = bar.getAttribute("data-w") + "%";
        }, 200);
      });
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(function(el) {
  observer.observe(el);
});

// also watch skill bars individually
var allBars = document.querySelectorAll(".bar-fill");
allBars.forEach(function(bar) {
  var barObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        setTimeout(function() {
          bar.style.width = bar.getAttribute("data-w") + "%";
        }, 300);
        barObserver.disconnect();
      }
    });
  }, { threshold: 0.5 });
  barObserver.observe(bar);
});

// highlight active nav link when scrolling
window.addEventListener("scroll", function() {
  var sections = document.querySelectorAll("section");
  var navLinks = document.querySelectorAll(".nav-links a");

  sections.forEach(function(sec) {
    var top = sec.offsetTop - 100;
    var bottom = top + sec.offsetHeight;

    if (window.scrollY >= top && window.scrollY < bottom) {
      navLinks.forEach(function(link) {
        link.style.color = "";
        if (link.getAttribute("href") === "#" + sec.getAttribute("id")) {
          link.style.color = "#00e676";
        }
      });
    }
  });
});

// simple form submit handler
function sendMsg(btn) {
  var name = document.getElementById("cname").value;
  var email = document.getElementById("cemail").value;
  var msg = document.getElementById("cmsg").value;

  if (name === "" || email === "" || msg === "") {
    alert("Please fill in all fields.");
    return;
  }

  btn.textContent = "Sent! ✓";
  btn.style.background = "#00c264";

  // reset after 3 seconds
  setTimeout(function() {
    btn.textContent = "Send Message";
    btn.style.background = "#00e676";
    document.getElementById("cname").value = "";
    document.getElementById("cemail").value = "";
    document.getElementById("cmsg").value = "";
  }, 3000);
}
