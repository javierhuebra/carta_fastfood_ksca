import { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router';
import { FaGooglePlusSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import imgAhora from '../assets/ahoraksca.png';
const Inicio = ({ lang }) => {
    const [showImage, setShowImage] = useState(true);

    return (
        <div className="flex-1 flex flex-col bg-white relative">
            {
                showImage &&
                <div className="bg-black bg-opacity-[0.5] absolute w-full top-0 bottom-0 z-50 flex flex-col justify-center items-center p-3">
                    <div className='bg-black h-[50px] w-full flex justify-end items-center'>
                        <div className='bg-primary px-5 py-2'
                        onClick={()=>setShowImage(false)}
                        >
                            Cerrar
                        </div>
                    </div>
                    <img src={imgAhora} alt="" />
                </div>
            }


            <div className='justify-center items-center flex'>
                <img src={logo} alt="" className='h-[130px] drop-shadow-lg' />
            </div>
            <div className='mx-2 flex flex-col  flex-1 '>
                {
                    lang === 'es' ?
                        <p className=' text-accent text-xl text-center font-bold'>
                            ¡Bienvenidos a K'scaritas, el hogar de la gastronomía playera!
                        </p>
                        :
                        <p className=' text-accent text-xl text-center font-bold'>
                            Welcome to K'scaritas, the home of the most delicious and original beach baked goods!
                        </p>
                }

                <br />
                {
                    lang === 'es' ?
                        <>
                            <p className=' text-xl text-accent text-center fontbo'>
                                En este menú digital encontrará todas nuestras opciones comestibles y bebidas.
                            </p>
                            <br />
                            <p className=' text-xl text-accent text-center'>
                                En caso de necesitar mas información puede visitar <a href="https://kscaritas.com/" target='_blank' className='text-primary underline underline-offset-2'>nuestra web</a>.
                            </p>
                        </>
                        :
                        <>
                            <p className=' text-xl text-accent text-center fontbo'>
                                In this digital menu, you will find all our food and drink options.
                            </p>
                            <br />
                            <p className=' text-xl text-accent text-center'>
                                If you need more information, you can visit <a href="https://kscaritas.com/" target='_blank' className='text-primary underline underline-offset-2'>our website</a>.                            </p>
                        </>
                }

                <div className=' flex-1 flex  flex-col'>

                    <Link to='/carta' className='text-center bg-primary px-4 py-4 border-[3px] border-accent rounded-lg text-2xl mt-6 text-accent shadow-lg font-bold'>Ir al Menú</Link>

                    <div className='mb-2 flex justify-between items-center mt-6'>
                        {/* <Link to='https://g.page/r/CZXnwFuuEQLiEBM/review' target='_blank' className='bg-red-700 rounded-lg px-4 py-2 text-white font-bold shadow-lg flex items-center justify-start'>
                            <p className='mr-1'>Dejar una Reseña </p><FaGooglePlusSquare className='text-2xl' />
                        </Link> */}
                        <p className='italic opacity-[0.4]'>Surcursal Bariloche 770</p>
                        <div className='flex'>
                            <Link to='https://www.instagram.com/kscaritas/' target='_blank' className='mr-2'>
                                <FaInstagram className='text-4xl text-accent mr-1' />
                            </Link>

                            <Link to='https://www.facebook.com/kscaritas/' target='_blank' className='mr-2'>
                                <AiOutlineFacebook className='text-4xl text-accent' />
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inicio;
