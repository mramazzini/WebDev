"use client";
import { useState } from "react";
import Row from "./PricingTable/Row";
import Table from "./PricingTable/Table";
import featuresList from "./PricingTable/FeaturesList";
import pricetable from "./PricingTable/PriceTable";

// create type for texts

type Category =
  | "Startups"
  | "Ecommerce"
  | "Restaurants"
  | "Small Businesses"
  | "Musician"
  | "Artists"
  | "Nonprofits"
  | "Custom";

const texts: Array<Category> = [
  "Startups",
  "Ecommerce",
  "Restaurants",
  "Small Businesses",
  "Musician",
  "Artists",
  "Nonprofits",
  "Custom",
];

const Pricing = () => {
  const [selection, setSelection] = useState<Category | null>(null);

  return (
    <div
      id="pricing"
      className=" w-full flex-col flex justify-start items-center min-h-screen p-4"
    >
      {/* <h2 className="text-5xl font-bold text-primary trailing-sm m-4 text-center">
        Choose a plan that works for you
      </h2>
      <h3 className="text-2xl font-bold text-neutral-content mb-4">
        All plans include a 14-day free hosting trial.
      </h3> */}

      <div className="flex flex-col w-full ">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-5xl font-extrabold text-white">
            Choose a plan that <span className="text-primary">works</span> for
            you
          </h3>
          <div
            role="tablist"
            className="my-5 flex flex-row items-center justify-center tabs tabs-bordered tabs-lg"
          >
            {texts.map((text, index) => (
              <button
                key={index}
                onClick={() => setSelection(text)}
                className={`tab 
                [--tab-border-color:blue]
                
                ${
                  selection === text ? "tab-active" : ""
                } transition-all duration-100 ease-in-out`}
              >
                {text}
              </button>
            ))}
          </div>
        </div>
        {selection && (
          <Table
            tableName={selection}
            rows={featuresList[selection]}
            pricing={pricetable[selection]}
          />
        )}
      </div>
      <p className="text-white text-center text-lg mt-10">
        All plans include a 14-day free hosting trial.
      </p>
    </div>
  );
};

export default Pricing;
