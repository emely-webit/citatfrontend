import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import AlleKategorier from './AlleKategorier'


function AdministratorKategori() {
    return (
        <div className="container">
            <h1 className="mt-5">Alle kategorier</h1>
            <article className="border border-dark p-2 row my-5">
                <div className="col-10">
                    <div className="row">
                        <p className="col-6">Dato</p>
                        <h2 className="h6 col-6 card-title text-dark p1">Overskrift</h2>
                    </div>
                </div>
                
                <p className="col-1">Ret</p>
                <p className="col-1">Slet</p>

            </article>
            
            <Link to="/kat_opret" className="text-dark h5"> <FontAwesomeIcon className="text-success" icon={faPlusCircle}/>Opret ny kategori</Link>
            <AlleKategorier/>
        </div>
    )
}

export default AdministratorKategori
