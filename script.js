const photo       = $("#photo"),
      title       = $("#photo-title"),
      description = $("#photo-description");

      let currentPhoto = 0;


      let imagesData = [{
        photo: './images/Photo1.JPG',
        title: 'Cadlao Island',
        description: 'Cadlao Island is like a mini–Tahiti miraculously relocated to the Bacuit Archipelago. In addition to being a wonderful piece of eye candy for those staying on the beach in El Nido, it’s also home to lovely Cadlao Lagoon. This lagoon offers good snorkelling in the shallow coral gardens that lie off the beach at the head of the bay.'
          } , {
        photo: './images/Photo2.JPG',
        title: 'Sinulog Festival',
        description: 'Sinulog Festival or Santo Nino Festival is an annual religious and cultural festival in Cebu. The festival is thought to be the first of the most well-known festivals in the Philippines. Besides the religious part of the celebration, Sinulog is also well-known for its street parties before the day of celebration and during the day of the festival.'
       } , {
        photo: './images/Photo3.JPG',
        title: 'Jeepneys',
        description: 'Jeepneys, sometimes called simply jeeps, are buses and the most popular means of public transportation ubiquitous in the Philippines. They are known for their crowded seating and kitsch decorations, which have become a wide spread symbol of Philippine culture and art.'
       } , {
        photo: './images/Photo4.JPG',
        title: 'Earthquake',
        description: 'The Philippines lies along the Pacific Ring of Fire, which causes the country to have frequent seismic and volcanic activity. Many earthquakes of smaller magnitude occur very regularly due to the meeting of major tectonic plates in the region. '
       } , {
        photo: './images/Photo5.JPG',
        title: 'Chocolate Hills',
        description: 'The Chocolate Hills are a geological formation in the Bohol province of the Philippines. There are at least 1,260 hills but there may be as many as 1,776 hills spread over an area of more than 50 square kilometres. They are covered in green grass that turns brown during the dry season, hence the name.'
       } , {
        photo: './images/Photo6.JPG',
        title: 'Family on motorcycle',
        description: 'It is not rare in the Philippines to see a whole family riding a motorbike. Here, they are taking a break between the rice fields.'
       } , {
        photo: './images/Photo7.JPG',
        title: 'Early morning sky in Padre Burgos',
        description: "Laid-back Padre Burgos (just 'Burgos' to locals) straggles for about 3km in a lazy green line along the edge of the lovely Sogod Bay. It's considered one of the premier diving spots in the Philippines for its pristine hard and soft coral reefs, deep wall, caves and current dives."
       } , {
        photo: './images/Photo8.JPG',
        title: 'Sunset in Southern Leyte',
        description: "For travellers, Southern Leyte, wrapped around the deep-water Sogod Bay, is one of the Philippines' many diving hotspots. The Cebuano-speaking Leyteños live in the south, and their Waray-speaking neighbours live in the cattle-ranching country of northern Leyte."
       } , {
        photo: './images/Photo9.JPG',
        title: 'Whale shark',
        description: 'Whale sharks are the biggest fish in the sea. A whale shark can be as long as a school bus and weigh as much as 50,000 pounds. Whale sharks are one of only three known shark species that filter feed, as baleen whales do.'
       } , {
        photo: './images/Photo10.JPG',
        title: 'Corals',
        description: 'Coral polyps are tiny, soft-bodied organisms related to sea anemones and jellyfish. At their base is a hard, protective limestone skeleton called a calicle, which forms the structure of coral reefs. Coral organisms can also live on their own.'
       } , {
        photo: './images/Photo11.JPG',
        title: 'Bacuit Archipelago',
        description: "The crystalline waters of Bacuit Bay are a fantasy-scape of jagged limestone islands, mesmerising from any vantage point, whether under the water, in the air or lying on a beach. The islands hide so many white-sand beaches, lagoons and coves, not to mention hundreds of species of fish and coral, that you’ll be overwhelmed."
       } , {
        photo: './images/Photo12.JPG',
        title: 'Cadlao Lagoon',
        description: "Cadlao Lagoon (also known as Ubugun Cove) is one of the many beautiful attractions in El Nido. Its emerald waters and towering limestone surrounding the lagoon all make for a picture-perfect destination. Little Ubugon Island is located in the middle of the lagoon."
       } , {
        photo: './images/Photo13.JPG',
        title: 'Tricycles',
        description: "Tricycles (mostly motorized tricycles), are an indigenous form of the auto rickshaw and are a common means of public or private transportation in the Philippines. These public utility vehicles are usually for-hire, like taxis. The picture of these bikes with sidecars was taken at the Puerto Princesa City Baywalk."
       }
    ]
  


//photo.attr("src", data[currentPhoto].photo);
//title.text(data[currentPhoto].title);
//description.text(data[currentPhoto].description);

let loadPhoto = (photoNumber) => {
  photo.attr('src', imagesData[photoNumber].photo);
  title.text(imagesData[photoNumber].title);
  description.text(imagesData[photoNumber].description);
  $('#TNcontainer div').remove('.highlight');
	$(`*[data-number="${photoNumber}"]`).parent().prepend(`<div class="highlight"></div>`);
}

loadPhoto(currentPhoto);


$('#arrow-right').click(() => {
  currentPhoto++;
  if(currentPhoto === imagesData.length){
    currentPhoto = 0;
    loadPhoto(currentPhoto);
  } else {
    loadPhoto(currentPhoto);
  }
});

$('#arrow-left').click(() => {
  currentPhoto--;
  if(currentPhoto === -1){
    currentPhoto = imagesData.length-1;
    loadPhoto(currentPhoto);
  } else {
    loadPhoto(currentPhoto);
  }
});

let i = 0;
imagesData.forEach((data) => {
	$('#TNcontainer').append(`<div style="position: relative"><div class="hidden-title">${data.title}</div><img src="${data.photo}" class="thumbnail" data-number="${i}"></img></div>`);
	i++;
});

 
$('.thumbnail').click((event) => {
  currentPhoto = $(event.target).attr('data-number');
	loadPhoto(currentPhoto);
});

$('.thumbnail').hover((event) => {
	$(event.target).parent().children('.hidden-title').css('visibility', 'unset');
}, (event) => {
	$(event.target).parent().children('.hidden-title').css('visibility', 'hidden');
});
  
