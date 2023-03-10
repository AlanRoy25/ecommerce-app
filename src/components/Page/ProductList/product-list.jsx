import React from "react";
import Card from "../../card/card";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/footer";
import './product-list.scss'

const ProductList = () => {
  const data = [{
    id: 1,
    img: "https://services.ibo.com/media/v1/products/images/293cfc86-931b-4dce-b49a-b6027a2de9a4/asian-paints-apcolite-premium-4-l-black-enamel-1.jpeg?c_type=C2",
    title: "Asian paints apcolite premium Black Enamel Paint",
    isNew: false,
    MRP: 200,
    Discount: 190,
  },
  {
    id: 2,
    img: "data:image/jpeg;base64,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",
    title: "Berger Silk Breathe easy Emulsion Paint",
    isNew: false,
    MRP: 250,
    Discount: 220,

  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/71xhUI3Y5hL._SL1500_.jpg",
    title: "Tractor Asian Emulsion Paint",
    isNew: false,
    MRP: 275,
    Discount: 260,

  },
  {
    id: 4,
    img: "https://www.nerolac.com/sites/default/files/Excel-Tile-Guard.png",
    title: "Nerolac excel tile guard emulsion paint",
    isNew: false,
    MRP: 280,
    Discount: 270,

  },
  {
    id: 5,
    img: "https://www.nipponpaint.co.in/wp-content/uploads/2020/10/Fibra.png",
    title: "NIPPON PAINT ATOM FIBRA 2-IN-1",
    isNew: false,
    MRP: 250,
    Discount: 230,

  },
  {
    id: 6,
    img: "https://n2.sdlcdn.com/imgs/a/i/e/Berger-Luxol-Hi-Gloss-Enamel-SDL056185577-2-cfeda.JPG",
    title: "Berger-Luxol-Gloss Enamel Paint",
    isNew: false,
    MRP: 265,
    Discount: 250,

  },
  {
    id: 7,
    img: "https://indigopaints.com/wp-content/uploads/2019/04/exterior-emulsion-gold-series.png",
    title: "Indigo exterior gold series Emulsion Paint",
    isNew: false,
    MRP: 260,
    Discount: 255,

  },
  {
    id: 8,
    img: "https://o.remove.bg/downloads/58b9acef-e75b-4585-ae9a-26b011c4fff6/silk-glamor-soft-sheen-can-removebg-preview.png",
    title: "Berger silk-glamor-soft-sheen emulsion paint",
    isNew: false,
    MRP: 275,
    Discount: 260,

  },
  {
    id: 9,
    img: "https://paintnhardware.com/39-thickbox_default/asian-paints-pu-interior-matt-clear-1l.jpg",
    title: "asian-paints-pu-interior-matt Paint",
    isNew: false,
    MRP: 280,
    Discount: 275,

  },
  {
    id: 10,
    img: "https://5.imimg.com/data5/GB/RJ/UR/SELLER-3196560/asian-paints-pu-wood-finish-paint-500x500.jpg",
    title: "Asian Paints pu-wood-finish Paint",
    isNew: false,
    MRP: 350,
    Discount: 330,

  },
]

  return(
    <div className="product-list">
      <Navbar /> 
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      <Footer />

    </div>
  )


}

export default ProductList;