import React, { useState } from "react";
import uniqid from "uniqid";
import "../estilo.css";

const ListadoDeNombres = () => {

    const [nombre, setNombre] = useState("");
    const [listaDeNombres, setListaDeNombres] = useState([]);
    const [modoEdicion, setModoEdicion] = useState(false);
    const [id,setId] = useState("");
    const [error, setError] = useState(null);

    const addNombre = (e) => {
        e.preventDefault();
        if(!nombre.trim()){ 
            setError("El campo nombre esta vacío")
            return;
        }
        const nuevoNombre = {
            id: uniqid(),
            tituloNombre: nombre
        }
        setListaDeNombres([...listaDeNombres, nuevoNombre])
        setNombre('')
        setError(null);
    }

    const deleteNombre = (id) => {
        const nuevoArray = listaDeNombres.filter(item => item.id !== id)
        setListaDeNombres(nuevoArray)
    }

    const editar = (item) => {
        setModoEdicion(true);
        setNombre(item.tituloNombre);
        setId(item.id)
    }    
    
    const editarNombre = (e) =>{
        e.preventDefault()
        const NuevoArray = listaDeNombres
        .map(item => item.id === id ? {id:item.id, tituloNombre:nombre}: item)
        setListaDeNombres(NuevoArray)
        setModoEdicion(false);
        setNombre("");
    }

    return (
        <div>
            <div className="row">
                <div className="col">
                    <h2>Listado de nombres:</h2>
                    <ul className="list-group">
                        {
                            listaDeNombres.map(item =>
                                <li key="(item.id)" 
                                style={{fontFamily:'Bebas Neue', fontSize:25}}
                                className="list-group-item">{item.tituloNombre}
                                    <button
                                        onClick={() => { deleteNombre(item.id) }}
                                        className="btn btn-outline-danger float-right"
                                        style={{fontFamily:'Bebas Neue', fontSize:25}}
                                        >BORRAR NOMBRE</button>
                                    <button
                                        onClick={() => { editar(item) }}
                                        className="btn btn-outline-warning float-right"
                                        style={{fontFamily:'Bebas Neue', fontSize:25}}
                                        >EDITAR NOMBRE</button>
                                </li>)
                        }
                    </ul>
                </div>
                <div className="col">
                    <h2>Formulario para añadir nombres.</h2>
                    <form onSubmit={modoEdicion ? editarNombre : addNombre} className="form-group">
                        <input
                            onChange={(e) => { setNombre(e.target.value) }}
                            className="form-control mb-3"
                            type="text"
                            placeholder="Introduce el nombre"
                            value={nombre}
                            style={{fontFamily:'Bebas Neue', fontSize:25}}
                        >
                        </input>
                        <input className="btn btn-outline-dark"
                         type="submit" 
                         value={modoEdicion ? "EDITAR NOMBRE" : "REGISTRAR NOMBRE"}
                         style={{fontFamily:'Bebas Neue', fontSize:25, width:550}}
                         ></input>
                    </form>
                    {
                        error != null ? (<div className="alert alert-danger"
                        style={{fontFamily:'Bebas Neue', fontSize:25}}>
                            {error}
                        </div>):(
                            <div></div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ListadoDeNombres;