import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function UdvalgtCitat() {
    const [citat, setCitat] = useState();
    const {citid} = useParams();

    console.log(citid);

    useEffect(() =>{
        let url = 'http://localhost:5009/citater/' + citid
        fetch(url, {
            method: 'GET',
        })
        .then(function(data){
            return data.json();
        })
        .then(function(jsonData){
            setCitat(jsonData);
        })
        .catch(function(error){
            alert("noget gik galt" + error)
        })
    },[setCitat, citid])

    let citatet = "";

    if(citat !== undefined){
        citatet = (
            <div className="card col-12 mx-auto my-5 p-4">
                <h2 className="card-title">{citat.titel}</h2>
                <p className="card-text">{citat.citatTekst}</p>
                <small>{citat.citatDato}</small>
                <small className="mt-4">Kategori nummer = {citat.kategori}</small>
            </div>
        )
    }

    return (
        <div className="container">
            <h1 className="mt-5">Dit udvalgte citat</h1>
            {citatet}
        </div>
    )
}

export default UdvalgtCitat
