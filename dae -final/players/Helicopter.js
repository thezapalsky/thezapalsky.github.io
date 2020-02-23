function Helicopter() {

    var geometry1 = new THREE.BoxGeometry(50, 50, 50);
    var geometry2 = new THREE.BoxGeometry(150, 20, 10);
    var geometry3 = new THREE.BoxGeometry(10, 30, 10);
    var geometry4 = new THREE.BoxGeometry(200, 10, 10);
    var geometry5 = new THREE.BoxGeometry(10, 50, 10);

    var heli = new THREE.Object3D();
    var cube1 = new THREE.Mesh(geometry1, Materials.heli);
    var cube2 = new THREE.Mesh(geometry2, Materials.heli);
    var cube3 = new THREE.Mesh(geometry3, Materials.heli);
    var cube4 = new THREE.Mesh(geometry4, Materials.smiglo);
    var cube5 = new THREE.Mesh(geometry5, Materials.smiglo);

    cube2.position.x = 50;
    cube3.position.x = 120;
    cube3.position.y = 20;
    cube4.position.y = 30;
    cube5.position.x = 120;
    cube5.position.z = 10;
    cube5.position.y = 30;

    heli.add(cube1);
    heli.add(cube2);
    heli.add(cube3);
    heli.add(cube4);
    heli.add(cube5);

    this.getHeli = function () {
        return heli;
    }

    this.update = function() {
        cube4.rotation.y += 0.15;
        cube5.rotation.z += 0.2;
        heli.rotation.y += 0.01;
    }
}

