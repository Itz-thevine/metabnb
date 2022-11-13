import React, {useContext} from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Cards from '../components/Cards';
import { MetaMaskContent } from '../context/context';
import Frame151 from '../assets/place/Frame 151.png';
import Frame151_1 from '../assets/place/Frame 151-1.png';
import Frame151_2 from '../assets/place/Frame 151-2.png';
import Frame151_3 from '../assets/place/Frame 151-3.png';
import Frame151_4 from '../assets/place/Frame 151-4.png';
import Frame151_5 from '../assets/place/Frame 151-5.png';
import Frame151_6 from '../assets/place/Frame 151-6.png';
import Frame151_7 from '../assets/place/Frame 151-7.png';
import Frame151_8 from '../assets/place/Frame 151-8.png';
import Frame151_9 from '../assets/place/Frame 151-9.png';
import Frame151_10 from '../assets/place/Frame 151-10.png';
import Frame151_11 from '../assets/place/Frame 151-11.png';
import Frame151_12 from '../assets/place/Frame 151-12.png';
import Frame151_13 from '../assets/place/Frame 151-13.png';
import Frame151_14 from '../assets/place/Frame 151-14.png';
import Frame151_15 from '../assets/place/Frame 151-15.png';
import Modal from '../components/modal/Modal';
import * as AiIcons from 'react-icons/ai'

const PlaceToStay = () => {
    const {displayMeta} = useContext(MetaMaskContent)
  return (
    <div className='pt-5 font-main-font'>
        <Header/>
        <div className='flex w-full justify-between mt-10 mb-5 lg:px-16 lg:items-center'>
            <div className=' flex items-center justify-between w-48 border-[2px] border-gray-400 mx-4 my-5 rounded-lg py-1 px-5 lg:hidden'>
                <p className='text-small'>Restaurant</p>
                <div>
                    <AiIcons.AiOutlineDown/>
                </div>
            </div>
            <div className='hidden lg:flex lg:w-[85%]'>
                <p className='lg:mr-16 '>Resturant</p>
                <p className='lg:mr-16 '>Cottage</p>
                <p className='lg:mr-16 '>Castle</p>
                <p className='lg:mr-16 '>fantast city</p>
                <p className='lg:mr-16 '>Carbins</p>
                <p className='lg:mr-16 '>Off-grid</p>
                <p className='lg:mr-16 '>Farm</p>
            </div>
            <div className=' flex  items-center justify-between w-36 border-[2px] border-gray-400 mx-4 my-5 rounded-lg py-1 px-5 lg:w-[15%]'>
                <p className='text-small'>location</p>
                <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.9999 5L10.9999 5" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.99985 5H1.99985" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21.9999 12H16.9999" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.9999 12H1.99985" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21.9999 19H10.9999" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.99985 19H1.99985" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.9999 21V17" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.9999 7V3" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.0001 14V10" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
        <div className='w-auto mx-10 flex flex-col lg:flex-row lg:flex-wrap lg:mx-12 lg:mb-16 justify-between'>
            <Cards pic={Frame151}/>
            <Cards pic={Frame151_1}/>
            <Cards pic={Frame151_2}/>
            <Cards pic={Frame151_3}/>
            <Cards pic={Frame151_4}/>
            <Cards pic={Frame151_5}/>
            <Cards pic={Frame151_6}/>
            <Cards pic={Frame151_7}/>
            <Cards pic={Frame151_8}/>
            <Cards pic={Frame151_9}/>
            <Cards pic={Frame151_10}/>
            <Cards pic={Frame151_11}/>
            <Cards pic={Frame151_12}/>
            <Cards pic={Frame151_13}/>
            <Cards pic={Frame151_14}/>
            <Cards pic={Frame151_15}/>
        </div>
        {
            displayMeta && (
                <Modal/>
            )
        }
       
        <Footer/>
    </div>

  )
}

export default PlaceToStay