import * as utils from "./utils";
import app from './app';

app.listen(utils.config.PORT || 4000, () =>{
    console.log('http://localhost:%s', utils.config.PORT)
});
