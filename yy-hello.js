/**
 *
 * @authors yangwei
 * @date    2015-07-27 10:53:54
 * @version $Id$
 */

function test() {
    console.log('test');
}

exports.Hello = function ( name ) {
    console.log( "Hello " + name );
    test();
}

