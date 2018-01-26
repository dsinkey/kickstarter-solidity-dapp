import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0x06D2E12fB72b70D62383BbFeC065070E6B5E8616'
);

export default instance;
