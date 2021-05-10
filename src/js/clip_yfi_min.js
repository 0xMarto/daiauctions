"use strict";const CLIPPER_ABI=[{inputs:[{internalType:"address",name:"vat_",type:"address"},{internalType:"address",name:"spotter_",type:"address"},{internalType:"address",name:"dog_",type:"address"},{internalType:"bytes32",name:"ilk_",type:"bytes32"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"usr",type:"address"}],name:"Deny",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"what",type:"bytes32"},{indexed:!1,internalType:"uint256",name:"data",type:"uint256"}],name:"File",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"what",type:"bytes32"},{indexed:!1,internalType:"address",name:"data",type:"address"}],name:"File",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"top",type:"uint256"},{indexed:!1,internalType:"uint256",name:"tab",type:"uint256"},{indexed:!1,internalType:"uint256",name:"lot",type:"uint256"},{indexed:!0,internalType:"address",name:"usr",type:"address"},{indexed:!0,internalType:"address",name:"kpr",type:"address"},{indexed:!1,internalType:"uint256",name:"coin",type:"uint256"}],name:"Kick",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"top",type:"uint256"},{indexed:!1,internalType:"uint256",name:"tab",type:"uint256"},{indexed:!1,internalType:"uint256",name:"lot",type:"uint256"},{indexed:!0,internalType:"address",name:"usr",type:"address"},{indexed:!0,internalType:"address",name:"kpr",type:"address"},{indexed:!1,internalType:"uint256",name:"coin",type:"uint256"}],name:"Redo",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"usr",type:"address"}],name:"Rely",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"max",type:"uint256"},{indexed:!1,internalType:"uint256",name:"price",type:"uint256"},{indexed:!1,internalType:"uint256",name:"owe",type:"uint256"},{indexed:!1,internalType:"uint256",name:"tab",type:"uint256"},{indexed:!1,internalType:"uint256",name:"lot",type:"uint256"},{indexed:!0,internalType:"address",name:"usr",type:"address"}],name:"Take",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"id",type:"uint256"}],name:"Yank",type:"event"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"active",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"buf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"calc",outputs:[{internalType:"contract AbacusLike",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"chip",outputs:[{internalType:"uint64",name:"",type:"uint64"}],stateMutability:"view",type:"function"},{inputs:[],name:"count",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"cusp",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"usr",type:"address"}],name:"deny",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"dog",outputs:[{internalType:"contract DogLike",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"what",type:"bytes32"},{internalType:"uint256",name:"data",type:"uint256"}],name:"file",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"what",type:"bytes32"},{internalType:"address",name:"data",type:"address"}],name:"file",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"getStatus",outputs:[{internalType:"bool",name:"needsRedo",type:"bool"},{internalType:"uint256",name:"price",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"ilk",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tab",type:"uint256"},{internalType:"uint256",name:"lot",type:"uint256"},{internalType:"address",name:"usr",type:"address"},{internalType:"address",name:"kpr",type:"address"}],name:"kick",outputs:[{internalType:"uint256",name:"id",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"kicks",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"list",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"address",name:"kpr",type:"address"}],name:"redo",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"usr",type:"address"}],name:"rely",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"sales",outputs:[{internalType:"uint256",name:"pos",type:"uint256"},{internalType:"uint256",name:"tab",type:"uint256"},{internalType:"uint256",name:"lot",type:"uint256"},{internalType:"address",name:"usr",type:"address"},{internalType:"uint96",name:"tic",type:"uint96"},{internalType:"uint256",name:"top",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"spotter",outputs:[{internalType:"contract SpotterLike",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"stopped",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"tail",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"amt",type:"uint256"},{internalType:"uint256",name:"max",type:"uint256"},{internalType:"address",name:"who",type:"address"},{internalType:"bytes",name:"data",type:"bytes"}],name:"take",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"tip",outputs:[{internalType:"uint192",name:"",type:"uint192"}],stateMutability:"view",type:"function"},{inputs:[],name:"vat",outputs:[{internalType:"contract VatLike",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"vow",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"wards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"yank",outputs:[],stateMutability:"nonpayable",type:"function"}],MEDIANIZER_ABI=[{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"val",type:"uint256"},{indexed:!1,internalType:"uint256",name:"age",type:"uint256"}],name:"LogMedianPrice",type:"event"},{anonymous:!0,inputs:[{indexed:!0,internalType:"bytes4",name:"sig",type:"bytes4"},{indexed:!0,internalType:"address",name:"usr",type:"address"},{indexed:!0,internalType:"bytes32",name:"arg1",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"arg2",type:"bytes32"},{indexed:!1,internalType:"bytes",name:"data",type:"bytes"}],name:"LogNote",type:"event"},{constant:!0,inputs:[],name:"age",outputs:[{internalType:"uint32",name:"",type:"uint32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"bar",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"bud",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"usr",type:"address"}],name:"deny",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address[]",name:"a",type:"address[]"}],name:"diss",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"a",type:"address"}],name:"diss",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address[]",name:"a",type:"address[]"}],name:"drop",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address[]",name:"a",type:"address[]"}],name:"kiss",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"a",type:"address"}],name:"kiss",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address[]",name:"a",type:"address[]"}],name:"lift",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"orcl",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"peek",outputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256[]",name:"val_",type:"uint256[]"},{internalType:"uint256[]",name:"age_",type:"uint256[]"},{internalType:"uint8[]",name:"v",type:"uint8[]"},{internalType:"bytes32[]",name:"r",type:"bytes32[]"},{internalType:"bytes32[]",name:"s",type:"bytes32[]"}],name:"poke",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"read",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"usr",type:"address"}],name:"rely",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"bar_",type:"uint256"}],name:"setBar",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"uint8",name:"",type:"uint8"}],name:"slot",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"wards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"wat",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"}],DOG_ABI=[{inputs:[{internalType:"address",name:"vat_",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"ilk",type:"bytes32"},{indexed:!0,internalType:"address",name:"urn",type:"address"},{indexed:!1,internalType:"uint256",name:"ink",type:"uint256"},{indexed:!1,internalType:"uint256",name:"art",type:"uint256"},{indexed:!1,internalType:"uint256",name:"due",type:"uint256"},{indexed:!1,internalType:"address",name:"clip",type:"address"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"Bark",type:"event"},{anonymous:!1,inputs:[],name:"Cage",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"usr",type:"address"}],name:"Deny",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"ilk",type:"bytes32"},{indexed:!1,internalType:"uint256",name:"rad",type:"uint256"}],name:"Digs",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"what",type:"bytes32"},{indexed:!1,internalType:"uint256",name:"data",type:"uint256"}],name:"File",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"what",type:"bytes32"},{indexed:!1,internalType:"address",name:"data",type:"address"}],name:"File",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"ilk",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"what",type:"bytes32"},{indexed:!1,internalType:"uint256",name:"data",type:"uint256"}],name:"File",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"ilk",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"what",type:"bytes32"},{indexed:!1,internalType:"address",name:"clip",type:"address"}],name:"File",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"usr",type:"address"}],name:"Rely",type:"event"},{inputs:[],name:"Dirt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"Hole",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"ilk",type:"bytes32"},{internalType:"address",name:"urn",type:"address"},{internalType:"address",name:"kpr",type:"address"}],name:"bark",outputs:[{internalType:"uint256",name:"id",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"cage",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"ilk",type:"bytes32"}],name:"chop",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"usr",type:"address"}],name:"deny",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"ilk",type:"bytes32"},{internalType:"uint256",name:"rad",type:"uint256"}],name:"digs",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"ilk",type:"bytes32"},{internalType:"bytes32",name:"what",type:"bytes32"},{internalType:"uint256",name:"data",type:"uint256"}],name:"file",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"what",type:"bytes32"},{internalType:"uint256",name:"data",type:"uint256"}],name:"file",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"what",type:"bytes32"},{internalType:"address",name:"data",type:"address"}],name:"file",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"ilk",type:"bytes32"},{internalType:"bytes32",name:"what",type:"bytes32"},{internalType:"address",name:"clip",type:"address"}],name:"file",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"",type:"bytes32"}],name:"ilks",outputs:[{internalType:"address",name:"clip",type:"address"},{internalType:"uint256",name:"chop",type:"uint256"},{internalType:"uint256",name:"hole",type:"uint256"},{internalType:"uint256",name:"dirt",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"live",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"usr",type:"address"}],name:"rely",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"vat",outputs:[{internalType:"contract VatLike",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"vow",outputs:[{internalType:"contract VowLike",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"wards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],CALC_ABI=[{inputs:[],name:"cut",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"top",type:"uint256"},{internalType:"uint256",name:"dur",type:"uint256"}],name:"price",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"step",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"tau",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],CLIP_ADDRESS="0x9daCc11dcD0aa13386D295eAeeBBd38130897E6f",CALC_ADDRESS="0x1f206d7916Fd3B1b5B0Ce53d5Cab11FCebc124DA",MEDIANIZER_ADDRESS="0x89AC26C0aFCB28EC55B6CD2F6b7DAD867Fa24639",DOG_ADDRESS="0x135954d155898D42C90D2a57824C690e0c7BEf1B",ILK="0x4c494e4b2d410000000000000000000000000000000000000000000000000000",SYMBOL="yfi",SYMBOL_UP=SYMBOL.toUpperCase(),SYMBOL_CAP=SYMBOL.charAt(0).toUpperCase()+SYMBOL.slice(1);let web3,usingRemoteProvider=!0;if(void 0!==window.ethereum&&window.ethereum.networkVersion&&"1"===window.ethereum.networkVersion&&window.ethereum.isMetaMask)try{(web3=new Web3(window.ethereum)).eth.subscribe("newBlockHeaders").unsubscribe(),console.log("Using local web3 provider"),usingRemoteProvider=!1}catch(e){usingRemoteProvider=!0}let web3Connected=!usingRemoteProvider;if(usingRemoteProvider)try{web3=new Web3;var infura="wss://mainnet.infura.io/ws/v3/f77d1e38219b45d4b4965a1c247c1aff",provider=new Web3.providers.WebsocketProvider(infura);provider.on("error",e=>{web3Connected=!1}),provider.on("end",e=>{web3Connected=!1}),web3.setProvider(provider),console.log("Using remote web3 provider"),web3Connected=!0}catch(e){web3Connected=!1}const clipContract=new web3.eth.Contract(CLIPPER_ABI,CLIP_ADDRESS),medianizerContract=new web3.eth.Contract(MEDIANIZER_ABI,MEDIANIZER_ADDRESS),dogContract=new web3.eth.Contract(DOG_ABI,DOG_ADDRESS),calcContract=new web3.eth.Contract(CALC_ABI,CALC_ADDRESS);var events=[];async function getFlipEvents(e){return console.log(`Get auction events from block: ${e}`),clipContract.getPastEvents("allEvents",{fromBlock:e,toBlock:"latest"},function(e,t){e?console.log(e):(console.log("Received Events:",t.length),events=t)})}let cachePrice={block:0,val:0};async function getMedPrice(e){if(cachePrice.block===e)return cachePrice.val;let t=0;return await medianizerContract.getPastEvents("LogMedianPrice",{fromBlock:e-1e3,toBlock:e},function(e,n){if(e)console.log(e);else{var a=n[n.length-1];if(a){let e=web3.utils.toBN(a.returnValues[0]),n=web3.utils.fromWei(e);t=Number(parseFloat(n).toFixed(4))}}}),cachePrice={block:e,val:t},t}let cacheDate={block:0,val:new Date};async function getBlockDate(e){if(cacheDate.block===e)return cacheDate.val;let t=new Date;return await web3.eth.getBlock(e).then(function(n){if(n){let e=n.timestamp;t=new Date(1e3*e)}else console.log(`Block ${e}: error getting date`)}),cacheDate={block:e,val:t},t}const KICK="0x7c5bfdc0a5e8192f6cd4972f382cec69116862fb62e6abff8003874c58e064b8",TAKE="0x05e309fd6ce72f2ab888a20056bb4210df08daed86f21f95053deb19964d86b1",REDO="0x275de7ecdd375b5e8049319f8b350686131c219dd4dc450a08e9cf83b03c865f",FILE="0xe986e40cc8c151830d4f61050f4fb2e4add8567caad2d5f5496f9158e91fe4c7",FILE_CONTRACT="0x8fef588b5fc1afbf5b2f06c1a435d513f208da2e6704c3d8f0e0ec91167066ba",DENY="0x184450df2e323acec0ed3b5c7531b81f9b4cdef7914dfd4c0a4317416bb5251b",RELY="0xdd0e34038ac38b2a1ce960229778ac48a8719bc900b6c4f8d0475c6e8b385a60";var auctions={},eventsLoaded=!1,showEvents=async function(e){0===Object.keys(auctions).length&&(document.getElementById("app").innerHTML=""),events.length>0&&hideFilterSearch();for(let t=0;t<events.length;t++){let n=events[t],a="",i=await getBlockDate(n.blockNumber);a=i.toLocaleString("en-GB")+" | ";let s="Unknown",u=0;if(n.raw.topics[0]===KICK){s="KICK",u=parseInt(n.returnValues.id,10),a+="ID: <b>"+u+"</b> | ";let e=n.returnValues.lot/1e18;a+="lot: "+e.toFixed(2)+` ${SYMBOL} | `;let t=n.returnValues.tab/1e27/1e18;a+="tab: "+t.toFixed(2)+" dai | ";let p=n.returnValues.top/1e27;a+="top: $"+p.toFixed(2)+" | ";let o=n.returnValues.kpr.slice(0,6)+"..."+n.returnValues.kpr.slice(-6);a+="kpr: "+o+" | ";let r=await getMedPrice(n.blockNumber);r>0?a+=`${SYMBOL_CAP} Price: $${r.toFixed(2)} | `:(a+=`${SYMBOL_CAP} Price: $---.-- | `,r=0),auctions[u]={id:u,kickDate:i.toUTCString().slice(5),kickPrice:r.toFixed(2),kickLot:e,top:p.toFixed(2),keeper:n.returnValues.kpr,redos:0,takes:[],bid:null,bidFrom:null,bidDate:null,bidPrice:null,lot:e,tab:t,guy:null,dealPrice:null,paidPrice:null,state:"OPEN"}}else if(n.raw.topics[0]===TAKE){if(s="TAKE",u=parseInt(n.raw.topics[1],16),!auctions[u])continue;a+="ID: <b>"+u+"</b> | ";let e=n.returnValues.owe/1e27/1e18,t=n.returnValues.price/1e27,p=e/t,o=n.returnValues.tab/1e27/1e18;a+="lot: "+p.toFixed(2)+` ${SYMBOL} | `,a+="owe: "+e.toFixed(2)+" dai | ";let r=await getMedPrice(n.blockNumber);auctions[u].bid=e,auctions[u].bidDate=i.toUTCString().slice(5),auctions[u].bidPrice=r.toString(),auctions[u].lot=p,auctions[u].tab=o,auctions[u].paidPrice=t.toFixed(2),auctions[u].dealPrice=r?r.toFixed(2):auctions[u].paidPrice;let l=auctions[u].takes.length;if(auctions[u].takes.push({takeDate:i.toUTCString().slice(5),lot:p,bid:e,paidPrice:t.toFixed(2),medPrice:r.toFixed(2)}),r){a+="paid: $"+auctions[u].paidPrice+" ";let e=100*(auctions[u].paidPrice/auctions[u].dealPrice-1);e>0?(a+="(+"+e.toFixed(2)+"%) ~ ",a+=`<b class='detail-btn' onclick='showAuctionDetails(${u},${l})'>Lost 📋</b> | `):(a+="("+e.toFixed(2)+"%) ~ ",a+=`<b class='detail-btn' onclick='showAuctionDetails(${u},${l})'>Won! 📋</b> | `),a+=`${SYMBOL_CAP} Price: $${auctions[u].dealPrice} | `}else a+="paid: $"+auctions[u].paidPrice+" (+-.--%) | ",a+="--.-- % | Price: $---.-- | ";0!==p&&0!==o||(auctions[u].state="CLOSE")}else if(n.raw.topics[0]===REDO){s="REDO",u=parseInt(n.returnValues.id,10),a+="ID: <b>"+u+"</b> | ";let e=n.returnValues.lot/1e18;a+="lot: "+e.toFixed(2)+` ${SYMBOL} | `;let t=n.returnValues.tab/1e27/1e18;a+="tab: "+t.toFixed(2)+" dai | ";let p=n.returnValues.top/1e27;a+="top: $"+p.toFixed(2)+" | ";let o=n.returnValues.kpr.slice(0,6)+"..."+n.returnValues.kpr.slice(-6);a+="kpr: "+o+" | ";let r=await getMedPrice(n.blockNumber);r>0?a+=`${SYMBOL_CAP} Price: $${r.toFixed(2)} | `:(a+=`${SYMBOL_CAP} Price: $---.-- | `,r=0),auctions[u].kickDate=i.toUTCString().slice(5),auctions[u].kickPrice=r.toFixed(2),auctions[u].kickLot=e,auctions[u].top=p.toFixed(2),auctions[u].keeper=n.returnValues.kpr,auctions[u].redos+=1,auctions[u].bid=null,auctions[u].bidFrom=null,auctions[u].bidDate=null,auctions[u].bidPrice=null,auctions[u].lot=e,auctions[u].guy=null,auctions[u].dealPrice=null,auctions[u].paidPrice=null,auctions[u].state="OPEN"}else if(n.raw.topics[0]===FILE||n.raw.topics[0]===FILE_CONTRACT){auctions[0]={id:0,type:"FILE"},s="FILE";const e="0x6375737000000000000000000000000000000000000000000000000000000000",t="0x7461696c00000000000000000000000000000000000000000000000000000000",i="0x6275660000000000000000000000000000000000000000000000000000000000",u="0x7469700000000000000000000000000000000000000000000000000000000000",p="0x6368697000000000000000000000000000000000000000000000000000000000",o="0x766f770000000000000000000000000000000000000000000000000000000000",r="0x63616c6300000000000000000000000000000000000000000000000000000000";if(n.raw.topics[1]===t){a+="WHAT: <b> TAIL </b> (maximum auction duration) | ";let e=parseInt(n.raw.data)/60;a+="VALUE: <b>"+e.toFixed(2)+" min</b> | "}else if(n.raw.topics[1]===e){a+="WHAT: <b> CUSP </b> (minimum auction end price) | ";let e=100*(parseInt(n.raw.data)/1e27-1);a+="VALUE: <b>"+e.toFixed(2)+" %</b> | "}else if(n.raw.topics[1]===i){a+="WHAT: <b> BUF </b> (starting price increment) | ";let e=100*(parseInt(n.raw.data)/1e27-1);a+="VALUE: <b>+"+e.toFixed(2)+" %</b> | "}else if(n.raw.topics[1]===u){a+="WHAT: <b> TIP </b> (kick fix reward) | ";let e=parseInt(n.raw.data)/1e45;a+="VALUE: <b>"+e.toFixed(2)+" dai</b> | "}else if(n.raw.topics[1]===p){a+="WHAT: <b> CHIP </b> (kick variable reward) | ";let e=parseInt(n.raw.data)/1e18*100;a+="VALUE: <b>"+e.toFixed(2)+" %</b> | "}else if(n.raw.topics[1]===o){a+="WHAT: <b> VOW </b> (System Stabilizer Contract) | ";let e=`0x${n.raw.data.slice(-40)}`;a+="VALUE: <b>"+e+"</b> | "}else if(n.raw.topics[1]===r){a+="WHAT: <b> CALC </b> (Auction Price Manager) | ";let e=`0x${n.raw.data.slice(-40)}`;a+="VALUE: <b>"+e+"</b> | "}else a+="WHAT: <b>UNKNOWN</b> | ",console.log(n.raw.topics);a+="New Update! | "}else if(n.raw.topics[0]===RELY){s="RELY",auctions[0]={id:0,type:s},a+="WHAT: <b>Allow to call auth'ed methods --</b> | ";let e=n.raw.topics[1];a+="TO: <b>0x"+e.slice(-40)+"</b> | "}else if(n.raw.topics[0]===DENY){s="DENY",auctions[0]={id:0,type:s},a+="WHAT: <b>Disallow to call auth'ed methods</b> | ";let e=n.raw.topics[1];a+="TO: <b>0x"+e.slice(-40)+"</b> | "}else auctions[0]={id:0,type:"UNKNOWN"},console.log("UNKNOWN event:"),console.log(n);await web3.eth.getTransaction(n.transactionHash).then(function(e){let t=e.from.slice(0,6)+"..."+e.from.slice(-4);auctions[u]&&("TAKE"===s&&(auctions[u].bidFrom=e.from),auctions[u].txFrom=e.from);let i=`<a target="_blank" href="${`https://etherscan.io/tx/${n.transactionHash}`}">Tx:..${n.transactionHash.slice(-3)} Info</a>`;a+=`from: ${t} | ${i} >>`});let p=s.toLowerCase();auctions[u]&&"CLOSE"===auctions[u].state&&(p+=" deal");let o=document.getElementById("app").innerHTML,r="";0!==e&&e!==u||(r='<div class="row flip-'+u+" "+p+'">',r+=s+" >> "+a,r+="</div>"),document.getElementById("app").innerHTML=r+o}Object.keys(auctions).length>0?showFilter():showEmptyMessage(),eventsLoaded=!0},lastBlockfetch=0,blocksBack=18095,fetchAuctions=async function(e){let t=(lastBlockfetch=await web3.eth.getBlockNumber())-blocksBack;await getFlipEvents(t),await showEvents(e)};async function loadAllHistory(){if(usingRemoteProvider){alert("Sorry, this feature is disabled using the remote Ethereum provider.\n\nTry to install MetaMask and select the correct network")}else hideFilterSearch(),hideEmptyMessage(),events=[],auctions={},eventsLoaded=!1,blocksBack=await web3.eth.getBlockNumber(),fetchAuctions(0)}function playAudio(){let e=document.getElementById("audio-special");e.play(),e.style.display="inline"}async function newBlock(e,t){if(t){let e=t.number;if(!eventsLoaded)return;eventsLoaded=!1,await getFlipEvents(e),await showEvents(0)}else console.log(e)}async function updateGlobals(){let e=$("#globals");dogContract.methods.ilks(ILK).call().then(function(t){let n=100*(parseInt(t.chop)/1e18-1),a=parseInt(t.dirt)/1e45,i=parseInt(t.hole)/1e45;e.find("#chop").text(n.toFixed(2));let s={minimumFractionDigits:2,maximumFractionDigits:2};e.find("#dirt").text(a.toLocaleString("en",s)),s={minimumFractionDigits:0,maximumFractionDigits:0},e.find("#hole").text(i.toLocaleString("en",s))}),dogContract.methods.Dirt().call().then(function(e){let t=parseInt(e)/1e45;$("#litter").text(t.toLocaleString("en",{minimumFractionDigits:2,maximumFractionDigits:2}))}),dogContract.methods.Hole().call().then(function(e){let t=parseInt(e)/1e45;$("#box").text(t.toLocaleString("en",{minimumFractionDigits:2,maximumFractionDigits:2}))}),clipContract.methods.buf().call().then(function(t){let n=100*(t/1e27-1),a=n>0?`+${n.toFixed(2)}`:`${n.toFixed(2)}`;e.find("#buf").text(a)}),clipContract.methods.kicks().call().then(function(t){let n=1*t;e.find("#kicks").text(`${n.toFixed(0)}`)}),calcContract.methods.step().call().then(function(t){let n=1*t;e.find("#step").text(n.toFixed(2))}),calcContract.methods.cut().call().then(function(t){let n=Math.abs(100*(t/1e27-1));e.find("#cut").text(n.toFixed(2))});let t=await web3.eth.getBlockNumber(),n=await getMedPrice(t);e.find("#price-med").text("$"+n.toLocaleString("en",{minimumFractionDigits:2,maximumFractionDigits:2}))}function showFilter(){let e=document.getElementById("filter-panel");if(e){e.style.display="block",document.getElementById("search").style.display="inline",document.getElementById("no-results").style.display="none",showLastUpdate()}}function showLastUpdate(){let e=document.getElementById("last-update"),t=(new Date).toLocaleString("en-GB");e.innerHTML=`Last Update: ${t}`}function hideFilterSearch(){let e=document.getElementById("search");e&&(e.style.display="none")}function hideEmptyMessage(){document.getElementById("no-results").style.display="none"}function showEmptyMessage(){let e=document.getElementById("filter-panel");if(e){e.style.display="block",document.getElementById("search").style.display="none",document.getElementById("no-results").style.display="block",showLastUpdate()}}function filterAuctionById(){let e=$("#fliter-id").val(),t=$(".row");t.hide(),e?$(".flip-"+e).show():t.show()}function showAuctionDetails(e,t){let n=auctions[e];if(!n)return void alert("Error showing auction details");let a=$("#auction-details");a&&a.hide();let i=`> <b>AUCTION ID: ${e}</b>`;i+="<hr/>";let s={minimumFractionDigits:2,maximumFractionDigits:2};if(i+="Started: <br/>",i+=`- DATE: ${n.kickDate} <br/>`,i+=`- KEEPER: ${n.keeper} <br/>`,i+=`- LOT: ${n.kickLot.toLocaleString("en",s)} ${SYMBOL} <br/>`,i+=`- TAB: ${n.bid.toLocaleString("en",s)} dai <br/>`,i+=`- INITIAL TOP: $${n.top} <br/>`,i+=`- ${SYMBOL_UP} PRICE: $${n.kickPrice} (Maker Medianizer)<br/><br/>`,i+=`Redos received: ${n.redos} <br/>`,i+=`Takes received: ${n.takes.length} <br/><br/>`,void 0===t){i+="Last Take:<br/>",i+=`- DATE: ${n.bidDate} <br/>`,i+=`- FROM: ${n.bidFrom} <br/>`,i+=`- LOT: ${n.lot.toLocaleString("en",s)} ${SYMBOL} <br/>`,i+=`- OWE: ${n.bid.toLocaleString("en",s)} dai <br/>`,i+=`- PAID PRICE: $${n.paidPrice} ${SYMBOL}/dai <br/>`,i+=`- ${SYMBOL_UP} PRICE: $${n.bidPrice} (Maker Medianizer)<br/><br/>`,i+="Results: <br/>",i+=`- PRICE DIFF: ${(100*(n.paidPrice/n.dealPrice-1)).toFixed(2)}% <br/>`,s={minimumFractionDigits:2,maximumFractionDigits:2},i+=`- PROFIT: <b>${(n.lot*n.dealPrice-n.bid).toLocaleString("en",s)} dai</b>`}else{i+="This Take:<br/>";let e=n.takes[t];i+=`- DATE: ${e.takeDate} <br/>`,i+=`- LOT: ${e.lot.toLocaleString("en",s)} ${SYMBOL} <br/>`,i+=`- OWE: ${e.bid.toLocaleString("en",s)} dai <br/>`,i+=`- PAID PRICE: $${e.paidPrice} ${SYMBOL}/dai <br/>`,i+=`- ${SYMBOL_UP} PRICE: $${e.medPrice} (Maker Medianizer)<br/><br/>`,i+="Results: <br/>",i+=`- PRICE DIFF: ${(100*(e.paidPrice/e.medPrice-1)).toFixed(2)}% <br/>`,s={minimumFractionDigits:2,maximumFractionDigits:2},i+=`- PROFIT: <b>${(e.lot*e.medPrice-e.bid).toLocaleString("en",s)} dai</b>`}i+="<hr/>",i+='<a style="float: right;" onclick="hideAuctionDetails()">CLOSE<a/>',a&&(a.html(i),a.fadeIn("normal"))}function hideAuctionDetails(){let e=$("#auction-details");e&&e.fadeOut("normal")}updateGlobals(),fetchAuctions(0),setTimeout(function(){web3Connected?(console.log("Getting new data from chain..."),web3.eth.subscribe("newBlockHeaders",newBlock)):alert("Ops! Could not connect to Ethereum.\n\nPlease connect Metamask, clear cache and refresh :-)")},4e3);