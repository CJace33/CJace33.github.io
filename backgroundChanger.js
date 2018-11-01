const backgroundsString = "Images/Backgrounds/";
var realCurrent = 0;
var backgrounds = [
	"Aquarius.jpg", 
	"Aries.jpg",
	"Cancer.jpg",
	"Capricorn.jpg",
	"Gemini.jpg",
	"Leo.jpg",
	"Libra.jpg",
	"Pisces.jpg",
	"Sagittarius.jpg",
	"Scorpio.jpg",
	"Taurus.jpg",
	"Virgo.jpg"
];

function backgroundLoader()
{
	for(var i = 0; i < backgrounds.length; i++)
	{
		var imageObject = new Image();
		imageObject.src = backgroundsString + backgrounds[i];
		console.log(imageObject.src);
	}
}




function backgroundFinder()
{
	//Names of all background files
	
	
	realCurrent++;
	if(realCurrent >= backgrounds.length)
	{
		realCurrent = 0;
	}
	document.body.style.backgroundImage = "url('" + backgroundsString + backgrounds[realCurrent] + "')";
	console.log(backgroundsString + backgrounds[realCurrent]);
}