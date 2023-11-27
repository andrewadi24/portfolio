const Footer = () => {
    return (
        <div className='footer border-top mt-5 p-3'>
            <div className='container'>
                {/* <div className='d-flex justify-content-between'>
                    <div className='left'>
                    <h3>Andrew's Portfolio </h3>   andrew.adisaputra1@gmail.com
                    <p>Full stack web developer</p>
                    </div>
                    <div className='right'>
                        <h3>Media</h3>
                    </div>
                </div> */}
                <div className='text-center'>
                    <p className="mb-0">&copy; {new Date().getFullYear()} Andrew's Portfolio. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;