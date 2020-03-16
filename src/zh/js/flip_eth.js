// DaiAuctions.com - Version: 1.3.3
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
const CDP_MANAGER_ABI = [{
    "inputs": [{"internalType": "address", "name": "vat_", "type": "address"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "anonymous": true,
    "inputs": [{"indexed": true, "internalType": "bytes4", "name": "sig", "type": "bytes4"}, {
        "indexed": true,
        "internalType": "address",
        "name": "usr",
        "type": "address"
    }, {"indexed": true, "internalType": "bytes32", "name": "arg1", "type": "bytes32"}, {
        "indexed": true,
        "internalType": "bytes32",
        "name": "arg2",
        "type": "bytes32"
    }, {"indexed": false, "internalType": "bytes", "name": "data", "type": "bytes"}],
    "name": "LogNote",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "usr", "type": "address"}, {
        "indexed": true,
        "internalType": "address",
        "name": "own",
        "type": "address"
    }, {"indexed": true, "internalType": "uint256", "name": "cdp", "type": "uint256"}],
    "name": "NewCdp",
    "type": "event"
}, {
    "constant": false,
    "inputs": [{"internalType": "uint256", "name": "cdp", "type": "uint256"}, {
        "internalType": "address",
        "name": "usr",
        "type": "address"
    }, {"internalType": "uint256", "name": "ok", "type": "uint256"}],
    "name": "cdpAllow",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"internalType": "address", "name": "", "type": "address"}, {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }, {"internalType": "address", "name": "", "type": "address"}],
    "name": "cdpCan",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "cdpi",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"internalType": "address", "name": "", "type": "address"}],
    "name": "count",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "src", "type": "address"}, {
        "internalType": "uint256",
        "name": "cdp",
        "type": "uint256"
    }],
    "name": "enter",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"internalType": "address", "name": "", "type": "address"}],
    "name": "first",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "bytes32", "name": "ilk", "type": "bytes32"}, {
        "internalType": "uint256",
        "name": "cdp",
        "type": "uint256"
    }, {"internalType": "address", "name": "dst", "type": "address"}, {
        "internalType": "uint256",
        "name": "wad",
        "type": "uint256"
    }],
    "name": "flux",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "uint256", "name": "cdp", "type": "uint256"}, {
        "internalType": "address",
        "name": "dst",
        "type": "address"
    }, {"internalType": "uint256", "name": "wad", "type": "uint256"}],
    "name": "flux",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "uint256", "name": "cdp", "type": "uint256"}, {
        "internalType": "int256",
        "name": "dink",
        "type": "int256"
    }, {"internalType": "int256", "name": "dart", "type": "int256"}],
    "name": "frob",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "uint256", "name": "cdp", "type": "uint256"}, {
        "internalType": "address",
        "name": "dst",
        "type": "address"
    }],
    "name": "give",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "name": "ilks",
    "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"internalType": "address", "name": "", "type": "address"}],
    "name": "last",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "name": "list",
    "outputs": [{"internalType": "uint256", "name": "prev", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "next",
        "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "uint256", "name": "cdp", "type": "uint256"}, {
        "internalType": "address",
        "name": "dst",
        "type": "address"
    }, {"internalType": "uint256", "name": "rad", "type": "uint256"}],
    "name": "move",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "bytes32", "name": "ilk", "type": "bytes32"}, {
        "internalType": "address",
        "name": "usr",
        "type": "address"
    }],
    "name": "open",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "name": "owns",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "uint256", "name": "cdp", "type": "uint256"}, {
        "internalType": "address",
        "name": "dst",
        "type": "address"
    }],
    "name": "quit",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "uint256", "name": "cdpSrc", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "cdpDst",
        "type": "uint256"
    }],
    "name": "shift",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "usr", "type": "address"}, {
        "internalType": "uint256",
        "name": "ok",
        "type": "uint256"
    }],
    "name": "urnAllow",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"internalType": "address", "name": "", "type": "address"}, {
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "urnCan",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "name": "urns",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "vat",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}];

const ETH_FLIP_ADDRESS = "0xd8a04f5412223f513dc55f839574430f5ec15531";
const OSM_ADDRESS = "0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763";
const CDP_MANAGER_ADDRESS = "0x5ef30b9986345249bc32d8928B7ee64DE9435E39";
const CAT_ADDRESS = "0x78F2c2AF65126834c51822F56Be0d7469D7A523E";


var web3;
var usingRemoteProvider = true;
if (typeof window.ethereum !== 'undefined' && window.ethereum.networkVersion &&
    window.ethereum.networkVersion === "1" && window.ethereum.isMetaMask) {
    try {
        web3 = new Web3(window.ethereum);
        let subscription = web3.eth.subscribe('newBlockHeaders');
        subscription.unsubscribe();
        console.log("使用本地Web3提供程序");
        usingRemoteProvider = false;
    } catch (e) {
        usingRemoteProvider = true;
    }
}
if (usingRemoteProvider) {
    var infura = "wss://mainnet.infura.io/ws/v3/cabe301d837048959747eaa4415846b7";
    var provider = new Web3.providers.WebsocketProvider(infura);
    web3 = new Web3(provider);
    console.log("使用远程Web3提供程序");
}

// Get instance of contracts
const flipContract = new web3.eth.Contract(FLIPPER_ABI, ETH_FLIP_ADDRESS);
const osmContract = new web3.eth.Contract(OSM_ABI, OSM_ADDRESS);
const cdpManagerContract = new web3.eth.Contract(CDP_MANAGER_ABI, CDP_MANAGER_ADDRESS);

// Get new events and populate last events global variable
var events = [];
var getFlipEvents = function getFlipEvents(fromBlockNumber) {
    console.log(`获取拍卖事件的区块: ${fromBlockNumber}`);
    return flipContract.getPastEvents("allEvents", {
            fromBlock: fromBlockNumber,
            toBlock: "latest"
        },
        function (err, result) {
            if (!err) {
                console.log("已接收到的事件:", result.length);
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
                osmPrice = parseFloat(price).toFixed(2);
                return price;
            } else {
                console.log(err);
            }
        });
};

// Get the vault number from an Kick event hash
var getVaultNumber = async function (kickTxHash) {
    let txRceipt = await web3.eth.getTransactionReceipt(kickTxHash);
    let totalCdpis = await cdpManagerContract.methods.cdpi().call();
    for (let j = 0; j < txRceipt.logs.length; j++) {
        let log = txRceipt.logs[j];
        if (log.address === CAT_ADDRESS) {
            let vault = log.topics[2].slice(-40);
            for (let k = totalCdpis; k > 0; k--) {
                let urn = await cdpManagerContract.methods.urns(k).call();
                urn = urn.slice(-40);
                if (vault === urn.toLowerCase()) {
                    return k;
                }
            }
        }
    }
};

// Events types signatures to be processed
const TEND = "0x4b43ed1200000000000000000000000000000000000000000000000000000000";
const DENT = "0x5ff3a38200000000000000000000000000000000000000000000000000000000";
const DEAL = "0xc959c42b00000000000000000000000000000000000000000000000000000000";
const TICK = "0xfc7b6aee00000000000000000000000000000000000000000000000000000000";

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
            values += "序号: <b>" + flipId + "</b> | ";

            let lot = event.returnValues.lot / 10 ** 18;
            values += "数量: " + lot.toFixed(3) + " eth | ";

            let tab = event.returnValues.tab / 10 ** 27 / 10 ** 18;
            values += "初始竞价: " + tab.toFixed(3) + " dai | ";

            osmPrice = 0;
            await getOsmPrice(event.blockNumber);

            // Register KICK over Auction dictionary
            auctions[flipId] = {
                id: flipId,
                kickDate: blockDate.toUTCString().slice(5),
                kickDay: blockDate.getUTCDate(),
                kickMonth: blockDate.getUTCMonth() + 1,
                kickPrice: osmPrice.toString(),
                kickLot: lot.toFixed(5),
                tends: 0,
                dents: 0,
                bid: null,
                lot: null,
                tab: tab.toFixed(5),
                guy: null,
                dealPrice: null,
                paidPrice: null,
                state: "OPEN"
            };

            if (osmPrice > 0) {
                values += "Maker OSM喂价: $" + auctions[flipId]["kickPrice"] + " | ";
            } else {
                values += "Maker OSM喂价: $---,-- | ";
            }
        } else if (event.raw.topics[0] === TEND) {
            eventType = "TEND";
            flipId = parseInt(event.raw.topics[2], 16);

            // Avoid showing TEND without a KICK
            if (!auctions[flipId]) {
                continue;
            }

            values += "序号: <b>" + flipId + "</b> | ";

            let lot = parseInt(event.raw.topics[3], 16) / 10 ** 18;
            values += "数量: " + lot.toFixed(3) + " eth | ";

            let raw = event.raw.data.slice(288, -248);
            let bid = parseInt(raw, 16) / 10 ** 27 / 10 ** 18;
            values += "竞标价: " + bid.toFixed(3) + " dai | ";

            osmPrice = 0;
            await getOsmPrice(event.blockNumber);

            // Register TEND over Auction dictionary
            auctions[flipId]["tends"] += 1;
            auctions[flipId]["bid"] = bid.toFixed(5);
            auctions[flipId]["bidPrice"] = osmPrice.toString();
            auctions[flipId]["lot"] = lot.toFixed(5);
            auctions[flipId]["paidPrice"] = (bid / lot).toFixed(2);

            if (osmPrice > 0) {
                // Calculate diff percentage
                let diff = ((auctions[flipId]["paidPrice"] / auctions[flipId]["bidPrice"]) - 1) * 100;
                if (diff > 0) {
                    values += "+" + diff.toFixed(1) + " % | ";
                } else {
                    values += "" + diff.toFixed(1) + " % | ";
                }
                values += "价格: $" + auctions[flipId]["bidPrice"] + " | ";
            } else {
                values += "--,-- % | 价格: $---,-- | ";
            }
        } else if (event.raw.topics[0] === DENT) {
            eventType = "DENT";

            flipId = parseInt(event.raw.topics[2], 16);

            if (!auctions[flipId]) {
                continue;
            }

            values += "序号: <b>" + flipId + "</b> | ";

            let lot = parseInt(event.raw.topics[3], 16) / 10 ** 18;
            values += "数量: " + lot.toFixed(3) + " eth | ";

            let raw = event.raw.data.slice(288, -248);
            let bid = parseInt(raw, 16) / 10 ** 27 / 10 ** 18;
            values += "竞标价: " + bid.toFixed(3) + " dai | ";

            osmPrice = 0;
            await getOsmPrice(event.blockNumber);

            // Register DENT over Auction dictionary
            auctions[flipId]["dents"] += 1;
            auctions[flipId]["bid"] = bid.toFixed(5);
            auctions[flipId]["bidPrice"] = osmPrice.toString();
            auctions[flipId]["lot"] = lot.toFixed(5);
            auctions[flipId]["paidPrice"] = (bid / lot).toFixed(2);

            if (osmPrice > 0) {
                // Calculate diff percentage
                let diff = ((auctions[flipId]["paidPrice"] / auctions[flipId]["bidPrice"]) - 1) * 100;
                if (diff > 0) {
                    values += "+" + diff.toFixed(2) + " % | ";
                } else {
                    values += "" + diff.toFixed(2) + " % | ";
                }
                values += "价格: $" + auctions[flipId]["bidPrice"] + " | ";
            } else {
                values += "--,-- % | 价格: $---,-- | ";
            }
        } else if (event.raw.topics[0] === DEAL) {
            eventType = "DEAL";

            flipId = parseInt(event.raw.topics[2], 16);

            if (!auctions[flipId]) {
                continue;
            }

            values += "序号: <b>" + flipId + "</b> | ";

            osmPrice = 0;
            await getOsmPrice(event.blockNumber);

            // Register DEAL over Auction dictionary
            auctions[flipId]["dealPrice"] = osmPrice.toString();
            auctions[flipId]["state"] = "CLOSE";

            if (!osmPrice) {
                values += "最终支付: $" + auctions[flipId]["paidPrice"] + " dai/eth (+-.--%) | ";
                values += "--,-- % | Price: $---,-- | ";
            } else {
                values += "最终支付: $" + auctions[flipId]["paidPrice"] + " dai/eth ";
                let diff = ((auctions[flipId]["paidPrice"] / auctions[flipId]["dealPrice"]) - 1) * 100;
                if (diff > 0) {
                    values += "(+" + diff.toFixed(2) + "%) ~ <b>失败</b> | ";
                } else {
                    values += "(" + diff.toFixed(2) + "%) ~ <b>胜利!</b> | ";
                }
                values += "价格: $" + auctions[flipId]["dealPrice"] + " | ";
            }
        } else if (event.raw.topics[0] === TICK) {
            eventType = "TICK";
            flipId = parseInt(event.raw.topics[2], 16);
            values += "序号: <b>" + flipId + "</b> | ";
            values += "时间延长! | ";
        } else {
            console.log("未知事件");
            console.log(event);
        }

        // Get event tx info
        // Get event tx info
        await web3.eth.getTransaction(event.transactionHash).then(function (tx) {
            let from = tx.from.slice(0, 6) + "..." + tx.from.slice(-4);
            let txHref = `https://cn.etherscan.com/tx/${event.transactionHash}`;
            let txLink = `<a target="_blank" href="${txHref}">交易号信息:..${event.transactionHash.slice(-3)}</a>`;
            values += `地址: ${from} | ${txLink} >>`;
            if (auctions[flipId]) {
                auctions[flipId]["guy"] = from;
            }
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
var fetchAuctions = async function fetchAuctions(someID) {
    lastBlockfetch = await web3.eth.getBlockNumber();
    let fromBlock = lastBlockfetch - 2261; // -> 3.14 / 8 days blocks count
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
    lastUpdateTag.innerHTML = `- 更新时间: ${now}`;
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


// ## Start Main function
fetchAuctions(0);

// Only in DEV version (comment this line before minimize it)
//console.log('Loaded not optimized file');

// Subscribe to new blocks
setTimeout(function () {
    console.log('正在从链上获取新数据...');
    web3.eth.subscribe('newBlockHeaders', newBlock);
}, 5000);
