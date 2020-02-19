import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom';

function SletKategori() {
    
    const [sletKat, setSletKat] = useState();
    const history = useHistory();
    const {katid} = useParams();

    useEffect(() => {

        let url = 'http://localhost:5009/kategorier/' + katid;
        fetch(url, {
            method: 'GET',
        })
        .then(data =>{
            
            return data.json();

        })
        .then(jsonData => {
            setSletKat(jsonData)
        })
        .catch(error =>{
            alert("noget er gået galt: " + error);
        })


    }, [katid])

    const sletKategori = e => {

        e.preventDefault();
        
        let url = 'http://localhost:5009/kategorier/' + katid;
        fetch(url, {

            method: 'DELETE',

        })
        .then(res => {

            res.json();
            alert("Den valgte kategori er nu slettet");
            history.push("/kat_admin");

        })
        .catch(error => {
            alert("noget gik galt: " + error)
        })
    }

    let kategorien = "";

    if(sletKat !== undefined){
        kategorien = (
            <div className="card col-12 mx-auto my-5 p-4">
                <h2 className="card-title">{sletKat.kategoriNavn}</h2>
                <small>{sletKat.kategoriDate}</small>
                <small className="mt-4">Kategori nummer = {sletKat._id}</small>
            </div>
        )
    }


    return (
        <div className="container">
            <h1 className="pt-5">Er du sikker på du vil slette denne kategori?</h1>
            {kategorien}
            <button className="btn btn-danger mr-3" onClick={() => {history.push("/kat_admin")}}>Fortryd</button>
            <button onClick={sletKategori} className="btn btn-success">Slet</button>
        </div>
    )
}

export default SletKategori
