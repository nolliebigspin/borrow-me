import './ChatCard.css'


interface ContainerProps {
  contact: string;
  lastMessage?: string;
  image?: string;
  online?: boolean;
}

const ChatCard: React.FC<ContainerProps> = ({ contact, lastMessage, image }) => {

  return (
    <div>
    </div>
  );
};

export default ChatCard;
