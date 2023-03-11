<h1 align="center"> Get Cookin </h1>
<h3 align="center"> A recipe-finding web app designed for mobile phones </h3> <br>

![login](https://user-images.githubusercontent.com/36552486/224495383-f33e9a99-f736-4de9-85b6-5392f2d551f6.gif)
![general](https://user-images.githubusercontent.com/36552486/224495370-47756241-c529-4052-a851-57248b541065.gif)

## Table of Contents

- [Introduction](#introduction)
  - [Built With](#built-with)
- [Features](#features)
  - [Recipe Search](#recipe-search)
  - [Profile Page](#profile-page)
  - [Save Recipes](#save-recipes)
  - [Authorization](#authorization)
  - [Back End](#back-end)
- [Feedback](#feedback)
- [Contributors](#contributors)
- [Build Process](#build-process)
- [Backers](#backers-)
- [Sponsors](#sponsors-)
- [Acknowledgments](#acknowledgments)


## Introduction

### Built With

## Features

Here are some of the features of Get Cookin:

### Recipe Search

### Profile Page

### Save Recipes

### Authorization

### Back End

## Feedback

We can delete this if we don't want to use it.

## Contributors

Please visit our contributors pages on GitHub:


## Build Process

- Clone or download the repo
- Install a PostgreSQL and create a database
- Navigate to the database folder in the repo and run `psql -U yourUsername -d yourDatabase -f "schema.sql"`
- Sign up for Food Database and Recipe Search APIs
- Create a .env file in the root directory of the repo and input the following:
  - `JWT_SECRET='use Node.js crypto function to generate a 64bit key'`
  - `FOOD_ID=yourFoodID`
  - `FOOD_KEY=yourFoodKey`
  - `RECIPE_ID=yourRecipeID`
  - `RECIPE_KEY=yourRecipeKey`
  - `API_URL="https://api.edamam.com/search?app_id=RECIPE_ID&app_key=
RECIPE_KEY"`
  - `AUTOCOMPLETE_API_URL='https://api.edamam.com/auto-complete?app_id=FOOD_ID&app_key=
FOOD_KEY'`
- `npm install` to install dependencies
- `npm run build` to build the front end
- `npm run serve' to start the server
- Navigate to `localhost:3000' to start the app!


## Backers

We can delete this if we don't want to use it.

## Sponsors

We can delete this if we don't want to use it.

## Acknowledgments

- Thanks to Sue Shef for her support and financial backing!
- Made with [Edamam](https://edamam.com)

