function Helicopter2() {

   // rear_rotor

    var loader = new THREE.ColladaLoader();
    var innerCont, wirnik;

    var heli2 = new THREE.Object3D();

    this.getHeli2 = function () {
        return heli2;
    }

    this.update = function () {
        if(wirnik)
            wirnik.rotation.z += 0.1;
    }

    this.ladujGo = function () {
        var loader = new THREE.ColladaLoader();

        loader.load( "models/heli2/heli2.xml",
            function (collada) {
                innerCont = collada.scene;
                
                innerCont.traverse(function (child) {
                    //child.material = new THREE.TextureLoader().load(texture);
                    if (child instanceof THREE.Mesh) {
                        child.material = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture("models/heli2/tex/fuselage.jpg") });

                        console.log("mesh " + child.name);
                    }

                });

                wirnik = innerCont.getObjectByName("main_rotor", true)     // o tym mowa w punkcie  2         
                heli2.add(innerCont);
                //wyskaluj model
                innerCont.scale.set(40, 40, 40);
                innerCont.rotation.y = 1
                
            },
            // progress ładowania
            function (e) {
                //można pokazać model dopiero jak się załaduje
                //ale obliczenia działajš poprawnie 
                //tylko podczas ładowania przez serwer a najlepiej
                //nie z localhosta

                console.log( e.loaded)
                console.log( e.total) 
                    

            }
        );
		
    }

}

