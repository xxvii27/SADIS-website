window.onload = function(){



         document.getElementById('maincontent').innerHTML = "<img  class='img-responsive' id='main' src='img/sadis.png' alt='sadis' />";


         document.getElementById('home').onclick = function(){
  		
              document.getElementById('maincontent').innerHTML = "<img  class='img-responsive' id='main' src='img/sadis.png' alt='sadis' />";
         }

         document.getElementById('about').onclick = function(){
  		
              document.getElementById('maincontent').innerHTML = "<h1 class='page-header'>About Us</h1>\
              							       <p><b>SADIS (University of California, San Diego Indonesian Students Association) is a non-profit organization comprised of any registered undergraduate \
              							       UCSD students and alumni who are interested in Indonesian culture.</b></p><br/><br/>\
								        <p><b>The main purpose of this organization is to promote Indonesian culture to UCSD community through social and other non-profit events, to creates \
								       camaraderie between members and to build a network with other Indonesian clubs.\
								      </b></p>";

         }

         document.getElementById('officer').onclick = function(){
  		
              document.getElementById('maincontent').innerHTML ="<h1 class='page-header'>The Officers</h1>";
         }

        document.getElementById('events').onclick = function(){
  		
              document.getElementById('maincontent').innerHTML = "<h1 class='page-header'>Events</h1>";
         }


         document.getElementById('gallery').onclick = function(){
  		
              document.getElementById('maincontent').innerHTML ="<h1 class='page-header'>Gallery</h1>";
         }

         document.getElementById('contact').onclick = function(){
  		
              document.getElementById('maincontent').innerHTML = "<h1 class='page-header'>Contact Us</h1>";
         }




}