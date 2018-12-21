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
 
    * * Status Code:

        200

    * * Content:
    
        {
        "hash": "a77ad1485e820d32a7d1a559ddf4d7c5182f64842267eb7a135417619408d569",
        "height": 10,
        "body": "Test Data 9",
        "time": "1545286561",
        "previousBlockHash": "90bd737fa37b254adbae4d4b7cc155cc1cd616323c904afe87398173e0bdedc5"
        }
        
* **Error Response:**

    * * Status Code:

        500

    * * Content:

        Error: Block does not exist!
        
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
    
    * Status Code:

        200

    * Content:

    {
    "hash": "a20e4291de0e4e34921b17f402843cb4b106f89a2594bd17f6b0f9fd0fc32b73",
    "height": 11,
    "body": "Test Data",
    "time": "1545358567",
    "previousBlockHash": "2b9127644d96822c63351f4c68aae6f21e89bc557e60066200853c10db1ba167"
    }
        
* **Error Response:**
    
    An error message is received when no data is posted.

    * Status Code:

        500

    * Content:

        Error: You must add data to create a new block.

## Built With

* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
