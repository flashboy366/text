import cln from './Message.module.css'

const Message = (props) => {

    return (
        <div className={
            cln.message + ' '
            + (props.origin === 'sent' ? cln.sent : cln.received)
        }>
            <div className={cln.leftAvatar}>
                {props.origin !== 'sent' ? <img src={props.userAvatar}></img> : ''}
            </div>
            <div className={cln.text}>
                {props.text}
            </div>
            <div className={cln.rightAvatar}>
                {props.origin === 'sent' ? <img src={props.userAvatar}></img> : ''}
            </div>
        </div>
    );
}

export default Message;