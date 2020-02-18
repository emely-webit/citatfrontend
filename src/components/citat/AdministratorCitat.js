import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import AlleCitater from './AlleCitater'


function AdministratorCitat() {
    return (
        <div>
            <div className="container">
                <h1 className="mt-5">Alle citater</h1>
                <article className="border border-dark p-2 row my-5">
                    <div className="col-10">
                        <div className="row">
                            <p className="col-3">Dato</p>
                            <h2 className="h6 col-3 card-title text-dark p1">Overskrift</h2>
                            <p className="col-3">Citat tekst</p>
                            <p className="col-3">Kategori</p>
                        </div>
                    </div>
                    
                    <p className="col-1">Ret</p>
                    <p className="col-1">Slet</p>

                </article>
                
                <Link to="/citat_opret" className="text-dark h5"> <FontAwesomeIcon className="text-success" icon={faPlusCircle}/>Opret nyt citat</Link>
            </div>
            <AlleCitater/>
        </div>
    )
}

export default AdministratorCitat
