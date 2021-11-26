# Modularizing Assignments
Move the routes from your Quoting Dojo assignment out of server.js and into their own file, routes.js. Routes.js should be located within the config folder.

Modularize routes.js by moving the code within each route into another file. This logic is handled by the controller. Our controller will contain an object with the different code snippets from each route as values. We should export this object so that routes.js may require it. 

Move the code that defines our models into its own folder. 

The last thing we'll do to modularize our server side code is to remove the database connection from server.js into its own file called mongoose.js in the config folder. This file will also ensure that we run our setter functions to establish our collections in the database well before the controllers try to access them.
