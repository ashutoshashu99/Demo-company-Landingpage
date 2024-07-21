"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

function customCard(
  imgUrl: string,
  title: string,
  description: string,
  key: number
) {
  return (
    <Card className="rounded-xl shadow-sm" key={key}>
      <CardHeader>
        <CardTitle>
          <div className=" inline-flex gap-8 items-center">
            <img src={imgUrl} alt="LOGO" />
            <h1 className=" text-xl font-medium text-slate-800">{title}</h1>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className=" text-sm text-slate-500">{description}</p>
      </CardContent>
    </Card>
  );
}

function DevStage() {
  const leftList = [
    {
      imgUrl: "planing.svg",
      title: "Analysis",
      disc: "We craft precise technical specs, aligning with your business, technology, and user requirements.",
    },
    {
      imgUrl: "design.png",
      title: "Design",
      disc: "We adapt the customer's corporate identity to the platform guidelines. We draw convenient and understandable interfaces.",
    },
    {
      imgUrl: "computer-coding.png",
      title: "Development",
      disc: "We create an extensible architecture, write clean and stable code. We integrate with customer technologies.",
    },
  ];

  const rightList = [
    {
      imgUrl: "security.svg",
      title: "testing",
      disc: "We carry out functional testing and do bug fixes. We adapt the application to different phone resolutions.",
    },
    {
      imgUrl: "hosting 1.svg",
      title: "Launching",
      disc: "We design the application page and publish it in the App Store and Google Play stores.",
    },
    {
      imgUrl: "application.svg",
      title: "Support",
      disc: "We monitor the stability of the application, update it for new devices and versions of iOS and Android.",
    },
  ];

  return (
    <>
      <section className=" mx-20 mt-12" id="service ">
        <h1 className=" text-4xl font-semibold pb-10">
          Application Development Stages
        </h1>

        <div className=" inline-flex justify-between">
          <div className=" flex flex-col gap-4 w-1/2">
            {leftList.map(({ imgUrl, title, disc }, key) =>
              customCard(imgUrl, title, disc, key)
            )}
          </div>
          <img src="hope-gif1.png" alt="image" className=" w-1/2" />
          <div className=" flex flex-col gap-4 w-1/2">
            {rightList.map(({ imgUrl, title, disc }, key) =>
              customCard(imgUrl, title, disc, key)
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default DevStage;
