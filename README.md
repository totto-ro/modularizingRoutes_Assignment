# Modularizing Assignments
Move the routes from your Quoting Dojo assignment out of server.js and into their own file, routes.js. Routes.js should be located within the config folder.

Modularize routes.js by moving the code within each route into another file. This logic is handled by the controller. Our controller will contain an object with the different code snippets from each route as values. We should export this object so that routes.js may require it. 

Move the code that defines our models into its own folder. 
