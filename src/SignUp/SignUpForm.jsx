import { Input, step } from "@material-tailwind/react";
import { InputWithDropdown } from "../components/telephone";
import PasswordInput from "../components/passwordInput";
import ConfirmPasswordInput from "../components/confirmPasswordInput";
import { useNavigate } from "react-router-dom";
import * as React from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";



const SignUpForm = () => {
    const navigate = useNavigate();
    const clientPassword = useSelector((state) => state.client.clientPassword);

    const handleIniciaClick = () => {
        window.scrollTo(0,0);
        navigate("/");
    }
    const [email, setEmail] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [countryInfo, setCountryInfo] = useState();
    const [country, setCountry] = useState();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    React.useEffect(() => {
        setPassword(clientPassword)
      }, [clientPassword]);

    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    const handleSignUpClick = () => {
        console.log("-----------Sign Up-------------");
        console.log("----------------password---->", password)
        if(password === confirmPassword && isValidEmail && email != "" && password != "" && countryInfo != "" && confirmPassword != ""){
          axios.post('http://localhost:5000/signup', {
            email: email,
            phone: country+countryInfo,
            password: password
          })
            .then((response) => {
                toast.success('Éxito!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                window.location.href = "/";
            });
        }
        else if(email == "" && password == "" && countryInfo == "" && confirmPassword == "") {
            toast.error('Por favor ingrese su información.', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }else if(email == "") {
            toast.error('Por favor ingrese su correo electrónico.', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }else if(password == "") {
            toast.error('Por favor ingrese su contraseña.', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }else if(countryInfo == "") {
            toast.error('Por favor ingrese su número de teléfono.', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }else if(confirmPassword == "") {
            toast.error('Por favor ingrese su contraseña de confirmación.', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const handleChangeSignup = (e) => {
            setEmail(e.target.value);
            setIsValidEmail(validateEmail(e.target.value))
    }
    
    return(
        <div className="bg-[url('./assets/images/signupback.svg')] relative w-screen h-screen py-4 bg-no-repeat bg-cover bg-center flex justify-end items-center">
            <div className="absolute -translate-x-1/3 -translate-y-1/2 float-end top-1/2  w-full h-[650px] max-w-[550px] max-h-screen px-10 py-10 flex flex-col justify-around">
                <h1 className="font-['Poppins'] text-[#155263] font-bold text-4xl flex justify-center">¡Bienvenido a Paw Track!</h1>
                <h1 className="font-['Poppins'] text-[#155263] font-bold text-md flex justify-center">Lorem ipsum dolor sit amet, consectetur adi piscing.</h1>
                <div className="w-full">
                    <Input className="p-2 rounded-md bg-[#F8F8F8] indent-1.5" onChange={(e) => {setEmail(e.target.value); setIsValidEmail(validateEmail(e.target.value))}} placeholder="Correo Electronico" />
                    {!isValidEmail && <p style={{color:'red', fontFamily:'Poppins', float:'right'}}>Por favor, introduce una dirección de correo electrónico válida.</p> }
                </div>
                <div className="w-full">
                   <InputWithDropdown sendDataToParent={setCountryInfo} sendData1ToParent={setCountry}/>
                </div>
                <div className="w-full">
                    <PasswordInput sendPasswordToParent={setPassword} />
                </div>
                <div className="w-full">
                    <ConfirmPasswordInput sendConfirmPasswordToParent={setConfirmPassword} />
                </div>
                <button
                    className="w-full font-['Poppins'] h-[40px] font-bold bg-[#F1B21B] hover:bg-white hover:text-[#F1B21B] hover:border hover:border-[#F1B21B] text-sm rounded-md text-white transition-colors duration-300 ease-in-out"
                    onClick={ handleSignUpClick }
                    >
                    INICIAR SESIÓN
                </button>
                <div className="flex flex-row justify-evenly items-center">
                    <span className="font-['Poppins'] text-[#155263] text-sm">Puedes crear tu cuenta con:</span>
                    <a href="#">
                        <svg width="85" height="53" viewBox="0 0 85 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_122_5411)">
                            <rect x="9" y="7" width="66.5639" height="34.1353" rx="5" fill="white"/>
                            </g>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M50.2137 24.2488C50.2137 23.684 50.163 23.141 50.0689 22.6196H42.5674V25.7006H46.854C46.6693 26.6962 46.1081 27.5398 45.2646 28.1046V30.103H47.8387C49.3448 28.7164 50.2137 26.6745 50.2137 24.2488Z" fill="#4285F4"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M42.5674 32.0325C44.718 32.0325 46.5209 31.3193 47.8388 30.1028L45.2647 28.1044C44.5514 28.5823 43.6391 28.8646 42.5674 28.8646C40.4929 28.8646 38.737 27.4635 38.1107 25.5809H35.4497V27.6446C36.7603 30.2476 39.4539 32.0325 42.5674 32.0325Z" fill="#34A853"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M38.1107 25.581C37.9514 25.1031 37.8609 24.5927 37.8609 24.0677C37.8609 23.5427 37.9514 23.0323 38.1107 22.5544V20.4907H35.4497C34.9103 21.566 34.6025 22.7824 34.6025 24.0677C34.6025 25.3529 34.9103 26.5694 35.4497 27.6447L38.1107 25.581Z" fill="#FBBC05"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M42.5674 19.2706C43.7368 19.2706 44.7868 19.6725 45.6122 20.4618L47.8967 18.1773C46.5173 16.892 44.7143 16.1028 42.5674 16.1028C39.4539 16.1028 36.7603 17.8876 35.4497 20.4907L38.1107 22.5544C38.737 20.6717 40.4929 19.2706 42.5674 19.2706Z" fill="#EA4335"/>
                            <defs>
                            <filter id="filter0_d_122_5411" x="0.1" y="0.1" width="84.364" height="51.9354" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="2"/>
                            <feGaussianBlur stdDeviation="4.45"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_122_5411"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_122_5411" result="shape"/>
                            </filter>
                            </defs>
                        </svg>
                    </a>
                    <a href="#">
                        <svg width="67" height="35" viewBox="0 0 67 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.217773" width="66.5639" height="34.1353" rx="5" fill="#F8F8F8"/>
                            <rect x="0.717773" y="0.5" width="65.5639" height="33.1353" rx="4.5" stroke="#929292" stroke-opacity="0.2"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M41.1837 17.1164C41.1837 12.6906 37.617 9.10278 33.2171 9.10278C28.8173 9.10278 25.2505 12.6906 25.2505 17.1164C25.2505 21.1162 28.1638 24.4314 31.9723 25.0326V19.4328H29.9496V17.1164H31.9723V15.3509C31.9723 13.3425 33.1617 12.2331 34.9814 12.2331C35.8531 12.2331 36.7648 12.3896 36.7648 12.3896V14.3617H35.7602C34.7705 14.3617 34.4619 14.9794 34.4619 15.6131V17.1164H36.6714L36.3182 19.4328H34.4619V25.0326C38.2705 24.4314 41.1837 21.1162 41.1837 17.1164Z" fill="#1778F2"/>
                            <path d="M40.6837 17.1164C40.6837 20.6631 38.2421 23.6336 34.9619 24.4237V19.9328H36.3182H36.7477L36.8125 19.5082L37.1657 17.1917L37.2534 16.6164H36.6714H34.9619V15.6131C34.9619 15.3683 35.0224 15.1882 35.1191 15.0757C35.2037 14.9773 35.3749 14.8617 35.7602 14.8617H36.7648H37.2648V14.3617V12.3896V11.9681L36.8494 11.8968L36.7648 12.3896L36.8493 11.8968L36.8492 11.8968L36.8489 11.8967L36.8481 11.8966L36.8455 11.8962L36.8364 11.8946L36.8032 11.8892C36.7747 11.8846 36.7337 11.8782 36.6819 11.8705C36.5786 11.8552 36.4321 11.835 36.2576 11.8147C35.9109 11.7744 35.444 11.7331 34.9814 11.7331C33.9697 11.7331 33.0784 12.0435 32.4397 12.6865C31.8009 13.3297 31.4723 14.2477 31.4723 15.3509V16.6164H29.9496H29.4496V17.1164V19.4328V19.9328H29.9496H31.4723V24.4237C28.1921 23.6336 25.7505 20.6631 25.7505 17.1164C25.7505 12.964 29.0962 9.60278 33.2171 9.60278C37.3381 9.60278 40.6837 12.964 40.6837 17.1164Z" stroke="#929292" stroke-opacity="0.2"/>
                        </svg>
                    </a>
                    <a href="#">
                        <svg width="67" height="35" viewBox="0 0 67 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.436523" width="66.5639" height="34.1353" rx="5" fill="#F8F8F8"/>
                            <rect x="0.936523" y="0.5" width="65.5639" height="33.1353" rx="4.5" stroke="#929292" stroke-opacity="0.2"/>
                            <mask id="path-3-inside-1_122_5431" fill="white">
                            <path d="M33.9126 12.7789C34.6384 12.7789 35.5483 12.2928 36.0901 11.6447C36.5808 11.0573 36.9386 10.237 36.9386 9.41672C36.9386 9.30532 36.9283 9.19393 36.9079 9.10278C36.1003 9.13316 35.1291 9.63952 34.5464 10.318C34.0864 10.8345 33.6673 11.6447 33.6673 12.4751C33.6673 12.5966 33.6877 12.7181 33.6979 12.7586C33.7491 12.7688 33.8308 12.7789 33.9126 12.7789ZM31.3569 25.0326C32.3485 25.0326 32.7881 24.3743 34.0251 24.3743C35.2825 24.3743 35.5585 25.0123 36.6626 25.0123C37.7462 25.0123 38.472 24.0199 39.1569 23.0477C39.9236 21.9337 40.2405 20.84 40.261 20.7894C40.1894 20.7691 38.1142 19.9286 38.1142 17.569C38.1142 15.5233 39.7498 14.6018 39.8419 14.5309C38.7582 12.9916 37.1124 12.9511 36.6626 12.9511C35.446 12.9511 34.4544 13.6802 33.8308 13.6802C33.1561 13.6802 32.2667 12.9916 31.2138 12.9916C29.2101 12.9916 27.1758 14.6321 27.1758 17.731C27.1758 19.6551 27.9323 21.6907 28.8625 23.0072C29.6599 24.1212 30.3551 25.0326 31.3569 25.0326Z"/>
                            </mask>
                            <path d="M33.9126 12.7789C34.6384 12.7789 35.5483 12.2928 36.0901 11.6447C36.5808 11.0573 36.9386 10.237 36.9386 9.41672C36.9386 9.30532 36.9283 9.19393 36.9079 9.10278C36.1003 9.13316 35.1291 9.63952 34.5464 10.318C34.0864 10.8345 33.6673 11.6447 33.6673 12.4751C33.6673 12.5966 33.6877 12.7181 33.6979 12.7586C33.7491 12.7688 33.8308 12.7789 33.9126 12.7789ZM31.3569 25.0326C32.3485 25.0326 32.7881 24.3743 34.0251 24.3743C35.2825 24.3743 35.5585 25.0123 36.6626 25.0123C37.7462 25.0123 38.472 24.0199 39.1569 23.0477C39.9236 21.9337 40.2405 20.84 40.261 20.7894C40.1894 20.7691 38.1142 19.9286 38.1142 17.569C38.1142 15.5233 39.7498 14.6018 39.8419 14.5309C38.7582 12.9916 37.1124 12.9511 36.6626 12.9511C35.446 12.9511 34.4544 13.6802 33.8308 13.6802C33.1561 13.6802 32.2667 12.9916 31.2138 12.9916C29.2101 12.9916 27.1758 14.6321 27.1758 17.731C27.1758 19.6551 27.9323 21.6907 28.8625 23.0072C29.6599 24.1212 30.3551 25.0326 31.3569 25.0326Z" fill="#000100"/>
                            <path d="M36.0901 11.6447L36.8573 12.286L36.8575 12.2858L36.0901 11.6447ZM36.9079 9.10278L37.8837 8.8839L37.7016 8.07222L36.8703 8.10349L36.9079 9.10278ZM34.5464 10.318L35.2932 10.9831L35.2992 10.9764L35.3051 10.9695L34.5464 10.318ZM33.6979 12.7586L32.7283 13.0033L32.8831 13.6166L33.5036 13.7396L33.6979 12.7586ZM39.1569 23.0477L39.9745 23.6237L39.9807 23.6147L39.1569 23.0477ZM40.261 20.7894L41.1883 21.1638L41.6054 20.1306L40.5333 19.8272L40.261 20.7894ZM39.8419 14.5309L40.4522 15.323L41.2109 14.7384L40.6596 13.9552L39.8419 14.5309ZM28.8625 23.0072L28.0458 23.5843L28.0494 23.5892L28.8625 23.0072ZM33.9126 13.7789C34.4826 13.7789 35.052 13.5938 35.5351 13.3403C36.0249 13.0832 36.4943 12.7203 36.8573 12.286L35.3228 11.0033C35.1441 11.2172 34.8876 11.4214 34.6056 11.5694C34.3169 11.7209 34.0685 11.7789 33.9126 11.7789V13.7789ZM36.8575 12.2858C37.4712 11.5512 37.9386 10.5106 37.9386 9.41672H35.9386C35.9386 9.96338 35.6903 10.5634 35.3226 11.0035L36.8575 12.2858ZM37.9386 9.41672C37.9386 9.25241 37.9242 9.06462 37.8837 8.8839L35.9322 9.32167C35.9316 9.31905 35.9335 9.3276 35.9355 9.34785C35.9374 9.36719 35.9386 9.39088 35.9386 9.41672H37.9386ZM36.8703 8.10349C35.7458 8.14579 34.5251 8.80794 33.7878 9.66651L35.3051 10.9695C35.7331 10.4711 36.4548 10.1205 36.9455 10.1021L36.8703 8.10349ZM33.7997 9.65291C33.2256 10.2974 32.6673 11.3345 32.6673 12.4751H34.6673C34.6673 11.9548 34.9472 11.3716 35.2932 10.9831L33.7997 9.65291ZM32.6673 12.4751C32.6673 12.6817 32.6986 12.8853 32.7283 13.0033L34.6675 12.5139C34.6707 12.5266 34.6725 12.535 34.673 12.5374C34.6736 12.5405 34.6738 12.5415 34.6736 12.5404C34.6732 12.5379 34.6721 12.5314 34.6709 12.5221C34.6697 12.5128 34.6688 12.5031 34.6681 12.4938C34.6674 12.4844 34.6673 12.478 34.6673 12.4751H32.6673ZM33.5036 13.7396C33.6129 13.7612 33.7599 13.7789 33.9126 13.7789V11.7789C33.9127 11.7789 33.9122 11.7789 33.9112 11.7789C33.9102 11.7788 33.9088 11.7788 33.9071 11.7787C33.9037 11.7785 33.8997 11.7782 33.8957 11.7778C33.8917 11.7774 33.8887 11.777 33.8871 11.7767C33.8853 11.7765 33.887 11.7767 33.8923 11.7777L33.5036 13.7396ZM31.3569 26.0326C32.0884 26.0326 32.6311 25.7759 32.9891 25.6243C33.3421 25.4747 33.6112 25.3743 34.0251 25.3743V23.3743C33.202 23.3743 32.6328 23.6031 32.2089 23.7827C31.7899 23.9602 31.6171 24.0326 31.3569 24.0326V26.0326ZM34.0251 25.3743C34.4466 25.3743 34.6783 25.4684 35.0001 25.6093C35.3666 25.7699 35.8818 26.0123 36.6626 26.0123V24.0123C36.3393 24.0123 36.1644 23.9358 35.8025 23.7773C35.3959 23.5993 34.861 23.3743 34.0251 23.3743V25.3743ZM36.6626 26.0123C37.5419 26.0123 38.2246 25.6004 38.7356 25.1312C39.2301 24.6771 39.6416 24.0961 39.9744 23.6236L38.3394 22.4718C37.9873 22.9715 37.6934 23.3729 37.3829 23.658C37.0888 23.9281 36.8669 24.0123 36.6626 24.0123V26.0123ZM39.9807 23.6147C40.8295 22.3814 41.2062 21.1193 41.1883 21.1638L39.3337 20.415C39.2749 20.5607 39.0178 21.4861 38.3332 22.4807L39.9807 23.6147ZM40.5333 19.8272C40.6338 19.8556 40.5746 19.8473 40.3966 19.7441C40.2459 19.6568 40.0482 19.5225 39.854 19.3357C39.4763 18.9724 39.1142 18.419 39.1142 17.569H37.1142C37.1142 19.0785 37.7898 20.1252 38.4675 20.7772C38.8011 21.098 39.1356 21.325 39.3941 21.4748C39.6254 21.6087 39.8524 21.713 39.9886 21.7516L40.5333 19.8272ZM39.1142 17.569C39.1142 16.1051 40.2455 15.4823 40.4522 15.323L39.2315 13.7387C39.2542 13.7213 37.1142 14.9415 37.1142 17.569H39.1142ZM40.6596 13.9552C39.2753 11.9888 37.1716 11.9511 36.6626 11.9511V13.9511C37.0531 13.9511 38.2412 13.9943 39.0241 15.1065L40.6596 13.9552ZM36.6626 11.9511C35.8622 11.9511 35.1672 12.1909 34.668 12.3813C34.3905 12.4871 34.2207 12.5588 34.0414 12.6202C33.864 12.6809 33.8145 12.6802 33.8308 12.6802V14.6802C34.159 14.6802 34.4673 14.5883 34.6892 14.5124C34.9092 14.437 35.1803 14.3264 35.3807 14.25C35.8374 14.0758 36.2464 13.9511 36.6626 13.9511V11.9511ZM33.8308 12.6802C33.8311 12.6802 33.8264 12.6802 33.8161 12.679C33.8058 12.6778 33.7908 12.6756 33.7706 12.6714C33.7289 12.6627 33.6737 12.6478 33.6001 12.6234C33.4394 12.5702 33.2758 12.5018 33.0298 12.4051C32.5859 12.2308 31.9458 11.9916 31.2138 11.9916V13.9916C31.5348 13.9916 31.8658 14.0967 32.2986 14.2667C32.4908 14.3422 32.7418 14.4459 32.9706 14.5218C33.2027 14.5987 33.5038 14.6802 33.8308 14.6802V12.6802ZM31.2138 11.9916C28.6118 11.9916 26.1758 14.127 26.1758 17.731H28.1758C28.1758 15.1373 29.8084 13.9916 31.2138 13.9916V11.9916ZM26.1758 17.731C26.1758 19.8822 27.0086 22.1164 28.0459 23.5843L29.6792 22.4301C28.8559 21.265 28.1758 19.4281 28.1758 17.731H26.1758ZM28.0494 23.5892C28.4383 24.1326 28.8688 24.7249 29.3557 25.1733C29.8614 25.6389 30.5164 26.0326 31.3569 26.0326V24.0326C31.1955 24.0326 31.0021 23.9705 30.7104 23.702C30.4 23.4161 30.0841 22.9958 29.6757 22.4251L28.0494 23.5892Z" fill="#929292" fill-opacity="0.2" mask="url(#path-3-inside-1_122_5431)"/>
                        </svg>
                    </a>
                </div>
                <svg width="401" height="1" viewBox="0 0 401 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line opacity="0.15" x1="-4.37114e-08" y1="0.5" x2="401" y2="0.499965" stroke="#929292"/>
                </svg>
                <span className="flex justify-center font-['Poppins'] text-[#155263]">
                     ¿Ya tienes una cuenta? <span onClick={ handleIniciaClick } className="text-[#155263] font-bold ml-[10px] cursor-pointer"> Inicia Sesión Ahora</span>
                </span>
            </div>
        </div>
    );
};

export default SignUpForm;