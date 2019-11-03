# OpenEET JS

Pure browser Javascript PoC implementation based on OpenEET Lite templating approach and WebCrypto (crypto.subtle).

No additional library needed for EET message generation.

For browsers support see [Subtle Crypto compatibility page](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto)

The base PoC implementation features:
* certificate & private key included in the source code (one of test certificates for playground)
* data for the message included in the source code 
* fetch (no-cors mode) POST is invoked at the end - the request is made but the app don't receive result (CORS)

