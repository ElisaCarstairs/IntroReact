export default function Searchbar () {


    function handleInput(e) {
        console.log(e.target.value)
    }
    function handleClick() {
        console.log("Se hizo clic en el botón de Buscar")
    }

    return (
        <>
            <input onChange={handleInput}/>
            <button onClick={handleClick}>Buscar</button>
        </>
        //<input onChange={handleInput}/> //onChange se ejecuta cuando el valor del input cambia
    )

}
