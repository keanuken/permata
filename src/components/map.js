import React from 'react';
import PropTypes from "prop-types"

function Gmaps({sumber, lebar, tinggi}){
    return (
            <iframe 
                src={sumber}
                width= {lebar}
                height={tinggi} 
                style={{border:"0"}} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
    );
}

Gmaps.propTypes ={
    sumber: PropTypes.string,
    lebar: PropTypes.string,
    tinggi: PropTypes.string,
}

Gmaps.defaultProps ={
    sumber: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.2332307754625!2d107.61466762844604!3d-6.898626099566974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64e746df771%3A0x11d6232ba09631e4!2sJl.%20Surapati%20No.21%2C%20Lebakgede%2C%20Kecamatan%20Coblong%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040132!5e0!3m2!1sid!2sid!4v1709950817850!5m2!1sid!2sid',
    lebar: '600',
    tinggi: '450'
}

export default Gmaps;