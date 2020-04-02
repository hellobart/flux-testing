# Flux testing

### Requirements

* devnet running on localhost:8545 - https://github.com/smartcontractkit/devnet

### Build

```
$ yarn build
```

### Setup and deploy

* Deploy Link contract
* Deploy Flux contract
* Add 3 Oracles to Flux contract
* Save addresses to `./addresses.json`

```
$ node ./build/setup
```

### Add a config in feeds ui with flux address

```
{
    "contractAddress": "PASTE FLUX ADDRESS HERE FROM ./addresses.json",
    "contractType": "aggregator",
    "contractVersion": 3,
    "name": "FLUX / USD",
    "valuePrefix": "$",
    "pair": ["FLUX", "USD"],
    "path": "flux-usd",
    "networkId": 1,
    "history": true,
    "decimalPlaces": 3,
    "multiply": "100000",
    "sponsored": ["BW"],
    "heartbeat": 3600,
    "threshold": 2,
    "compare_offchain": "",
    "health_price": "",
    "listing": true
  }
```

### Update Answers

@FirstParam: Oracle number. Can be set to `all`. There are only 3 oracles in default setup.
@SecondParam: Round ID. Starts with 1.
@ThridParam: Answer.

Following script starts roundId 1, updates all the oracles with the answer 10000.

```
node ./build/updateAnswer all 1 100000
```

Use following pattern to update oracles separetly:

```
node ./build/updateAnswer 0 2 100000
node ./build/updateAnswer 1 2 120000
node ./build/updateAnswer 2 2 80000
```