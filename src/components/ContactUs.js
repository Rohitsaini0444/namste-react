const ContactComponent = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <input type="text" placeholder="Your Name" className="border p-2 m-2"/>
            <br/>
            <input type="text" placeholder="Your Email" className="border p-2 m-2"/> 
            <br/>
            <textarea placeholder="Your Message" className="border p-2 m-2"></textarea>
            <br/>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded m-2">Submit</button>
        </div>
    );
}

export default ContactComponent;