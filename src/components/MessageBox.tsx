import { useUser } from "../context/UserContext";
import { Message } from "../models/Message";
import {Typography} from "./Text/Typography.tsx";

function MessageBox({senderId, content, timestamp}: Message) {
  const { user } = useUser();

  const isSelfMessage = senderId === user?.id;

  return (
    <div className={isSelfMessage ? 'chat chat-start' : 'chat chat-end'}>
      <Typography variant={"p"}>
          {content}
      </Typography>
      <br />
      <Typography variant={"xs"} textAlign="right">
          {timestamp.toLocaleTimeString()}
      </Typography>
    </div>
  )
}

export default MessageBox;
