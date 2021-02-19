"use strict";const FLIPPER_ABI=[{inputs:[{internalType:"address",name:"vat_",type:"address"},{internalType:"bytes32",name:"ilk_",type:"bytes32"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"lot",type:"uint256"},{indexed:!1,internalType:"uint256",name:"bid",type:"uint256"},{indexed:!1,internalType:"uint256",name:"tab",type:"uint256"},{indexed:!0,internalType:"address",name:"usr",type:"address"},{indexed:!0,internalType:"address",name:"gal",type:"address"}],name:"Kick",type:"event"},{anonymous:!0,inputs:[{indexed:!0,internalType:"bytes4",name:"sig",type:"bytes4"},{indexed:!0,internalType:"address",name:"usr",type:"address"},{indexed:!0,internalType:"bytes32",name:"arg1",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"arg2",type:"bytes32"},{indexed:!1,internalType:"bytes",name:"data",type:"bytes"}],name:"LogNote",type:"event"},{constant:!0,inputs:[],name:"beg",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"bids",outputs:[{internalType:"uint256",name:"bid",type:"uint256"},{internalType:"uint256",name:"lot",type:"uint256"},{internalType:"address",name:"guy",type:"address"},{internalType:"uint48",name:"tic",type:"uint48"},{internalType:"uint48",name:"end",type:"uint48"},{internalType:"address",name:"usr",type:"address"},{internalType:"address",name:"gal",type:"address"},{internalType:"uint256",name:"tab",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"deal",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"lot",type:"uint256"},{internalType:"uint256",name:"bid",type:"uint256"}],name:"dent",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"usr",type:"address"}],name:"deny",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"bytes32",name:"what",type:"bytes32"},{internalType:"uint256",name:"data",type:"uint256"}],name:"file",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"ilk",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"usr",type:"address"},{internalType:"address",name:"gal",type:"address"},{internalType:"uint256",name:"tab",type:"uint256"},{internalType:"uint256",name:"lot",type:"uint256"},{internalType:"uint256",name:"bid",type:"uint256"}],name:"kick",outputs:[{internalType:"uint256",name:"id",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"kicks",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"usr",type:"address"}],name:"rely",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"tau",outputs:[{internalType:"uint48",name:"",type:"uint48"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"lot",type:"uint256"},{internalType:"uint256",name:"bid",type:"uint256"}],name:"tend",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"tick",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"ttl",outputs:[{internalType:"uint48",name:"",type:"uint48"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"vat",outputs:[{internalType:"contract VatLike",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"wards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"yank",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}],MEDIANIZER_ABI=[{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"val",type:"uint256"},{indexed:!1,internalType:"uint256",name:"age",type:"uint256"}],name:"LogMedianPrice",type:"event"},{anonymous:!0,inputs:[{indexed:!0,internalType:"bytes4",name:"sig",type:"bytes4"},{indexed:!0,internalType:"address",name:"usr",type:"address"},{indexed:!0,internalType:"bytes32",name:"arg1",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"arg2",type:"bytes32"},{indexed:!1,internalType:"bytes",name:"data",type:"bytes"}],name:"LogNote",type:"event"},{constant:!0,inputs:[],name:"age",outputs:[{internalType:"uint32",name:"",type:"uint32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"bar",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"bud",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"usr",type:"address"}],name:"deny",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address[]",name:"a",type:"address[]"}],name:"diss",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"a",type:"address"}],name:"diss",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address[]",name:"a",type:"address[]"}],name:"drop",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address[]",name:"a",type:"address[]"}],name:"kiss",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"a",type:"address"}],name:"kiss",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address[]",name:"a",type:"address[]"}],name:"lift",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"orcl",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"peek",outputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256[]",name:"val_",type:"uint256[]"},{internalType:"uint256[]",name:"age_",type:"uint256[]"},{internalType:"uint8[]",name:"v",type:"uint8[]"},{internalType:"bytes32[]",name:"r",type:"bytes32[]"},{internalType:"bytes32[]",name:"s",type:"bytes32[]"}],name:"poke",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"read",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"usr",type:"address"}],name:"rely",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"bar_",type:"uint256"}],name:"setBar",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"uint8",name:"",type:"uint8"}],name:"slot",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"wards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"wat",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"}],CAT_ABI=[{inputs:[{internalType:"address",name:"vat_",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"ilk",type:"bytes32"},{indexed:!0,internalType:"address",name:"urn",type:"address"},{indexed:!1,internalType:"uint256",name:"ink",type:"uint256"},{indexed:!1,internalType:"uint256",name:"art",type:"uint256"},{indexed:!1,internalType:"uint256",name:"tab",type:"uint256"},{indexed:!1,internalType:"address",name:"flip",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"}],name:"Bite",type:"event"},{anonymous:!0,inputs:[{indexed:!0,internalType:"bytes4",name:"sig",type:"bytes4"},{indexed:!0,internalType:"address",name:"usr",type:"address"},{indexed:!0,internalType:"bytes32",name:"arg1",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"arg2",type:"bytes32"},{indexed:!1,internalType:"bytes",name:"data",type:"bytes"}],name:"LogNote",type:"event"},{constant:!1,inputs:[{internalType:"bytes32",name:"ilk",type:"bytes32"},{internalType:"address",name:"urn",type:"address"}],name:"bite",outputs:[{internalType:"uint256",name:"id",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"box",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"cage",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"rad",type:"uint256"}],name:"claw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"usr",type:"address"}],name:"deny",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"bytes32",name:"ilk",type:"bytes32"},{internalType:"bytes32",name:"what",type:"bytes32"},{internalType:"uint256",name:"data",type:"uint256"}],name:"file",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"bytes32",name:"what",type:"bytes32"},{internalType:"uint256",name:"data",type:"uint256"}],name:"file",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"bytes32",name:"what",type:"bytes32"},{internalType:"address",name:"data",type:"address"}],name:"file",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"bytes32",name:"ilk",type:"bytes32"},{internalType:"bytes32",name:"what",type:"bytes32"},{internalType:"address",name:"flip",type:"address"}],name:"file",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"bytes32",name:"",type:"bytes32"}],name:"ilks",outputs:[{internalType:"address",name:"flip",type:"address"},{internalType:"uint256",name:"chop",type:"uint256"},{internalType:"uint256",name:"dunk",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"litter",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"live",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"usr",type:"address"}],name:"rely",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"vat",outputs:[{internalType:"contract VatLike",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"vow",outputs:[{internalType:"contract VowLike",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"wards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}],UNI_FLIP_ADDRESS="0xF5b8cD9dB5a0EC031304A7B815010aa7761BD426",MEDIANIZER_ADDRESS="0x52f761908cC27B4D77AD7A329463cf08baf62153",CAT_ADDRESS="0xa5679C04fc3d9d8b0AaB1F0ab83555b301cA70Ea",FLIP_ILK="0x554e492d41000000000000000000000000000000000000000000000000000000";var web3,usingRemoteProvider=!0;if(void 0!==window.ethereum&&window.ethereum.networkVersion&&"1"===window.ethereum.networkVersion&&window.ethereum.isMetaMask)try{(web3=new Web3(window.ethereum)).eth.subscribe("newBlockHeaders").unsubscribe(),console.log("Using local web3 provider"),usingRemoteProvider=!1}catch(t){usingRemoteProvider=!0}if(usingRemoteProvider){var infura="wss://mainnet.infura.io/ws/v3/f77d1e38219b45d4b4965a1c247c1aff",provider=new Web3.providers.WebsocketProvider(infura);web3=new Web3(provider),console.log("Using remote web3 provider")}const flipContract=new web3.eth.Contract(FLIPPER_ABI,UNI_FLIP_ADDRESS),medianizerContract=new web3.eth.Contract(MEDIANIZER_ABI,MEDIANIZER_ADDRESS),catContract=new web3.eth.Contract(CAT_ABI,CAT_ADDRESS);var events=[];async function getFlipEvents(t){return console.log(`Get auction events from block: ${t}`),flipContract.getPastEvents("allEvents",{fromBlock:t,toBlock:"latest"},function(t,e){t?console.log(t):(console.log("Received Events:",e.length),events=e)})}let cachePrice={block:0,val:0};async function getMedPrice(t){if(cachePrice.block===t)return cachePrice.val;let e=0;return await medianizerContract.getPastEvents("LogMedianPrice",{fromBlock:t-1e3,toBlock:t},function(t,n){if(t)console.log(t);else{var a=n[n.length-1];if(a){let t=web3.utils.toBN(a.returnValues[0]),n=web3.utils.fromWei(t);e=Number(parseFloat(n).toFixed(4))}}}),cachePrice={block:t,val:e},e}let cacheDate={block:0,val:new Date};async function getBlockDate(t){if(cacheDate.block===t)return cacheDate.val;let e=new Date;return await web3.eth.getBlock(t).then(function(n){if(n){let t=n.timestamp;e=new Date(1e3*t)}else console.log(`Block ${t}: error getting date`)}),cacheDate={block:t,val:e},e}const TEND="0x4b43ed1200000000000000000000000000000000000000000000000000000000",DENT="0x5ff3a38200000000000000000000000000000000000000000000000000000000",DEAL="0xc959c42b00000000000000000000000000000000000000000000000000000000",TICK="0xfc7b6aee00000000000000000000000000000000000000000000000000000000",FILE="0x29ae811400000000000000000000000000000000000000000000000000000000",DENY="0x9c52a7f100000000000000000000000000000000000000000000000000000000",RELY="0x65fae35e00000000000000000000000000000000000000000000000000000000";var auctions={},eventsLoaded=!1,showEvents=async function(t){0===Object.keys(auctions).length&&(document.getElementById("app").innerHTML=""),events.length>0&&hideFilterSearch();for(let e=0;e<events.length;e++){let n=events[e],a="",i=await getBlockDate(n.blockNumber);a=i.toLocaleString("en")+" | ";let s="Unknown",o=0;if("Kick"===n.event){s="KICK",o=parseInt(n.returnValues.id,10),a+="ID: <b>"+o+"</b> | ";let t=n.returnValues.lot/1e18;a+="lot: "+t.toFixed(2)+" uni | ";let e=n.returnValues.tab/1e27/1e18;a+="tab: "+e.toFixed(2)+" dai | ";let l=await getMedPrice(n.blockNumber);auctions[o]={id:o,kickDate:i.toUTCString().slice(5),kickPrice:l.toString(),kickLot:t,tends:0,dents:0,bid:null,bidFrom:null,bidDate:null,bidPrice:null,lot:null,tab:e,guy:null,dealPrice:null,paidPrice:null,state:"OPEN"},a+=l>0?"Maker MED Price: $"+auctions[o].kickPrice+" | ":"Maker MED Price: $---,-- | "}else if(n.raw.topics[0]===TEND){if(s="TEND",o=parseInt(n.raw.topics[2],16),!auctions[o])continue;a+="ID: <b>"+o+"</b> | ";let t=parseInt(n.raw.topics[3],16)/1e18;a+="lot: "+t.toFixed(2)+" uni | ";let e=n.raw.data.slice(288,-248),l=parseInt(e,16)/1e27/1e18;a+="bid: "+l.toFixed(2)+" dai | ";let p=await getMedPrice(n.blockNumber);if(auctions[o].tends+=1,auctions[o].bid=l,auctions[o].bidDate=i.toUTCString().slice(5),auctions[o].bidPrice=p.toString(),auctions[o].lot=t,auctions[o].paidPrice=(l/t).toFixed(4),p>0){let t=100*(auctions[o].paidPrice/auctions[o].bidPrice-1);a+=t>0?"+"+t.toFixed(1)+" % | ":t.toFixed(1)+" % | ",a+="Price: $"+auctions[o].bidPrice+" | "}else a+="--,-- % | Price: $---,-- | "}else if(n.raw.topics[0]===DENT){if(s="DENT",o=parseInt(n.raw.topics[2],16),!auctions[o])continue;a+="ID: <b>"+o+"</b> | ";let t=parseInt(n.raw.topics[3],16)/1e18;a+="lot: "+t.toFixed(2)+" uni | ";let e=n.raw.data.slice(288,-248),l=parseInt(e,16)/1e27/1e18;a+="bid: "+l.toFixed(2)+" dai | ";let p=await getMedPrice(n.blockNumber);if(auctions[o].dents+=1,auctions[o].bid=l,auctions[o].bidDate=i.toUTCString().slice(5),auctions[o].bidPrice=p.toString(),auctions[o].lot=t,auctions[o].paidPrice=(l/t).toFixed(4),p>0){let t=100*(auctions[o].paidPrice/auctions[o].bidPrice-1);a+=t>0?"+"+t.toFixed(2)+" % | ":t.toFixed(2)+" % | ",a+="Price: $"+auctions[o].bidPrice+" | "}else a+="--,-- % | Price: $---,-- | "}else if(n.raw.topics[0]===DEAL){if(s="DEAL",o=parseInt(n.raw.topics[2],16),!auctions[o])continue;a+="ID: <b>"+o+"</b> | ";let t=await getMedPrice(n.blockNumber);if(auctions[o].dealPrice=t.toString(),auctions[o].state="CLOSE",t){a+="Paid Rate: $"+auctions[o].paidPrice+" dai/uni ";let t=100*(auctions[o].paidPrice/auctions[o].dealPrice-1);t>0?(a+="(+"+t.toFixed(2)+"%) ~ ",a+=`<b class='detail-btn' onclick='showAuctionDetails(${o})'>Lost 📋</b> | `):(a+="("+t.toFixed(2)+"%) ~ ",a+=`<b class='detail-btn' onclick='showAuctionDetails(${o})'>Won! 📋</b> | `),a+="Price: $"+auctions[o].dealPrice+" | "}else a+="Paid Rate: $"+auctions[o].paidPrice+" dai/uni (+-.--%) | ",a+="--,-- % | Price: $---,-- | "}else if(n.raw.topics[0]===TICK)s="TICK",o=parseInt(n.raw.topics[2],16),a+="ID: <b>"+o+"</b> | ",a+="Time extended! | ";else if(n.raw.topics[0]===FILE){auctions[0]={id:0,type:"FILE"},s="FILE";const t="0x6265670000000000000000000000000000000000000000000000000000000000",e="0x7461750000000000000000000000000000000000000000000000000000000000",i="0x74746c0000000000000000000000000000000000000000000000000000000000";if(n.raw.topics[2]===t){a+="WHAT: <b> BEG </b> (minimum bid increase) | ";let t=parseInt(n.raw.topics[3])/1e18;a+="VALUE: <b>"+(t=100*(t-1)).toFixed(2)+" %</b> | "}else if(n.raw.topics[2]===e){a+="WHAT: <b> TAU </b> (maximum auction duration) | ";let t=parseInt(n.raw.topics[3]);a+="VALUE: <b>"+(t=t/60/60).toFixed(1)+" hours</b> | "}else if(n.raw.topics[2]===i){a+="WHAT: <b> TTL </b> (bid lifetime / max bid duration) | ";let t=parseInt(n.raw.topics[3]);a+="VALUE: <b>"+(t/=60).toFixed(1)+" minutes</b> | "}else a+="WHAT: <b>UNKNOWN</b> | ",console.log(n.raw.topics);a+="New Flapper Update! | "}else if(n.raw.topics[0]===RELY){s="RELY",a+="WHAT: <b>Allow to call auth'ed methods --</b> | ";let t=n.raw.topics[2];a+="TO: <b>0x"+t.slice(-40)+"</b> | "}else if(n.raw.topics[0]===DENY){s="DENY",a+="WHAT: <b>Disallow to call auth'ed methods</b> | ";let t=n.raw.topics[2];a+="TO: <b>0x"+t.slice(-40)+"</b> | "}else console.log("UNKNOWN event"),console.log(n);await web3.eth.getTransaction(n.transactionHash).then(function(t){let e=t.from.slice(0,6)+"..."+t.from.slice(-4);auctions[o]&&("DENT"!==s&&"TEND"!==s||(auctions[o].bidFrom=t.from),auctions[o].txFrom=t.from);let i=`<a target="_blank" href="${`https://etherscan.io/tx/${n.transactionHash}`}">Tx:..${n.transactionHash.slice(-3)} Info</a>`;a+=`from: ${e} | ${i} >>`});let l=document.getElementById("app").innerHTML,p="";0!==t&&t!==o||(p='<div class="row flip-'+o+" "+s.toLowerCase()+'">'+s+" >> "+a+"</div>"),document.getElementById("app").innerHTML=p+l}Object.keys(auctions).length>0?showFilter():showEmptyMessage(),eventsLoaded=!0},lastBlockfetch=0,blocksBack=18095,fetchAuctions=async function(t){let e=(lastBlockfetch=await web3.eth.getBlockNumber())-blocksBack;await getFlipEvents(e),await showEvents(t)};async function newBlock(t,e){if(e){let t=e.number;if(!eventsLoaded)return;eventsLoaded=!1,await getFlipEvents(t),await showEvents(0)}else console.log(t)}async function updateGlobals(){let t=$("#globals");catContract.methods.ilks(FLIP_ILK).call().then(function(e){let n=parseInt(e.dunk)/1e45,a=100*(parseInt(e.chop)/1e18-1);t.find("#dunk").text(n.toLocaleString("en",{minimumFractionDigits:2,maximumFractionDigits:2})),t.find("#chop").text(a.toFixed(2))}),catContract.methods.litter().call().then(function(t){let e=parseInt(t)/1e45;$("#litter").text(e.toLocaleString("en",{minimumFractionDigits:2,maximumFractionDigits:2}))}),catContract.methods.box().call().then(function(t){let e=parseInt(t)/1e45;$("#box").text(e.toLocaleString("en",{minimumFractionDigits:2,maximumFractionDigits:2}))}),flipContract.methods.beg().call().then(function(e){let n=100*(e/1e18-1);t.find("#beg").text(n.toFixed(2))}),flipContract.methods.ttl().call().then(function(e){let n=e/60;t.find("#ttl").text(n.toFixed(1))}),flipContract.methods.tau().call().then(function(e){let n=e/60/60;t.find("#tau").text(n.toFixed(1))});let e=await web3.eth.getBlockNumber(),n=await getMedPrice(e);t.find("#price-med").text("$"+n.toLocaleString("en",{minimumFractionDigits:4,maximumFractionDigits:4}))}function showFilter(){let t=document.getElementById("filter-panel");if(t){t.style.display="block",document.getElementById("search").style.display="inline",document.getElementById("no-results").style.display="none",showLastUpdate()}}function showLastUpdate(){let t=document.getElementById("last-update"),e=(new Date).toLocaleString("en");t.innerHTML=`Last update: ${e}`}function hideFilterSearch(){let t=document.getElementById("search");t&&(t.style.display="none")}function showEmptyMessage(){let t=document.getElementById("filter-panel");if(t){t.style.display="block",document.getElementById("search").style.display="none",document.getElementById("no-results").style.display="block",showLastUpdate()}}function filterAuctionById(){let t=$("#fliter-id").val(),e=$(".row");e.hide(),t?$(".flip-"+t).show():e.show()}function showAuctionDetails(t){let e=auctions[t];if(!e)return void alert("Error showing auction details");let n=$("#auction-details");n&&n.hide();let a=`> <b>AUCTION ID: ${t}</b>`;a+="<hr/>";let i={minimumFractionDigits:4,maximumFractionDigits:4};a+="Started: <br/>",a+=`- DATE: ${e.kickDate} <br/>`,a+=`- LOT: ${e.kickLot.toLocaleString("en",i)} uni `,a+=`- BID: ${e.bid.toLocaleString("en",i)} dai <br/>`,a+=`- UNI MED: $${e.kickPrice} uni/dai <br/><br/>`,a+=`Bids received: ${e.tends+e.dents} <br/><br/>`,a+="Last Bid:<br/>",a+=`- DATE: ${e.bidDate} <br/>`,a+=`- FROM: ${e.bidFrom} <br/>`,a+=`- LOT: ${e.lot.toLocaleString("en",i)} uni `,a+=`- BID: ${e.bid.toLocaleString("en",i)} dai <br/>`,a+=`- PAID PRICE: $${e.paidPrice} uni/dai <br/>`,a+=`- UNI MED: $${e.bidPrice} uni/dai <br/><br/>`,a+="Ended: <br/>",a+=`- DATE: ${e.dealDate} <br/>`,a+=`- FROM: ${e.txFrom} <br/>`,a+=`- PAID PRICE: $${e.paidPrice} uni/dai <br/>`,a+=`- UNI MED: $${e.dealPrice} uni/dai <br/><br/>`,a+="Results: <br/>",a+=`- PRICE DIFF: ${(100*(e.paidPrice/e.dealPrice-1)).toFixed(2)}% <br/>`,i={minimumFractionDigits:2,maximumFractionDigits:2},a+=`- PROFIT: <b>${(e.lot*e.dealPrice-e.bid).toLocaleString("en",i)} dai</b>`,a+="<hr/>",a+='<a style="float: right;" onclick="hideAuctionDetails()">CLOSE<a/>',n&&(n.html(a),n.fadeIn("normal"))}function hideAuctionDetails(){let t=$("#auction-details");t&&t.fadeOut("normal")}updateGlobals(),fetchAuctions(0),setTimeout(function(){console.log("Getting new data from chain..."),web3.eth.subscribe("newBlockHeaders",newBlock)},5e3);