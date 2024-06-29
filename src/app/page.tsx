
import PageWrapper from "./PageWrapper";
import Navbar from "./Navbar";
export default function Home() {
  return (
   <main className="w-[90%] mx-auto flex flex-col items-center justify-center gap-4 py-4 m-2 text-sm">
    <Navbar />
    <PageWrapper>
      <div className="mx-auto">
        <h1 className="text-3xl font-bold mx-auto text-center">Next js with framer-motion</h1>
      </div>
    </PageWrapper>
   </main>
  );
}
