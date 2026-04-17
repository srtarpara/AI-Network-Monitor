//useState is a React hook that lets us track data that changes
import { useState } from "react"

function Login(){
    //username and password are our state variables
    //setUsername and SetPassword are the functions that update them
    //useState("") means that they start as empty strings
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")

    return (
        //wrapper fills the entire screen with a dark background and centers the card both vertically and horizontally
        <div style={styles.wrapper}>

            {/* card is the white box in th ecenter of the screen */}
            <div style={styles.card}>

                {/* logo - "ai" is white and "network monitor" is blue using the accent style */}
                <h1 style={styles.logo}>ai<span style={styles.accent}> network monitor</span></h1>

                {/* tagline sits below the logo */}
                <p style={styles.tagline}>Secure network intelligence</p>

                {/* email input field */}
                <div style={styles.fieldWrap}>
                    <label style={styles.label}>Username</label>
                    <input
                        style={styles.input}
                        type="username"
                        placeholder="johndoe"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                {/* password input field - type="password" hides the characters */}
                <div style={styles.fieldWrap}>
                    <label style={styles.label}>Password</label>
                    <input
                        style={styles.input}
                        type="password"
                        placeholder="**********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {/* login button - for now it just logs the values to the console to confirm state works */}
                <button
                    style={styles.button}
                    onClick={() => console.log("username:", username, "password:", password)}
                >
                    Access Network
                </button>
            </div>
        </div>
    )
}


//styles object - each key is a set of CSS rules applied via style={styles.keyName}
const styles = {
    //fills the full viewport height, dark background, centers the card
    wrapper: {
        minHeight: "100vh",
        background: "#0d0d0f",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    
    //the login card container
    card: {
        width: "100%",
        maxWidth: "380px",
        background: "#16161a",
        border: "0.5px solid #2a2a30",
        borderRadius: "12px",
        padding: "2rem",
    },

    //logo text styling
    logo: {
        color: "#c8d6e5",
        fontSize: "18px",
        fontWeight: "500",
        magin: "0 0 0.5rem 0",
    },

    //blue accent color for the logo
    accent: {
        color: "#3a8fd4",
    },

    //small uppercase text below the logo
    tagline: {
        color: "#4a5568",
        fontsize: "11px",
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        margin: "0 0 1.75rem 0",
    },

    //wraps each label + input pair
    fieldWrap: {
        marginBottom: "1rem",
    },

    //small ppercase label above each input
    label: {
        display: "block",
        fontSize: "11px",
        color: "#4a5568",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        marginBottom: "6px",
    },

    //dark input field with monospace font to feel like a terminal
    input: {
        width: "100%",
        background: "#0d0d0f",
        border: "0.5px solid #2a2a20",
        borderRadius: "8px",
        padding: "10px 12px",
        fontSize: "13px",
        color: "#c8d6e5",
        boxSizing: "border-box",
        fontFamily: "monospace",
        outline: "none",
    },
    
    //blue login button spanning full width of the card
    button: {
        width: "100%",
        padding: "11px",
        background: "#3a8fd4",
        border: "none",
        borderRadius: "8px",
        color: "#0d0d0f",
        fontSize: "13px",
        fontWeight: "500",
        cursor: "pointer",
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        marginTop: "0.5rem",
        fontFamily: "monospace",
    },
}


export default Login