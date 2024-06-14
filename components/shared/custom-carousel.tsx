"use client";
import { ProductType } from "@/utils/types";
import Image from "next/image";
import React, { useState } from "react";

interface Product {
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

const CustomCarousel = ({ products }: { products: Product[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = products.length;

  const handleNext = () => {
    let newSlideIndex = currentSlide + 1;
    if (newSlideIndex >= totalSlides) {
      newSlideIndex = 0;
    }
    setCurrentSlide(newSlideIndex);
  };

  const handlePrev = () => {
    let newSlideIndex = currentSlide - 1;
    if (newSlideIndex < 0) {
      newSlideIndex = totalSlides - 1;
    }
    setCurrentSlide(newSlideIndex);
  };

  return (
    <div className="relative">
      {/* Carousel container */}
      <div className="carousel overflow-hidden w-full">
        {products.map((product, index) => (
          <div
            key={product.name}
            className={`slide relative  w-full transition ease-out duration-700 ${
              index === currentSlide ? "block" : "hidden"
            }`}
          >
            {/* Product image */}
            <div className="image-container mx-auto h-80 w-80 overflow-hidden rounded-lg">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product details */}
            <div className="p-4 flex flex-col items-center">
              {/* Product name and price */}
              <div className="flex justify-between w-full mb-4">
                <h2 className="text-xl font-bold">{product.name}</h2>
                <span className="text-lg">Tk {product.price}</span>
              </div>

              {/* Product description */}
              <p className="text-gray-600 text-center">{product.description}</p>

              {/* View details button */}
              <button className="btn btn-primary mt-4 self-center">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons (outside the image) */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 ml-4 focus:outline-none"
        onClick={handlePrev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7-1.41-1.41L6 12l8.41 8.41z"
          />
        </svg>
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 mr-4 focus:outline-none"
        onClick={handleNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7 1.41 1.41L18 12l-8.41-8.41z"
          />
        </svg>
      </button>
    </div>
  );
};
export default CustomCarousel;
