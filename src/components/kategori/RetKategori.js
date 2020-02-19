import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'

function RetKategori() {
    
    const [retKat, setRetKat] = useState({})
    const history = useHistory();
    const {katid} = useParams();

    console.log(katid);

    useEffect(() => {

        let url = 'http://localhost:5009/kategorier/' + katid;
        fetch(url, {
            method: 'GET',
        })
        .then(data =>{
            
            return data.json();

        })
        .then(jsonData => {
            setRetKat({kategoriNavn: jsonData.kategoriNavn})
        })
        .catch(error =>{
            alert("noget er gået galt: " + error);
        })


    }, [katid])

    const retKategori = e => {

        e.preventDefault();
        
        let url = 'http://localhost:5009/kategorier/' + katid;
        fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(retKat),
        })
        .then(res => {
            alert("Kategorien er rettet");
            history.push("/kat_admin");
        })
        .catch(error => {
            alert("noget gik galt: " + error);
        })
        
    }

    return (
        <div className="container">
            <h1 className="py-5">Ret kategori</h1>
            <form onSubmit={retKategori}>
                <div className="form-group">
                    <input type="text" name="kategorinavn" defaultValue={retKat.kategoriNavn} onChange={(e) => setRetKat({...retKat, kategoriNavn: e.target.value})} className="form-control"/>
                </div>
                <button className="btn btn-success mr-3" type="button" onClick={() => {history.push("/kat_admin")}}>Fortryd</button>
                <button className="btn btn-success" type="submit">Gem kategori</button>

            </form>
        </div>
    )
}

export default RetKategori
