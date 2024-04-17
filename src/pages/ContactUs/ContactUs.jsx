import { Helmet } from "react-helmet-async";

const ContactUs = () => {
    return (
        <div className="mt-5 p-5">
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <h1 className="text-3xl font-bold mb-5">Contact Support</h1>
            <div className="grid lg:grid-cols-2 gap-4">
                <div className="flex p-5 gap-5 bg-green-100 rounded-3xl w-full">
                    <div className="">
                        <img className="w-28 rounded-full" src="https://i.ibb.co/884qP1P/chat.jpg" alt="" />
                    </div>
                    <div className="mt-10 space-y-3">
                        <h1 className="text-2xl font-bold">Chat</h1>
                        <p>Whats supported?</p>
                        <hr />
                        <p className="text-justify">Chat with a specialist from Luxury Hub support team quickly answer</p>
                        <button className="btn w-full btn-accent">StartChat</button>
                    </div>
                </div>
                <div className="flex p-5 gap-5 bg-green-100 rounded-3xl w-full">
                    <div className="">
                        <img className="w-28 rounded-3xl" src="https://i.ibb.co/pvm9JR2/text.jpg" alt="" />
                    </div>
                    <div className="mt-10 space-y-3">
                        <h1 className="text-2xl font-bold">Text Message</h1>
                        <p>Whats supported?</p>
                        <hr />
                        <p className="text-justify">Send a text from your mobile for any information query.</p>
                        <p>Note: Text-messaging rates apply.</p>
                        <button className="btn w-full btn-accent">Text(456)9996770</button>
                    </div>
                </div>
                <div className="flex p-5 gap-5 bg-green-100 rounded-3xl w-full">
                    <div className="">
                        <img className="w-32 h-28 rounded-3xl" src="https://i.ibb.co/rHc0Ds1/phone.jpg" alt="" />
                    </div>
                    <div className="mt-10 space-y-3">
                        <h1 className="text-2xl font-bold">Phone</h1>
                        <p>Whats supported?</p>
                        <hr />
                        <p className="text-justify">Chat with a specialist from Luxury Hub support team quickly answer</p>
                        <div>
                            <p>In the US or Canada?</p>
                            <button className="btn w-full btn-accent">Call 1(800)255-3700</button>
                        </div>
                        <div>
                            <p>Outside the US or Canada?</p>
                            <p>1(855)548-4698</p>
                            <p>USe TTd service? Dial 711</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ContactUs;