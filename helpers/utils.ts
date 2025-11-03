import { message } from "antd";
import parse from "react-html-parser";

interface Location {
  id: number;
  name: string;
  country_id: number;
  country_code: string;
  country_name: string;
  state_code: string | null;
  type: string | null;
  latitude: string | null;
  longitude: string | null;
}

export const isEmpty = (obj: {}) => {
  if (!obj) return true;
  return Object.keys(obj).length === 0;
};
export const htmlParse = (str: string) => {
  if (!str || str == "" || typeof str !== "string") return false;
  return parse(str);
};

//remove tags
export const remove_tags = (_html: any) => {
  let html = _html?.toString();
  let strippedString = html?.replace(/(<([^>]+)>)/gi, "");
  return strippedString;
};

//printe excerpt
export const excerpt = (_html: any, count = 100) => {
  const text = remove_tags(_html)
    ?.toString()
    .replaceAll("&nbsp;", " ")
    .replaceAll(/"/g, "");
  return text?.slice(0, count) + (text?.length > count ? "..." : "");
};

export const wordCount = (str: string) => {
  return str.split(" ").length;
};

//calculate reading time
export const readingTime = (text: string) => {
  let str = remove_tags(text);
  let wordCount = str?.match(/(\w+)/g)?.length;
  if (wordCount <= 0) {
    wordCount = 100;
  }
  let count_time = Math.floor(wordCount / 200);

  return count_time;
};

export const shuffledArray = (array: any) => {
  if (array.length == 0) return;
  return array.sort((a: any, b: any) => 0.5 - Math.random());
};

export function shortenLargeNumber(num: number, digits: number): any {
  var units = ["K", "M", "G", "T", "P", "E", "Z", "Y"],
    decimal;

  for (var i = units.length - 1; i >= 0; i--) {
    decimal = Math.pow(1000, i + 1);

    if (num <= -decimal || num >= decimal) {
      return +(num / decimal).toFixed(digits) + units[i];
    }
  }

  return num;
}

export function removeFirstForwardSlash(inputString: string): string {
  if (inputString?.startsWith("/")) {
    return inputString.substring(1);
  } else {
    return inputString;
  }
}

export function staticAsset(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${basePath}/${removeFirstForwardSlash(path)}`;
}

export const excerptWithRemoveQuote = (_html: any, count = 100) => {
  const rawText = remove_tags(_html);
  const text = rawText?.replace(/"/g, "");
  return text.slice(0, count) + (text.length > count ? "..." : "");
};

// get random index
export function getRandomIndex(array: any) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return randomIndex;
}

//generate query string form object
interface Data {
  [key: string]:
    | number
    | string
    | string[]
    | Array<number | string>
    | null
    | undefined;
}

//filtered Entries
export const filteredEntries = (data: Data) => {
  const filteredData = Object.fromEntries(
    Object.entries(data).filter(
      ([_, value]) =>
        value !== null && value !== undefined && value !== "undefined"
    )
  );
  return filteredData;
};

//generate query string;
export const generateQueryString = (data: Data) => {
  const queryStringParams: string[] = [];

  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const value = data[key];
      if (value !== undefined && value !== null && value !== "") {
        if (
          typeof value === "string" ||
          typeof value === "number" ||
          typeof value === "boolean"
        ) {
          queryStringParams.push(
            `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
          );
        } else if (Array.isArray(value) && value.length > 0) {
          queryStringParams.push(
            `${encodeURIComponent(key)}=${encodeURIComponent(value.join(","))}`
          );
        }
      }
    }
  }

  const queryJoin = queryStringParams.join("&");
  const fullQueryString = `?${queryJoin}`;
  return fullQueryString;
  // console.log(filteredData,"util")
  // const queryString = Object.keys(filteredData)
  //   .map((key) => {
  //     const value = data[key];

  //     if (
  //       value != null &&
  //       value !== "undefined" &&
  //       value !== undefined &&
  //       value !== ""
  //     ) {
  //       if (Array.isArray(value)) {
  //         return value
  //           .map((item) => `${key}[]=${encodeURIComponent(item)}`)
  //           .join("&");
  //       }

  //       return `${key}=${encodeURIComponent(value)}`;
  //     }
  //   })
  //   .join("&");

  // const fullQueryString = `?${queryString}`;
  // console.log(fullQueryString,"util-finel")
  // if (fullQueryString === "?&") {
  //   return "";
  // } else {
  //   return fullQueryString;
  // }
};

export function capitalizeFirstLetter(inputString: string | any): string {
  if (inputString.length === 0) {
    return inputString; // Handle empty string case if necessary
  }
  const firstLetter = inputString[0].toUpperCase();
  const restOfString = inputString.slice(1);
  return firstLetter + restOfString;
}

export const capitalizeFirstLetterOfEveryWord = (
  sentence: string | any
): string => {
  const words = sentence.split(" ");
  const capitalizedWords = words.map((word: any) => {
    if (word.length === 0) {
      return word;
    }
    const firstChar = word[0].toUpperCase();
    const restOfWord = word.slice(1);
    return firstChar + restOfWord;
  });
  return capitalizedWords.join(" ");
};

// numFormatter
export const numFormatter = (num: number) => {
  if (!num) return;
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(1) + "M"; // convert to M for number from > 1 million
  } else if (num > 1000000000) {
    return (num / 1000000000).toFixed(1) + "B"; // convert to B for number from > 1 billion
  } else if (num < 900) {
    return num; // if value < 1000, nothing to do
  }
};

export const isJson = (str: string) => {
  try {
    JSON.parse(str);
  } catch (e) {
    //Error
    //JSON is not okay
    return false;
  }

  return true;
};

export const replaceUnderscore = (str: string) => {
  if (str) {
    return str.replace(/_/g, " ");
  } else {
    return str;
  }
};

export const flattenArrayWithLabelValue = (data: any) => {
  const flattenedArray: any = [];
  data.forEach((item: any) => {
    const { name, slug, children } = item;
    flattenedArray.push({ label: name, value: slug });
    if (children && children.length > 0) {
      flattenedArray.push(...flattenArrayWithLabelValue(children));
    }
  });
  return flattenedArray;
};

export const insert = (arr: any, index: any, newItem: any) => {
  return [
    // part of the array before the specified index
    ...arr.slice(0, index),
    // inserted item
    newItem,
    // part of the array after the specified index
    ...arr.slice(index),
  ];
};

export const formatBytes = (bytes: number) => {
  if (bytes === 0) {
    return "0 Bytes";
  }

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

export const copyHandler = (copiedTxt: any, msg?: string) => {
  if (!copiedTxt) return;
  navigator.clipboard.writeText(copiedTxt);
  message.success(msg || "Copied Successfully!");
};

// Camel Case

export const CamelCase = (str: string) => {
  const arr = str?.split(" ");

  //loop through each element of the array and capitalize the first letter.

  for (var i = 0; i < arr?.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  //Join all the elements of the array back into a string
  //using a blankspace as a separator
  const str2 = arr?.join(" ");
  return str2;
};

export const isJSONString = (str: string) => {
  try {
    JSON.parse(str);
    return true;
  } catch (error) {
    return false;
  }
};

// interface FlagMapping {
//   [key: string]: string;
// }
export const getFlagEmoji = (countryCode: any | undefined) => {
  //   const flagMapping: FlagMapping = {
  //     'US': '🇺🇸',
  //     'CA': '🇨🇦',
  // };
  if (!countryCode) {
    return "🌐";
  }
  // return flagMapping[countryCode] || '🌐';
  try {
    return countryCode
      .toUpperCase()
      .replace(/./g, (char: any) =>
        String.fromCodePoint(127397 + char.charCodeAt())
      );
  } catch (e) {
    return "🌐";
  }
};

export const decodeSlug = (slug: string): string => {
  // Replace dashes with spaces and split into words
  const decodedString = slug.replace(/-/g, " ");
  return decodedString.replace(/\b\w/g, (char) => char.toUpperCase());
};

export const formatNumberToUnite = (
  num: number,
  more: boolean = false
): string => {
  if (num < 1000) {
    return num.toString();
  } else if (num < 1000000) {
    let formattedNum = (num / 1000).toFixed(num % 1000 !== 0 ? 1 : 0);
    if (formattedNum.endsWith(".0")) {
      formattedNum = formattedNum.slice(0, -2); // Remove the decimal and zero
    }
    return formattedNum + "K" + (num % 1000 !== 0 ? "+" : "");
  } else if (num < 1000000000) {
    let formattedNum = (num / 1000000).toFixed(num % 1000000 !== 0 ? 1 : 0);
    if (formattedNum.endsWith(".0")) {
      formattedNum = formattedNum.slice(0, -2); // Remove the decimal and zero
    }
    return formattedNum + "M" + (num % 1000000 !== 0 ? "+" : "");
  } else {
    let formattedNum = (num / 1000000000).toFixed(
      num % 1000000000 !== 0 ? 1 : 0
    );
    if (formattedNum.endsWith(".0")) {
      formattedNum = formattedNum.slice(0, -2); // Remove the decimal and zero
    }
    return formattedNum + "B" + (num % 1000000000 !== 0 ? "+" : "");
  }
};

interface Block {
  type: string;
  data: any;
}

interface ListItem {
  text: string;
  children?: ListItem[];
}

export const convertNestedListToHtml = (items: ListItem[]): string => {
  let html = "<ul>";

  items.forEach((item) => {
    html += "<li>" + item.text;
    if (item.children && item.children.length > 0) {
      html += convertNestedListToHtml(item.children); // Recursively generate HTML for nested lists
    }
    html += "</li>";
  });

  html += "</ul>";
  return html;
};
export const convertDataBlockToHtml = (blocks: Block[]): string => {
  let html = "";
  if (Array.isArray(blocks)) {
    blocks.forEach((block) => {
      switch (block.type) {
        case "paragraph":
          html += `<p>${block.data.text}</p>`;
          break;
        case "header":
          html += `<h${block.data.level}>${block.data.text}</h${block.data.level}>`;
          break;
        case "embed":
          html += `<div><iframe width="560" height="315" src="${block.data.embed}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`;
          break;
        case "delimiter":
          html += "<hr />";
          break;
        case "image":
          html += `<img class="img-fluid" src="${block.data.file.url}" title="${block.data.caption}" /><br /><em>${block.data.caption}</em>`;
          break;
        case "list":
          html += "<ul>";
          block.data.items.forEach((item: string) => {
            // @ts-ignore
            html += `<li>${item?.content}</li>`;
          });
          html += "</ul>";
          break;
        case "nestedlist":
          html += convertNestedListToHtml(block.data);
          break;
        default:
          break;
      }
    });
  } else {
    console.error("blocks is not an array:", blocks);
  }

  return html;
};

export const filterLocationsByCountryName = (
  locations: Location[],
  countryName: string
): Location[] =>
  locations.filter((location) => location.country_name === countryName);

export const getStateDetails = (
  locations: any[],
  stateName: string
): Location | undefined =>
  locations.find((location) => location.name === stateName);

export const randomString = (length: number) => {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};
