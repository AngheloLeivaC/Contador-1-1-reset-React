import { useState } from "react"

export const useCounter = (valorInical = 0) => {
        const [contador, setContador] = useState(valorInical)

        const increment = (valor = 1) => 
            setContador(contador + valor)

        const decrement = (valor = 1, negativo=false) => {
            if(!negativo && contador - valor < 0){
                setContador(0)
                return
            }
            setContador(contador - valor)
        }

        const reset = () => 
            setContador(0)

    
    
  return{
    contador,
    increment,
    decrement,
    reset,
  }
}

