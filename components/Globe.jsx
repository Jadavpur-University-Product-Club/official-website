import { WebGLRenderer, Scene } from "three";
import {
  PerspectiveCamera,
  AmbientLight,
  DirectionalLight,
  Color,
  Fog,
  PointLight,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import countries from "../assets/globe/globe-data-min.json";
import travelHistory from "../assets/globe/my-flights.json";
import airportHistory from "../assets/globe/my-airports.json";
import { useEffect, useRef } from "react";


export default function Globe() {
  const rendererContainerRef = useRef(null);
  const dataRef = useRef({});
  const ThreeGlobeRef = useRef(null);


  function init() {
    // init renderer
    dataRef.current.renderer = new WebGLRenderer({ antialias: true });
    dataRef.current.renderer.setPixelRatio(window.devicePixelRatio);
    dataRef.current.renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.outputEncoding = THREE.sRGBEncoding;
    rendererContainerRef.current.appendChild(dataRef.current.renderer.domElement);

    // Initialize scene, light
    dataRef.current.scene = new Scene();
    dataRef.current.scene.add(new AmbientLight(0xbbbbbb, 0.3));
    dataRef.current.scene.background = new Color(0x040d21);

    // Initialize camera, light
    dataRef.current.camera = new PerspectiveCamera();
    dataRef.current.camera.aspect = window.innerWidth / window.innerHeight;
    dataRef.current.camera.updateProjectionMatrix();

    var dLight = new DirectionalLight(0xffffff, 0.8);
    dLight.position.set(-800, 2000, 400);
    dataRef.current.camera.add(dLight);

    var dLight1 = new DirectionalLight(0x7982f6, 1);
    dLight1.position.set(-200, 500, 200);
    dataRef.current.camera.add(dLight1);

    var dLight2 = new PointLight(0x8566cc, 0.5);
    dLight2.position.set(-200, 500, 200);
    dataRef.current.camera.add(dLight2);

    dataRef.current.camera.position.z = 400;
    dataRef.current.camera.position.x = 0;
    dataRef.current.camera.position.y = 0;

    dataRef.current.scene.add(dataRef.current.camera);
    dataRef.current.scene.fog = new Fog(0x535ef3, 400, 2000);

      // Initialize controls
      dataRef.current.controls = new OrbitControls(dataRef.current.camera, dataRef.current.renderer.domElement);
      dataRef.current.controls.enableDamping = true;
      dataRef.current.controls.dynamicDampingFactor = 0.01;
      dataRef.current.controls.enablePan = true;
      dataRef.current.controls.minDistance = 300;
      dataRef.current.controls.maxDistance = 550;
      dataRef.current.controls.rotateSpeed = 0.8;
      dataRef.current.controls.zoomSpeed = 1;
      dataRef.current.controls.autoRotate = true;

      dataRef.current.controls.minPolarAngle = Math.PI / 3.5;
      dataRef.current.controls.maxPolarAngle = Math.PI - Math.PI / 3;


    window.addEventListener("resize", onWindowResize, false);
    document.addEventListener("mousemove", onMouseMove);

    initGlobe();
  }


  // SECTION Globe
    async function initGlobe() {
    ThreeGlobeRef.current = (await import("three-globe")).default;
    // Initialize the Globe
    dataRef.current.Globe = new ThreeGlobeRef.current({
      waitForGlobeReady: true,
      animateIn: true,
    })
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(true)
      .atmosphereColor("#3a228a")
      .atmosphereAltitude(0.25)
      .hexPolygonColor((e) => {
        if (
          ["KGZ", "KOR", "THA", "RUS", "UZB", "IDN", "KAZ", "MYS"].includes(
            e.properties.ISO_A3
          )
        ) {
          return "rgba(255,255,255, 1)";
        } else return "rgba(255,255,255, 0.7)";
      });
  
    // NOTE Arc animations are followed after the globe enters the scene
    setTimeout(() => {
        dataRef.current.Globe.arcsData(travelHistory.flights)
        .arcColor((e) => {
          return e.status ? "#9cff00" : "#FF4000";
        })
        .arcAltitude((e) => {
          return e.arcAlt;
        })
        .arcStroke((e) => {
          return e.status ? 0.5 : 0.3;
        })
        .arcDashLength(0.9)
        .arcDashGap(4)
        .arcDashAnimateTime(1000)
        .arcsTransitionDuration(1000)
        .arcDashInitialGap((e) => e.order * 1)
        .labelsData(airportHistory.airports)
        .labelColor(() => "#ffcb21")
        .labelDotOrientation((e) => {
          return e.text === "ALA" ? "top" : "right";
        })
        .labelDotRadius(0.3)
        .labelSize((e) => e.size)
        .labelText("city")
        .labelResolution(6)
        .labelAltitude(0.01)
        .pointsData(airportHistory.airports)
        .pointColor(() => "#ffffff")
        .pointsMerge(true)
        .pointAltitude(0.07)
        .pointRadius(0.05);
    }, 1000);
  
    dataRef.current.Globe.rotateY(-Math.PI * (5 / 9));
    dataRef.current.Globe.rotateZ(-Math.PI / 6);

    const globeMaterial = dataRef.current.Globe.globeMaterial();
    globeMaterial.color = new Color(0x3a228a);
    globeMaterial.emissive = new Color(0x220038);
    globeMaterial.emissiveIntensity = 0.1;
    globeMaterial.shininess = 0.7;
  
    // NOTE Cool stuff
    // globeMaterial.wireframe = true;
  
    dataRef.current.scene.add(dataRef.current.Globe);

    onWindowResize();
    animate();
  }
  

  function onMouseMove(event) {
    dataRef.current.mouseX = event.clientX - dataRef.current.windowHalfX;
    dataRef.current.mouseY = event.clientY - dataRef.current.windowHalfY;
    // console.log("x: " + mouseX + " y: " + mouseY);
  }
  
  function onWindowResize() {
    dataRef.current.camera.aspect = window.innerWidth / window.innerHeight;
    dataRef.current.camera.updateProjectionMatrix();
    dataRef.current.windowHalfX = window.innerWidth / 1.5;
    dataRef.current.windowHalfY = window.innerHeight / 1.5;
    dataRef.current.renderer.setSize(window.innerWidth, window.innerHeight);
  }
  
  function animate() {
    dataRef.current.camera.position.x +=
      Math.abs(dataRef.current.mouseX) <= dataRef.current.windowHalfX / 2
        ? (dataRef.current.mouseX / 2 - dataRef.current.camera.position.x) * 0.005
        : 0;
    dataRef.current.camera.position.y += (-dataRef.current.mouseY / 2 - dataRef.current.camera.position.y) * 0.005;
    dataRef.current.camera.lookAt(dataRef.current.scene.position);
    dataRef.current.controls.update();
    dataRef.current.renderer.render(dataRef.current.scene, dataRef.current.camera);
    requestAnimationFrame(animate);
  }

  useEffect(() => {
    if (typeof window === "undefined") return;
    dataRef.current.mouseX = 0;
    dataRef.current.mouseY = 0;
    dataRef.current.windowHalfX = window.innerWidth / 2;
    dataRef.current.windowHalfY = window.innerHeight / 2;
    init();
  }, []);

  return (
    <>
    <div ref={rendererContainerRef}></div>
    </>
  );
}
