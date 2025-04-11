"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden pb-[0px] pt-[0px]">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white dark:text-white">
              ilian <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                LAAMARA
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/myself.jpg`}
          alt="Me"
          height={100}
          width={500}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
