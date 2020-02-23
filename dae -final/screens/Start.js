function Start() {
    var screen = document.createElement("div");
    screen.style.width=window.innerWidth+"px";
    screen.style.height = window.innerHeight+"px";
    screen.style.backgroundColor = "#000000";
    screen.id = "screen";

    this.getScreen = function () {
        return screen;
    }

    $("#bt1").click(function () {
        //alert("laduje heli1");
        main.h1();
        $("#screen").hide();
    });

    $("#bt2").click(function () {
        //alert("laduje heli2");
        main.h2();
        $("#screen").hide();
    });
}
