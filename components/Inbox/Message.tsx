import React, { FC } from "react";
import { useRouter } from "next/router";

import Button from "../UI/Button/Button";
import classes from "./Message.module.scss";
import { IMessage } from "../../interfaces/Message";

interface Props {
  message: IMessage;
  onDelete: (_id: string) => void;
  deleting: boolean;
}

const Message: FC<Props> = ({ message, onDelete, deleting }) => {
  const formattedDate = new Date(message.date).toLocaleDateString("pl-PL", { day: "numeric", month: "long", year: "numeric" });
  const router = useRouter();

  const replyHandler = () => router.push(`mailto:${message.email}`);

  return (
    <div className={classes.message}>
      <div className={classes.name}>{message.name}</div>
      <div className={classes.date}>{formattedDate}</div>
      <div className={classes.text}>{message.text}</div>
      <div className={classes.actions}>
        <Button onClick={replyHandler}>Replay</Button>
        {deleting ? <Button disabled>Deleting message...</Button> : <Button onClick={() => onDelete(message._id)}>Delete message</Button>}
      </div>
    </div>
  );
};

export default Message;
