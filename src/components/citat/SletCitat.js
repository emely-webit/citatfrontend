import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'


function SletCitat() {

    const [sletCit, setSletCit] = useState();
    const history = useHistory();
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

            setSletCit(jsonData);

        })
        .catch(function(error){

            alert("noget gik galt" + error)

        })
    },[setSletCit, citid])

    const sletCitat = e => {
        
        e.preventDefault();

        let url = 'http://localhost:5009/citater/' + citid
        fetch(url, {

            method: 'DELETE',

        })
        .then(res =>{

            res.json();
            alert("Det valgte citat er nu slettet")
            history.push("/citat_admin");

        })
        .then(json => {

            return json;

        })
        .catch(error => {

            alert("noget gik galt: " + error);

        })
    }

    let udvalgCitat = "";

    if(sletCit !== undefined){
        udvalgCitat = (
            <div className="card col-12 mx-auto my-5 p-4">
                <h2 className="card-title">{sletCit.titel}</h2>
                <p className="card-text">{sletCit.citatTekst}</p>
                <small>{sletCit.citatDato}</small>
                <small className="mt-4">Kategori nummer = {sletCit.kategori}</small>
            </div>
        )
    }

    return (
        <div className="container">
            <h1 className="mt-5">Dit udvalgte citat</h1>
            {udvalgCitat}
            <button className="btn btn-danger mr-3" onClick={() => {history.push("/citat_admin")}}>Fortryd</button>
            <button onClick={sletCitat} className="btn btn-success">Slet</button>
        </div>
    )
}

export default SletCitat
