# awesomeproducts 

## Launch  
1. Instal docker
2. Instal docker-compose
3. Login into docker to be able to download images from docker.hub
4. In root folder ./awesomeproducts run: docker-compose up
5. On local host will launch 2 servers: 
 - backend - PORT:5000;
 - frontend - PORT: 3000;
 - postgresql - PORT: 5432;
6. Go to browser and go to http://localhost:3000/signin for login or http://localhost:3000/signup for reg.

## Project structure 
1. server - used Nestjs + postgresql + TS. If you wonna launch only server go to ./server and run: 
- npm run start:div - for start server local
OR:
- docker build . & docker run (CONTAINER_ID) - to start in docker container
2. client - React + TS. If you wonna launch only client go to ./client and run:
 - npm run start - for start client local
OR:
- docker build . & docker run (CONTAINER_ID) - to start in docker container
3. database - dump of default db with pokemons
5. user.json - list of credentials that u allow to use to login

### Project endpoint
Client side has next pages: 
/signin - login page. Form with two inputs and sign in functionality. If you have any trubles please check console or network.
/signup - registration page. Form with three inputs and sign up functionality. If you have any troubles please check console or network.
/me - information about current user. Base info
/pokemon - get list of all pokemons. Long list of 800+ items
/pokemon/:id - get info about pokemon by his id. Info about pokemon. Also here you can add ur pokemon to the cart.
/cart - cart where user can buy pokemons. Here you can see ur pokemons that u added to cart. Also here you can increment or decrement quantity.

#### Errors 
All handlers for errors requests, validation, and other exceptions will be add in next version.
