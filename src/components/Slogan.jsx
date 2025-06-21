
import { TypeAnimation } from "react-type-animation";

const Slogan = () => {
  return (
    <div
      style={{
        height: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        color: "#00BFFF",
        fontSize: "2rem",
        fontWeight: "bold",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <TypeAnimation
        sequence={[
          "İşe al, rahatla",
          2000,
          "", // sil
          1000,
          "Backend Developer 💻",
          2000,
          "", // sil
          1000,
          "Web designer",
          1000,
          "",
          "UI/UX DESİGNER",
          1000,
          ""
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </div>
  );
};

export default Slogan;
