import User from "./User";
import UserClass from "./UserClass";

export const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste React Web series</h2>
            <User name="Besal Raj (function)"/>
            <UserClass name="Besal Raj (class)"/>
        </div>
    )
}

export default About;