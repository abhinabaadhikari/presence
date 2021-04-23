function navbar() {
    if (document.getElementById("nav2").style.height === "150px") {
        document.getElementById("nav2").style.height = "0px";
    } else {
        document.getElementById("nav2").style.height = "150px";
    }
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function datentime() {
    var dt = new Date();
    var h = checkTime(dt.getHours());
    var m = checkTime(dt.getMinutes());
    var s = checkTime(dt.getSeconds());
    document.getElementById("date").innerHTML = dt.toDateString(dt);
    document.getElementById("time").innerHTML = h + " : " + m + " : " + s;
    var t = setTimeout(datentime, 1000);
}

function dtop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}