import Web3 from "web3";

// OSM contract ABI
const FLIP_ABI = [
    {
        inputs: [
            {internalType: "address", name: "vat_", type: "address"},
            {internalType: "bytes32", name: "ilk_", type: "bytes32"}
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {indexed: false, internalType: "uint256", name: "id", type: "uint256"},
            {indexed: false, internalType: "uint256", name: "lot", type: "uint256"},
            {indexed: false, internalType: "uint256", name: "bid", type: "uint256"},
            {indexed: false, internalType: "uint256", name: "tab", type: "uint256"},
            {indexed: true, internalType: "address", name: "usr", type: "address"},
            {indexed: true, internalType: "address", name: "gal", type: "address"}
        ],
        name: "Kick",
        type: "event"
    },
    {
        anonymous: true,
        inputs: [
            {indexed: true, internalType: "bytes4", name: "sig", type: "bytes4"},
            {indexed: true, internalType: "address", name: "usr", type: "address"},
            {indexed: true, internalType: "bytes32", name: "arg1", type: "bytes32"},
            {indexed: true, internalType: "bytes32", name: "arg2", type: "bytes32"},
            {indexed: false, internalType: "bytes", name: "data", type: "bytes"}
        ],
        name: "LogNote",
        type: "event"
    },
    {
        constant: true,
        inputs: [],
        name: "beg",
        outputs: [{internalType: "uint256", name: "", type: "uint256"}],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [{internalType: "uint256", name: "", type: "uint256"}],
        name: "bids",
        outputs: [
            {internalType: "uint256", name: "bid", type: "uint256"},
            {internalType: "uint256", name: "lot", type: "uint256"},
            {internalType: "address", name: "guy", type: "address"},
            {internalType: "uint48", name: "tic", type: "uint48"},
            {internalType: "uint48", name: "end", type: "uint48"},
            {internalType: "address", name: "usr", type: "address"},
            {internalType: "address", name: "gal", type: "address"},
            {internalType: "uint256", name: "tab", type: "uint256"}
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [{internalType: "uint256", name: "id", type: "uint256"}],
        name: "deal",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {internalType: "uint256", name: "id", type: "uint256"},
            {internalType: "uint256", name: "lot", type: "uint256"},
            {internalType: "uint256", name: "bid", type: "uint256"}
        ],
        name: "dent",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [{internalType: "address", name: "usr", type: "address"}],
        name: "deny",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {internalType: "bytes32", name: "what", type: "bytes32"},
            {internalType: "uint256", name: "data", type: "uint256"}
        ],
        name: "file",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "ilk",
        outputs: [{internalType: "bytes32", name: "", type: "bytes32"}],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {internalType: "address", name: "usr", type: "address"},
            {internalType: "address", name: "gal", type: "address"},
            {internalType: "uint256", name: "tab", type: "uint256"},
            {internalType: "uint256", name: "lot", type: "uint256"},
            {internalType: "uint256", name: "bid", type: "uint256"}
        ],
        name: "kick",
        outputs: [{internalType: "uint256", name: "id", type: "uint256"}],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "kicks",
        outputs: [{internalType: "uint256", name: "", type: "uint256"}],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [{internalType: "address", name: "usr", type: "address"}],
        name: "rely",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "tau",
        outputs: [{internalType: "uint48", name: "", type: "uint48"}],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {internalType: "uint256", name: "id", type: "uint256"},
            {internalType: "uint256", name: "lot", type: "uint256"},
            {internalType: "uint256", name: "bid", type: "uint256"}
        ],
        name: "tend",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [{internalType: "uint256", name: "id", type: "uint256"}],
        name: "tick",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "ttl",
        outputs: [{internalType: "uint48", name: "", type: "uint48"}],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "vat",
        outputs: [{internalType: "contract VatLike", name: "", type: "address"}],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [{internalType: "address", name: "", type: "address"}],
        name: "wards",
        outputs: [{internalType: "uint256", name: "", type: "uint256"}],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [{internalType: "uint256", name: "id", type: "uint256"}],
        name: "yank",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    }
];

const OSM_ABI = [
    {
        inputs: [{internalType: "address", name: "src_", type: "address"}],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: true,
        inputs: [
            {indexed: true, internalType: "bytes4", name: "sig", type: "bytes4"},
            {indexed: true, internalType: "address", name: "usr", type: "address"},
            {indexed: true, internalType: "bytes32", name: "arg1", type: "bytes32"},
            {indexed: true, internalType: "bytes32", name: "arg2", type: "bytes32"},
            {indexed: false, internalType: "bytes", name: "data", type: "bytes"}
        ],
        name: "LogNote",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {indexed: false, internalType: "bytes32", name: "val", type: "bytes32"}
        ],
        name: "LogValue",
        type: "event"
    },
    {
        constant: true,
        inputs: [{internalType: "address", name: "", type: "address"}],
        name: "bud",
        outputs: [{internalType: "uint256", name: "", type: "uint256"}],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [{internalType: "address", name: "src_", type: "address"}],
        name: "change",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [{internalType: "address", name: "usr", type: "address"}],
        name: "deny",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [{internalType: "address[]", name: "a", type: "address[]"}],
        name: "diss",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [{internalType: "address", name: "a", type: "address"}],
        name: "diss",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "hop",
        outputs: [{internalType: "uint16", name: "", type: "uint16"}],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [{internalType: "address[]", name: "a", type: "address[]"}],
        name: "kiss",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [{internalType: "address", name: "a", type: "address"}],
        name: "kiss",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "pass",
        outputs: [{internalType: "bool", name: "ok", type: "bool"}],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "peek",
        outputs: [
            {internalType: "bytes32", name: "", type: "bytes32"},
            {internalType: "bool", name: "", type: "bool"}
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "peep",
        outputs: [
            {internalType: "bytes32", name: "", type: "bytes32"},
            {internalType: "bool", name: "", type: "bool"}
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [],
        name: "poke",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "read",
        outputs: [{internalType: "bytes32", name: "", type: "bytes32"}],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [{internalType: "address", name: "usr", type: "address"}],
        name: "rely",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "src",
        outputs: [{internalType: "address", name: "", type: "address"}],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [],
        name: "start",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [{internalType: "uint16", name: "ts", type: "uint16"}],
        name: "step",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [],
        name: "stop",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "stopped",
        outputs: [{internalType: "uint256", name: "", type: "uint256"}],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [],
        name: "void",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [{internalType: "address", name: "", type: "address"}],
        name: "wards",
        outputs: [{internalType: "uint256", name: "", type: "uint256"}],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "zzz",
        outputs: [{internalType: "uint64", name: "", type: "uint64"}],
        payable: false,
        stateMutability: "view",
        type: "function"
    }
];

// Contracts
const FLIP_ADDRESS = "0xd8a04f5412223f513dc55f839574430f5ec15531";
const OSM_ADDRESS = "0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763";

// Instantiate contract
let web3;
if (
    typeof window.web3 !== "undefined" &&
    window.web3.currentProvider &&
    window.web3.currentProvider.networkVersion === "1"
) {
    web3 = new Web3(window.web3.currentProvider);
} else {
    let infura = "https://mainnet.infura.io/v3/24537662f67d4531a1e43e486ea45eca";
    let provider = new Web3.providers.HttpProvider(infura);
    web3 = new Web3(provider);
}

//let infuraProvider = "wss://mainnet.infura.io/v3/24537662f67d4531a1e43e486ea45eca/ws";
//let web3 = new Web3(window.web3.currentProvider);

let flipContract = new web3.eth.Contract(FLIP_ABI, FLIP_ADDRESS);
let osmContract = new web3.eth.Contract(OSM_ABI, OSM_ADDRESS);

// Get events
let events = [];
const getFlipEvents = fromBlockNumber => {
    console.log("Get Flip Events From Block: " + fromBlockNumber);
    return flipContract.getPastEvents(
        "allEvents",
        {fromBlock: fromBlockNumber, toBlock: "latest"}, // Deploy block: 8925094
        (err, result) => {
            if (!err) {
                console.log("Registered Events:", result.length);
                events = result;
            } else {
                console.log(err);
            }
        }
    );
};

let osmPrice = 0;
const getOsmPrice = blockNumber => {
    return osmContract.getPastEvents(
        "LogValue",
        {fromBlock: blockNumber - 500, toBlock: blockNumber}, // Deploy block: 8925094
        (err, result) => {
            if (!err) {
                let logEvent = result[result.length - 1];

                if (!logEvent) {
                    return 0;
                }

                let priceInWei = web3.utils.toBN(logEvent.returnValues[0]);
                let price = web3.utils.fromWei(priceInWei);

                osmPrice = parseFloat(price).toFixed(3);
                return price;
            } else {
                console.log(err);
            }
        }
    );
};

// Events Id constant
const TEND = "0x4b43ed1200000000000000000000000000000000000000000000000000000000";
const DENT = "0x5ff3a38200000000000000000000000000000000000000000000000000000000";
const DEAL = "0xc959c42b00000000000000000000000000000000000000000000000000000000";
const TICK = "0xfc7b6aee00000000000000000000000000000000000000000000000000000000";

let auctions = {};

// Declare principal function
const fetchAuctions = async someID => {
    let currentBlock = await web3.eth.getBlockNumber();
    let fromBlock = currentBlock - 18095; // 18095 -> 3.14 days blocks count

    getFlipEvents(fromBlock).then(async () => {
        document.getElementById("app").innerHTML = "";
        for (let event of events) {
            let values = "";

            let blockDate;
            await web3.eth.getBlock(event.blockNumber).then(block => {
                let blockTime = block.timestamp;
                blockDate = new Date(blockTime * 1000);
                values = `${blockDate.toUTCString().slice(5)} | `;
            });

            let eventType = "Unknown";
            let flipId = 0;

            // Event types cases
            if (event.event === "Kick") {
                eventType = "KICK";
                flipId = parseInt(event.returnValues.id, 10);
                values += `ID: <b>${flipId}</b> | `;
                let lot = event.returnValues.lot / 10 ** 18;
                values += `lot: ${lot.toFixed(3)} eth | `;
                //values += `bid: ${event.returnValues.bid} | `;
                let tab = event.returnValues.tab / 10 ** 27 / 10 ** 18;
                values += `tab: ${tab.toFixed(3)} dai | `;
                //values += `usr: ${event.returnValues.usr} | `;
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
                    kickLot: lot.toFixed(3),
                    tends: 0,
                    dents: 0,
                    bid: null,
                    lot: null,
                    tab: tab.toFixed(3),
                    guy: null,
                    dealPrice: null,
                    paidPrice: null,
                    state: "OPEN"
                };
            } else if (event.raw.topics[0] === TEND) {
                eventType = "TEND";

                // Get ID
                flipId = parseInt(event.raw.topics[2], 16);
                if (!auctions[flipId]) {
                    continue;
                }
                values += `ID: <b>${flipId}</b> | `;

                // Get LOT
                let lot = parseInt(event.raw.topics[3], 16) / 10 ** 18;
                values += `lot: ${lot.toFixed(3)} eth | `;

                // Get BID
                let raw = event.raw.data.slice(289, -248);
                let bid = parseInt(raw, 16) / 10 ** 27 / 10 ** 18;
                values += `bid: ${bid.toFixed(3)} dai | `;

                // Update Urn data
                auctions[flipId]["tends"] += 1;
                auctions[flipId]["bid"] = bid.toFixed(3);
                auctions[flipId]["lot"] = lot.toFixed(3);
                auctions[flipId]["paidPrice"] = (bid / lot).toFixed(3);
            } else if (event.raw.topics[0] === DENT) {
                eventType = "DENT";

                // Get ID
                flipId = parseInt(event.raw.topics[2], 16);
                if (!auctions[flipId]) {
                    continue;
                }
                values += `ID: <b>${flipId}</b> | `;

                // Get LOT
                let lot = parseInt(event.raw.topics[3], 16) / 10 ** 18;
                values += `lot: ${lot.toFixed(3)} eth | `;

                // Get BID
                let raw = event.raw.data.slice(289, -248);
                let bid = parseInt(raw, 16) / 10 ** 27 / 10 ** 18;
                values += `bid: ${bid.toFixed(3)} dai | `;

                // Update Urn data
                auctions[flipId]["dents"] += 1;
                auctions[flipId]["bid"] = bid.toFixed(3);
                auctions[flipId]["lot"] = lot.toFixed(3);
                auctions[flipId]["paidPrice"] = (bid / lot).toFixed(3);
            } else if (event.raw.topics[0] === DEAL) {
                eventType = "DEAL";

                // Get ID
                flipId = parseInt(event.raw.topics[2], 16);
                if (!auctions[flipId]) {
                    continue;
                }
                values += `ID: <b>${flipId}</b> | `;

                // Update Urn data
                osmPrice = 0;
                await getOsmPrice(event.blockNumber);
                auctions[flipId]["dealPrice"] = osmPrice.toString();
                auctions[flipId]["state"] = "CLOSE";
                values += `Paid: $${auctions[flipId]["paidPrice"]} - `;
                values += `Price: $${auctions[flipId]["dealPrice"]} | `;
            } else if (event.raw.topics[0] === TICK) {
                eventType = "TICK";

                // Get ID
                flipId = parseInt(event.raw.topics[2], 16);
                values += `ID: <b>${flipId}</b> | `;

                values += `Time extended! | `;
            } else {
                console.log("Uknown event");
                console.log(event);
            }

            // Only for debug
            //console.log(event);

            // Get Sender
            await web3.eth.getTransaction(event.transactionHash).then(tx => {
                let from = tx.from;
                let txLink = `<a target="_blank" href='https://etherscan.io/tx/
          ${event.transactionHash}
          '>Tx Info</a>`;
                values += `from: ${from} | ${txLink} >>`;
                auctions[flipId]["guy"] = from;
            });

            // Render new line in document
            let oldPage = document.getElementById("app").innerHTML;
            let newLine = "";
            if (someID === 0 || someID === flipId) {
                newLine = `<div class="row flip-${flipId} ${eventType.toLowerCase()}">${eventType} >> ${values}</div>`;
            }
            let newPage = newLine + oldPage;
            document.getElementById("app").innerHTML = newPage;
        }

        if (events.length > 0) {
            // After all load
            showFilter();
            //printStats(auctions);
        } else {
            showEmptyMessage();
        }
    });
};

const showFilter = () => {
    var filterPanel = document.getElementById("filter-panel");
    if (filterPanel) {
        filterPanel.style.display = "block";
    }
};

const showEmptyMessage = () => {
    var filterPanel = document.getElementById("filter-panel");
    if (filterPanel) {
        filterPanel.style.display = "block";
        let msg = "There were NO auctions kicked in the search period";
        filterPanel.innerHTML = msg;
    }
};

const printStats = auctions => {
    console.log("Printing: ", auctions);
    let message = "";
    for (let [key, auction] of Object.entries(auctions)) {
        if (auction.state === "CLOSE") {
            message = `${message}
        ${auction.id}; ${auction.kickDate}; ${auction.kickDay}; ${
                auction.kickMonth
                }; ETH; ${auction.kickPrice.replace(
                ".",
                ","
            )}; ${auction.dealPrice.replace(".", ",")}; ${auction.kickLot.replace(
                ".",
                ","
            )}; ${auction.tab.replace(".", ",")}; ${auction.lot.replace(
                ".",
                ","
            )}; ${auction.bid.replace(".", ",")}; ${auction.guy}; ${auction.tends}; ${
                auction.dents
                }`;
        }
    }
    console.log(message);
};

// Run main function
(async () =>  {
    await fetchAuctions(0);

})();
