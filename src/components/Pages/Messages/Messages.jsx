import cln from './Messages.module.css'
import Contact from "./Contact/Contact";
import Message from "./Message/Message";
import * as React from "react";
import {createRef, useEffect} from "react";

const Messages = (props) => {

    let dialogOpen = props.dialogId !== undefined

    let activeContact = (dialogOpen) ?
        (': ' + props.messagesData.contacts[props.dialogId].name) : ''

    let contactEls = props.messagesData.contacts
        .map(c => <Contact
            name={c.name}
            id={c.id}
            openDialogId={props.dialogId}
            firstDialogLoadSet={props.firstDialogLoadSet}
        />)


    let messageEls = (dialogOpen) ?
        props.messagesData.dialogsData.dialogs[props.dialogId].content
            .map(m => <Message
                text={m.text}
                id={m.id}
                origin={m.origin}
                userAvatar={(m.origin === 'sent') ?
                    props.messagesData.dialogsData.avatars.userAvatar :
                    props.messagesData.dialogsData.avatars.otherAvatar}
            />) : <></>



    let typeArea = createRef()
    let type = () => {
        let text = typeArea.current.value;
        props.typeInput(text, 'message')
    }

    let addMessage = () => props.addMessage(props.dialogId)
    let handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addMessage()
        }
    }

    let messagesEnd = createRef()
    let scrollToEnd = () => messagesEnd.current.scrollIntoView()

    useEffect(() => {
        if (dialogOpen) {
            let newMessageAdded = props.messagesData.dialogsData.newMessageAdded
            let firstDialogLoad = props.messagesData.dialogsData.firstDialogLoad

            if (newMessageAdded || firstDialogLoad) {
                scrollToEnd()
                props.setNewMessageAdded(false)
                props.firstDialogLoadSet(false)
            }
        }
    })



    return (
        <div className={cln.messagesPage}>
            <h2>Messages{activeContact}</h2>
            <div className={cln.messageBrowser}>
                <div className={cln.contacts}>
                    <hr></hr>
                    {contactEls}
                </div>
                {(dialogOpen) ?
                    <div className={cln.dialogs}>
                        <hr></hr>
                        <div className={cln.messagesView}>
                            {messageEls}
                            <div ref={messagesEnd}></div>
                        </div>
                        <div className={cln.inputArea}>
                            <div>
                            <textarea
                                ref={typeArea}
                                placeholder='Type here...'
                                rows='4'
                                onChange={(e) => type(e)}
                                value={props.messagesData.dialogsData.inputBox}
                                onKeyPress={(e) => handleKeyPress(e)}
                            > </textarea>
                            </div>
                            <div>
                                <button
                                    onClick={addMessage}
                                    className={cln.sendButton}
                                >Send
                                </button>
                            </div>
                        </div>
                    </div> :
                    <></>
                }
            </div>
        </div>
    );
}

export default Messages;