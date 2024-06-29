
import PageWrapper from "./PageWrapper";
import Navbar from "./Navbar";
export default function Home() {
  return (
   <main>
    <Navbar />
    <PageWrapper>
      <div className="mx-auto">
        <h1 className="text-3xl font-bold mx-auto text-center">Next js with framer motion</h1>
      </div>
    </PageWrapper>
   </main>
  );
}
