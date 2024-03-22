"use client";
import React from "react";
import { PinContainer } from "../components/ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center bg-[#020617]" id="maps">
      <PinContainer
      title="/google-maps"
        href="https://www.google.com/maps/place/The+Lazy+Chef+Gangtok/@27.3280502,88.612626,15z/data=!4m2!3m1!1s0x0:0x8b783acfee71b293?sa=X&ved=1t:2428&hl=en&ictx=111"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Google maps
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              You can locate us through google maps
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
        <button className="bg-white p-2 rounded-md font-bold"><a href="https://www.google.com/maps/place/The+Lazy+Chef+Gangtok/@27.3280502,88.612626,15z/data=!4m2!3m1!1s0x0:0x8b783acfee71b293?sa=X&ved=1t:2428&hl=en&ictx=111">Click here</a></button>
      </PinContainer>
    </div>
  );
}
