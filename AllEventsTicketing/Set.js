function Set() {
	
	
	this.intersection = function(listA, listB) {
    
	   var resultList = [];
       
	   if (listA === null || listB === null) {
	   		return null;
	   }

	   for (var i = 0; i < listA.length; i++) {
	   		var nextValue = listA[i];

	   		for (var j = 0; j < listB.length; j++) {
	   			if (listB[j] === nextValue) {
	   				resultList.push(listB[j]);
	   				break;
				}
			}
	   }
       
	   return resultList;
	}
    
    
    
	this.union = function(listA, listB) {

	   var resultList = [];
       
	   if (listA === null) {
	   		return null;
	   }

	   if (listB === null) {
	   		return null;
	   }

	   if (listA === []) {
	   		return listB;
	   }

	   if (listB === []) {
	   		return listA;
	   }

	   // add all items of list A into the result list
	   for (var i = 0; i < listA.length; i++) {
	   		resultList.push(listA[i]);
	   }

	   // add only the non-repeating values of list B into the result list
	   for (var j = 0; j < listB.length; j++) {
           var found = 0;
           for (var i = 0; i < resultList.length; i++) {
           		if (listB[j] === resultList[i]) {
           			found = 1;
           			break;
				}
           }
           if (!found) {
           		resultList.push(listB[j]);
		   }
       }
	   
	   return resultList;
	}




	this.relativeComplement = function(listA, listB) {

	   var resultList = [];

	   if (listA === null) {
	   		return null;
	   }
	   if (listB === null) {
	   		return null;
	   }

	   if (listB === []) {
	   		return listA;
	   }
	   if (listA === []) {
	   		return [];
	   }
       
	   //var intersectionList = this.intersection(listA, listB);

	   for (var i = 0; i < listA.length; i++) { // for every element in A
	   		var found = 0;
	   		for (var j = 0; j < listB.length; j++) { // check if it is found in B
	   			if (listA[i] === listB[j]) {
	   				found = 1;
	   				break;
				}
			}
			/*for (var k = 0; k < intersectionList.length; k++) { // and check if it is found in the intersection
	   			if (listA[i] === intersectionList[k]) {
	   				found  = 1;
	   				break;
				}
			}*/
			if (!found) {
	   			resultList.push(listA[i]);
			}
	   }
       
	   return resultList;
	}



	this.symmetricDifference = function(listA, listB) {

	   var resultList = [];

	   if (listA === null || listB === null) {
	   		return null;
	   }
       
       var unionList = this.union(listA, listB);
       var intersectionList = this.intersection(listA, listB);

       for (var i = 0; i < unionList.length; i++) { // for every element in the union
		   var found = 0;
		   for (var j = 0; j < intersectionList.length; j++) {// compare with every element in the intersection
			   if (unionList[i] === intersectionList[j]) {
			   		found = 1;
			   		break;
			   }
           }
           if (!found) {
		   		resultList.push(unionList[i]);
		   }
	   }
       
	   return resultList;
	}	
	

}
