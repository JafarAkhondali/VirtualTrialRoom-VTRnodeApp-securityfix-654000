/*These methods will be used to scale clothing and orientation for 
each new model created. Because the clothing is custom made in Blender,
anyone reading the source code will see alot of hard-coded values. This
is becasue we made the clothing based on "base models". We custom fit the clothing
accordingly and then scale the clothing later as neccessary.*/

//@param gender - Stirng that specifies which base measurements to use.
//@param measurements - JSON array of measurements, recived from BodyHub API



//All measurements are in inches (Because this is America)
function resizePants(gender,measurements){
var inseam; //Determins the y-scale of the clothing
var thigh_girth; // 
var low_hip_girth;
	if (gender.toLowerCase() === "male") {
		inseam = 29.25;
		thigh_girth = 23.25;
		low_hip_girth = 40.75;
	}
	else {
		inseam = 31.25;
		thigh_girth = 21.5;
		low_hip_girth = 36.5;
	}

	inseam = measurements.inseam / inseam;
	thigh_girth = measurements.thigh_girth / thigh_girth;
	low_hip_girth = measurements.low_hip_girth / low_hip_girth;

	return {inseam, thigh_girth, low_hip_girth};
}

function adjustHeight(gender,measurements) {
	//We first get the proportional height difference.
	var height = gender.toLowerCase() === "male" ? 44 : 66.25;
	//Then we return the proportional difference so that we are able to shift the position of the model accordingly.
	return measurements / height;

}



function resizeTorsoClothing(gender,measurements) {
	var chest_girth; //y-axis scaling 
	var waist_girth; //z-axis scaling 
	var vertical_trunk_girth; //x-axis scaling

	if (gender.toLowerCase() === "male") {
		chest_girth = 41.25;
		waist_girth = 36.0;
		vertical_trunk_girth = 66;
	}
	else {
		chest_girth = 34.5
		waist_girth = 29.25;
		vertical_trunk_girth = 59.0;
	}

	chest_girth = measurements[0] / chest_girth;
	waist_girth = measurements[1] / waist_girth;
	vertical_trunk_girth = measurements[2] / vertical_trunk_girth;

	return {chest_girth,waist_girth,vertical_trunk_girth}; 
}



function resizeCape(gender,measurements) {
	//We just need to scale the neck circumfrence so that we are able to 
	var neck_base_girth = 45.5;
	return measurements[0] / neck_base_girth;
}
