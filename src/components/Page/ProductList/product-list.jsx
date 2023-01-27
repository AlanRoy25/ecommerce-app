import React from "react";
import Card from "../../card/card";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/footer";
import './product-list.scss'

const ProductList = () => {
  const data = [{
    id: 1,
    img: "https://n2.sdlcdn.com/imgs/a/i/e/Berger-Luxol-Hi-Gloss-Enamel-SDL056185577-2-cfeda.JPG",
    title: "Enamel Paints",
    isNew: false,
    MRP: 250,
    Discount: 220,
  },
  {
    id: 2,
    img: "https://n2.sdlcdn.com/imgs/a/i/e/Berger-Luxol-Hi-Gloss-Enamel-SDL056185577-2-cfeda.JPG",
    title: "Enamel Paints",
    isNew: false,
    MRP: 250,
    Discount: 220,

  },
  {
    id: 3,
    img: "https://n2.sdlcdn.com/imgs/a/i/e/Berger-Luxol-Hi-Gloss-Enamel-SDL056185577-2-cfeda.JPG",
    title: "Enamel Paints",
    isNew: false,
    MRP: 250,
    Discount: 220,

  },
  {
    id: 4,
    img: "https://n2.sdlcdn.com/imgs/a/i/e/Berger-Luxol-Hi-Gloss-Enamel-SDL056185577-2-cfeda.JPG",
    title: "Enamel Paints",
    isNew: false,
    MRP: 250,
    Discount: 220,

  },
  {
    id: 5,
    img: "https://n2.sdlcdn.com/imgs/a/i/e/Berger-Luxol-Hi-Gloss-Enamel-SDL056185577-2-cfeda.JPG",
    title: "Enamel Paints",
    isNew: false,
    MRP: 250,
    Discount: 220,

  },
  {
    id: 6,
    img: "https://n2.sdlcdn.com/imgs/a/i/e/Berger-Luxol-Hi-Gloss-Enamel-SDL056185577-2-cfeda.JPG",
    title: "Enamel Paints",
    isNew: false,
    MRP: 250,
    Discount: 220,

  },
  {
    id: 7,
    img: "https://n2.sdlcdn.com/imgs/a/i/e/Berger-Luxol-Hi-Gloss-Enamel-SDL056185577-2-cfeda.JPG",
    title: "Enamel Paints",
    isNew: false,
    MRP: 250,
    Discount: 220,

  },
  {
    id: 8,
    img: "https://n2.sdlcdn.com/imgs/a/i/e/Berger-Luxol-Hi-Gloss-Enamel-SDL056185577-2-cfeda.JPG",
    title: "Enamel Paints",
    isNew: false,
    MRP: 250,
    Discount: 220,

  },
  {
    id: 9,
    img: "https://n2.sdlcdn.com/imgs/a/i/e/Berger-Luxol-Hi-Gloss-Enamel-SDL056185577-2-cfeda.JPG",
    title: "Enamel Paints",
    isNew: false,
    MRP: 250,
    Discount: 220,

  },
  {
    id: 10,
    img: "https://n2.sdlcdn.com/imgs/a/i/e/Berger-Luxol-Hi-Gloss-Enamel-SDL056185577-2-cfeda.JPG",
    title: "Enamel Paints",
    isNew: false,
    MRP: 250,
    Discount: 220,

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