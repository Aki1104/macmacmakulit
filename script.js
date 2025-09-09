const canvas = document.getElementById('deepar-canvas');

const deepAR = new DeepAR({
  licenseKey: '4a0e65ae03e1dbd74db7c7458680a0f66e83f09a3e1b15dd46ed9eb87fe6c7ce09672baeb2124e33', // <-- from your DeepAR account
  canvas: canvas,
  deeparWasmPath: 'DeepAR-Web-v5.6.19/lib/wasm/deepar.wasm',
  callbacks: {
    onInitialize: () => {
      deepAR.startVideo(true, { facingMode: "environment" }); // back camera
      deepAR.switchEffect(0, 'slot', 'macmacpalo.deeparproj'); // your project
    }
  }
});
