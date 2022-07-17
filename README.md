# Dapp in typescript
**A Create Your First dAPP On ethereum**

#### AUTHOR:

- [Vinod](https://github.com/vinodnextcoder "vinods's github profile")

#### DESCRIPTION:
This repository contains a source code to create simple CURD application and smart contract code.


#### Setup 
- Follow this [Simple blockchain dapp vinod's](https://dev.to/vinodnextcoder/create-your-first-simple-dapp-on-ethereum-55k1) to create a decentralized application.

# Introduction
```ts
In this article, we are going to build a simple CRUD decentralized application on theEthereum blockchain. Also will create a CRUD smart contract for the sameapplications. This is a practical hands-on article.

Details process https://medium.com/geekculture/create-your-first-dapp-on-ethereum-6eb50b4083f2

- 1.Basic understanding of solidity or general programming.
- 2.Metamask extension on chrome or firefox. (To connect withweb3)
- 3.Basic understanding of Web3.
- 4. Wallet on metamask with some ether(coins) for a ropsten network.
- 5. Nodejs or javascript understanding.

```
## Smart Contract Deployment
```
This is a simple curd smart contract, which deals with students’ data.
create copy .env.example to .env file
Let’s deploy the contract in a remix environment
First, navigate to address https://remix.ethereum.org/ 
Add new curd.sol
file and copy-paste the code from the repository.
From the left side click on the 3rd button deployment window will appear of metamask
```

# Setup Steps
```
Smart contract deployment on ropsten network
First, create an account on https://infura.io get infra key
Testing of a smart contract.
The architecture of a decentralized application.
Build the decentralized application (dAPP) to interact with the blockchain.
Run and test the application
get abi and contract address from  https://remix.ethereum.org/ 

Run commands nodejs

```


## Installation

```
npm install
```

## Run 

```
Step-1
 npx ts-node src/index.ts
###################################
 Insert Record  uncomment this linse
 obj.createStudent('Vinod','MSc');
comment
obj.readStudent(0);
Step- ooutput
{
  from: '0x8aeaexxxxxxxxxxxxxxxxxxxxxx',
  gasUsed: 101374,
  logs: [],
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  status: true,  to: '0x83977bf3e9xxxxxxxxxxxxxxxx',  transactionHash: '0x37169068b6606193XXXXXXXXXXXXXXXXXXXXX', 
   transactionIndex: 25, 
    type: '0x0'
}

----------------------------------------------------------
Step-2 Reading record
 npx ts-node src/index.ts
###################################
 To read record 
 // comment this line in the index file
 ---->> obj.createStudent('Vinod','MSc');
 // uncomment this lin
 obj.readStudent(0);


```

## License

MIT License
