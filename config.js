const path = require('path');

const config = {
  ROOT_DIR: __dirname,
  URL_PORT: 8080,
  CONTROLLER_DIRECTORY: path.join(__dirname, 'controllers'),
  PROJECT_DIR: __dirname,


  MQTT:{
    PROTOCOL: 'mqtt',
    HOST: '',
    PORT: '1883',
    options:{
      username:'',
      password:'',
      clean: true
      //TODO if it's required
    }
  },

//TODO: if it's required
topicSender:"ShoppingCenterSender",
topicReceivers:"ShoppingCenterReceivers"



};
config.OPENAPI_YAML = path.join(config.ROOT_DIR, 'api', 'openapi.yaml');
config.FULL_PATH = `${config.URL_PATH}:${config.URL_PORT}/${config.BASE_VERSION}`;
config.FILE_UPLOAD_PATH = path.join(config.PROJECT_DIR, 'uploaded_files');

module.exports = config;
