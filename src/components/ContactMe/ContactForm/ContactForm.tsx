const ContactForm = () => {
    return ( 
        <div className="w-[100%]">
            <form className="flex flex-col gap-6" action="">
                <div className="flex items-center gap-6 ">
                    <input className="flex-1 w-[100%] p-4 text-sm bg-[#130f2a] rounded-lg border-2 border-[#6751b9]" type="text" name="firstname" placeholder="First Name" />
                    <input className="flex-1 w-[100%] p-4 text-sm bg-[#130f2a] rounded-lg border-2 border-[#6751b9]"  type="text" name="lastname" placeholder="Last Name" />
                </div>
                <input className="flex-1 w-[100%] p-4 text-sm bg-[#130f2a] rounded-lg border-2 border-[#6751b9]"  type="email" name="email" placeholder="Email" />
                <input className="flex-1 w-[100%] p-4 text-sm bg-[#130f2a] rounded-lg border-2 border-[#6751b9]"  type="tel" name="celular" placeholder="Celular" />
                <textarea className="flex-1 w-[100%] p-4 text-sm bg-[#130f2a] rounded-lg border-2 border-[#6751b9]"  name="message" placeholder="Message" />

                <button className="text-base w-[100%] font-medium border-2 border-[#a892fe] text-white rounded-xl bg-gradient-to-r from-[#a892fe] to-[#8064e8] p-3 ease-linear transition-all duration-300 cursor-pointer">SEND</button>
            </form>
        </div>
     );
}
 
export default ContactForm;