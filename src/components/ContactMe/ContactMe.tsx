import ContactForm from "./ContactForm/ContactForm";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";

const ContactMe = () => {
    return ( 
        <section className="my-4 ml-8 relative">
            <h5 className="text-2xl font-semibold mb-12">Contact Me</h5>

            <div className="contact-content flex gap-12">
                <div style={{flex:1}}>
                    <ContactInfoCard iconUrl={"../src/assets/mail.png"} text={"douglasbuscam@gmail.com"} link={"mailto:douglasbuscam@gmail.com"}/>
                    <ContactInfoCard iconUrl={"https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/external-github-with-cat-logo-an-online-community-for-software-development-logo-bold-tal-revivo.png"}text={"Douglascrc"} link={"https://github.com/Douglascrc"}/>
                </div>
                <div style={{flex:1}}>
                    <ContactForm/>
                </div>
            </div>
        </section>
     );
}
 
export default ContactMe;