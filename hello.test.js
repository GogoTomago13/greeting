var utils  = require('course-utilities');
var greet = utils.load('./hello.js', 'greet');

//test('outputs the correct string', () => {
  //expect(hello()).toBe("Hello World!");
//});

//var utils  = require('course-utilities');
//var hello = utils.load('./hello.js', 'hello');

test('outputs the correct string', () => {
  expect(greet('Luna')).toBe("Hello Luna!");
});



//describe('test hello()', function() {
    //it ('should be called', function (){
     //   expect(hello('Luna')).toBeCalled();
   // });
//});

