import React, { useEffect, useState } from "react";

const Contador = () => {
    const [ contador, setContador ] = useState(0);
    
    useEffect(() => {
        document.title = `El contador esta: ${contador}`;
        console.log("contador: ", contador);
    })    


    return(
        <>
            <p>Contador: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        </>
    );
}

export default Contador;