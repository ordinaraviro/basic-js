const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {

  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(text, key) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }

    const latinAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const upKey = key.toUpperCase();
    const upText = text.toUpperCase();
    let keyIndex = 0;
    const resultArr = upText.split('').map((char, i) => {
      if (!/[A-Z]/.test(char)) {
        return text[i];
      }

      const alphIndex = latinAlphabet.indexOf(char);
      const cipherIndex = latinAlphabet.indexOf(upKey[keyIndex % upKey.length]);
      let newIndex = alphIndex + cipherIndex;
      if (newIndex > 25) newIndex -= 26;

      keyIndex++;
      return latinAlphabet[newIndex];
    });

    const res = resultArr.join('');
    return this.isDirect ? res : res.split('').reverse().join('');
  }

  decrypt(text, key) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }

    const latinAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const upKey = key.toUpperCase();
    const upText = text.toUpperCase();
    let keyIndex = 0;
    const resultArr = upText.split('').map((char, i) => {
      if (!/[A-Z]/.test(char)) {
        return text[i];
      }

      const alphIndex = latinAlphabet.indexOf(char);
      const cipherIndex = latinAlphabet.indexOf(upKey[keyIndex % upKey.length]);
      let newIndex = alphIndex - cipherIndex;
      if (newIndex < 0) newIndex += 26;

      keyIndex++;
      return latinAlphabet[newIndex];
    });

    const res = resultArr.join('');
    return this.isDirect ? res : res.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
