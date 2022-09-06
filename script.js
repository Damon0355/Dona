
document.addEventListener("DOMContentLoaded", function(){

    // ---------------------------------menyu----------------------------

    const burger = document.querySelector(".burger"),
    menyu = document.querySelector(".menyu__res"),
    menyuClose = document.querySelector(".res__close"),
    menyuModal = document.querySelector(".menyu__modal");
    burger.addEventListener("click", function() {
        menyuModal.classList.toggle("active__modal");
        menyu.classList.toggle("active__menyu");
    });
    menyuClose.addEventListener("click", function() {
        menyu.classList.toggle("active__menyu");
        menyuModal.classList.toggle("active__modal");   
    });
    menyuModal.addEventListener("click", function() {
        menyuModal.classList.toggle("active__modal");        
        menyu.classList.toggle("active__menyu");
    })

    // -------------------------------portfolio-----------------------------

    const portfolio = document.querySelector(".usre__portfolio"),
    usreClick = document.querySelector(".usre__click");
    usreClick.addEventListener("click", function() {
        portfolio.classList.toggle("usre__active");
    });
    this.body.addEventListener("click", function() {
        if(!portfolio) {
            portfolio.classList.toggle("usre__active");
        }
    });



    //=========================================================index.html=============================================================

    // ---------------------------------fluid------------------------------

    // var fluidBox = document.getElementById("fluid");
    var fluidArr = [
        {
            img: "./images/fluid/10.jpg", title: "Quloqchinlar"
        },
        {
            img: "./images/fluid/7.jpg", title: "Bolalar uchun"
        },
        {
            img: "./images/fluid/9.jpg", title: "Sovg'alar"
        },
        {
            img: "./images/fluid/8.jpg", title: "Automobillar uchun"
        },
        {
            img: "./images/fluid/12.jpg", title: "Smartfonlar"
        },
        {
            img: "./images/fluid/5.jpg", title: "Go'zallik va salomatlik"
        },
        {
            img: "./images/fluid/4.jpg", title: "Aqilli soatlar"
        },
        {
            img: "./images/fluid/6.jpg", title: "Uy va hovli uchun"
        },
        {
            img: "./images/fluid/1.jpg", title: "Kalonkalar"
        },
        {
            img: "./images/fluid/3.jpg", title: "Kitoblar"
        },
        {
            img: "./images/fluid/11.jpg", title: "Maishiy Texnika"
        },
        {
            img: "./images/fluid/2.jpg", title: "Sport uchun"
        }

    ];
    for(var i = 0; i < fluidArr.length; i++) {
        var rowOne = document.createElement("div");
        rowOne.classList.add("fluid__box");
        rowOne.classList.add("col-6");
        rowOne.classList.add("col-md-4");
        rowOne.classList.add("col-lg-2");
        rowOne.innerHTML = `
            <div class="card d-flex flex-column justify-content-center align-items-center">
                <a href="./html/9.html" class="w-100">
                    <img src="${fluidArr[i].img}" alt=""></img>
                </a>
                <div class="box d-flex justify-content-center align-items-center"><p>${fluidArr[i].title}</p></div>
            </div>`
        document.getElementById("fluid").appendChild(rowOne);    
    }

    // ------------------------------new__product----------------------------

    // var newProduct = document.getElementById("new__product");
    var newProductArr = [
        {
            img: "./images/new/1.jpg", nameTitle: "Huawei Band 6", cout: "0", shopTitle: "544 000 so'm"
        },
        {
            img: "./images/new/2.jpg", nameTitle: "HAl Fajr WS-06L", cout: "0", shopTitle: "931 000 so'm"
        },
        {
            img: "./images/new/3.jpg", nameTitle: "Smart Watch CT 8 Max 7", cout: "0", shopTitle: "355 000 so'm"
        },
        {
            img: "./images/new/4.jpg", nameTitle: "Alfajr Watch l WS-06S", cout: "0", shopTitle: "931 000 so'm"
        },
        {
            img: "./images/new/5.jpg", nameTitle: "Haino Teko Air P3", cout: "0", shopTitle: "500 000 so'm"
        },
        {
            img: "./images/new/6.jpg", nameTitle: "Al-Harameen HA-6351", cout: "0", shopTitle: "931 000 so'm"
        },
        {
            img: "./images/new/7.jpg", nameTitle: "HOCO WATCH Y1", cout: "0", shopTitle: "395 000 so'm"
        },
        {
            img: "./images/new/8.jpg", nameTitle: "Smart Watch GS7 Max", cout: "0", shopTitle: "345 000 so'm"
        },
        {
            img: "./images/new/9.jpg", nameTitle: "HOCO WATCH Y3", cout: "0", shopTitle: "335 000 so'm",
        },
        {
            img: "./images/new/10.jpg", nameTitle: "HOCO WATCH Y4", cout: "0", shopTitle: "335 000 so'm"
        },
    ];
    for(j = 0; j < newProductArr.length; j++) {
        var rowThee = document.createElement("div");
        rowThee.classList.add("product__box");
        rowThee.classList.add("col-6");
        rowThee.classList.add("col-md-4");
        rowThee.classList.add("col-lg-3");
        rowThee.innerHTML = `
            <div class="card">
                <a href="./html/5.html" class="w-100">
                    <img src="${newProductArr[j].img}" alt=""></img>
                </a>
                <div class="card__title d-flex flex-column">
                    <div class="card__name d-flex align-items-center justify-content-between">
                        <a href="./html/5.html" class="name__title">${newProductArr[j].nameTitle}</a>
                        <div class="name__icon d-flex align-items-center">
                            <img src="./images/new/download.svg" alt="">
                            <p class="cout m-0">${newProductArr[j].cout}</p>
                        </div>
                    </div>
                    <div class="card__shop d-flex align-items-center justify-content-between">
                        <p class="shop__title m-0">${newProductArr[j].shopTitle}</p>
                        <div class="shop__icon d-flex align-items-center">
                            <a href="#" class="add__shop"><img src="./images/new/shopping.62d60ad.svg" alt=""></a>
                            <a href="#" class="heard"><img src="./images/new/heard.svg" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>`
            document.getElementById("new__product").appendChild(rowThee);
    }
    
    // ------------------------------new__product----------------------------

    // var newProduct2 = document.getElementById("new__product2");
    var newProductArr2 = [
        {
           id: "1", img2: "./images/new/1.jpg", nameTitle2: "Huawei Band 6", cout2: "0", shopTitle2: "544 000 so'm"
        },
        {
            id: "2",  img2: "./images/new/2.jpg", nameTitle2: "HAl Fajr WS-06L", cout2: "0", shopTitle2: "931 000 so'm"
        },
        {
            id: "3", img2: "./images/new/3.jpg", nameTitle2: "Smart Watch CT 8 Max 7", cout2: "0", shopTitle2: "355 000 so'm"
        },
        {
            id: "4", img2: "./images/new/4.jpg", nameTitle2: "Alfajr Watch l WS-06S", cout2: "0", shopTitle2: "931 000 so'm"
        },
        {
            id: "5", img2: "./images/new/5.jpg", nameTitle2: "Haino Teko Air P3", cout2: "0", shopTitle2: "500 000 so'm"
        },
        {
            id: "6", img2: "./images/new/6.jpg", nameTitle2: "Al-Harameen HA-6351", cout2: "0", shopTitle2: "931 000 so'm"
        },
        {
            id: "7", img2: "./images/new/7.jpg", nameTitle2: "HOCO WATCH Y1", cout2: "0", shopTitle2: "395 000 so'm"
        },
        {
            id: "8", img2: "./images/new/8.jpg", nameTitle2: "Smart Watch GS7 Max", cout2: "0", shopTitle2: "345 000 so'm"
        },
        {
            id: "9", img2: "./images/new/9.jpg", nameTitle2: "HOCO WATCH Y3", cout2: "0", shopTitle2: "335 000 so'm"
        },
        {
            id: "10", img2: "./images/new/10.jpg", nameTitle2: "HOCO WATCH Y4", cout2: "0", shopTitle2: "335 000 so'm"
        },
    ];
    for(k = 0; k < newProductArr2.length; k++) {
        var rowThee2 = document.createElement("div");
        rowThee2.classList.add("product__box");
        rowThee2.classList.add("col-6");
        rowThee2.classList.add("col-md-4");
        rowThee2.classList.add("col-lg-3");
        rowThee2.innerHTML = `
            <div class="card">
                <a href="./html/5.html" class="w-100">
                    <img src="${newProductArr2[k].img2}" alt=""></img>
                </a>
                <div class="card__title d-flex flex-column">
                    <div class="card__name d-flex align-items-center justify-content-between">
                        <a href="./html/5.html" class="name__title">${newProductArr2[k].nameTitle2}</a>
                        <div class="name__icon d-flex align-items-center">
                            <img src="./images/new/download.svg" alt="">
                            <p class="cout m-0">${newProductArr2[k].cout2}</p>
                        </div>
                    </div>
                    <div class="card__shop d-flex align-items-center justify-content-between">
                        <p class="shop__title m-0">${newProductArr2[k].shopTitle2}</p>
                        <div class="shop__icon d-flex align-items-center">
                            <a href="#" class="add__shop"><img src="./images/new/shopping.62d60ad.svg" alt=""></a>
                            <a href="#" class="heard"><img src="./images/new/heard.svg" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>`
            document.getElementById("new__product2").appendChild(rowThee2);
    }
});