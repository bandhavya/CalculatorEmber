App.NumberBtnView = App.ButtonView.extend({
    //By default ---- needs: ['Index'],
    attributeBindings: ['name'],
    click: function(evt) {
        this.get('controller').send('onNumberClick', evt.target.textContent, evt.target.name);
    }
});
