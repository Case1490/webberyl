import AboutUs from "./components/AboutUs";
import ContactCard from "./components/ContactCard";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import MobileWeb from "./components/MobileWeb";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import ReasonsImportantWeb from "./components/ReasonsImportantWeb";
import Services from "./components/Services";
import ArrowUp from "./icons/ArrowUp";
import MessageIcon from "./icons/MessageIcon";

function App() {
  const handleInit = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleRedirect = () => {
    const phoneNumber = import.meta.env.VITE_NUMBER;
    const message = "Hola, quisiera más información.";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <>
      <Navbar />
      <MainPage />
      <Presentation />
      <div className=" backgroundGrayToWhite min-h-screen rounded-tl-[60px] rounded-tr-[60px]">
        <AboutUs />
        <Services />
        <ReasonsImportantWeb />
      </div>
      <div className="bg-PurpleMain min-h-screen">
        <MobileWeb />
        <ContactCard />
        <Footer />
      </div>
      <div
        className="fixed bottom-20 right-8 bg-GreenLight p-2 rounded-full shadow-2xl cursor-pointer"
        onClick={handleRedirect}
      >
        <MessageIcon />
      </div>
      <div
        className="fixed bottom-4 right-8 bg-VeryDark p-2 rounded-2xl shadow-2xl cursor-pointer"
        onClick={handleInit}
      >
        <ArrowUp />
      </div>
    </>
  );
}

export default App;
