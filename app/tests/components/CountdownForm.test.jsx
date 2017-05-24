var React           = require('react'),
    ReactDOM        = require('react-dom');
// var $               = require('jQuery');    
var $               = require('../../../node_modules/jquery/dist/jquery.min.js');
var expect          = require('expect'),
    TestUtils       = require('react-addons-test-utils');

var CountdownForm           = require('CountdownForm');

describe('CountdownForm', () => {
    it('should exist', () => {
        expect(CountdownForm).toExist();
    });
    
    it('should call onSetCountdown when valid seconds are entered', () => {
       var spy = expect.createSpy();
       var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
       var $el = $(ReactDOM.findDOMNode(countdownForm));
       
       countdownForm.refs.seconds.value = '109';
       TestUtils.Simulate.submit($el.find('form')[0]);
 
       expect(spy).toHaveBeenCalledWith(109);
//      expect(spy.calls[0].arguments[0]).toBe(109);
    });
});