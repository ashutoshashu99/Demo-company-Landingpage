"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Indent } from "lucide-react";

const projects = [
  {
    title: "Project 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate, in aliquid itaque quidem possimus veritatis perferendis esse dolorem, commodi quibusdam voluptatum sed voluptatem repudiandae doloremque omnis ipsa. Unde, esse!",
    techStacks: ["Business analysis", " iOS", "Android", "QA", "UI/UX Design"],
    location: "India",
    catogory: "Real Estate",
    userGrowth: 400,
    activeUser: 200000,
  },
  {
    title: "Project 2",
    desc: "Lorem ipsum dolor sit ametuid itaque quidem possimus veritatis perferendis esse am voluptatum sed voluptatem repudiandae doloremque omnis ipsa. Unde, esse!",
    techStacks: ["Business analysis", " iOS", "Android", "QA", "UI/UX Design"],
    location: "Nepal",
    catogory: "Plywood",
    userGrowth: 400,
    activeUser: 2340000000,
  },
  {
    title: "Project 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.uidem possimus veritatis perferendis esse dolorem, commodi quibusdam voluptatum sed voluptatem repudiandae doloremque omnis ipsa. Unde, esse!",
    techStacks: ["Business analysis", " iOS", "Android", "QA", "UI/UX Design"],
    location: "New york",
    catogory: "Software",
    userGrowth: 400,
    activeUser: 2002324500000,
  },
  {
    title: "Project 4",
    desc: "Lorem ipsum dolor sit amet us vssimus veritatis perferendis esse dolorem, commodi quibusdam voluptatum sed voluptatem repudiandae doloremque omnis ipsa. Unde, esse!",
    techStacks: ["Business analysis", " iOS", "Android", "QA", "UI/UX Design"],
    location: "France",
    catogory: "Electronic",
    userGrowth: 400,
    activeUser: 234234500,
  },
];

interface projectCardProp {
  title: string;
  desc: string;
  techStacks: string[];
  location: string;
  catogory: string;
  userGrowth: number;
  activeUser: number;
}

const projectCard = (prop: projectCardProp) => {
  return (
    <section className="flex" id="media">
      <div className=" w-1/2">
        <h1 className=" text-4xl font-bold">{prop.title}</h1>
        <p className="py-12 h-36">{prop.desc}</p>

        <p>{prop.techStacks}</p>

        <div className=" inline-flex gap-4 py-12">
          <div className=" inline-flex gap-4 items-center">
            <img src="location.png" alt="" className=" w-8 " />
            <span>{prop.location}</span>
          </div>

          <div className=" inline-flex gap-4 items-center">
            <img src="real-estate.png" alt="" className=" w-8 " />
            <span>{prop.catogory}</span>
          </div>
        </div>

        <div className=" flex gap-16 pb-12">
          <div>
            <p className=" text-2xl font-bold pb-4">{prop.userGrowth} %</p>
            <p className=" text-gray-400">User Growth</p>
          </div>
          <div>
            <p className=" text-2xl font-bold pb-4">+ {prop.activeUser}</p>
            <p className=" text-gray-400">Active Users</p>
          </div>
        </div>

        <div>
          <img src="web-store.png" alt="web store" className=" h-16" />
        </div>
      </div>
      <div className=" w-1/2">
        <img src="phone.png" alt="phone image" />
      </div>
    </section>
  );
};

const Project = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  return (
    <section className=" mx-20 bg-[#F3F4F7]">
      <div className="pb-20">
        <h1 className=" text-4xl font-semibold pb-8">
          Projects we are proud of
        </h1>
        <p className=" text-xl w-1/2">
          Our software development company is truly proud of the
          wonderfulclients we have worked with. We enjoy a long-term partnership
        </p>
      </div>

      <div>
        <div className=" flex font-light pb-20 ml-8">
          {["Project 1", "Project 2", "Project 3", "Project 4"].map(
            (name, index) => {
              return (
                <div>
                  <button
                    className=" text-2xl focus:underline focus:font-semibold focus:decoration-yellow-400 focus:underline-offset-8 decoration-4 w-40"
                    onClick={() => setSliderIndex(index)}
                  >
                    {name}
                  </button>
                </div>
              );
            }
          )}
        </div>
      </div>
      <div className=" flex">
        <div>{projectCard(projects[sliderIndex])}</div>
      </div>
    </section>
  );
};

export default Project;
