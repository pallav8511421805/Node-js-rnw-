
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + '/../public/uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      const orgname = file.originalname;
      cb(null, file.fieldname + '-' + uniqueSuffix + orgname.substring(orgname.lastIndexOf("."),orgname.length))
    }
  })
  
  const upload = multer({ storage: storage })

  module.exports = upload;