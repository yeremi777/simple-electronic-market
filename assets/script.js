let smartphone = [
    "assets/img/phone/iphone_6S.jpg",
    "assets/img/phone/iphone_12.jpg",
    "assets/img/phone/iphone_XS_MAX.jpg",
    "assets/img/phone/oppo_A31.jpg",
    "assets/img/phone/oppo_A53.jpg",
    "assets/img/phone/oppo_Reno.jpg",
    "assets/img/phone/samsung_galaxy_a20s.jpg",
    "assets/img/phone/samsung_galaxy_a70.jpg",
    "assets/img/phone/samsung_galaxy_S20_FE.jpg",
    "assets/img/phone/samsung_galaxy_s20.jpg",
    "assets/img/phone/samsung_galaxy_s20plus.jpg",
    "assets/img/phone/samsung_galaxy_zflip.jpg"
];

let laptop = [
    "assets/img/laptop/ASUS_ExpertBook_B9450.jpg",
    "assets/img/laptop/ASUS_ROG_GX700.jpg",
    "assets/img/laptop/ASUS_ROG_Zephyrus_Duo_15.jpg",
    "assets/img/laptop/ASUS_VivoBook_14_K413.jpg",
    "assets/img/laptop/ASUS_Zenbook_S13_UX392FN_L_1.jpg",
    "assets/img/laptop/Dell_Alienware_17.jpg",
    "assets/img/laptop/Dell_Inspiron_14-N4050.jpg",
    "assets/img/laptop/HP_EliteBook_8440p.jpg",
    "assets/img/laptop/HP_OMEN_17-an002tx.jpg",
    "assets/img/laptop/HP_Pavilion_Gaming_15_ec0001ax.jpg",
    "assets/img/laptop/TOSHIBA_Portege_Z30-A104.jpg",
    "assets/img/laptop/TOSHIBA_Satellite_C800-1024.jpg"
];

let voucher = [
    "assets/img/voucher/free_fire.jpg",
    "assets/img/voucher/mobile_legend.jpg",
    "assets/img/voucher/pubg.jpg",
    "assets/img/voucher/telkomsel.jpg",
    "assets/img/voucher/xl.jpg"
];

function smartphoneList() {
    for (let i = 0; i < smartphone.length; i++) {
        let img = new Image(250, 250);
        img.src = smartphone[i];

        let src = document.getElementById("elementId");
        src.appendChild(img);

        let example = document.getElementById("example");
        example.innerText = "Example of Smartphone"

        document.getElementById("disappear").innerHTML = "";
    }
}

function laptopList() {
    for (let i = 0; i < laptop.length; i++) {
        let img = new Image(250, 250);
        img.src = laptop[i];

        let src = document.getElementById("elementId");
        src.appendChild(img);

        let example = document.getElementById("example");
        example.innerText = "Example of Laptop"

        document.getElementById("disappear").innerHTML = "";
    }
}

function voucherList() {
    for (let i = 0; i < voucher.length; i++) {
        let img = new Image(250, 250);
        img.src = voucher[i];

        let src = document.getElementById("elementId");
        src.appendChild(img);

        let example = document.getElementById("example");
        example.innerText = "Example of Voucher"

        document.getElementById("disappear").innerHTML = "";
    }
}