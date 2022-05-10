import axios from "axios";
import { AiOutlineLock } from "react-icons/ai";
import { FC, FormEvent, useState } from "react";
import { useSession } from "next-auth/react";

import Button from "../UI/Button/Button";
import Form from "../UI/Form/Form";
import Notification from "../UI/Notification/Notification";
import classes from "./Profile.module.scss";
import { INotification } from "../../interfaces/Notification";

const Profile: FC = () => {
  const [currentPassword, setCurrentPaswsword] = useState("");
  const [loading, setLoading] = useState(false);
  const [newPassword, setNewPaswsword] = useState("");
  const [notification, setNotification] = useState<INotification | null>(null);
  const { data: session } = useSession();

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await axios.patch("api/profile", { email: session?.user?.email, newPassword, currentPassword });
      setCurrentPaswsword("");
      setNewPaswsword("");
      setNotification({ success: "Profile updated" });
    } catch (error) {
      setNotification({ error: "Profile update failed" });
    }
    setLoading(false);
  };

  return (
    <div className={classes.profile}>
      <h2>My Profile</h2>
      {notification && <Notification value={notification} onHide={() => setNotification(null)} />}
      <Form onSubmit={submitHandler}>
        <div>
          <AiOutlineLock size={26} />
          <input type="password" required min={7} placeholder="Current Password" value={currentPassword} onChange={(e) => setCurrentPaswsword(e.target.value)} />
        </div>
        <div>
          <AiOutlineLock size={26} />
          <input type="password" required min={7} placeholder="New Password" value={newPassword} onChange={(e) => setNewPaswsword(e.target.value)} />
        </div>
        {loading ? <Button>Updating profile...</Button> : <Button>Update profile</Button>}
      </Form>
    </div>
  );
};

export default Profile;
