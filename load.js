

if (localStorage.length > 1 ){
    
    let btn1 = document.querySelector(".btn1");
    let btn2 = document.querySelector(".btn2");
    let btn3 = document.querySelector(".btn3");

    let group = document.querySelector(".qrup");
    group.style.opacity = "50%";

    let text = document.querySelector("h3");
    text.innerHTML = "Siz artıq rəyinizi qeyd etmisiniz.";
    let feedback = localStorage.getItem("sentf");

    if(localStorage.getItem("sentf") == "great"){
        btn2.style = "opacity: 0; pointer-events: none;";
        btn3.style = "opacity: 0; pointer-events: none;";
        btn1.style = "transform: translateX(50px) scale(1.5);";
        document.getElementById("img1").style.transform = "rotateZ(360deg)";    
    };

    if(localStorage.getItem("sentf") == "normal"){
        btn1.style = "opacity: 0; pointer-events: none;";
        btn3.style = "opacity: 0; pointer-events: none;";
        btn2.style = "transform: translateX(0) scale(1.5);";
        document.getElementById("img2").style.transform = "rotateZ(360deg)";
};

    if(localStorage.getItem("sentf") == "bad"){
        btn1.style = "opacity: 0; pointer-events: none;";
        btn2.style = "opacity: 0; pointer-events: none;";
        btn3.style = "transform: translateX(-50px) scale(1.5);";
        document.getElementById("img3").style.transform = "rotateZ(360deg)";
};



}
