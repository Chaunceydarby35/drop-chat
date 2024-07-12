import { FaYoutube } from "react-icons/fa6"
import ChatLists from "./ChatLists"
import InputText from "./InputText"

const ChatContainer = () => {
  return (
    <div>
        <div>
            <div className="chat_header">
                <h4>
                    Username: Chauncey
                </h4>
                <p>
                    <FaYoutube className="chat_icon"/> DropChat
                </p>
                <p className="chat_logout">
                    <strong>Logout</strong>
                </p>
            </div>
            <ChatLists/>
            <InputText/>
        </div>
    </div>
  )
}

export default ChatContainer