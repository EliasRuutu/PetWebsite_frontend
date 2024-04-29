import * as React from "react";
import QRCode from 'react-qr-code'

const QRcodeGenerater = (props) => {
    const destinationUrl = `http://www.pawtrack.pet/tag/${props.info}`
    return(
        <>
        <div className="bg-[#FFFF] p-8 rounded-3xl">
            <QRCode className="QRcode-to-download" value={destinationUrl} size={150} fgcolor="#FFFF"/>
        </div>        
        </>
    )
}

export default QRcodeGenerater




// const QRcodeGenerater = (props) => {

//     const [url, setUrl] = useState('');
//     const [qr, setQr] = useState('');

//     const destinationUrl = `http://www.pawtrack.pet/tag/${props.info}`

//     QRCode.toDataURL(destinationUrl, { width: 300 }, (err, url) => {
//         if (err) return console.error(err);
//         setQr(destinationUrl);
//       });
//     return(
//         <>
//         <div className="bg-[#FFFF] p-8 rounded-3xl">
//         {qr && <img src={qr} alt="QR Code" />}
//         </div>        
//         </>
//     )
// }

// import * as React from "react";
// import QRCode from 'react-qr-code';

// const QRcodeGenerater = (props) => {
//     const [imageUrl, setImageUrl] = React.useState("");
//     const destinationUrl = `http://www.pawtrack.pet/tag/${props.info}`;

//     React.useEffect(() => {
//         // Create a canvas element to convert SVG to Image
//         const canvas = document.createElement("canvas");
//         const svgElement = document.querySelector(".QRcode-to-download");
//         if (svgElement) {
//             const xml = new XMLSerializer().serializeToString(svgElement);
//             const svg64 = btoa(xml);
//             const b64Start = 'data:image/svg+xml;base64,';
//             const image64 = b64Start + svg64;
//             const img = new Image();

//             img.onload = () => {
//                 canvas.width = img.width;
//                 canvas.height = img.height;

//                 const context = canvas.getContext("2d");
//                 context.clearRect(0, 0, canvas.width, canvas.height);
//                 context.drawImage(img, 0, 0);

//                 // Set the converted image as the imageUrl state
//                 setImageUrl(canvas.toDataURL("image/png"));
//             };

//             img.src = image64;
//         }
//     }, [destinationUrl]);

//     return(
//         <div className="bg-[#FFFF] p-8 rounded-3xl">
//             {imageUrl ? (
//                 <img className="QRcode-to-download" src={imageUrl} alt="QR Code" />
//             ) : (
//                 // Keep the original SVG QR code until image conversion is done
//                 <QRCode className="QRcode-to-download" value={destinationUrl} size={150} fgColor="#000000" />
//             )}
//         </div>
//     );
// };

// export default QRcodeGenerater;
