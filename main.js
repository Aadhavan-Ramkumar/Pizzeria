var MenuList;
MenuList = ["Chicken Tandoori Pizza", "Veg Supreme Pizza", "Paneer Tikka Pizza", "Deluxe Veggie Pizza", "Veg Extravaganza Pizza"];

function getmenu() {
    var htmldata;
    htmldata = "<ol class>='menulist'>";
    MenuList.sort();
    for (var i = 0; i < MenuList.length; i++) {
        htmldata = htmldata = '<li>' + MenuList[i] + '</li>';
    }
    htmldata = htmldata + "</ol>";
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item() {
    var htmldata;
    var item = document.getElementById("add_item").value;
    MenuList.push(item);
    MenuList.sort();
    htmldata = "<section class='cards'>";
    for (var i = 0; i < MenuList.length; i++) {
        htmldata = htmldata + '<div class="card">' + '<img src="Pizza.png">' + MenuList[i] + '</div>'
    }
    htmldata = htmldata + "</section>";
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}