App.DisplayView = Ember.View.extend({
    tagName: 'input',
    attributeBindings: ['style','value'],
    //TODO:how to append this style to the displayview
    style: Ember.computed('model', 'model.{width,height}', function () {
        var ret = '',
            width = this.get('controller.model.displayInput.width'),
            height = this.get('controller.model.height');

        if (width) {
            ret += 'width: ' + width + 'px;';
        }

        if (height) {
            ret += 'height: ' + height + 'px';
        }

        return ret;
    })
});