function validateForm() {
    console.log ("check1");
    var validity = true;
    var msg = "";
    var x = document.forms["firstForm"]["fullName"].value;
    if (validity==false)
        alert (msg);
    return validity;
};

function myFunction() {
    console.log("clicked");
    document.getElementById("myDropdown").classList.toggle("show");
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
function menu(){
    $( "#hum" ).click(function() {
     myFunction();
    });
  }

function createTable(){


    var NamesArr = ["Black Flags", "Black Lives", "Keep the SHABAT", "govermentp", "Shay", "healfyp"];
    var LocationsArr = ["Tveria Golani Bridge", "USA Miami", "Bnei Brak", "Laguna", "Kiria", "Zis"];
    var DatesArr = ["30.2.21", "10.10.2010", "15.1.21", "01.01.1948", "29.11.1992", "12.11.2001"];
    var ParticipateArr = ["yes", "no", "yes", "no", "yes", "no"];
    
    var mytable = "<table><tr><th>Name</th><th>Location</th><th>Date</th><th>Participate</th></tr>";
    for (var i=0; i<NamesArr.length; i++) {
      if(i==0){
        mytable+= "<tr id=first>"    
      }
      else{
        mytable+= "<tr>"    
      }
  
      console.log(ParticipateArr[i]);
        
        mytable += "<td>" + NamesArr[i] + "</td>";
        mytable += "<td>" + LocationsArr[i] + "</td>"; 
        mytable += "<td>" + DatesArr[i] + "</td>";
        if(ParticipateArr[i] == "yes"){
          mytable += "<td><input type='checkbox' name='mycheckox' checked></td>"
        }
        else{
          mytable += "<td><input type='checkbox' name='mycheckox'></td>"
        }
        mytable+="</tr>"; 
    }
    mytable += "</table>";
    document.getElementById("chart").innerHTML = mytable
}

function nextPage(){
  $( "#first" ).click(function() {
    window.location = "protest_page.html"
  });
}