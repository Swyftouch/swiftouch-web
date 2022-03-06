// Require the driver
const faunadb = require("faunadb");
const q = faunadb.query;

// Acquire the secret and optional endpoint from environment variables
const secret = "fnAEgtNoH0ACS-iqVjSwYALrUVJx_AMA_7w26w3A";

var endpoint = process.env.FAUNADB_ENDPOINT;

if (typeof secret === "undefined" || secret === "") {
  console.error("The FAUNADB_SECRET environment variable is not set, exiting.");
  process.exit(1);
}

if (!endpoint) endpoint = "https://db.fauna.com/";

var mg, domain, port, scheme;
if ((mg = endpoint.match(/^(https?):\/\/([^:]+)(:(\d+))?/))) {
  scheme = mg[1] || "https";
  domain = mg[2] || "db.fauna.com";
  port = mg[4] || 443;
}

// Instantiate a client
const serverClient = new faunadb.Client({
  secret: secret,
  domain: domain,
  port: port,
  scheme: scheme,
});

// FaunaDB architecture works as follow: Databases > Collections / (Indexes) > Documents
// naming conventions: lowercase with underscores
// 2 Collections currently exist: users | tokens = (nft's)

// Creates a document for wallet addresses in collection users
serverClient
  .query(
    q.Create(q.Collection("users"), {
      data: {
        user_address: this.metaAccount,
      },
    })
  )
  .then((ret) => console.log(ret))
  .catch((err) =>
    console.error(
      "Error: [%s] %s: %s",
      err.name,
      err.message,
      err.errors()[0].description
    )
  );
