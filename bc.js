const SHA256 = require('crypto-js/sha256');
const BlockClass = require('./bk.js');
const BlockchainClass = require('./sc.js');
const db = new BlockchainClass.Blockchain();

/**
 * Controller Definition to encapsulate routes to work with blocks
 */
class BlockController {

    /**
     * Constructor to create a new BlockController, you need to initialize here all your endpoints
     * @param {*} app 
     */
    constructor(app) {
        this.app = app;
        //this.initializeMockData();
        this.getBlockByIndex();
        this.postNewBlock();
    }

    /**
     * Implement a GET Endpoint to retrieve a block by index, url: "/api/block/:index"
     */
    getBlockByIndex() {
        this.app.get("/block/:index", async(req, res) => {
            // Add your code here
            let i = req.params.index
            let block = await db.getBlock(i);
            if(block == undefined){
                res.status(500).send("Error: Block does not exist!");
            } else {
                res.status(200).send(JSON.parse(block));
            }
        });
    }

    /**
     * Implement a POST Endpoint to add a new Block, url: "/api/block"
     */
    postNewBlock() {
        this.app.post("/block", async(req, res) => {
            // Add your code here
            if ((req.body.body == undefined) || (req.body.body === "")){
                res.status(500).send("Error: You must add data to create a new block.")
            } else {
                let block = new BlockClass.Block(req.body.body);
                await db.addBlock(block);
                let height = await db.getBlockHeight();
                height = height + 1;
                let newBlock = await db.getBlock(height);
                res.status(200).send(JSON.parse(newBlock));
            } 
        });
    }

    /**
     * Help method to inizialized Mock dataset, adds 10 test blocks to the chain after the Genesis block.
     */
    initializeMockData() {
        (function theLoop (i) {
            setTimeout(function () {
                //Test Object
                db.addBlock(new BlockClass.Block('Test Data ' + i));
                i++;
                if (i < 10) { 
                  theLoop(i);
                }
            }, 600);
          })(0);
    }

}

/**
 * Exporting the BlockController class
 * @param {*} app 
 */
module.exports = (app) => { return new BlockController(app);}