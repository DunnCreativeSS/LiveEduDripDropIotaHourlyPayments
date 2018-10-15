const seed = 'HQESBUGDSWWSNBDTBBHXKOAPD9UP9VFXKDEKLHPY9PFHMFZQAUOHLNOTMXYDWRHHLDUEZXDKCCZHCNUJO';
const seed2 = 'FTJGZHYDOHRR9HXJDNPMRPD9ZWFTOZLBYHUZLCGXWOOKUZI9QHJYICND9OCKFXKYOIVMIVQFXNRCEHTYJ';
const Promise = require('bluebird');
var https = require('https');
https.globalAgent.options.secureProtocol = 'SSLv3_method';

let IOTA = require('iota.lib.js')
let iota = new IOTA({host:'https://iotanode2.jlld.at', port:443})


var add1 = 'BPBWWWADXANWRGMZIMYEBHCF9ODDTEJDIUNDYNF9FADOWFORTY9LWLTALDYBTEVJSQNIYNHFYFFOVWBFDYYDLJNBQB';
var add2 = 'VCYIYLDGSCWBLGLHEHUWUB9VZSLBMSJPTZKASYYDJADQLTYUNPEXXCLBTPVKRDTUWUTCVJPHFSZJXZRIWYYSPTKMCZ';
iota.api.getBalances([add1], 100, function(error, success){
        if(error || !success) {
            console.log(error)
        }
        if(!success.balances) {
             console.log("Missing balances property in response")
        }

        var iotaBalance = success.balances.map((el) => { return parseInt(el) }).reduce((sum, value) => { return sum + value })
        const totalBalanceLocalized = iotaBalance.toLocaleString()
        console.log('add1: ' + totalBalanceLocalized);
          })

iota.api.getBalances([add2], 100, function(error, success){
        if(error || !success) {
            console.log(error)
        }
        if(!success.balances) {
             console.log("Missing balances property in response")
        }

        var iotaBalance = success.balances.map((el) => { return parseInt(el) }).reduce((sum, value) => { return sum + value })
        const totalBalanceLocalized = iotaBalance.toLocaleString()
        console.log('add2: ' + totalBalanceLocalized);
          })
function doit(){
    for (var hash in hashes){
        if (!hashesIgnore.includes(hashes[hash])){
    console.log(messages[hashes[hash]]);
    if (messages[hashes[hash]].remaining > 0){
    sendTransaction(seed2, messages[hashes[hash]].who, messages[hashes[hash]].amount, 'hourly pay!');
    messages[hashes[hash]].remaining = messages[hashes[hash]].remaining - messages[hashes[hash]].amount;
}
}
}
}
const express = require('express');
var app = express()

app.get('/', function(req, res) {
    try {
        res.send('<html><head><meta http-equiv="refresh" content="120"></head><body>Fees so far: ' + fees + ' IOTA</body></html>')
    } catch (err){
        console.log(err)

    }
});


var fees = 0;
setTimeout(function(){
    doit();
}, 40000)
setInterval(function(){
doit();
}, 60000 * 24);
setInterval(function(){
getTransaction(seed2)
}, 60000);
getTransaction(seed2)
            app.listen(process.env.PORT || 8081, function() {});

var hashesIgnore = ['RSPGFXVZJFGUOATIQYSX9JOQNGHFLRCTEJLDPYCHIKRFBKBCLKJB9KILDTSYJDXDXRCEAZOHGUOZGS999','SMOYRYDIAPPAW9UFASKMMGLJNWM9YRVCKCFXQNNIOBODEAPBUSM9NNDKKIPAZVHHZURLYZCQLI9F9A999']
var hashes = []
var messages = {}
function getTransaction(seed){
    iota.api.getAccountData(seed, (error, success) => {
        if(error){
            console.log(error)
        } else {
            let long = success.transfers.length
            console.log(long);
            var count = 0;
            while (count <= long - 1){
            let tx2 = 
            {
                'hash':success.transfers[count][0].hash,
                'value':success.transfers[count][0].value,
                'confirmed':success.transfers[count][0].persistence, 
                'message' : success.transfers[count][0].signatureMessageFragment
            }
            var message = tx2.message.replace(/\d+$/, "")
            if (message != 'hourly pay!'){
                if (!hashes.includes(tx2.hash)){
            hashes.push(tx2.hash);
            //messages come as daily amounts
            var msg = iota.utils.fromTrytes(message);
            var split = msg.split(" ")
            var amt = Math.floor(parseFloat(split[0]) / 24 * parseFloat(tx2.value) * .98);
            var fee = Math.floor(parseFloat(tx2.value) * .02);
            if (fee > 0){
            console.log(fee);
            fees += fee;
            }
            messages[tx2.hash] = {'message': msg, 'amount': amt, 'remaining' : amt, 'who': split[1]};
            console.log(iota.utils.fromTrytes(message));
        
        }   
        }
        count++;

        }
        console.log(hashes);
        }
    })
}

//sendTransaction(seed, add1, 997, '1 FYFZERBBZVBAZNSNVIC9XJ9WAHVXIEVDWETQWDBPFDZHLRNPBJAQVHWSBVMJRNVMCWOQKRIRJC9TFDOPDQLBSVOTGC')
// Array of transfers which defines transfer recipients and value transferred in IOTAs.



    function sendTransaction(seed, to, value, message) {

const encMessage = iota.utils.toTrytes(message);
const txArray = [{
address: to,

value,

message: encMessage,
}];
console.log(txArray);

const depth = 3;
const minWeightMagnitude = 9;
return new Promise((resolve, reject) => {
iota.api.sendTransfer(seed, depth, minWeightMagnitude, txArray, (err, result) => {
if (err) {
return console.log(err);
}
console.log(result);
resolve(result);
})
});
}

