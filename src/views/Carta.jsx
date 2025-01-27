import Seccion from "../components/Seccion";
import SubSeccion from "../components/SubSeccion";
import CardRelleno from "../components/CardRelleno";
import { PiBowlFoodFill } from "react-icons/pi";
import CardProductoUn from "../components/CardProductoUn";

import imgBurger from '../assets/fastfood/burger.png';
import imgBurger2 from '../assets/fastfood/burger2.png';
import imgPancho from '../assets/fastfood/pancho.png';
import imgFritas from '../assets/fastfood/fritas.png';
import imgGaseosas1 from '../assets/fastfood/gaseosas1.png';
import imgGaseosas2 from '../assets/fastfood/gaseosas2.png';
import imgGaseosas3 from '../assets/fastfood/gaseosas3.png';
import imgAqua from '../assets/fastfood/aquarius.png';
import imgAgua from '../assets/fastfood/agua.png';
import imgHielo from '../assets/fastfood/hielo.png';

import { MdTouchApp } from "react-icons/md";
import CardChica from "../components/CardChica";

const Carta = () => {
    return (
        <div className="bg-white flex-1">
            <Seccion tituloSeccion={'Especialidades'}
                icono={<PiBowlFoodFill />}
            >
                <SubSeccion tituloSubSeccion={'Comida Rápida'}>
                    <CardProductoUn

                        imagen={imgBurger}
                        titulo={'Hamburguesa Simple'}
                        descripcion={'Medallón XL y Papas, salsas/aderezos a gusto.'}
                    >
                        <p className="text-sm mr-1"><span className="font-bold">$ 8.000,00</span></p>
                    </CardProductoUn>
                    <CardProductoUn

                        imagen={imgBurger2}
                        titulo={'Hamburguesa Completa'}
                        descripcion={'Medallón XL, Lechuga, tomate, jamón, queso, huevo, bacon y aderezos/salsas a gusto.'}
                    >
                        <p className="text-sm mr-1"><span className="font-bold">$ 12.000,00</span></p>
                    </CardProductoUn>
                    <CardProductoUn

                        imagen={imgPancho}
                        titulo={'Super Pancho'}
                        descripcion={'Aderezos/salsas y papas a gusto.'}
                    >
                        <p className="text-sm mr-1"><span className="font-bold">$ 4.000,00</span></p>
                    </CardProductoUn>

                    <CardProductoUn

                        imagen={imgFritas}
                        titulo={'Papas Fritas'}
                        descripcion={'Completa (Bacon, cheddar y verdeo), aderezos/salsas a gusto.'}
                    >
                        <p className="text-sm mr-1"><span className="font-bold">$ 4.000,00</span></p>
                    </CardProductoUn>


                </SubSeccion>
            </Seccion>

            <Seccion tituloSeccion={'Salsas y Aderezos'}
                icono={<MdTouchApp />}
            >
                <SubSeccion tituloSubSeccion={'Salsas Especiales'}>
                    <CardRelleno
                        titulo={'Salsa Criolla'}
                        descripcion={''}
                        sinUnderline={true}
                    />
                    <CardRelleno
                        titulo={'Salsa Provenzal'}
                        descripcion={''}
                        sinUnderline={true}
                    />
                    <CardRelleno
                        titulo={'Chucrut'}
                        descripcion={''}
                        sinUnderline={true}
                    />
                    <CardRelleno
                        titulo={'Salsa Picante (Chili Peppers)'}
                        descripcion={''}
                        sinUnderline={true}
                    />

                    <CardRelleno
                        titulo={'Salsa de Berenjenas (Baba Ganoush)'}
                        descripcion={''}
                        sinUnderline={true}
                    />
                    <CardRelleno
                        titulo={'Salsa Roquefort'}
                        descripcion={''}
                        sinUnderline={true}
                    />
                    <CardRelleno
                        titulo={'Guacamole'}
                        descripcion={''}
                        sinUnderline={true}
                    />
                    <CardRelleno
                        titulo={'Salsa Capresse'}
                        descripcion={''}
                        sinUnderline={true}
                    />
                    <CardRelleno
                        titulo={'Salsa Napolitana'}
                        descripcion={''}
                        sinUnderline={true}
                    />

                </SubSeccion>
                <SubSeccion tituloSubSeccion={'Aderezos'}>
                    <CardRelleno
                        titulo={'Mayonesa'}
                        descripcion={''}
                        sinUnderline={true}
                    />
                    <CardRelleno
                        titulo={'Mostaza'}
                        descripcion={''}
                        sinUnderline={true}
                    />
                    <CardRelleno
                        titulo={'Ketchup'}
                        descripcion={''}
                        sinUnderline={true}
                    />
                    <CardRelleno
                        titulo={'Cheddar'}
                        descripcion={''}
                        sinUnderline={true}
                    />
                    <CardRelleno
                        titulo={'Queso Blanco'}
                        descripcion={''}
                        sinUnderline={true}
                    />
                    <CardRelleno
                        titulo={'Barbacoa'}
                        descripcion={''}
                        sinUnderline={true}
                    />
                    <CardRelleno
                        titulo={'Salsa Golf'}
                        descripcion={''}
                        sinUnderline={true}
                    />
                </SubSeccion>
            </Seccion>
            <Seccion tituloSeccion={'Bebidas'}
                icono={<MdTouchApp />}
            >
                <SubSeccion tituloSubSeccion={'Sin Alcohol'}>
                    <CardChica

                        imagen={imgGaseosas1}
                        titulo={'Gaseosa 1,5 lt Pet'}
                        descripcion={''}
                    >
                        <p className="text-sm mr-1"><span className="font-bold">$ 3.800,00</span></p>
                    </CardChica>
                    <CardChica

                        imagen={imgGaseosas2}
                        titulo={'Gaseosa 500 ml Pet'}
                        descripcion={''}
                    >
                        <p className="text-sm mr-1"><span className="font-bold">$ 2.000,00</span></p>
                    </CardChica>
                    <CardChica

                        imagen={imgGaseosas3}
                        titulo={'Gaseosa 237 ml Vidrio'}
                        descripcion={''}
                    >
                        <p className="text-sm mr-1"><span className="font-bold">$ 1.000,00</span></p>
                    </CardChica>
                    <CardChica

                        imagen={imgAqua}
                        titulo={'Agua Saborizada 500 ml'}
                        descripcion={''}
                    >
                        <p className="text-sm mr-1"><span className="font-bold">$ 2.800,00</span></p>
                    </CardChica>
                    <CardChica

                        imagen={imgAgua}
                        titulo={'Agua con Gas 500 ml'}
                        descripcion={''}
                    >
                        <p className="text-sm mr-1"><span className="font-bold">$ 1.800,00</span></p>
                    </CardChica>
                    <CardChica

                        imagen={imgAgua}
                        titulo={'Agua sin Gas 500 ml'}
                        descripcion={''}
                    >
                        <p className="text-sm mr-1"><span className="font-bold">$ 1.800,00</span></p>
                    </CardChica>
                </SubSeccion>

            </Seccion>
            <Seccion tituloSeccion={'Anexos'}
                icono={<MdTouchApp />}
            >
                <CardChica

                    imagen={imgHielo}
                    titulo={'Bolsa de Hielo'}
                    descripcion={''}
                >
                    <p className="text-sm mr-1"><span className="font-bold">$ 3.500,00</span></p>
                </CardChica>
            </Seccion>

        </div>
    );
}

export default Carta;