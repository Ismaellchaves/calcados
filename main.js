let col_btn = document.querySelectorAll(".btn-col");
let col_item = document.querySelectorAll(".collection-item");

col_btn.forEach((btn, index) => {
   btn.addEventListener("click", (e) => {
      col_btn.forEach((col_bt, ind) => {
         col_bt.classList.remove("btn");
      })
      e.target.classList.add("btn");
      let data_btn = btn.getAttribute("data-btn");
      col_item.forEach((col, inde) => {
         if (col.getAttribute("data-item") == data_btn || data_btn == "all") {
            col.classList.remove("hide")
         } else {
            col.classList.add("hide");
         }
      })
   })
})

// Nav Bar
let ul = document.querySelector("ul");
let burger_icon = document.querySelector(".burger_icon");

burger_icon.addEventListener("click", () => {
   if (burger_icon.classList.contains("fa-bars")) {
      burger_icon.classList.add("fa-xmark");
      burger_icon.classList.remove("fa-bars");
      ul.classList.add("active");
   } else {
      burger_icon.classList.remove("fa-xmark");
      burger_icon.classList.add("fa-bars");
      ul.classList.remove("active");
   }
})



function initMap() {
   // Localização de Crateús - CE
   const location = { lat: -5.17824, lng: -40.67700 };

   const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: location,
      disableDefaultUI: false,
   });

   // Marcador personalizado
   const customMarker = new google.maps.Marker({
      position: location,
      map: map,
      title: "Crateús - CE",
      icon: {
         url: "maps.png",  // coloque aqui sua imagem do alfinete
         scaledSize: new google.maps.Size(55, 55),
         anchor: new google.maps.Point(27, 55)
      },
      animation: google.maps.Animation.BOUNCE
   });
}
