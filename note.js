var getId = function (id) {
    return document.getElementById(id);
}
var grabCheck = function () {
    var grabType = "";
    var i;
    var eleName = document.getElementsByName('selector');
    for (i = 0; i < eleName.length; i++) {
        if (eleName[i].checked) {
            grabType = eleName[i].value;
        }
    }
    if (grabType === "") {
        alert("Please select type of Car!!");
    }
    return grabType;
}
var tinhTien = function () {
    grabCheck();
    var soKM = document.getElementById("soKM").value;
    var waitTime = document.getElementById("waitTime").value;
    var tienTime;
    document.getElementById("divThanhTien").style.display = "block";

    function tienDi(x,y) {
        tienTime = 0;
        for (var t = 3; t <= waitTime; t = t + 3) {
            tienTime = tienTime + y;
        }
        var tienKM = x;
        if (soKM > 0 && soKM <= 1) {
            tienKM = x;
        } else if (soKM > 1 && soKM <= 19) {
            for (var i = 1; i < soKM; i++) {
                tienKM = tienKM + (x - 500);
            }
        } else if (soKM > 19) {
            tienKM = x + (x - 1000) * 18;
            for (i = 1; i < soKM; i++) {
                tienKM = tienKM + (x - 1000);
            }
        } else {
            tienKM = 0;
        }
        return [
            tienKM + tienTime
        ];
    }
    switch (grabCheck()) {
        case "grabCar":
            var tienTong = tienDi(8000,2000);
            break;
        case "grabSUV":
            tienTong = tienDi(9000,3000);
            break;
        case "grabBlack":
            tienTong = tienDi(10000,3500);
            break;
    }
    console.log(tienDi(x,0));
    document.getElementById("xuatTien").innerHTML = tienTong;

    return [
        soKM, waitTime, tienTong, tienTime
    ];

}

var inHD = function () {
    var values = tinhTien();
    getId("km-1").innerHTML = values[0]; 
    getId("tgcho").innerHTML = values[1];
    getId("tientong").innerHTML = values[2];
    getId("tiengio").innerHTML = values[3];
}