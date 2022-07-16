import 'dotenv/config'
import Web3 from 'web3';
import Common, { Chain } from '@ethereumjs/common'
import { Transaction } from '@ethereumjs/tx'
// INFURA_KEY // Replace your infura-key
const web3 = new Web3('wss://ropsten.infura.io/ws/v3/' + process.env.INFURA_KEY);
const account = ''; // Replace wallet address with metamask wallet address
 
const contract_Address = ""; //replace deployed contract address
const abi: any[] =[];
const chck = web3.utils.toChecksumAddress(contract_Address)
const contract = new web3.eth.Contract(abi, contract_Address); // Instantiating smart contract


class Student {
    
    constructor() {

    }
    signTransaction(smartContractFunction: any) {

        web3.eth.getTransactionCount(account, (err, txCount) => {
            web3.eth.getGasPrice(function (e, r) {
                const txObject = {
                    nonce: web3.utils.toHex(txCount),
                    to: contract_Address,
                    value: web3.utils.toHex(web3.utils.toWei('0', 'ether')),
                    gasLimit: web3.utils.toHex(2100000),
                    gasPrice: web3.utils.toHex(r),
                    data: smartContractFunction
                }
                const common = new Common({ chain: Chain.Ropsten })
                const tx = Transaction.fromTxData(txObject, { common })
                // Replace Private key to sign the transaction.
                const privateKey = Buffer.from(
                    'xxxxxxxxxxxxxcc22184c848da5fcafc47e6873db97xxxxxxxxxxxxxxxxxxx',
                    'hex',
                )
                const serializedTx = tx.sign(privateKey).serialize().toString('hex')
                web3.eth.sendSignedTransaction('0x' +serializedTx).on('receipt', receipt => {
                    console.log(receipt);
                })
            });
        })
    }
    /**
     * create student 
     * @param studentName 
     * @param studentClass 
     */

    createStudent(studentName: any, studentClass: any) {

        const smartContractFunction = contract.methods.create(studentName, studentClass).encodeABI();
        this.signTransaction(smartContractFunction);
    }
    /**
     * get student details
     * @param studentRollNo 
     */

    readStudent(studentRollNo: any) {
        contract.methods.read(studentRollNo).call().then(function (result: any) {
            console.log(result);
        });
    }
    updateStudent(studentRollNo: any, studentName: any, studentClass: any) {
        const smartContractFunction = contract.methods.update(studentRollNo, studentName, studentClass).encodeABI();
        this.signTransaction(smartContractFunction);
    }
    deleteStudent(studentRollNo: any) {
        const smartContractFunction = contract.methods.destroy(studentRollNo).encodeABI();
        this.signTransaction(smartContractFunction);
    }
  
}

//create an object 
let obj = new Student();
// obj.createStudent('Vinod','MSc');
obj.readStudent(0);