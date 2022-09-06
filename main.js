

// document.addEventListener("DOMContentLoaded", function() {
    var FilterProduct = document.getElementById("new__product__filter");
    var filterArr = [
        {
            img2: "../images/new/1.jpg", nameTitle2: "Huawei Band 6", cout2: "0", shopTitle2: "544 000 so'm", turi: "soat"
        },
        {
            img2: "../images/new/2.jpg", nameTitle2: "HAl Fajr WS-06L", cout2: "0", shopTitle2: "931 000 so'm", turi: "soat"
        },
        {
            img2: "../images/new/3.jpg", nameTitle2: "Smart Watch CT 8 Max 7", cout2: "0", shopTitle2: "355 000 so'm", turi: "soat"
        },
        {
            img2: "../images/new/4.jpg", nameTitle2: "Alfajr Watch l WS-06S", cout2: "0", shopTitle2: "931 000 so'm", turi: "soat"
        },
        {
            img2: "../images/new/5.jpg", nameTitle2: "Haino Teko Air P3", cout2: "0", shopTitle2: "500 000 so'm", turi: "soat"
        },
        {
            img2: "../images/new/6.jpg", nameTitle2: "Al-Harameen HA-6351", cout2: "0", shopTitle2: "931 000 so'm", turi: "soat"
        },
        {
            img2: "../images/new/7.jpg", nameTitle2: "HOCO WATCH Y1", cout2: "0", shopTitle2: "395 000 so'm", turi: "soat"
        },
        {
            img2: "../images/new/8.jpg", nameTitle2: "Smart Watch GS7 Max", cout2: "0", shopTitle2: "345 000 so'm", turi: "soat"
        },
        {
            img2: "../images/new/9.jpg", nameTitle2: "HOCO WATCH Y3", cout2: "0", shopTitle2: "335 000 so'm", turi: "soat"
        },
        {
            img2: "../images/new/10.jpg", nameTitle2: "HOCO WATCH Y4", cout2: "0", shopTitle2: "335 000 so'm", turi: "soat"
        },
        {
            img2: "../images/filter/a__1.jpg", nameTitle2: "Avto qismlar", cout2: "0", shopTitle2: "99 000 so'm", turi: "auto"
        },
        {
            img2: "../images/filter/a__2.jpg", nameTitle2: "Avto qismlar", cout2: "0", shopTitle2: "99 000 so'm", turi: "auto"
        },
        {
            img2: "../images/filter/a__3.jpg", nameTitle2: "Avto qismlar", cout2: "0", shopTitle2: "99 000 so'm", turi: "auto"
        },     
        {
            img2: "../images/filter/q__11.jpg", nameTitle2: "Pro 5 Max", cout2: "0", shopTitle2: "98 000 so'm", turi: "quloqchinlar"
        },      
        {
            img2: "../images/filter/q__12.jpg", nameTitle2: "HA-4351 5", cout2: "0", shopTitle2: "98 000 so'm", turi: "quloqchinlar"
        },      
        {
            img2: "../images/filter/a__4.jpg", nameTitle2: "Avto qismlar", cout2: "0", shopTitle2: "99 000 so'm", turi: "auto"
        },
        {
            img2: "../images/filter/a__5.jpg", nameTitle2: "Avto qismlar", cout2: "0", shopTitle2: "99 000 so'm", turi: "auto"
        },        
        {
            img2: "../images/filter/b__1.jpg", nameTitle2: "Bolalar uchun", cout2: "0", shopTitle2: "70 000 so'm", turi: "bola"
        },       
        {
            img2: "../images/filter/b__2.jpg", nameTitle2: "Bolalar uchun", cout2: "0", shopTitle2: "70 000 so'm", turi: "bola"
        },       
        {
            img2: "../images/filter/k__1.jpg", nameTitle2: "Kalonkalar", cout2: "0", shopTitle2: "85 000 so'm", turi: "kalonka"
        },         
        {
            img2: "../images/filter/su__3.jpg", nameTitle2: "Sport", cout2: "0", shopTitle2: "72 000 so'm", turi: "sport"
        },    
        {
            img2: "../images/filter/su__4.jpg", nameTitle2: "Sport", cout2: "0", shopTitle2: "72 000 so'm", turi: "sport"
        },    
        {
            img2: "../images/filter/k__2.jpg", nameTitle2: "Kalonkalar", cout2: "0", shopTitle2: "85 000 so'm", turi: "kalonka"
        },      
        {
            img2: "../images/filter/k__3.jpg", nameTitle2: "Kalonkalar", cout2: "0", shopTitle2: "85 000 so'm", turi: "kalonka"
        },      
        {
            img2: "../images/filter/k__4.jpg", nameTitle2: "Kalonkalar", cout2: "0", shopTitle2: "85 000 so'm", turi: "kalonka"
        },         
        {
            img2: "../images/filter/q__4.jpg", nameTitle2: "Pro 5", cout2: "0", shopTitle2: "98 000 so'm", turi: "quloqchinlar"
        },      
        {
            img2: "../images/filter/q__5.jpg", nameTitle2: "Pro 6 Max", cout2: "0", shopTitle2: "98 000 so'm", turi: "quloqchinlar"
        },      
        {
            img2: "../images/filter/q__6.jpg", nameTitle2: "Pro 5 Max", cout2: "0", shopTitle2: "98 000 so'm", turi: "quloqchinlar"
        },      
        {
            img2: "../images/filter/k__5.jpg", nameTitle2: "Kalonkalar", cout2: "0", shopTitle2: "85 000 so'm", turi: "kalonka"
        },      
        {
            img2: "../images/filter/k__6.jpg", nameTitle2: "Kalonkalar", cout2: "0", shopTitle2: "85 000 so'm", turi: "kalonka"
        },     
        {
            img2: "../images/filter/k__11.jpg", nameTitle2: "Kalonkalar", cout2: "0", shopTitle2: "85 000 so'm", turi: "kalonka"
        },             
        {
            img2: "../images/filter/mt__1.jpg", nameTitle2: "Texnikalar", cout2: "0", shopTitle2: "895 000 so'm", turi: "texnika"
        },         
        {
            img2: "../images/filter/mt__2.jpg", nameTitle2: "Texnikalar", cout2: "0", shopTitle2: "895 000 so'm", turi: "texnika"
        },         
        {
            img2: "../images/filter/s__4.jpg", nameTitle2: "Sovg'alar", cout2: "0", shopTitle2: "63 000 so'm", turi: "sovg'alar"
        },   
        {
            img2: "../images/filter/s__5.jpg", nameTitle2: "Sovg'alar", cout2: "0", shopTitle2: "63 000 so'm", turi: "sovg'alar"
        },  
        {
            img2: "../images/filter/sa__1.jpg", nameTitle2: "Go'zallik", cout2: "0", shopTitle2: "37 000 so'm", turi: "go'zallik"
        },  
        {
            img2: "../images/filter/mt__3.jpg", nameTitle2: "Texnikalar", cout2: "0", shopTitle2: "895 000 so'm", turi: "texnika"
        },         
        {
            img2: "../images/filter/mt__4.jpg", nameTitle2: "Texnikalar", cout2: "0", shopTitle2: "895 000 so'm", turi: "texnika"
        },         
        {
            img2: "../images/filter/mt__5.jpg", nameTitle2: "Texnikalar", cout2: "0", shopTitle2: "895 000 so'm", turi: "texnika"
        },         
        {
            img2: "../images/filter/mt__6.jpg", nameTitle2: "Texnikalar", cout2: "0", shopTitle2: "895 000 so'm", turi: "texnika"
        },         
        {
            img2: "../images/filter/mt__7.jpg", nameTitle2: "Texnikalar", cout2: "0", shopTitle2: "895 000 so'm", turi: "texnika"
        },         
        {
            img2: "../images/filter/q__1.jpg", nameTitle2: "Pro 4 Pro", cout2: "0", shopTitle2: "98 000 so'm", turi: "quloqchinlar"
        },      
        {
            img2: "../images/filter/q__2.jpg", nameTitle2: "HA-6951 Max", cout2: "0", shopTitle2: "98 000 so'm", turi: "quloqchinlar"
        },      
        {
            img2: "../images/filter/q__3.jpg", nameTitle2: "Pro 4 Max", cout2: "0", shopTitle2: "98 000 so'm", turi: "quloqchinlar"
        },      
        {
            img2: "../images/filter/sm__3.jpg", nameTitle2: "Samsung S11", cout2: "0", shopTitle2: "1 000 $", turi: "smartfon"
        },         
        {
            img2: "../images/filter/sm__4.jpg", nameTitle2: "Huawei C12 Pro", cout2: "0", shopTitle2: "1 000 $", turi: "smartfon"
        },         
        {
            img2: "../images/filter/q__7.jpg", nameTitle2: "W-M6351 Pro", cout2: "0", shopTitle2: "98 000 so'm", turi: "quloqchinlar"
        },      
        {
            img2: "../images/filter/q__8.jpg", nameTitle2: "HA-6751 6 Pro", cout2: "0", shopTitle2: "98 000 so'm", turi: "quloqchinlar"
        },      
        {
            img2: "../images/filter/q__9.jpg", nameTitle2: "Pro 6", cout2: "0", shopTitle2: "98 000 so'm", turi: "quloqchinlar"
        },      
        {
            img2: "../images/filter/q__10.jpg", nameTitle2: "HW-4751", cout2: "0", shopTitle2: "98 000 so'm", turi: "quloqchinlar"
        }, 
        {
            img2: "../images/filter/s__1.jpg", nameTitle2: "Sovg'alar", cout2: "0", shopTitle2: "63 000 so'm", turi: "sovg'alar"
        },   
        {
            img2: "../images/filter/s__2.jpg", nameTitle2: "Sovg'alar", cout2: "0", shopTitle2: "63 000 so'm", turi: "sovg'alar"
        },   
        {
            img2: "../images/filter/s__3.jpg", nameTitle2: "Sovg'alar", cout2: "0", shopTitle2: "63 000 so'm", turi: "sovg'alar"
        },   
        {
            img2: "../images/filter/sa__2.jpg", nameTitle2: "Go'zallik", cout2: "0", shopTitle2: "37 000 so'm", turi: "go'zallik"
        },   
        {
            img2: "../images/filter/k__7.jpg", nameTitle2: "Kalonkalar", cout2: "0", shopTitle2: "85 000 so'm", turi: "kalonka"
        },      
        {
            img2: "../images/filter/k__8.jpg", nameTitle2: "Kalonkalar", cout2: "0", shopTitle2: "85 000 so'm", turi: "kalonka"
        },      
        {
            img2: "../images/filter/k__9.jpg", nameTitle2: "Kalonkalar", cout2: "0", shopTitle2: "85 000 so'm", turi: "kalonka"
        },      
        {
            img2: "../images/filter/k__10.jpg", nameTitle2: "Kalonkalar", cout2: "0", shopTitle2: "85 000 so'm", turi: "kalonka"
        },      
        {
            img2: "../images/filter/sa__3.jpg", nameTitle2: "Go'zallik", cout2: "0", shopTitle2: "37 000 so'm", turi: "go'zallik"
        },  
        {
            img2: "../images/filter/su__5.jpg", nameTitle2: "Sport", cout2: "0", shopTitle2: "72 000 so'm", turi: "sport"
        },    
        {
            img2: "../images/filter/su__6.jpg", nameTitle2: "Sport", cout2: "0", shopTitle2: "72 000 so'm", turi: "sport"
        },    
        {
            img2: "../images/filter/su__7.jpg", nameTitle2: "Sport", cout2: "0", shopTitle2: "72 000 so'm", turi: "sport"
        },
        {
            img2: "../images/filter/sa__4.jpg", nameTitle2: "Go'zallik", cout2: "0", shopTitle2: "37 000 so'm", turi: "go'zallik"
        },  
        {
            img2: "../images/filter/sa__5.jpg", nameTitle2: "Go'zallik", cout2: "0", shopTitle2: "37 000 so'm", turi: "go'zallik"
        },  
        {
            img2: "../images/filter/sa__6.jpg", nameTitle2: "Go'zallik", cout2: "0", shopTitle2: "37 000 so'm", turi: "go'zallik"
        },          
        {
            img2: "../images/filter/sm__1.jpg", nameTitle2: "Samsung S8+", cout2: "0", shopTitle2: "1 000 $", turi: "smartfon"
        },         
        {
            img2: "../images/filter/sm__2.jpg", nameTitle2: "Poco W3 Max", cout2: "0", shopTitle2: "1 000 $", turi: "smartfon"
        },      
        {
            img2: "../images/filter/sm__5.jpg", nameTitle2: "Samsung A48", cout2: "0", shopTitle2: "1 000 $", turi: "smartfon"
        },       
        {
            img2: "../images/filter/su__1.jpg", nameTitle2: "Sport", cout2: "0", shopTitle2: "72 000 so'm", turi: "sport"
        },    
        {
            img2: "../images/filter/su__2.jpg", nameTitle2: "Sport", cout2: "0", shopTitle2: "72 000 so'm", turi: "sport"
        }, 
    ];
    for(k = 0; k < filterArr.length; k++) {
        var rowfilter = document.createElement("div");
        rowfilter.classList.add("product__box");
        rowfilter.classList.add("col-6");
        rowfilter.classList.add("col-md-4");
        rowfilter.classList.add("col-lg-3");
        rowfilter.innerHTML = `
            <div class="card">
                <a href="./5.html" class="w-100">
                    <img src="${filterArr[k].img2}" alt=""></img>
                </a>
                <div class="card__title d-flex flex-column">
                    <div class="card__name d-flex align-items-center justify-content-between">
                        <a href="./5.html" class="name__title">${filterArr[k].nameTitle2}</a>
                        <div class="name__icon d-flex align-items-center">
                            <img src="../images/new/download.svg" alt="">
                            <p class="cout m-0">${filterArr[k].cout2}</p>
                        </div>
                    </div>
                    <div class="card__shop d-flex align-items-center justify-content-between">
                        <p class="shop__title m-0">${filterArr[k].shopTitle2}</p>
                        <div class="shop__icon d-flex align-items-center">
                            <a href="#" class="add__shop"><img src="../images/new/shopping.62d60ad.svg" alt=""></a>
                            <a href="#" class="heard"><img src="../images/new/heard.svg" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>`
            FilterProduct.appendChild(rowfilter);
    }


    function allFilter(event, sake) {
        console.log("dfgfdgfd");
        event.preventDefault();
        FilterProduct.innerHTML = '';
        if(cake == 'all') {
            for(k = 0; k < filterArr.length; k++) {
                var rowfilter = document.createElement("div");
                rowfilter.classList.add("product__box");
                rowfilter.classList.add("col-6");
                rowfilter.classList.add("col-md-4");
                rowfilter.classList.add("col-lg-3");
                rowfilter.innerHTML = `
                    <div class="card">
                        <a href="./5.html" class="w-100">
                            <img src="${filterArr[k].img2}" alt=""></img>
                        </a>
                        <div class="card__title d-flex flex-column">
                            <div class="card__name d-flex align-items-center justify-content-between">
                                <a href="./5.html" class="name__title">${filterArr[k].nameTitle2}</a>
                                <div class="name__icon d-flex align-items-center">
                                    <img src="../images/new/download.svg" alt="">
                                    <p class="cout m-0">${filterArr[k].cout2}</p>
                                </div>
                            </div>
                            <div class="card__shop d-flex align-items-center justify-content-between">
                                <p class="shop__title m-0">${filterArr[k].shopTitle2}</p>
                                <div class="shop__icon d-flex align-items-center">
                                    <a href="#" class="add__shop"><img src="../images/new/shopping.62d60ad.svg" alt=""></a>
                                    <a href="#" class="heard"><img src="../images/new/heard.svg" alt=""></a>
                                </div>
                            </div>
                        </div>
                    </div>`
                    FilterProduct.appendChild(rowfilter);
            }
        }
        else {
            for(k = 0; k < filterArr.length; k++) {
                if( filterArr[i].turi==sake) {
                    var rowfilter = document.createElement("div");
                    rowfilter.classList.add("product__box");
                    rowfilter.classList.add("col-6");
                    rowfilter.classList.add("col-md-4");
                    rowfilter.classList.add("col-lg-3");
                    rowfilter.innerHTML = `
                        <div class="card">
                            <a href="./5.html" class="w-100">
                                <img src="${filterArr[k].img2}" alt=""></img>
                            </a>
                            <div class="card__title d-flex flex-column">
                                <div class="card__name d-flex align-items-center justify-content-between">
                                    <a href="./5.html" class="name__title">${filterArr[k].nameTitle2}</a>
                                    <div class="name__icon d-flex align-items-center">
                                        <img src="../images/new/download.svg" alt="">
                                        <p class="cout m-0">${filterArr[k].cout2}</p>
                                    </div>
                                </div>
                                <div class="card__shop d-flex align-items-center justify-content-between">
                                    <p class="shop__title m-0">${filterArr[k].shopTitle2}</p>
                                    <div class="shop__icon d-flex align-items-center">
                                        <a href="#" class="add__shop"><img src="../images/new/shopping.62d60ad.svg" alt=""></a>
                                        <a href="#" class="heard"><img src="../images/new/heard.svg" alt=""></a>
                                    </div>
                                </div>
                            </div>
                        </div>`
                    FilterProduct.appendChild(rowfilter);
                }
            }
        }
    }
// });