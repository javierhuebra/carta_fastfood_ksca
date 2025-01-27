import Seccion from "../components/Seccion";
import SubSeccion from "../components/SubSeccion";
import CardRelleno from "../components/CardRelleno";
import { PiBowlFoodFill } from "react-icons/pi";
import CardProductoUn from "../components/CardProductoUn";

import imgCafe from '../assets/cafe.png'

import { MdTouchApp } from "react-icons/md";
import CardChica from "../components/CardChica";

const Carta = () => {
    return (
        <div className="bg-white flex-1">
            <Seccion tituloSeccion={'Especialidades'}
                icono={<PiBowlFoodFill />}
            >
                <SubSeccion tituloSubSeccion={'Fast Food'}>
                    <CardProductoUn

                        imagen={imgCafe}
                        titulo={'Hamburguesa Simple'}
                        descripcion={'Lechuga, tomate y cebolla.'}
                    >
                        <p className="text-sm mr-1"><span className="font-bold">$ 8.000,00</span></p>
                    </CardProductoUn>
                    <CardProductoUn

                        imagen={imgCafe}
                        titulo={'Hamburguesa Completa'}
                        descripcion={'Lechuga, tomate y cebolla.'}
                    >
                        <p className="text-sm mr-1"><span className="font-bold">$ 12.000,00</span></p>
                    </CardProductoUn>
                    <CardProductoUn

                        imagen={imgCafe}
                        titulo={'Super Pancho'}
                        descripcion={'Pancho, papas, etc'}
                    >
                        <p className="text-sm mr-1"><span className="font-bold">$ 4.000,00</span></p>
                    </CardProductoUn>

                    <CardProductoUn

                        imagen={imgCafe}
                        titulo={'Papas Fritas'}
                        descripcion={'Papas fritas con cosas, etc.'}
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
                        descripcion={'Cebolla, tomate, pimiento, aceite de oliva, vinagre, sal y pimienta.'}
                    />
                    <CardRelleno
                        titulo={'Salsa Provenzal'}
                        descripcion={'-'}
                    />
                    <CardRelleno
                        titulo={'Chucrut'}
                        descripcion={'-'}
                    />
                    <CardRelleno
                        titulo={'Salsa Picante (Chili Peppers)'}
                        descripcion={'-'}
                    />
                    <CardRelleno
                        titulo={'Pasta Picante'}
                        descripcion={'-'}
                    />
                    <CardRelleno
                        titulo={'Salsa de Berenjenas (Baba Ganoush)'}
                        descripcion={'-'}
                    />
                    <CardRelleno
                        titulo={'Salsa Roquefort'}
                        descripcion={'-'}
                    />
                    <CardRelleno
                        titulo={'Guacamole'}
                        descripcion={'-'}
                    />
                    <CardRelleno
                        titulo={'Salsa Capresse'}
                        descripcion={'-'}
                    />
                    <CardRelleno
                        titulo={'Salsa Napolitana'}
                        descripcion={'-'}
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

                        imagen={imgCafe}
                        titulo={'Gaseosa 500 ml Pet'}
                        descripcion={''}
                    >
                        <p className="text-sm mr-1"><span className="font-bold">$ 2.000,00</span></p>
                    </CardChica>
                    <CardChica

                        imagen={imgCafe}
                        titulo={'Gaseosa 237 ml Vidrio'}
                        descripcion={''}
                    >
                        <p className="text-sm mr-1"><span className="font-bold">$ 1.000,00</span></p>
                    </CardChica>
                    <CardChica

                        imagen={imgCafe}
                        titulo={'Agua Saborizada 500 ml'}
                        descripcion={''}
                    >
                        <p className="text-sm mr-1"><span className="font-bold">$ 2.800,00</span></p>
                    </CardChica>
                    <CardChica

                        imagen={imgCafe}
                        titulo={'Agua con Gas 500 ml'}
                        descripcion={''}
                    >
                        <p className="text-sm mr-1"><span className="font-bold">$ 1.800,00</span></p>
                    </CardChica>
                    <CardChica

                        imagen={imgCafe}
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

                    imagen={imgCafe}
                    titulo={'Bolsa de Hielo 2 kg'}
                    descripcion={''}
                >
                    <p className="text-sm mr-1"><span className="font-bold">$ 3.500,00</span></p>
                </CardChica>
            </Seccion>

        </div>
    );
}

export default Carta;