import { useFruitsContext } from "./FruitsProvider";

const FruitsCounter = () => {

    const { fruits } = useFruitsContext();

    return (
        <button>Guess the number: {fruits.length}</button>
    )
        

}

export default FruitsCounter;