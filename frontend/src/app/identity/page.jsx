import Link from "next/link";
import React from "react";

import Footer from "@/components/footer";
import Navigation from "@/components/navigation";

const page = () => {
  return (
    <>
      <Navigation />

      <main>
        <section
          id=""
          className="flex flex-col items-center justify-center w-full min-h-[630px] relative"
        >
          <div className="flex flex-col items-center py-14">
            <h2 className="text-center text-4xl mb-7 z-20">
              Identity za kterými{" "}
              <span className="font-bold text-modra">stojím</span>
            </h2>
            <p className="sm:w-[50%] w-[90%] text-center">
              Každá značka má svůj příběh. Vizuální identita je grafický
              ztělesněním tohoto příběhu, za každou z nich stojí týdny práce a
              hodiny komunikace s klienty, díky kterým se dokážu opravdu vžít do
              vašeho příběhu a opravdu mu porozumět. výsledkem je pak vizuální
              identita propracovaná do posledního detailu která je schopna
              vydržet dané značce klidně i desítky let.
            </p>
          </div>
          <svg
            className="absolute -top-0 hidden sm:block sm:-left-[700px] lg:-left-[500px] z-10"
            width="817"
            height="650"
            viewBox="0 0 817 650"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M717.062 225.791L408.271 325.271C237.714 380.218 54.9381 286.491 0 115.96L308.791 16.48C479.322 -38.4581 662.116 55.2339 717.062 225.791Z"
              fill="#3FA9F5"
            />
            <path
              d="M816.542 534.582L507.751 634.062C337.194 689.009 154.418 595.282 99.48 424.751L408.271 325.271C578.802 270.333 761.596 364.025 816.542 534.582Z"
              fill="#3FA9F5"
            />
          </svg>

          <svg
            className="absolute -top-0 hidden sm:block sm:-right-[700px] lg:-right-[500px] z-10"
            width="817"
            height="650"
            viewBox="0 0 817 650"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M99.4808 225.791L408.272 325.271C578.829 380.218 761.605 286.49 816.543 115.96L507.752 16.4797C337.221 -38.4584 154.427 55.2337 99.4808 225.791Z"
              fill="#3FA9F5"
            />
            <path
              d="M0.000792956 534.582L308.792 634.062C479.349 689.009 662.125 595.282 717.063 424.751L408.272 325.271C237.741 270.333 54.9474 364.025 0.000792956 534.582Z"
              fill="#3FA9F5"
            />
          </svg>
        </section>

        <section
          id=""
          className="flex items-center justify-center flex-col-reverse lg:flex-row w-full bg-black text-white"
        >
          <div className="lg:w-1/2 w-full px-10 py-40 flex flex-col items-start justify-center">
            <h2 className="text-4xl">Nostalgik</h2>
            <p className="my-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
              sapien sem, ornare ac, nonummy non, lobortis a enim. In sem justo,
              commodo ut, suscipit at, pharetra vitae, orci. Quisque tincidunt
              scelerisque libero. Ut tempus purus at lorem. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
            </p>
            <p className="my-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
              sapien sem, ornare ac, nonummy non, lobortis a enim. In sem justo,
              commodo ut, suscipit at, pharetra vitae, orci. Quisque tincidunt
              scelerisque libero. Ut tempus purus at lorem. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
            </p>
          </div>

          <div className="lg:w-1/2 w-full h-full bg-gray-600"></div>
        </section>
        <section
          id=""
          className="flex items-center justify-center flex-col lg:flex-row bg-white"
        >
          <div className="lg:w-1/2 w-full h-full bg-gray-600"></div>
          <div className="lg:w-1/2 w-full px-10 py-40 flex flex-col items-start justify-center">
            <h2 className="text-4xl">Nostalgik</h2>
            <p className="my-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
              sapien sem, ornare ac, nonummy non, lobortis a enim. In sem justo,
              commodo ut, suscipit at, pharetra vitae, orci. Quisque tincidunt
              scelerisque libero. Ut tempus purus at lorem. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
            </p>
            <p className="my-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
              sapien sem, ornare ac, nonummy non, lobortis a enim. In sem justo,
              commodo ut, suscipit at, pharetra vitae, orci. Quisque tincidunt
              scelerisque libero. Ut tempus purus at lorem. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
            </p>
          </div>
        </section>
        <section
          id=""
          className="flex items-center justify-center flex-col-reverse lg:flex-row bg-black text-white"
        >
          <div className="lg:w-1/2 w-full px-10 py-40 flex flex-col items-start justify-center">
            <h2 className="text-4xl">Nostalgik</h2>
            <p className="my-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
              sapien sem, ornare ac, nonummy non, lobortis a enim. In sem justo,
              commodo ut, suscipit at, pharetra vitae, orci. Quisque tincidunt
              scelerisque libero. Ut tempus purus at lorem. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
            </p>
            <p className="my-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
              sapien sem, ornare ac, nonummy non, lobortis a enim. In sem justo,
              commodo ut, suscipit at, pharetra vitae, orci. Quisque tincidunt
              scelerisque libero. Ut tempus purus at lorem. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
            </p>
          </div>

          <div className="lg:w-1/2 w-full h-full bg-gray-600"></div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default page;
