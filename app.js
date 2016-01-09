"use strict";

let name="David Falconer";
let lastName="Falconer";

function callName(){

	return name;
}

function callLastName(){

	return lastName;
}

function story(data){

	return data + "went to the shops";
}

module.exports = {
	callName,
	callLastName,
	story
}

