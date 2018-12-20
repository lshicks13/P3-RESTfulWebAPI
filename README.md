# RESTful Web API and Private Blockchain

Create a web API using a Node.js framework that will interact with a private blockchain to submit and retrieve blockchain data.

## Getting Started

1. Clone the repository to your local computer. 
    `$ git clone https://github.com/lshicks13/P3-RESTfulWebAPI.git`
2. Open the terminal and install the packages: `npm install`.
3. Run your application `node app.js`
4. Query Endpoints

## Endpoints

### Get A Block By Index

* **URL**

    /block/:index
    
    Example: /block/8

* **Method:**

    ```GET```

* **URL Params**

    Required:

    ```index=[integer]```

* **Success Response:**
 
    
        {
        "hash": "a77ad1485e820d32a7d1a559ddf4d7c5182f64842267eb7a135417619408d569",
        "height": 10,
        "body": "Test Data 9",
        "time": "1545286561",
        "previousBlockHash": "90bd737fa37b254adbae4d4b7cc155cc1cd616323c904afe87398173e0bdedc5"
        }
        
* **Error Response:**

        Block does not exist!
        
### Create A New Block

* **URL**

    /block

* **Method:**

    ```POST```

* **Data Params**

    Required:

    ```body = [JSON Object]```
    
    Example: 
    ```
    {
        "body": "Test Data"
    }
    ```

* **Success Response:**
 
        New block created!
        
* **Error Response:**
    
    An error message is received when no data is posted.

        Error: You must add data to create a new block.

## Built With

* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
