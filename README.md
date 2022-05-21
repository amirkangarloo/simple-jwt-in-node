# Simple JWT in Node
Simple JWT in Node.js

## Usage

**first step**

```javascript
git clone https://github.com/amirkangarloo/simple-jwt-in-node.git
```

then

```javascript
cd store-api
```

**second step**
```javascript
npm install
```

**third step**

Make **.env** file. like a below:


    # === App ===
    APP_URL=http://localhost:3000
    APP_PORT=3000
    APP_SECRET=
    
    # === MongoDB ===
    MONGO_URL=mongodb://localhost:27017
    MONGO_PORT=27017
    MONGO_USERNAME=
    MONGO_PASSWORD=
    MONGO_DB_NAME=simple-jwt-in-node
    
    # === Redis ===
    REDIS_URL=
    REDIS_PORT=
    REDIS_USERNAME=
    REDIS_PASSWORD=
    

**fourth step**
```javascript
npm start
```

## Route API

| **HTTP Method**  | **Route**  | **Result**  |
| :------------: | :------------: | :------------: |
|  POST |  api/v1/login |  Create a new user and JWT |
|  GET |  api/v1/dashboard |  Use token to see lucky number |

## License
[MIT](https://choosealicense.com/licenses/mit/)
