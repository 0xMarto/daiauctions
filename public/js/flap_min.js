"use strict";

// OSM contract ABI
var FLAPPER_ABI = [{
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
var OSM_ABI = [{
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

var FLAP_ADDRESS = "0xdfE0fb1bE2a52CDBf8FB962D5701d7fd0902db9f";
var OSM_ADDRESS = "0x99041F808D598B782D5a3e498681C2452A31da08";

var web3;
if (typeof window.web3 !== "undefined" &&
    window.web3.currentProvider && window.web3.currentProvider.networkVersion === "1" &&
    window.web3.currentProvider.connection && window.web3.currentProvider.connection.url.slice(0,3) === "wss") {
    web3 = new Web3(window.web3.currentProvider);
} else {
    var infura = "wss://mainnet.infura.io/ws/v3/24537662f67d4531a1e43e486ea45eca";
    var provider = new Web3.providers.WebsocketProvider(infura);
    web3 = new Web3(provider);
    // web3 = new Web3(new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws'))
}

var flapContract = new web3.eth.Contract(FLAPPER_ABI, FLAP_ADDRESS);
var osmContract = new web3.eth.Contract(OSM_ABI, OSM_ADDRESS); // Get events

var events = [];
var getFlipEvents = function getFlipEvents(fromBlockNumber) {
    console.log(`Get auction events from block: ${fromBlockNumber}`);
    return flapContract.getPastEvents("allEvents", {
            fromBlock: fromBlockNumber,
            toBlock: "latest"
        }, // Deploy block: 8925094
        function (err, result) {
            if (!err) {
                console.log("Received Events:", result.length);
                events = result;
            } else {
                console.log(err);
            }
        });
};

var osmPrice = 0;
var getOsmPrice = function getOsmPrice(blockNumber) {
    return osmContract.getPastEvents("LogValue", {
            fromBlock: blockNumber - 500,
            toBlock: blockNumber
        }, // Deploy block: 8925094
        function (err, result) {
            if (!err) {
                var logEvent = result[result.length - 1];

                if (!logEvent) {
                    return 0;
                }

                var priceInWei = web3.utils.toBN(logEvent.returnValues[0]);
                var price = web3.utils.fromWei(priceInWei);
                osmPrice = parseFloat(price).toFixed(3);
                console.log('New price:', osmPrice, blockNumber);
                return price;
            } else {
                console.log(err);
            }
        });
}; // Events Id constant

var TEND = "0x4b43ed1200000000000000000000000000000000000000000000000000000000";
var DEAL = "0xc959c42b00000000000000000000000000000000000000000000000000000000";
var TICK = "0xfc7b6aee00000000000000000000000000000000000000000000000000000000";
var auctions = {};

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

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
    try {
        var _loop = async function _loop() {
            var event = _step.value;
            var values = "";
            var blockDate = void 0;
            await web3.eth.getBlock(event.blockNumber).then(function (block) {
                if (block) {
                    var blockTime = block.timestamp;
                    blockDate = new Date(blockTime * 1000);
                    values = "".concat(blockDate.toLocaleString(), " | ");
                } else {
                    values = "".concat(new Date().toLocaleString(), " | ");
                }
            });
            var eventType = "Unknown";
            var flipId = 0; // Event types cases

            if (event.event === "Kick") {
                eventType = "KICK";
                flipId = parseInt(event.returnValues.id, 10);
                values += "ID: <b>".concat(flipId, "</b> | ");
                var lot = event.returnValues.lot / 10 ** 27 / 10 ** 18;
                values += "lot: ".concat(lot.toFixed(2), " mkr | "); //values += `bid: ${event.returnValues.bid} | `;

                var tab = event.returnValues.bid / 10 ** 18;
                values += "bid: ".concat(tab.toFixed(3), " mkr | "); //values += `usr: ${event.returnValues.usr} | `;
                //values += `gal: ${event.returnValues.gal} | `;
                // Clear and Get current price value

                osmPrice = 0;
                await getOsmPrice(event.blockNumber);
                auctions[flipId] = {
                    id: flipId,
                    kickDate: blockDate.toUTCString().slice(5),
                    kickDay: blockDate.getUTCDate(),
                    kickMonth: blockDate.getUTCMonth() + 1,
                    kickPrice: osmPrice.toString(),
                    kickLot: lot.toFixed(5),
                    tends: 0,
                    dents: 0,
                    bid: tab.toFixed(5),
                    lot: null,
                    tab: 0,
                    guy: null,
                    dealPrice: null,
                    paidPrice: null,
                    state: "OPEN"
                };
            } else if (event.raw.topics[0] === TEND) {
                eventType = "TEND"; // Get ID

                flipId = parseInt(event.raw.topics[2], 16);

                if (!auctions[flipId]) {
                    return "continue";
                }

                values += "ID: <b>".concat(flipId, "</b> | "); // Get LOT

                var _lot = parseInt(event.raw.topics[3], 16) / 10 ** 27 / 10 ** 18;
                values += "lot: ".concat(_lot.toFixed(2), " mkr | "); // Get BID

                var raw = event.raw.data.slice(289, -248);
                var bid = parseInt(raw, 16) / 10 ** 18;
                values += "bid: ".concat(bid.toFixed(3), " mkr | "); // Update Urn data

                auctions[flipId]["tends"] += 1;
                auctions[flipId]["bid"] = bid.toFixed(4);
                auctions[flipId]["lot"] = _lot.toFixed(4);
                auctions[flipId]["paidPrice"] = (_lot / bid).toFixed(3);
            } else if (event.raw.topics[0] === DEAL) {
                eventType = "DEAL"; // Get ID

                flipId = parseInt(event.raw.topics[2], 16);

                if (!auctions[flipId]) {
                    return "continue";
                }

                values += "ID: <b>".concat(flipId, "</b> | "); // Update Urn data

                osmPrice = 0;
                await getOsmPrice(event.blockNumber);
                auctions[flipId]["dealPrice"] = osmPrice.toString();
                auctions[flipId]["state"] = "CLOSE";
                if(!osmPrice) {
                    values += "Paid price: $".concat(auctions[flipId]["paidPrice"], " | ");
                } else {
                    values += "Paid: $".concat(auctions[flipId]["paidPrice"], " - ");
                    values += "Price: $".concat(auctions[flipId]["dealPrice"], " | ");
                }
            } else if (event.raw.topics[0] === TICK) {
                eventType = "TICK"; // Get ID

                flipId = parseInt(event.raw.topics[2], 16);
                values += "ID: <b>".concat(flipId, "</b> | ");
                values += "Time extended! | ";
            } else {
                console.log("Uknown event");
                console.log(event);
            } // Only for debug
            //console.log(event);
            // Get Sender


            await web3.eth.getTransaction(event.transactionHash).then(function (tx) {
                var from = tx.from;
                var txLink = "<a target=\"_blank\" href='https://etherscan.io/tx/\n          ".concat(event.transactionHash, "\n          '>Tx Info</a>");
                values += "from: ".concat(from, " | ").concat(txLink, " >>");
                auctions[flipId]["guy"] = from;
            }); // Render new line in document

            var oldPage = document.getElementById("app").innerHTML;
            var newLine = "";

            if (someID === 0 || someID === flipId) {
                newLine = "<div class=\"row flip-".concat(flipId, " ").concat(eventType.toLowerCase(), "\">").concat(eventType, " >> ").concat(values, "</div>");
            }

            var newPage = newLine + oldPage;
            document.getElementById("app").innerHTML = newPage;
        };

        for (var _iterator = events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ret = await _loop();

            if (_ret === "continue") continue;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    if (Object.keys(auctions).length > 0) {
        showFilter();
    } else {
        showEmptyMessage();
    }
    eventsLoaded = true;
};

var lastBlockfetch = 0;
var fetchAuctions = async function fetchAuctions(someID) {
    lastBlockfetch = await web3.eth.getBlockNumber();
    var fromBlock = lastBlockfetch - 18095; // 18095 -> 3.14 days blocks count
    await getFlipEvents(fromBlock);
    await showEvents(someID);
};

function showFilter() {
    var filterPanel = document.getElementById("filter-panel");

    if (filterPanel) {
        filterPanel.style.display = "block";
        var searchTag = document.getElementById("search");
        searchTag.style.display = "inline";
        var noResultsTag = document.getElementById("no-results");
        noResultsTag.style.display = "none";
        showLastUpdate();
    }
}

function showLastUpdate() {
    var lastUpdateTag = document.getElementById("last-update");
    var now = new Date().toLocaleString();
    lastUpdateTag.innerHTML = `- Updated to: ${now}`;
}

function hideFilterSearch() {
    var filterPanelSearch = document.getElementById("search");
    if (filterPanelSearch) {
        filterPanelSearch.style.display = "none";
    }
}

function showEmptyMessage() {
    var filterPanel = document.getElementById("filter-panel");

    if (filterPanel) {
        filterPanel.style.display = "block";
        var searchTag = document.getElementById("search");
        searchTag.style.display = "none";
        var noResultsTag = document.getElementById("no-results");
        noResultsTag.style.display = "inline";
        showLastUpdate();
    }
}

function filterAuctionById() {
    var flipId = $("#fliter-id").val();
    $(".row").hide();
    if (flipId) {
        $(".flip-" + flipId).show()
    } else {
        $(".row").show();
    }
}

async function newBlock(error, result) {
    if (result) {
        var newBlockNumber = result.number;
        if (!eventsLoaded) return;

        // Clear events and fetch new ones
        eventsLoaded = false;
        await getFlipEvents(newBlockNumber);
        await showEvents(0);
    } else {
        console.log(error);
    }
}

// Start Main function
fetchAuctions(0);

// Subscribe to new blocks
setTimeout(function () {
    console.log('Getting new data from chain...');
    web3.eth.subscribe('newBlockHeaders', newBlock);
}, 5000);
