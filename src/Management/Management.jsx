import QR from "../assets/images/QR.svg";
import QRCode from 'react-qr-code';

const Management = () => {
    return(
        <div className="w-full flex top-10">
            <div className="flex w-1/6 border-r-2 h-screen flex-col mt-[130px]">
                <span className="w-full pt-8 text-xl border-t-2 flex justify-center">
                    <svg className="mr-4" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.96024 3.38572C8.30255 2.29478 9.85287 1.48846 11.5168 1.01589C13.1807 0.543311 14.9234 0.414362 16.6388 0.636893C18.3541 0.859424 20.0062 1.42878 21.4945 2.31028C22.9828 3.19179 24.276 4.36699 25.2955 5.76434C26.315 7.16168 27.0394 8.75192 27.4247 10.4382C27.8099 12.1245 27.8478 13.8716 27.5362 15.573C27.2246 17.2744 26.5699 18.8946 25.612 20.3349C24.6541 21.7752 23.4131 23.0054 21.9645 23.9507V23.0357C21.965 22.1494 21.6514 21.2915 21.0795 20.6143C22.5894 19.3634 23.6767 17.6773 24.1931 15.7858C24.7095 13.8943 24.6299 11.8896 23.965 10.045C23.3002 8.20047 22.0826 6.60587 20.4783 5.47874C18.8739 4.3516 16.961 3.74678 15.0002 3.74678C13.0395 3.74678 11.1266 4.3516 9.52221 5.47874C7.91786 6.60587 6.70025 8.20047 6.03544 10.045C5.37064 11.8896 5.291 13.8943 5.80739 15.7858C6.32379 17.6773 7.41107 19.3634 8.92096 20.6143C8.34906 21.2915 8.03552 22.1494 8.03596 23.0357V23.9507C6.35494 22.854 4.95668 21.3759 3.95502 19.6366C2.95337 17.8973 2.37664 15.946 2.2718 13.9416C2.16695 11.9372 2.53695 9.93642 3.35168 8.1021C4.1664 6.26778 5.40281 4.65179 6.96024 3.38572ZM18.8574 22.1786C18.9905 22.2784 19.0985 22.4078 19.1728 22.5566C19.2472 22.7053 19.286 22.8694 19.286 23.0357V26.25C19.286 26.4163 19.2472 26.5804 19.1728 26.7292C19.0985 26.8779 18.9905 27.0073 18.8574 27.1071L15.6431 29.5179C15.4576 29.657 15.2321 29.7322 15.0002 29.7322C14.7684 29.7322 14.5428 29.657 14.3574 29.5179L11.1431 27.1071C11.01 27.0073 10.902 26.8779 10.8276 26.7292C10.7533 26.5804 10.7145 26.4163 10.7145 26.25V23.0357C10.7145 22.8694 10.7533 22.7053 10.8276 22.5566C10.902 22.4078 11.01 22.2784 11.1431 22.1786L14.3574 19.7679C14.5428 19.6288 14.7684 19.5536 15.0002 19.5536C15.2321 19.5536 15.4576 19.6288 15.6431 19.7679L18.8574 22.1786Z" fill="#929292"/>
                    </svg>
                    <h1 className="font-['Poppins'] text-xl text-[#155263]">
                        Plaquitas
                    </h1>
                </span>
                <span className="w-full flex pt-5 text-xl justify-center items-center">
                    <svg className="mr-4" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.2202 10.1905C23.7255 9.85291 24.3195 9.6727 24.9273 9.6727C25.7422 9.6727 26.5238 9.99643 27.1 10.5727C27.6763 11.1489 28 11.9305 28 12.7454C28 13.3532 27.8198 13.9472 27.4822 14.4525C27.1445 14.9578 26.6646 15.3517 26.1032 15.5843C25.5417 15.8168 24.9239 15.8777 24.3278 15.7591C23.7318 15.6405 23.1843 15.3479 22.7545 14.9182C22.3248 14.4884 22.0322 13.9409 21.9136 13.3449C21.795 12.7488 21.8559 12.131 22.0884 11.5695C22.321 11.0081 22.7148 10.5282 23.2202 10.1905Z" fill="#3D9FAD"/>
                        <path d="M7.62761 11.0383C7.96524 11.5436 8.14546 12.1377 8.14546 12.7454C8.14546 13.5604 7.82172 14.3419 7.24547 14.9182C6.66923 15.4944 5.88767 15.8181 5.07273 15.8181C4.465 15.8181 3.87092 15.6379 3.36561 15.3003C2.86031 14.9627 2.46647 14.4828 2.2339 13.9213C2.00133 13.3598 1.94048 12.742 2.05904 12.146C2.1776 11.5499 2.47025 11.0024 2.89998 10.5727C3.32971 10.1429 3.87722 9.8503 4.47327 9.73174C5.06932 9.61318 5.68714 9.67403 6.24861 9.90659C6.81008 10.1392 7.28997 10.533 7.62761 11.0383Z" fill="#3D9FAD"/>
                        <path d="M12.4526 9.62758C11.9473 9.96521 11.3532 10.1454 10.7455 10.1454C9.93052 10.1454 9.14896 9.82169 8.57271 9.24544C7.99646 8.6692 7.67273 7.88763 7.67273 7.0727C7.67273 6.46497 7.85294 5.87089 8.19058 5.36558C8.52821 4.86027 9.00811 4.46644 9.56957 4.23387C10.131 4.0013 10.7489 3.94045 11.3449 4.05901C11.941 4.17757 12.4885 4.47022 12.9182 4.89995C13.3479 5.32968 13.6406 5.87719 13.7591 6.47324C13.8777 7.06929 13.8169 7.68711 13.5843 8.24858C13.3517 8.81005 12.9579 9.28994 12.4526 9.62758Z" fill="#3D9FAD"/>
                        <path d="M20.9617 9.62758C20.4564 9.96521 19.8623 10.1454 19.2545 10.1454C18.4396 10.1454 17.658 9.82169 17.0818 9.24544C16.5056 8.6692 16.1818 7.88763 16.1818 7.0727C16.1818 6.46497 16.362 5.87089 16.6997 5.36558C17.0373 4.86027 17.5172 4.46644 18.0787 4.23387C18.6401 4.0013 19.258 3.94045 19.854 4.05901C20.4501 4.17757 20.9976 4.47022 21.4273 4.89995C21.857 5.32968 22.1497 5.87719 22.2682 6.47324C22.3868 7.06929 22.3259 7.68711 22.0934 8.24858C21.8608 8.81005 21.467 9.28994 20.9617 9.62758Z" fill="#3D9FAD"/>
                        <path d="M20.5568 16.6711C20.9181 17.124 21.3651 17.5011 21.8723 17.7811C22.7498 18.2579 23.4433 19.0136 23.8433 19.9286C24.2433 20.8437 24.3268 21.8659 24.0807 22.8338C23.8347 23.8017 23.273 24.6599 22.4846 25.2728C21.6962 25.8857 20.7259 26.2184 19.7273 26.2181C19.1251 26.2197 18.5288 26.0991 17.9746 25.8636C16.0667 25.0772 13.9251 25.0772 12.0171 25.8636C11.4655 26.0983 10.8722 26.2189 10.2727 26.2181C9.27339 26.2185 8.30247 25.8855 7.51368 25.272C6.72489 24.6584 6.16329 23.7992 5.91779 22.8305C5.67229 21.8618 5.75691 20.8389 6.15825 19.9236C6.5596 19.0084 7.25474 18.2532 8.13364 17.7776C9.15542 17.2123 9.91083 16.2643 10.2337 15.1421C10.5338 14.1102 11.1606 13.2035 12.0201 12.5583C12.8796 11.9131 13.9253 11.5643 15 11.5643C16.0747 11.5643 17.1204 11.9131 17.9799 12.5583C18.8394 13.2035 19.4662 14.1102 19.7663 15.1421C19.9268 15.6988 20.1954 16.2183 20.5568 16.6711Z" fill="#3D9FAD"/>
                    </svg>
                    <h1 className="font-['Poppins'] text-xl text-[#155263] font-bold">
                        Mascotas
                    </h1>
                </span>     
            </div>
            <div className="flex w-5/6 h-screen mt-[130px] flex-col border-t-2 px-7 mb-3">
                <div className="flex flex-row">
                    <h1 className="font-['Poppins'] py-7 text-[#155263] text-2xl font-bold w-1/2">Mis plaquitas</h1>
                    <div className="w-1/2 flex flex-row justify-end">   
                        <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative flex flex-row py-7 w-5/6 justify-between">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full px-4 py-2 ps-10 text-sm text-gray-900 rounded-lg bg-gray-50 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 " placeholder="Buscar..." required />
                        </div>
                        <div className="flex flex-row py-7 w-1/6 justify-end">
                            <button type="submit" class="flex text-sm items-center text-white bottom-2.5 font-['Poppins'] bg-[#F1B21B] rounded-md px-5 hover:bg-white hover:text-[#F1B21B] hover:border hover:border-[#F1B21B]">AGREGAR</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full border-none rounded-xl bg-[#EBFCFF] p-3">
                    <div className="flex flex-row w-full justify-between px-4 ">
                        <div className="flex gap-6">
                            {/* <span>
                                <img src={QR} />
                            </span> */}
                            <div style={{height:"auto", margin:"0 auto", maxWidth:64, width:"100%"}}>
                                <QRCode size={256}
                                style={{height:"auto", maxWidth:"100%", width:"100%"}}
                                value={`value`}
                                viewBox={`0 0 256 256`}
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="font-['Poppins'] text-[#155263]">
                                    Placa de Perritos Surfeando
                                </span>
                                <span className="font-['Poppins'] text-[#bbb]">
                                    #A123DO0
                                </span>
                            </div>
                        </div>
                        <div className="flex py-2 items-center">
                            <span className="bg-[#E7E7E7] font-['Poppins'] text-[#155263] rounded-[50px] px-10 py-2">Sin asignar</span>
                        </div>
                        <div className="flex flex-row items-center justify-between gap-10">
                            <span className="flex flex-row">
                                <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.5" width="33" height="33" rx="5" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3376 20.0169H8.05518C7.42447 20.0169 6.91318 20.5282 6.91318 21.1589V25.4413C6.91318 26.0721 7.42447 26.5833 8.05518 26.5833H12.3376C12.9684 26.5833 13.4796 26.0721 13.4796 25.4413V21.1589C13.4796 20.5282 12.9684 20.0169 12.3376 20.0169ZM8.05518 18.3039C6.47841 18.3039 5.2002 19.5821 5.2002 21.1589V25.4413C5.2002 27.0181 6.47841 28.2963 8.05518 28.2963H12.3376C13.9144 28.2963 15.1926 27.0181 15.1926 25.4413V21.1589C15.1926 19.5821 13.9144 18.3039 12.3376 18.3039H8.05518Z" fill="#3D9FAD"/>
                                    <path d="M16.8047 22.5134V22.5518H18.3339C18.3339 21.8342 18.3349 21.3526 18.3729 20.9853C18.4098 20.6306 18.4749 20.4668 18.5487 20.3584C18.6417 20.2219 18.7611 20.1048 18.9003 20.0137C19.0109 19.9413 19.178 19.8774 19.5398 19.8413C19.9144 19.804 20.4058 19.8031 21.1377 19.8031H23.1766V18.3039H21.0985C20.4158 18.3039 19.8463 18.3038 19.3851 18.3498C18.9024 18.398 18.4545 18.5027 18.0507 18.7671C17.7446 18.9676 17.4817 19.2253 17.2772 19.5254C17.0074 19.9213 16.9007 20.3604 16.8515 20.8336C16.8046 21.2857 16.8047 21.8441 16.8047 22.5134Z" fill="#3D9FAD"/>
                                    <path d="M27.0009 24.5757V24.5505H25.4715C25.4715 25.0265 25.4712 25.3459 25.454 25.5932C25.4372 25.8338 25.4072 25.951 25.3745 26.0281C25.2452 26.3343 24.9972 26.5774 24.6848 26.7042C24.6063 26.7362 24.4867 26.7657 24.2413 26.7821C23.989 26.799 23.6632 26.7993 23.1776 26.7993H21.1387V28.2986H23.2034C23.6566 28.2986 24.0348 28.2986 24.3454 28.2779C24.6687 28.2563 24.9741 28.2096 25.2701 28.0894C25.9571 27.8104 26.5029 27.2753 26.7875 26.6018C26.9101 26.3116 26.9577 26.0123 26.9797 25.6953C27.0009 25.3908 27.0009 25.02 27.0009 24.5757Z" fill="#3D9FAD"/>
                                    <path d="M18.3339 27.549C18.3339 27.9629 17.9916 28.2986 17.5692 28.2986C17.147 28.2986 16.8047 27.9629 16.8047 27.549V24.5505H18.3339V27.549Z" fill="#3D9FAD"/>
                                    <path d="M26.2363 18.3039C25.8141 18.3039 25.4717 18.6394 25.4717 19.0534V22.5518H27.001V19.0534C27.001 18.6394 26.6586 18.3039 26.2363 18.3039Z" fill="#3D9FAD"/>
                                    <path d="M20.5072 22.5155C20.4238 22.713 20.4238 22.9633 20.4238 23.4639C20.4238 23.9645 20.4238 24.2149 20.5072 24.4123C20.6185 24.6756 20.8319 24.8848 21.1004 24.9938C21.3018 25.0756 21.5572 25.0756 22.0678 25.0756C22.5784 25.0756 22.8338 25.0756 23.0352 24.9938C23.3037 24.8848 23.5171 24.6756 23.6284 24.4123C23.7118 24.2149 23.7118 23.9645 23.7118 23.4639C23.7118 22.9633 23.7118 22.713 23.6284 22.5155C23.5171 22.2523 23.3037 22.0431 23.0352 21.934C22.8338 21.8522 22.5784 21.8522 22.0678 21.8522C21.5572 21.8522 21.3018 21.8522 21.1004 21.934C20.8319 22.0431 20.6185 22.2523 20.5072 22.5155Z" fill="#3D9FAD"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.1375 8.41288H19.855C19.2243 8.41288 18.713 8.92417 18.713 9.55487V13.8373C18.713 14.468 19.2243 14.9793 19.855 14.9793H24.1375C24.7682 14.9793 25.2794 14.468 25.2794 13.8373V9.55487C25.2794 8.92417 24.7682 8.41288 24.1375 8.41288ZM19.855 6.69989C18.2782 6.69989 17 7.97811 17 9.55487V13.8373C17 15.4141 18.2782 16.6923 19.855 16.6923H24.1375C25.7142 16.6923 26.9924 15.4141 26.9924 13.8373V9.55487C26.9924 7.97811 25.7142 6.69989 24.1375 6.69989H19.855Z" fill="#3D9FAD"/>
                                    <path d="M5.2002 10.9095V10.9478H6.69938C6.69938 10.2303 6.70035 9.74861 6.73763 9.38136C6.77374 9.02668 6.83756 8.86283 6.90998 8.75442C7.00109 8.61796 7.11821 8.50085 7.25466 8.40973C7.36307 8.33731 7.52693 8.27349 7.88161 8.23739C8.24886 8.20011 8.73053 8.19914 9.44805 8.19914H11.447V6.69995H9.4097C8.74042 6.69995 8.18202 6.69984 7.72989 6.74583C7.2567 6.79407 6.81757 6.89873 6.42174 7.16315C6.12165 7.36364 5.86389 7.6214 5.66339 7.9215C5.39897 8.31733 5.29432 8.75646 5.24608 9.22965C5.20009 9.68178 5.2002 10.2402 5.2002 10.9095Z" fill="#3D9FAD"/>
                                    <path d="M15.1953 12.9718V12.9465H13.696C13.696 13.4225 13.6957 13.742 13.6788 13.9893C13.6624 14.2299 13.6329 14.3471 13.6009 14.4241C13.4741 14.7303 13.231 14.9735 12.9248 15.1003C12.8477 15.1323 12.7305 15.1617 12.4899 15.1782C12.2426 15.195 11.9231 15.1954 11.4472 15.1954H9.44824V16.6947H11.4724C11.9167 16.6947 12.2875 16.6947 12.592 16.6739C12.909 16.6523 13.2083 16.6057 13.4985 16.4855C14.172 16.2064 14.7071 15.6714 14.9861 14.9979C15.1063 14.7077 15.153 14.4083 15.1746 14.0914C15.1953 13.7869 15.1953 13.4161 15.1953 12.9718Z" fill="#3D9FAD"/>
                                    <path d="M6.69938 15.945C6.69938 16.359 6.36383 16.6947 5.94974 16.6947C5.53575 16.6947 5.2002 16.359 5.2002 15.945V12.9465H6.69938V15.945Z" fill="#3D9FAD"/>
                                    <path d="M14.4469 6.69989C14.0329 6.69989 13.6973 7.03544 13.6973 7.44943V10.9477H15.1966V7.44943C15.1966 7.03544 14.8609 6.69989 14.4469 6.69989Z" fill="#3D9FAD"/>
                                    <path d="M8.83079 10.9117C8.74902 11.1092 8.74902 11.3596 8.74902 11.8602C8.74902 12.3607 8.74902 12.6111 8.83079 12.8086C8.93985 13.0718 9.14904 13.281 9.41228 13.3901C9.60977 13.4718 9.86012 13.4718 10.3607 13.4718C10.8613 13.4718 11.1116 13.4718 11.3091 13.3901C11.5724 13.281 11.7816 13.0718 11.8906 12.8086C11.9724 12.6111 11.9724 12.3607 11.9724 11.8602C11.9724 11.3596 11.9724 11.1092 11.8906 10.9117C11.7816 10.6485 11.5724 10.4393 11.3091 10.3302C11.1116 10.2485 10.8613 10.2485 10.3607 10.2485C9.86012 10.2485 9.60977 10.2485 9.41228 10.3302C9.14904 10.4393 8.93985 10.6485 8.83079 10.9117Z" fill="#3D9FAD"/>
                                </svg>
                                <h2 className="flex items-center font-['Poppins'] text-[#155263]">Codigo QR</h2>
                            </span>
                            <div>
                                <button className="font-['Poppins'] text-[#155263] border border-[#155263] py-1 px-6 rounded-md">Ver Detalles</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full border-none rounded-xl bg-[#EBFCFF] p-3 mt-3">
                    <div className="flex flex-row w-full justify-between px-4 ">
                        <div className="flex gap-6">
                            <span>
                                <img src={QR} />
                            </span>
                            <div className="flex flex-col justify-center">
                                <span className="font-['Poppins'] text-[#155263]">
                                    Placa de Perritos Surfeando
                                </span>
                                <span className="font-['Poppins'] text-[#bbb]">
                                    #A123DO0
                                </span>
                            </div>
                        </div>
                        <div className="flex py-2 items-center">
                            <span className="bg-[#E7E7E7] font-['Poppins'] text-[#155263] rounded-[50px] px-10 py-2">Sin asignar</span>
                        </div>
                        <div className="flex flex-row items-center justify-between gap-10">
                            <span className="flex flex-row">
                                <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.5" width="33" height="33" rx="5" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3376 20.0169H8.05518C7.42447 20.0169 6.91318 20.5282 6.91318 21.1589V25.4413C6.91318 26.0721 7.42447 26.5833 8.05518 26.5833H12.3376C12.9684 26.5833 13.4796 26.0721 13.4796 25.4413V21.1589C13.4796 20.5282 12.9684 20.0169 12.3376 20.0169ZM8.05518 18.3039C6.47841 18.3039 5.2002 19.5821 5.2002 21.1589V25.4413C5.2002 27.0181 6.47841 28.2963 8.05518 28.2963H12.3376C13.9144 28.2963 15.1926 27.0181 15.1926 25.4413V21.1589C15.1926 19.5821 13.9144 18.3039 12.3376 18.3039H8.05518Z" fill="#3D9FAD"/>
                                    <path d="M16.8047 22.5134V22.5518H18.3339C18.3339 21.8342 18.3349 21.3526 18.3729 20.9853C18.4098 20.6306 18.4749 20.4668 18.5487 20.3584C18.6417 20.2219 18.7611 20.1048 18.9003 20.0137C19.0109 19.9413 19.178 19.8774 19.5398 19.8413C19.9144 19.804 20.4058 19.8031 21.1377 19.8031H23.1766V18.3039H21.0985C20.4158 18.3039 19.8463 18.3038 19.3851 18.3498C18.9024 18.398 18.4545 18.5027 18.0507 18.7671C17.7446 18.9676 17.4817 19.2253 17.2772 19.5254C17.0074 19.9213 16.9007 20.3604 16.8515 20.8336C16.8046 21.2857 16.8047 21.8441 16.8047 22.5134Z" fill="#3D9FAD"/>
                                    <path d="M27.0009 24.5757V24.5505H25.4715C25.4715 25.0265 25.4712 25.3459 25.454 25.5932C25.4372 25.8338 25.4072 25.951 25.3745 26.0281C25.2452 26.3343 24.9972 26.5774 24.6848 26.7042C24.6063 26.7362 24.4867 26.7657 24.2413 26.7821C23.989 26.799 23.6632 26.7993 23.1776 26.7993H21.1387V28.2986H23.2034C23.6566 28.2986 24.0348 28.2986 24.3454 28.2779C24.6687 28.2563 24.9741 28.2096 25.2701 28.0894C25.9571 27.8104 26.5029 27.2753 26.7875 26.6018C26.9101 26.3116 26.9577 26.0123 26.9797 25.6953C27.0009 25.3908 27.0009 25.02 27.0009 24.5757Z" fill="#3D9FAD"/>
                                    <path d="M18.3339 27.549C18.3339 27.9629 17.9916 28.2986 17.5692 28.2986C17.147 28.2986 16.8047 27.9629 16.8047 27.549V24.5505H18.3339V27.549Z" fill="#3D9FAD"/>
                                    <path d="M26.2363 18.3039C25.8141 18.3039 25.4717 18.6394 25.4717 19.0534V22.5518H27.001V19.0534C27.001 18.6394 26.6586 18.3039 26.2363 18.3039Z" fill="#3D9FAD"/>
                                    <path d="M20.5072 22.5155C20.4238 22.713 20.4238 22.9633 20.4238 23.4639C20.4238 23.9645 20.4238 24.2149 20.5072 24.4123C20.6185 24.6756 20.8319 24.8848 21.1004 24.9938C21.3018 25.0756 21.5572 25.0756 22.0678 25.0756C22.5784 25.0756 22.8338 25.0756 23.0352 24.9938C23.3037 24.8848 23.5171 24.6756 23.6284 24.4123C23.7118 24.2149 23.7118 23.9645 23.7118 23.4639C23.7118 22.9633 23.7118 22.713 23.6284 22.5155C23.5171 22.2523 23.3037 22.0431 23.0352 21.934C22.8338 21.8522 22.5784 21.8522 22.0678 21.8522C21.5572 21.8522 21.3018 21.8522 21.1004 21.934C20.8319 22.0431 20.6185 22.2523 20.5072 22.5155Z" fill="#3D9FAD"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.1375 8.41288H19.855C19.2243 8.41288 18.713 8.92417 18.713 9.55487V13.8373C18.713 14.468 19.2243 14.9793 19.855 14.9793H24.1375C24.7682 14.9793 25.2794 14.468 25.2794 13.8373V9.55487C25.2794 8.92417 24.7682 8.41288 24.1375 8.41288ZM19.855 6.69989C18.2782 6.69989 17 7.97811 17 9.55487V13.8373C17 15.4141 18.2782 16.6923 19.855 16.6923H24.1375C25.7142 16.6923 26.9924 15.4141 26.9924 13.8373V9.55487C26.9924 7.97811 25.7142 6.69989 24.1375 6.69989H19.855Z" fill="#3D9FAD"/>
                                    <path d="M5.2002 10.9095V10.9478H6.69938C6.69938 10.2303 6.70035 9.74861 6.73763 9.38136C6.77374 9.02668 6.83756 8.86283 6.90998 8.75442C7.00109 8.61796 7.11821 8.50085 7.25466 8.40973C7.36307 8.33731 7.52693 8.27349 7.88161 8.23739C8.24886 8.20011 8.73053 8.19914 9.44805 8.19914H11.447V6.69995H9.4097C8.74042 6.69995 8.18202 6.69984 7.72989 6.74583C7.2567 6.79407 6.81757 6.89873 6.42174 7.16315C6.12165 7.36364 5.86389 7.6214 5.66339 7.9215C5.39897 8.31733 5.29432 8.75646 5.24608 9.22965C5.20009 9.68178 5.2002 10.2402 5.2002 10.9095Z" fill="#3D9FAD"/>
                                    <path d="M15.1953 12.9718V12.9465H13.696C13.696 13.4225 13.6957 13.742 13.6788 13.9893C13.6624 14.2299 13.6329 14.3471 13.6009 14.4241C13.4741 14.7303 13.231 14.9735 12.9248 15.1003C12.8477 15.1323 12.7305 15.1617 12.4899 15.1782C12.2426 15.195 11.9231 15.1954 11.4472 15.1954H9.44824V16.6947H11.4724C11.9167 16.6947 12.2875 16.6947 12.592 16.6739C12.909 16.6523 13.2083 16.6057 13.4985 16.4855C14.172 16.2064 14.7071 15.6714 14.9861 14.9979C15.1063 14.7077 15.153 14.4083 15.1746 14.0914C15.1953 13.7869 15.1953 13.4161 15.1953 12.9718Z" fill="#3D9FAD"/>
                                    <path d="M6.69938 15.945C6.69938 16.359 6.36383 16.6947 5.94974 16.6947C5.53575 16.6947 5.2002 16.359 5.2002 15.945V12.9465H6.69938V15.945Z" fill="#3D9FAD"/>
                                    <path d="M14.4469 6.69989C14.0329 6.69989 13.6973 7.03544 13.6973 7.44943V10.9477H15.1966V7.44943C15.1966 7.03544 14.8609 6.69989 14.4469 6.69989Z" fill="#3D9FAD"/>
                                    <path d="M8.83079 10.9117C8.74902 11.1092 8.74902 11.3596 8.74902 11.8602C8.74902 12.3607 8.74902 12.6111 8.83079 12.8086C8.93985 13.0718 9.14904 13.281 9.41228 13.3901C9.60977 13.4718 9.86012 13.4718 10.3607 13.4718C10.8613 13.4718 11.1116 13.4718 11.3091 13.3901C11.5724 13.281 11.7816 13.0718 11.8906 12.8086C11.9724 12.6111 11.9724 12.3607 11.9724 11.8602C11.9724 11.3596 11.9724 11.1092 11.8906 10.9117C11.7816 10.6485 11.5724 10.4393 11.3091 10.3302C11.1116 10.2485 10.8613 10.2485 10.3607 10.2485C9.86012 10.2485 9.60977 10.2485 9.41228 10.3302C9.14904 10.4393 8.93985 10.6485 8.83079 10.9117Z" fill="#3D9FAD"/>
                                </svg>
                                <h2 className="flex items-center font-['Poppins'] text-[#155263]">Codigo QR</h2>
                            </span>
                            <div>
                                <button className="font-['Poppins'] text-[#155263] border border-[#155263] py-1 px-6 rounded-md">Ver Detalles</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full border-none rounded-xl bg-[#EBFCFF] p-3 mt-3">
                    <div className="flex flex-row w-full justify-between px-4 ">
                        <div className="flex gap-6">
                            <span>
                                <img src={QR} />
                            </span>
                            <div className="flex flex-col justify-center">
                                <span className="font-['Poppins'] text-[#155263]">
                                    Placa de Perritos Surfeando
                                </span>
                                <span className="font-['Poppins'] text-[#bbb]">
                                    #A123DO0
                                </span>
                            </div>
                        </div>
                        <div className="flex py-2 items-center">
                            <span className="bg-[#E7E7E7] font-['Poppins'] text-[#155263] rounded-[50px] px-10 py-2">Sin asignar</span>
                        </div>
                        <div className="flex flex-row items-center justify-between gap-10">
                            <span className="flex flex-row">
                                <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.5" width="33" height="33" rx="5" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3376 20.0169H8.05518C7.42447 20.0169 6.91318 20.5282 6.91318 21.1589V25.4413C6.91318 26.0721 7.42447 26.5833 8.05518 26.5833H12.3376C12.9684 26.5833 13.4796 26.0721 13.4796 25.4413V21.1589C13.4796 20.5282 12.9684 20.0169 12.3376 20.0169ZM8.05518 18.3039C6.47841 18.3039 5.2002 19.5821 5.2002 21.1589V25.4413C5.2002 27.0181 6.47841 28.2963 8.05518 28.2963H12.3376C13.9144 28.2963 15.1926 27.0181 15.1926 25.4413V21.1589C15.1926 19.5821 13.9144 18.3039 12.3376 18.3039H8.05518Z" fill="#3D9FAD"/>
                                    <path d="M16.8047 22.5134V22.5518H18.3339C18.3339 21.8342 18.3349 21.3526 18.3729 20.9853C18.4098 20.6306 18.4749 20.4668 18.5487 20.3584C18.6417 20.2219 18.7611 20.1048 18.9003 20.0137C19.0109 19.9413 19.178 19.8774 19.5398 19.8413C19.9144 19.804 20.4058 19.8031 21.1377 19.8031H23.1766V18.3039H21.0985C20.4158 18.3039 19.8463 18.3038 19.3851 18.3498C18.9024 18.398 18.4545 18.5027 18.0507 18.7671C17.7446 18.9676 17.4817 19.2253 17.2772 19.5254C17.0074 19.9213 16.9007 20.3604 16.8515 20.8336C16.8046 21.2857 16.8047 21.8441 16.8047 22.5134Z" fill="#3D9FAD"/>
                                    <path d="M27.0009 24.5757V24.5505H25.4715C25.4715 25.0265 25.4712 25.3459 25.454 25.5932C25.4372 25.8338 25.4072 25.951 25.3745 26.0281C25.2452 26.3343 24.9972 26.5774 24.6848 26.7042C24.6063 26.7362 24.4867 26.7657 24.2413 26.7821C23.989 26.799 23.6632 26.7993 23.1776 26.7993H21.1387V28.2986H23.2034C23.6566 28.2986 24.0348 28.2986 24.3454 28.2779C24.6687 28.2563 24.9741 28.2096 25.2701 28.0894C25.9571 27.8104 26.5029 27.2753 26.7875 26.6018C26.9101 26.3116 26.9577 26.0123 26.9797 25.6953C27.0009 25.3908 27.0009 25.02 27.0009 24.5757Z" fill="#3D9FAD"/>
                                    <path d="M18.3339 27.549C18.3339 27.9629 17.9916 28.2986 17.5692 28.2986C17.147 28.2986 16.8047 27.9629 16.8047 27.549V24.5505H18.3339V27.549Z" fill="#3D9FAD"/>
                                    <path d="M26.2363 18.3039C25.8141 18.3039 25.4717 18.6394 25.4717 19.0534V22.5518H27.001V19.0534C27.001 18.6394 26.6586 18.3039 26.2363 18.3039Z" fill="#3D9FAD"/>
                                    <path d="M20.5072 22.5155C20.4238 22.713 20.4238 22.9633 20.4238 23.4639C20.4238 23.9645 20.4238 24.2149 20.5072 24.4123C20.6185 24.6756 20.8319 24.8848 21.1004 24.9938C21.3018 25.0756 21.5572 25.0756 22.0678 25.0756C22.5784 25.0756 22.8338 25.0756 23.0352 24.9938C23.3037 24.8848 23.5171 24.6756 23.6284 24.4123C23.7118 24.2149 23.7118 23.9645 23.7118 23.4639C23.7118 22.9633 23.7118 22.713 23.6284 22.5155C23.5171 22.2523 23.3037 22.0431 23.0352 21.934C22.8338 21.8522 22.5784 21.8522 22.0678 21.8522C21.5572 21.8522 21.3018 21.8522 21.1004 21.934C20.8319 22.0431 20.6185 22.2523 20.5072 22.5155Z" fill="#3D9FAD"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.1375 8.41288H19.855C19.2243 8.41288 18.713 8.92417 18.713 9.55487V13.8373C18.713 14.468 19.2243 14.9793 19.855 14.9793H24.1375C24.7682 14.9793 25.2794 14.468 25.2794 13.8373V9.55487C25.2794 8.92417 24.7682 8.41288 24.1375 8.41288ZM19.855 6.69989C18.2782 6.69989 17 7.97811 17 9.55487V13.8373C17 15.4141 18.2782 16.6923 19.855 16.6923H24.1375C25.7142 16.6923 26.9924 15.4141 26.9924 13.8373V9.55487C26.9924 7.97811 25.7142 6.69989 24.1375 6.69989H19.855Z" fill="#3D9FAD"/>
                                    <path d="M5.2002 10.9095V10.9478H6.69938C6.69938 10.2303 6.70035 9.74861 6.73763 9.38136C6.77374 9.02668 6.83756 8.86283 6.90998 8.75442C7.00109 8.61796 7.11821 8.50085 7.25466 8.40973C7.36307 8.33731 7.52693 8.27349 7.88161 8.23739C8.24886 8.20011 8.73053 8.19914 9.44805 8.19914H11.447V6.69995H9.4097C8.74042 6.69995 8.18202 6.69984 7.72989 6.74583C7.2567 6.79407 6.81757 6.89873 6.42174 7.16315C6.12165 7.36364 5.86389 7.6214 5.66339 7.9215C5.39897 8.31733 5.29432 8.75646 5.24608 9.22965C5.20009 9.68178 5.2002 10.2402 5.2002 10.9095Z" fill="#3D9FAD"/>
                                    <path d="M15.1953 12.9718V12.9465H13.696C13.696 13.4225 13.6957 13.742 13.6788 13.9893C13.6624 14.2299 13.6329 14.3471 13.6009 14.4241C13.4741 14.7303 13.231 14.9735 12.9248 15.1003C12.8477 15.1323 12.7305 15.1617 12.4899 15.1782C12.2426 15.195 11.9231 15.1954 11.4472 15.1954H9.44824V16.6947H11.4724C11.9167 16.6947 12.2875 16.6947 12.592 16.6739C12.909 16.6523 13.2083 16.6057 13.4985 16.4855C14.172 16.2064 14.7071 15.6714 14.9861 14.9979C15.1063 14.7077 15.153 14.4083 15.1746 14.0914C15.1953 13.7869 15.1953 13.4161 15.1953 12.9718Z" fill="#3D9FAD"/>
                                    <path d="M6.69938 15.945C6.69938 16.359 6.36383 16.6947 5.94974 16.6947C5.53575 16.6947 5.2002 16.359 5.2002 15.945V12.9465H6.69938V15.945Z" fill="#3D9FAD"/>
                                    <path d="M14.4469 6.69989C14.0329 6.69989 13.6973 7.03544 13.6973 7.44943V10.9477H15.1966V7.44943C15.1966 7.03544 14.8609 6.69989 14.4469 6.69989Z" fill="#3D9FAD"/>
                                    <path d="M8.83079 10.9117C8.74902 11.1092 8.74902 11.3596 8.74902 11.8602C8.74902 12.3607 8.74902 12.6111 8.83079 12.8086C8.93985 13.0718 9.14904 13.281 9.41228 13.3901C9.60977 13.4718 9.86012 13.4718 10.3607 13.4718C10.8613 13.4718 11.1116 13.4718 11.3091 13.3901C11.5724 13.281 11.7816 13.0718 11.8906 12.8086C11.9724 12.6111 11.9724 12.3607 11.9724 11.8602C11.9724 11.3596 11.9724 11.1092 11.8906 10.9117C11.7816 10.6485 11.5724 10.4393 11.3091 10.3302C11.1116 10.2485 10.8613 10.2485 10.3607 10.2485C9.86012 10.2485 9.60977 10.2485 9.41228 10.3302C9.14904 10.4393 8.93985 10.6485 8.83079 10.9117Z" fill="#3D9FAD"/>
                                </svg>
                                <h2 className="flex items-center font-['Poppins'] text-[#155263]">Codigo QR</h2>
                            </span>
                            <div>
                                <button className="font-['Poppins'] text-[#155263] border border-[#155263] py-1 px-6 rounded-md">Ver Detalles</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Management;