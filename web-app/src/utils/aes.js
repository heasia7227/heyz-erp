import CryptoJS from 'crypto-js';
const aesKey = "02ccacbd35ebd5d674839b114eba4cb4";

const encrypt = (plaintext) => {
  const key = CryptoJS.enc.Utf8.parse(aesKey);
  const option = {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
    iv: CryptoJS.enc.Utf8.parse(aesKey),
  }
  return CryptoJS.AES.encrypt(plaintext, key, option).toString();
}

const decrypt = (ciphertext) => {
  const key = CryptoJS.enc.Utf8.parse(aesKey);
  const option = {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
    iv: CryptoJS.enc.Utf8.parse(aesKey),
  }
  return CryptoJS.AES.decrypt(ciphertext, key, option).toString();
}

export default {
  encrypt,
  decrypt
};
