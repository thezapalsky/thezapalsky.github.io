function Button() {
    var bt = document.createElement("div");
    bt.style.width = "320px";
    bt.style.height = "180px";
    bt.style.backgroundColor = "red";
    bt.style.backgroundImage = "url(gfx/heli1.png)";
    bt.style.backgroundSize = "320px 180px"
    bt.id = "bt1";

    this.getBt = function () {
        return bt;
    }
    var bt2 = document.createElement("div");
    bt2.style.width = "320px";
    bt2.style.height = "180px";
    bt2.style.backgroundColor = "red";
    bt2.style.backgroundImage = "url(gfx/heli2.png)";
    bt2.style.backgroundSize = "320px 180px";
    bt2.id = "bt2";

    this.getBt2 = function () {
        return bt2;
    }
}
