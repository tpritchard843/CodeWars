// Simple Encryption #1 - Alternating Split 6kyu
// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Together with the encryption function, you should also implement a decryption function which reverses the process.
//If the string S is an empty value or the integer N is not positive, return the first argument without changes.

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

function encrypt(text, n) {
  // check for odds and evens
  // use while loop to ensure n is still positive and run rotation the correct num of times
  console.log(text, n);
  if(!text || n <= 0) return text;
  let saltRounds = n;
  while(saltRounds--) {
    let encryptedStr = '';
    //check odds
    for (let i = 1; i < text.length; i += 2) {
      encryptedStr += text[i];
    }
    //check evens
    for (let i = 0; i < text.length; i += 2) {
      encryptedStr += text[i];
    }
    text = encryptedStr;
  }
  return text;
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;
  const ans = new Array(encryptedText.length);
  let saltRounds = n;
  while (saltRounds--) {
    let j = 0;
    for (let i = 1; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    for (let i = 0; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    encryptedText = ans.join('');
  }
  return encryptedText;
}

// examples encrypt
console.log(encrypt("This is a test!", 0), "This is a test!");
console.log(encrypt("This is a test!", 1), "hsi  etTi sats!");
console.log(encrypt("This is a test!", 2), "s eT ashi tist!");
console.log(encrypt("This is a test!", 3), " Tah itse sits!");
console.log(encrypt("This is a test!", 4), "This is a test!");
console.log(encrypt("This is a test!", -1), "This is a test!");

//examples decrypt
console.log(decrypt("This is a test!", 0), "This is a test!");
console.log(decrypt("hsi  etTi sats!", 1), "This is a test!");
console.log(decrypt("s eT ashi tist!", 2), "This is a test!");
console.log(decrypt(" Tah itse sits!", 3), "This is a test!");
console.log(decrypt("This is a test!", 4), "This is a test!");
console.log(decrypt("This is a test!", -1), "This is a test!");
