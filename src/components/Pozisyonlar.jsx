// src/pages/Pozisyonlar.jsx
import { motion } from "framer-motion";

const pozisyonlar = [
  "Web Designer",
  "UI/UX Designer",
  "Backend Developer",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Pozisyonlar = () => {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#00BFFF",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Pozisyonlarım
        </h2>
        {pozisyonlar.map((pozisyon, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            style={{
              fontSize: "1.5rem",
              margin: "1rem 0",
              fontWeight: "500",
            }}
          >
            {pozisyon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Pozisyonlar;
