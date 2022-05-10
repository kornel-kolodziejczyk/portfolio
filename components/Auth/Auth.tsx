import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { FC, FormEvent, useState } from "react";
import { SignInResponse, signIn } from "next-auth/react";
import { useRouter } from "next/router";

import Button from "../UI/Button/Button";
import Form from "../UI/Form/Form";
import Notification from "../UI/Notification/Notification";
import classes from "./Auth.module.scss";
import { INotification } from "../../interfaces/Notification";

const Auth: FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<INotification | null>(null);
  const [password, setPassword] = useState("");
  const router = useRouter();

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    const response: SignInResponse | undefined = await signIn<"credentials">("credentials", { redirect: false, email, password });
    setLoading(false);

    if (response && response.error) {
      setNotification({ error: response.error });
    } else {
      router.replace("/");
    }
  };

  return (
    <section className={classes.auth}>
      <h2>LOGIN</h2>
      {notification && <Notification value={notification} onHide={() => setNotification(null)}></Notification>}
      <Form onSubmit={submitHandler}>
        <div>
          <AiOutlineMail size={26} />
          <input type="email" placeholder="E-mail" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <AiOutlineLock size={26} />
          <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {loading ? <Button disabled>Logging in...</Button> : <Button>Login</Button>}
      </Form>
    </section>
  );
};

export default Auth;
