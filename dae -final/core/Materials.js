function Materials() {
    //tutaj ma byæ pusto
}

Materials.heli = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
Materials.smiglo = new THREE.MeshBasicMaterial({ color: 0xff0000 });

var skybox_tab = [];
skybox_tab.push(new THREE.MeshBasicMaterial({side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('gfx/skybox/1.jpg') }));
skybox_tab.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('gfx/skybox/2.jpg') }));
skybox_tab.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('gfx/skybox/3.jpg') }));
skybox_tab.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('gfx/skybox/4.jpg') }));
skybox_tab.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('gfx/skybox/5.jpg') }));
skybox_tab.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('gfx/skybox/6.jpg') }));

Materials.skybox = new THREE.MeshFaceMaterial(skybox_tab);
Materials.floor = new THREE.MeshBasicMaterial({ color: 0xffff00 });

Materials.helis = ["heli1", "heli2"];

