function showDiv(s, a) {
  if (document.getElementById(s).style.display == "block") {
    document.getElementById(s).style.display = "none";
    document.getElementById(a).style.transform = "rotate(0deg)";
  } else {
    document.getElementById(s).style.display = "block";
    document.getElementById(a).style.transform = "rotate(180deg)";
  }
}

function setCorrectWidth() {}
