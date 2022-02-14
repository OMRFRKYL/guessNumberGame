//Burada htmlden dom ile elementlerimizi çağırıyoruz.

let inputNumber = document.querySelector("#input-number");
let check = document.querySelector("#button-check");
let reset = document.querySelector("#button-reset");
let ilk_sayı = document.querySelector("#ilk-sayı");
let son_sayı = document.querySelector("#son-sayı");
let resim = document.querySelector("#ılk-gorsel");
let sayaç = document.querySelector("#kalan-hak");
let mesaj = document.querySelector("#mesaj");


//Burada math() fonksiyonu ile random sayı oluşturuyoruz.
let tahmin_sayı =Math.trunc(Math.random()*100);

//check buttonunun eventlerini oluşturuyoruz.
check.addEventListener("click",()=>{
    if(inputNumber.value == ""){
        alert("TAHMİNDEN KAÇAMAZSINIZ LÜTFEN..!! :) ");
        window.location.reload(false);
    }
//Koşullar ile  değişiklikleri gerçekleştiriyoruz.
    if(inputNumber.value < tahmin_sayı){
        alert("↑↑ ARTTIRINIZ ↑↑");
        sayaç.textContent --;
        ilk_sayı.textContent = inputNumber.value;
        inputNumber.value ="";
    if(sayaç.textContent == 0){
        mesaj.innerText = "KAYBETTİNİZ. :(";
        mesaj.style.color = "#8A39E1";
        resim.setAttribute("src","./img/kaybeden.jpg");
    } 

    }else if (inputNumber.value > tahmin_sayı){
        alert("↓↓ AZALTINIZ ↓↓");
        sayaç.textContent --;
        son_sayı.textContent = inputNumber.value;
        inputNumber.value ="";
        if(sayaç.textContent == 0){
            mesaj.innerText = "KAYBETTİNİZ. :(";
            mesaj.style.color ="#F76E11";
        }
    }else if (inputNumber.value == tahmin_sayı){
        mesaj.innerText = "TEBRİKLER KAZANDINIZ..!!";
        mesaj.style.color ="#F1D00A";
        mesaj.style.fontWeight = "800";
        resim.setAttribute("src","./img/kazanan.jpg");
        
    }
});
//reset buttonun eventini oluşturuyoruz. 
//window.location.reload sayfanın yenilenmesini sağlar.
reset.addEventListener("click",() =>{
    window.location.reload(false);
});

