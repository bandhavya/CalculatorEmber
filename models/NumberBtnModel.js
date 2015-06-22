//Display model
//check how to apply style object in item values. -- TODO
App.NumberBtns = DS.Model.extend({
    value: DS.attr('string'),
    width: DS.attr('string'),
    height: DS.attr('string'),
    className: DS.attr('string'),
    type: DS.attr('string')
})


/*Ember Data makes it easy to use a Model to retrieve records from a server, 
cache them for performance, save updates back to the server, and 
create new records on the client.*/


App.NumberBtns.FIXTURES = [{
    id: '101',
    value: '1',
    className: 'NumberBtnClass',
    type: 'number',
}, {
    id: '102',
    value: '2',
    className: 'NumberBtnClass',
    type: 'number',
}, {
    id: '103',
    value: '3',
    className: 'NumberBtnClass',
    type: 'number',
}, {
    id: '104',
    value: '4',
    className: 'NumberBtnClass',
    type: 'number',
}, {
    id: '105',
    value: '5',
    className: 'NumberBtnClass',
    type: 'number',
}, {
    id: '106',
    value: '6',
    className: 'NumberBtnClass',
    type: 'number',
}, {
    id: '107',
    value: '7',
    className: 'NumberBtnClass',
    type: 'number',
}, {
    id: '108',
    value: '8',
    className: 'NumberBtnClass',
    type: 'number',
}, {
    id: '109',
    value: '9',
    className: 'NumberBtnClass',
    type: 'number',
}, {
    id: '110',
    value: '0',
    className: 'NumberBtnClass',
    type: 'number',
}]
