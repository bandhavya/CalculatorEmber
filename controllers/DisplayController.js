App.DisplayController = Ember.ArrayController.extend({
    actions: {
        setDisplay: function(value, type) {
            console.log(this.get('model'));
            value = value.trim();
            var result;
            for (var i = 0; i < this.get('model.length'); i++) {
                var model = this.get('model').objectAt(i);
                if (type == 'clear') {
                    Ember.set(model, 'inputText', '');
                } else if (type == "number" || type == 'operator') {
                    var newValue = Ember.get(model, 'inputText') + value;
                    Ember.set(model, 'inputText', newValue);
                } else if (type == 'equal') {
                    result = eval(Ember.get(model, 'inputText'));
                    Ember.set(model, 'inputText', result);
                }
            }
        }
    }
});
