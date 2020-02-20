import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'

function RetCitat() {
    const [retCit, setRetCit] = useState({});
    const [katNavn, setKatNavn] = useState({})
    const history = useHistory();
    const {citid} = useParams();

    useEffect(() =>{

        let url = 'http://localhost:5009/citater/' + citid
        fetch(url, {

            method: 'GET',

        })
        .then(function(data){

            return data.json();

        })
        .then(function(jsonData){

            setRetCit({titel: jsonData.titel, citatTekst: jsonData.citatTekst, kategoriId: jsonData.kategori});

        })
        .catch(function(error){

            alert("noget gik galt" + error)

        })
    },[citid])


    useEffect(() => {
        
        let url = 'http://localhost:5009/kategorier';
        fetch(url, {
            
            method: 'GET'

        })
        .then(function(data){

            return data.json();

        })
        .then(function(jsonData){

            // henter dataen omkrin kategorinavne
            setKatNavn(jsonData)
            
            // Gør at man godt kan vælge den første i rækken
        })
       
        .catch(function(error){
            alert("noget gik galt: " + error)
        })

    }, [])


    const retCitat = e =>{

        e.preventDefault();
        
        let url = 'http://localhost:5009/citater/' + citid
        fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',   
            },
            body: JSON.stringify(retCit),
        })
        .then(res => {
            alert("Citatet er rettet");
            history.push("/citat_admin");
        })
        .catch(error => {
            alert("noget gik galt: " + error);
        })

    }

    let katListe = "";
    if(katNavn.length > 0){
        katListe = katNavn.map(ktg => {
            return(
                <option key={ktg._id} value={ktg._id}>{ktg.kategoriNavn}</option>
            )
        })
    }
    else{
        return(
            <div>sket en fejl</div>
        )
    }


    return (
        <div className="container">
            <h1 className="py-5">Ret citat</h1>
            <form onSubmit={retCitat}>
                <div className="form-group">
                    <input className="form-control" type="text" name="citTitel" defaultValue={retCit.titel} onChange={(e) => setRetCit({...retCit, titel: e.target.value})}/>
                </div>
                <div className="form-group">
                    <textarea className="form-control" defaultValue={retCit.citatTekst} name="citatet" id="citatet" cols="30" rows="10" onChange={(e) => setRetCit({...retCit, citatTekst: e.target.value})}></textarea>
                </div>
                <div className="form-group">
                    <select value={retCit.kategoriId} className="form-control" onChange={(e) => setRetCit({...retCit, kategoriId: e.target.value})}>{katListe}</select>
                </div>
                <button className="btn btn-danger mr-3" type="button" onClick={() => {history.push("/citat_admin")}}>Fortryd</button>
                <button className="btn btn-success" type="submit">Gem citat</button>
            </form>
        </div>
    )
}

export default RetCitat
