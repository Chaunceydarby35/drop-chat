import { FaYoutube } from "react-icons/fa6"
import ChatLists from "./ChatLists"

const ChatContainer = () => {
  return (
    <div>
        <div>
            <div className="chats_header">
                <h4>
                    Username: Chauncey
                </h4>
                <p>
                    <FaYoutube className="chats_icon"/> DropChat
                </p>
                <p className="chats_logout">
                    <strong>Logout</strong>
                </p>
            </div>
            <ChatLists/>
        </div>
    </div>
  )
}

export default ChatContainer