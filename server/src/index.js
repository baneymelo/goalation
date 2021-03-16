import * as utils from "./utils";
import app from './app';

app.listen(utils.config.PORT || 4000, () =>{
    console.log('listening on port %s', utils.config.PORT)
});
