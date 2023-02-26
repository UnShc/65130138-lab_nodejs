const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
const cors = require("cors");

const fullname = "65130138 API ,Anchana Srichamnong";
//  data
const products = [
  {
    id: "1",
    name: "Apple Watch series 8",
    category: "Apple",
    price: 15000,
    cover:
      "https://www.flashfly.net/wp/wp-content/uploads/2022/05/FTX1B5hWIAA6GRr-2-800x600.jpeg",
  },
  {
    id: "2",
    name: "Iphone 14 PRO",
    category: "Apple",
    price: 35000,
    cover:
      "https://promotions.co.th/wp-content/uploads/2022/09/iphone14-pro-max.jpg",
  },
  {
    id: "3",
    name: "จอมอนิเตอร์ 27นิ้ว จอคอม 75HZ หน้าจอโค้ง จอเกมมิ่ง LED Gaming monitor จอมอนิเตอร์เกมมิ่ง VGA HDMI จอมอนิเตอ สปอตสินค้า",
    category: "LG",
    price: 5600,
    cover:
      "https://www.techmoblog.com/uploads/content_images/201610/img_1476165152_81877887513b.jpg",
  },
  {
    id: "4",
    name: "HEADSET (หูฟัง) ONIKUMA K9 - 3.5 MM (PINK)",
    category: "ONIKUMA ",
    price: 990,
    cover:
      "https://www.jib.co.th/img_master/product/original/20210803092821_41661_66_1.jpg",
  },
  {
    id: "5",
    name: "Apple iPad Gen 9 | iStudio by copperwired",
    category: "Apple",
    price: 12900,
    cover:
      "https://store.ais.co.th/media/catalog/product/i/p/ipad_10.2_inch_wi-fi_space_gray_pdp_image_position-1b__th_2.jpg",
  },
  {
    id: "6",
    name: "LEVI'S® MEN'S UTILITY BACKPACK",
    category: "LEVI'S®",
    price: 1890,
    cover:
      "https://storage.sg.content-cdn.io/cdn-cgi/image/width=1250,height=1667,quality=75,format=auto,fit=cover,g=top/in-resources/ac24b586-ca24-4d4f-96ee-f96d701a7ed8/Images/ProductImages/Source/levis-mens-utility-backpack-D72840001_01_Front.jpg",
  },
  {
    id: "7",
    name: "Fujifilm X-E4",
    category: "Fujifilm",
    price: 30990,
    cover:
      "https://www.bigcamera.co.th/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/2/0/20210705_100717_batch_X-E4_SD_Card_Web-01.jpg",
  },
];

app.use(express.json(), cors());
// app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: fullname });
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const result = products.find((product) => product.id === id);
  res.json(result);
});

app.listen(port, () => {
  console.log("Application is running on port 9000");
});
