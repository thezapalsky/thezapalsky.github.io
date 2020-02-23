function Building() {

    var loader = new THREE.ColladaLoader();
    var model;

    var home = new THREE.Object3D();
    var floor_geometry = new THREE.BoxGeometry(500, 1, 500);
    var floor = new THREE.Mesh(floor_geometry, Materials.floor);
    floor.position.z = -420;
    home.add(floor);

    this.getHome = function () {
        return home;
    }

    this.loadModel = function(name){

        loader.load(
          
          name,
          // gdy za³adowany
          function (collada) {
              
              model = collada.scene;
              //model.material = new THREE.TextureLoader().load(texture);
              // dostêp do meshów wewn¹trz modelu
              // u¿ywamy gdy chcemy zrobiæ coœ z elementami modelu
              // np podstawiæ materia³
              
              model.traverse(function (child) {
                  //child.material = new THREE.TextureLoader().load(texture);
                  if (child instanceof THREE.Mesh) {
                      child.material = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture("models/building/house.jpg") });

                      console.log("mesh " + child.name);                      
                  }

              });

              home.add(model);

              //poprawki skali, po³o¿enia, obrotu
              model.scale.set(60,60,60);
              model.rotation.x = - 1.6
              model.position.set(0,10,-420)


          },
          // gdy model jest pobierany z serwera
	  //jest mo¿liwe monitorowanie stanu jego pobierania
	  //i wykonanie jakiejœ czynnoœci dopiero po za³adowaniu

          function (e) {
              console.log("model " + e.loaded +"-"+e.total)
          }
      );

    }

}

