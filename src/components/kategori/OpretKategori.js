import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

function OpretKategori() {
    const [opKat, setOpKat] = useState({})
    const history = useHistory();
    

    const handleSubmit = e => {
        e.preventDefault();

        let url = 'http://localhost:5009/kategorier/'
        fetch(url, {
            method: 'POST',

            headers:{
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify(opKat),
        })
        .then(function(data){
            console.log(data);
            alert("Din kategori er nu oprettet");
            history.push("/kat_admin")
        })
        .catch(function(error){
            alert("noget gik galt: " + error);
        })
    }

    return (
        <div className="container">
            <h1 className="py-5">Opret en ny kategori</h1>
            
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input name="overskrift" onChange={(e) => setOpKat({...opKat, kategoriNavn: e.target.value})} type="text" className="form-control" placeholder="Kategoriets titel"/>
                </div>
                <button type="button" onClick={() => {history.push("/kat_admin")}} className="btn btn-danger mr-3">Fortryd</button>
                <button type="submit" className="btn btn-success">Gem Kategori</button>
            </form>
        </div>
    )
}

export default OpretKategori
