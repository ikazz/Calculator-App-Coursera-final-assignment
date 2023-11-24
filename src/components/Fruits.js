
import useFruitsContext from "./FruitsProvider";


const Fruits = () => {
    const { fruits } = useFruitsContext();

    return (
        <div>
            {fruits.map(f => <p key={f.id}>{f.fruitName}</p>)}
        </div>
    )
}

export default Fruits;