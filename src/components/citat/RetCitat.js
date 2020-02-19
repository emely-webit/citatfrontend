import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'

function RetCitat() {
    const [retCit, setRetCit] = useState({});
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

            setRetCit({titel: jsonData.titel, citatTekst: jsonData.citatTekst});

        })
        .catch(function(error){

            alert("noget gik galt" + error)

        })
    },[citid])


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
               
                <button className="btn btn-success mr-3" type="button" onClick={() => {history.push("/citat_admin")}}>Fortryd</button>
                <button className="btn btn-success" type="submit">Gem citat</button>
            </form>
        </div>
    )
}

export default RetCitat
