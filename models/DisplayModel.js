App.Display = DS.Model.extend({
    inputText: DS.attr('string'),
    width: DS.attr('string'),
    height: DS.attr('string'),
    className: DS.attr('string')

})


/*Ember Data makes it easy to use a Model to retrieve records from a server, 
cache them for performance, save updates back to the server, and 
create new records on the client.*/


App.Display.FIXTURES = [{
    id: '1',
    inputText: '',
    className: 'displayClassInView'
}]
