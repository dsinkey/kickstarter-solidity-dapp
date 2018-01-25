const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const provider = ganache.provider();
const web3 = new Web3(provider);

const compliedFactory = require('../ethereum/build/CampaignFactory.json');
const compliedCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
	accounts = await web3.eth.getAccounts();

	factory = await new web3.eth.Contract(JSON.parse(compliedFactory.interface))
		.deploy({ data: compliedFactory.bytecode })
		.send({ from: accounts[0], gas: '1000000' });

	factory.setProvider(provider);

	await factory.methods.createCampaign('100').send({
		from: accounts[0],
		gas: '1000000'
	});

	const addresses = await factory.methods.getDeployedCampaigns().call();
	campaignAddress = addresses[0];

	campaign = await new web3.eth.Contract(
		JSON.parse(compliedCampaign.interface),
		campaignAddress
	);

	campaign.setProvider(provider);
});

describe('Campaigns', () => {
	it('deploys a factory and a campaign', () => {
		assert.ok(factory.options.address);
		assert.ok(campaign.options.address);
	});

	it('marks the caller as the campaing manager', async () => {
		const manager = await campaign.methods.manager().call();
		assert.equal(accounts[0], manager);
	});

	it('it allows people to contribute money and marks them as approvers', async () => {
		await campaign.methods.contribute().send({
			value: '200',
			from: accounts[1],
			gas: '1000000'
		});

		const isContributor = await campaign.methods
			.approvers(accounts[1])
			.call();
		assert(isContributor);
	});

	it('requires a minimum contribution', async () => {
		try {
			await campaign.methods.contribute.send({
				value: '5',
				from: accounts[1]
			});
			assert(false);
		} catch (err) {
			assert(err);
		}
	});
});
