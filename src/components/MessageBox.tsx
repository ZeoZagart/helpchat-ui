import { useUser } from "../context/UserContext";
import { Message } from "../models/Message";
import {Typography} from "./Text/Typography.tsx";

function MessageBox({senderId, content, timestamp}: Message) {
  const { user } = useUser();

  const isSelfMessage = senderId === user?.id;

  return (
    <div className={isSelfMessage ? 'text-left' : 'text-right'}>
        <Typography variant={"p"}>
            {content}
        </Typography>
        <br/>
        <Typography>
            {timestamp.toISOString()}
        </Typography>
    </div>
  );
}

export default MessageBox;
