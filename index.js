var _ = require("underscore");

/**
 * Parses the string and finds the parts of it depending how it is created
 *
 * @param {String} string
 * @returns {Object} object which contains parts href, label, header and buttonHref
 */
var getParts = function (string) {
  var str, hasHeader, parts, label, href, header;

  hasHeader = false;
  str = string.trim()
  parts = str.split("|");

  //Get image prop
  img = parts[0];
  width = parts[1];
  height = parts[2];

  return {
    img         : img,
    width       : width,
    height      : height,
  };
};

module.exports = {
  website: {
    assets: "./book",
    js: [
      "script.js"
    ],
    css: [
      "style.css"
    ]
  },
  blocks: {
    modalImg: {
      process: function(blk) {
        var buttonHTML, modalHTML, string, parts, src, label, href;

        string = blk.body;
        parts = getParts(string);

        buttonHTML = "<a href=\"" + parts.buttonHref + "\" class=\"button play\">" + "zoom in" + "</a>";
        modalHTML =  "<div class=\"modal modal_video\">"            +
        "<div class=\"modal_content\"><div class=\"modal_header\">" + "</div><ins class=\"close\"></ins>"  +
        '<img id=\"myImg\" src=\"' + parts.img + '\" alt=\"image\" width=\"' + parts.width + '\" height=\"' + parts.height + '\">' +
        "</div>" +
        "</div>";

        return "<div class=\"modal_parent\">" + buttonHTML + modalHTML + "</div>";
      }
    }
  }
};
