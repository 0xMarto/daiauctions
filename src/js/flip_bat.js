"use strict";

const FLIPPER_ABI = [{
    inputs: [{
        internalType: "address",
        name: "vat_",
        type: "address"
    }, {
        internalType: "bytes32",
        name: "ilk_",
        type: "bytes32"
    }],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
}, {
    anonymous: false,
    inputs: [{
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256"
    }, {
        indexed: false,
        internalType: "uint256",
        name: "lot",
        type: "uint256"
    }, {
        indexed: false,
        internalType: "uint256",
        name: "bid",
        type: "uint256"
    }, {
        indexed: false,
        internalType: "uint256",
        name: "tab",
        type: "uint256"
    }, {
        indexed: true,
        internalType: "address",
        name: "usr",
        type: "address"
    }, {
        indexed: true,
        internalType: "address",
        name: "gal",
        type: "address"
    }],
    name: "Kick",
    type: "event"
}, {
    anonymous: true,
    inputs: [{
        indexed: true,
        internalType: "bytes4",
        name: "sig",
        type: "bytes4"
    }, {
        indexed: true,
        internalType: "address",
        name: "usr",
        type: "address"
    }, {
        indexed: true,
        internalType: "bytes32",
        name: "arg1",
        type: "bytes32"
    }, {
        indexed: true,
        internalType: "bytes32",
        name: "arg2",
        type: "bytes32"
    }, {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "LogNote",
    type: "event"
}, {
    constant: true,
    inputs: [],
    name: "beg",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: true,
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "bids",
    outputs: [{
        internalType: "uint256",
        name: "bid",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "lot",
        type: "uint256"
    }, {
        internalType: "address",
        name: "guy",
        type: "address"
    }, {
        internalType: "uint48",
        name: "tic",
        type: "uint48"
    }, {
        internalType: "uint48",
        name: "end",
        type: "uint48"
    }, {
        internalType: "address",
        name: "usr",
        type: "address"
    }, {
        internalType: "address",
        name: "gal",
        type: "address"
    }, {
        internalType: "uint256",
        name: "tab",
        type: "uint256"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "uint256",
        name: "id",
        type: "uint256"
    }],
    name: "deal",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "uint256",
        name: "id",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "lot",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "bid",
        type: "uint256"
    }],
    name: "dent",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "address",
        name: "usr",
        type: "address"
    }],
    name: "deny",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "bytes32",
        name: "what",
        type: "bytes32"
    }, {
        internalType: "uint256",
        name: "data",
        type: "uint256"
    }],
    name: "file",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "ilk",
    outputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "address",
        name: "usr",
        type: "address"
    }, {
        internalType: "address",
        name: "gal",
        type: "address"
    }, {
        internalType: "uint256",
        name: "tab",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "lot",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "bid",
        type: "uint256"
    }],
    name: "kick",
    outputs: [{
        internalType: "uint256",
        name: "id",
        type: "uint256"
    }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "kicks",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "address",
        name: "usr",
        type: "address"
    }],
    name: "rely",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "tau",
    outputs: [{
        internalType: "uint48",
        name: "",
        type: "uint48"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "uint256",
        name: "id",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "lot",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "bid",
        type: "uint256"
    }],
    name: "tend",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "uint256",
        name: "id",
        type: "uint256"
    }],
    name: "tick",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "ttl",
    outputs: [{
        internalType: "uint48",
        name: "",
        type: "uint48"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "vat",
    outputs: [{
        internalType: "contract VatLike",
        name: "",
        type: "address"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: true,
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "wards",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "uint256",
        name: "id",
        type: "uint256"
    }],
    name: "yank",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}];
const OSM_ABI = [{
    inputs: [{
        internalType: "address",
        name: "src_",
        type: "address"
    }],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
}, {
    anonymous: true,
    inputs: [{
        indexed: true,
        internalType: "bytes4",
        name: "sig",
        type: "bytes4"
    }, {
        indexed: true,
        internalType: "address",
        name: "usr",
        type: "address"
    }, {
        indexed: true,
        internalType: "bytes32",
        name: "arg1",
        type: "bytes32"
    }, {
        indexed: true,
        internalType: "bytes32",
        name: "arg2",
        type: "bytes32"
    }, {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "LogNote",
    type: "event"
}, {
    anonymous: false,
    inputs: [{
        indexed: false,
        internalType: "bytes32",
        name: "val",
        type: "bytes32"
    }],
    name: "LogValue",
    type: "event"
}, {
    constant: true,
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "bud",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "address",
        name: "src_",
        type: "address"
    }],
    name: "change",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "address",
        name: "usr",
        type: "address"
    }],
    name: "deny",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "address[]",
        name: "a",
        type: "address[]"
    }],
    name: "diss",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "address",
        name: "a",
        type: "address"
    }],
    name: "diss",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "hop",
    outputs: [{
        internalType: "uint16",
        name: "",
        type: "uint16"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "address[]",
        name: "a",
        type: "address[]"
    }],
    name: "kiss",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "address",
        name: "a",
        type: "address"
    }],
    name: "kiss",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "pass",
    outputs: [{
        internalType: "bool",
        name: "ok",
        type: "bool"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "peek",
    outputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }, {
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "peep",
    outputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }, {
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [],
    name: "poke",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "read",
    outputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "address",
        name: "usr",
        type: "address"
    }],
    name: "rely",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "src",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [],
    name: "start",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "uint16",
        name: "ts",
        type: "uint16"
    }],
    name: "step",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [],
    name: "stop",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "stopped",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [],
    name: "void",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: true,
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "wards",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "zzz",
    outputs: [{
        internalType: "uint64",
        name: "",
        type: "uint64"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}];
const CAT_ABI = [{"inputs":[{"internalType":"address","name":"vat_","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"ilk","type":"bytes32"},{"indexed":true,"internalType":"address","name":"urn","type":"address"},{"indexed":false,"internalType":"uint256","name":"ink","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"art","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tab","type":"uint256"},{"indexed":false,"internalType":"address","name":"flip","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"Bite","type":"event"},{"anonymous":true,"inputs":[{"indexed":true,"internalType":"bytes4","name":"sig","type":"bytes4"},{"indexed":true,"internalType":"address","name":"usr","type":"address"},{"indexed":true,"internalType":"bytes32","name":"arg1","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"arg2","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"LogNote","type":"event"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"},{"internalType":"address","name":"urn","type":"address"}],"name":"bite","outputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"cage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"}],"name":"deny","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"},{"internalType":"bytes32","name":"what","type":"bytes32"},{"internalType":"uint256","name":"data","type":"uint256"}],"name":"file","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"what","type":"bytes32"},{"internalType":"address","name":"data","type":"address"}],"name":"file","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"},{"internalType":"bytes32","name":"what","type":"bytes32"},{"internalType":"address","name":"flip","type":"address"}],"name":"file","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"ilks","outputs":[{"internalType":"address","name":"flip","type":"address"},{"internalType":"uint256","name":"chop","type":"uint256"},{"internalType":"uint256","name":"lump","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"live","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"}],"name":"rely","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"vat","outputs":[{"internalType":"contract VatLike","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"vow","outputs":[{"internalType":"contract VowLike","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"wards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];

const BAT_FLIP_ADDRESS = "0xaA745404d55f88C108A28c86abE7b5A1E7817c07";
const OSM_ADDRESS = "0xB4eb54AF9Cc7882DF0121d26c5b97E802915ABe6";
const CAT_ADDRESS = "0x78F2c2AF65126834c51822F56Be0d7469D7A523E";
const FLIP_ILK = "0x4241542d41000000000000000000000000000000000000000000000000000000";

var web3;
var usingRemoteProvider = true;
if (typeof window.ethereum !== 'undefined' && window.ethereum.networkVersion &&
    window.ethereum.networkVersion === "1" && window.ethereum.isMetaMask) {
    try {
        web3 = new Web3(window.ethereum);
        let subscription = web3.eth.subscribe('newBlockHeaders');
        subscription.unsubscribe();
        console.log("Using local web3 provider");
        usingRemoteProvider = false;
    } catch (e) {
        usingRemoteProvider = true;
    }
}
if (usingRemoteProvider) {
    var infura = "wss://mainnet.infura.io/ws/v3/f77d1e38219b45d4b4965a1c247c1aff";
    var provider = new Web3.providers.WebsocketProvider(infura);
    web3 = new Web3(provider);
    console.log("Using remote web3 provider");
}

// Get instance of contracts
const flipContract = new web3.eth.Contract(FLIPPER_ABI, BAT_FLIP_ADDRESS);
const osmContract = new web3.eth.Contract(OSM_ABI, OSM_ADDRESS);
const catContract = new web3.eth.Contract(CAT_ABI, CAT_ADDRESS);

// Get new events and populate last events global variable
var events = [];
var getFlipEvents = function getFlipEvents(fromBlockNumber) {
    console.log(`Get auction events from block: ${fromBlockNumber}`);
    return flipContract.getPastEvents("allEvents", {
            fromBlock: fromBlockNumber,
            toBlock: "latest"
        },
        function (err, result) {
            if (!err) {
                console.log("Received Events:", result.length);
                events = result;
            } else {
                console.log(err);
            }
        });
};

// Get the price in the given block number and populate last price global variable
var osmPrice = 0;
var getOsmPrice = function getOsmPrice(blockNumber) {
    return osmContract.getPastEvents("LogValue", {
            fromBlock: blockNumber - 600,
            toBlock: blockNumber
        },
        function (err, result) {
            if (!err) {
                var logEvent = result[result.length - 1];
                if (!logEvent) {
                    return 0;
                }
                var priceInWei = web3.utils.toBN(logEvent.returnValues[0]);
                var price = web3.utils.fromWei(priceInWei);
                osmPrice = parseFloat(price).toFixed(4);
                return price;
            } else {
                console.log(err);
            }
        });
};

// Events types signatures to be processed
const TEND = "0x4b43ed1200000000000000000000000000000000000000000000000000000000";
const DENT = "0x5ff3a38200000000000000000000000000000000000000000000000000000000";
const DEAL = "0xc959c42b00000000000000000000000000000000000000000000000000000000";
const TICK = "0xfc7b6aee00000000000000000000000000000000000000000000000000000000";
const FILE = "0x29ae811400000000000000000000000000000000000000000000000000000000";
const DENY = "0x9c52a7f100000000000000000000000000000000000000000000000000000000";
const RELY = "0x65fae35e00000000000000000000000000000000000000000000000000000000";

// Variable to summarize by ID all auctions currently registered
var auctions = {};

// Show last events received
var eventsLoaded = false;
var showEvents = async function showEvents(someID) {
    // Clear loading msg in body
    if (Object.keys(auctions).length === 0) {
        document.getElementById("app").innerHTML = "";
    }

    // Disable filter when populating
    if (events.length > 0) {
        hideFilterSearch();
    }

    // Iterate over events
    for (let i = 0; i < events.length; i++) {
        let event = events[i];
        let values = "";
        let blockDate = new Date();
        await web3.eth.getBlock(event.blockNumber).then(function (block) {
            if (block) {
                let blockTime = block.timestamp;
                blockDate = new Date(blockTime * 1000);
                values = blockDate.toLocaleString() + " | ";
            } else {
                values = new Date().toLocaleString() + " | ";
            }
        });
        let eventType = "Unknown";
        let flipId = 0;

        // Event types cases
        if (event.event === "Kick") {
            eventType = "KICK";
            flipId = parseInt(event.returnValues.id, 10);
            values += "ID: <b>" + flipId + "</b> | ";

            let lot = event.returnValues.lot / 10 ** 18;
            values += "lot: " + lot.toFixed(3) + " bat | ";

            let tab = event.returnValues.tab / 10 ** 27 / 10 ** 18;
            values += "tab: " + tab.toFixed(3) + " dai | ";

            osmPrice = 0;
            await getOsmPrice(event.blockNumber);

            // Register KICK over Auction dictionary
            auctions[flipId] = {
                id: flipId,
                kickDate: blockDate.toUTCString().slice(5),
                kickPrice: osmPrice.toString(),
                kickLot: lot,
                tends: 0,
                dents: 0,
                bid: null,
                bidFrom: null,
                bidDate: null,
                bidPrice: null,
                lot: null,
                tab: tab,
                guy: null,
                dealPrice: null,
                paidPrice: null,
                state: "OPEN"
            };

            if (osmPrice > 0) {
                values += "Maker OSM Price: $" + auctions[flipId]["kickPrice"] + " | ";
            } else {
                values += "Maker OSM Price: $---,-- | ";
            }
        } else if (event.raw.topics[0] === TEND) {
            eventType = "TEND";
            flipId = parseInt(event.raw.topics[2], 16);

            // Avoid showing TEND without a KICK
            if (!auctions[flipId]) {
                continue;
            }

            values += "ID: <b>" + flipId + "</b> | ";

            let lot = parseInt(event.raw.topics[3], 16) / 10 ** 18;
            values += "lot: " + lot.toFixed(3) + " bat | ";

            let raw = event.raw.data.slice(288, -248);
            let bid = parseInt(raw, 16) / 10 ** 27 / 10 ** 18;
            values += "bid: " + bid.toFixed(3) + " dai | ";

            osmPrice = 0;
            await getOsmPrice(event.blockNumber);

            // Register TEND over Auction dictionary
            auctions[flipId]["tends"] += 1;
            auctions[flipId]["bid"] = bid;
            auctions[flipId]["bidDate"] = blockDate.toUTCString().slice(5);
            auctions[flipId]["bidPrice"] = osmPrice.toString();
            auctions[flipId]["lot"] = lot;
            auctions[flipId]["paidPrice"] = (bid / lot).toFixed(4);

            if (osmPrice > 0) {
                // Calculate diff percentage
                let diff = ((auctions[flipId]["paidPrice"] / auctions[flipId]["bidPrice"]) - 1) * 100;
                if (diff > 0) {
                    values += "+" + diff.toFixed(1) + " % | ";
                } else {
                    values += "" + diff.toFixed(1) + " % | ";
                }
                values += "Price: $" + auctions[flipId]["bidPrice"] + " | ";
            } else {
                values += "--,-- % | Price: $---,-- | ";
            }
        } else if (event.raw.topics[0] === DENT) {
            eventType = "DENT";

            flipId = parseInt(event.raw.topics[2], 16);

            if (!auctions[flipId]) {
                continue;
            }

            values += "ID: <b>" + flipId + "</b> | ";

            let lot = parseInt(event.raw.topics[3], 16) / 10 ** 18;
            values += "lot: " + lot.toFixed(3) + " bat | ";

            let raw = event.raw.data.slice(288, -248);
            let bid = parseInt(raw, 16) / 10 ** 27 / 10 ** 18;
            values += "bid: " + bid.toFixed(3) + " dai | ";

            osmPrice = 0;
            await getOsmPrice(event.blockNumber);

            // Register DENT over Auction dictionary
            auctions[flipId]["dents"] += 1;
            auctions[flipId]["bid"] = bid;
            auctions[flipId]["bidDate"] = blockDate.toUTCString().slice(5);
            auctions[flipId]["bidPrice"] = osmPrice.toString();
            auctions[flipId]["lot"] = lot;
            auctions[flipId]["paidPrice"] = (bid / lot).toFixed(4);

            if (osmPrice > 0) {
                // Calculate diff percentage
                let diff = ((auctions[flipId]["paidPrice"] / auctions[flipId]["bidPrice"]) - 1) * 100;
                if (diff > 0) {
                    values += "+" + diff.toFixed(2) + " % | ";
                } else {
                    values += "" + diff.toFixed(2) + " % | ";
                }
                values += "Price: $" + auctions[flipId]["bidPrice"] + " | ";
            } else {
                values += "--,-- % | Price: $---,-- | ";
            }
        } else if (event.raw.topics[0] === DEAL) {
            eventType = "DEAL";

            flipId = parseInt(event.raw.topics[2], 16);

            if (!auctions[flipId]) {
                continue;
            }

            values += "ID: <b>" + flipId + "</b> | ";

            osmPrice = 0;
            await getOsmPrice(event.blockNumber);

            // Register DEAL over Auction dictionary
            auctions[flipId]["dealPrice"] = osmPrice.toString();
            auctions[flipId]["state"] = "CLOSE";

            if (!osmPrice) {
                values += "Paid Rate: $" + auctions[flipId]["paidPrice"] + " dai/bat (+-.--%) | ";
                values += "--,-- % | Price: $---,-- | ";
            } else {
                values += "Paid Rate: $" + auctions[flipId]["paidPrice"] + " dai/bat ";
                let diff = ((auctions[flipId]["paidPrice"] / auctions[flipId]["dealPrice"]) - 1) * 100;
                if (diff > 0) {
                    values += "(+" + diff.toFixed(2) + "%) ~ ";
                    values += `<b class='detail-btn' onclick='showAuctionDetails(${flipId})'>Lost 📋</b> | `
                } else {
                    values += "(" + diff.toFixed(2) + "%) ~ ";
                    values += `<b class='detail-btn' onclick='showAuctionDetails(${flipId})'>Won! 📋</b> | `
                }
                values += "Price: $" + auctions[flipId]["dealPrice"] + " | ";
            }
        } else if (event.raw.topics[0] === TICK) {
            eventType = "TICK";
            flipId = parseInt(event.raw.topics[2], 16);
            values += "ID: <b>" + flipId + "</b> | ";
            values += "Time extended! | ";
        }  else if (event.raw.topics[0] === FILE) {
            auctions[0] = {id: 0, type: "FILE"};
            eventType = "FILE";
            const BEG = "0x6265670000000000000000000000000000000000000000000000000000000000";
            const TAU = "0x7461750000000000000000000000000000000000000000000000000000000000";
            const TTL = "0x74746c0000000000000000000000000000000000000000000000000000000000";
            if (event.raw.topics[2] === BEG) {
                values += "WHAT: <b> BEG </b> (minimum bid increase) | ";
                let file_value = parseInt(event.raw.topics[3]) / 10 ** 18;
                file_value = (file_value - 1) * 100;
                values += "VALUE: <b>" + file_value.toFixed(2) + " %</b> | ";
            } else if (event.raw.topics[2] === TAU) {
                values += "WHAT: <b> TAU </b> (maximum auction duration) | ";
                let file_value = parseInt(event.raw.topics[3]);
                file_value = file_value / 60 / 60;
                values += "VALUE: <b>" + file_value.toFixed(1) + " hours</b> | ";
            } else if (event.raw.topics[2] === TTL) {
                values += "WHAT: <b> TTL </b> (bid lifetime / max bid duration) | ";
                let file_value = parseInt(event.raw.topics[3]);
                file_value = file_value / 60;
                values += "VALUE: <b>" + file_value.toFixed(1) + " minutes</b> | ";
            } else {
                values += "WHAT: <b>UKNOWN</b> | ";
                console.log(event.raw.topics);
            }
            values += "New Flapper Update! | ";
        } else if (event.raw.topics[0] === RELY) {
            eventType = "RELY";
            values += "WHAT: <b>Allow to call auth'ed methods --</b> | ";
            let usr = event.raw.topics[2];
            values += "TO: <b>0x" + usr.slice(-40) + "</b> | ";
        } else if (event.raw.topics[0] === DENY) {
            eventType = "DENY";
            values += "WHAT: <b>Disallow to call auth'ed methods</b> | ";
            let usr = event.raw.topics[2];
            values += "TO: <b>0x" + usr.slice(-40) + "</b> | ";
        } else {
            console.log("Uknown event");
            console.log(event);
        }

        // Get event tx info
        await web3.eth.getTransaction(event.transactionHash).then(function (tx) {
            let from = tx.from.slice(0, 6) + "..." + tx.from.slice(-4);
            if (auctions[flipId]) {
                if (eventType === "DENT" || eventType === "TEND") {
                    auctions[flipId]["bidFrom"] = tx.from;
                }
                auctions[flipId]["txFrom"] = tx.from;
            }
            let txHref = `https://etherscan.io/tx/${event.transactionHash}`;
            let txLink = `<a target="_blank" href="${txHref}">Tx:..${event.transactionHash.slice(-3)} Info</a>`;
            values += `from: ${from} | ${txLink} >>`;
        });

        // Get old page and Render new line in app
        let oldPage = document.getElementById("app").innerHTML;
        let newLine = "";
        if (someID === 0 || someID === flipId) {
            newLine = "<div class=\"row flip-" + flipId + " " + eventType.toLowerCase() + "\">" +
                eventType + " >> " + values + "</div>";
        }
        document.getElementById("app").innerHTML = newLine + oldPage;
    }

    // Verify if there is any registered auction to show
    if (Object.keys(auctions).length > 0) {
        showFilter();
    } else {
        showEmptyMessage();
    }
    eventsLoaded = true;
};

// Fetch old events to populate list at initial load
var lastBlockfetch = 0;
var blocksBack = 18095; // 18095 -> 3.14 days blocks count
var fetchAuctions = async function fetchAuctions(someID) {
    lastBlockfetch = await web3.eth.getBlockNumber();
    let fromBlock = lastBlockfetch - blocksBack;
    await getFlipEvents(fromBlock);
    await showEvents(someID);
};

// New block event handler
async function newBlock(error, result) {
    if (result) {
        let newBlockNumber = result.number;
        if (!eventsLoaded) return;

        // Clear events and fetch new ones
        eventsLoaded = false;
        await getFlipEvents(newBlockNumber);
        await showEvents(0);
    } else {
        console.log(error);
    }
}

// Utility/helpers functions
function showFilter() {
    let filterPanel = document.getElementById("filter-panel");

    if (filterPanel) {
        filterPanel.style.display = "block";
        let searchTag = document.getElementById("search");
        searchTag.style.display = "inline";
        let noResultsTag = document.getElementById("no-results");
        noResultsTag.style.display = "none";
        showLastUpdate();
    }
}

function showLastUpdate() {
    let lastUpdateTag = document.getElementById("last-update");
    let now = new Date().toLocaleString();
    lastUpdateTag.innerHTML = `- Updated to: ${now}`;
}

function hideFilterSearch() {
    let filterPanelSearch = document.getElementById("search");
    if (filterPanelSearch) {
        filterPanelSearch.style.display = "none";
    }
}

function showEmptyMessage() {
    let filterPanel = document.getElementById("filter-panel");

    if (filterPanel) {
        filterPanel.style.display = "block";
        let searchTag = document.getElementById("search");
        searchTag.style.display = "none";
        let noResultsTag = document.getElementById("no-results");
        noResultsTag.style.display = "inline";
        showLastUpdate();
    }
}

function filterAuctionById() {
    let flipId = $("#fliter-id").val();
    let allRows = $(".row");
    allRows.hide();
    if (flipId) {
        $(".flip-" + flipId).show()
    } else {
        allRows.show();
    }
}

function showAuctionDetails(id){
    let auction = auctions[id];
    if (!auction){
        alert('Error showing auction details');
        return;
    }

    let detailPanel = $('#auction-details');
    if (detailPanel) {
        detailPanel.hide();
    }

    let msg = `> <b>AUCTION ID: ${id}</b>`;
    msg += '<hr/>';

    msg += 'Started: <br/>';
    msg += `- DATE: ${auction.kickDate} <br/>`;
    msg += `- LOT: ${auction.kickLot.toLocaleString('en')} bat - BID: ${auction.bid.toLocaleString('en')} dai <br/>`;
    msg += `- BAT OSM: $${auction.kickPrice} bat/dai <br/><br/>`;

    msg += `Bids received: ${auction.tends + auction.dents} <br/><br/>`;

    msg += 'Last Bid:<br/>';
    msg += `- DATE: ${auction.bidDate} <br/>`;
    msg += `- FROM: ${auction.bidFrom} <br/>`;
    msg += `- LOT: ${auction.lot.toLocaleString('en')} bat - BID: ${auction.bid.toLocaleString('en')} dai <br/>`;
    msg += `- PAID PRICE: $${auction.paidPrice} bat/dai <br/>`;
    msg += `- BAT OSM: $${auction.bidPrice} bat/dai <br/><br/>`;

    msg += 'Ended: <br/>';
    msg += `- DATE: ${auction.dealDate} <br/>`;
    msg += `- FROM: ${auction.txFrom} <br/>`;
    msg += `- PAID PRICE: $${auction.paidPrice} bat/dai <br/>`;
    msg += `- BAT OSM: $${auction.dealPrice} bat/dai <br/><br/>`;


    msg += 'Results: <br/>';
    let priceDiff = ((auction["paidPrice"] / auction["dealPrice"]) - 1) * 100;
    msg += `- PRICE DIFF: ${priceDiff.toFixed(2)}% <br/>`;
    let daiProfit =  (auction.lot * auction.dealPrice) - auction.bid;
    msg += `- PROFIT: <b>${daiProfit.toLocaleString('en')} dai</b>`;

    msg += '<hr/>';
    msg += '<a style="float: right;" onclick="hideAuctionDetails()">CLOSE<a/>';

    if (detailPanel) {
        detailPanel.html(msg);
        detailPanel.fadeIn('normal');
    }
}

function hideAuctionDetails() {
    let detailPanel = $('#auction-details');
    if (detailPanel) {
        detailPanel.fadeOut('normal');
    }
}

async function updateGlobals() {
    let globalsPanel = $('#globals');

    catContract.methods.ilks(FLIP_ILK).call().then(function (value) {
        let lump = parseInt(value['lump']) / 10 ** 18;
        let chop = ((parseInt(value['chop']) / 10 ** 27) - 1) * 100;
        globalsPanel.find('#lump').text(lump.toLocaleString('en'));
        globalsPanel.find('#chop').text(chop.toFixed(2));
    });

    flipContract.methods.beg().call().then(function (value) {
        let beg = ((value / 10 ** 18) - 1) * 100;
        globalsPanel.find('#beg').text(beg.toFixed(2));
    });

    flipContract.methods.ttl().call().then(function (value) {
        let ttl = value / 60;
        globalsPanel.find('#ttl').text(ttl.toFixed(1));
    });

    flipContract.methods.tau().call().then(function (value) {
        let tau = value / 60 / 60;
        globalsPanel.find('#tau').text(tau.toFixed(1));
    });

    let lastBlock = await web3.eth.getBlockNumber();
    await getOsmPrice(lastBlock);
    globalsPanel.find('#osm-eth').text("$" + osmPrice);
}


// ## Start Main function
updateGlobals();
fetchAuctions(0);

// Only in DEV version (comment this line before minimize it)
//console.log('Loaded not optimized file');

// Subscribe to new blocks
setTimeout(function () {
    console.log('Getting new data from chain...');
    web3.eth.subscribe('newBlockHeaders', newBlock);
}, 5000);
