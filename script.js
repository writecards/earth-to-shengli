let project1 = document.getElementById("show1");
let project2 = document.getElementById("show2");
let project3 = document.getElementById("show3");
let project4 = document.getElementById("show4");
let project5 = document.getElementById("show5");
let project6 = document.getElementById("show6");
let project7 = document.getElementById("show7");
let awardsTab = document.getElementById("showAwards");
let aboutMe = document.getElementById("showAbout")
let projectSub = document.getElementById("project-subheader")
let bigOrbs = document.getElementById("orb1");
let smallOrbs = document.getElementById("orb2");

let show2on = false;

function show1(){
  if (project1.style.display === "none") {
    project1.style.display = "block";
    project2.style.display = "none";
        project3.style.display = "none";
        project4.style.display = "none";
        project5.style.display = "none";
        project6.style.display = "none";
        project7.style.display = "none";
       bigOrbs.style.display = "none";
       smallOrbs.style.display = "block";
  } else {
    project1.style.display = "none";
    project2.style.display = "none";
    project3.style.display = "none";
    project4.style.display = "none";
    project5.style.display = "none";
    project6.style.display = "none";
    project7.style.display = "none";
    bigOrbs.style.display = "block";
    smallOrbs.style.display = "none";
  }
}

function show2(){
 

    if (project2.style.display === "none") {
        project1.style.display = "none";
        project2.style.display = "block";
        project3.style.display = "none";
        project4.style.display = "none";
        project5.style.display = "none";
        project6.style.display = "none";
        project7.style.display = "none";
        bigOrbs.style.display = "none";
        smallOrbs.style.display = "block";
      } else {
        project1.style.display = "none";
        project2.style.display = "none";
        project3.style.display = "none";
        project4.style.display = "none";
        project5.style.display = "none";
        project6.style.display = "none";
        project7.style.display = "none";
        bigOrbs.style.display = "block";
    smallOrbs.style.display = "none";
      }
}



function show3(){
    if (project3.style.display === "none") {
        project1.style.display = "none";
        project2.style.display = "none";
        project3.style.display = "block";
        project4.style.display = "none";
        project5.style.display = "none";
        project6.style.display = "none";
        project7.style.display = "none";
        bigOrbs.style.display = "none";
        smallOrbs.style.display = "block";
      } else {
        project1.style.display = "none";
        project2.style.display = "none";
        project3.style.display = "none";
        project4.style.display = "none";
        project5.style.display = "none";
        project6.style.display = "none";
        project7.style.display = "none";
        bigOrbs.style.display = "block";
    smallOrbs.style.display = "none";
      }
}

function show4(){
    if (project4.style.display === "none") {
        project1.style.display = "none";
        project2.style.display = "none";
        project3.style.display = "none";
        project4.style.display = "block";
        project5.style.display = "none";
        project6.style.display = "none";
        project7.style.display = "none";
        bigOrbs.style.display = "none";
        smallOrbs.style.display = "block";
      } else {
        project1.style.display = "none";
        project2.style.display = "none";
        project3.style.display = "none";
        project4.style.display = "none";
        project5.style.display = "none";
        project6.style.display = "none";
        project7.style.display = "none";
        bigOrbs.style.display = "block";
    smallOrbs.style.display = "none";
      }
}

function show5(){
    if (project5.style.display === "none") {
        project1.style.display = "none";
        project2.style.display = "none";
        project3.style.display = "none";
        project4.style.display = "none";
        project5.style.display = "block";
        project6.style.display = "none";
        project7.style.display = "none";
        bigOrbs.style.display = "none";
        smallOrbs.style.display = "block";
      } else {
        project1.style.display = "none";
        project2.style.display = "none";
        project3.style.display = "none";
        project4.style.display = "none";
        project5.style.display = "none";
        project6.style.display = "none";
        project7.style.display = "none";
        bigOrbs.style.display = "block";
    smallOrbs.style.display = "none";
      }
}

function show6(){
    if (project6.style.display === "none") {
        project1.style.display = "none";
        project2.style.display = "none";
        project3.style.display = "none";
        project4.style.display = "none";
        project5.style.display = "none";
        project6.style.display = "block";
        project7.style.display = "none";
        bigOrbs.style.display = "none";
        smallOrbs.style.display = "block";
      } else {
        project1.style.display = "none";
        project2.style.display = "none";
        project3.style.display = "none";
        project4.style.display = "none";
        project5.style.display = "none";
        project6.style.display = "none";
        project7.style.display = "none";
        bigOrbs.style.display = "block";
    smallOrbs.style.display = "none";
      }
}

function show7(){
    if (project7.style.display === "none") {
        project1.style.display = "none";
        project2.style.display = "none";
        project3.style.display = "none";
        project4.style.display = "none";
        project5.style.display = "none";
        project6.style.display = "none";
        project7.style.display = "block";
        bigOrbs.style.display = "none";
        smallOrbs.style.display = "block";
      } else {
        project1.style.display = "none";
        project2.style.display = "none";
        project3.style.display = "none";
        project4.style.display = "none";
        project5.style.display = "none";
        project6.style.display = "none";
        project7.style.display = "none";
        bigOrbs.style.display = "block";
    smallOrbs.style.display = "none";
      }
}


function showAwards(){
    if (awardsTab.style.display === "none") {
        project1.style.display = "none";
        project2.style.display = "none";
        project3.style.display = "none";
        project4.style.display = "none";
        project5.style.display = "none";
        project6.style.display = "none";
        project7.style.display = "none";
        awardsTab.style.display = "block"
      } else {
        project1.style.display = "none";
        project2.style.display = "none";
        project3.style.display = "none";
        project4.style.display = "none";
        project5.style.display = "none";
        project6.style.display = "none";
        project7.style.display = "none";
        awardsTab.style.display = "none";

      }
}

function showAbout(){
    if(aboutMe.style.display === "none"){
        aboutMe.style.display = "block";
        project1.style.display = "none";
        project2.style.display = "none";
        project3.style.display = "none";
        project4.style.display = "none";
        project5.style.display = "none";
        project6.style.display = "none";
        project7.style.display = "none";
    }else{
        aboutMe.style.display = "none";
        project1.style.display = "none";
        project2.style.display = "none";
        project3.style.display = "none";
        project4.style.display = "none";
        project5.style.display = "none";
        project6.style.display = "none";
        project7.style.display = "none";
    }
}









