import React, { useState, useEffect } from 'react';

import './CardList.css';
import Card from '../Card/Card.jsx';

const CardList = (props) => {

  const [cards, setCards] = useState([
    { //must parse into this shape!!!
      label: "Chicken Vesuvio",
      image: "https://edamam-product-images.s3.amazonaws.com/web-img/01c/01cacb70890274fb7b7cebb975a93231.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLWVhc3QtMSJIMEYCIQDZrhyWCsA3C1P1Sjgv0QxSfw3TXSr9l7NUAe7e4nwjDAIhAPUQB7G9JlSByu8q4G%2BIW9QFnoSb1K77iuRHOhV6t1f3KrgFCB8QABoMMTg3MDE3MTUwOTg2IgwahL3YPsMkOKkexGoqlQV3cWl2CKCEghiQ2oX5kFWcRHfe0GyX5HLKHyFmIt%2Bp%2FIaCVb1bPT6vb2U%2Fme93CgLX59IOe3RkMd2JregR8Xy3s3CO8BbI%2BsBKg4mo%2FZ2Triz1X44A1gqagVItJ6PoEHlXFyaWAf9c1EUqoUXkeNCuiUsjU4afXXSzJT9LCuwMVJeRcEKQMdVOoyLyG2ZnFwpUk2qnFZWZwsan3j8FMe1UKQ4C7saXslqMKbJhKRPxegP%2BNC8%2Fev44uPFnvVemp%2Bpa79GdMbYyOq3eANWcbzWw9axVvBAdJ8KdU9THEc2glSZeAI83f5P0kGhiz%2FUr%2FpJPzDDnIypQvNYkqXkh62sPdIvrZqW0QQe9AYSX%2FlVWx0lZ%2BpgQaiLRmDfYGEAr%2BrqRq3nCph76CD%2BdFNk%2BUSTFthlI5DiKkGhY2k%2Bghvyy7l9yTAbgMJy6kzwyMt9TyTbb%2BnV3vwfPbXW4VOw%2FQqx27ShbLcRgLidBXWCFbbyNLZUAY7baX7Xhkw%2FkeKCX78YWj7e2zBrMW2btKBSLKf%2B0oDMFq9YrBcewchuHnE5uKIZlB1Ni5UjswvuVoWAO8JwVRcugyXFw5MtTvJCsgKhIvVA0zDHJk8654Iq4Yo6243U%2BXdkPdSAjg4RJgNiZndTEW95rQlA9kjWWMMNRJBpPb%2Fcft%2BSNrHqDFCAibIAT5MKSTAIHoW5rL45PpVX18DBllsolSRfpk%2FumZGMl8aNWcfKaetNaSe44SLrbQiHm0VWQMf5w42RJNyU7t0PUqBsdvldeD1oIeS2%2F4xM%2FEAxBz4PMFAfgBUJbLsfyGdU%2FUYzLzHoDyzK%2FlYEE%2FRQjK4o9lVCBUXJxD6OmV9WAAbOIo1XovLZbozR%2BRl8WudSzMLnTvkSPML21maAGOrAB9CHusJbjmG%2FX1%2Ffi%2BD1IAM41LOKtaLJ%2FCh43NvtFX4cKkKjv33lT%2FtPTgvY0oHi7JYkrpg7GXwlL81Brb4%2B9GsYmZkqceNfWkxGU07OcFtXvRHHPxiERS26kOLGbW4fuJ1incwV9LcmBG6vKD6Gd1%2FxACARtIz5GkPQddEflByqUuSYMvO31wO42AfBossqVGk4i2HXq6QmjpdAniOxBJMGCKlNt%2FIKIPl1ySg2vNTw%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230306T215006Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIROR7V7D%2F20230306%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f2ef9ab6f8dc7d56ecbe817b44af9b62343a079d0bbe18b8fd26967b323638cf",
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
      image: "https://edamam-product-images.s3.amazonaws.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLWVhc3QtMSJIMEYCIQDZrhyWCsA3C1P1Sjgv0QxSfw3TXSr9l7NUAe7e4nwjDAIhAPUQB7G9JlSByu8q4G%2BIW9QFnoSb1K77iuRHOhV6t1f3KrgFCB8QABoMMTg3MDE3MTUwOTg2IgwahL3YPsMkOKkexGoqlQV3cWl2CKCEghiQ2oX5kFWcRHfe0GyX5HLKHyFmIt%2Bp%2FIaCVb1bPT6vb2U%2Fme93CgLX59IOe3RkMd2JregR8Xy3s3CO8BbI%2BsBKg4mo%2FZ2Triz1X44A1gqagVItJ6PoEHlXFyaWAf9c1EUqoUXkeNCuiUsjU4afXXSzJT9LCuwMVJeRcEKQMdVOoyLyG2ZnFwpUk2qnFZWZwsan3j8FMe1UKQ4C7saXslqMKbJhKRPxegP%2BNC8%2Fev44uPFnvVemp%2Bpa79GdMbYyOq3eANWcbzWw9axVvBAdJ8KdU9THEc2glSZeAI83f5P0kGhiz%2FUr%2FpJPzDDnIypQvNYkqXkh62sPdIvrZqW0QQe9AYSX%2FlVWx0lZ%2BpgQaiLRmDfYGEAr%2BrqRq3nCph76CD%2BdFNk%2BUSTFthlI5DiKkGhY2k%2Bghvyy7l9yTAbgMJy6kzwyMt9TyTbb%2BnV3vwfPbXW4VOw%2FQqx27ShbLcRgLidBXWCFbbyNLZUAY7baX7Xhkw%2FkeKCX78YWj7e2zBrMW2btKBSLKf%2B0oDMFq9YrBcewchuHnE5uKIZlB1Ni5UjswvuVoWAO8JwVRcugyXFw5MtTvJCsgKhIvVA0zDHJk8654Iq4Yo6243U%2BXdkPdSAjg4RJgNiZndTEW95rQlA9kjWWMMNRJBpPb%2Fcft%2BSNrHqDFCAibIAT5MKSTAIHoW5rL45PpVX18DBllsolSRfpk%2FumZGMl8aNWcfKaetNaSe44SLrbQiHm0VWQMf5w42RJNyU7t0PUqBsdvldeD1oIeS2%2F4xM%2FEAxBz4PMFAfgBUJbLsfyGdU%2FUYzLzHoDyzK%2FlYEE%2FRQjK4o9lVCBUXJxD6OmV9WAAbOIo1XovLZbozR%2BRl8WudSzMLnTvkSPML21maAGOrAB9CHusJbjmG%2FX1%2Ffi%2BD1IAM41LOKtaLJ%2FCh43NvtFX4cKkKjv33lT%2FtPTgvY0oHi7JYkrpg7GXwlL81Brb4%2B9GsYmZkqceNfWkxGU07OcFtXvRHHPxiERS26kOLGbW4fuJ1incwV9LcmBG6vKD6Gd1%2FxACARtIz5GkPQddEflByqUuSYMvO31wO42AfBossqVGk4i2HXq6QmjpdAniOxBJMGCKlNt%2FIKIPl1ySg2vNTw%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230306T215006Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIROR7V7D%2F20230306%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0799cdbe63420d02c3a73dc535b78a3eff526c69bc0072cf49c6a02a25047996",
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

  /* === NOTES FOR PAUL === (and others)
  useEffect(() => {
    // RATHER THAN immediately setting state (as I am currently, for the sake of having data to work with),
    // we will wait for cardsData to be passed from the parent component, SearchPage.
    // At that point, we will setCards(props.cardsData)

    // props.cardsData should be shaped as follows:::
      // (parsing into this shape should be done server-side)

    [
      {
        label: STRING,
        image: URL_STRING,
        url: URL_STRING,
        serveSize: 4.0, // From "yield" Prop of call to API
        dietLabels: ARRAY["STRING"],
        healthLabels: ARRAY["STRING"],
        cautions: ARRAY["STRING"],
        ingredients: ARRAY["STRING"], //must be parsed from "ingredients" Prop
        calories: NUM,
        totalTime: NUM
      },
      {...},
      {...},
      ...
    ]

  }, [props.cardsData])
  */


    return (
        <div className="CardList">
          I'm the card list
          {cards.map((data) => <Card data={data} key={data.url}/>)}
        </div>
    )
}

export default CardList;