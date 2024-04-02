const ContactInfoCard = ({iconUrl, text, link}: {iconUrl:string, text:string, link:string}) => {
    return ( 
        <div className="flex flex-col items-center justify-center bg-[#130f2a] rounded-xl border-[#6751b9] p-6 mb-8">

            <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-[#3d3072] mb-8">

                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img className="w-7 object-contain" src={iconUrl} alt={text} />
                </a>

            </div>

            <p className="text-xs font-normal">{text}</p>
        </div>
     );
}
 
export default ContactInfoCard;