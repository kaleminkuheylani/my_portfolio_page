const diller = [
  { dil: "İngilizce", seviye: "Orta (Upper Intermediate)" },
  { dil: "Türkçe", seviye: "Ana Dil" },
];

const YabanciDiller = () => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Yabancı Diller</h2>
      {diller.map((d, i) => (
        <div key={i} style={{ margin: "1rem 0", fontSize: "1.1rem" }}>
          <strong>{d.dil}</strong>: {d.seviye}
        </div>
      ))}
    </div>
  );
};

export default YabanciDiller;
