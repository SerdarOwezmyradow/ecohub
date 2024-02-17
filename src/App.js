import Navbar from "./components/Navbar";
import header from "./images/header.png"
import header1 from "./images/header1.png"
import header2 from "./images/header2.png"
import header3 from "./images/header3.png"
import gallery from "./images/gallery.png"
import gallery1 from "./images/gallery1.png"
import gallery2 from "./images/gallery2.png"
import About from "./About";

function App() {
  return (
    <>
    
    <div className="h-[100vh] relative bg-primary relative ">
      <header className="text-white absolute top-0 left-0 w-full py-3 ">
        <Navbar />
      </header>
      <div className="absolute w-[35vw] right-[35%] top-0">
        <img src={header} />
      </div>
      <div className="absolute w-[15vw] right-0 bottom-0">
        <img src={header1} />
      </div>
      <div className="flex h-[100%] container items-center  content-center">
        <div className="flex flex-col justify-between">
          <div className="font-bold  text-white text-[50px]">Today for <br /> Tomorrow</div>
          <div className="translate-y-36">

            <div className="rounded-[30px]  p-3 text-lg text-white text-center font-bold bg-[#FF4553]">
              Boost Your Education
            </div>
            <p className="text-primaryText mt-3 text-md w-full mx-auto">*Get 30% Discount</p>
          </div>
        </div>

        <div class="grid ms-auto   gap-4">
          <div className="flex relative items-end gap-3">
            <div>
              <img className="h-auto max-w-full w-[25vw] rounded-lg" src={gallery1} alt="" />
            </div>
            <div className="absolute -bottom-20 w-[15vw] -left-4 ">
              <img src={header2} />
            </div>
            <div className="absolute top-0 right-14">
              <img src={header3} />
            </div>

            <div>
              <img className="h-auto w-[15vw]  rounded-lg" src={gallery2} alt="" />
            </div>
          </div>
          <div>
            <img className="h-auto ms-24 w-[20vw]  rounded-lg" src={gallery} alt="" />
          </div>
        </div>
      </div>
    </div>
    <About/>
    
    </>
  );
}

export default App;