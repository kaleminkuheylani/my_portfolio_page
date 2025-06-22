import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ sekmeler, aktifSekme, onSekmeChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // İlk çalıştırma
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      style={{
        backgroundColor: "#000",
        color: "#00BFFF",
        padding: "1rem 2rem",
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Sol taraf: Logo */}
        <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Ahmet Yıldız</div>

        {/* Orta veya mobilde boş */}
        {!isMobile && (
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
                  borderBottom:
                    aktifSekme === sekme.id ? "2px solid #00BFFF" : "none",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                {sekme.label}
              </button>
            ))}
          </div>
        )}

        {/* Sağ taraf: hamburger menü */}
        {isMobile && (
          <button
            onClick={toggleMenu}
            style={{
              background: "none",
              border: "none",
              color: "#00BFFF",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        )}
      </div>

      {/* Mobilde açılır menü */}
      {isMobile && menuOpen && (
        <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {sekmeler.map((sekme) => (
            <button
              key={sekme.id}
              onClick={() => {
                onSekmeChange(sekme.id);
                setMenuOpen(false);
              }}
              style={{
                background: "none",
                border: "none",
                color: aktifSekme === sekme.id ? "#00BFFF" : "#aaa",
                fontWeight: "500",
                borderBottom:
                  aktifSekme === sekme.id ? "2px solid #00BFFF" : "none",
                cursor: "pointer",
                fontSize: "1rem",
                textAlign: "left",
              }}
            >
              {sekme.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
