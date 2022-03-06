import axios from "axios";

// replace with your Alchemy api key
const apiKey = "5Zni1-2jBfYcDJJTg18nqedS3EnTxID4";
const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${apiKey}/getNFTsForCollection`;
const contractAddr = "0x61fce80d72363b731425c3a2a46a1a5fed9814b2";
const startToken = "0x1ea2";
const withMetadata = "false";

var config = {
  method: "get",
  url: `${baseURL}?contractAddress=${contractAddr}&startToken=${startToken}&withMetadata=${withMetadata}`,
  headers: {},
};

axios(config)
  .then((response) => console.log(JSON.stringify(response.data, null, 2)))
  .catch((error) => console.log(error));
