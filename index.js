var _ = require("underscore");
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var mImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function(){
     modal.style.display = "block";
     mImg.src = this.src;
     captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
     modal.style.display = "none";
}

// analyze the input
var getParts = function (string) {
  var hasHeader, parts, label, href, header;

  hasHeader = false;
  parts = string.split("|");

  //Get video href
  imgName = parts[0];

  width = parts[1];
  height = parts[2];

  return {
    imgName     : imgName,
    width       : width,
    height      : height,
  };

};


module.exports = {
  website: {
    assets: "./book",
    css: [
      "style.css"
    ]
  },
  blocks: {
    modalImg: {
      process: function(blk) {
        var buttonHTML, modalHTML, string, parts, src, label, href;

        parts = getParts(blk.body);


         modalHTML =  "<img id=\"myImg\" src=\"" + parts.imgName + "\" alt=\"image\" width=\"" + parts.width + "\" height=\"" + parts.height + "\">" +

          "<div id=\"myModal\" class=\"modal\">" +

            "<span class=\"close\">&times;</span>" +

            "<img class=\"modal-content\" id=\"img01\">" +

            "<div id=\"caption\"></div>"
          "</div>"


        return modalHTML
      }
    }
  }
};
