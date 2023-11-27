import React from 'react'

const MyCard = ({ stack, title, text, demo }) => {
    return (
        <div className='col-lg-4 mt-4'>
            <div class="card">
                <div className="card-body">
                    <p className='m-0'>{stack}</p>
                </div>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{text}</p>
                    <a href={demo} target='_blank'><button class="btn btn-primary">View demo</button></a>
                </div>
            </div>
        </div>
    )
}

export default MyCard