/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}
  
  /* Close/hide the sidenav */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function on() {
  document.getElementById("congratulation").style.display = "block";
}

function off() {
  document.getElementById("congratulation").style.display = "none";
}

function openSolution(n = 0) {
  id = "solution";
  if (n ===1) {
    id+=1;
  }
  let solDiv = document.getElementById(id)
  let lines = countLine(n);
  console.log(lines*20+" px");
  solDiv.style.height = lines*18+"px";
  solDiv.style.visibility = "visible";
}

function closeSolution(n = 0) {
  id = "solution";
  if (n ===1) {
    id+=1;
  }
  document.getElementById(id).style.visibility = "hidden";
  document.getElementById(id).style.height = "0px";
}

function countLine(n) {
  let id = "solution";
  if (n === 1){
    id+=1;
  }
  let solDiv = document.getElementById(id);
  let line = solDiv.textContent;
  let count = line.split("\n").length;
  console.log(count);
  return count;
}
