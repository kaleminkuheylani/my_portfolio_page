// src/pages/Home.jsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import Slogan from "../components/Slogan";
import Pozisyonlar from "../components/Pozisyonlar";
import Yetenekler from "../components/Yetenekler";
import YabanciDiller from "../components/YabancıDiller";
import Projeler from "../components/Projeler";

const sekmeler = [
  { id: "slogan", label: "Slogan", component: Slogan },
  { id: "pozisyonlar", label: "Pozisyonlar", component: Pozisyonlar },
  { id: "yetenekler", label: "Yetenekler", component: Yetenekler },
  { id: "yabanci-diller", label: "Yabancı Diller", component: YabanciDiller },
  { id: "projeler", label: "Projeler", component: Projeler },
];

const Home = () => {
  const [aktifSekme, setAktifSekme] = useState("slogan");
  const aktifObj = sekmeler.find((s) => s.id === aktifSekme);
  const AktifComponent = aktifObj ? aktifObj.component : () => <div>Boş</div>;

  return (
    <div
      style={{
        width:"100vw",
        height: "100vh",
        overflow: "hidden",
        background: "linear-gradient(135deg, #000428, #004e92)",
        color: "#00BFFF",
      }}
    >
      <Navbar
        sekmeler={sekmeler}
        aktifSekme={aktifSekme}
        onSekmeChange={setAktifSekme}
      />
      <div
        style={{
          height: "calc(100vh - 60px)",
          overflowY: "auto",
        }}
      >
        <AktifComponent />
      </div>
    </div>
  );
};

export default Home;
