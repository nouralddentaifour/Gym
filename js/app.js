let butt = document.querySelector(".bar svg")
let links = document.querySelector(".links")
let social = document.querySelector(".social")
let header = document.querySelector(".header")
let a = document.querySelector(".header .links ul li a")
butt.onclick = function () {
    links.classList.add("open")
    social.classList.add("open")
    a.classList.remove("active")
    let div = document.createElement("div")
    div.className="contant"
    let but = document.createElement("button")
    but.className = "but"
    but.innerHTML = "X"
    div.appendChild(links)
    div.appendChild(social)
    div.appendChild(but)
    header.appendChild(div)
}
addEventListener("click" , function(ele) {
    if (ele.target.className === "but") {
        this.document.querySelector(".contant").style.display = "none"
    }
})
let box = document.querySelectorAll(".row .box .overlay")
    box.forEach((ele)=>{
        ele.addEventListener("click" , function (el) {
            let overlay = document.createElement("div")
            overlay.className= "over"
            let img = document.createElement("img")
            img.src= el.target.lastElementChild.src
            let button = document.createElement("button")
            button.className = "close"
            button.innerHTML= "x"
            overlay.appendChild(img)
            overlay.appendChild(button)
            document.body.appendChild(overlay)
        })
    })

    addEventListener("click" , function (but) {
        if (but.target.className === "close") {
            but.target.parentElement.remove()
        }
    })

    const swiper=new Swiper(
        '.swiper'
        ,{loop:true,
        pagination:{el:".swiper-pagination",clickable:true,}
        ,slidesPerView:3,spaceBetween:30,freeMode:true,breakpoints:
        {320:{slidesPerView:1,spaceBetween:20},
        640:{slidesPerView:2,spaceBetween:40},
        991:{slidesPerView:3,spaceBetween:40}},
                  navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
              scrollbar: {
            el: '.swiper-scrollbar',
          },
      });
