import Head from "next/head"
import Sidebar from "../components/Sidebar";

export default function Home() {
  
  return (
    <div className="">
    <Head>
      This is my 2.0 Spotify build
    </Head>
   
    <main>

      <Sidebar />
        {/* Center */}

    </main>

      <div>{/* Player */}</div>
    </div>
  );
}
