import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'


function UdvalgtKategori() {
    const [enKat, setEnKat] = useState()
    const {katid} = useParams();

    useEffect(() => {

        let url = 'http://localhost:5009/kategorier/' + katid
        fetch(url, {
            method: 'GET',
        })
        .then(function(data){
            return data.json();
        })
        .then(function(jsonData){
            setEnKat(jsonData);
        })
        .catch(function(error){
            alert("der er sket en fejl: " + error);
        })
    }, [katid, setEnKat])

    let kategorien = "";

    if(enKat !== undefined){
        kategorien = (
             <div className="card col-12 mx-auto my-5 p-4">
                <h2 className="card-title">{enKat.kategoriNavn}</h2>
                <small>{enKat.kategoriDate}</small>
            </div>
        )
    }

    return (
        <div className="container">
            <h1>Din udvalgte kategori</h1>
            {kategorien}
        </div>
    )
}

export default UdvalgtKategori
