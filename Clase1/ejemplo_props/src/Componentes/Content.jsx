export default function Content (props) {
    return (
        <main>
            <section>
                <h2>Introducción</h2>
                <p>Bienvenido a nuestro sitio web</p>
            </section>
            <h2>Su curso es {props.user.curso}</h2>
            <section>
                <h2>Información</h2>
                <p>Estos son algunos detalles importantes</p>
                <p>Nombre: {props.user.name}</p>
                <p>Edad: {props.user.age}</p>
            </section>
            <section>
                <h2>Contacto</h2>
                <p>Si tienes alguna pregunta, no dudes en contactarnos</p>
            </section>
        </main>
    )

}