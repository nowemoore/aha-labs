import Navbar     from "./components/Navbar";
import Footer     from "./components/Footer";
import Hero       from "./views/Hero";
import Problem    from "./views/Problem";
import Approach   from "./views/Approach";
import Impact     from "./views/Impact";
import Timeline   from "./views/Timeline";
import Team       from "./views/Team";
import TakeAction from "./views/TakeAction";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Approach />
        <Impact />
        <Timeline />
        <Team />
        <TakeAction />
      </main>
      <Footer />
    </>
  );
}
