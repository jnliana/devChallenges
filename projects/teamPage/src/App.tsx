import photoOne from "./assets/images/photo1.png";
import photoTwo from "./assets/images/photo2.png";
import photoThree from "./assets/images/photo3.png";
import photoFour from "./assets/images/photo4.png";
import photoFive from "./assets/images/photo5.png";
import photoSix from "./assets/images/photo6.png";

const App = () => {
  return (
    <div className="flex flex-col mx-8 lg:mx-40 h-screen">
      <div className="flex flex-col lg:flex-row pt-10 sm:pt-16  space-x-2 h-64">
        <div className="flex flex-1 justify-center font-bold uppercase text-xl sm:pb-7 md:pb-0">
          The creative crew
        </div>
        <div className="flex-1 px-3 pt-16 sm:pt-0">
          <h2 className="uppercase font-bold text-md block">Who we are</h2>
          <p className="text-slate-600 block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsam
            delectus quas nesciunt harum et a soluta rem asperiores aliquam in
            velit, autem, obcaecati fugiat tenetur non repudiandae. Iusto,
            rerum?
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10 lg:gap-26 sm:grid-cols-2 lg:grid-cols-3 py-14">
        <div className="relative">
          <img
            src={photoOne}
            alt="profile image"
          />
          <p className="font-bold pt-3">Bill Mahoney</p>
          <p className="uppercase sm:absolute sm:top-12 sm:rotate-90 sm:-right-20 text-sm">
            Product Owner
          </p>
        </div>
        <div className="relative sm:mt-14">
          <img
            src={photoTwo}
            alt="profile image"
          />
          <p className="font-bold pt-3">Saba Cabrera</p>
          <p className="uppercase sm:absolute sm:top-8 sm:rotate-90 sm:-right-14 text-sm">
            Marketing
          </p>
        </div>
        <div className="relative">
          <img
            src={photoThree}
            alt="profile image"
          />
          <p className="font-bold pt-3">Shae Le</p>
          <p className="uppercase sm:absolute sm:top-8 sm:rotate-90 sm:-right-14 text-sm">
            Tech Lead
          </p>
        </div>
        <div className="relative sm:mt-14 lg:mt-0">
          <img
            src={photoFour}
            alt="profile image"
          />
          <p className="font-bold pt-3">Skylah Lu</p>
          <p className="uppercase sm:absolute sm:top-10 sm:rotate-90 sm:-right-16 text-sm">
            UX Designer
          </p>
        </div>
        <div className="relative lg:mt-14">
          <img
            src={photoFive}
            alt="profile image"
          />
          <p className="font-bold pt-3">Griff Richards</p>
          <p className="uppercase sm:absolute sm:top-8 sm:rotate-90 sm:-right-14 text-sm">
            Developer
          </p>
        </div>
        <div className="relative sm:mt-14 lg:mt-0">
          <img
            src={photoSix}
            alt="profile image"
          />
          <p className="font-bold pt-3">Stan John</p>
          <p className="uppercase sm:absolute sm:top-8 sm:rotate-90 sm:-right-14 text-sm">
            Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
