import "../components/ContactFormStyles.css";

const ContactForm = () => {
  return (
    <div className="formContainer">
        <h1>Send a message to us!</h1>
        <form>
            <input placeholder="Name"/>
            <input placeholder="Email"/>
            <input placeholder="Subject"/>
            <textarea placeholder="Message" row="4"/>
            <button>Send Message</button>
        </form>
    </div>
  )
}

export default ContactForm