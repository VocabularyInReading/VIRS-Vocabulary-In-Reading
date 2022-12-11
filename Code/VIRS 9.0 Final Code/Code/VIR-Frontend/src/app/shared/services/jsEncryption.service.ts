/// <reference types="crypto-js" />

import * as CryptoJS from 'crypto-js';


export class JsEncryption {

    encrypted: any;
    decrypted: any;
    private key = CryptoJS.enc.Utf8.parse('7061737323313233');
    private iv = CryptoJS.enc.Utf8.parse('7061737323313233');

    encrypt(plainText: string) {

        this.encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(plainText), this.key,
            {
                keySize: 128 / 8,
                iv: this.iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });

        //console.log('Encrypted :' + this.encrypted);

        return this.encrypted.toString() ; 
    }

    decrypt(code: any) {
        this.decrypted = CryptoJS.AES.decrypt(code, this.key, {
            keySize: 128 / 8,
            iv: this.iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });

        return this.decrypted.toString(CryptoJS.enc.Utf8);
    }

}

/*
console.log('Encrypted :' + encrypted);
console.log('Key :' + encrypted.key);
console.log('Salt :' + encrypted.salt);
console.log('iv :' + encrypted.iv);
console.log('Decrypted : ' + decrypted);
console.log('utf8 = ' + decrypted.toString(CryptoJS.enc.Utf8));
*/
