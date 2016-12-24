# brain.dmp-frontend
Frontend for brain.dmp platform.

brain.dmp is a knowledge distribution/notepad platform. This frontend 
is fundamentally based on node.js and the React view library.

This brain.dmp frontend will be developed backend agnostic. It 
communicates with the backend via HTTP REST calls. 

### Run it

#### Development

```
npm start
```
Runs the node express server.js and webpack-dev-server

```
npm test
```
Runs mocha tests found in test/

#### Dist

```
npm run dist
```
Webpacks the src code and copies the server.js to dist dir
