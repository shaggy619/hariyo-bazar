import React from "react";
import Card from "../components/Card";
import UseFetchItems from "../components/UseFetchItems";

const Dairy = () => {
  const { items, isLoading, error } = UseFetchItems("/dairy.json");
  if (isLoading) return <div>Loading....</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <>
      <div className="w-[80%] m-auto">
        <h2 className=" text-medium-green font-medium border-l-[1rem] border-medium-green inline-block px-2 py-1 my-8 text-xl rounded">
          Dairy Products
        </h2>
      </div>
      <div className="grid grid-cols-5 w-[80%] m-auto gap-2 max-md:grid-cols-3 max-sm:grid-cols-2 max-lg:grid-cols-4">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Dairy;
