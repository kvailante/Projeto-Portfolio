let count = 1;
document.getElementById("radio01").checked = true;

setInterval(function() {
    nextimage();
}, 5000)

function nextimage(){
    count++;
    if (count > 5) {
        count = 1;
    }

    document.getElementById("radio0" + count).checked = true;
}