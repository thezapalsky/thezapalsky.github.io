function Cloud() {

    var map = THREE.ImageUtils.loadTexture("gfx/chmura3.png", {}, function () {
        //funkcja wykonywana po za�adowaniu tekstury
        //je�li jest du�o materia��w mo�na ja wykorzysta�
        //do monitorowania post�pu ich �adowania            
    })
    var spriteMat = new THREE.SpriteMaterial({ map: map, color: 0xffffff });
    var sprite = new THREE.Sprite(spriteMat);
    sprite.position.z = 300;
    sprite.scale.set(100, 300, 100);

    this.getCloud = function () {
        return sprite;
    }
}

