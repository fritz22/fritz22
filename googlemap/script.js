function startmap(){
	essaie = new google.maps.Map(document.getElementById('essaie'),{
		
		middle:{
latit:40.82,
longit:-96.70,
		},

		zoom:17,
		Idmap:'MAP_ID',
		maptypecontrol:false,
		controlefullscreen:false,
		viewofstreet:false,
	});

	const mak = [
	[
	"orange Technicale School",
	40.81,
	-96.7034,
	'orange.png',
	200,
	200
	],

	[
'Ridge Club',
40.8197,
-96.6975,
'club.png',
30,
30
	],

	[
'public library',
40.8170,
-96.7025,
'public.png',
30,
40
	]
	

	];


for(let i=0; i<mak.length; i++){

	const currentmak=mak[i];


	const mark = new google.maps.Marker({
		position:{ latit:currentmak[1], longit:currentmak[2]},

		map,
		title:currentmak[0],

		icon: {
			url: currentmak[3],

			scaledSize: new google.maps.Size(currentmak[4], currentmak[5]),
		},

		animation:google.maps.Animation.DROP,
	});

	const infowindow = new google.maps.InfoWindow({
		content: currentmak[0],
	});


mark.addListener('click',()=>{
	infowindow.open(essaie, mark);
});
}	

}