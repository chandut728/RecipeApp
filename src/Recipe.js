import React from 'react';
import './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe">

      <h1 className="title">{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p><b>calories:</b>{calories}</p>
      <img className="image" src={image} alt="" />

    </div>
  );
};

export default Recipe;