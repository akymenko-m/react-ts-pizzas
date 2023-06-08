import React, { useState } from "react";
import "./styles.css";
import Pizza from "../models/Pizza";

interface AddPizzaFormProps {
    addPizza: (newPizza: Pizza) => void;
}

const initState = {
    title: "",
    price: "",
    img: "",
};

interface IPizza {
    title: string;
    price: string;
    img: string;
}

const AddPizzaForm: React.FC<AddPizzaFormProps> = ({ addPizza }) => {
    const [newPizza, setNewPizza] = useState<IPizza>(initState);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setNewPizza({ ...newPizza, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(newPizza);

        const { title, price, img } = newPizza;
        if (title && price && img) {
            addPizza({ title, price: Number(price), img, id: Date.now() });
            setNewPizza(initState);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="title"
                type="text"
                placeholder="Title"
                value={newPizza.title}
                onChange={handleChange}
            />
            <input
                name="price"
                type="text"
                placeholder="Price"
                value={newPizza.price}
                onChange={handleChange}
            />
            <input
                name="img"
                type="text"
                placeholder="Picture"
                value={newPizza.img}
                onChange={handleChange}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddPizzaForm;
