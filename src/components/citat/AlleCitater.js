import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

function AlleCitater() {

    const [citater, setCitater] = useState({})

    useEffect(() => {
        
        let url = 'http://localhost:5009/citater/allemedkategori'
        fetch(url, {
            method: 'GET'
        })
        .then(function(data){
            return data.json()
        })
        .then(function(jsonData){            
            console.log(jsonData);

            setCitater(jsonData)
        })
        .catch(function(error){
            alert("der er sket en fejl: " + error)
        })
    },[])

    let citatListe = "";

    if(citater.length > 0){
        citatListe = citater.map(cit =>{
            return(
                <div className="border border-dark p-2 row my-5" key={cit._id}>
                    <Link className="col-10" to={'/udvalgt_citat/' + cit._id} >
                        <div className="row">
                            <p className="col-3">{cit.citatDato}</p>
                            <h2 className="h6 col-3 card-title text-dark p1">{cit.titel}</h2>
                            <p className="col-3">{cit.citatTekst.length > 20 ? cit.citatTekst.substr(0,20) + "...." : cit.citatTekst}</p>
                            <p className="col-3">{cit.kategori.kategoriNavn}</p>
                        </div>
                    </Link>
                    <Link className="col-1 text-warning h4" to={'/citat_ret/'+ cit._id}><FontAwesomeIcon icon={faPencilAlt} /></Link>
                    <Link className="col-1 text-danger h4" to={'/citat_slet/'+ cit._id}><FontAwesomeIcon icon={faTimesCircle} /></Link>
                </div>
            )
        })
    }

    return (
        <div className="container">
            {citatListe}
        </div>
    )
}

export default AlleCitater
