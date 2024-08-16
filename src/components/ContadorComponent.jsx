import { useCounter } from "../hooks/useCounter"

export const ContadorComponent = () => {

    const { contador, increment, reset, decrement } = useCounter(0)

    return (
        <>
            <div className="conteiner">
                <h1>Contador : {contador} </h1>
                <button className="btn btn-primary" onClick={() => increment()}> +1 </button>
                <button className="btn btn-danger" onClick={() => reset()}> Reset </button>
                <button className="btn btn-primary" onClick={() => decrement()}> -1 </button>
            </div>
        </>
    )
}
