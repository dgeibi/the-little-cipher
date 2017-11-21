import { playfair, cipherString, originalString } from '../cipher/playfair'

export default (secret, plaintext) => {
  const { diff, square } = playfair(secret, plaintext)

  const cipherText = cipherString(diff)
  const plainText = originalString(diff)

  return {
    diff,
    square,
    cipherText,
    plainText,
  }
}
