import React, { useReducer, useState } from "react";

const FruitsContext = React.createContext();
const iFruits = [{fruitName: 'apple', id: 1},  {fruitName: 'apple', id: 2},  {fruitName: 'plum', id: 3}];

const FruitsProvider = () => {

    const [fruits, setFruits] = useState(iFruits);

    return (
        <FruitsContext.Provider value={{ fruits }}>

        </FruitsContext.Provider>
    )

}


export const useFruitsContext = () => React.useContext(FruitsContext);

export default FruitsProvider;