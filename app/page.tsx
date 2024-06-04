import Button from "@/components/Button";
import Navigation from "@/components/Navigation";
import Terminal from "@/components/Terminal";
import Image from "next/image";

export default function Home() {
  return (<>
        <div className="flex h-screen w-screen flex-col items-center">
            <div className="flex flex-row justify-center items-center">
              <nav className="self-start">
                  <Navigation />
              </nav>
            </div>
            <div className="h-4/5 w-4/5 flex border-4 border-dotted m-5">
                <section className="flex flex-row w-1/2 items-start justify-start overflow-y-scroll">
                    <div className="flex flex-col m-3 p-2">
                    </div>
                </section >
                <section className="w-1/2 m-5 border-l overflow-y-scroll">
                    <Terminal/>
                </section >
            </div>
        </div>
      </>
  );
}
