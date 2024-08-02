import React from "react";
import Image from "next/image";
import { Icon } from "@mui/material";
const ChannelManagement = () => {
  const cardData = [
    {
      title: "Channel Manager",
      description:
        "Your dedicated channel manager runs your channel for you and gives you expert feedback and advice.",
      imgSrc: "",
    },
    {
      title: "Free Thumbnails",
      description:
        "You get two free Thumbnail add-ons from your dedicated thumbnail artist so your channel manager can run AB tests.",
      imgSrc: "",
    },
    {
      title: "Weekly Calls",
      description:
        "Your channel manager schedules weekly calls with you to discuss your performance and strategize your content.",
      imgSrc: "",
    },
    {
      title: "Keyword Research",
      description:
        "Your channel manager performs keyword research and analyzes upcoming trends in your niche to give you video ideas.",
      imgSrc: "",
    },
    {
      title: "Video Uploads",
      description:
        "Your channel manager uploads and schedules both your long-form videos and Shorts for the most optimal times.",
      imgSrc: "",
    },
    {
      title: "Video SEO",
      description:
        "Your channel manager optimizes your video content for better visibility and searchability on YouTube.",
      imgSrc: "",
    },
    {
      title: "Youtube comments",
      description:
        "Your channel manager responds to comments on every video for you to boost engagement and build your community.",
      imgSrc: "",
    },
    {
      title: "Community Engagement",
      description:
        "Your channel manager makes multiple community posts every week to promote your videos and drive engagement.",
      imgSrc: "",
    },
    {
      title: "Analytics Report",
      description:
        "Your channel manager performs deep-dive analyses on your content to optimize your channel strategy and content.",
      imgSrc: "",
    },
  ];

  const processData = [
    {
      title: "1.OnBoarding call",
      description:
        "Review your channel's goals with your dedicated channel manager.",
      img: "",
    },
    {
      title: "2.Create Content",
      description:
        "Create amazing content and let your channel manager do the rest.",
      img: "",
    },
    {
      title: "3.Optimize",
      description:
        "Relax as your channel manager continues to optimize your strategy over time.",
      img: "",
    },
  ];
  const successStories = [
    {
      title: "Human Anatomy",
      img: "",
      subs: "+1,300,000",
      description: "subscribers over 8 months",
    },
    {
      title: "Johnyfishalot",
      img: "",
      subs: "+54,800",
      description: "subscribers and +305,600 watch time (hours) over 7 months",
    },
    {
      title: "Kat Wonders",
      img: "",
      subs: "+20,000,000",
      description: "views over 12 months",
    },
    {
      title: "I Dream of Dignity",
      img: "",
      subs: "+65,600",
      description: "views and channel monetization unlocked after 4 months",
    },
  ];

  const question = [
    {
      question: "How do I communicate with my channel manager",
      answer:
        "Directly within our custom-built Video Order Management Application (VOMA). From VOMA you can chat with your channel manager and track every task on your channel management dashboard. Your channel manager will also schedule a video call with you every week.",
    },
    {
      question: "Does YouTube Channel Management include video editing?",
      answer:
        "YouTube Channel Management is a separate subscription from our video editing services, however, both services are designed to work together as the ultimate YouTube service for content creators and businesses.",
    },
    {
      question: "Do I have to share my YouTube login and password?",
      answer:
        "No way! Instead, you'll give access to your channel manager from YouTube Studio. We'll show you how during your onboarding call.",
    },
    {
      question: "Do you offer a trial for YouTube Channel Management?",
      answer:
        "Yes! You can start with a 14 day free trial to see what we're all about. Start your trial within our custom-built Video Order Management Application (VOMA).",
    },
  ];
  const pricingDeatils = [
    {
      title: "Monthly",
      description: "Our monthly plan also comes with a 14 day free trial!",
      price: "$970 ",
      month: "per month",
      option1: "Free vertical reformat with every horizontal video order",
      option2: "Free thumbnail with every horizontal video order",
      option3: "Save 0%",
      option4: "$970 total cost",
    },
    {
      title: "Quarterly",
      description: "Our quarterly plans offer savings of up to 10%!",
      price: "$870 ",
      month: "per month",
      option1: "Free vertical reformat with every horizontal video order",
      option2: "Free thumbnail with every horizontal video order",
      option3: "Save 10%",
      option4: "$2,619 total cost",
    },
    {
      title: "Semi-Annual",
      description: "Our most cost-effective plan with savings of up to 20%!",
      price: "$770    ",
      month: "per month",
      option1: "Free vertical reformat with every horizontal video order",
      option2: "Free thumbnail with every horizontal video order",
      option3: "Save 20%",
      option4: "$4,656 total cost",
    },
  ];
  return (
    <>
      <div className="flex flex-col h-4/5">
        <div className="flex flex-col items-center justify-center w-full">
          {/* <img
        src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F875b965719b5fd8f939367e5d16fb3ae.cdn.bubble.io%2Ff1713768369552x548344479695823000%2Farrow-howitworks.png?w=128&h=91&auto=compress&dpr=1.25&fit=max"
        alt="Arrow"
        width={100}
        height={71}
        className="rounded-lg"
      /> */}
        </div>

        <div className="flex w-full bg-red-50 ">
          <div className="flex flex-col   p-10 mt-36">
            <div className="mb-6">
              <h1 className="text-3xl font-semibold text-black">
                <span className="text-red-500 text-4xl">YouTube</span>
                <br /> <span className="text-4xl">Channel Management</span>
              </h1>
              <p className="text-base text-gray-700 mt-4">
                We make your life easier by growing your YouTube channel's
                audience, increasing <br /> your views,and expanding your
                business, all so that you can focus on what you do <br /> best —
                filming amazing content.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="  font-semibold text-white bg-red-500 text-sm py-2 px-4 border rounded-md ">
                Get started
              </button>
              <button className="  font-semibold text-sm py-2 bg-white text-red-500 px-4 border border-red-500  rounded-md  ">
                Schedule a Call
              </button>
            </div>
          </div>

          <div
            className="flex-grow bg-cover bg-center h-screen"
            style={{
              backgroundImage: `url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F875b965719b5fd8f939367e5d16fb3ae.cdn.bubble.io%2Ff1712571023806x804481108376802700%2Fpexels-fauxels-3184635%2520%25281%2529.jpg?w=&h=&auto=compress&dpr=1.25&fit=max')`,
            }}
          ></div>
        </div>
      </div>
      <div className="flex flex-col items-start p-8 bg-white shadow-lg rounded-lg space-y-12">
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold text-primary text-red-500">
            Our Services
          </h2>
          <p className="text-3xl font-bold text-black">
            A winning strategy that takes your channel to the next level
          </p>
          <p className="text-sm text-gray-600">
            Our YouTube channel management service grows your channel and
            removes time-consuming admin tasks from your to-do list. Your
            dedicated channel manager optimizes your entire YouTube channel,
            performs keyword research, uploads your content, engages your
            community, studies your analytics, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <h2 className="text-xl font-semibold mb-2 p-4">{card.title}</h2>
              <Image
                src={""}
                alt={card.title}
                width={300}
                height={200}
                className="w-full h-20 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 p-4 bg-red-50">
        <div
          className="relative flex-1 min-w-[280px] h-[450px] bg-cover bg-center"
          style={{
            backgroundImage: `url("https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F875b965719b5fd8f939367e5d16fb3ae.cdn.bubble.io%2Ff1712738643374x140208126240614740%2Fpexels-fauxels-3183150.jpg?w=768&h=779&auto=compress&fit=crop&dpr=1.25")`,
          }}
        ></div>
        <div className="flex-1 bg-gray-100 bg-opacity-5 p-8">
          <h2 className="text-xl font-semibold text-primary mb-4">Why Us?</h2>
          <h3 className="text-4xl font-semibold mb-4">
            Creating <span className="text-red-500">content</span> is only half
            the battle
          </h3>
          <p className="text-base text-gray-800 mb-6">
            Our team develops a winning strategy for your YouTube channel,
            optimizes your content, and engages your community. We handle
            everything including uploads, video SEO, thumbnails, community
            engagement, analytics, and more. Focus on filming content and let us
            handle the rest.
          </p>

          <div className="flex gap-8 mb-8">
            <div className="flex flex-col items-start">
              <div className="text-4xl font-semibold text-black">+517M</div>
              <div className="text-xl font-medium text-black-600">
                Views Generated
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="text-4xl font-semibold text-black">1.5M</div>
              <div className="text-lg font-medium text-black-600">
                Subscribers Gained
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="  font-semibold text-white bg-red-500 text-sm py-2 px-4 border rounded-md ">
              Start Now
            </button>
            <button className="  font-semibold text-sm py-2 bg-white text-red-500 px-4 border border-red-500  rounded-md  ">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-start p-8 bg-white shadow-lg rounded-lg space-y-12">
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold text-primary text-red-500">
            Our Process
          </h2>
          <p className="text-3xl font-bold text-black">How It Works</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {processData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={""}
                alt={card.title}
                width={300}
                height={200}
                className="w-full h-20 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 border-t-2 border-red-500"></div> */}
        <div className="flex flex-col items-start space-y-5 p-4 ">
          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-red-500">
              Success Stories
              <p className="text-2xl font-bold text-black">
                Get the results you deserve with us
              </p>
            </h2>
          </div>
          ⭐⭐⭐⭐⭐
          <div className="flex flex-wrap -mx-2 mt-8 ">
            {successStories.map((card, index) => (
              <div key={index} className="w-full md:w-1/2 px-2 mb-4 ">
                <div className="flex flex-row bg-white shadow-lg border border-gray-200 rounded-lg p-4 cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-gray-300 mr-4 relative ">
                    <Image
                      src={""}
                      alt={card.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-lg font-semibold text-gray-800">
                      {card.title}
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="text-red-500">{card.subs}</span>{" "}
                      {card.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            <button className="  font-semibold text-white bg-red-500 text-sm py-2 px-4 border rounded-md ">
              Start Now
            </button>
            <button className="  font-semibold text-sm py-2 bg-white text-red-500 px-4 border border-red-500  rounded-md  ">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
      <div className="space-y-12 p-6 pt-20  bg-red-50">
        <section className="">
          <div className="space-y-5 text-center mb-10">
            <h2 className="text-xl font-semibold text-primary text-red-500">
              Our Pricing
              <p className="text-xl font-bold text-black">
                Choose a plan that works for you
              </p>
            </h2>
            <p className="text-md text-gray-600 ">
              We fully run your channel for you — including strategy, uploading,
              video SEO, community engagement, and more — as a complete service
              so that you can focus on what you do best: filming amazing
              content.
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-4 pl-24">
            {pricingDeatils.map((data, index) => (
              <div
                key={index}
                className="flex flex-row min-h-[370px] box-border border-l-[10px] border-transparent ml-[-10px] justify-start"
              >
                <div className="flex flex-col border border-gray-300 border-opacity-50 rounded-2xl shadow-lg min-w-0 min-h-0 h-max w-auto mx-0">
                  <div className="flex flex-col rounded-none max-w-xs mx-0 z-20">
                    <div
                      className="bg-red-500 flex flex-col justify-between rounded-2xl min-h-[225px] h-[225px] flex-grow w-full mx-0 z-40 p-5 bg-cover"
                      style={{
                        backgroundImage:
                          "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F875b965719b5fd8f939367e5d16fb3ae.cdn.bubble.io%2Ff1689939671265x557994390023313100%2F646c3b1edd8b0800f24355a2_63c96dc85664ab5dfb6ef394_Price%2520Png.webp?w=384&h=293&auto=compress&fit=crop&dpr=1.25')",
                      }}
                    >
                      <div className="text-white text-lg font-semibold">
                        {data.title}
                      </div>
                      <div className="text-white text-sm max-h-[85px]">
                        {data.description}
                      </div>
                      <div className="text-white text-xs text-right ">
                        <strong className="text-xl">{data.price}</strong>{" "}
                        {data.month}
                      </div>
                    </div>
                    <div className=" bg-white flex items-center  justify-center gap-x-2 mt-6 border-2 border-black rounded-2xl p-2 cursor-pointer hover:border-gray-600 mx-5 mt-0">
                      <div className="text-black text-xs ">
                        14 days free trial
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>

                    <div className="flex flex-col gap-y-2 p-5 bg-white ">
                      <div className="flex items-center gap-x-2 text-black text-xs">
                        <button className="text-primary p-0 rounded">
                          <svg viewBox="0 -18 50 50" className="w-4 h-4">
                            <text
                              x="50%"
                              y="50%"
                              textAnchor="middle"
                              className="text-3xl"
                            >
                              ✔️
                            </text>
                          </svg>
                        </button>
                        <div>{data.option1}</div>
                      </div>
                      <div className="flex items-center gap-x-2 text-black text-xs">
                        <button className="text-primary p-0 rounded">
                          <svg viewBox="0 -18 50 50" className="w-4 h-4">
                            <text
                              x="50%"
                              y="50%"
                              textAnchor="middle"
                              className="text-3xl"
                            >
                              ✔️
                            </text>
                          </svg>
                        </button>
                        <div>{data.option2}</div>
                      </div>
                      <div className="flex items-center gap-x-2 text-black text-xs">
                        <button className="text-primary p-0 rounded">
                          <svg viewBox="0 -18 50 50" className="w-4 h-4">
                            <text
                              x="50%"
                              y="50%"
                              textAnchor="middle"
                              className="text-3xl"
                            >
                              ✔️
                            </text>
                          </svg>
                        </button>
                        <div>{data.option3}</div>
                      </div>
                      <div className="flex items-center gap-x-2 text-black text-xs">
                        <button className="text-primary p-0 rounded">
                          <svg viewBox="0 -18 50 50" className="w-4 h-4">
                            <text
                              x="50%"
                              y="50%"
                              textAnchor="middle"
                              className="text-3xl"
                            >
                              ✔️
                            </text>
                          </svg>
                        </button>
                        <div>{data.option4}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center border-t border-red-600 pt-10">
          <div className="space-y-5 text-center mb-10">
            <h2 className="text-xl font-semibold text-primary text-red-500">
              Need Help?
              <p className="text-2xl font-bold text-black">
                Frequently Asked Questions
              </p>
            </h2>
            <p className="text-md text-gray-600 ">
              These are the most commonly asked questions amongst our creators.
            </p>
          </div>
          <div className="flex flex-wrap -mx-3">
            {question.map((faq, index) => (
              <div key={index} className="w-full md:w-1/2 px-3 mb-6">
                <div className="flex items-start gap-4 text-left">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-red-500">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 3v18M21 12l-9 9M3 12l9-9" />
                    </svg>
                  </div>
                  ❓
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-md text-gray-600 ">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="flex flex-col items-center max-w-full p-12 bg-white border border-gray-200 rounded-md shadow-lg">
        <div className="flex flex-col items-start w-full space-y-5">
          <div className="space-y-5  mb-10">
            <h2 className="text-xl font-semibold text-primary text-red-500">
              Contact us
              <p className="text-2xl font-bold text-black">
                Schedule a strategy call
              </p>
            </h2>
            <p className="text-md text-gray-600 ">
              Learn about Tasty Edit's YouTube Channel Management service and
              how we can help. This is a video call, a link will be emailed to
              you.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChannelManagement;
