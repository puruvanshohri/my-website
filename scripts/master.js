function bigImg(x) {
  x.style.width = "60px";
}

function normalImg(x) {
  x.style.width = "40px";
}


function validateForm() {
  let i = 0;
  var x = document.forms["myForm"]["fullname"].value;
  if (x == "") {
    document.getElementById('name').style.background = "rgb(240,128,128,0.5)";
    i++;
  } else {
    document.getElementById('name').style.background = "#fff";
  }

  var s = document.forms["myForm"]["subject"].value;
  if (s == "") {
    document.getElementById('subject').style.background = "rgb(240,128,128,0.5)";
    i++;
  } else {
    document.getElementById('subject').style.background = "#fff";
  }

  var m = document.forms["myForm"]["message"].value;
  if (m == "") {
    document.getElementById('message').style.background = "rgb(240,128,128,0.5)";
    i++;
  } else {
    document.getElementById('message').style.background = "#fff";
  }

  var e = document.forms["myForm"]["email"].value;
  var atposition = e.indexOf("@");
  var dotposition = e.lastIndexOf(".");
  if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= e.length) {
    document.getElementById('email').style.background = "rgb(240,128,128,0.5)";
    i++;
  } else {
    document.getElementById('enail').style.background = "#fff";
  }
  if (i > 0) {
    return false;
  } else {
    return true;
  }
}
