// $('#photo').append('<img id="img1" src="./images/Photo1.JPG" />');
// $('.arrow.left').append('<img id="#arrowL" src="./arrow-left.svg" />');
// $('.arrow.right').append('<img id="#arrowR" src="./arrow-left.svg" />');

const photo       = $("#photo"),
      title       = $("#photo-title"),
      description = $("#photo-description"),

let data = {
    photo: './images/Photo1.JPG',
    title: 'Cadlao Island',
    description: 'Cadlao Island is like a mini–Tahiti miraculously relocated to the Bacuit Archipelago. In addition to being a wonderful piece of eye candy for those staying on the beach in El Nido, it’s also home to lovely Cadlao Lagoon (also known as Ubugun Cove). This lagoon offers some good snorkelling in the shallow coral gardens that lie off the beach at the head of the bay. More and more people are kayaking out here on their own from El Nido.'
  },

  photo.attr("src", data.photo);
  title.text(data.title);
  description.text(data.description);

// let currentPhoto = 0;

// photo.attr("src", data[currentPhoto].photo);
// title.text(data[currentPhoto].title);
// description.text(data[currentPhoto].description);
  

