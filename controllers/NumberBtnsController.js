App.NumberBtnsController = Ember.ObjectController.extend({
    actions: {
        click: function (btnValue) {
            alert('number click');
        },
        onNumberClick: function (btnValue) {
            this.get('controller').send('onNumberClick', btnValue);
        }
    }
    
})
