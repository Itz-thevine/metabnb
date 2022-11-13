import React, {useContext} from 'react'
import heroImage from '../assets/heroImage.png';
import Cards from '../components/Cards';
import Frame151 from '../assets/Frame 151.png';
import Frame151_1 from '../assets/Frame 151-1.png';
import Frame151_2 from '../assets/Frame 151-2.png'
import Frame151_3 from '../assets/Frame 151-3.png'
import Frame151_4 from '../assets/Frame 151-4.png'
import Frame151_5 from '../assets/Frame 151-5.png'
import Frame151_6 from '../assets/Frame 151-6.png'
import Frame151_7 from '../assets/Frame 151-7.png'
import aboutImg from '../assets/Frame 59546.png'
import Header from '../components/header/Header';
import Modal from '../components/modal/Modal';
import Partner_1 from '../assets/Group 59537.png'
import Partner_2 from '../assets/Group 4040.png'
import Partner_3 from '../assets/Frame 4041.png'
import { MetaMaskContent } from '../context/context';
import Footer from '../components/footer/Footer';


const Index = () => {
    const {displayMeta} = useContext(MetaMaskContent)

  return (
    <div className=' pt-5 font-main-font'>
        <Header/>
        {/* hero */}
        <div className='mx-4 flex flex-col lg:flex-row pt-20 pb-10 lg:items-center lg:mx-16'>
            <div className='flex flex-col lg:flex-1 lg:h-full lg:items-center lg:text-left lg:justify-start w-full items-center text-center '>
                <p className='text-3xl text-gray-700 lg:text-5xl'>Rent a <span className='text-bgColorOne font-bold'>Place</span> away from <span className='text-bgColorOne font-bold'>Home</span> in the <span className='text-bgColorOne font-bold'>Metaverse</span></p>
                <p className='mt-3 w-[80%] text-gray-700 lg:w-full lg:text-2xl'> we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                <div className='flex w-[80%] mt-3 lg:w-full lg:justify-start'>
                    <input type="text" className='w-4/6 px-3 border-grey-400 text-sm border-y-[0.2px] border-l-[0.2px] rounded-l-md lg:text-base lg:py-2' placeholder='search for location' />
                    <div className='text-center bg-bgColorOne py-2 text-sm rounded-r-md w-2/6 text-white lg:flex lg:items-center lg:justify-center'>Search</div>
                </div>
            </div>
            <div className='flex justify-center lg:flex-1 mt-7'>
                <img src={heroImage} alt="heroImage" className='w-[75%]' />
            </div>
        </div>
        {/* partners */}
        <div className='px-4 py-6 flex flex-col items-center bg-bgColorOne lg:flex-row lg:justify-center lg:items-center'>
            <div className='w-auto flex items-center pb-6 lg:pb-0 lg:mr-12'>
             <img src={Partner_1} alt="MB Token" />
            </div>
            <div className='w-auto flex items-center pb-6 lg:pb-0 lg:mr-12'>
               <img src={Partner_2} alt="Metemask" />
            </div>
            <div className='w-auto flex items-center'>
              <img src={Partner_3} alt="Opensea" />
            </div>
        </div>
        {/* the nfts */}
        <div className='mx-4 flex py-10 flex-col items-center'>
            <p className='text-2xl text-gray-700 text-center lg:font-bold lg:text-3xl'>Inspiration for your next adventure</p>
            <div className='w-auto flex flex-col lg:flex-row lg:flex-wrap lg:mx-10 lg:justify-between'>
                <Cards pic={Frame151}/>
                <Cards pic={Frame151_1}/>
                <Cards pic={Frame151_2}/>
                <Cards pic={Frame151_3}/>
                <Cards pic={Frame151_4}/>
                <Cards pic={Frame151_5}/>
                <Cards pic={Frame151_6}/>
                <Cards pic={Frame151_7}/>
            </div>
        </div>
        {/* about */}
        <div className='px-4 pt-6 pt-10 flex flex-col items-center text-white bg-bgColorOne lg:flex-row lg:flex-wrap lg:px-16'>
            <div className='flex flex-col w-full items-center text-center lg:flex-1 lg:items-start'>
                <p className='text-3xl lg:text-4xl'>Metabnb NFTs</p>
                <p className='text-center mt-3 w-[80%] lg:text-left lg:text-1xl'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
            </div>
            <div className='flex justify-center mt-7 flex-1 mb-7'>
                <img src={aboutImg} alt="heroImage" className='w-[75%]' />
            </div>
        </div>
        {/* footer */}
        <Footer/>
        {
            displayMeta && (
                <Modal/>
            )
        }
    </div>
  )
}

export default Index