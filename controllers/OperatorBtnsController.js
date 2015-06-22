App.OperatorBtnsController = Ember.ArrayController.extend({
    actions: {
        onOperatorClick: function (btnValue) {
            this.get('controller').send('onOperatorClick', btnValue );
        }
    }
})