import React from "react";
import Card from "../components/Card";
import UseFetchItems from "../components/UseFetchItems";

const Vegetables = () => {
  const { items, isLoading, error } = UseFetchItems("/vegetables.json");
  if (isLoading) return <div>Loading....</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <>
      <div className="flex justify-center">
        <h2 className="text-center font-medium text-xl max-sm:text-base max-md:text-lg mt-[1em] border-b-2 border-dark-green inline-block">
          Vegetables
        </h2>
      </div>
      <div className="grid grid-cols-5 w-[80%] m-auto gap-2">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Vegetables;
