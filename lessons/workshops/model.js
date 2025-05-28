import * as THREE from 'three'
import { OrbitControls } from 'OrbitControls'
import { GLTFLoader } from 'GLTFLoader'
import { RectAreaLightUniformsLib } from 'RectAreaLightUniformsLib'

document.addEventListener('DOMContentLoaded', () => {
  initThree()
  initThree2()
})

function initThree() {
  //находим html-контейнер
  const model = document.querySelector('.model')

  //создаём сцену
  const scene = new THREE.Scene()
  scene.background = new THREE.Color('#e1e1df')
  scene.position.set(0, -30, 0)

  //создаём камеру
  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    3000
  )
  camera.position.set(-130, 80, 50)

  //создаём визуализатор-рендерер
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth / 2, window.innerHeight)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  model.appendChild(renderer.domElement)

  //подключаем модель
  {
    const loader = new GLTFLoader()
    loader.load(
      // './3d/korea/scene.gltf',
      './3d/narkomfin/scene.gltf',
      (gltf) => {
        scene.add(gltf.scene)
      },
      (error) => {
        console.log('Error:' + error)
      }
    )
  }

  //настраиваем свет
  {
    const light = new THREE.AmbientLight(0xeeeeee)
    scene.add(light)
  }
  {
    const light = new THREE.DirectionalLight(0xeeeeee, 1)
    light.position.set(-60, 100, 0)
    light.lookAt(100, 100, 0)

    // const helper = new THREE.DirectionalLightHelper(light, 5)
    // scene.add(helper)
    scene.add(light)
  }
  {
    const light = new THREE.DirectionalLight(0xeeeeee, 1)
    light.position.set(50, 100, 0)
    light.lookAt(100, 100, 0)

    // const helper = new THREE.DirectionalLightHelper(light, 5)
    // scene.add(helper)
    scene.add(light)
  }

  //подключаем контролы
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.maxDistance = 300
  controls.minDistance = 100
  controls.maxPolarAngle = Math.PI / 2.2
  // controls.autoRotate = true
  // controls.autoRotateSpeed = 5

  //анимация модели
  function animate() {
    requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }
  animate()
}
function initThree2() {
  //находим html-контейнер
  const model = document.querySelector('.model2')

  //создаём сцену
  const scene = new THREE.Scene()
  scene.position.set(0, 0, 0)

  //создаём камеру
  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    3000
  )
  camera.position.set(-130, 80, 50)

  //создаём визуализатор-рендерер
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth / 2, window.innerHeight)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  model.appendChild(renderer.domElement)

  //подключаем модель
  {
    const loader = new GLTFLoader()
    loader.load(
      // './3d/korea/scene.gltf',
      './3d/korea/scene.gltf',
      (gltf) => {
        scene.add(gltf.scene)
      },
      (error) => {
        console.log('Error:' + error)
      }
    )
  }

  //настраиваем свет
  {
    const light = new THREE.AmbientLight(0xeeeeee)
    scene.add(light)
  }
  {
    const light = new THREE.DirectionalLight(0xeeeeee, 1)
    light.position.set(-60, 100, 0)
    light.lookAt(100, 100, 0)

    // const helper = new THREE.DirectionalLightHelper(light, 5)
    // scene.add(helper)
    scene.add(light)
  }
  {
    const light = new THREE.DirectionalLight(0xeeeeee, 1)
    light.position.set(50, 100, 0)
    light.lookAt(100, 100, 0)

    // const helper = new THREE.DirectionalLightHelper(light, 5)
    // scene.add(helper)
    scene.add(light)
  }

  //подключаем контролы
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.maxDistance = 300
  controls.minDistance = 100
  controls.maxPolarAngle = Math.PI / 2.2
  // controls.autoRotate = true
  // controls.autoRotateSpeed = 5

  //анимация модели
  function animate() {
    requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }
  animate()
}
