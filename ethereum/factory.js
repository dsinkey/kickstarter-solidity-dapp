import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x5899244E38388af1E2013Aea4708B6b934A7F866',
);

export default instance;
