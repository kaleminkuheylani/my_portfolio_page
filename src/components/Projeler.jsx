const projeler = [
  {
    isim: "Haber Takip Uygulaması",
    aciklama: "React ve Express ile geliştirilmiş basit bir haber takip sistemi.",
  },
  {
    isim: "Kişisel Zihin Haritası",
    aciklama: "Spiritüel ve kişisel gelişim odaklı interaktif blog projesi.",
  },
];

const Projeler = () => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Projeler</h2>
      {projeler.map((p, idx) => (
        <div key={idx} style={{ margin: "1.5rem 0", fontSize: "1.1rem" }}>
          <strong>{p.isim}</strong>
          <p>{p.aciklama}</p>
        </div>
      ))}
    </div>
  );
};

export default Projeler;
