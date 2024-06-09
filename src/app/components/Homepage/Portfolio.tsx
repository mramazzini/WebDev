"use client";
import { useEffect, useState } from "react";
import { getWebsiteImages } from "@/lib/actions/images.actions";
import DisplayImage from "./DisplayImage";

const dummyImages = [
  {
    id: 1,
    name: "Roma-Pizza",
    url: "https://restaurant-template-rosy.vercel.app/",
    theme: "Fun Restaurant",
    imagePath: "/website-screenshots/Roma-Pizza.png",
    description: "A fun pizza restaurant website template",
  },
  {
    id: 2,
    name: "tailwindcss",
    url: "https://tailwindcss.com/",
    theme: "CSS Framework",
    imagePath: "/website-screenshots/tailwindcss.png",
    description: "A utility-first CSS framework for rapid UI development",
  },
  {
    id: 3,
    name: "codepen",
    url: "https://codepen.io/",
    theme: "Code Playground",
    imagePath: "/website-screenshots/codepen.png",
    description:
      "An online community for testing and showcasing user-created HTML, CSS, and JavaScript code snippets",
  },
  {
    id: 4,
    name: "css-tricks",
    url: "https://css-tricks.com/",
    theme: "CSS Tricks",
    imagePath: "/website-screenshots/css-tricks.png",
    description: "A web design community curated by Chris Coyier",
  },
  {
    id: 5,
    name: "w3schools",
    url: "https://www.w3schools.com/",
    theme: "Web Development",
    imagePath: "/website-screenshots/w3schools.png",
    description: "The world's largest web development site",
  },
  {
    id: 6,
    name: "freecodecamp",
    url: "https://www.freecodecamp.org/",
    theme: "Learn to Code",
    imagePath: "/website-screenshots/freecodecamp.png",
    description: "Learn to code for free",
  },
];

export const Portfolio = () => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<string[]>([]);
  useEffect(() => {
    getWebsiteImages().then((images) => {
      setImages(images);
      setLoading(false);
    });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center mx-4 md:mx-24  rounded-xl text-white mb-24 animate-fadeInDelay bg-base-200 overflow-hidden">
      {loading ? (
        <div className="md:grid gap-[8px] grid-cols-2 md:grid-cols-3 hidden">
          <div className="skeleton h-64 w-96  flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
          <div className="skeleton h-64 w-96 flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
          <div className="skeleton h-64 w-96 flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
          <div className="skeleton h-64 w-96 flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
          <div className="skeleton h-64 w-96 flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
          <div className="skeleton h-64 w-96 flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        </div>
      ) : (
        <div className="grid gap-[8px] grid-cols-2 md:grid-cols-3 ">
          {images.map((image, index) => (
            <DisplayImage
              key={index}
              url={dummyImages[index].url}
              title={dummyImages[index].name}
              description={dummyImages[index].description}
              imagePath={image}
              theme={dummyImages[index].theme}
            />
          ))}
        </div>
      )}
    </div>
  );
};
