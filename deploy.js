const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./compile');

const provider =  new HDWalletProvider(
  'elephant session swift kiss trend bachelor deal deliver decrease square loan long',
  'https://rinkeby.infura.io/v3/3952b143a8f2437ea69be8515e9c8422'
)

const web3 = new Web3(provider);

const deploy = async ()=>{
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from contract',accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data : bytecode,arguments:['Hi There!']})
    .send({from : accounts[0],gas:'1000000'});
  console.log('Contract deployed to',result.options.address);
};
deploy();
