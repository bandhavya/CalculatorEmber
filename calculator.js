var App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

//Set the model adapters to use local memory
App.ApplicationAdapter = DS.FixtureAdapter.extend();


//if we to link through other object we use this
//App.Router.map(function(){

//	this.route('about');
//	this.resource('products');

//	//our route object can use path -- select specific title product
//	this.resource('product' ,{path:'/products/:title'})

//});

App.IndexController = Ember.Controller.extend({
    needs: ['Display'],
    actions: {
        setDisplay: function(value, type) {
            this.get('controllers.Display').send('setDisplay', value, type);
        }
    },
    productCount: 6,
    // we need to tell this is a property and call it so we use .property for the function
    time: function() {
        return (new Date()).toDateString();
    }.property()
});


//Router - Translates path to Route - used to define routes our appln accepts.
//---------this.resource('products');
//Route -Responsible for getting data from external resources
//----------App.ProductsRoute = Ember.Route.extend({ });
//Controller - Decorates the model, provides property values
//-----------App.ProductsController = Ember.Controller.extend({ });

// get the data from the ext resource -- this wil be used for data template name Products
//add a resource route using this.resoure('products');
//create route to provide model-- App.ProductsData
App.ProductsRoute = Ember.Route.extend({
    model: function() {
        return App.ProductsData;
    }
})

//so select product from products with title specific
App.ProductRoute = Ember.Route.extend({
    model: function(params) {
        console.log(params);
        return App.ProductsData.findBy('title', params.title);
    }
})

// get data for data template index
App.IndexRoute = Ember.Route.extend({
    model: function() {
        return {
            //findall of model name 
            displayInput: this.store.findAll('display'),

            operatorBtn: this.store.findAll('operatorBtns'),
            numberBtn: this.store.findAll('numberBtns')
        }
    },
    actions: {
        onNumberClick: function(val, type) {
            this.get('controller').send('setDisplay', val, type);
        },
        onOperatorClick: function(val, type) {
            this.get('controller').send('setDisplay', val, type);
        }
    },
    setupController: function(controller, model) {
        controller.set('model', model);
        //controller name --- model corresponding to it.
        this.controllerFor('NumberBtns').set('model', model.numberBtn);
        this.controllerFor('OperatorBtns').set('model', model.operatorBtn);
        this.controllerFor('Display').set('model', model.displayInput);
    }
})

