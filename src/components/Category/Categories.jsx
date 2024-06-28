import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryLoader } from "../../state/reducers/categoryReducer";
function Categories() {
  const categories = useSelector((state) => state.category.categories);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoryLoader());
    console.log("Categories Loaded");
    console.log(categories);
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      {categories.map((category) => (
        <div key={category.id}>
          <h3>{category.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Categories;
