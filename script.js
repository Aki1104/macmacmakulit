const canvas = document.getElementById('deepar-canvas');

const deepAR = new DeepAR({
  licenseKey: 'f228aa68f8eb4f7c86aff0726c2d15b6c23a09643a69a19482f8ad4d7e14b71c04e122f48695d2f2', // <-- from your DeepAR account
  canvas: canvas,
  deeparWasmPath: 'DeepAR-Web-v5.6.19/lib/wasm/deepar.wasm',
  callbacks: {
    onInitialize: () => {
      deepAR.startVideo(true, { facingMode: "environment" }); // back camera
      deepAR.switchEffect(0, 'slot', 'macmacpalo.deeparproj'); // your project
    }
  }
});
