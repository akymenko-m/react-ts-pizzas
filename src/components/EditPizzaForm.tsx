import React, { useState } from "react";
import "./styles.css";
import Pizza from "../models/Pizza";

interface EditPizzaFormProps {
    data: Pizza;
    updatePizza: (newPizza: Pizza) => void;
    handleToggleEdit: () => void;
}

const EditPizzaForm: React.FC<EditPizzaFormProps> = ({
    data,
    updatePizza,
    handleToggleEdit,
}) => {
    const [editPizza, setEditPizza] = useState<Pizza>(data);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setEditPizza({ ...editPizza, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { title, price, img } = editPizza;
        if (title && price && img) {
            updatePizza(editPizza);
            handleToggleEdit();
        }
    };

    return (
        <form onSubmit={handleSubmit} className="edit-form">
            <input
                name="title"
                type="text"
                placeholder="Title"
                value={editPizza.title}
                onChange={handleChange}
            />
            <input
                name="price"
                type="text"
                placeholder="Price"
                value={editPizza.price}
                onChange={handleChange}
            />
            <input
                name="img"
                type="text"
                placeholder="Picture"
                value={editPizza.img}
                onChange={handleChange}
            />
            <button type="submit">Change</button>
        </form>
    );
};

export default EditPizzaForm;
