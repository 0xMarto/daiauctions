"use strict";

// Contracts ABI
const FLAPPER_ABI = [{
    "inputs": [{
        "internalType": "address",
        "name": "vat_",
        "type": "address"
    }, {"internalType": "address", "name": "gem_", "type": "address"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "uint256", "name": "id", "type": "uint256"}, {
        "indexed": false,
        "internalType": "uint256",
        "name": "lot",
        "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "bid", "type": "uint256"}],
    "name": "Kick",
    "type": "event"
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
    "constant": true,
    "inputs": [],
    "name": "beg",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "name": "bids",
    "outputs": [{"internalType": "uint256", "name": "bid", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "lot",
        "type": "uint256"
    }, {"internalType": "address", "name": "guy", "type": "address"}, {
        "internalType": "uint48",
        "name": "tic",
        "type": "uint48"
    }, {"internalType": "uint48", "name": "end", "type": "uint48"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "uint256", "name": "rad", "type": "uint256"}],
    "name": "cage",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "uint256", "name": "id", "type": "uint256"}],
    "name": "deal",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "usr", "type": "address"}],
    "name": "deny",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "bytes32", "name": "what", "type": "bytes32"}, {
        "internalType": "uint256",
        "name": "data",
        "type": "uint256"
    }],
    "name": "file",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "gem",
    "outputs": [{"internalType": "contract GemLike", "name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "uint256", "name": "lot", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "bid",
        "type": "uint256"
    }],
    "name": "kick",
    "outputs": [{"internalType": "uint256", "name": "id", "type": "uint256"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "kicks",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "live",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "usr", "type": "address"}],
    "name": "rely",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "tau",
    "outputs": [{"internalType": "uint48", "name": "", "type": "uint48"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "uint256", "name": "id", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "lot",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "bid", "type": "uint256"}],
    "name": "tend",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "uint256", "name": "id", "type": "uint256"}],
    "name": "tick",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "ttl",
    "outputs": [{"internalType": "uint48", "name": "", "type": "uint48"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "vat",
    "outputs": [{"internalType": "contract VatLike", "name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"internalType": "address", "name": "", "type": "address"}],
    "name": "wards",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "uint256", "name": "id", "type": "uint256"}],
    "name": "yank",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}];
const MEDIANIZER_ABI = [{
    "constant": false,
    "inputs": [{"name": "owner_", "type": "address"}],
    "name": "setOwner",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "", "type": "bytes32"}],
    "name": "poke",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "poke",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "compute",
    "outputs": [{"name": "", "type": "bytes32"}, {"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "wat", "type": "address"}],
    "name": "set",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "wat", "type": "address"}],
    "name": "unset",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "", "type": "address"}],
    "name": "indexes",
    "outputs": [{"name": "", "type": "bytes12"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "next",
    "outputs": [{"name": "", "type": "bytes12"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "read",
    "outputs": [{"name": "", "type": "bytes32"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "peek",
    "outputs": [{"name": "", "type": "bytes32"}, {"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "", "type": "bytes12"}],
    "name": "values",
    "outputs": [{"name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "min_", "type": "uint96"}],
    "name": "setMin",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "authority_", "type": "address"}],
    "name": "setAuthority",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{"name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "void",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "pos", "type": "bytes12"}, {"name": "wat", "type": "address"}],
    "name": "set",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "authority",
    "outputs": [{"name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "pos", "type": "bytes12"}],
    "name": "unset",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "next_", "type": "bytes12"}],
    "name": "setNext",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "min",
    "outputs": [{"name": "", "type": "uint96"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "name": "val", "type": "bytes32"}],
    "name": "LogValue",
    "type": "event"
}, {
    "anonymous": true,
    "inputs": [{"indexed": true, "name": "sig", "type": "bytes4"}, {
        "indexed": true,
        "name": "guy",
        "type": "address"
    }, {"indexed": true, "name": "foo", "type": "bytes32"}, {
        "indexed": true,
        "name": "bar",
        "type": "bytes32"
    }, {"indexed": false, "name": "wad", "type": "uint256"}, {"indexed": false, "name": "fax", "type": "bytes"}],
    "name": "LogNote",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "authority", "type": "address"}],
    "name": "LogSetAuthority",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "owner", "type": "address"}],
    "name": "LogSetOwner",
    "type": "event"
}];
const VOW_ABI = [{
    "inputs": [{"internalType": "address", "name": "vat_", "type": "address"}, {
        "internalType": "address",
        "name": "flapper_",
        "type": "address"
    }, {"internalType": "address", "name": "flopper_", "type": "address"}],
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
    "constant": true,
    "inputs": [],
    "name": "Ash",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "Sin",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "bump",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "cage",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "usr", "type": "address"}],
    "name": "deny",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "dump",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "uint256", "name": "tab", "type": "uint256"}],
    "name": "fess",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "bytes32", "name": "what", "type": "bytes32"}, {
        "internalType": "uint256",
        "name": "data",
        "type": "uint256"
    }],
    "name": "file",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "bytes32", "name": "what", "type": "bytes32"}, {
        "internalType": "address",
        "name": "data",
        "type": "address"
    }],
    "name": "file",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "flap",
    "outputs": [{"internalType": "uint256", "name": "id", "type": "uint256"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "flapper",
    "outputs": [{"internalType": "contract FlapLike", "name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "uint256", "name": "era", "type": "uint256"}],
    "name": "flog",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [],
    "name": "flop",
    "outputs": [{"internalType": "uint256", "name": "id", "type": "uint256"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "flopper",
    "outputs": [{"internalType": "contract FlopLike", "name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "uint256", "name": "rad", "type": "uint256"}],
    "name": "heal",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "hump",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "uint256", "name": "rad", "type": "uint256"}],
    "name": "kiss",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "live",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "usr", "type": "address"}],
    "name": "rely",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "name": "sin",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "sump",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "vat",
    "outputs": [{"internalType": "contract VatLike", "name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "wait",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"internalType": "address", "name": "", "type": "address"}],
    "name": "wards",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}];
const VAT_ABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":true,"inputs":[{"indexed":true,"internalType":"bytes4","name":"sig","type":"bytes4"},{"indexed":true,"internalType":"bytes32","name":"arg1","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"arg2","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"arg3","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"LogNote","type":"event"},{"constant":true,"inputs":[],"name":"Line","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"cage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"can","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"dai","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"debt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"}],"name":"deny","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"},{"internalType":"bytes32","name":"what","type":"bytes32"},{"internalType":"uint256","name":"data","type":"uint256"}],"name":"file","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"what","type":"bytes32"},{"internalType":"uint256","name":"data","type":"uint256"}],"name":"file","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"},{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"flux","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"i","type":"bytes32"},{"internalType":"address","name":"u","type":"address"},{"internalType":"int256","name":"rate","type":"int256"}],"name":"fold","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"},{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"int256","name":"dink","type":"int256"},{"internalType":"int256","name":"dart","type":"int256"}],"name":"fork","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"i","type":"bytes32"},{"internalType":"address","name":"u","type":"address"},{"internalType":"address","name":"v","type":"address"},{"internalType":"address","name":"w","type":"address"},{"internalType":"int256","name":"dink","type":"int256"},{"internalType":"int256","name":"dart","type":"int256"}],"name":"frob","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"name":"gem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"i","type":"bytes32"},{"internalType":"address","name":"u","type":"address"},{"internalType":"address","name":"v","type":"address"},{"internalType":"address","name":"w","type":"address"},{"internalType":"int256","name":"dink","type":"int256"},{"internalType":"int256","name":"dart","type":"int256"}],"name":"grab","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"rad","type":"uint256"}],"name":"heal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"}],"name":"hope","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"ilks","outputs":[{"internalType":"uint256","name":"Art","type":"uint256"},{"internalType":"uint256","name":"rate","type":"uint256"},{"internalType":"uint256","name":"spot","type":"uint256"},{"internalType":"uint256","name":"line","type":"uint256"},{"internalType":"uint256","name":"dust","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"}],"name":"init","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"live","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"rad","type":"uint256"}],"name":"move","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"}],"name":"nope","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"}],"name":"rely","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"sin","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"ilk","type":"bytes32"},{"internalType":"address","name":"usr","type":"address"},{"internalType":"int256","name":"wad","type":"int256"}],"name":"slip","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"u","type":"address"},{"internalType":"address","name":"v","type":"address"},{"internalType":"uint256","name":"rad","type":"uint256"}],"name":"suck","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"name":"urns","outputs":[{"internalType":"uint256","name":"ink","type":"uint256"},{"internalType":"uint256","name":"art","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"vice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"wards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];

const FLAP_ADDRESS = "0xdfE0fb1bE2a52CDBf8FB962D5701d7fd0902db9f";
const MEDIANIZER_ADDRESS = "0x99041F808D598B782D5a3e498681C2452A31da08";
const VOW_ADDRESS = "0xA950524441892A31ebddF91d3cEEFa04Bf454466";
const VAT_ADDRESS = "0x35D1b3F3D7966A1DFe207aa4514C12a259A0492B";

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
    var infura = "wss://mainnet.infura.io/ws/v3/24537662f67d4531a1e43e486ea45eca";
    var provider = new Web3.providers.WebsocketProvider(infura);
    web3 = new Web3(provider);
    console.log("Using remote web3 provider");
}

// Get instance of contracts
const flapContract = new web3.eth.Contract(FLAPPER_ABI, FLAP_ADDRESS);
const osmContract = new web3.eth.Contract(MEDIANIZER_ABI, MEDIANIZER_ADDRESS);
const vowContract = new web3.eth.Contract(VOW_ABI, VOW_ADDRESS);
const vatContract = new web3.eth.Contract(VAT_ABI, VAT_ADDRESS);

// Get new events and populate last events global variable
var events = [];
var getFlipEvents = function getFlipEvents(fromBlockNumber) {
    console.log(`Get auction events from block: ${fromBlockNumber}`);
    return flapContract.getPastEvents("allEvents", {
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
var medianizerPrice = 0;
var updateMedianizerPrice = function getOsmPrice(blockNumber) {
    return osmContract.getPastEvents("LogValue", {
            fromBlock: blockNumber - 2000,
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
                medianizerPrice = parseFloat(price).toFixed(2);
            } else {
                console.log(err);
            }
            return medianizerPrice;
        });
};

// Events types signatures to be processed
const TEND = "0x4b43ed1200000000000000000000000000000000000000000000000000000000";
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
        let eventType = "UNKNOWN";
        let flapId = 0;

        // Event types cases
        if (event.event === "Kick") {
            eventType = "KICK";
            flapId = parseInt(event.returnValues.id, 10);
            values += "ID: <b>" + flapId + "</b> | ";

            let lot = event.returnValues.lot / 10 ** 27 / 10 ** 18;
            values += "lot: " + lot.toFixed(2) + " dai | ";

            let tab = event.returnValues.bid / 10 ** 18;
            values += "bid: " + tab.toFixed(4) + " mkr | ";

            // Clear and Get current price value
            medianizerPrice = 0;
            await updateMedianizerPrice(event.blockNumber);

            // Register KICK over Auction dictionary
            auctions[flapId] = {
                id: flapId,
                kickDate: blockDate.toUTCString().slice(5),
                kickPrice: medianizerPrice.toString(),
                kickLot: lot,
                tends: 0,
                dents: 0,
                bid: tab,
                bidFrom: null,
                bidDate: null,
                bidPrice: null,
                lot: null,
                tab: 0,
                guy: null,
                paidPrice: null,
                dealDate: null,
                dealPrice: null,
                state: "OPEN"
            };

            if (medianizerPrice > 0) {
                values += "Maker MED Price: $" + auctions[flapId]["kickPrice"] + " | ";
            } else {
                values += "Maker MED Price: $---,-- | ";
            }
        } else if (event.raw.topics[0] === TEND) {
            eventType = "TEND";
            flapId = parseInt(event.raw.topics[2], 16);

            // Avoid showing TEND without a KICK
            if (!auctions[flapId]) {
                continue;
            }

            values += "ID: <b>" + flapId + "</b> | ";

            let lot = parseInt(event.raw.topics[3], 16) / 10 ** 27 / 10 ** 18;
            values += "lot: " + lot.toFixed(2) + " dai | ";

            let raw = event.raw.data.slice(288, -248);
            let bid = parseInt(raw, 16) / 10 ** 18;
            values += "bid: " + bid.toFixed(3) + " mkr | ";

            medianizerPrice = 0;
            await updateMedianizerPrice(event.blockNumber);

            // Register TEND over Auction dictionary
            auctions[flapId]["tends"] += 1;
            auctions[flapId]["bid"] = bid;
            auctions[flapId]["bidDate"] = blockDate.toUTCString().slice(5);
            auctions[flapId]["bidPrice"] = medianizerPrice.toString();
            auctions[flapId]["lot"] = lot;
            auctions[flapId]["paidPrice"] = (lot / bid).toFixed(2);

            if (medianizerPrice > 0) {
                // Calculate diff percentage
                let diff = ((auctions[flapId]["paidPrice"] / auctions[flapId]["bidPrice"]) - 1) * 100;
                if (diff > 0) {
                    values += "+" + diff.toFixed(2) + " % | ";
                } else {
                    values += "" + diff.toFixed(2) + " % | ";
                }
                values += "Price: $" + auctions[flapId]["bidPrice"] + " | ";
            } else {
                values += "--,-- % | Price: $---,-- | ";
            }
        } else if (event.raw.topics[0] === DEAL) {
            eventType = "DEAL";
            flapId = parseInt(event.raw.topics[2], 16);

            // Avoid showing DEAL without a KICK
            if (!auctions[flapId]) {
                continue;
            }

            values += "ID: <b>" + flapId + "</b> | ";

            medianizerPrice = 0;
            await updateMedianizerPrice(event.blockNumber);

            // Register DEAL over Auction dictionary
            auctions[flapId]["dealDate"] = blockDate.toUTCString().slice(5);
            auctions[flapId]["dealPrice"] = medianizerPrice.toString();
            auctions[flapId]["state"] = "CLOSE";

            if (!medianizerPrice) {
                values += "Took Rate: $" + auctions[flapId]["paidPrice"] + " dai/mkr (+-.--%) | ";
                values += "--,-- % | Price: $---,-- | ";
            } else {
                values += "Took Rate: $" + auctions[flapId]["paidPrice"] + " dai/mkr ";
                let diff = ((auctions[flapId]["paidPrice"] / auctions[flapId]["dealPrice"]) - 1) * 100;
                if (diff > 0) {
                    values += "(+" + diff.toFixed(2) + "%) ~ ";
                    values += `<b class='detail-btn' onclick='showAuctionDetails(${flapId})'>Won! 📋</b> | `
                } else {
                    values += "(" + diff.toFixed(2) + "%) ~ ";
                    values += `<b class='detail-btn' onclick='showAuctionDetails(${flapId})'>Lost 📋</b> | `
                }
                values += "Price: $" + auctions[flapId]["dealPrice"] + " | ";
            }
        } else if (event.raw.topics[0] === TICK) {
            eventType = "TICK";
            flapId = parseInt(event.raw.topics[2], 16);
            values += "ID: <b>" + flapId + "</b> | ";
            values += "Time extended! | ";
        } else if (event.raw.topics[0] === FILE) {
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
            if (auctions[flapId]) {
                if (eventType === "TEND") {
                    auctions[flapId]["bidFrom"] = tx.from;
                }
                auctions[flapId]["txFrom"] = tx.from;
            }
            let txHref = `https://etherscan.io/tx/${event.transactionHash}`;
            let txLink = `<a target="_blank" href="${txHref}">Tx:..${event.transactionHash.slice(-3)} Info</a>`;
            values += `from: ${from} | ${txLink} >>`;
        });

        // Get old page and Render new line in app
        let oldPage = document.getElementById("app").innerHTML;
        let newLine = "";
        if (someID === 0 || someID === flapId) {
            newLine = "<div class=\"row flip-" + flapId + " " + eventType.toLowerCase() + "\">" +
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
        // Avoid running the some events are currently being processed
        if (!eventsLoaded) return;

        // Update async globals
        updateGlobals();

        // Clear events and fetch new ones
        eventsLoaded = false;
        let newBlockNumber = result.number;
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

function hideEmptyMessage() {
    let noResultsTag = document.getElementById("no-results");
    noResultsTag.style.display = "none";
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
    let flapId = $("#fliter-id").val();
    let allRows = $(".row");
    allRows.hide();
    if (flapId) {
        $(".flip-" + flapId).show()
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
    msg += `- LOT: ${auction.kickLot.toLocaleString('en')} dai - BID: ${auction.bid.toLocaleString('en')} mkr <br/>`;
    msg += `- MKR MEDIANIZER: $${auction.kickPrice} mkr/dai <br/><br/>`;

    msg += `Bids received: ${auction.tends + auction.dents} <br/><br/>`;

    msg += 'Last Bid:<br/>';
    msg += `- DATE: ${auction.bidDate} <br/>`;
    msg += `- FROM: ${auction.bidFrom} <br/>`;
    msg += `- LOT: ${auction.lot.toLocaleString('en')} dai - BID: ${auction.bid.toLocaleString('en')} mkr <br/>`;
    msg += `- TOOK RATE: $${auction.paidPrice} mkr/dai <br/>`;
    msg += `- MKR MEDIANIZER: $${auction.bidPrice} mkr/dai <br/><br/>`;

    msg += 'Ended: <br/>';
    msg += `- DATE: ${auction.dealDate} <br/>`;
    msg += `- FROM: ${auction.txFrom} <br/>`;
    msg += `- TOOK RATE: $${auction.paidPrice} mkr/dai <br/>`;
    msg += `- MKR MEDIANIZER: $${auction.dealPrice} mkr/dai <br/><br/>`;


    msg += 'Results: <br/>';
    let priceDiff = ((auction["paidPrice"] / auction["dealPrice"]) - 1) * 100;
    msg += `- TOOK RATE DIFF: ${priceDiff.toFixed(2)}% <br/>`;
    let daiProfit =  auction.lot - (auction.bid * auction.dealPrice);
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

    vatContract.methods.dai(VOW_ADDRESS).call().then(function (value) {
        let surplus = value  / 10 ** 45;
        vatContract.methods.sin(VOW_ADDRESS).call().then(function (value) {
            let vow_debt = value  / 10 ** 45;
            vowContract.methods.hump().call().then(function (value) {
                let hump = value  / 10 ** 45;
                let available = Math.round((surplus - vow_debt - hump) * 100 ) / 100;
                globalsPanel.find('#available').text(available.toLocaleString('en'));
            });
        });
    });

    vowContract.methods.bump().call().then(function (value) {
        let bump = Math.round((value  / 10 ** 45) * 10) / 10;
        globalsPanel.find('#bump').text(bump.toLocaleString('en'));
    });

    flapContract.methods.beg().call().then(function (value) {
        let beg = ((value / 10 ** 18) - 1) * 100;
        globalsPanel.find('#beg').text(beg.toFixed(2));
    });

    flapContract.methods.ttl().call().then(function (value) {
        let ttl = value / 60;
        globalsPanel.find('#ttl').text(ttl.toFixed(1));
    });

    flapContract.methods.tau().call().then(function (value) {
        let tau = value / 60 / 60;
        globalsPanel.find('#tau').text(tau.toFixed(1));
    });

    let lastBlock = await web3.eth.getBlockNumber();
    await updateMedianizerPrice(lastBlock);
    globalsPanel.find('#mkr').text("$" + medianizerPrice);
}

async function loadAllHistory() {
    if (usingRemoteProvider) {
        let msg = 'Sorry, this feature is disabled using the remote ETH provider.\n\n' +
            'Try to install MetaMask and select Mainnet network';
        alert(msg);
        return;
    }

    hideFilterSearch();
    hideEmptyMessage();
    events = [];
    auctions = {};
    eventsLoaded = false;
    blocksBack = await web3.eth.getBlockNumber();
    fetchAuctions(0);
}


// ## Start Main function
updateGlobals();
fetchAuctions(0);

// Only in DEV version (comment this line before minimize it)
//console.log('Loaded not optimized file');

// ## Subscribe to new blocks
setTimeout(function () {
    console.log('Getting new data from chain...');
    web3.eth.subscribe('newBlockHeaders', newBlock);
}, 5000);