export function initThreeScene() {
  const canvas = document.querySelector("[data-three-scene]");
  if (!canvas || typeof THREE === "undefined") return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  const nodes = [];
  const lines = [];

  camera.position.z = 48;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x5be7ff, transparent: true, opacity: 0.74 });
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x7bdcff, transparent: true, opacity: 0.16 });
  const geometry = new THREE.SphereGeometry(0.16, 12, 12);

  for (let i = 0; i < 70; i += 1) {
    const mesh = new THREE.Mesh(geometry, nodeMaterial);
    mesh.position.set((Math.random() - 0.5) * 70, (Math.random() - 0.5) * 40, (Math.random() - 0.5) * 26);
    mesh.userData.velocity = new THREE.Vector3((Math.random() - 0.5) * 0.018, (Math.random() - 0.5) * 0.018, (Math.random() - 0.5) * 0.018);
    nodes.push(mesh);
    scene.add(mesh);
  }

  for (let i = 0; i < nodes.length - 1; i += 2) {
    const points = [nodes[i].position, nodes[i + 1].position];
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), lineMaterial);
    lines.push({ line, a: nodes[i], b: nodes[i + 1] });
    scene.add(line);
  }

  const resize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  const animate = () => {
    nodes.forEach((node) => {
      node.position.add(node.userData.velocity);
      if (Math.abs(node.position.x) > 38) node.userData.velocity.x *= -1;
      if (Math.abs(node.position.y) > 22) node.userData.velocity.y *= -1;
      if (Math.abs(node.position.z) > 16) node.userData.velocity.z *= -1;
    });

    lines.forEach(({ line, a, b }) => {
      line.geometry.setFromPoints([a.position, b.position]);
    });

    scene.rotation.y += 0.0009;
    scene.rotation.x += 0.00035;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  window.addEventListener("resize", resize);
  animate();
}
