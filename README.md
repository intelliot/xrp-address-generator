# XRP Address Generator

Generates a specified number of random addresses which could be used with the XRP Ledger. Also outputs the private key and public key for each address, hexadecimal encoded.

## Usage example:

```
yarn
node index.js 10
```

1. Install dependencies with `yarn` or `npm install`
2. Run with `node index.js` or `node .`
3. Optionally specify the number of addresses that you want to generate

## Example output:

```
[
  {
    "secret": "spzStzEF7ijCGRNCqvBbCbix9Ewmo",
    "address": "rw3SrzFxn25dJUJXHmGpMBLtC7q3MvYddh",
    "privateKey": "005A369E264917D2513BCE8BF3600945FAEB489C124CA2DD37CD4B161D36F65E6B",
    "publicKey": "0351FBA76507E6B6F050276D135D76758818911865800AA7AE668DA33287F65990"
  },
  {
    "secret": "ssarHnpy8J3ZB5B5uK4uwUujCUUUm",
    "address": "rsb4FM8R3PGHSaHXmoirJzqvZaHB62qvQh",
    "privateKey": "00A710C178BB558AD66D34794947687DBACDC0C08062C1AE25899BC3D3902C3EBC",
    "publicKey": "02D40C7A9CFDAF5B4FA0B0DBB4D35C6BB7A4579F4D9C023C03CAA29E080506EE03"
  },
  {
    "secret": "ssfmwnrKA2f4ipFPak8kJcFtgUeo5",
    "address": "r9LWxJNDWYbNvbQcW9sAnNCizcMsnDVpmr",
    "privateKey": "00DA4C69D1E81EDBF269B73F1E86299C24707D6F68BAF32F502912E55A1C102F5D",
    "publicKey": "03BB5EA89E6302D6E595C8CEB7C2685EBD1E1C4234161EEDF378A6D67ADD1F8AD8"
  },
  {
    "secret": "sn8J9fR3TbHxnYDRDYiv6mwioiA8d",
    "address": "r4XZCMHorKHCWn3X1zGXcK1YdRRjU6fvb9",
    "privateKey": "0028FCFEF218A110F2319F3105480188B8826010A4CBA7E3E5336EF8BD573B239F",
    "publicKey": "03075BEC52F5893FFA110DD973FE23BBD1AB73226E5E9999444564F31F5AD82697"
  },
  {
    "secret": "sstk8VqYnX3M6oqxMm5rPUdPak4jR",
    "address": "rs6vysFho1eVUgKwFt3yFRS4Lc8kJkr6ti",
    "privateKey": "005285D4D2D0D75383C49EF9FF26580599020C63116DCA4DB9C8FDDDEC341FF346",
    "publicKey": "02CD26B4475A7089D7D45994FE4B501821442F87DFDECBF2C71D933E7EFB3527FA"
  },
  {
    "secret": "sh9ExW46M6vEu8S11Ff8AsbowA939",
    "address": "rKQWKVghcErwiNX4yDHfHumHAiQ6T9KaZn",
    "privateKey": "00B0889FCBF78A6C0E85346C1E08302B72AB9992DA50105BE727D9DEE07B5EACE8",
    "publicKey": "02C1C6C7C912881167FC39BFA22EA326848F3A1ECB84675F0036A6D241FE8F5F64"
  },
  {
    "secret": "shkjLNQG7nP9WDhEoDzVMwma77byF",
    "address": "rJB7VRjKnvRiWCHYQpfKtmWMKyg6cKZ63G",
    "privateKey": "005ACC7BE5E8E22F367707DB15CFBF8C2B4AC7AE120EA6B03065DF56C9798AA393",
    "publicKey": "0239624D6D414364237BD30A7E211DDDEECF44B55D2B5A25CEB25AEAC3CB8F91C7"
  },
  {
    "secret": "sarWLNvreizkQ3SwVMDcs9Gxjaau1",
    "address": "rLSaCCFeoGFenXn1isEQQfnAGPF2UHmgnE",
    "privateKey": "00B68AC18607AA949FD034C652075E261C879CE4941B9E300EF1CBA980663279F6",
    "publicKey": "034F87A5DA50509093AE6B92517C7D198B3A331E7E00936B99B6C8B334B8264F91"
  },
  {
    "secret": "snMkSC7ZS3gw93Eip3A1co8urhFU7",
    "address": "rwRLtxd9VsZzgtmcPv8mQZkRQZpL3ZN7WS",
    "privateKey": "00CD78C510D33F5B9E2CB4B88AC97714F2C73309B6395A26EBE8931D170360CAC1",
    "publicKey": "0281C9AABB643D0B288D3982794B4C47A839F0BA1ECE14E0EAA28B0D156D9D42DE"
  },
  {
    "secret": "ssQDL7YmcV2Fw6SACZYbv2t3J9qqb",
    "address": "rGcv2H1k7VnSPsFrdHQir1QRdHetKC6Ci2",
    "privateKey": "00C5B79FC1366556EE5AEAD3E0DE48977864DD7F7221FF013D3E95701AAB03358A",
    "publicKey": "02C27FA66DEB528F10E61098BF060CAD78AA126202A27AEB74FCDE4D42C411C401"
  }
]
```

**WARNING: Do not use the above keys or addresses. They have been posted publicly here in this README.**
