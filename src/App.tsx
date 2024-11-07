import { useState } from "react";

function App() {
  //state (état, données)
  const [fruits, setFruits] = useState<Array<{ id: number; nom: string }>>([
    { id: 1, nom: "Pomme " },
    { id: 2, nom: "Bannane " },
    { id: 3, nom: "Poire " },
    { id: 4, nom: "Abricot " },
    { id: 5, nom: "Ananas " },
  ]);

  //comportements
  const dropElements = (id: number) => {
    console.log(id);
  };

  //1. copie du state

  const fruitsCopie = [...fruits];

  //2. manipuler mon state

  const fruitsUpdate = fruitsCopie.filter;

  //Affichage (render)

  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruits) => {
          return (
            <li key={fruits.id}>
              {fruits.nom}
              <button onClick={() => dropElements(fruits.id)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
