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

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Dustin/Documents/kickstart/pages/campaigns/new.js?entry';


var CampaignNew = function (_Component) {
    (0, _inherits3.default)(CampaignNew, _Component);

    function CampaignNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            minimumContribution: '',
            errorMessage: ''
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                _context.prev = 1;
                                _context.next = 4;
                                return _web2.default.eth.getAccounts();

                            case 4:
                                accounts = _context.sent;
                                _context.next = 7;
                                return _factory2.default.methods.createCampaign(_this.state.minimumContribution).send({
                                    from: accounts[0]
                                });

                            case 7:
                                _context.next = 12;
                                break;

                            case 9:
                                _context.prev = 9;
                                _context.t0 = _context['catch'](1);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 12:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[1, 9]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, 'Create Campaign'), _react2.default.createElement(_semanticUiReact.Form, {
                onSubmit: this.onSubmit,
                error: !!this.state.errorMessage,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, 'Minimum Contribution'), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'wei',
                labelPosition: 'right',
                value: this.state.minimumContribution,
                onChange: function onChange(event) {
                    return _this3.setState({
                        minimumContribution: event.target.value
                    });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            })), _react2.default.createElement(_semanticUiReact.Message, {
                error: true,
                header: 'There was some errors with your submission',
                content: this.state.errorMessage,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, 'Create Campaign')));
        }
    }]);

    return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiTGF5b3V0IiwiZmFjdG9yeSIsIndlYjMiLCJDYW1wYWlnbk5ldyIsInN0YXRlIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImVycm9yTWVzc2FnZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlQ2FtcGFpZ24iLCJzZW5kIiwiZnJvbSIsInNldFN0YXRlIiwibWVzc2FnZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFRLEFBQU87O0FBQzlCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7Ozs7Ozs7SSxBQUVYOzs7Ozs7Ozs7Ozs7Ozs7ME5BQ0YsQTtpQ0FBUSxBQUNpQixBQUNyQjswQixBQUZJLEFBRVU7QUFGVixBQUNKLGlCLEFBSUo7aUdBQVcsaUJBQUEsQUFBTSxPQUFOO29CQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNQO3NDQURPLEFBQ1AsQUFBTTs7Z0RBREM7Z0RBQUE7dUNBSW9CLGNBQUEsQUFBSyxJQUp6QixBQUlvQixBQUFTOztpQ0FBMUI7QUFKSCxvREFBQTtnREFBQTt5REFLRyxBQUFRLFFBQVIsQUFDRCxlQUFlLE1BQUEsQUFBSyxNQURuQixBQUN5QixxQkFEekIsQUFFRDswQ0FDUyxTQVJYLEFBS0csQUFFSSxBQUNJLEFBQVM7QUFEYixBQUNGLGlDQUhGOztpQ0FMSDtnREFBQTtBQUFBOztpQ0FBQTtnREFBQTtnRUFXSDs7c0NBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQVgzQixBQVdILEFBQWMsQUFBb0I7O2lDQVgvQjtpQ0FBQTtnREFBQTs7QUFBQTt5Q0FBQTtBOzs7Ozs7Ozs7O2lDQWNGO3lCQUNMOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxvQ0FBQSxBQUFDOzBCQUNhLEtBRGQsQUFDbUIsQUFDZjt1QkFBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BRmxCLEFBRXdCOzs4QkFGeEI7Z0NBQUEsQUFJSTtBQUpKO0FBQ0ksK0JBR0MsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EseUNBQUEsQUFBQzt1QkFBRCxBQUNVLEFBQ047K0JBRkosQUFFa0IsQUFDZDt1QkFBTyxLQUFBLEFBQUssTUFIaEIsQUFHc0IsQUFDbEI7MEJBQVUseUJBQUE7a0NBQ04sQUFBSzs2Q0FDb0IsTUFBQSxBQUFNLE9BRnpCLEFBQ04sQUFBYyxBQUN3QjtBQUR4QixBQUNWLHFCQURKO0FBTFI7OzhCQUFBO2dDQU5SLEFBSUksQUFFSSxBQVdKO0FBWEk7QUFDSSxpQ0FVUixBQUFDO3VCQUFELEFBRUk7d0JBRkosQUFFVyxBQUNQO3lCQUFTLEtBQUEsQUFBSyxNQUhsQixBQUd3Qjs7OEJBSHhCO2dDQWpCSixBQWlCSSxBQUtBO0FBTEE7QUFDSSxnQ0FJSixBQUFDLHlDQUFPLFNBQVI7OEJBQUE7Z0NBQUE7QUFBQTtlQXpCWixBQUNJLEFBRUksQUFzQkksQUFJZjs7Ozs7QUFsRHFCLEEsQUFxRDFCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvRHVzdGluL0RvY3VtZW50cy9raWNrc3RhcnQifQ==