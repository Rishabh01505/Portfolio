import React from "react";
import chat from "../../public/chat.png";
import editkaro from "../../public/editkaro.png";

function Portfolio() {
  const cardItem = [
    {
      id: 1,
      logo: chat,
      name: "ChatVerse",
      description:
        "A real-time messaging application built with React, Node.js, and Socket.io for seamless communication.",
      projectLink: "https://chatverse-6r68.onrender.com/login",
      sourceCodeLink: "https://github.com/Rishabh01505/ChatVerse",
    },
    {
      id: 2,
      logo: editkaro,
      name: "EditKaro (VaultofCodes)",
      description:
        "Website for a video editing and social media marketing company helping creators craft visually appealing content.",
      projectLink: "https://rishabhbhatnagareditkaro.netlify.app/",
      sourceCodeLink:
        "https://github.com/Rishabh01505/VaultofCodes_Major_Project",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-5">
          {cardItem.map(
            ({ id, logo, name, description, projectLink, sourceCodeLink }) => (
              <div
                className="border-[2px] rounded-lg shadow-lg p-5 cursor-pointer hover:scale-105 duration-300 flex flex-col justify-between"
                key={id}
              >
                <div>
                  <img
                    src={logo}
                    className="w-[120px] h-[120px] p-1 rounded-full border-[2px] mb-4"
                    alt={name}
                  />
                  <div className="px-2 font-bold text-xl mb-2">{name}</div>
                  <p className="px-2 text-gray-700 mb-4">{description}</p>
                </div>
                <div className="px-2 py-4 flex justify-around space-x-3">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
                    onClick={() => window.open(projectLink, "_blank")}
                  >
                    Project
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                    onClick={() => window.open(sourceCodeLink, "_blank")}
                  >
                    Source code
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
