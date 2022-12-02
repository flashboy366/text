import cln from './Message.module.scss'

const Message = (props) => {

    return (
        // Main message container
        <div className={
            cln.message + ' ' + (
                props.origin === 'sent' ? cln.sent : cln.received)
        }>
            {/* Contact avatar */}
            <div className={cln.leftAvatar}>
                {props.origin !== 'sent' ? <img alt='' src={props.userAvatar}></img> : ''}
            </div>
            {/* Message contents */}
            <div className={cln.text}>
                {props.text}
            </div>
            {/* User avatar */}
            <div className={cln.rightAvatar}>
                {props.origin === 'sent' ? <img alt='' src={props.userAvatar}></img> : ''}
            </div>
        </div>
    );
}

export default Message;