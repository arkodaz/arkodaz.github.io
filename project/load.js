var ad1= document.getElementById("adsoyad1");
var ad2= document.getElementById("adsoyad2");
var phone= document.getElementById("phonen");
var group= document.getElementById("group");

var lastexam = document.getElementById("lastexam");
var ortaexam = document.getElementById("ortaexam");
var comment = document.getElementById("comment");
var allpoints = document.getElementById("allpoints");

var url = window.location.href.split('=')[1];
var us = url.split('%20');
var username = us[0]+" "+us[1];


const store = new SteinStore(
    "https://api.steinhq.com/v1/storages/635580f6eced9b09e9a1a2fe"
  );

  store.read("Sheet1", { search: { name: username} }).then(data => {
    console.log(data);
    ad1.innerHTML = data[0].name;
    ad2.innerHTML = data[0].name;
    phone.innerHTML = data[0].phone_number;
    group.innerHTML = data[0].group;
    allpoints.innerHTML = data[0].examresults;
    comment.innerHTML = data[0].comment;

    var results = data[0].examresults.split(" ");


    lastexam.innerHTML = results[results.length - 1];

    total=0;
    for (let i = 0; i < results.length; i++) {
           total += parseInt(results[i]);
           
        } 
    ortabal = total/results.length;
    ortaexam.innerHTML = ortabal;

  });