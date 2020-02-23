function MyLight(kolor) {

    //zmienne, np: materia³ i geometria sfery
    var geometry = new THREE.SphereGeometry(5, 32, 32);
    var material = new THREE.MeshBasicMaterial({ color: kolor });
    


    // kontener
    var container = new THREE.Object3D();
    
    // init
    function init() {

        // tu utwórz œwiat³o, sferê oraz helper
        // i dodaj je do powy¿szego kontenera

        var spotLight = new THREE.SpotLight(kolor, 7);
        //spotLight.position.set(10, 10, 10);
        container.add(spotLight);

        var sphere = new THREE.Mesh(geometry, material);
        container.add(sphere);

        var sHelper = new THREE.SpotLightHelper(spotLight);
        container.add(sHelper);


    }

    init();

    // funkcja publiczna zwracaj¹ca obiekt kontenera
    // czyli nasze œwiat³o

    this.getLight = function () {
        return container;

    }

    // inne funkcje publiczne potrzebne do manipulacji œwiat³em

}