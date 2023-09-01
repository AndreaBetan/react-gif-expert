import React from 'react'

export const GifItem = ({ title, url }) => {

    return (

        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className='card'>
                        <img src={url} className="card-img-top" alt={title} />
                    <h5 className="card-title">{title}</h5>
                </div>
            </div>
        </div>
    )
}
