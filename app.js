/*  const onvif = require('node-onvif');
// Create an OnvifDevice object
let device = new onvif.OnvifDevice({
  xaddr: 'http://118.189.65.66:8082/onvif/device_service',
  user: 'admin',
  pass: 'admin0864'
});
// Initialize the OnvifDevice object
device.init().then((info) => {
  // Show the detailed information of the device.
  console.log(JSON.stringify(info, null, '  '));
}).catch((error) => {
  console.error(error);
});

 */

 Stream = require('node-rtsp-stream');
stream = new Stream({
  name: 'test',
  streamUrl: 'rtsp://admin:admin0864@118.189.65.66:8082/cam/realmonitor?channel=1&subtype=0',
  wsPort: 9999,
  ffmpegOptions: { // options ffmpeg flags
    '-r': 30 // options with required values specify the value after the key
  }
});