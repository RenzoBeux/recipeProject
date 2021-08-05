import React from 'react';

const Recipe = ({title, calories, image}) => {
    const titleShow = title || "title"
    const caloriesShow = calories || 0
    const imageShow = image || ""
    return(
        <div>
            <h1>{titleShow}</h1>
            <p>{caloriesShow}</p>
            <img src={imageShow} alt=""/>
           
        </div>
    );
}

export default Recipe;