import React, { Component } from 'react';
import Layout from '../../components/Layout';
import ContributeForm from '../../components/ContributeForm';
import Campaign from '../../ethereum/campaign';
import { Card } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';

console.log(Campaign);

class CampaignShow extends Component {
    static async getInitialProps(props) {
        console.log('props', props);
        const campaign = Campaign(props.query.address);
        console.log(campaign);
        const summary = await campaign.methods.getSummary().call();
        console.log(summary);
        return {
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4],
        };
    }

    renderCards() {
        const {
            balance,
            manager,
            minimumContribution,
            requestsCount,
            approversCount,
        } = this.props;

        const items = [
            {
                header: manager,
                meta: 'Address of campaign manager',
                description: 'Campaign one',
                style: {
                    overflowWrap: 'break-word',
                },
            },
            {
                header: minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description:
                    'You must contribute at least this much wei to become an approver',
            },
            {
                header: requestsCount,
                meta: 'Number of Requests',
                description:
                    'Requests are made by the manager to make withdrawals from the contract for payments related to the campaign',
            },
            {
                header: approversCount,
                meta: 'Number of Approvers',
                description:
                    'Number of people who have already donated to this campaign',
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (Ether)',
                description: 'Current balance of the campaign',
            },
        ];

        return <Card.Group items={items} />;
    }
    render() {
        console.log('render');
        return (
            <Layout>
                <h3>Campaign Show</h3>
                {this.renderCards()}
                <ContributeForm />
            </Layout>
        );
    }
}

export default CampaignShow;
