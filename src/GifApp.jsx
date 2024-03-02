import { useState } from "react";
import { AddCategory, GifGrid} from './components';
import "bootstrap/dist/css/bootstrap.min.css";

export const GifApp =  () =>{

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory ) => {
        if(categories.includes( newCategory )) return;

        setCategories([newCategory, ...categories]);
        //setCategories( cat => ['Valorant', ...categories ]);
    }
    return (
      <>
          <h1>Gif Expert App</h1>

          {/* Input */}
          <AddCategory onNewCategory={onAddCategory} />

          {/* Listado de Gifs */}
          {categories.map((category) => (
            <GifGrid key={category} category={category} />
          ))}
          
      </>
    );
}