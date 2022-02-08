const config = {
    'config': {
        'mixins': {
            'Magento_Checkout/js/view/shipping': {
                'Formation_CustomCheckout/js/view/shipping-payment-mixin': true
            },
            'Magento_Checkout/js/view/payment': {
                'Formation_CustomCheckout/js/view/shipping-payment-mixin': true
            }
        }
    }
}
