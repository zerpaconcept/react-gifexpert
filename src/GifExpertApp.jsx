import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Rock']);



  const onAddCategory = (newCategory) => {
    console.log(newCategory);
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  }

  console.log(categories);
  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory

        onNewCategory={(event) => onAddCategory(event)}
      />

      {/* Listado de Gif */}

      {
        categories.map(category => <GifGrid
          key={category}
          category={category} />
        )
      }

      {/* Gif Item */}

    </>
  )
}
