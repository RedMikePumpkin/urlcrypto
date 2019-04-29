# urlcrypto
makes webpage-specific, password-protected, alert dialogs

## usage

`encrypt.js` - when this script is run, two dialog boxes will appear, the first is the password to use, the second is the text to 
encrypt, it will alert a base64 string that is the result

`decrypt.js` - when this script is run, a dialog box askes you for the password, if you enter the correct one, it will output the encrypted text, otherwise, it alerts nothing

NOTE: you will need to change your `decrypt.js` to use the data from `encrypt.js`, put it in where it says `\[DATA HERE]`
