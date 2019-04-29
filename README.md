# urlcrypto
makes webpage-specific, password-protected, alert dialogs

## usage

`encrypt.js` - when this script is run, two dialog boxes will appear, the first is the password to use, the second is the text to 
encrypt, it will alert a base64 string that is the result

`decrypt.js` - when this script is run, a dialog box askes you for the password, if you enter the correct one, it will output the encrypted text, otherwise, it alerts nothing

NOTE 1: you will need to change your `decrypt.js` to use the data from `encrypt.js`, put it in where it says `[DATA HERE]`

NOTE 2: the encrypted data only works on the same webpage that `encrypt.js` was run from, so if you run it on `http://example.com/index.html`, the decryption will only work on `http://example.com/index.html`, note that the hash and query of the url are ignored.

NOTE 3: I know barely anything about cryptography and stuff, I just looked online how to hash and encrypt / decrypt, so my code is probably really bad, suggestions are welcome!
