/* Campus3DPage — procedural Three.js Stalinist building */

const FLOORS = [
  { n: 1, label: 'Перший поверх',   rooms: [
    { id: 'А-1',   name: 'Велика лекційна', meta: '300 місць · Лекційна · 1958' },
    { id: 'Хол-Ц', name: 'Центральний хол', meta: 'Парадний вхід, мармур' },
    { id: 'А-12',  name: 'Аудиторія А-12',  meta: '80 місць · Загальна' },
  ]},
  { n: 2, label: 'Другий поверх',   rooms: [
    { id: 'Б-201', name: 'Кафедра гірництва',  meta: 'Адміністрація · Деканат' },
    { id: 'Б-204', name: 'Лабораторія опору',  meta: 'Лабораторія матеріалів' },
  ]},
  { n: 3, label: 'Третій поверх',   rooms: [
    { id: 'В-301', name: 'Кафедра металургії', meta: 'Лекційна + лабораторія' },
    { id: 'В-302', name: 'Аудиторія В-302',    meta: '120 місць · Енергетика' },
  ]},
  { n: 4, label: 'Четвертий поверх', rooms: [
    { id: 'Г-401', name: 'Креслярська',        meta: 'Архітектура · 40 столів' },
    { id: 'Г-405', name: 'Бібліотека-філіал',  meta: 'Технічна література' },
  ]},
  { n: 5, label: 'П\'ятий поверх',  rooms: [
    { id: 'Д-501', name: 'Кафедра автоматики', meta: 'Лабораторія + аудиторії' },
  ]},
  { n: 6, label: 'Шостий поверх',   rooms: [
    { id: 'Е-601', name: 'Конференц-зала',     meta: 'Купольний зал, башта' },
  ]},
];

const FloorPlan = ({ floor }) => {
  // simple stylized SVG floor plan (U-shape)
  return (
    <svg viewBox="0 0 400 280" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5">
      <rect x="30" y="40" width="340" height="60" fill="rgba(212,165,116,0.04)" />
      <rect x="30" y="100" width="80" height="160" fill="rgba(212,165,116,0.04)" />
      <rect x="290" y="100" width="80" height="160" fill="rgba(212,165,116,0.04)" />
      {/* corridor */}
      <line x1="30" y1="70" x2="370" y2="70" />
      <line x1="70" y1="100" x2="70" y2="260" />
      <line x1="330" y1="100" x2="330" y2="260" />
      {/* room dividers */}
      <line x1="120" y1="40" x2="120" y2="100" />
      <line x1="200" y1="40" x2="200" y2="100" />
      <line x1="280" y1="40" x2="280" y2="100" />
      <line x1="30" y1="160" x2="110" y2="160" />
      <line x1="30" y1="220" x2="110" y2="220" />
      <line x1="290" y1="160" x2="370" y2="160" />
      <line x1="290" y1="220" x2="370" y2="220" />
      <text x="200" y="20" textAnchor="middle" fill="rgba(212,165,116,0.7)" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2">ПОВЕРХ {floor}</text>
      <text x="200" y="275" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontFamily="JetBrains Mono, monospace" fontSize="8">вул. Артема 58 · план</text>
    </svg>
  );
};

const Campus3DPage = () => {
  const mountRef = React.useRef(null);
  const [floor, setFloor] = React.useState(1);

  React.useEffect(() => {
    if (!window.THREE) return;
    const THREE = window.THREE;
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || 800;
    const height = mount.clientHeight || 640;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0c);
    scene.fog = new THREE.Fog(0x0a0a0c, 80, 220);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 500);
    camera.position.set(70, 45, 90);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    mount.appendChild(renderer.domElement);

    // Lights
    scene.add(new THREE.AmbientLight(0xfff2dd, 0.45));
    const sun = new THREE.DirectionalLight(0xffe8c8, 1.1);
    sun.position.set(60, 90, 40);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -80;
    sun.shadow.camera.right = 80;
    sun.shadow.camera.top = 80;
    sun.shadow.camera.bottom = -80;
    scene.add(sun);
    const fill = new THREE.DirectionalLight(0x6688aa, 0.3);
    fill.position.set(-40, 30, -30);
    scene.add(fill);

    // Ground
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(400, 400),
      new THREE.MeshStandardMaterial({ color: 0x14140f, roughness: 1 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 0;
    ground.receiveShadow = true;
    scene.add(ground);

    // Material
    const stoneMat = new THREE.MeshStandardMaterial({ color: 0xd8d2c4, roughness: 0.85 });
    const roofMat  = new THREE.MeshStandardMaterial({ color: 0x4a3a2e, roughness: 0.9 });
    const windowMat = new THREE.MeshStandardMaterial({ color: 0x1c1f26, roughness: 0.3, metalness: 0.3, emissive: 0x141820, emissiveIntensity: 0.4 });

    // Building group
    const building = new THREE.Group();

    // Central block: 40w x 24h x 16d
    const centralW = 36, centralH = 24, centralD = 14;
    const central = new THREE.Mesh(
      new THREE.BoxGeometry(centralW, centralH, centralD),
      stoneMat
    );
    central.position.set(0, centralH/2, 0);
    central.castShadow = true; central.receiveShadow = true;
    building.add(central);

    // Roof slab
    const cRoof = new THREE.Mesh(new THREE.BoxGeometry(centralW + 1.5, 1.2, centralD + 1.5), roofMat);
    cRoof.position.set(0, centralH + 0.6, 0);
    cRoof.castShadow = true;
    building.add(cRoof);

    // Tower (above central, smaller)
    const tower = new THREE.Mesh(new THREE.BoxGeometry(10, 14, 10), stoneMat);
    tower.position.set(0, centralH + 7, 0);
    tower.castShadow = true; tower.receiveShadow = true;
    building.add(tower);
    const towerRoof = new THREE.Mesh(new THREE.ConeGeometry(7.5, 8, 4), roofMat);
    towerRoof.position.set(0, centralH + 18, 0);
    towerRoof.rotation.y = Math.PI/4;
    towerRoof.castShadow = true;
    building.add(towerRoof);
    // spire
    const spire = new THREE.Mesh(new THREE.ConeGeometry(0.4, 4, 8), new THREE.MeshStandardMaterial({color: 0xd4a574, metalness: 0.6, roughness: 0.4}));
    spire.position.set(0, centralH + 24, 0);
    building.add(spire);

    // Side wings extending forward (U-shape)
    const wingW = 10, wingH = 20, wingD = 26;
    const leftWing = new THREE.Mesh(new THREE.BoxGeometry(wingW, wingH, wingD), stoneMat);
    leftWing.position.set(-(centralW/2 - wingW/2), wingH/2, centralD/2 + wingD/2 - 1);
    leftWing.castShadow = true; leftWing.receiveShadow = true;
    building.add(leftWing);
    const leftWingRoof = new THREE.Mesh(new THREE.BoxGeometry(wingW + 1, 1, wingD + 1), roofMat);
    leftWingRoof.position.set(leftWing.position.x, wingH + 0.5, leftWing.position.z);
    building.add(leftWingRoof);

    const rightWing = leftWing.clone();
    rightWing.position.x = -leftWing.position.x;
    building.add(rightWing);
    const rightWingRoof = leftWingRoof.clone();
    rightWingRoof.position.x = -leftWingRoof.position.x;
    building.add(rightWingRoof);

    // Rear extension
    const rear = new THREE.Mesh(new THREE.BoxGeometry(centralW * 0.7, 16, 10), stoneMat);
    rear.position.set(0, 8, -(centralD/2 + 5));
    rear.castShadow = true; rear.receiveShadow = true;
    building.add(rear);

    // Window grid — create thin planes on front of central block + wings
    const addWindowsToFace = (parentMesh, face) => {
      // parent.geometry parameters
      const geo = parentMesh.geometry.parameters;
      const w = geo.width, h = geo.height, d = geo.depth;
      const cols = Math.max(3, Math.floor(w / 3));
      const rows = Math.max(3, Math.floor(h / 4));
      const winW = 1.2, winH = 2;
      const padX = w * 0.08, padY = h * 0.12;
      const stepX = (w - 2 * padX) / Math.max(1, cols - 1);
      const stepY = (h - 2 * padY) / Math.max(1, rows - 1);
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const win = new THREE.Mesh(new THREE.PlaneGeometry(winW, winH), windowMat);
          const localX = -w/2 + padX + c * stepX;
          const localY = -h/2 + padY + r * stepY;
          if (face === 'front') {
            win.position.set(localX, localY, d/2 + 0.02);
          } else if (face === 'back') {
            win.position.set(localX, localY, -d/2 - 0.02);
            win.rotation.y = Math.PI;
          } else if (face === 'left') {
            win.position.set(-w/2 - 0.02, localY, localX * (d/w));
            win.rotation.y = -Math.PI/2;
          } else if (face === 'right') {
            win.position.set(w/2 + 0.02, localY, localX * (d/w));
            win.rotation.y = Math.PI/2;
          }
          parentMesh.add(win);
        }
      }
    };
    addWindowsToFace(central, 'front');
    addWindowsToFace(central, 'back');
    addWindowsToFace(leftWing, 'front');
    addWindowsToFace(rightWing, 'front');

    // Pediment/cornice line above first floor
    const cornice = new THREE.Mesh(new THREE.BoxGeometry(centralW + 0.4, 0.5, centralD + 0.4), new THREE.MeshStandardMaterial({color: 0xb8a98a}));
    cornice.position.set(0, 4.5, 0);
    building.add(cornice);

    // Entrance steps + portico columns
    const steps = new THREE.Mesh(new THREE.BoxGeometry(12, 0.8, 4), new THREE.MeshStandardMaterial({color: 0xa89a82}));
    steps.position.set(0, 0.4, centralD/2 + 2);
    building.add(steps);
    for (let i = -2; i <= 2; i++) {
      const col = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 8, 12), stoneMat);
      col.position.set(i * 2.5, 4, centralD/2 + 1.2);
      col.castShadow = true;
      building.add(col);
    }

    // Center building
    building.position.set(0, 0, -10);
    scene.add(building);

    // Trees (subtle dark dots)
    const treeMat = new THREE.MeshStandardMaterial({ color: 0x2a3a25, roughness: 1 });
    for (let i = 0; i < 14; i++) {
      const tree = new THREE.Mesh(new THREE.ConeGeometry(1.5, 4, 8), treeMat);
      const angle = Math.random() * Math.PI * 2;
      const dist = 45 + Math.random() * 30;
      tree.position.set(Math.cos(angle) * dist, 2, Math.sin(angle) * dist);
      tree.castShadow = true;
      scene.add(tree);
    }

    // OrbitControls
    let controls;
    if (THREE.OrbitControls) {
      controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.06;
      controls.target.set(0, 10, -5);
      controls.minDistance = 40;
      controls.maxDistance = 200;
      controls.maxPolarAngle = Math.PI / 2.05;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.4;
      controls.update();
      const stopAuto = () => { controls.autoRotate = false; };
      renderer.domElement.addEventListener('pointerdown', stopAuto, { once: true });
    }

    let raf;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      if (controls) controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);
    // Trigger a resize once layout settles
    const ro = new ResizeObserver(onResize);
    ro.observe(mount);
    setTimeout(onResize, 50);
    setTimeout(onResize, 300);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      if (controls) controls.dispose();
      renderer.dispose();
      if (mount && renderer.domElement && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  const currentFloor = FLOORS.find(f => f.n === floor) || FLOORS[0];

  return (
    <div>
      <section className="page-head">
        <div className="container">
          <div className="eyebrow">02 · Реконструкція</div>
          <h1 className="h1">Головний<br/>корпус</h1>
          <p className="lede">
            вул. Артема, 58, Донецьк · Сталінська архітектура, шість поверхів,
            U-подібний план з центральною баштою. Завершений у 1950-х роках.
          </p>
        </div>
      </section>

      <section className="container">
        <div className="viewer-wrap" ref={mountRef}>
          <div className="viewer-overlay">
            <div className="viewer-tag">МАСШТАБ 1 : 200</div>
            <div className="viewer-tag">РЕКОНСТРУКЦІЯ · 1958</div>
          </div>
          <div className="viewer-help">Перетягніть · Колесо · Праве натискання — панорама</div>
        </div>
        <p className="caption" style={{marginTop: '1rem', maxWidth: '60ch'}}>
          Реконструкція виконана на основі усних свідчень випускників та архівних креслень 1958 р.
          Геометрія процедурна — деталізація буде поглиблюватися у наступних версіях.
        </p>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="h2">Поверхи</h2>
            <p className="body">Виберіть поверх — план та перелік приміщень.</p>
          </div>
          <div className="floor-tabs" style={{marginBottom: '2rem'}}>
            {FLOORS.map(f => (
              <button key={f.n} className={'floor-tab' + (floor === f.n ? ' active' : '')} onClick={() => setFloor(f.n)}>
                {f.n} · {f.label}
              </button>
            ))}
          </div>
          <div className="floor-plan">
            <div><FloorPlan floor={floor} /></div>
            <div className="floor-rooms">
              {currentFloor.rooms.map(r => (
                <div key={r.id} className="room-card">
                  <div className="room-card-id">{r.id}</div>
                  <div className="room-card-name">{r.name}</div>
                  <div className="room-card-meta">{r.meta}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Object.assign(window, { Campus3DPage });
