import { Engine, Scene, FreeCamera, Vector3, MeshBuilder, StandardMaterial, Color3, HemisphericLight } from '@babylonjs/core'
const createScene = (canvas) => {
  const engine = new Engine(canvas)
  const scene = new Scene(engine)

  const camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene)
  camera.setTarget(Vector3.Zero())
  camera.attachControl(canvas, true)

  new HemisphericLight('light', Vector3.Down(), scene)

  const box = MeshBuilder.CreateBox('box', { size: 4 }, scene)
  const material = new StandardMaterial('box-material', scene)
  material.diffuseColor = Color3.Green()
  box.material = material
  const ground = MeshBuilder.CreateGround('ground', { width: 10, height: 10}, scene)
  ground.material = material
  

  engine.runRenderLoop(() => {
    scene.render()
  })
}

export { createScene }
