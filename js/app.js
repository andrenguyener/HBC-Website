"use strict";




var membersList = document.querySelector("#members");

if (MEMBERS) {

    render();
    window.sr = ScrollReveal({ duration: 3000, delay: 1000 });
    sr.reveal('.member-card', 100);
}


function render() {
   MEMBERS.forEach(function(memberInner) {
       var memberCard = document.createElement("div");
       memberCard.className = "member-card";
       var img = document.createElement("img");
       img.className = "member-img";
       var name = document.createElement("p");
       name.className = "member-name";
       name.textContent = memberInner.name;
       var position = document.createElement("p");
       position.textContent = memberInner.position;
       position.className = "member-position";
       var description = document.createElement("p");
       description.className = "member-description";
       img.src = memberInner.picture;
       description.textContent = memberInner.description;
       name.appendChild(position);
       memberCard.appendChild(img);
       memberCard.appendChild(name);
       memberCard.appendChild(description);
       membersList.appendChild(memberCard);
   });
}


