
//Input an array length and the size of the internal arrays
var arrayCompressor = function(inArrayLength, chunkSize) {
	
	var base = Math.floor( inArrayLength / chunkSize );
	var baseAdd = inArrayLength % chunkSize;
	var outArray = [];
	
	//possible map or foreach
	for(var i=0; i < chunkSize; i++) {
		outArray.push(base);
	}

	// outArray = outArray.map(function() {return base;});

	for(var i=0; i < baseAdd; i++) {
	
		var tempValue = outArray[ i ];
		tempValue += 1;
		outArray[ i ] = tempValue;
	
	}
	return outArray;
};


var chunk = function(inArray, chunkSize) {

	if(inArray.length < chunkSize) {
		return false;
	}

	var internalArrayOfLengths = arrayCompressor(inArray.length, chunkSize);
	var outArray = [];
	var startSlice = 0;
	
	for(var i=0; i < internalArrayOfLengths.length; i++)	{
	
		var endSlice = internalArrayOfLengths[ i ] + startSlice;
		var tempSlice = inArray.slice( startSlice, endSlice );
		var startSlice = endSlice;
		outArray.push( tempSlice );
	}
	return outArray;
};

var generateArraryIntegers = function(arrayEnd) {

	var outArray = new Array(arrayEnd);
	for(var i=0; i < outArray.length; i++) {
		outArray[ i ] = i + 1;
	}
	return outArray;

};