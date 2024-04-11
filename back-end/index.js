import express from 'express';
import expressConfig from './configs/express_config.js';
import portConfig from './configs/port_config.js';
import mongooseConfig from './configs/mongoose_config.js'
import routesConfig from './configs/routes_config.js';
async function start() {
    const app = express();
    await mongooseConfig();
    expressConfig(app);
    portConfig(app);
    routesConfig(app);
    console.log('APP STARTED');
}
start();