

function dropdown(object) {
    document.getElementById("dropdownmenu").classList.toggle("dropshown");
}



/*
function getPinStatus(pin) {
    
    
    function handle() {
        if(this.status = 200) {
            document.querySelector(tr_id).innerHTML = this.responseText;
        return(this.responseText)
        }
        else
        {
            console.log("XMLHttpRequest returned error: " + this.status);
        }
    }
    
    
    
    
    
    
    var req = new XMLHttpRequest ();
    req.onload = handle;
    req.open("GET",  "/table/getpin.php?pin=" + pin, true);
    req.send(null);
    return 0;
}


function updateStatus(index) {
    getPinStatus(index);
    tr_id = ".status" + index;
    console.log(tr_id);

}

function update() {
    updateStatus(1);
    updateStatus(2);
    updateStatus(3);
    updateStatus(4);
    updateStatus(5);
    //updateStatus(6);
}



//var loop = setInterval(update, 1000);
var loop0 = setInterval(updateStatus(1), 400);
var loop1 = setInterval(updateStatus(2), 400);
var loop2 = setInterval(updateStatus(3), 400);
var loop3 = setInterval(updateStatus(4), 400);
//var loop4 = setInterval(updateStatus(5), 400);



*/

function updateFrames() {
    document.getElementById("status1").src = "/table/getpin.php?pin=0";
    document.getElementById("status2").src = "/table/getpin.php?pin=1";
    document.getElementById("status3").src = "/table/getpin.php?pin=2";
    document.getElementById("status4").src = "/table/getpin.php?pin=3";
    document.getElementById("status5").src = "/table/getpin.php?pin=4";
}

var loop0 = setInterval(updateFrames, 400);




function setPin(mode, pin, value) {
    var url = "/table/set_pin.php?mode=" + mode + "&pin=" + pin + "&value=" + value;
    var setreq = new XMLHttpRequest();
    setreq.onload = updateFrames();
    setreq.open("GET", url, false);
    setreq.send(null);
    console.log(url);
    return 0;
}

function switchClick() {
    var sw1 = Number(document.getElementById("switch1").checked);
    var sw2 = Number(document.getElementById("switch2").checked);
    var sw3 = Number(document.getElementById("switch3").checked);
    var sw4 = Number(document.getElementById("switch4").checked);
    var sw5 = Number(document.getElementById("switch5").checked);
    
    setPin("out", "0", sw1);
    setPin("out", "1", sw2);
    setPin("out", "2", sw3);
    setPin("out", "3", sw4);
    setPin("out", "4", sw5);
    
    return 0;
}
























