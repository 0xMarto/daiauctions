"use strict";const FLIPPER_ABI=[{inputs:[{internalType:"address",name:"vat_",type:"address"},{internalType:"bytes32",name:"ilk_",type:"bytes32"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"lot",type:"uint256"},{indexed:!1,internalType:"uint256",name:"bid",type:"uint256"},{indexed:!1,internalType:"uint256",name:"tab",type:"uint256"},{indexed:!0,internalType:"address",name:"usr",type:"address"},{indexed:!0,internalType:"address",name:"gal",type:"address"}],name:"Kick",type:"event"},{anonymous:!0,inputs:[{indexed:!0,internalType:"bytes4",name:"sig",type:"bytes4"},{indexed:!0,internalType:"address",name:"usr",type:"address"},{indexed:!0,internalType:"bytes32",name:"arg1",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"arg2",type:"bytes32"},{indexed:!1,internalType:"bytes",name:"data",type:"bytes"}],name:"LogNote",type:"event"},{constant:!0,inputs:[],name:"beg",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"bids",outputs:[{internalType:"uint256",name:"bid",type:"uint256"},{internalType:"uint256",name:"lot",type:"uint256"},{internalType:"address",name:"guy",type:"address"},{internalType:"uint48",name:"tic",type:"uint48"},{internalType:"uint48",name:"end",type:"uint48"},{internalType:"address",name:"usr",type:"address"},{internalType:"address",name:"gal",type:"address"},{internalType:"uint256",name:"tab",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"deal",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"lot",type:"uint256"},{internalType:"uint256",name:"bid",type:"uint256"}],name:"dent",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"usr",type:"address"}],name:"deny",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"bytes32",name:"what",type:"bytes32"},{internalType:"uint256",name:"data",type:"uint256"}],name:"file",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"ilk",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"usr",type:"address"},{internalType:"address",name:"gal",type:"address"},{internalType:"uint256",name:"tab",type:"uint256"},{internalType:"uint256",name:"lot",type:"uint256"},{internalType:"uint256",name:"bid",type:"uint256"}],name:"kick",outputs:[{internalType:"uint256",name:"id",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"kicks",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"usr",type:"address"}],name:"rely",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"tau",outputs:[{internalType:"uint48",name:"",type:"uint48"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"lot",type:"uint256"},{internalType:"uint256",name:"bid",type:"uint256"}],name:"tend",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"tick",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"ttl",outputs:[{internalType:"uint48",name:"",type:"uint48"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"vat",outputs:[{internalType:"contract VatLike",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"wards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"yank",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}],MEDIANIZER_ABI=[{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"val",type:"uint256"},{indexed:!1,internalType:"uint256",name:"age",type:"uint256"}],name:"LogMedianPrice",type:"event"},{anonymous:!0,inputs:[{indexed:!0,internalType:"bytes4",name:"sig",type:"bytes4"},{indexed:!0,internalType:"address",name:"usr",type:"address"},{indexed:!0,internalType:"bytes32",name:"arg1",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"arg2",type:"bytes32"},{indexed:!1,internalType:"bytes",name:"data",type:"bytes"}],name:"LogNote",type:"event"},{constant:!0,inputs:[],name:"age",outputs:[{internalType:"uint32",name:"",type:"uint32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"bar",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"bud",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"usr",type:"address"}],name:"deny",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address[]",name:"a",type:"address[]"}],name:"diss",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"a",type:"address"}],name:"diss",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address[]",name:"a",type:"address[]"}],name:"drop",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address[]",name:"a",type:"address[]"}],name:"kiss",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"a",type:"address"}],name:"kiss",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address[]",name:"a",type:"address[]"}],name:"lift",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"orcl",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"peek",outputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256[]",name:"val_",type:"uint256[]"},{internalType:"uint256[]",name:"age_",type:"uint256[]"},{internalType:"uint8[]",name:"v",type:"uint8[]"},{internalType:"bytes32[]",name:"r",type:"bytes32[]"},{internalType:"bytes32[]",name:"s",type:"bytes32[]"}],name:"poke",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"read",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"usr",type:"address"}],name:"rely",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"bar_",type:"uint256"}],name:"setBar",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"uint8",name:"",type:"uint8"}],name:"slot",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"wards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"wat",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"}],CAT_ABI=[{inputs:[{internalType:"address",name:"vat_",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"ilk",type:"bytes32"},{indexed:!0,internalType:"address",name:"urn",type:"address"},{indexed:!1,internalType:"uint256",name:"ink",type:"uint256"},{indexed:!1,internalType:"uint256",name:"art",type:"uint256"},{indexed:!1,internalType:"uint256",name:"tab",type:"uint256"},{indexed:!1,internalType:"address",name:"flip",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"}],name:"Bite",type:"event"},{anonymous:!0,inputs:[{indexed:!0,internalType:"bytes4",name:"sig",type:"bytes4"},{indexed:!0,internalType:"address",name:"usr",type:"address"},{indexed:!0,internalType:"bytes32",name:"arg1",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"arg2",type:"bytes32"},{indexed:!1,internalType:"bytes",name:"data",type:"bytes"}],name:"LogNote",type:"event"},{constant:!1,inputs:[{internalType:"bytes32",name:"ilk",type:"bytes32"},{internalType:"address",name:"urn",type:"address"}],name:"bite",outputs:[{internalType:"uint256",name:"id",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"box",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"cage",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"rad",type:"uint256"}],name:"claw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"usr",type:"address"}],name:"deny",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"bytes32",name:"ilk",type:"bytes32"},{internalType:"bytes32",name:"what",type:"bytes32"},{internalType:"uint256",name:"data",type:"uint256"}],name:"file",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"bytes32",name:"what",type:"bytes32"},{internalType:"uint256",name:"data",type:"uint256"}],name:"file",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"bytes32",name:"what",type:"bytes32"},{internalType:"address",name:"data",type:"address"}],name:"file",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"bytes32",name:"ilk",type:"bytes32"},{internalType:"bytes32",name:"what",type:"bytes32"},{internalType:"address",name:"flip",type:"address"}],name:"file",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"bytes32",name:"",type:"bytes32"}],name:"ilks",outputs:[{internalType:"address",name:"flip",type:"address"},{internalType:"uint256",name:"chop",type:"uint256"},{internalType:"uint256",name:"dunk",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"litter",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"live",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"usr",type:"address"}],name:"rely",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"vat",outputs:[{internalType:"contract VatLike",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"vow",outputs:[{internalType:"contract VowLike",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"wards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}],AAVE_FLIP_ADDRESS="0x16e1b844094c885a37509a8f76c533B5fbFED13a",MEDIANIZER_ADDRESS="0xe62872DFEbd323b03D27946f8e2491B454a69811",CAT_ADDRESS="0xa5679C04fc3d9d8b0AaB1F0ab83555b301cA70Ea",FLIP_ILK="0x414156452d410000000000000000000000000000000000000000000000000000";var web3,usingRemoteProvider=!0;if(void 0!==window.ethereum&&window.ethereum.networkVersion&&"1"===window.ethereum.networkVersion&&window.ethereum.isMetaMask)try{(web3=new Web3(window.ethereum)).eth.subscribe("newBlockHeaders").unsubscribe(),console.log("Using local web3 provider"),usingRemoteProvider=!1}catch(e){usingRemoteProvider=!0}if(usingRemoteProvider){var infura="wss://mainnet.infura.io/ws/v3/cabe301d837048959747eaa4415846b7",provider=new Web3.providers.WebsocketProvider(infura);web3=new Web3(provider),console.log("Using remote web3 provider")}const flipContract=new web3.eth.Contract(FLIPPER_ABI,AAVE_FLIP_ADDRESS),medianizerContract=new web3.eth.Contract(MEDIANIZER_ABI,MEDIANIZER_ADDRESS),catContract=new web3.eth.Contract(CAT_ABI,CAT_ADDRESS);var events=[];async function getFlipEvents(e){return console.log(`Get auction events from block: ${e}`),flipContract.getPastEvents("allEvents",{fromBlock:e,toBlock:"latest"},function(e,t){e?console.log(e):(console.log("Received Events:",t.length),events=t)})}let cachePrice={block:0,val:0};async function getMedPrice(e){if(cachePrice.block===e)return cachePrice.val;let t=0;return await medianizerContract.getPastEvents("LogMedianPrice",{fromBlock:e-1e3,toBlock:e},function(e,n){if(e)console.log(e);else{var a=n[n.length-1];if(a){let e=web3.utils.toBN(a.returnValues[0]),n=web3.utils.fromWei(e);t=Number(parseFloat(n).toFixed(2))}}}),cachePrice={block:e,val:t},t}let cacheDate={block:0,val:new Date};async function getBlockDate(e){if(cacheDate.block===e)return cacheDate.val;let t=new Date;return await web3.eth.getBlock(e).then(function(n){if(n){let e=n.timestamp;t=new Date(1e3*e)}else console.log(`Block ${e}: error getting date`)}),cacheDate={block:e,val:t},t}const TEND="0x4b43ed1200000000000000000000000000000000000000000000000000000000",DENT="0x5ff3a38200000000000000000000000000000000000000000000000000000000",DEAL="0xc959c42b00000000000000000000000000000000000000000000000000000000",TICK="0xfc7b6aee00000000000000000000000000000000000000000000000000000000",FILE="0x29ae811400000000000000000000000000000000000000000000000000000000",DENY="0x9c52a7f100000000000000000000000000000000000000000000000000000000",RELY="0x65fae35e00000000000000000000000000000000000000000000000000000000";var auctions={},eventsLoaded=!1;async function showEvents(e){0===Object.keys(auctions).length&&(document.getElementById("app").innerHTML=""),events.length>0&&hideFilterSearch();for(let t=0;t<events.length;t++){let n=events[t],a="",i=await getBlockDate(n.blockNumber);a=i.toLocaleString("en")+" | ";let s="Unknown",o=0;if("Kick"===n.event){s="KICK",o=parseInt(n.returnValues.id,10),a+="ID: <b>"+o+"</b> | ";let e=n.returnValues.lot/1e18;a+="lot: "+e.toFixed(3)+" aave | ";let t=n.returnValues.tab/1e27/1e18;a+="tab: "+t.toFixed(2)+" dai | ";let l=await getMedPrice(n.blockNumber);auctions[o]={id:o,kickDate:i.toUTCString().slice(5),kickPrice:l.toString(),kickLot:e,tends:0,dents:0,bid:null,bidFrom:null,bidDate:null,bidPrice:null,lot:null,tab:t,guy:null,dealPrice:null,paidPrice:null,state:"OPEN"},a+=l>0?"Maker MED Price: $"+auctions[o].kickPrice+" | ":"Maker MED Price: $---,-- | "}else if(n.raw.topics[0]===TEND){if(s="TEND",o=parseInt(n.raw.topics[2],16),!auctions[o])continue;a+="ID: <b>"+o+"</b> | ";let e=parseInt(n.raw.topics[3],16)/1e18;a+="lot: "+e.toFixed(3)+" aave | ";let t=n.raw.data.slice(288,-248),l=parseInt(t,16)/1e27/1e18;a+="bid: "+l.toFixed(2)+" dai | ";let p=await getMedPrice(n.blockNumber);if(auctions[o].tends+=1,auctions[o].bid=l,auctions[o].bidDate=i.toUTCString().slice(5),auctions[o].bidPrice=p.toString(),auctions[o].lot=e,auctions[o].paidPrice=(l/e).toFixed(2),p>0){let e=100*(auctions[o].paidPrice/auctions[o].bidPrice-1);a+=e>0?"+"+e.toFixed(1)+" % | ":e.toFixed(1)+" % | ",a+="Price: $"+auctions[o].bidPrice+" | "}else a+="--,-- % | Price: $---,-- | "}else if(n.raw.topics[0]===DENT){if(s="DENT",o=parseInt(n.raw.topics[2],16),!auctions[o])continue;a+="ID: <b>"+o+"</b> | ";let e=parseInt(n.raw.topics[3],16)/1e18;a+="lot: "+e.toFixed(3)+" aave | ";let t=n.raw.data.slice(288,-248),l=parseInt(t,16)/1e27/1e18;a+="bid: "+l.toFixed(2)+" dai | ";let p=await getMedPrice(n.blockNumber);if(auctions[o].dents+=1,auctions[o].bid=l,auctions[o].bidDate=i.toUTCString().slice(5),auctions[o].bidPrice=p.toString(),auctions[o].lot=e,auctions[o].paidPrice=(l/e).toFixed(2),p>0){let e=100*(auctions[o].paidPrice/auctions[o].bidPrice-1);a+=e>0?"+"+e.toFixed(2)+" % | ":e.toFixed(2)+" % | ",a+="Price: $"+auctions[o].bidPrice+" | "}else a+="--,-- % | Price: $---,-- | "}else if(n.raw.topics[0]===DEAL){if(s="DEAL",o=parseInt(n.raw.topics[2],16),!auctions[o])continue;a+="ID: <b>"+o+"</b> | ";let e=await getMedPrice(n.blockNumber);if(auctions[o].dealDate=i.toUTCString().slice(5),auctions[o].dealPrice=e.toString(),auctions[o].state="CLOSE",e){a+="Paid Rate: $"+auctions[o].paidPrice+" dai/aave ";let e=100*(auctions[o].paidPrice/auctions[o].dealPrice-1);e>0?(a+="(+"+e.toFixed(2)+"%) ~ ",a+=`<b class='detail-btn' onclick='showAuctionDetails(${o})'>Lost 📋</b> | `):(a+="("+e.toFixed(2)+"%) ~ ",a+=`<b class='detail-btn' onclick='showAuctionDetails(${o})'>Won! 📋</b> | `),a+="Price: $"+auctions[o].dealPrice+" | "}else a+="Paid Rate: $"+auctions[o].paidPrice+" dai/aave (+-.--%) | ",a+="--,-- % | Price: $---,-- | "}else if(n.raw.topics[0]===TICK)s="TICK",o=parseInt(n.raw.topics[2],16),a+="ID: <b>"+o+"</b> | ",a+="Time extended! | ";else if(n.raw.topics[0]===FILE){auctions[0]={id:0,type:"FILE"},s="FILE";const e="0x6265670000000000000000000000000000000000000000000000000000000000",t="0x7461750000000000000000000000000000000000000000000000000000000000",i="0x74746c0000000000000000000000000000000000000000000000000000000000";if(n.raw.topics[2]===e){a+="WHAT: <b> BEG </b> (minimum bid increase) | ";let e=parseInt(n.raw.topics[3])/1e18;a+="VALUE: <b>"+(e=100*(e-1)).toFixed(2)+" %</b> | "}else if(n.raw.topics[2]===t){a+="WHAT: <b> TAU </b> (maximum auction duration) | ";let e=parseInt(n.raw.topics[3]);a+="VALUE: <b>"+(e=e/60/60).toFixed(1)+" hours</b> | "}else if(n.raw.topics[2]===i){a+="WHAT: <b> TTL </b> (bid lifetime / max bid duration) | ";let e=parseInt(n.raw.topics[3]);a+="VALUE: <b>"+(e/=60).toFixed(1)+" minutes</b> | "}else a+="WHAT: <b>UNKNOWN</b> | ",console.log(n.raw.topics);a+="New Flipper Update! | "}else if(n.raw.topics[0]===RELY){s="RELY",a+="WHAT: <b>Allow to call auth'ed methods --</b> | ";let e=n.raw.topics[2];a+="TO: <b>0x"+e.slice(-40)+"</b> | "}else if(n.raw.topics[0]===DENY){s="DENY",a+="WHAT: <b>Disallow to call auth'ed methods</b> | ";let e=n.raw.topics[2];a+="TO: <b>0x"+e.slice(-40)+"</b> | "}else console.log("UNKNOWN event"),console.log(n);await web3.eth.getTransaction(n.transactionHash).then(function(e){let t=e.from.slice(0,6)+"..."+e.from.slice(-4);auctions[o]&&("DENT"!==s&&"TEND"!==s||(auctions[o].bidFrom=e.from),auctions[o].txFrom=e.from);let i=`<a target="_blank" href="${`https://etherscan.io/tx/${n.transactionHash}`}">Tx:..${n.transactionHash.slice(-3)} Info</a>`;a+=`from: ${t} | ${i} >>`});let l=document.getElementById("app").innerHTML,p="";0!==e&&e!==o||(p='<div class="row flip-'+o+" "+s.toLowerCase()+'">'+s+" >> "+a+"</div>"),document.getElementById("app").innerHTML=p+l}Object.keys(auctions).length>0?showFilter():showEmptyMessage(),eventsLoaded=!0}var lastBlockfetch=0,blocksBack=18095;async function fetchAuctions(e){let t=(lastBlockfetch=await web3.eth.getBlockNumber())-blocksBack;await getFlipEvents(t),await showEvents(e)}async function newBlock(e,t){if(t){if(!eventsLoaded)return;updateGlobals(),eventsLoaded=!1;let e=t.number;await getFlipEvents(e),await showEvents(0)}else console.log(e)}async function updateGlobals(){let e=$("#globals");catContract.methods.ilks(FLIP_ILK).call().then(function(t){let n=parseInt(t.dunk)/1e45,a=100*(parseInt(t.chop)/1e18-1);e.find("#dunk").text(n.toLocaleString("en",{minimumFractionDigits:2,maximumFractionDigits:2})),e.find("#chop").text(a.toFixed(2))}),catContract.methods.litter().call().then(function(e){let t=parseInt(e)/1e45;$("#litter").text(t.toLocaleString("en",{minimumFractionDigits:2,maximumFractionDigits:2}))}),catContract.methods.box().call().then(function(e){let t=parseInt(e)/1e45;$("#box").text(t.toLocaleString("en",{minimumFractionDigits:2,maximumFractionDigits:2}))}),flipContract.methods.beg().call().then(function(t){let n=100*(t/1e18-1);e.find("#beg").text(n.toFixed(2))}),flipContract.methods.ttl().call().then(function(t){let n=t/60;e.find("#ttl").text(n.toFixed(1))}),flipContract.methods.tau().call().then(function(t){let n=t/60/60;e.find("#tau").text(n.toFixed(1))});let t=await web3.eth.getBlockNumber(),n=await getMedPrice(t);e.find("#price-med").text("$"+n.toLocaleString("en",{minimumFractionDigits:2,maximumFractionDigits:2}))}function showFilter(){let e=document.getElementById("filter-panel");if(e){e.style.display="block",document.getElementById("search").style.display="inline",document.getElementById("no-results").style.display="none",showLastUpdate()}}function showLastUpdate(){let e=document.getElementById("last-update"),t=(new Date).toLocaleString("en");e.innerHTML=`Last update: ${t}`}function hideFilterSearch(){let e=document.getElementById("search");e&&(e.style.display="none")}function showEmptyMessage(){let e=document.getElementById("filter-panel");if(e){e.style.display="block",document.getElementById("search").style.display="none",document.getElementById("no-results").style.display="block",showLastUpdate()}}function filterAuctionById(){let e=$("#fliter-id").val(),t=$(".row");t.hide(),e?$(".flip-"+e).show():t.show()}function showAuctionDetails(e){let t=auctions[e];if(!t)return void alert("Error showing auction details");let n=$("#auction-details");n&&n.hide();let a=`> <b>AUCTION ID: ${e}</b>`;a+="<hr/>";let i={minimumFractionDigits:2,maximumFractionDigits:2};a+="Started: <br/>",a+=`- DATE: ${t.kickDate} <br/>`,a+=`- LOT: ${t.kickLot.toLocaleString("en",i)} aave `,a+=`- BID: ${t.bid.toLocaleString("en",i)} dai <br/>`,a+=`- AAVE MED: $${t.kickPrice} aave/dai <br/><br/>`,a+=`Bids received: ${t.tends+t.dents} <br/><br/>`,a+="Last Bid:<br/>",a+=`- DATE: ${t.bidDate} <br/>`,a+=`- FROM: ${t.bidFrom} <br/>`,a+=`- LOT: ${t.lot.toLocaleString("en",i)} aave `,a+=`- BID: ${t.bid.toLocaleString("en",i)} dai <br/>`,a+=`- PAID PRICE: $${t.paidPrice} aave/dai <br/>`,a+=`- AAVE MED: $${t.bidPrice} aave/dai <br/><br/>`,a+="Ended: <br/>",a+=`- DATE: ${t.dealDate} <br/>`,a+=`- FROM: ${t.txFrom} <br/>`,a+=`- PAID PRICE: $${t.paidPrice} aave/dai <br/>`,a+=`- AAVE MED: $${t.dealPrice} aave/dai <br/><br/>`,a+="Results: <br/>",a+=`- PRICE DIFF: ${(100*(t.paidPrice/t.dealPrice-1)).toFixed(2)}% <br/>`,a+=`- PROFIT: <b>${(t.lot*t.dealPrice-t.bid).toLocaleString("en",i)} dai</b>`,a+="<hr/>",a+='<a style="float: right;" onclick="hideAuctionDetails()">CLOSE<a/>',n&&(n.html(a),n.fadeIn("normal"))}function hideAuctionDetails(){let e=$("#auction-details");e&&e.fadeOut("normal")}updateGlobals(),fetchAuctions(0),setTimeout(function(){console.log("Getting new data from chain..."),web3.eth.subscribe("newBlockHeaders",newBlock)},5e3);