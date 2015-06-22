App.OperatorBtnView = App.ButtonView.extend({
    attributeBindings: ['name'],
    click: function(evt) {
        this.get('controller').send('onOperatorClick', evt.target.textContent, evt.target.name);
    }
});
