const {
    model,
    Schema,
    Schema: {
      Types: { ObjectId },
    },
  } = require("mongoose");
  
  const schema = new Schema({
    length: {
      type: Number,
      default: "",
    },
    chunkSize: {
      type: Number,
      default: "",
    },
    filename: {
      type: String,
      default:""
    }
  });
  
  module.exports = model("Image", schema);
  


//   { 
//     
//     "length" : NumberInt(744595), 
//     "chunkSize" : NumberInt(261120), 
//     "uploadDate" : ISODate("2022-06-22T13:29:39.803+0000"), 
//     "filename" : "1655904579752-bezkoder-1.1.jpg", 
//     "contentType" : "image/jpeg"
// }