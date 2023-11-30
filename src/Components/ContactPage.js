import React, {useEffect} from 'react'

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)

        return () => {

        }
    }, [])
    return (
        <div className='container'>
            <h1 className='h1_slash'>Contact</h1>
            <p>who am i?</p>



            <div className='row mt-5'>
                <h2 className='h1_before mb-4'>contact-me</h2>
                <div className='col-6'>
                    <input type="text" className="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" />
                </div>
                <div className='col-6'>
                    <input type="text" className="form-control" placeholder="Email" aria-label="Name" aria-describedby="basic-addon1" />
                </div>
                <div className='col-12 mt-4'>
                    <input type="text" className="form-control" placeholder="Title" aria-label="Name" aria-describedby="basic-addon1" />
                </div>
                <div className='col-12 mt-4'>
                    <textarea className="form-control" placeholder="Message" id="exampleFormControlTextarea1" rows="7"></textarea>
                </div>
                <div className='col-12 mt-4'>
                    <button class="btn btn-primary">Send</button>
                </div>
            </div>
            <div className='row mt-5'>
                <h2 className='h1_before'>contact-details</h2>
                <div className='col-lg-6 mt-4'>
                    <div className='card p-3'>
                        <h5>Phone: </h5>
                        <p>+61 422 264 891</p>
                    </div>
                </div>
                <div className='col-lg-6 mt-4'>
                    <div className='card p-3'>
                        <h5>Email: </h5>
                        <p>andrew.adisaputra1@gmail.com</p>
                    </div>
                </div>
                <div className='col-12 mt-4'>
                    <div className='card p-3'>
                        <h5>Or get in touch with  me on:</h5>
                        <div className='row'>
                            <div className=''>
                                <a href='https://www.linkedin.com/in/andrew-lee-8a1b761a2/' target='_blank'><i class="fab fa-linkedin fa-2x"></i></a>
                                <p>@andrew adisaputra</p>
                            </div>
                            <div className='w-auto'>
                                <i className="fab fa-instagram fa-2x"></i>
                                <p>@andrew.adisaputra</p>
                            </div>
                            <div className=''>
                                <i className="fab fa-whatsapp fa-2x"></i>
                                <p>+62 816 399 399</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactPage