import User from "./UserClass";
const AboutComponent = () => {
    return (
        <div className="about-page">
            <h1>About Us</h1>
            <p>This is the about page of our application.</p>
            <User name="Aman Saini" location="Delhi, India" contact="aman@example.com" />
        </div>
    );
}
export default AboutComponent;