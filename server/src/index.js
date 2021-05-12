const { config } = require("./utils");
const app = require('./app');


app.listen(config.PORT || 3001, () =>{
    console.log('http://localhost:%s', config.PORT)
});
