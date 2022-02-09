MenuList = ["Chicken Tandoori Pizza",
    "Veg Supreme Pizza",
    "Paneer Tikka Pizza",
    "Deluxe Veggie Pizza",
    "Veg Extravaganza Pizza"
];

function GetMenu() {
    let HTMLData = "<ol class='MenuList'>";
    MenuList.sort();
    for (var i = 0; i < MenuList.length; i++) {
        HTMLData += '<li>' + MenuList[i] + '</li>';
    }
    HTMLData += "</ol>";
    document.getElementById("DisplayMenu").innerHTML = HTMLData;
}

function AddItem() {
    let HTMLData;
    let Item = document.getElementById("AddItem").value;
    MenuList.push(Item);
    MenuList.sort();
    HTMLData = "<section class='Cards'>"
    for (var i = 0; i < MenuList.length; i++) {
        HTMLData += '<div class="Card">' + '<img src="Pizza 2.png">' + MenuList[i] + '</div>';
    }
    HTMLData += "</section>";
    document.getElementById("DisplayAddedMenu").innerHTML = HTMLData;
}