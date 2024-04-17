


function checkDate() {
    var birthDate = document.getElementById('BirthDate');
    birthDate.value = '2022-01-01';
}

function Do() {
    var number = document.getElementById('NationalID').value;
    if (number.length == 14) {
        var birthDate = document.getElementById('BirthDate');
        var year = number.substring(1, 3);
        var month = number.substring(3, 5);
        var day = number.substring(5,7);       
        if (parseInt(year) > 21)year = "19" + year;        
        else year = "20" + year;        
        birthDate.value = year + "-" + month + "-" + day;
    }
}


// checkDate();


const locations = {
    "01": "القاهرة","02": "الإسكندرية","03": "بورسعيد",
    "04": "السويس",
    "11": "دمياط",
    "12": "الدقهلية",
    "13": "الشرقية",
    "14": "القليوبية",
    "15": "كفر الشيخ",
    "16": "الغربية",
    "17": "المنوفية",
    "18": "البحيرة",
    "19": "الإسماعيلية",
    "21": "الجيزة",
    "22": "بني سويف",
    "23": "الفيوم",
    "24": "المنيا",
    "25": "أسيوط",
    "26": "سوهاج",
    "27": "قنا",
    "28": "أسوان",
    "29": "الأقصر",
    "31": "البحر الأحمر",
    "32": "الوادي الجديد",
    "33": "مطروح",
    "34": "شمال سيناء",
    "35": "جنوب سيناء",
    "88": "خارج جمهورية مصر العربية"
};

console.log(locations["01"]);