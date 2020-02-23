/// <reference path="three.js" />



function Main() {

    var startScreen = new Start();
    var menu = new Menu();
    var startBt = new Button();
    var slider = new Slider();
    document.body.appendChild(startScreen.getScreen());
    document.getElementById("screen").appendChild(startBt.getBt());
    document.getElementById("screen").appendChild(startBt.getBt2());


    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);

    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xabcdef);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    var axisHelper = new THREE.AxisHelper(5000);
    scene.add(axisHelper);
    
    camera.position.x = 400;
    camera.position.y = 400;
    camera.position.z = 400;
    camera.lookAt(scene.position);
    var startScreen = new Start();
    var heli = new Helicopter();
    var boxxy = new Skybox();
    var home = new Building();
    var cloud = new Cloud();
    var heli2 = new Helicopter2();
    
    this.h1 = function () {
        scene.add(heli.getHeli());

    }
    this.h2 = function () {
        heli2.ladujGo();
        scene.add(heli2.getHeli2());
        menu.getMenu();
        slider.getSlide();

    }
    scene.add(boxxy.getBox());
    home.loadModel("models/building/house.xml");
    scene.add(home.getHome());
    scene.add(cloud.getCloud());
    
    /////////////////////////////// kamera /////////////////////////////////////
    left = false;
    right = false;
    up = false;
    down = false;
    a = false;
    z = false;
    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("keyup", onKeyUp);

    function onKeyDown(e) {
        if (e.which == 40 && down == false) {
            down = true;
        }
        if (e.which == 38 && up == false) {
            up = true;
        }
        if (e.which == 37 && left == false) {
            left = true;
        }
        if (e.which == 39 && right == false) {
            right = true;
        }
        if (e.which == 65 && a == false) {
            a = true;
        }
        if (e.which == 90 && z == false) {
            z = true;
        }

    }

    function onKeyUp(e) {
        if (e.which == 40 && down == true) {
            down = false;
        }
        if (e.which == 38 && up == true) {
            up = false;
        }
        if (e.which == 37 && left == true) {
            left = false;
        }
        if (e.which == 39 && right == true) {
            right = false;
        }
        if (e.which == 65 && a == true) {
            a = false;
        }
        if (e.which == 90 && z == true) {
            z = false;
        }
    }
    ////////////////////////////////////////////////////////////////////////



    function animateScene() {
        requestAnimationFrame(animateScene);
        renderer.render(scene, camera);
        heli.update();
        heli2.update();

        if (down == true) {
            camera.position.y = camera.position.y - 5;
            camera.lookAt(scene.position);
        }
        if (up == true) {
            camera.position.y = camera.position.y + 5;
            camera.lookAt(scene.position);
        }
        if (left == true) {
            var z = camera.position.z;
            var x = camera.position.x;
            var theta = -Math.PI / 45;
            camera.position.z = (z * Math.cos(theta)) - (x * Math.sin(theta));
            camera.position.x = (z * Math.sin(theta)) + (x * Math.cos(theta));
            camera.lookAt(scene.position);
        }
        if (right == true) {
            var z = camera.position.z;
            var x = camera.position.x;
            var theta = Math.PI / 45;
            camera.position.z = (z * Math.cos(theta)) - (x * Math.sin(theta));
            camera.position.x = (z * Math.sin(theta)) + (x * Math.cos(theta));
            camera.lookAt(scene.position);
        }
        //camera.lookAt(scene.position);
        //console.log(camera.position);
    }
    animateScene();

    this.camClick = function(e) {
        //console.log(e.target.id)

        switch (e.target.id) {
            case "1":
                //console.log("1");
                camera.position.x = 250;
                camera.position.y = 25;
                camera.position.z = 170;
                camera.lookAt(heli2);
                camera.lookAt(scene.position);
                break;

            case "2":
                camera.position.x = -474;
                camera.position.y = 15;
                camera.position.z = -308;
                camera.lookAt(heli2);
                camera.lookAt(scene.position);
                break;
            case "3":
                camera.position.x = -17;
                camera.position.y = -400;
                camera.position.z = -10;
                camera.lookAt(heli2);
                camera.lookAt(scene.position);
                break;
            case "4":
                camera.position.x = -17;
                camera.position.y = 500;
                camera.position.z = -10;
                camera.lookAt(heli2);
                camera.lookAt(scene.position);
                break;
            case "5":
                camera.position.x = -290;
                camera.position.y = 15;
                camera.position.z = 483;
                camera.lookAt(heli2);
                camera.lookAt(scene.position);
                break;
            case "6":
                ///////error/////
                camera.position.set(90,25,50)
                camera.lookAt(scene.position);
                camera.lookAt(new THREE.Vector3(900, -10, 650));
                //camera.lookAt()
                break;
        }
    }



}