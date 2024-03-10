// import "./style.css";
// create server
const express = require("express");
const formidable = require("formidable");
var fs = require("fs");
const app = express();
const port = 3000;
app.use(
  express.urlencoded({
    extended: true
  })
);
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
let listProduct = [
  {
    id: "0101",
    title: "Apple Book",
    price: 3000,
    description:
      "A very interesting book about so many even more interesting things!",
    imageURL: "book.jpeg"
  },
  {
    id: "0102",
    title: "Microsoft Book",
    price: 2000,
    description:
      "A very interesting book about so many even more interesting things!",
    imageURL: "book.jpeg"
  },
  {
    id: "0103",
    title: "VFast Book",
    price: 2000,
    description:
      "A very interesting book about so many even more interesting things!",
    imageURL: "book.jpeg"
  }
];
// function
// router
app.get("/home", (req, res) => {
  var today = new Date();
  currentDay = today.getDay();
  var day = "";
  switch (currentDay) {
    case 0:
      day = "Chủ nhật";
      break;
    case 1:
      day = "Thứ hai";
      break;
    case 2:
      day = "Thứ ba";
      break;
    case 3:
      day = "Thứ tư";
      break;
    case 4:
      day = "Thứ năm";
      break;
    case 5:
      day = "Thứ sáu";
      break;
    case 6:
      day = "Thứ bảy";
      break;
    default:
      console.log(`Error: ${currentDay}`);
  }
  res.render("home", { kindOfDay: day });
});
app.get("/shop", (req, res) => {
  res.render("shop", { products: listProduct });
});
app.get("/addnew", (req, res) => {
  res.render("addnew");
});
app.post("/addnew", (req, res) => {
  let form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    if (err) {
      // Xử lý lỗi
      console.error(err);
      return res.status(500).send("Lỗi khi xử lý form");
    }

    // Đảm bảo file đã được tải lên
    if (!files.hinhsp) {
      return res.status(400).send("Không tìm thấy file hình ảnh");
    }
    let pathFile = files.hinhsp.filepath;
    console.log(pathFile);
    let tenFile = files.hinhsp.originalFilename;
    console.log(tenFile);
    let tensp = fields.tensp;
    let giasp = fields.giasp;
    let motasp = fields.motasp;
    let destPath = __dirname + "\\public\\images\\" + tenFile;
    console.log(destPath);
    fs.copyFile(pathFile, destPath, (err) => {
      if (err) {
        console.error("Lỗi khi sao chép file:", err);
        return res.status(500).send("Lỗi khi sao chép file");
      }
      // if (err) throw err;
      fs.unlink(pathFile, () => {
        console.log("Đã xóa fie tạm");
      });
      console.log("Đã update xong file " + tenFile);
    });
    listProduct.push({
      id: "0110",
      title: tensp,
      price: giasp,
      description: motasp,
      imageURL: tenFile
    });
    res.redirect("/shop");
  });
});
app.listen(port, () => {
  console.log(`server running in post: ${port}`);
});
