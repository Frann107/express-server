var express = require('express')
var application = express()

application.get('/hello-world', function(request, response){
    response.send('hello world')
})

var port = 3000
application.listen(port,function(){
    console.log('application running on port http://localhost:'+port)
})
