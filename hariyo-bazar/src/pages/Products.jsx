import React from "react";
import Card from "../components/Card";
import UseFetchItems from "../components/UseFetchItems";

const Products = () => {
  const { items, isLoading, error } = UseFetchItems("Data/products.json");
  if (isLoading) return <div>Loading....</div>;
  if (error) return <div>Error: {error.message}</div>;

  const vegetables = items.filter((item) => item.categories === "Vegetables");
  const fruits = items.filter((item) => item.categories === "Fruits");
  const dairy = items.filter((item) => item.categories === "Dairy Products");
  const plants = items.filter((item) => item.categories === "Plants");

  return (
    <>
      <div>
        <h2 className=" text-medium-green font-medium border-l-[1rem] border-medium-green inline-block px-2 py-1 my-8 text-xl rounded">
          Vegetables
        </h2>
      </div>
      <div className="grid grid-cols-5 gap-2 max-md:grid-cols-3 max-sm:grid-cols-2 max-lg:grid-cols-4">
        {vegetables.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <div>
        <h2 className=" text-medium-green font-medium border-l-[1rem] border-medium-green inline-block px-2 py-1 my-8 text-xl rounded">
          Fruits
        </h2>
      </div>
      <div className="grid grid-cols-5 gap-2 max-md:grid-cols-3 max-sm:grid-cols-2 max-lg:grid-cols-4">
        {fruits.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <div>
        <h2 className=" text-medium-green font-medium border-l-[1rem] border-medium-green inline-block px-2 py-1 my-8 text-xl rounded">
          Dairy Products
        </h2>
      </div>
      <div className="grid grid-cols-5 gap-2 max-md:grid-cols-3 max-sm:grid-cols-2 max-lg:grid-cols-4">
        {dairy.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <div>
        <h2 className=" text-medium-green font-medium border-l-[1rem] border-medium-green inline-block px-2 py-1 my-8 text-xl rounded">
          Plants
        </h2>
      </div>
      <div className="grid grid-cols-5 gap-2 max-md:grid-cols-3 max-sm:grid-cols-2 max-lg:grid-cols-4">
        {plants.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Products;
