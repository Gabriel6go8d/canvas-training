import React from 'react'

function Footer() {

    return (
        <div className='container-fluid footer'>
            <div className='row justify-content-around text-center text-white align-items-center'>
                <div className='col-5 mt-3 mb-3'>
                    <h4>Canvas and React Practice</h4>
                </div>   
                <div className='col-5 mt-3 mb-3'>
                    <p>Author: Gabriel Gutierrez</p>
                    <a href='mailto:gabrie.ares93@gmail.com'>Send me an Email</a>
                </div>     
            </div>      
        </div>
    )
}

export default Footer
