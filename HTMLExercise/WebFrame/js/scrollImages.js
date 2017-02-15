var i = 1;
function autoChangeImage(i) {
    setTimeout("changeImage(i++);", 1500);
    setTimeout("back(i);", 1000);
    setTimeout("autoChangeImage(i=(i%6));", 1500);
}

function changeImage(idNum) {
    // document.getelementsById 根据id获取控件
    document.getElementsById("radio" + idNum).checked = "checked";
    // switch (idNum){
    //     case 0:
    document.getElementsById("scrollImage").style.backgroundImage = "url(images/scroll_" + idNum + ".jpg)";
    // }
}
