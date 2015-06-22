//Display model
//check how to apply style object in item values. -- TODO
App.OperatorBtns = DS.Model.extend({
    value: DS.attr('string'),
    width: DS.attr('string'),
    height: DS.attr('string'),
    className: DS.attr('string'),
    type: DS.attr('string')
})


/*Ember Data makes it easy to use a Model to retrieve records from a server, 
cache them for performance, save updates back to the server, and 
create new records on the client.*/


App.OperatorBtns.FIXTURES = [{
    id: '200',
    value: '.',
    className: 'OperatorBtnClass',
    type: 'operator',
},{
    id: '201',
    value: '*',
    className: 'OperatorBtnClass',
    type: 'operator',
}, {
    id: '202',
    value: '/',
    className: 'OperatorBtnClass',
    type: 'operator',
}, {
    id: '203',
    value: '+',
    className: 'OperatorBtnClass',
    type: 'operator',
}, {
    id: '204',
    value: '-',
    className: 'OperatorBtnClass',
    type: 'operator',
}, {
    id: '205',
    value: '=',
    className: 'equalBtnClass',
    type: 'equal',
}, {
    id: '206',
    value: 'c',
    className: 'ClearBtnClass',
    type: 'clear',
}]
