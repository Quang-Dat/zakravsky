import Image from "next/image";
import Navigation from "@/components/navigation";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navigation />

      <main>
        <section
          id="uvod"
          className="w-full h-full flex flex-col-reverse items-center md_2:flex-row"
        >
          <div className="bg-black w-full h-full flex flex-col items-center md_2:w-[60%] py-10">
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
            <p className="text-white text-center my-6 w-[90%] lg:w-[80%] xl:w-[820px]">
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
              className={`my-3 md_2:ml-5 md_2:my-0 py-2 px-5 rounded-xl bg-zluta text-white `}
              href="/"
            >
              Napište mi
            </Link>
          </div>
          <div className="bg-gray-500 md_2:w-[40%] w-full h-full"></div>
        </section>
      </main>
    </>
  );
}
