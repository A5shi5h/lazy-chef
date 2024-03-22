"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../components/ui/layout-grid";
 
export function LayoutGridDemo() {
  return (
    <div id="gallery" className="h-screen py-20 w-full block  bg-[#020617]">
      <LayoutGrid cards={cards} />
      <h1 className="text-white text-center"><span>Click on the images to view</span><br/><br/>
      <button className="px-12 py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
            <a href='https://www.google.com/search?q=lazy+chef+gangtok&tbm=isch&ved=2ahUKEwjT5MegxIeFAxUuyDgGHQn_BDIQ2-cCegQIABAA&oq=lazy+chef+gangtok&gs_lp=EgNpbWciEWxhenkgY2hlZiBnYW5ndG9rMgQQIxgnMgQQIxgnMgcQABiABBgYSJgvULIOWNgscAB4AJABAJgB2wSgAaYkqgEHMy0zLjIuNbgBA8gBAPgBAYoCC2d3cy13aXotaW1nwgIFEAAYgATCAgYQABgIGB7CAgQQABgeiAYB&sclient=img&ei=NEz9ZdP6Na6Q4-EPif6TkAM&bih=782&biw=1536&prmd=ivsnmbtz&hl=en'>Take a tour</a>
        </button></h1>
      
    </div>
  );
}
 
const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Ambiance</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        The Ambiance that we have here is just extravagant...
      </p>
    </div>
  );
};
 
const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Drinks for Enjoyment</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Here we serve you with variety of drinks which contain alcohol and no alcohol
        We also have variety of cocktails and mocktails available. 
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Live Music and Open mic sessions </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        We also do live music here by giving opportunities to our local musicians and
        we also have open mic sessions where anyone can showcase their talent..
      </p>
    </div>
  );
};
 
const cards = [
  {
    id: 1,
    className: "md:col-span-2",
    content: <SkeletonOne />,
    thumbnail:
      "/images/img5.webp",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
    "/images/img2.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
    "/images/img4.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
    "/images/img3.jpg",
  },
];