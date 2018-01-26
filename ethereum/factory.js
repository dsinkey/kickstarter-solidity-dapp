import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0xDe47dc41aCEEe662f7f856C2d59b88a5Bbb234C8'
);

export default instance;
