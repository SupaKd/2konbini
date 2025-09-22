// src/components/Equipe.jsx

const TEAM = [
  {
    id: 1,
    name: "Kevin",
    role: "Co-gérant",
    photo: "/a1.jpeg",
  },
  {
    id: 2,
    name: "Bea",
    role: "Associé",
    photo: "/a2.jpeg",
  },
  {
    id: 3,
    name: "Soso",
    role: "Co-gérant",
    photo: "/a3.jpeg",
  },
];

 function Equipe() {
  return (
    <section className="equipe" aria-labelledby="equipe-title">
      <div className="equipe__header">
        <h2 id="equipe-title" className="equipeh1">Notre équipe</h2>
        <p>Des passionnés qui font vivre le konbini au quotidien.</p>
      </div>

      <div className="equipe__grid">
        {TEAM.map((m) => (
          <article key={m.id} className="equipe__card">
            <div className="equipe__avatar">
              <img src={m.photo} alt={m.name} loading="lazy" decoding="async" />
            </div>
            <h3 className="equipe__name">{m.name}</h3>
            <p className="equipe__role">{m.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
export default Equipe;
