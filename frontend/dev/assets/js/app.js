function openNav() {
    document.getElementById("mySidebar").style.width = "215px";
    document.getElementById("mySidebar").style.minWidth = "215px";
    document.getElementById("mySidebar").classList.remove("collapsed");
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "80px";
  document.getElementById("mySidebar").style.minWidth = "80px";
  document.getElementById("mySidebar").classList.add("collapsed");
}
