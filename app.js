var chunk = function(inArray, chunkSize) {
	var base = Math.floor( inArray.length / chunkSize );
	var baseAdd = inArray.length % chunkSize;
	var outArray = [];
	var startSlice = 0;
	var endSlice;
	for(var i=0; i < chunkSize; i++) {
		(i < baseAdd) ? endSlice = startSlice + base + 1 : endSlice = startSlice + base;
		outArray.push( inArray.slice(startSlice, endSlice) );
		var startSlice = endSlice;
	}
	return outArray;
};

//Input an array length and the size of the internal arrays
var arrayCompressor = function(inArrayLength, chunkSize) {
	var base = Math.floor( inArrayLength / chunkSize );
	var baseAdd = inArrayLength % chunkSize;
	var outArray = [];
	for(var i=0; i < chunkSize; i++) {
		outArray.push(base);
	}
	for(var i=0; i < baseAdd; i++) {
		var tempValue = outArray[ i ];
		tempValue += 1;
		outArray[ i ] = tempValue;
	}
	return outArray;
};

var chunkOriginal = function(inArray, chunkSize) {
	if(inArray.length < chunkSize) {
		return false;
	}
	var internalArrayOfLengths = arrayCompressor(inArray.length, chunkSize);
	var outArray = [];
	var startSlice = 0;
	for(var i=0; i < internalArrayOfLengths.length; i++)	{
		var endSlice = internalArrayOfLengths[ i ] + startSlice;
		outArray.push( inArray.slice( startSlice, endSlice ) );
		var startSlice = endSlice;
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

