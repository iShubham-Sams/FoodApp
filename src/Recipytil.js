import React from 'react'

export default function Recipytil(recipe) {
  return (
  <>
 <div className='recipetitle'>
  <img className='recipetitle_img' src={recipe['recipe']['recipe']['image']} alt="" />
  <p className='recipetitle_name'>{recipe['recipe']['recipe']['label']}</p>
  </div>
  </>)

}
