import React, { useState } from "react";
import "./styles.css";
import Pizza from "../models/Pizza";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import EditPizzaForm from "./EditPizzaForm";

interface SinglePizzaProps {
    pizza: Pizza;
    updatePizza: (newPizza: Pizza) => void;
    deletePizza: (id: number) => void;
}

const SinglePizza: React.FC<SinglePizzaProps> = ({
    pizza,
    updatePizza,
    deletePizza,
}) => {
    const [edit, setEdit] = useState(false);

    const handleToggleEdit = () => {
        setEdit(!edit);
    };

    const handleDelete = () => {
        deletePizza(pizza.id);
    };

    return (
        <div className="pizza">
            {/* <img
                src={`./react-ts-pizzas/images/${pizza.img}`}
                alt={pizza.title}
            /> */}

            <img src={require(`../assets/${pizza.img}`)} alt={pizza.title} />
            {/* <img src={`../assets/pizza-1.jpg}`} alt={pizza.title} /> */}

            <h2>{pizza.title}</h2>
            <span>{pizza.price}</span>

            <div className="pizza-controls">
                <AiFillEdit onClick={handleToggleEdit} />
                <AiFillDelete onClick={handleDelete} />
            </div>

            {edit ? (
                <EditPizzaForm
                    data={pizza}
                    updatePizza={updatePizza}
                    handleToggleEdit={handleToggleEdit}
                />
            ) : null}
        </div>
    );
};

export default SinglePizza;
