import axios from "axios";
import React, { FC, useEffect, useState } from "react";

import Message from "./Message";
import classes from "./Inbox.module.scss";
import { IMessage } from "../../interfaces/Message";

const Inbox: FC = () => {
  const [deleting, setDeleting] = useState(false);
  const [messages, setMessages] = useState<IMessage[]>([]);

  const getMessages = async () => {
    const { data } = await axios.get<IMessage[]>("/api/inbox");
    setMessages(data);
  };

  const deleteHandler = async (_id: string) => {
    setDeleting(true);
    await axios.delete("/api/inbox", { data: { _id } });
    setDeleting(false);
    setMessages((prevMessages) => prevMessages.filter((message) => message._id !== _id));
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div className={classes.inbox}>
      {messages.map((message) => (
        <Message key={message._id} message={message} onDelete={deleteHandler} deleting={deleting} />
      ))}
    </div>
  );
};

export default Inbox;
