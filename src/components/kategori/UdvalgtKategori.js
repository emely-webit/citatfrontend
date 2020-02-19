import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'


function UdvalgtKategori() {
    const [enKat, setEnKat] = useState({})
    const {katid} = useParams();

    useEffect(() => {

        let url = 'http://localhost:5009/citater/kategori/' + katid
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
    }, [katid])

    let kategoriCitater = "";

    if(enKat.length > 0){
        kategoriCitater = enKat.map(kat =>{ 
            return (
             <div className="card col-12 mx-auto my-5 p-4" key={kat._id}>
                <h2 className="card-title">{kat.titel}</h2>
                <small>{kat.citatTekst}</small>
            </div>
            )
        })
    }
    else{
        return(
            <div>Citaterne er på vej</div>
        )
    }

    return (
        <div className="container">
            <h1>Citaterne inden for din valgte kategori</h1>
            {kategoriCitater}
        </div>
    )
}

export default UdvalgtKategori
