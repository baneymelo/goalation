# Goalation


[<img src="https://www.techlabs.org/static/tl-logo-cf3f70e8f5222649e6b06468adfae64c.png" width="15%">](https://techlabs.org)


Goalation is a productivity app helps you to stick to your goals by betting money on it. If you miss your target, the money will be donated to a social purpose of your choice. 

## :gem: Winner Project  :3rd_place_medal:

[<img src="https://i.ibb.co/LzD2ndn/winner-goalation.png" >](https://bit.ly/32qybrk)


## Tech

MERN Stack

## Docker


### Quick start
You can build and run with:

`docker-compose up -d --build; docker-compose logs -f`
docker will expose the service app over `localhost:3000` and socket over  `localhost:8080` and create a mongo instance for user data persistence.

### Installation
Build the image

`docker build -t node_skill_test -f ./server/Dockerfile .`

Install via npm:
```
cd server
npm install
```

### Dependencies

* Node v10.19.0 >=
* ```server:``` [Automatically installed when using npm install.](./server/package.json)
* ```client:``` [Automatically installed when using npm install.](./client/package.json)



### Usage
Docker Windows:

`docker run -d --rm --name node_skill_test -p 8080:8080 -p 3000:3000  -v ${PWD}/server:/app node_skill_test`


Docker on Linux/Mac:

`docker run -dit --rm --name node_skill_test -p 8080:8080 -p 3000:3000  -v ./server:/app node_skill_test`

###Docker compose

`docker-compose up`

Local:

```
cd server
npm run start
```

Local Development:
```
cd server
npm install --only=dev
npm run dev:lint
```
## GitHub Actions (CD) 

[backend.yml](./.github/workflows/backend.yml)
[frontend.yml](./.github/workflows/frontend.yml)

## API Documentation 

[<img src="https://i.ibb.co/q5JsrtH/goalation-api.png" >](https://app.swaggerhub.com/apis/baneymelo/goalation-api/0.0.1)

[Test API](https://app.swaggerhub.com/apis/baneymelo/goalation-api/0.0.1)



### Licence

MIT