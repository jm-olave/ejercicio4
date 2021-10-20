import React from 'react'

export const Card = ({characters = []}) => {
    return (
        <div className = "row">
            {
                characters.map((item, index) =>(
                    <div key ={index} className="col">
                        <div  class="card" >
                            <img class="card-img-top" src = {item.image} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">{item.name}</h5>
                                <p class="card-text">Gender: {item.gender}</p>
                                <p class="card-text">Status: {item.status}</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
            
        
    )
}
