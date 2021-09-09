var images = ["https://png.pngtree.com/element_our/20190531/ourlarge/pngtree-cartoon-mother-holding-a-child-free-illustration-image_1306649.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_CuXMC-TRnSoC2aIsU26F9x-EewCqWCEVLQ&usqp=CAU", "https://previews.123rf.com/images/yupiramos/yupiramos1712/yupiramos171207137/91230755-young-girl-kid-character-standing-cartoon-vector-illustration.jpg", "https://us.123rf.com/450wm/dualororua/dualororua1708/dualororua170800409/83943492-vector-illustration-of-little-girl-in-blue-overalls.jpg?ver=6","https://lh3.googleusercontent.com/proxy/bk5ybiDgYUB6RtCQvfXEctLSdMVhCzPumXbWo9MboS7J3_IWkT9S4C8NjNWFctZuj3dNFgiA4Uf5U1I7U4zBELO5"];
var names = ["Mom(Nidhi Tiwari)", "Dad(Mukesh Tiwari)", "Me(Rishika Tiwar)", "My Sister(Akshita Tiwari)","Grandfather(Tribuhan Nath Tiwari)"];
var i = 0;

function update(){

  var array_length = images.length - 1;
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if(i>array_length){
  i = 0;
                
  }
}