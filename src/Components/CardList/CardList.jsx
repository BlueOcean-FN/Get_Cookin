import React, { useState } from 'react';

import './CardList.css';
import Card from '../Card/Card.jsx';

const CardList = (props) => {

  const [cards, setCards] = useState([
    { //must parse into this shape!!!
      label: "Chicken Vesuvio",
      image: "https://edamam-product-images.s3.amazonaws.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLWVhc3QtMSJHMEUCIDlQsBj9S63SI5%2FR4YF%2F09zclc%2BwtNpnRzWE%2FDPDRA2WAiEA%2FovvTvzOK%2Bm524JKtcw8X%2F0Oahez9PSoO39QwTXANqcqwQUI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDFDc1UAg6LioYek7DiqVBVyd0xMDgOFt4iCvBrhQQIH0PPbU2%2B2rsaBeKaDEfSmC1sYgw%2FlXPAvIGt%2FBf9yw9z1vez0PTaVDStTzkei%2FcVyQWxuWMhCN9QQd3MfNEWwy%2BRfMTui%2FPtHQV22MWcNzyw%2FbHmrkAPV0yNppFwe0d8tWnieFQx55FwdzJ4IEqWAbbaWCQKRD0KYhujRjuisNZWXYeU7TaoRom%2BgaOSOsMCMUw6%2BTsVpMjUk0Npo%2BWLN%2FeAiyJQhOSPMvOUPN0jBl2gcZJwJiopoDPR8guDyp%2Fiwe4IE6V7GC6ZxzmAMVjHsZndfwRZW6T2LiAbLRWyN6WaHBoJkNyf2i%2BwuV3B4pIeAJKRLLJHJuiH86166U1fJJap1lS6KQY27xE7MBAk3ixc9CqB5e%2FqMrGm1tRYs77cWWPtVwyq%2B4EJuczjZdTH8MoTfL%2FtbkfRMjzogl9QQrwzjJjoSWhzmbNzuOe2DdxK2LqeNAT%2FO6PQWcOxizwAK31%2Fk8QHDRN55U2RCUm3YgjbrDS7nl2X3eDYTi9yMhPwiHUkDu49HE2B1kiwAx5br%2BIWyHsvJDmUaQhBZPb80QexZUBzABJCBOdsI3rzegAM73Q3Ew1MRCQP%2Bsfk9v0RgkT2tyr1Xhm2ZnUVA3QRkp7yHAzylwZALqIaWkiLGj%2BsHG4n7V8MSyS9HQvc%2B%2Ba5O8STzjCIUxSuKZ0fxK10bmj1R3n6RT9BDwcHZChx%2Fe4tdlFH6nktmWDq6FAikpuojqJ7s8SDPX5XwrbugCMERfxWBC%2BoTJGBx9Di%2BHB95T27eEhSML8DoMDn6Q8sm7P2pepgn1LPpOcJLCgyv5v843%2BoFZw%2FO5OHze01%2FFht2FlT6YJX4YyaZ4Q32Vu%2BIOhatzvwsZ%2Bogw66WOoAY6sQGkrzQcEm2Wyl30N23yNTE3gGfUVtjLITrVFHl9UbYRiA8D%2BT4OvUD%2BKWFSmCOdA4zcjAMOxBzI7x%2BDQqjaF9sYT950Zel51iUoN4BiT2R%2BHvoXLhZ2%2FASXSG76GEsTcfKUsbIgJMeMCEkeePYrha%2FfmDUCKgUbAPBU9wdk7%2BKpDoxb58JSvBIFIXKAb7avTEuXPQq1BEjm6ihKLIuSeFoutqqNYQPuVAr%2FXIIIwJhbSXU%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230304T202158Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK4WJTLRX%2F20230304%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=348e424e2898ad47bdddd3084f8e39b0b6342aa2024a81e6d4b90e64ad46a860",
      url: "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html",
      serveSize: 4.0,
      dietLabels: [
        "Low-Carb",
        "Low-Carb",
        "Low-Carb",
        "Low-Carb",
        "Low-Carb"
      ],
      healthLabels: [
        "Mediterranean",
        "Dairy-Free",
        "Gluten-Free",
        "Wheat-Free",
        "Egg-Free",
        "Peanut-Free",
        "Tree-Nut-Free",
        "Soy-Free",
        "Fish-Free",
        "Shellfish-Free",
        "Pork-Free",
        "Red-Meat-Free",
        "Crustacean-Free",
        "Celery-Free",
        "Mustard-Free",
        "Sesame-Free",
        "Lupine-Free",
        "Mollusk-Free",
        "Kosher"
      ],
      cautions: [
        "Sulfites",
        "fake caution",
        "fake caution",
        "fake caution",
        "fake caution"
      ],
      ingredients: [ //must be parsed by server!!!!!!!!!!!!
        '3.5 pounds chicken',
        '2 russet potatoes',
        '.75 cups white wine',
        '1 cups frozen peas',
        '1 cups frozen peas',
        '1 cups frozen peas',
        '1 cups frozen peas',
        '1 cups frozen peas',
        '1 cups frozen peas',
        '1 cups frozen peas'
      ],
      calories: 4228.043058200812,
      totalTime: 60.0,
    },
    { //must parse into this shape!!!
      label: "Baked Chicken",
      image: "https://edamam-product-images.s3.amazonaws.com/web-img/01c/01cacb70890274fb7b7cebb975a93231.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLWVhc3QtMSJHMEUCIDlQsBj9S63SI5%2FR4YF%2F09zclc%2BwtNpnRzWE%2FDPDRA2WAiEA%2FovvTvzOK%2Bm524JKtcw8X%2F0Oahez9PSoO39QwTXANqcqwQUI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDFDc1UAg6LioYek7DiqVBVyd0xMDgOFt4iCvBrhQQIH0PPbU2%2B2rsaBeKaDEfSmC1sYgw%2FlXPAvIGt%2FBf9yw9z1vez0PTaVDStTzkei%2FcVyQWxuWMhCN9QQd3MfNEWwy%2BRfMTui%2FPtHQV22MWcNzyw%2FbHmrkAPV0yNppFwe0d8tWnieFQx55FwdzJ4IEqWAbbaWCQKRD0KYhujRjuisNZWXYeU7TaoRom%2BgaOSOsMCMUw6%2BTsVpMjUk0Npo%2BWLN%2FeAiyJQhOSPMvOUPN0jBl2gcZJwJiopoDPR8guDyp%2Fiwe4IE6V7GC6ZxzmAMVjHsZndfwRZW6T2LiAbLRWyN6WaHBoJkNyf2i%2BwuV3B4pIeAJKRLLJHJuiH86166U1fJJap1lS6KQY27xE7MBAk3ixc9CqB5e%2FqMrGm1tRYs77cWWPtVwyq%2B4EJuczjZdTH8MoTfL%2FtbkfRMjzogl9QQrwzjJjoSWhzmbNzuOe2DdxK2LqeNAT%2FO6PQWcOxizwAK31%2Fk8QHDRN55U2RCUm3YgjbrDS7nl2X3eDYTi9yMhPwiHUkDu49HE2B1kiwAx5br%2BIWyHsvJDmUaQhBZPb80QexZUBzABJCBOdsI3rzegAM73Q3Ew1MRCQP%2Bsfk9v0RgkT2tyr1Xhm2ZnUVA3QRkp7yHAzylwZALqIaWkiLGj%2BsHG4n7V8MSyS9HQvc%2B%2Ba5O8STzjCIUxSuKZ0fxK10bmj1R3n6RT9BDwcHZChx%2Fe4tdlFH6nktmWDq6FAikpuojqJ7s8SDPX5XwrbugCMERfxWBC%2BoTJGBx9Di%2BHB95T27eEhSML8DoMDn6Q8sm7P2pepgn1LPpOcJLCgyv5v843%2BoFZw%2FO5OHze01%2FFht2FlT6YJX4YyaZ4Q32Vu%2BIOhatzvwsZ%2Bogw66WOoAY6sQGkrzQcEm2Wyl30N23yNTE3gGfUVtjLITrVFHl9UbYRiA8D%2BT4OvUD%2BKWFSmCOdA4zcjAMOxBzI7x%2BDQqjaF9sYT950Zel51iUoN4BiT2R%2BHvoXLhZ2%2FASXSG76GEsTcfKUsbIgJMeMCEkeePYrha%2FfmDUCKgUbAPBU9wdk7%2BKpDoxb58JSvBIFIXKAb7avTEuXPQq1BEjm6ihKLIuSeFoutqqNYQPuVAr%2FXIIIwJhbSXU%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230304T202158Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK4WJTLRX%2F20230304%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4eba27613fef250a0403fddb8cf0fcd636c4a729d442fe597163b0b71bf453d2",
      url: "http://www.marthastewart.com/318981/baked-chicken",
      serveSize: 4.0,
      dietLabels: [ //testing if not given much info
        "Low-Carb"
      ],
      healthLabels: [ //testing if not given much info
        "Mediterranean"
      ],
      cautions: [ //testing if not given much info
        "Sulfites"
      ],
      ingredients: [ //testing if not given much info
        '3.5 pounds chicken'
      ],
      calories: 4228.043058200812,
      totalTime: 60.0,
    }
  ])

    return (
        <div className="CardList">
          I'm the card list
          {cards.map((data) => <Card data={data} key={data.url}/>)}
        </div>
    )
}

export default CardList;