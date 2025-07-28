import React from 'react';

export const Contact = () => {
    return(    
        <section id="Contact">
        <h1>Contact Me</h1>
        <p>Feel free to get in touch with me using the form below:</p>
        <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" />
            <br />

            <b>Choose your gender</b><br />
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">Female</label>
            <br />

            <b>Select your interests:</b><br />
            <input type="checkbox" id="coding" value="coding" />
            <label htmlFor="coding">Coding</label>
            <input type="checkbox" id="reading" value="reading" />
            <label htmlFor="reading">Reading</label>
            <br />

            <label htmlFor="bio">Bio (up to 200 characters):</label>
            <input type="text" id="bio" />
            <br />

            <button className="submit" type="submit">Submit</button>
        </form>
        </section>
    )
};

