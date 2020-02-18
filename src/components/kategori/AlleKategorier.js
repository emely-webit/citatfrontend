import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons'


function AlleKategorier() {

    const [kat, setKat] = useState({})

    useEffect(() => {
        
        let url = 'http://localhost:5009/kategorier';
        fetch(url, {
            
            method: 'GET'

        })
        .then(function(data){

            return data.json();

        })
        .then(function(jsonData){
            // console.log(jsonData);
            setKat(jsonData)
        })
        .catch(function(error){
            alert("noget gik galt: " + error)
        })

    }, [])

    let katListe = "";

    if(kat.length > 0){
        katListe = kat.map(ktg => {
            
            return(
                <div className="border border-dark p-2 row my-5" key={ktg._id}>
                    <Link className="col-10" to={'/udvalgt_kat/' + ktg._id} >
                        <div className="row">
                            <p className="col-6">{ktg.kategoriDate}</p>
                            <h2 className="h6 col-6 card-title text-dark p1">{ktg.kategoriNavn}</h2>
                        </div>
                    </Link>
                    <Link className="col-1 text-warning h4" to={'/kat_ret/' + ktg._id}><FontAwesomeIcon icon={faPencilAlt} /></Link>
                    <Link className="col-1 text-danger h4" to={'/kat_slet/' + ktg._id}><FontAwesomeIcon icon={faTimesCircle} /></Link>
                </div>
            )
        })
    }
    else{
        return(
            <p>Kategorier er på vej</p>
        )
    }

    return (
        <div>
            {katListe}
        </div>
    )
}

export default AlleKategorier
