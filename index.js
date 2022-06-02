import { createRequire } from "module";
const require = createRequire(import.meta.url);
const express = require('express');
const app = express();

import {router} from './router.js'
app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Listening at ${port}`)
})