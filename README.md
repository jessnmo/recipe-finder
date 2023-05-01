# recipe-finder

This is a project built in React, mainly practising useState, useEffect, mapping and how to work with API (fetch, reading and understanding and mapping). Also this project is a good practice on Router, which helps saving time with loading. 

## Intereseting learning:
- dangerouslySetInnerHTML in React. As the summary of the recipes are written with html tags, and if we use the traditional way to render it, the text will show in html, which is not ideal for readers. 
So this function came in handy, but also a bit odd to me, as was never encountered such thing like this. 

dangeroulsySetInnerHMTL={{__html:[the stuff you want to return]}}, in my case it was <h3 dangeroulsySetInnerHMTL={{__html:recipeDetails.summary}}> </h3>

- Another interesting learning is Splide and SplideSlide package from react, making a slide has never been easier! 
