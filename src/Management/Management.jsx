import QRCode from 'react-qr-code';
import QR from "../assets/images/QR.svg";
import LeftSidePanel from "../components/LeftSidePanel";
import TagCard from '../components/tagCard';

const Management = () => {
    return(
        <div className="w-full flex top-10">
            <LeftSidePanel/>
            <div className="flex w-5/6 h-screen mt-[130px] flex-col border-t-2 px-7 mb-3">
                <div className="flex flex-row">
                    <h1 className="font-['Poppins'] py-7 text-[#155263] text-2xl font-bold w-1/2">ID Tags</h1>
                    <div className="w-1/2 flex flex-row justify-end">   
                        <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative flex flex-row py-7 w-5/6 justify-between">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full px-4 py-2 ps-10 text-sm text-gray-900 rounded-l-lg bg-gray-50 focus:ring-blue-500 dark:bg-[#F8F8F8] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 " placeholder="Buscar..." required />
                        </div>
                        <div className="flex flex-row py-7 w-1/6 justify-end">
                            <button type="submit" class="flex text-sm items-center text-white bottom-2.5 font-['Poppins'] bg-[#F1B21B] rounded-md px-5 hover:bg-white hover:text-[#F1B21B] hover:border hover:border-[#F1B21B]">ADD ID TAGS</button>
                        </div>
                    </div>
                </div>
                <TagCard/>
                <TagCard/>
                <TagCard/>
            </div>
        </div>
    );
};

export default Management;