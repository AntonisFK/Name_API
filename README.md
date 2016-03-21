A simple API server that communicates with it directily over URL requests. 
GET '/' will serve up the full collection of names in the databse 
GET '/new/:name' will add a name into the databse
GET '/remove/:name' will delete a name from the databse 
GET '/:name' will bring up the document of that particular person 
