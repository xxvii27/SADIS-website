window.onload = function(){


    document.getElementById('maincontent').innerHTML = "<img id='sadis' class='img-responsive' src='img/sadis.png' alt='sadis' />";


    document.getElementById('home').onclick = function(){

        document.getElementById('mainimage').innerHTML = "";
        document.getElementById('maincontent').innerHTML = "<img id='sadis' class='img-responsive' src='img/sadis.png' alt='sadis' />";
    }

    document.getElementById('about').onclick = function(){

        document.getElementById('mainimage').innerHTML = "<img  class='img-responsive' src='img/about.jpg'  alt=''>";

        document.getElementById('maincontent').innerHTML = "<div class='row'>" +
                                                           "<div class='col-md-6'>" +
                                                           "     <img style='width:528px; height:368px;' src='img/welcoming.jpg' alt='' /> " +
                                                           " </div> " +
                                                           "<div class='col-md-6'> " +
                                                           "<b>SADIS (University of California, San Diego Indonesian Students Association) is a non-profit organization comprised of any registered undergraduate UCSD students and alumni who are interested in Indonesian culture.</b>" +
                                                           " </div> " +
                                                           " </div>" +
                                                            "<div class='row'>" +
                                                            "<div class='col-md-6'>" +
                                                            "<b>The main purpose of this organization is to promote Indonesian culture to UCSD community through social and other non-profit events, to creates camaraderie between members and to build a network with other Indonesian clubs</b>" +
                                                            " </div> " +
                                                            "<div class='col-md-6'> " +
                                                            "<img style='width:528px; height:368px;' src='img/welcoming.jpg' alt='' />" +
                                                            " </div> " +
                                                            " </div>" +
                                                            "<div class='row'>" +
                                                            "<div class='col-md-6'>" +
                                                            "     <img style='width:528px; height:368px;' src='img/prom.jpg' alt='' /> " +
                                                            " </div> " +
                                                            "<div class='col-md-6'> " +
                                                            "<b>Let's Enjoy 2014-2015 Together !!!</b>" +
                                                            " </div> " +
                                                            " </div>";
    }

    document.getElementById('officer').onclick = function(){

        document.getElementById('mainimage').innerHTML = "";
        document.getElementById('maincontent').innerHTML ="<h1 class='page-header'>The Officers</h1>\
              							     <img class='img-circle'  src='img/jesse.jpg' alt='' height='125px' width='125px'/>\
              							     <img class='img-circle'  src='img/mark.jpg' alt='' height='125px' width='125px'/>\
              							     ";
    }

    document.getElementById('events').onclick = function(){

        document.getElementById('mainimage').innerHTML = "";
        document.getElementById('maincontent').innerHTML = "<h1 class='page-header'>Events</h1>";
    }


    document.getElementById('gallery').onclick = function(){

        document.getElementById('mainimage').innerHTML = "";
        document.getElementById('maincontent').innerHTML ="<h1 class='page-header'>Gallery</h1>";
    }

    document.getElementById('contact').onclick = function(){

        document.getElementById('mainimage').innerHTML = "";
        document.getElementById('maincontent').innerHTML = "<h1 class='page-header'>Contact Us</h1>";
    }




}