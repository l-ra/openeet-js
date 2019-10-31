const data = {
	"dat_odesl":"2019-10-31T01:44:45+01:00",
	"prvni_zaslani":"true",
	"uuid_zpravy":"8c13f57e-e250-4fcd-99d8-77b1088d4b84",
	"dic_popl":"CZ7312261506",
	"id_provoz":"41",
	"id_pokl":"POKLADNA01",
	"porad_cis":"1",
	"dat_trzby":"2019-10-31T01:44:45+01:00",
	"celk_trzba":"0.00",
	"rezim":"0",
	"overeni":"false",
	"pkp":"",
	"bkp":""
}

const privateKey = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDct0DGcPgOdSqY
Y4zAaIQPI+D44clgYHQ2xJJClYle51tn/12enc+XlWkhntmusPOxhWlIzpUeLMqv
0SVhUB07BVChJDs+SgYgjEPhpWRB3IdDbwMNoh+rSTc2gq8XAYbEcXP/i1yVSwsE
w77dyT9TPdsESQ5YOr8kYAfS4Q3K+gixXE7URVu40M2NL5Vb0V0R5ip62HNNwCjJ
V2JHZWD7o6v6nQWROTtV0VBdzfv0ZgeBq7xhNJRVXKP68gQiuqY2r/34HsXtn3e4
2dPfEWkMZHnO+EQIg+EAMBS7r8fvkzB1gPpyUjhQ+Sw+hy1HlY6pY8iN8z8viBlf
M8ClJmgBAgMBAAECggEBAKTF8gezgpxYgCov934VCLG82VE0ToAywc+5RG+M73b4
RVcIX73wlm/VzRyaWGyAEg3vSUBfaReT3OUQwFU71/ad6ynBwLCp1pUp4ets68H3
fsuq7p6Y8AeRqzR4r3n/W7r/79dRFRcnZNxzveQZP7tHLGCwoZLgmJ3xSyX1ebST
PgXi+HiTINsGjHOnm9aN2VR3X33HQP9UKUV4ujtwEs005mkf3+hUIR0fdHlqx5Vg
RplSA9osYOrsxziP7rG6skoQkzTm9JgKQU/cq/FlLpdTCAUilvx5unmz6rUPwxNB
4bgNdGp5PFKTCCXIUstiCeoSpBXPnAxNs4NbeNkz7tkCgYEA9y/kXzNwQF1UbAkr
GF1TTR0+GDpIztseUPHQjl1/WRdNrAB/58/Y0dhoj45MvE5GT9uja7Avfz2bgPuf
mOFH0mhZfxLu7tV5e3zzltqpzMb3RBA0wPVjTU9G1SckckwUI3+mwfK0lDhdGwxj
OY3PuOLdwvNYWWAD3baHFXad4lMCgYEA5JXBKAEhqOSL1xN1P7t/n0ebcMZJY2Ka
xAthMq6Px2FcOnxIn5dEIPECu+3uDmPvVA6tVrUvAlKWy6Fc809hXzwb4uDn6xu2
Ybs2yWxAWL1CxKlu7K4DRUKu+nHcjQ4IgstOk4ApajoUUx6nDUWRRi1Y+wrnfXzV
6WEUalv/qdsCgYEAymm7VoHmr649TWKMmZ0Cc6k4idpgeJNR1fLOV2YUvD2q6uhV
1NuMrvnJVZSvHZvzU72Fqs9RdZ5bUlm6LRR9Hb05XCeC5KyGmCqPxb41QWzEWkXz
DPdkY5BBbpZo7/eAnjkPss4uNRmalGWmcyC/MqUD93oRpM5NHCc1osvJKeUCgYBi
qVygprRfkJ3nLCfcZVJ1blPiPkOo2QOSAJNoa731QcmsGL7D22d1jHEwqkapAWto
bZlVpohuyTT7GV/kSOvvTiN/LrILYX+7+TFxiP7RDoeGGNee4pDY0SpzQLgATgFQ
au40bgnyJrVlFwLlkJRepO4WFSPLnxk5TUShj6nvJwKBgG76Wd3OzKOn0XtLo9mA
OsLb3rZEGpC8BL/mFKBzUk45B7zgvu9JW3S3vhOaonnm9A9l9YYGi+TQgoOkQ1gj
U9Kd8qTt8lP2Pa7vNn46k8f6Cjvpa84GXC2SjK2BeCC0SSbL1nCUCodbBjLWNouI
QodStecsNZouBjga7I8bEpz+
-----END PRIVATE KEY-----
`

const encoder = new TextEncoder()
const decoder = new TextDecoder("utf-8")

// https://stackoverflow.com/questions/40031688/javascript-arraybuffer-to-hex
function buf2hex(buffer) { // buffer is an ArrayBuffer
    return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
}

// https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}

/*
Convert a string into an ArrayBuffer
from https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String
*/
function str2ab(str) {
    const buf = new ArrayBuffer(str.length);
    const bufView = new Uint8Array(buf);
    for (let i = 0, strLen = str.length; i < strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
}

/*
https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#Examples

Import a PEM encoded RSA private key, to use for RSA-PSS signing.
Takes a string containing the PEM encoded key, and returns a Promise
that will resolve to a CryptoKey representing the private key.
*/
function importPrivateKey(pem) {
    // fetch the part of the PEM string between header and footer
    const pemHeader = "-----BEGIN PRIVATE KEY-----";
    const pemFooter = "-----END PRIVATE KEY-----";
    const pemContents = pem.replace(pemHeader,"","g").replace(pemFooter,"","g").replace("\n","","g")
    const binaryDer = Base64Binary.decode(pemContents);
 
    return window.crypto.subtle.importKey(
      "pkcs8",
      binaryDer,
      {
        name: "RSASSA-PKCS1-v1_5",
        // Consider using a 4096-bit key for systems that require long-term security
        //modulusLength: 2048,
        //publicExponent: new Uint8Array([1, 0, 1]),
        hash: "SHA-256",
      },
      false,
      ["sign"]
    );
  }

  //https://gist.github.com/jonleighton/958841#gistcomment-1953137
  function base64ArrayBuffer(arrayBuffer) {
    let base64 = '';
    const encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  
    const bytes = new Uint8Array(arrayBuffer);
    const byteLength = bytes.byteLength;
    const byteRemainder = byteLength % 3;
    const mainLength = byteLength - byteRemainder;
  
    let a;
    let b;
    let c;
    let d;
    let chunk;
  
    // Main loop deals with bytes in chunks of 3
    for (let i = 0; i < mainLength; i += 3) {
      // Combine the three bytes into a single integer
      chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
  
      // Use bitmasks to extract 6-bit segments from the triplet
      a = (chunk & 16515072) >> 18; // 16515072 = (2^6 - 1) << 18
      b = (chunk & 258048) >> 12; // 258048   = (2^6 - 1) << 12
      c = (chunk & 4032) >> 6; // 4032     = (2^6 - 1) << 6
      d = chunk & 63;        // 63       = 2^6 - 1
  
      // Convert the raw binary segments to the appropriate ASCII encoding
      base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
    }
  
    // Deal with the remaining bytes and padding
    if (byteRemainder === 1) {
      chunk = bytes[mainLength];
  
      a = (chunk & 252) >> 2; // 252 = (2^6 - 1) << 2
  
      // Set the 4 least significant bits to zero
      b = (chunk & 3) << 4; // 3   = 2^2 - 1
  
      base64 += `${encodings[a]}${encodings[b]}==`;
    } else if (byteRemainder === 2) {
      chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];
  
      a = (chunk & 64512) >> 10; // 64512 = (2^6 - 1) << 10
      b = (chunk & 1008) >> 4; // 1008  = (2^6 - 1) << 4
  
      // Set the 2 least significant bits to zero
      c = (chunk & 15) << 2; // 15    = 2^4 - 1
  
      base64 += `${encodings[a]}${encodings[b]}${encodings[c]}=`;
    }
  
    return base64;
  }

/*
Copyright (c) 2011, Daniel Guerrero
All rights reserved.
Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL DANIEL GUERRERO BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Uses the new array typed in javascript to binary base64 encode/decode
 * at the moment just decodes a binary base64 encoded
 * into either an ArrayBuffer (decodeArrayBuffer)
 * or into an Uint8Array (decode)
 * 
 * References:
 * https://developer.mozilla.org/en/JavaScript_typed_arrays/ArrayBuffer
 * https://developer.mozilla.org/en/JavaScript_typed_arrays/Uint8Array
 */

var Base64Binary = {
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
	
	/* will return a  Uint8Array type */
	decodeArrayBuffer: function(input) {
		var bytes = (input.length/4) * 3;
		var ab = new ArrayBuffer(bytes);
		this.decode(input, ab);
		
		return ab;
	},

	removePaddingChars: function(input){
		var lkey = this._keyStr.indexOf(input.charAt(input.length - 1));
		if(lkey == 64){
			return input.substring(0,input.length - 1);
		}
		return input;
	},

	decode: function (input, arrayBuffer) {
		//get last chars to see if are valid
		input = this.removePaddingChars(input);
		input = this.removePaddingChars(input);

		var bytes = parseInt((input.length / 4) * 3, 10);
		
		var uarray;
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;
		var j = 0;
		
		if (arrayBuffer)
			uarray = new Uint8Array(arrayBuffer);
		else
			uarray = new Uint8Array(bytes);
		
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
		
		for (i=0; i<bytes; i+=3) {	
			//get the 3 octects in 4 ascii chars
			enc1 = this._keyStr.indexOf(input.charAt(j++));
			enc2 = this._keyStr.indexOf(input.charAt(j++));
			enc3 = this._keyStr.indexOf(input.charAt(j++));
			enc4 = this._keyStr.indexOf(input.charAt(j++));
	
			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;
	
			uarray[i] = chr1;			
			if (enc3 != 64) uarray[i+1] = chr2;
			if (enc4 != 64) uarray[i+2] = chr3;
		}
	
		return uarray;	
	}
}

async function loadTemplate(template) {
    const resp = await fetch(template) //{headers:{"Cache-Control":"no-cache"}}
    return await resp.arrayBuffer()
}

async function checkHash(name, hash,data){
    const computedArr = await crypto.subtle.digest("SHA-1",data)
    const computed = buf2hex(computedArr)
    if ( computed.toLowerCase() !== hash.toLowerCase() ) throw new Error(`Failed to check hash for ${name} expected: ${hash} computed: ${computed}`)
}

async function loadTemplates(){

    const [sha1sum, template_body, template_request, template_signature] = await Promise.all([
        await loadTemplate("templates/sha1sum.txt"),
        await loadTemplate("templates/template_body.txt"),
        await loadTemplate("templates/template_request.txt"),
        await loadTemplate("templates/template_signature.txt")
    ])

    const ret = {sha1sum, template_body, template_request, template_signature} 

    const sha1sumTxt = decoder.decode(sha1sum)
    sha1sumTxt.split("\n")
    .map((v)=>{
        if (v=="") return null;
        const [hash,filename] = v.split(/\s+/)
        return {hash, filename}
    })
    .forEach((v)=>{
        if (v==null) return;
        //console.log(`checking sha1 ${v.hash} of file ${v.filename.replace(".txt","")}`)
        checkHash(v.filename.replace(".txt",""), v.hash, ret[v.filename.replace(".txt","")])
    })
    return ret;
}

async function main(){
    const templates  = await loadTemplates()
    const key = await importPrivateKey(privateKey)

    //init data
    if (!data.dat_odesl) {
        data.dat_odesl = new Date().toISOString()
    }
    if (!data.dat_trzby) {
        data.dat_trzby = new Date().toISOString()
    }
    if (!data.uuid_zpravy) {
        data.uuid_zpravy = uuidv4();
    } 
    const pkpInput = `${data["dic_popl"]}|${data["id_provoz"]}|${data["id_pokl"]}|${data["porad_cis"]}|${data["dat_trzby"]}|${data["celk_trzba"]}`
    const pkpInputArr = encoder.encode(pkpInput)
    //console.log(`PKP input: ${pkpInput}`)
    const pkpValueArr = await crypto.subtle.sign("RSASSA-PKCS1-v1_5",key,pkpInputArr)
    const pkpValueB64 = base64ArrayBuffer(pkpValueArr)
    console.log(`pkp value: ${pkpValueB64}`)
    data.pkp = pkpValueB64


}

main()
.then(()=>{console.log("PoC done")})
//.catch((err)=>{console.error("PoC failed",err)})

/*

#get certb64
$certb64File=$dir."/work/certb64";
system("awk '/-----BEGIN CERTIFICATE-----/{flag=1;next}/-----END CERTIFICATE-----/{exit}flag' $p12File.crt | tr -d '\n' | tr -d '\r' > $certb64File");
$data["certb64"]=file_get_contents($certb64File);

#compute rsassa-pkcs1_5 signature using demo key
$pkpValueFile=$dir."/work/pkp-value";
$certFile=$p12File.".crt";
$keyFile=$p12File.".key";
$signDataCmd= "openssl sha256 -binary $pkpInputFile " #compute hash
             ."| openssl pkeyutl -sign -inkey $keyFile -pkeyopt digest:SHA256 " #apply rsa signature alg to the hash
             ."| base64 -w 0 > $pkpValueFile";  # base64 resulting raw signature 
system($signDataCmd);
$pkpValue=file_get_contents($pkpValueFile);
$data["pkp"]=$pkpValue;


#compute BKP
#shit - more than hour spent until great discovery - BKP IS CASE SENSITIVE - the hexcode must be uppercase to be accepted as valid
$bkpValueFile=$dir."/work/bkp-value";
$digestCmd= "base64 -d $pkpValueFile "    #take PKP base64 encoded value and decode back to binary
           ."| openssl sha1 -binary "    #compute SHA1 over the binary representation of the signature
           ."| xxd -p "                   #hexdump resulting hash value
           ."| tr -d \" \\n\" "           #remove spaces and newlines added by xxd
           ."| tr \"abcdef\" \"ABCDEF\""  #upercase the hex code to be recognized by EET server as valid (WTF WTF WTF)
           ."| sed -e \"s/\\(........\\)/\\1-/g\" | sed -e \"s/-\$//\" > $bkpValueFile";  #and format the hexdump of hash according to spec (WHY ? who knows!)
system($digestCmd);
$bkpValue=file_get_contents($bkpValueFile);
#for debug
#$bkpValue=file_get_contents($dir."/data/example-bkp");
#end debug shit
$data["bkp"]=$bkpValue;





#compute digest from canonicalized data of the Body element based on template extracted enriched with business data
#replace the placeholders with real business data and stpore to file  
$digestFinal=$bodyTemplate;
#fill in data in the digest first
foreach ($data as $key => $value) {
	$digestFinal=str_replace("\${".$key."}",$value,$digestFinal);
  $digestFinal=str_replace("@{".$key."}","$key=\"$value\"",$digestFinal);
}
#remove unused fields
#$digestFinal=preg_replace("/ [a-z_0-9]+=\"\\$\\{[0-9_a-z]+\\}\"/","",$digestFinal);
$digestFinal=preg_replace("/\\$\\{[a-z_0-9:]+\\}/","",$digestFinal);
$digestFinal=preg_replace("/ @\\{[a-z_0-9:]+\\}/","",$digestFinal);

#$digestFinal=preg_replace("/ @/","BUBUBUBU",$digestFinal);

$digestDataFile=$dir."/work/digest-data";
$digestValueFile=$dir."/work/digest-value";
file_put_contents($digestDataFile, $digestFinal);
$data["soap_body"]=$digestFinal;

#compute digest over the enriched data
$digestCmd= "openssl sha256 -binary $digestDataFile "  #compute hash
           ."| base64  "                               #apply base64 according to XMLDSig
           ."| tr -d \" \\n\" > $digestValueFile";     #fix extra spaces & newlines
system($digestCmd);
$digestValue=file_get_contents($digestValueFile);
$data["digest"]=$digestValue; #add digest to data - it is used in the next replacement step


#compute signature value from canonicalized siginfo enriched with digest value 
#replace placeholders - in fact the only placeholder in signaturte template needs to be replaced - ${digest}
$signatureFinal=$signatureTemplate;
foreach ($data as $key => $value) {
	$signatureFinal=str_replace("\${".$key."}",$value,$signatureFinal);
  $signatureFinal=str_replace("@{".$key."}","$key=\"$value\"",$signatureFinal);
}
#remove unused fields
#$signatureFinal=preg_replace("/ [a-z_0-9]+=\"\\$\\{[0-9_a-z]+\\}\"/","",$signatureFinal);
$signatureFinal=preg_replace("/\\$\\{[a-z_0-9]+\\}/","",$signatureFinal);
$signatureFinal=preg_replace("/ @\\{[a-z_0-9]+\\}/","",$signatureFinal);


$signatureDataFile=$dir."/work/signature-data";
file_put_contents($signatureDataFile, $signatureFinal);
#compute rsassa-pkcs1_5 over the data 
$signatureValueFile=$dir."/work/signature-value";
$signSigCmd= "openssl sha256 -binary $signatureDataFile "    #compute hash
            ."| openssl pkeyutl -sign -inkey $keyFile -pkeyopt digest:SHA256 "  #compute sig of the hash
            ."| base64 -w 0 > $signatureValueFile"; #apply base64 according to XMLDSig
system($signSigCmd);
$signatureValue=file_get_contents($signatureValueFile);
$data["signature"]=$signatureValue;

#complete XML with all the values computes
$xmlFinal=$requestTemplate;
foreach ($data as $key => $value) {
	$xmlFinal=str_replace("\${".$key."}",$value,$xmlFinal);
  $xmlFinal=str_replace("@{".$key."}","$key=\"$value\"",$xmlFinal);
}
#remove unused fields
#$xmlFinal=preg_replace("/ [a-z_0-9]+=\"\\$\\{[0-9_a-z]+\\}\"/","",$xmlFinal);
$xmlFinal=preg_replace("/\\$\\{[a-z_0-9]+\\}/","",$xmlFinal);
$xmlFinal=preg_replace("/@\\{[a-z_0-9]+\\}/","",$xmlFinal);

$signedMessageFile=$dir."/work/signed-message";
file_put_contents($signedMessageFile, $xmlFinal);

#selfcheck - to be sure we had templates right and didn't messed anything
#the verification produces binary snapshot of digested and signed data
#work/digest-data-verify must be binary equal to work/digest-data
#work/signature-data-verify must be binary equal to work/signature-data
#if not - difference must be eliminated by changing inputs/process 
#during development the only lline end in uuid escaped - now it is fixed and working well
$xmlsecCmd="xmlsec1 --verify --store-references --store-signatures --pubkey-cert-pem $certFile $signedMessageFile | php $dir/extract-c14n-templates.php $dir/work/digest-data-verify $dir/work/signature-data-verify";
system($xmlsecCmd);

*/