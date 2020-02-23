function Cloud() {

    var map = THREE.ImageUtils.loadTexture("gfx/chmura3.png", {}, function () {
        //funkcja wykonywana po za³adowaniu tekstury
        //jeœli jest du¿o materia³ów mo¿na ja wykorzystaæ
        //do monitorowania postêpu ich ³adowania            
    })
    var spriteMat = new THREE.SpriteMaterial({ map: map, color: 0xffffff });
    var sprite = new THREE.Sprite(spriteMat);
    sprite.position.z = 300;
    sprite.scale.set(100, 300, 100);

    this.getCloud = function () {
        return sprite;
    }
}

