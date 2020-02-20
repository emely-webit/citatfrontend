import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

function OpretCitat() {

    const [opCitat, setOpCitat] = useState({})
    const history = useHistory();
    const [katNavn, setKatNavn] = useState({})

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
            setOpCitat({kategoriId: jsonData[0]._id})
        })
       
        .catch(function(error){
            alert("noget gik galt: " + error)
        })

    }, [])

    const handleSubmit = e => {
        e.preventDefault();

        let url = 'http://localhost:5009/citater/'
        fetch(url, {
            method: 'POST',

            headers:{
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify(opCitat),
        })
        .then(function(data){
            console.log(data);
            alert("Dit citat er nu oprettet");
            history.push("/citat_admin")
        })
        .catch(function(error){
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
            <h1 className="py-5">Opret et nyt citat</h1>
            
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input name="overskrift" onChange={(e) => setOpCitat({...opCitat, titel: e.target.value})} type="text" className="form-control" placeholder="Citatets titel"/>
                </div>
                <div className="form-group">
                    <textarea name="citattekst" rows="3" onChange={(e) => setOpCitat({...opCitat, citatTekst: e.target.value})} className="form-control" placeholder="Citatets tekst....."></textarea>
                </div>
                <div className="form-group">
                    <select value={opCitat.kategoriId} className="form-control" onChange={(e) => setOpCitat({...opCitat, kategoriId: e.target.value})}>{katListe}</select>
                </div>
                <button type="button" onClick={() => {history.push("/citat_admin")}} className="btn btn-danger mr-3">Fortryd</button>
                <button type="submit" className="btn btn-success">Gem Citat</button>
            </form>
        </div>
    )
}

export default OpretCitat
