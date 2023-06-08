import React, { useState, useEffect } from "react";
import "./App.css";
import AddPizzaForm from "./components/AddPizzaForm";
import Pizza from "./models/Pizza";
import DisplayPizzas from "./components/DisplayPizzas";
import storage from "./helpers/storage";

const App: React.FC = () => {
    const [pizzasList, setPizzasList] = useState<Pizza[]>(
        storage.load("pizzas-list") ?? []
    );

    useEffect(() => {
        storage.save("pizzas-list", pizzasList);
    }, [pizzasList]);

    const addPizza = (newPizza: Pizza) => {
        setPizzasList([...pizzasList, newPizza]);
    };

    const updatePizza = (newPizza: Pizza) => {
        setPizzasList(
            pizzasList.map((pizza) =>
                pizza.id === newPizza.id ? newPizza : pizza
            )
        );
    };

    const deletePizza = (id: number) => {
        setPizzasList(pizzasList.filter((pizza) => id !== pizza.id));
    };

    console.log(pizzasList);

    return (
        <div className="App">
            <div className="wrap">
                <span className="heading">Our pizzas</span>
                <AddPizzaForm addPizza={addPizza} />

                <DisplayPizzas
                    pizzasList={pizzasList}
                    updatePizza={updatePizza}
                    deletePizza={deletePizza}
                />
            </div>
        </div>
    );
};

export default App;
