

function my_search() {
  /* Get the text field */
  var input = document.getElementById("search_input");
  var newpage = "searchresults_cssbasics.html"
  if (input.value == "Getting started with the internet") {
    newpage = "getting_started_with_the_internet.html"
   } else if (input.value =="Organising Files") {
    newpage = "organising_files.html"
  } else if (input.value =="HTML Basics") {
    newpage = "index.html"
  } else if (input.value =="The <p> element") {
    newpage = "the<p>element.html"
  } else if (input.value =="CSS Basics") {
    newpage = "css.html"
  } else if (input.value =="css") {
    newpage = "css.html"
  } else if (input.value =="text color") {
    newpage = "css.html"
  } else if (input.value =="red") {
    newpage = "css.html"
  } else if (input.value =="underline") {
    newpage = "css.html"
  } else if (input.value =="video") {
    newpage = "index.html"
  } else if (input.value =="image") {
    newpage = "index.html"
  } else if (input.value =="link") {
    newpage = "index.html"
  } else if (input.value =="what is p") {
    newpage = "the<p>element.html"
  } else if (input.value =="rd") {
    newpage = "searchresults_cssbasics.html"
    } else if (input.value =="asif") {
    newpage = "searchresults_cssbasics.html"
  } else if (input.value =="waire") {
    newpage = "searchresults_cssbasics.html"
  } else if (input.value =="nderline") {
    newpage = "searchresults_cssbasics.html"
  } else if (input.value =="backround color") {
    newpage = "searchresults_cssbasics.html"
  } else if (input.value =="center text") {
    newpage = "searchresults_cssbasics.html"
  } else if (input.value =="italic") {
    newpage = "searchresults_cssbasics.html"
  } else if (input.value =="ackground color") {
    newpage = "searchresults_cssbasics.html"
  } else if (input.value =="backround colour") {
    newpage = "searchresults_cssbasics.html"
  } else if (input.value =="calculating") {
    newpage = "#python"
  } else if (input.value =="a") {
    newpage = "searchresults_cssbasics.html"
  } else if (input.value =="b") {
    newpage = "searchresults_cssbasics.html"
  } else if (input.value =="c") {
    newpage = "searchresults_cssbasics.html"
  } else if (input.value =="d") {
    newpage = "searchresults_cssbasics.html"
  } else if (input.value =="e") {
    newpage = "searchresults_cssbasics.html"
  } else if (input.value =="f") {
    newpage = "searchresults_cssbasics.html"  
   }

  //  alert("I'm going to take you to " + newpage);
   window.location.href = newpage;


  }