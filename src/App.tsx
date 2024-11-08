import { ChangeEvent, useState } from "react";

function App() {
  //state (état, données)
  const [fruits, setFruits] = useState<Array<{ id: number; nom: string }>>([
    { id: 1, nom: "Pomme " },
    { id: 2, nom: "Bannane " },
    { id: 3, nom: "Poire " },
    { id: 4, nom: "Abricot " },
    { id: 5, nom: "Ananas " },
  ]);

  const [newFruit, setNewFruit] = useState("");

  const changeFruit = (event: ChangeEvent<HTMLInputElement>) => {
    setNewFruit(event.target.value);
  };


  //comportements
  const dropElements = (id: number) => {

  //1. copie du state

  const fruitsCopie = [...fruits];

  //2. manipuler mon state

  const fruitsUpdate = fruitsCopie.filter(fruits => fruits.id !== id);

  //3. modifier mon state avec le setter

  setFruits(fruitsUpdate);

  };

  const popElement = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    //1. copie de state

    const  fruitsCopie = [...fruits]

    //2. manipulation sur la copie du state

    const id = new Date().getTime();
    const nom = newFruit;
    fruitsCopie.push({id, nom});

    //3. modiffier le state avec le setter

    setFruits(fruitsCopie);
    setNewFruit("")
  };

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
      <form action="/" onSubmit={popElement}>
        <input value={newFruit} type="text" placeholder="Ajouter un fruit..." onChange={changeFruit}/>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default App;

// Gestion du formulaire
//1. création du formulaire
//2. soumission du formulaire
//3. collecte des donnéesss du formulaire
//3a. méthode 1. symc descendante / ascendante (onChange / handleChange)
//3b. méthode 2: documentGetElementById "React" (useRef) /!\