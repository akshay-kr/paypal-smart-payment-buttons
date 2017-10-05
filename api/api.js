
import spark from 'xo-spark';
import { FUNDING } from 'paypal-checkout/dist/checkout.button.render';

module.exports = spark.register({

    name: 'button',

    description: 'Hermes Button API Plugin',

    apis: {

        buttonTypes: {
            path: '/api/button/funding',

            handlers: {
                get(req, res, params, query) {

                    let remembered = [];
                    let eligible = [];

                    if (req.cookies.login_email) {
                        remembered.push(FUNDING.PAYPAL);
                        eligible.push(FUNDING.PAYPAL);
                    }

                    if (req.cookies.pwv) {
                        remembered.push(FUNDING.VENMO);
                        eligible.push(FUNDING.VENMO);
                    }

                    return {
                        remembered: remembered,
                        eligible: eligible
                    };
                }
            },

            roles: []
        }
    }
});
