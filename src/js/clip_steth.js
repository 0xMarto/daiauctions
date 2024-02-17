"use strict";

// Main scripts constants
const CLIPPER_ABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "vat_",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spotter_",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "dog_",
                "type": "address"
            },
            {
                "internalType": "bytes32",
                "name": "ilk_",
                "type": "bytes32"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "usr",
                "type": "address"
            }
        ],
        "name": "Deny",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "what",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "data",
                "type": "uint256"
            }
        ],
        "name": "File",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "what",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "data",
                "type": "address"
            }
        ],
        "name": "File",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "top",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tab",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "lot",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "usr",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "kpr",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "coin",
                "type": "uint256"
            }
        ],
        "name": "Kick",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "top",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tab",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "lot",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "usr",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "kpr",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "coin",
                "type": "uint256"
            }
        ],
        "name": "Redo",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "usr",
                "type": "address"
            }
        ],
        "name": "Rely",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "max",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "owe",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tab",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "lot",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "usr",
                "type": "address"
            }
        ],
        "name": "Take",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "Yank",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "active",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "buf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "calc",
        "outputs": [
            {
                "internalType": "contract AbacusLike",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "chip",
        "outputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "count",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "cusp",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "usr",
                "type": "address"
            }
        ],
        "name": "deny",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "dog",
        "outputs": [
            {
                "internalType": "contract DogLike",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "what",
                "type": "bytes32"
            },
            {
                "internalType": "uint256",
                "name": "data",
                "type": "uint256"
            }
        ],
        "name": "file",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "what",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "data",
                "type": "address"
            }
        ],
        "name": "file",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "getStatus",
        "outputs": [
            {
                "internalType": "bool",
                "name": "needsRedo",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "ilk",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tab",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "lot",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "usr",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "kpr",
                "type": "address"
            }
        ],
        "name": "kick",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "kicks",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "list",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "kpr",
                "type": "address"
            }
        ],
        "name": "redo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "usr",
                "type": "address"
            }
        ],
        "name": "rely",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "sales",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "pos",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tab",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "lot",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "usr",
                "type": "address"
            },
            {
                "internalType": "uint96",
                "name": "tic",
                "type": "uint96"
            },
            {
                "internalType": "uint256",
                "name": "top",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "spotter",
        "outputs": [
            {
                "internalType": "contract SpotterLike",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "stopped",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "tail",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amt",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "max",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "who",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "take",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "tip",
        "outputs": [
            {
                "internalType": "uint192",
                "name": "",
                "type": "uint192"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "vat",
        "outputs": [
            {
                "internalType": "contract VatLike",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "vow",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "wards",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "yank",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
const MEDIANIZER_ABI = [{
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "uint256", "name": "val", "type": "uint256"}, {
        "indexed": false,
        "internalType": "uint256",
        "name": "age",
        "type": "uint256"
    }],
    "name": "LogMedianPrice",
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
    "name": "age",
    "outputs": [{"internalType": "uint32", "name": "", "type": "uint32"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "bar",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"internalType": "address", "name": "", "type": "address"}],
    "name": "bud",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
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
    "inputs": [{"internalType": "address[]", "name": "a", "type": "address[]"}],
    "name": "diss",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "a", "type": "address"}],
    "name": "diss",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "address[]", "name": "a", "type": "address[]"}],
    "name": "drop",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "address[]", "name": "a", "type": "address[]"}],
    "name": "kiss",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "a", "type": "address"}],
    "name": "kiss",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "address[]", "name": "a", "type": "address[]"}],
    "name": "lift",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"internalType": "address", "name": "", "type": "address"}],
    "name": "orcl",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "peek",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}, {
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "uint256[]", "name": "val_", "type": "uint256[]"}, {
        "internalType": "uint256[]",
        "name": "age_",
        "type": "uint256[]"
    }, {"internalType": "uint8[]", "name": "v", "type": "uint8[]"}, {
        "internalType": "bytes32[]",
        "name": "r",
        "type": "bytes32[]"
    }, {"internalType": "bytes32[]", "name": "s", "type": "bytes32[]"}],
    "name": "poke",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "read",
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
    "constant": false,
    "inputs": [{"internalType": "uint256", "name": "bar_", "type": "uint256"}],
    "name": "setBar",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"internalType": "uint8", "name": "", "type": "uint8"}],
    "name": "slot",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
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
    "constant": true,
    "inputs": [],
    "name": "wat",
    "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}];
const DOG_ABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "vat_",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "ilk",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "urn",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "ink",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "art",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "due",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "clip",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "Bark",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "Cage",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "usr",
                "type": "address"
            }
        ],
        "name": "Deny",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "ilk",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "rad",
                "type": "uint256"
            }
        ],
        "name": "Digs",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "what",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "data",
                "type": "uint256"
            }
        ],
        "name": "File",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "what",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "data",
                "type": "address"
            }
        ],
        "name": "File",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "ilk",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "what",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "data",
                "type": "uint256"
            }
        ],
        "name": "File",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "ilk",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "what",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "clip",
                "type": "address"
            }
        ],
        "name": "File",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "usr",
                "type": "address"
            }
        ],
        "name": "Rely",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "Dirt",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "Hole",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "ilk",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "urn",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "kpr",
                "type": "address"
            }
        ],
        "name": "bark",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "cage",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "ilk",
                "type": "bytes32"
            }
        ],
        "name": "chop",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "usr",
                "type": "address"
            }
        ],
        "name": "deny",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "ilk",
                "type": "bytes32"
            },
            {
                "internalType": "uint256",
                "name": "rad",
                "type": "uint256"
            }
        ],
        "name": "digs",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "ilk",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "what",
                "type": "bytes32"
            },
            {
                "internalType": "uint256",
                "name": "data",
                "type": "uint256"
            }
        ],
        "name": "file",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "what",
                "type": "bytes32"
            },
            {
                "internalType": "uint256",
                "name": "data",
                "type": "uint256"
            }
        ],
        "name": "file",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "what",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "data",
                "type": "address"
            }
        ],
        "name": "file",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "ilk",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "what",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "clip",
                "type": "address"
            }
        ],
        "name": "file",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "ilks",
        "outputs": [
            {
                "internalType": "address",
                "name": "clip",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "chop",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "hole",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "dirt",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "live",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "usr",
                "type": "address"
            }
        ],
        "name": "rely",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "vat",
        "outputs": [
            {
                "internalType": "contract VatLike",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "vow",
        "outputs": [
            {
                "internalType": "contract VowLike",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "wards",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];
const CALC_ABI = [
    {
      "inputs": [],
      "name": "cut",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "top",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "dur",
          "type": "uint256"
        }
      ],
      "name": "price",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "step",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tau",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
];

const CLIP_ADDRESS = "0x49A33A28C4C7D9576ab28898F4C9ac7e52EA457A";
const CALC_ADDRESS = "0x15282b886675cc1Ce04590148f456428E87eaf13";
const MEDIANIZER_ADDRESS = "0x2F73b6567B866302e132273f67661fB89b5a66F2";
const DOG_ADDRESS = "0x135954d155898D42C90D2a57824C690e0c7BEf1B";
const ILK = "0x5753544554482d41000000000000000000000000000000000000000000000000";
const SYMBOL = "steth";
const SYMBOL_UP = SYMBOL.toUpperCase();
const SYMBOL_CAP = SYMBOL.charAt(0).toUpperCase() + SYMBOL.slice(1);

let web3;
let usingRemoteProvider = true;
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

let web3Connected = !usingRemoteProvider;
if (usingRemoteProvider) {
    try {
        web3 = new Web3();
        var infura = "wss://mainnet.infura.io/ws/v3/cabe301d837048959747eaa4415846b7";
        var provider = new Web3.providers.WebsocketProvider(infura);
        provider.on('error', e => {web3Connected = false;});
        provider.on('end', e => {web3Connected = false;});
        web3.setProvider(provider);
        console.log("Using remote web3 provider");
        web3Connected = true;
    } catch (e) {
        web3Connected = false;
    }
}


// Get instance of contracts
const clipContract = new web3.eth.Contract(CLIPPER_ABI, CLIP_ADDRESS);
const medianizerContract = new web3.eth.Contract(MEDIANIZER_ABI, MEDIANIZER_ADDRESS);
const dogContract = new web3.eth.Contract(DOG_ABI, DOG_ADDRESS);
const calcContract = new web3.eth.Contract(CALC_ABI, CALC_ADDRESS);

// Get new events and populate last events global variable
var events = [];

async function getFlipEvents(fromBlockNumber) {
    console.log(`Get auction events from block: ${fromBlockNumber}`);
    return clipContract.getPastEvents("allEvents", {
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
}

// Get the medianizer price at a given block number
let cachePrice = {'block': 0, 'val': 0};

async function getMedPrice(blockNumber) {
    if (cachePrice.block === blockNumber) {
        return cachePrice.val;
    }
    let lastPrice = 0;
    await medianizerContract.getPastEvents("LogMedianPrice", {
            fromBlock: blockNumber - 1000,
            toBlock: blockNumber
        },
        function (err, result) {
            if (!err) {
                var logEvent = result[result.length - 1];
                if (logEvent) {
                    let priceInWei = web3.utils.toBN(logEvent.returnValues[0]);
                    let price = web3.utils.fromWei(priceInWei);
                    lastPrice = Number(parseFloat(price).toFixed(4));
                }
            } else {
                console.log(err);
            }
        }
    );
    cachePrice = {'block': blockNumber, 'val': lastPrice};
    return lastPrice;
}

// Get the block date for a given block number
let cacheDate = {'block': 0, 'val': new Date()};

async function getBlockDate(blockNumber) {
    if (cacheDate.block === blockNumber) {
        return cacheDate.val;
    }
    let lastDate = new Date();
    await web3.eth.getBlock(blockNumber).then(function (block) {
            if (block) {
                let blockTime = block.timestamp;
                lastDate = new Date(blockTime * 1000);
            } else {
                console.log(`Block ${blockNumber}: error getting date`);
            }
        }
    );
    cacheDate = {'block': blockNumber, 'val': lastDate};
    return lastDate;
}

// Events types signatures to be processed
const KICK = "0x7c5bfdc0a5e8192f6cd4972f382cec69116862fb62e6abff8003874c58e064b8";
const TAKE = "0x05e309fd6ce72f2ab888a20056bb4210df08daed86f21f95053deb19964d86b1";
const REDO = "0x275de7ecdd375b5e8049319f8b350686131c219dd4dc450a08e9cf83b03c865f";
const FILE = "0xe986e40cc8c151830d4f61050f4fb2e4add8567caad2d5f5496f9158e91fe4c7";
const FILE_CONTRACT = "0x8fef588b5fc1afbf5b2f06c1a435d513f208da2e6704c3d8f0e0ec91167066ba";
const DENY = "0x184450df2e323acec0ed3b5c7531b81f9b4cdef7914dfd4c0a4317416bb5251b";
const RELY = "0xdd0e34038ac38b2a1ce960229778ac48a8719bc900b6c4f8d0475c6e8b385a60";

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

        // Get and populate event date
        let blockDate = await getBlockDate(event.blockNumber);
        // let dateFormat = {'day': 'numeric', 'month': 'short', 'year': 'numeric'};
        values = blockDate.toLocaleString('en-GB') + " | ";

        let eventType = "Unknown";
        let saleId = 0;

        // Event types cases
        if (event.raw.topics[0] === KICK) {
            // console.log(event);
            eventType = "KICK";
            saleId = parseInt(event.returnValues.id, 10);
            values += "ID: <b>" + saleId + "</b> | ";

            let lot = event.returnValues.lot / 10 ** 18;
            values += "lot: " + lot.toFixed(2) + ` ${SYMBOL} | `;

            let tab = event.returnValues.tab / 10 ** 27 / 10 ** 18;
            values += "tab: " + tab.toFixed(2) + " dai | ";

            let top = event.returnValues.top / 10 ** 27;
            values += "top: $" + top.toFixed(2) + " | ";

            let kpr = event.returnValues.kpr.slice(0, 6) + "..." + event.returnValues.kpr.slice(-6);
            values += "kpr: " + kpr + " | ";

            let medPrice = await getMedPrice(event.blockNumber);
            if (medPrice > 0) {
                values += `${SYMBOL_CAP} Price: $${medPrice.toFixed(2)} | `;
            } else {
                values += `${SYMBOL_CAP} Price: $---.-- | `;
                medPrice = 0;
            }

            // Register KICK over Auction dictionary
            auctions[saleId] = {
                id: saleId,
                kickDate: blockDate.toUTCString().slice(5),
                kickPrice: medPrice.toFixed(2),
                kickLot: lot,
                top: top.toFixed(2),
                keeper: event.returnValues.kpr,
                redos: 0,
                takes: [],
                bid: null,
                bidFrom: null,
                bidDate: null,
                bidPrice: null,
                lot: lot,
                tab: tab,
                guy: null,
                dealPrice: null,
                paidPrice: null,
                state: "OPEN"
            };

        } else if (event.raw.topics[0] === TAKE) {
            // console.log(event);
            eventType = "TAKE";
            saleId = parseInt(event.raw.topics[1], 16);

            if (!auctions[saleId]) {
                continue;
            }

            values += "ID: <b>" + saleId + "</b> | ";

            let bid = event.returnValues.owe / 10 ** 27 / 10 ** 18;
            let paidPrice = event.returnValues.price / 10 ** 27;
            let lot = bid / paidPrice;
            let tab = event.returnValues.tab / 10 ** 27 / 10 ** 18;

            values += "lot: " + lot.toFixed(2) + ` ${SYMBOL} | `;
            values += "owe: " + bid.toFixed(2) + " dai | ";

            let medPrice = await getMedPrice(event.blockNumber);

            // Register last TAKE over Auction dictionary
            auctions[saleId]["bid"] = bid;
            auctions[saleId]["bidDate"] = blockDate.toUTCString().slice(5);
            auctions[saleId]["bidPrice"] = medPrice.toString();
            auctions[saleId]["lot"] = lot;
            auctions[saleId]["tab"] = tab;
            auctions[saleId]["paidPrice"] = paidPrice.toFixed(2);
            auctions[saleId]["dealPrice"] = medPrice? medPrice.toFixed(2) : auctions[saleId]["paidPrice"];

            // Register TAKE in auction takes list
            let takeNumber = auctions[saleId]["takes"].length;
            auctions[saleId]["takes"].push({
                takeDate: blockDate.toUTCString().slice(5),
                lot: lot,
                bid: bid,
                paidPrice: paidPrice.toFixed(2),
                medPrice: medPrice.toFixed(2)
            });

            if (!medPrice) {
                values += "paid: $" + auctions[saleId]["paidPrice"] + " (+-.--%) | ";
                values += "--.-- % | Price: $---.-- | ";
            } else {
                values += "paid: $" + auctions[saleId]["paidPrice"] + " ";
                let diff = ((auctions[saleId]["paidPrice"] / auctions[saleId]["dealPrice"]) - 1) * 100;
                if (diff > 0) {
                    values += "(+" + diff.toFixed(2) + "%) ~ ";
                    values += `<b class='detail-btn' onclick='showAuctionDetails(${saleId},${takeNumber})'>Lost 📋</b> | `
                } else {
                    values += "(" + diff.toFixed(2) + "%) ~ ";
                    values += `<b class='detail-btn' onclick='showAuctionDetails(${saleId},${takeNumber})'>Won! 📋</b> | `
                }
                values += `${SYMBOL_CAP} Price: $${auctions[saleId]["dealPrice"]} | `;
            }

            // Check auction close condition
            if (lot === 0 || tab === 0) {
                auctions[saleId]["state"] = "CLOSE";
            }

        } else if (event.raw.topics[0] === REDO) {
            // console.log(event);
            eventType = "REDO";
            saleId = parseInt(event.returnValues.id, 10);
            values += "ID: <b>" + saleId + "</b> | ";

            let lot = event.returnValues.lot / 10 ** 18;
            values += "lot: " + lot.toFixed(2) + ` ${SYMBOL} | `;

            let tab = event.returnValues.tab / 10 ** 27 / 10 ** 18;
            values += "tab: " + tab.toFixed(2) + " dai | ";

            let top = event.returnValues.top / 10 ** 27;
            values += "top: $" + top.toFixed(2) + " | ";

            let kpr = event.returnValues.kpr.slice(0, 6) + "..." + event.returnValues.kpr.slice(-6);
            values += "kpr: " + kpr + " | ";

            let medPrice = await getMedPrice(event.blockNumber);
            if (medPrice > 0) {
                values += `${SYMBOL_CAP} Price: $${medPrice.toFixed(2)} | `;
            } else {
                values += `${SYMBOL_CAP} Price: $---.-- | `;
                medPrice = 0;
            }

            // Register REDO over Auction dictionary
            auctions[saleId]['kickDate'] = blockDate.toUTCString().slice(5);
            auctions[saleId]['kickPrice'] = medPrice.toFixed(2);
            auctions[saleId]['kickLot'] = lot;
            auctions[saleId]['top'] = top.toFixed(2);
            auctions[saleId]['keeper'] = event.returnValues.kpr;
            auctions[saleId]['redos'] += 1;
            auctions[saleId]['bid'] = null;
            auctions[saleId]['bidFrom'] = null;
            auctions[saleId]['bidDate'] = null;
            auctions[saleId]['bidPrice'] = null;
            auctions[saleId]['lot'] = lot;
            auctions[saleId]['guy'] = null;
            auctions[saleId]['dealPrice'] = null;
            auctions[saleId]['paidPrice'] = null;
            auctions[saleId]['state'] = "OPEN";

        } else if (event.raw.topics[0] === FILE || event.raw.topics[0] === FILE_CONTRACT) {
            // console.log(event);
            auctions[0] = {id: 0, type: "FILE"};
            eventType = "FILE";
            const CUSP = "0x6375737000000000000000000000000000000000000000000000000000000000";
            const TAIL = "0x7461696c00000000000000000000000000000000000000000000000000000000";
            const BUF = "0x6275660000000000000000000000000000000000000000000000000000000000";
            const TIP = "0x7469700000000000000000000000000000000000000000000000000000000000";
            const CHIP = "0x6368697000000000000000000000000000000000000000000000000000000000";
            const VOW = "0x766f770000000000000000000000000000000000000000000000000000000000";
            const CALC = "0x63616c6300000000000000000000000000000000000000000000000000000000";
            if (event.raw.topics[1] === TAIL) {
                values += "WHAT: <b> TAIL </b> (maximum auction duration) | ";
                let file_value = parseInt(event.raw.data) / 60;
                values += "VALUE: <b>" + file_value.toFixed(2) + " min</b> | ";
            } else if (event.raw.topics[1] === CUSP) {
                values += "WHAT: <b> CUSP </b> (minimum auction end price) | ";
                let file_value = ((parseInt(event.raw.data) / 10 ** 27) - 1) * 100;
                values += "VALUE: <b>" + file_value.toFixed(2) + " %</b> | ";
            } else if (event.raw.topics[1] === BUF) {
                values += "WHAT: <b> BUF </b> (starting price increment) | ";
                let file_value = ((parseInt(event.raw.data) / 10 ** 27) - 1) * 100;
                values += "VALUE: <b>+" + file_value.toFixed(2) + " %</b> | ";
            } else if (event.raw.topics[1] === TIP) {
                values += "WHAT: <b> TIP </b> (kick fix reward) | ";
                let file_value = parseInt(event.raw.data) / 10 ** 45;
                values += "VALUE: <b>" + file_value.toFixed(2) + " dai</b> | ";
            } else if (event.raw.topics[1] === CHIP) {
                values += "WHAT: <b> CHIP </b> (kick variable reward) | ";
                let file_value = (parseInt(event.raw.data) / 10 ** 18) * 100;
                values += "VALUE: <b>" + file_value.toFixed(2) + " %</b> | ";
            } else if (event.raw.topics[1] === VOW) {
                values += "WHAT: <b> VOW </b> (System Stabilizer Contract) | ";
                let file_value = `0x${event.raw.data.slice(-40)}`;
                values += "VALUE: <b>" + file_value + "</b> | ";
            } else if (event.raw.topics[1] === CALC) {
                values += "WHAT: <b> CALC </b> (Auction Price Manager) | ";
                let file_value = `0x${event.raw.data.slice(-40)}`;
                values += "VALUE: <b>" + file_value + "</b> | ";
            } else {
                values += "WHAT: <b>UNKNOWN</b> | ";
                console.log(event.raw.topics);
            }
            values += "New Update! | ";
        } else if (event.raw.topics[0] === RELY) {
            eventType = "RELY";
            auctions[0] = {id: 0, type: eventType};
            values += "WHAT: <b>Allow to call auth'ed methods --</b> | ";
            let usr = event.raw.topics[1];
            values += "TO: <b>0x" + usr.slice(-40) + "</b> | ";
        } else if (event.raw.topics[0] === DENY) {
            eventType = "DENY";
            auctions[0] = {id: 0, type: eventType};
            values += "WHAT: <b>Disallow to call auth'ed methods</b> | ";
            let usr = event.raw.topics[1];
            values += "TO: <b>0x" + usr.slice(-40) + "</b> | ";
        } else {
            auctions[0] = {id: 0, type: "UNKNOWN"};
            console.log("UNKNOWN event:");
            console.log(event);
        }

        // Get event tx info
        await web3.eth.getTransaction(event.transactionHash).then(function (tx) {
            let from = tx.from.slice(0, 6) + "..." + tx.from.slice(-4);
            if (auctions[saleId]) {
                if (eventType === "TAKE") {
                    auctions[saleId]["bidFrom"] = tx.from;
                }
                auctions[saleId]["txFrom"] = tx.from;
            }
            let txHref = `https://etherscan.io/tx/${event.transactionHash}`;
            let txLink = `<a target="_blank" href="${txHref}">Tx:..${event.transactionHash.slice(-3)} Info</a>`;
            values += `from: ${from} | ${txLink} >>`;
        });

        let rowType = eventType.toLowerCase();
        if (auctions[saleId] && auctions[saleId]["state"] === "CLOSE") {
            rowType += ` deal`;
        }

        // Get old page and Render new line in app
        let oldPage = document.getElementById("app").innerHTML;
        let newLine = "";
        if (someID === 0 || someID === saleId) {
            newLine = "<div class=\"row flip-" + saleId + " " + rowType + "\">";
            newLine += eventType + " >> " + values;
            newLine += "</div>";
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

async function loadAllHistory() {
    if (usingRemoteProvider) {
        let msg = 'Sorry, this feature is disabled using the remote Ethereum provider.\n\n' +
            'Try to install MetaMask and select the correct network';
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

function playAudio() {
    let audio = document.getElementById('audio-special');
    audio.play();
    audio.style.display = "inline";
}

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

async function updateGlobals() {
    let globalsPanel = $('#globals');

    dogContract.methods.ilks(ILK).call().then(function (value) {
        let chop = ((parseInt(value['chop']) / 10 ** 18) - 1) * 100;
        let dirt = parseInt(value['dirt']) / 10 ** 45;
        let hole = parseInt(value['hole']) / 10 ** 45;
        globalsPanel.find('#chop').text(chop.toFixed(2));
        let numFormat = {minimumFractionDigits: 2, maximumFractionDigits: 2};
        globalsPanel.find('#dirt').text(dirt.toLocaleString('en', numFormat));
        numFormat = {minimumFractionDigits: 0, maximumFractionDigits: 0};
        globalsPanel.find('#hole').text(hole.toLocaleString('en', numFormat));
    });

    dogContract.methods.Dirt().call().then(function (value) {
        let litter = parseInt(value) / 10 ** 45;
        let numFormat = {minimumFractionDigits: 2, maximumFractionDigits: 2};
        $('#litter').text(litter.toLocaleString('en', numFormat));
    });

    dogContract.methods.Hole().call().then(function (value) {
        let box = parseInt(value) / 10 ** 45;
        let numFormat = {minimumFractionDigits: 2, maximumFractionDigits: 2};
        $('#box').text(box.toLocaleString('en', numFormat));
    });

    clipContract.methods.buf().call().then(function (value) {
        let buf = (value / 10 ** 27 - 1) * 100;
        let buf_str = buf > 0 ? `+${buf.toFixed(2)}` : `${buf.toFixed(2)}`;
        globalsPanel.find('#buf').text(buf_str);
    });

    clipContract.methods.kicks().call().then(function (value) {
        let kicks = (value) * 1;
        globalsPanel.find('#kicks').text(`${kicks.toFixed(0)}`);
    });

    calcContract.methods.step().call().then(function (value) {
        let step = value * 1;
        globalsPanel.find('#step').text(step.toFixed(2));
    });

    calcContract.methods.cut().call().then(function (value) {
        let cut = Math.abs(((value / 10 ** 27) - 1) * 100);
        globalsPanel.find('#cut').text(cut.toFixed(2));
    });

    let lastBlock = await web3.eth.getBlockNumber();
    let medPrice = await getMedPrice(lastBlock);
    let numFormat = {minimumFractionDigits: 2, maximumFractionDigits: 2};
    globalsPanel.find('#price-med').text("$" + medPrice.toLocaleString('en', numFormat));
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
    let now = new Date().toLocaleString('en-GB');
    lastUpdateTag.innerHTML = `Last Update: ${now}`;
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
        noResultsTag.style.display = "block";
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

function showAuctionDetails(id, takeNumber) {
    let auction = auctions[id];
    if (!auction) {
        alert('Error showing auction details');
        return;
    }

    let detailPanel = $('#auction-details');
    if (detailPanel) {
        detailPanel.hide();
    }

    let msg = `> <b>AUCTION ID: ${id}</b>`;
    msg += '<hr/>';
    let numFormat = {minimumFractionDigits: 2, maximumFractionDigits: 2};

    msg += 'Started: <br/>';
    msg += `- DATE: ${auction.kickDate} <br/>`;
    msg += `- KEEPER: ${auction.keeper} <br/>`;
    msg += `- LOT: ${auction.kickLot.toLocaleString('en', numFormat)} ${SYMBOL} <br/>`;
    msg += `- TAB: ${auction.bid.toLocaleString('en', numFormat)} dai <br/>`;
    msg += `- INITIAL TOP: $${auction.top} <br/>`;
    msg += `- ${SYMBOL_UP} PRICE: $${auction.kickPrice} (Maker Medianizer)<br/><br/>`;

    msg += `Redos received: ${auction.redos} <br/>`;
    msg += `Takes received: ${auction.takes.length} <br/><br/>`;

    if(takeNumber === undefined) {
        msg += 'Last Take:<br/>';
        msg += `- DATE: ${auction.bidDate} <br/>`;
        msg += `- FROM: ${auction.bidFrom} <br/>`;
        msg += `- LOT: ${auction.lot.toLocaleString('en', numFormat)} ${SYMBOL} <br/>`;
        msg += `- OWE: ${auction.bid.toLocaleString('en', numFormat)} dai <br/>`;
        msg += `- PAID PRICE: $${auction.paidPrice} ${SYMBOL}/dai <br/>`;
        msg += `- ${SYMBOL_UP} PRICE: $${auction.bidPrice} (Maker Medianizer)<br/><br/>`;

        msg += 'Results: <br/>';
        let priceDiff = ((auction["paidPrice"] / auction["dealPrice"]) - 1) * 100;
        msg += `- PRICE DIFF: ${priceDiff.toFixed(2)}% <br/>`;
        let daiProfit = (auction.lot * auction.dealPrice) - auction.bid;
        numFormat = {minimumFractionDigits: 2, maximumFractionDigits: 2};
        msg += `- PROFIT: <b>${daiProfit.toLocaleString('en', numFormat)} dai</b>`;
    } else {
        msg += 'This Take:<br/>';
        let takeInfo = auction.takes[takeNumber];

        msg += `- DATE: ${takeInfo.takeDate} <br/>`;
        msg += `- LOT: ${takeInfo.lot.toLocaleString('en', numFormat)} ${SYMBOL} <br/>`;
        msg += `- OWE: ${takeInfo.bid.toLocaleString('en', numFormat)} dai <br/>`;
        msg += `- PAID PRICE: $${takeInfo.paidPrice} ${SYMBOL}/dai <br/>`;
        msg += `- ${SYMBOL_UP} PRICE: $${takeInfo.medPrice} (Maker Medianizer)<br/><br/>`;

        msg += 'Results: <br/>';
        let priceDiff = ((takeInfo.paidPrice / takeInfo.medPrice) - 1) * 100;
        msg += `- PRICE DIFF: ${priceDiff.toFixed(2)}% <br/>`;
        let daiProfit = (takeInfo.lot * takeInfo.medPrice) - takeInfo.bid;
        numFormat = {minimumFractionDigits: 2, maximumFractionDigits: 2};
        msg += `- PROFIT: <b>${daiProfit.toLocaleString('en', numFormat)} dai</b>`;
    }

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


//  Start Main function
updateGlobals();
fetchAuctions(0);

// Only in DEV version (comment this line before minimize it)
//console.log('Loaded not optimized file');

// Subscribe to new blocks
setTimeout(function () {
    if (web3Connected) {
        console.log('Getting new data from chain...');
        web3.eth.subscribe('newBlockHeaders', newBlock);
    } else {
        alert('Ops! Could not connect to Ethereum.\n\nPlease connect Metamask, clear cache and refresh :-)');
    }
}, 4000);
