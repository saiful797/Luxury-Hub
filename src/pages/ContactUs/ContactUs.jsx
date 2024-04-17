import { Helmet } from "react-helmet-async";

const ContactUs = () => {
    return (
        <div className="mt-5 flex justify-center items-center">
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <p className="text-center mx-auto text-teal-600 text-4xl font-medium"><img src="https://i.ibb.co/6yYzCYh/contact.png" alt="" /></p>
        </div>
    );
};

export default ContactUs;