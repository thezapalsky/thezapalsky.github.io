function Slider() {


    this.getSlide = function(){
        var kierunek = 0;
        var min = -100;
        var max = 100;
        var w_szer;
        var move = false;

        var dol = document.createElement("div");
        dol.style.height = "50px";
        dol.style.width = "80%";
        dol.style.position = "relative";
        dol.style.bottom = "80px";
        dol.style.backgroundColor = "red";
        dol.style.margin = "0 auto";
        document.body.appendChild(dol);

        var left = document.createElement("div");
        left.style.height = "80%";
        left.style.width = "50px";
        left.style.position = "absolute";
        left.style.left = "0px";
        left.style.top = "0px";
        left.style.backgroundColor = "red";
        document.body.appendChild(left);

        var right = document.createElement("div");
        right.style.height = "80%";
        right.style.width = "50px";
        right.style.position = "absolute";
        right.style.right = "0px";
        right.style.top = "0px";
        right.style.backgroundColor = "red";
        document.body.appendChild(right);

        var dol_in = document.createElement("div");
        dol_in.style.height = "50px";
        dol_in.style.width = "50px";
        dol_in.style.position = "absolute";
        dol_in.style.backgroundColor = "blue";
        dol_in.style.margin = "0 auto";
        dol_in.className = "in";
        dol_in.id = "dol";
        dol.appendChild(dol_in);

        var left_in = document.createElement("div");
        left_in.style.height = "50px";
        left_in.style.width = "50px";
        left_in.style.position = "relative";
        left_in.style.backgroundColor = "blue";
        left_in.style.top = "45%"
        left_in.className = "in";
        left.appendChild(left_in);

        var right_in = document.createElement("div");
        right_in.style.height = "50px";
        right_in.style.width = "50px";
        right_in.style.position = "relative";
        right_in.style.backgroundColor = "blue";
        right_in.style.top = "45%";
        right_in.className = "in";
        right.appendChild(right_in);

        $(".in").mousedown(function () {
            move = true;
        });

        $(".in").mouseup(function () {
            move = false;
        });

        $(".in").mouseout(function () {
            move = false;
        });

        $(".in").mousemove(function (e) {
            if (move) {

                if (this.id == "dol") {
                    this.style.left = (e.clientX-120) + "px";
                }
                else {
                    //console.log(this);
                    this.style.top = (e.clientY-15) + "px";
                }
                }
        });
        
    }
}
