import axios from "axios";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { FormEvent, useState } from "react";

import Button from "../UI/Button/Button";
import Form from "../UI/Form/Form";
import Notification from "../UI/Notification/Notification";
import classes from "./Contact.module.scss";
import { INotification } from "../../interfaces/Notification";

function Contact() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [notification, setNotification] = useState<INotification | null>(null);
  const [text, setText] = useState("");

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      await axios.post("api/contact", { email, name, text });
      setEmail("");
      setName("");
      setText("");
      setNotification({ success: "Message was sent" });
    } catch (error) {
      setNotification({ error: `The message could not be sent` });
    }
    setLoading(false);
  };

  return (
    <section className={classes.contact}>
      <h2>SEND ME A MESSAGE</h2>
      {notification && <Notification value={notification} onHide={() => setNotification(null)} />}
      <Form onSubmit={submitHandler}>
        <div>
          <AiOutlineMail size={26} />
          <input type="email" required value={email} placeholder="E-mail" onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div>
          <AiOutlineUser size={26} />
          <input type="text" required value={name} placeholder="Name" onChange={(event) => setName(event.target.value)} />
        </div>
        <textarea rows={8} required value={text} placeholder="Message" onChange={(event) => setText(event.target.value)}></textarea>
        {loading ? <Button disabled>Sending Message...</Button> : <Button>Send Message</Button>}
      </Form>
    </section>
  );
}

export default Contact;
