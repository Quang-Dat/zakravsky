import Image from "next/image";
import Link from "next/link";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <>
      <Navigation />

      <main>
        <section
          id="uvod"
          className="w-full h-full flex flex-col-reverse items-center lg:flex-row"
        >
          <div className="bg-black w-full h-full flex flex-col items-center lg:w-[60%] pt-10 pb-36">
            <h1 className="text-white flex flex-col items-center sm:items-start text-6xl text-center">
              <span className="sm:ml-16">Designuju</span>
              <span className="text-modra font-bold sm:ml-40">
                Brand Identity
              </span>
              <span className="sm:ml-28">které vás spojí</span>
              <span className="text-modra font-bold">
                s vaší cílovou skupinou
              </span>
            </h1>
            <p className="text-white text-center my-6 w-[90%] lg:w-[80%] max-w-[820px] z-20">
              Nikdy nebyl lepší čas 🕰️ na to pustit se do podnikání nebo
              budování vlastní značky. Každý den však vznikají tisíce nových
              značek 🆕, takže být originální je opravdová výzva. Ale nebojte, s
              pomocí Brand Designéra 🎨 to bude pro vás hračka 🧸, díky mým
              zkušenostem vám pomůžu navázat spojení s lidmi 👫, které chcete
              oslovit co nejefektivněji 📈 a nejrychleji 💨 jak to jen jde.
              Neváhejte, a domluvme si spolu nezávaznou schůzku, nebo
              videohovor. 
            </p>
            <Link
              className={`py-2 px-5 rounded-xl bg-zluta text-white font-bold z-20`}
              href="/"
            >
              Napište mi
            </Link>
          </div>
          <div className="bg-gray-500 md_2:w-[40%] w-full h-full"></div>
        </section>
        <section
          id="prace"
          className="flex flex-col items-center justify-center w-full h-full relative"
        >
          <div className="flex flex-col items-center py-14">
            <h2 className="text-center text-4xl mb-7 z-20">
              Moje <span className="font-bold text-modra">Práce</span>
            </h2>
            <Link
              className={`py-2 px-5 rounded-xl bg-black text-white font-bold z-20`}
              href="/"
            >
              Další práce
            </Link>
          </div>
          <svg
            className="absolute -top-40 -left-[750px] sm:-left-[600px]  lg:-left-[400px] z-10"
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
            className="absolute -top-40 -right-[750px] sm:-right-[600px]  lg:-right-[400px] z-10"
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

          <div className="flex flex-col xl:flex-row items-center justify-center w-full h-full">
            <div className="bg-gray-400 w-full xl:w-1/3 aspect-square border-2"></div>
            <div className="bg-gray-400 w-full xl:w-1/3 aspect-square border-2"></div>
            <div className="bg-gray-400 w-full xl:w-1/3 aspect-square border-2"></div>
          </div>
        </section>

        <section
          id="o-me"
          className="flex items-center justify-center flex-col lg:flex-row"
        >
          <div className="lg:w-[60%] w-full px-10 py-40 flex flex-col items-start justify-center">
            <h2 className="text-4xl">
              Ahoj, já jsem <span className="text-modra font-bold">Filip</span>
            </h2>
            <p className="my-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
              sapien sem, ornare ac, nonummy non, lobortis a enim. In sem justo,
              commodo ut, suscipit at, pharetra vitae, orci. Quisque tincidunt
              scelerisque libero. Ut tempus purus at lorem. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
            </p>
            <Link
              className={`py-2 px-5 rounded-xl bg-zluta text-white font-bold z-20`}
              href="/"
            >
              O mně
            </Link>
          </div>

          <div className="lg:w-[40%] w-full h-full bg-gray-600"></div>
        </section>
        <section
          id="spolprace"
          className="flex items-center justify-center flex-col lg:flex-row bg-black"
        >
          <div className="lg:w-[40%] w-full h-full bg-gray-600"></div>
          <div className="lg:w-[60%] w-full px-10 py-40 flex flex-col items-start justify-center text-white">
            <h2 className="text-4xl">
              Proces je klíč k{" "}
              <span className="text-modra font-bold">úspěchu</span>
            </h2>
            <p className="my-5">
              Spolupráce se mnou znamená, že budete součástí mého kreativního
              procesu, který vás provede celým projektem – od úvodní schůzky až
              po závěrečné předání projektu. Tento proces jsem vytvořil tak,
              abyste nikdy nezůstali v nejistotě, v jaké fázi se projekt
              nachází. Žádné zdlouhavé e-maily, žádné starosti, prostě
              JEDNODUCHOST.
            </p>
            <Link
              className={`py-2 px-5 rounded-xl bg-zluta text-white font-bold z-20`}
              href="/"
            >
              Zjistěte více
            </Link>
          </div>
        </section>
        <section
          id="proc-ja"
          className="flex items-center justify-center flex-col lg:flex-row"
        >
          <div className="lg:w-[40%] w-full px-10 py-40 flex flex-col items-start justify-center">
            <h2 className="text-4xl">
              Proč právě <span className="text-modra font-bold">já</span>
            </h2>
            <p className="my-5">
              Vím, jak frustrující může být spolupracovat s někým, kdo Vás
              nechává tápat v nejistotě. Proto jsem nastavil svůj klientský
              proces tak, abyste byli součástí každého kroku. Žádné dohady,
              žádné zmatení, jen jasná cesta k výsledku.
            </p>
            <p className="my-5">
              Práce na brandu by měla být vzrušující a zároveň co nejjednodušší.
              Proto kladu důraz na hladkou komunikaci a Vaše zapojení, aby byl
              celý proces co nejpříjemnější. Rád spolupracuji s lidmi, kteří mě
              inspirují, a vztahy s klienty pro mě nekončí předáním hotového
              designu. Naopak, sleduji jejich cestu dál a vždy mě potěší, když
              vidím, kam se jejich značka posouvá.
            </p>
            <p className="my-5">
              Věřím, že nás formují lidé, kterými se obklopujeme – a to platí i
              pro ty, se kterými pracujeme. ✨
            </p>
          </div>

          <div className="lg:w-[60%] w-full h-full bg-gray-600"></div>
        </section>
        <section className="flex items-center justify-center flex-col bg-black text-white">
          <div className="w-full px-10 py-40 flex flex-col items-center justify-center">
            <h2 className="text-4xl text-center">
              Máte myšlenku, která potřebuje přivést k{" "}
              <span className="text-modra font-bold">životu</span>
            </h2>
            <p className="my-7 text-center">
              Naplánujme si krátký poznávací videohovor nebo schůzku zdarma.
            </p>
            <Link
              className={`py-2 px-5 rounded-xl bg-zluta text-white font-bold z-20`}
              href="/"
            >
              Napište mi
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
