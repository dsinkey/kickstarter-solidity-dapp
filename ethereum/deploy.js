const HDwalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compliedFactory = require('./build/CampaignFactory.json');

const provider = new HDwalletProvider(
	'inform alpha success reunion weasel tortoise ancient purchase average shoulder steel volcano',
	'https://rinkeby.infura.io/DUsjLle6DbxbPVvJFDhL'
);
const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();

	console.log('Attempting to deploy from account ', accounts[0]);

	const result = await new web3.eth.Contract(
		JSON.parse(compliedFactory.interface)
	)
		.deploy({
			data: compliedFactory.bytecode
		})
		.send({ gas: '1000000', from: accounts[0] });

	console.log('Contract deployed to', result.options.address);
	//Contract deployed to 0xDe47dc41aCEEe662f7f856C2d59b88a5Bbb234C8
};

deploy();
