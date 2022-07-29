const server = require('./src/app.js');


server.listen(process.env.PORT || 3001, 
  () => {
    console.log('listening on port 3001');
  }
);
