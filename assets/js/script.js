// change image after selection
function jsDropDown(imgid, newimg) {
    document.getElementById(imgid).src = "assets/images/ir/daf46/" + newimg;
}
// touch response for collapsable submenu
function showNoShow(inputtext) {
    const mainList = ["ch-01","ch-02"];
    const altList = ["ch-11","ch-12","ch-13","ch-14"];
    var classList = mainList;
    if (inputtext === "main") {
        console.log('main page')
    } else {
        classList = altList;
        console.log('seed page')
    }

    let elementOne = classList[0];
    vis = document.getElementById(elementOne).style.visibility;
    for (let i = 0; i < classList.length; i++) {
        let element = classList[i];
        if (vis === "hidden" || vis === "") {
            document.getElementById(element).style.display = "block";
            document.getElementById(element).style.visibility = "visible";
            document.getElementById(element).style.opacity = "1";
            document.getElementById("actual").style.backgroundColor = "#016401";
            document.getElementById("actual-up").style.display = "inline-block";
            document.getElementById("actual-down").style.display = "none";
        } else {
            document.getElementById(element).style.display = "none";
            document.getElementById(element).style.visibility = "hidden";
            document.getElementById(element).style.opacity = "0";
            document.getElementById("actual").style.backgroundColor = "#9ACD32";
            document.getElementById("actual-up").style.display = "none";
            document.getElementById("actual-down").style.display = "inline-block";
        }
    };
}