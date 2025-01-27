const CardRelleno = ({titulo, descripcion, sinUnderline}) => {
    return ( 
        <div className="border-[3px] border-accent bg-primary rounded-lg p-1 mb-1">
            <p className={`font-bold ${!sinUnderline && 'underline underline-offset-2'}`}>{titulo}</p>
            <p>{descripcion}</p>
        </div>
     );
}
 
export default CardRelleno;