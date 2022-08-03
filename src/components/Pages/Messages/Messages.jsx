import cln from './Messages.module.css'
import Contact from "./Contact/Contact";
import Message from "./Message/Message";
import * as React from "react";
import {createRef, useEffect} from "react";

const Messages = (props) => {

    // Read opened dialog id from url, if there is one open
    let dialogOpen = props.dialogId !== undefined

    // Read contact name of open dialog and generate string for render
    let activeContact = (dialogOpen) ?
        (': ' + props.messagesData.contacts[props.dialogId].name) : ''

    // Generate contact components list
    let contactEls = props.messagesData.contacts
        .map(c => <Contact
            name={c.name}
            id={c.id}
            openDialogId={props.dialogId}
            firstDialogLoadSet={props.firstDialogLoadSet}
        />)

    // Generate message components list
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



    // Handle new message input and store it to state
    let typeArea = createRef()
    let type = () => {
        let text = typeArea.current.value;
        props.typeInput(text, 'message')
    }

    // Add new sent message to state
    let addMessage = () => props.addMessage(props.dialogId)
    // Handle enter keypress for sending new message
    let handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addMessage()
        }
    }

    // Scrolling to last message functionality
    let messagesEnd = createRef()
    let scrollToEnd = () => messagesEnd.current.scrollIntoView()

    useEffect(() => {
        if (dialogOpen) {
            // Scroll to last message if it`s first dialog load, or in case
            // of new message
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
            {/* Header */}
            <h2>Messages{activeContact}</h2>
            <div className={cln.messageBrowser}>
                {/* Contact list */}
                <div className={cln.contacts}>
                    <hr></hr>
                    {contactEls}
                </div>
                {/* Dialog section */}
                {(dialogOpen) ?
                    <div className={cln.dialogs}>
                        <hr></hr>
                        {/* Message components */}
                        <div className={cln.messagesView}>
                            {messageEls}
                            <div ref={messagesEnd}></div>
                        </div>
                        {/* New message input area */}
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