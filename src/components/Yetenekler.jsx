const yetenekler = ["JavaScript", "Python", "React", "Node.js", "Flask", "MongoDB"];

const Yetenekler = () => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Yetenekler</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {yetenekler.map((item, idx) => (
          <li key={idx} style={{ margin: "1rem", fontSize: "1.2rem" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Yetenekler;
