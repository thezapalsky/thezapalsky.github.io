function Skybox() {

    var geometry = new THREE.BoxGeometry(1500, 1500, 1500);

    var sbox = new THREE.Object3D();
    var skybox = new THREE.Mesh(geometry, Materials.skybox);

    sbox.add(skybox);

    this.getBox = function () {
        return sbox;
    }

}

