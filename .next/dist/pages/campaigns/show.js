'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Dustin/Documents/kickstart/pages/campaigns/show.js?entry';


console.log(_campaign2.default);

var CampaignShow = function (_Component) {
    (0, _inherits3.default)(CampaignShow, _Component);

    function CampaignShow() {
        (0, _classCallCheck3.default)(this, CampaignShow);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: 'renderCards',
        value: function renderCards() {
            var _props = this.props,
                balance = _props.balance,
                manager = _props.manager,
                minimumContribution = _props.minimumContribution,
                requestsCount = _props.requestsCount,
                approversCount = _props.approversCount;

            var items = [{
                header: manager,
                meta: 'Address of campaign manager',
                description: 'Campaign one',
                style: {
                    overflowWrap: 'break-word'
                }
            }, {
                header: minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description: 'You must contribute at least this much wei to become an approver'
            }, {
                header: requestsCount,
                meta: 'Number of Requests',
                description: 'Requests are made by the manager to make withdrawals from the contract for payments related to the campaign'
            }, {
                header: approversCount,
                meta: 'Number of Approvers',
                description: 'Number of people who have already donated to this campaign'
            }, {
                header: _web2.default.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (Ether)',
                description: 'Current balance of the campaign'
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            console.log('render');
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, 'Campaign Show'), this.renderCards(), _react2.default.createElement(_ContributeForm2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var campaign, summary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                console.log('props', props);
                                campaign = (0, _campaign2.default)(props.query.address);

                                console.log(campaign);
                                _context.next = 5;
                                return campaign.methods.getSummary().call();

                            case 5:
                                summary = _context.sent;

                                console.log(summary);
                                return _context.abrupt('return', {
                                    minimumContribution: summary[0],
                                    balance: summary[1],
                                    requestsCount: summary[2],
                                    approversCount: summary[3],
                                    manager: summary[4]
                                });

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ29udHJpYnV0ZUZvcm0iLCJDYW1wYWlnbiIsIkNhcmQiLCJ3ZWIzIiwiY29uc29sZSIsImxvZyIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsInJlbmRlckNhcmRzIiwiY2FtcGFpZ24iLCJxdWVyeSIsImFkZHJlc3MiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQW9COzs7O0FBQzNCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFTOztBQUNULEFBQU8sQUFBVTs7Ozs7Ozs7O0FBRWpCLFFBQUEsQUFBUSxBQUFJOztJQUVOLEE7Ozs7Ozs7Ozs7O3NDQWdCWTt5QkFPTixLQVBNLEFBT0Q7Z0JBUEMsQUFFTixpQkFGTSxBQUVOO2dCQUZNLEFBR04saUJBSE0sQUFHTjtnQkFITSxBQUlOLDZCQUpNLEFBSU47Z0JBSk0sQUFLTix1QkFMTSxBQUtOO2dCQUxNLEFBTU4sd0JBTk0sQUFNTixBQUdKOztnQkFBTTt3QkFDRixBQUNZLEFBQ1I7c0JBRkosQUFFVSxBQUNOOzZCQUhKLEFBR2lCLEFBQ2I7O2tDQUxNLEFBQ1YsQUFJVyxBQUNXO0FBRFgsQUFDSDtBQUxSLEFBQ0ksYUFGTTt3QkFTVixBQUNZLEFBQ1I7c0JBRkosQUFFVSxBQUNOOzZCQVpNLEFBU1YsQUFJUTtBQUpSLEFBQ0k7d0JBS0osQUFDWSxBQUNSO3NCQUZKLEFBRVUsQUFDTjs2QkFsQk0sQUFlVixBQUlRO0FBSlIsQUFDSTt3QkFLSixBQUNZLEFBQ1I7c0JBRkosQUFFVSxBQUNOOzZCQXhCTSxBQXFCVixBQUlRO0FBSlIsQUFDSTt3QkFNUSxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsU0FEL0IsQUFDWSxBQUE0QixBQUNwQztzQkFGSixBQUVVLEFBQ047NkJBOUJSLEFBQWMsQUEyQlYsQUFHaUIsQUFJckI7QUFQSSxBQUNJOztpREFNRCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBOzs7O2lDQUVGLEFBQ0w7b0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQyx1QkFGTCxBQUVLLEFBQUssQUFDTiwrQkFBQSxBQUFDOzs4QkFBRDtnQ0FKUixBQUNJLEFBR0ksQUFHWDtBQUhXO0FBQUE7Ozs7O2lIQWxFaUIsQTs7Ozs7aUNBQ3pCO3dDQUFBLEFBQVEsSUFBUixBQUFZLFNBQVosQUFBcUIsQUFDZjtBLDJDQUFXLHdCQUFTLE1BQUEsQUFBTSxNQUFmLEEsQUFBcUIsQUFDdEM7O3dDQUFBLEFBQVEsSUFBUixBQUFZOzt1Q0FDVSxTQUFBLEFBQVMsUUFBVCxBQUFpQixhQUFqQixBQUE4QixBOztpQ0FBOUM7QSxtREFDTjs7d0NBQUEsQUFBUSxJQUFSLEFBQVk7O3lEQUVhLFFBRGxCLEFBQ2tCLEFBQVEsQUFDN0I7NkNBQVMsUUFGTixBQUVNLEFBQVEsQUFDakI7bURBQWUsUUFIWixBQUdZLEFBQVEsQUFDdkI7b0RBQWdCLFFBSmIsQUFJYSxBQUFRLEFBQ3hCOzZDQUFTLFEsQUFMTixBQUtNLEFBQVE7QUFMZCxBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUmUsQSxBQXlFM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvRHVzdGluL0RvY3VtZW50cy9raWNrc3RhcnQifQ==