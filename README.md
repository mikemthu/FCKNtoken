# FCKN Token (BSC truffle config)

This is a simple ERC20 token created via OpenZepplin but deployed on Binance Smart Chain as per the truffle config file.

View the live token here on [BSC Scan](https://bscscan.com/token/0x9fB0650721f43e8Ffee86B20f4203F3f50A143d2)

[BUY IT NOW](https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x9fB0650721f43e8Ffee86B20f4203F3f50A143d2) on Pancake swap


## How to 

Follow instructions from [Truffle](https://www.trufflesuite.com/docs/truffle/getting-started/installation) to get setup. Make sure you have NPM etc setup beforehand.

```bash
npm install -g truffle
```
Create a .secret file in the root directory with your test wallet seedphase. This is excluded by gitignore. See truffle config here:

```javascript
const mnemonic = fs.readFileSync(".secret").toString().trim();
```

Get some free BNB from the [faucet](https://testnet.binance.org/faucet-smart)

Add BSC Smartchain to your metamask wallet. Metamask -> Settings -> Networks
```
Testnet
Network Name: Smart Chain - Testnet
New RPC URL: https://data-seed-prebsc-1-s1.binance.org:8545/
ChainID: 97
Symbol: BNB
Block Explorer URL: https://testnet.bscscan.com
``` 

## How to deploy to testnet
First, change the token name in FCKNtoken.sol file
```javascript
constructor(uint256 initialSupply) ERC20("FCKN Fried Chicken", "FCKN") 
```
Connecting to BSC testnet

```bash
truffle console --network testnet
```

If you want to override my FCKN token you use --reset once connected to testnet

```bash
truffle(testnet)> migrate --reset
```

otherwise just 

```bash
truffle(testnet)> migrate 
```

You should see the address etc like this
```bash
   > transaction hash:    0x5ab2a5fe519481b0d81716cbdc3bfb68bcd17e903b75fb59a525fe9b5ee68673
   > Blocks: 2            Seconds: 8
   > contract address:    0xe092faBE5822017Fd4601a65e189b560fc0440d4
   > block number:        10957864
   > block timestamp:     1627394786
   > account:             0xBc098617af450fD4D422554DA417d099A67d6Fc2
   > balance:             0.961293
   > gas used:            248854 (0x3cc16)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00248854 ETH
```


## Check on BSC Scan
Check here for [FCKN token](https://testnet.bscscan.com/token/0xeD9bC5F97A15328047b71cdf254253edE469D8D2)
