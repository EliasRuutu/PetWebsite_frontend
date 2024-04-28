import React from 'react'
import QRCode from 'react-qr-code'

const QRcodeGenerater = (props) => {
    return(
        <>
            <QRCode value={props.info}/>
        </>
    )
}

export default QRcodeGenerater