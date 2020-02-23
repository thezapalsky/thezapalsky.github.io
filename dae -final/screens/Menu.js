function Menu() {

    this.getMenu = function () {
        for (var i = 0; i < 6; i++) {
            var cam = document.createElement("div");
            cam.style.width = "100px";
            cam.style.height = "100px";
            cam.style.border = "1px solid black";
            cam.style.display = "inline-block";
            cam.style.position = "absolute";
            cam.style.top = "0px";
            cam.style.left = (i+1)*100+"px";
            cam.style.backgroundColor = "pink";
            cam.id = i+1;
            cam.addEventListener("click", function (e) {
                main.camClick(e);
            });
            document.body.appendChild(cam);
        }
    }

}

