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
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDrVmZ6FE2jYqli
43/LbXZ1vEG8USMRcC/zbGgk5mAoQQKMtF5PIm5i84pd0cPOSRtduNODc7mwjbPK
d5r8p592zNhpei0/XbQcYQ5rpdf0Y84ZNbg9ZmB4nF8YCBy3Gk28YxfW//vIjqvk
uQK6InT4l784gtz/iNAV48ZBkgE/jp+MMii1I+y5EyYkQuRZlCJtOTKdPXECnr5O
rxrGUtbjmF7bBWLD2LXlspZoUOmh4RFfd9WHH8PmcQfij5aJq6cgIB2YENCBHSA1
/HZZEd8vNLv05owb/BOvXj4n86lYJ8tlJVMcorAsrEzVy+XU++78/j9PewL0ft0j
ETHd0U8DAgMBAAECggEBAIqz154oDUI4yiCweQeKsoDdvdih8Ys7ledgg1kMNqxC
9J+9RsBZSLolU+3Lzh3s1KY+Yttc/5phShAQwlYa7U91mC9ChRyNu7PmODuV+Vve
3v/Yu4fkqQMtFpbxYQtCA4L+3HQpV1pzTDh4GnVeDZbeySMjbeFl306nepf216l+
4o2t260RCgC9NU6kybrgrL9mpa2v+0XNugKzjwy3Lv5KUhtTanQm7fOztb8DxvqP
h/j8j504d3SCWTzeGwYWw2lwDZx0wAP0b0fB8oiO9JzHBc+t/R18vS6LaslDmvLi
DM8R0ivySdSJKD5f5CAWlMTkcKkbFblnUhw7KTCH77ECgYEA9+TUwiPf4aZiIzMW
I2Y7AdkF9uwmTzaXZYN+MQycShwfmpOscY+6EL2f2majCGcNEduPB3ZLSgkk1oga
g4Q2VKDyTSMT70FyRGCm/hIHxtWm2KWpUcJ0LKwV3C+XS+v3dI9cEuFeiC2Dv67Y
GLqAnqPUS4Pv8Ed3nLN4zZdONWUCgYEA8wh1FDS9KczhgyzPU+a59blVER0LP7c2
ErXCk815qCsM3aNy1NBFfuyLuChf6XxRvArRibI9TtFlSWq9PKsSWRwgILpS8YxO
g5QA5iJdh5O1L6EGnFmLiw1aUlMJsKmsc2f5klLAacA6ljIFB6A1voeume1Ryozq
wYhO2uLWgEcCgYBBt5pntVb+3TsbFcoCrHFsNfqM0WH+kfxk3w0vN6afRwFh21BV
8sJi+cJNBfSmn5spZsluMwAWqoHnlcFhqEU2/kv+AxSf0vvWAMGEjYceQTmwKYrP
r/tYdG5/Jua3K+E4N2EzaCfFdjt9L37+X0MFy2zWcC3Fx0yAcFvQNRJ4uQKBgHAC
nNtUNz7Vs7YeZ+vWciyjX2aEyVNzYFOdO/GdCQ4N0V8xXtJgrzcBVJ/q09Grv4v4
PHzHDmSOM61zqYYVnl49jT0oQuQa83DHPObUPeEnnaE3CPH0f1D2NYOty9CFUvrZ
l/ftdcsHkrj4ksLh/wMyS7Gb5E+DRQsvhJBzbcMvAoGBAODcoE5dkDH6jPYOkwC5
9cp6olFNc8Mp5+XF3mAMkpiB16lPM/SdolAmuTl+cDF5QJoCAJOMkRAOWJqpPZkw
kG2TVi0t2EQa5xCBbsadl82uKB50+BbViRkaHQUinFDKLZWlUQdjgLT7U1PXza4W
A6ns1H9hLvnZpCRasR6oMVqf
-----END PRIVATE KEY-----
`
const certificate = `-----BEGIN CERTIFICATE-----
MIIEmTCCA4GgAwIBAgIFAKCnuv0wDQYJKoZIhvcNAQELBQAwdzESMBAGCgmSJomT
8ixkARkWAkNaMUMwQQYDVQQKDDrEjGVza8OhIFJlcHVibGlrYSDigJMgR2VuZXLD
oWxuw60gZmluYW7EjW7DrSDFmWVkaXRlbHN0dsOtMRwwGgYDVQQDExNFRVQgQ0Eg
MSBQbGF5Z3JvdW5kMB4XDTE5MDgwODE5MjM0MloXDTIyMDgwODE5MjM0MlowQzES
MBAGCgmSJomT8ixkARkWAkNaMRMwEQYDVQQDEwpDWjAwMDAwMDE5MRgwFgYDVQQN
Ew9wcmF2bmlja2Egb3NvYmEwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIB
AQDrVmZ6FE2jYqli43/LbXZ1vEG8USMRcC/zbGgk5mAoQQKMtF5PIm5i84pd0cPO
SRtduNODc7mwjbPKd5r8p592zNhpei0/XbQcYQ5rpdf0Y84ZNbg9ZmB4nF8YCBy3
Gk28YxfW//vIjqvkuQK6InT4l784gtz/iNAV48ZBkgE/jp+MMii1I+y5EyYkQuRZ
lCJtOTKdPXECnr5OrxrGUtbjmF7bBWLD2LXlspZoUOmh4RFfd9WHH8PmcQfij5aJ
q6cgIB2YENCBHSA1/HZZEd8vNLv05owb/BOvXj4n86lYJ8tlJVMcorAsrEzVy+XU
++78/j9PewL0ft0jETHd0U8DAgMBAAGjggFeMIIBWjAJBgNVHRMEAjAAMB0GA1Ud
DgQWBBT8zaUMxlfEGXSD/2PZ089ZLGgerTAfBgNVHSMEGDAWgBR8MHaszNaH0ezJ
H+JwCCzjX94MBzAOBgNVHQ8BAf8EBAMCBsAwYwYDVR0gBFwwWjBYBgpghkgBZQMC
ATABMEowSAYIKwYBBQUHAgIwPAw6VGVudG8gY2VydGlmaWvDoXQgYnlsIHZ5ZMOh
biBwb3V6ZSBwcm8gdGVzdG92YWPDrSDDusSNZWx5LjCBlwYDVR0fBIGPMIGMMIGJ
oIGGoIGDhilodHRwOi8vY3JsLmNhMS1wZy5lZXQuY3ovZWV0Y2ExcGcvYWxsLmNy
bIYqaHR0cDovL2NybDIuY2ExLXBnLmVldC5jei9lZXRjYTFwZy9hbGwuY3Jshipo
dHRwOi8vY3JsMy5jYTEtcGcuZWV0LmN6L2VldGNhMXBnL2FsbC5jcmwwDQYJKoZI
hvcNAQELBQADggEBAKVFyv168b/q0X568G+JDvNnz4XVElbJ1r9ro/xv58QP+FD8
PJSR5qxN2F7zKGNYTCee0jSo+XY1KEoSkmeoYHXnQpm7+NG7iUYc2OWu0B3hC/wM
MhNEDtmsTwqSLjgSk6pZTTRXfvtaHf7zvU8iw1PGFhb9m9bJlOfLwoMeFclOpdfo
80pbwRz5t8io/c0lvGodlYj7INHxjlwdwWf3m2mUx4iuKvoAev0ASCdSMDuUWWjY
iMT3PEUqeabeM2dn3xccQ2EhgIcCwhQs2MCA/FDLBbiOt63mUJPJHATIFi/31VKt
z11/Gc434HHsVYB8U/aammSyIfMp6bNE6LhaFe8=
-----END CERTIFICATE-----
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
// function str2ab(str) {
//     const buf = new ArrayBuffer(str.length);
//     const bufView = new Uint8Array(buf);
//     for (let i = 0, strLen = str.length; i < strLen; i++) {
//       bufView[i] = str.charCodeAt(i);
//     }
//     return buf;
// }

function pem2derB64(pem){
    return pem.replace(/-----BEGIN [^-]+-----/gm,"").replace(/-----END [^-]+-----/gm,"").replace(/\n/gm,"")
}

function pem2derArr(pem){
    return base64Decode(pem2derB64(pem))
}

/*
https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#Examples

Import a PEM encoded RSA private key, to use for RSA-PSS signing.
Takes a string containing the PEM encoded key, and returns a Promise
that will resolve to a CryptoKey representing the private key.
*/
function importPrivateKey(pem) {
    const binaryDer = pem2derArr(pem);
 
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
function base64Encode(arrayBuffer) {
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


function base64Decode( string )
{
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var outLen = string.length*3/4 - ((string.length - (string.indexOf('=')>=0?string.indexOf('='):string.length))) 
    var result = new ArrayBuffer(outLen)
    var arr = new Uint8Array(result)

    var i = 0;
    var arrIdx = 0;
    do {
        var b1 = characters.indexOf( string.charAt(i++) );
        var b2 = characters.indexOf( string.charAt(i++) );
        var b3 = characters.indexOf( string.charAt(i++) );
        var b4 = characters.indexOf( string.charAt(i++) );

        if (b1<0 || b2<0 || b3<0 || b4<0){
          throw new Error("invalid character found in base64")
        }

        var a = ( ( b1 & 0x3F ) << 2 ) | ( ( b2 >> 4 ) & 0x3 );
        var b = ( ( b2 & 0xF  ) << 4 ) | ( ( b3 >> 2 ) & 0xF );
        var c = ( ( b3 & 0x3  ) << 6 ) | ( b4 & 0x3F );

        if (arrIdx<outLen) arr[arrIdx++]=a
        if (arrIdx<outLen) arr[arrIdx++]=b
        if (arrIdx<outLen) arr[arrIdx++]=c
    } while( i < string.length );
    return result;
}



// /*
// Copyright (c) 2011, Daniel Guerrero
// All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL DANIEL GUERRERO BE LIABLE FOR ANY
// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//  */

// /**
//  * Uses the new array typed in javascript to binary base64 encode/decode
//  * at the moment just decodes a binary base64 encoded
//  * into either an ArrayBuffer (decodeArrayBuffer)
//  * or into an Uint8Array (decode)
//  * 
//  * References:
//  * https://developer.mozilla.org/en/JavaScript_typed_arrays/ArrayBuffer
//  * https://developer.mozilla.org/en/JavaScript_typed_arrays/Uint8Array
//  */

// var Base64Binary = {
// 	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
	
// 	/* will return a  Uint8Array type */
// 	decodeArrayBuffer: function(input) {
// 		var bytes = (input.length/4) * 3;
// 		var ab = new ArrayBuffer(bytes);
// 		this.decode(input, ab);
		
// 		return ab;
// 	},

// 	removePaddingChars: function(input){
// 		var lkey = this._keyStr.indexOf(input.charAt(input.length - 1));
// 		if(lkey == 64){
// 			return input.substring(0,input.length - 1);
// 		}
// 		return input;
// 	},

// 	decode: function (input, arrayBuffer) {
// 		//get last chars to see if are valid
// 		input = this.removePaddingChars(input);
// 		input = this.removePaddingChars(input);

// 		var bytes = parseInt((input.length / 4) * 3, 10);
		
// 		var uarray;
// 		var chr1, chr2, chr3;
// 		var enc1, enc2, enc3, enc4;
// 		var i = 0;
// 		var j = 0;
		
// 		if (arrayBuffer)
// 			uarray = new Uint8Array(arrayBuffer);
// 		else
// 			uarray = new Uint8Array(bytes);
		
// 		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
		
// 		for (i=0; i<bytes; i+=3) {	
// 			//get the 3 octects in 4 ascii chars
// 			enc1 = this._keyStr.indexOf(input.charAt(j++));
// 			enc2 = this._keyStr.indexOf(input.charAt(j++));
// 			enc3 = this._keyStr.indexOf(input.charAt(j++));
// 			enc4 = this._keyStr.indexOf(input.charAt(j++));
	
// 			chr1 = (enc1 << 2) | (enc2 >> 4);
// 			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
// 			chr3 = ((enc3 & 3) << 6) | enc4;
	
// 			uarray[i] = chr1;			
// 			if (enc3 != 64) uarray[i+1] = chr2;
// 			if (enc4 != 64) uarray[i+2] = chr3;
// 		}
	
// 		return uarray;	
// 	}
// }

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
    const pkpValueB64 = base64Encode(pkpValueArr)
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