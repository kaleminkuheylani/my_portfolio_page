import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Navbar = ({ sekmeler, aktifSekme, onSekmeChange }) => {
  return (
    <nav
      style={{
        backgroundColor: "#000",
        color: "#00BFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
        Ahmet Yıldız
      </div>

      <div style={{ display: "flex", gap: "1.5rem" }}>
        {sekmeler.map((sekme) => (
          <button
            key={sekme.id}
            onClick={() => onSekmeChange(sekme.id)}
            style={{
              background: "none",
              border: "none",
              color: aktifSekme === sekme.id ? "#00BFFF" : "#aaa",
              fontWeight: "500",
              borderBottom: aktifSekme === sekme.id ? "2px solid #00BFFF" : "none",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            {sekme.label}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", gap: "1rem" }}>
        <a href="https://github.com/kaleminkuheylani" target="_blank" rel="noopener noreferrer" style={{ color: "#00BFFF" }}>
          <FaGithub size={20} />
        </a>
        <a href="https://instagram.com/tavsiyekoleksiyoncusu2" target="_blank" rel="noopener noreferrer" style={{ color: "#00BFFF" }}>
          <FaInstagram size={20} />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;