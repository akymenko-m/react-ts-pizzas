import Pizza from "../models/Pizza";

const save: (key: string, value: Pizza[]) => void = (key, value) => {
    try {
        const serializedState = JSON.stringify(value);
        localStorage.setItem(key, serializedState);
    } catch (error: any) {
        console.error("Set state error: ", error.message);
    }
};

const load: (key: string) => Pizza[] = (key) => {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState === null
            ? undefined
            : JSON.parse(serializedState);
    } catch (error: any) {
        console.error("Get state error: ", error.message);
    }
};

const remove: (key: string) => void = (key) => {
    try {
        const serializedState = localStorage.removeItem(key);
        return serializedState;
    } catch (error: any) {
        console.error("Get state error: ", error.message);
    }
};

export default Object.assign(
    {},
    {
        save,
        load,
        remove,
    }
);
