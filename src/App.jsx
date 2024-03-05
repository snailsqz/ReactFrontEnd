import Contact from "./assets/Contact";
import Hello from "./assets/Hello";
import Counter from "./assets/Counter";

function App() {
  const helloData = [
    {
      name: "Mike",
      surname: "Tyson",
    },
    {
      name: "Bob",
      surname: "PooPee",
    },
    {
      name: "Adam",
      surname: "Levine",
    },
  ];
  return (
    <div>
      <Counter />
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} surname={data.surname} />
      ))}
      <Contact email="Pawee@gmail.com" phone="0654549633" />
    </div>
  );
}

export default App;
