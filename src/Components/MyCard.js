import React from 'react'

const MyCard = ({ stack, title, text, demo }) => {
    return (
        <div className='col-lg-4 d-flex mt-4'>
            <div class="card">
                <div className="card-body">
                    <p className='m-0'>{stack}</p>
                </div>
                <div class="card-body">
                    <div className='limit mb-3'>
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{text}</p>
                    </div>
                    <a href={demo} target='_blank'><button class="btn btn-primary">View demo</button></a>
                </div>
            </div>
        </div>
    )
}

export default MyCard