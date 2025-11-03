import Cookies from "js-cookie";
import CryptoJS from "crypto-js";

const ENCRYPTION_SECRET = process.env.COOKIE_ENCRYPTION_SECRET || "";

// Encryption function
export const encryptData = (data: string): string => {
  return CryptoJS.AES.encrypt(data, ENCRYPTION_SECRET).toString();
};

// Decryption fn
export const decryptData = (encryptedData: string): string | null => {
  try {
    const decryptedBytes = CryptoJS.AES.decrypt(
      encryptedData,
      ENCRYPTION_SECRET
    );
    const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedData;
  } catch (error) {
    // Handle decryption errors, e.g., if the data is tampered or the key is incorrect
    return null;
  }
};

// Set encrypted cookie
export const setEncryptedCookie = (
  name: string,
  value: string,
  options: Cookies.CookieAttributes = {}
) => {
  const encryptedValue = encryptData(value);
  Cookies.set(name, encryptedValue, options);
};

// Retrieve and decrypt cookie
export const getDecryptedCookie = (name: string): string | null => {
  const encryptedValue = Cookies.get(name);

  if (encryptedValue) {
    return decryptData(encryptedValue);
  }

  return null;
};

// Set non-encrypted cookie
export const setCookie = (
  name: string,
  value: string,
  options: Cookies.CookieAttributes = {}
) => {
  Cookies.set(name, value, options);
};

// Get non-encrypted cookie
export const getCookie = (name: string): string | undefined => {
  return Cookies.get(name);
};
