import style from './Message.module.less';

const Message = ({ text = "No results" }) => {

  return <div className={style.message}>
    <h2>{text}</h2>
  </div>
};

export default Message;