var prevScrollpos = window.scrollY;
window.onscroll = function() {
var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("Navbar").style.top = "0";
  } else {
    document.getElementById("Navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

