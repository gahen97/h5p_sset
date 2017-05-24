/*
	Adding some extra hotness to objects
*/

Object.prototype.callSuper = function(cls, functionName) {
    // take all the arguments after functionName
    var args = Array.prototype.slice.call(arguments, 2)

    // call the function on super's prototype
    cls.prototype.__super__.prototype[functionName].apply(this, args);
};
