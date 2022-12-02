import cln from './Messages.module.scss'
import Contact from "./Contact/Contact";
import Message from "./Message/Message";
import * as React from "react";
import {createRef, useEffect} from "react";
import { addMessageActionCreator, setFirstDialogLoadActionCreator, setNewMessageAddedActionCreator } from '../../../redux/reducers/messagesReducer/messagesReducer';
import { typeInputActionCreator } from '../../../redux/reducers/profileReducer/profileReducer';

const Messages = (props) => {

    // Read opened dialog id from url, if there is one open
    let dialogOpen = props.dialogID !== undefined

    // Read contact name of open dialog and generate string for render
    let activeContact = (dialogOpen) ?
        (': ' + props.messagesData.contacts[props.dialogID].name) : ''

    // setting flag for first load of dialog
    const firstDialogLoadSet = (flag) => {
        let action = setFirstDialogLoadActionCreator(flag)
        props.dispatch(action)
    }

    // Generate contact components list
    let contactEls = props.messagesData.contacts
        .map(c => <Contact
            key={c.id}
            name={c.name}
            id={c.id}
            openDialogID={props.dialogID}
            firstDialogLoadSet={firstDialogLoadSet}
        />)

    // Generate message components list
    let messageEls = (dialogOpen) ?
        props.messagesData.dialogsData.dialogs[props.dialogID].content
            .map(m => <Message
                key={m.id}
                text={m.text}
                id={m.id}
                origin={m.origin}
                userAvatar={(m.origin === 'sent') ?
                    props.messagesData.dialogsData.avatars.userAvatar :
                    props.messagesData.dialogsData.avatars.otherAvatar}
            />) : <></>



    // Handle new message input and store it to state
    const typeInput = (text) => {
        let action = typeInputActionCreator(text, 'message')
        props.dispatch(action)
    }
    let typeArea = createRef()
    let type = () => {
        let text = typeArea.current.value;
        typeInput(text, 'message')
    }

    // Add new sent message to state
    let addMessage = () => {
        let action = addMessageActionCreator(props.dialogID)
        props.dispatch(action)
    }
    // Handle enter keypress for sending new message
    let handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addMessage()
        }
    }

    // Scrolling to last message functionality
    let messagesEnd = createRef()
    let scrollToEnd = () => messagesEnd.current.scrollIntoView()

    // Setting flag for adding new message
    const setNewMessageAdded = (flag) => {
        let action = setNewMessageAddedActionCreator(flag)
        props.dispatch(action)
    }

    useEffect(() => {
        if (dialogOpen) {
            // Scroll to last message if it`s first dialog load, or in case
            // of new message
            let newMessageAdded = props.messagesData.dialogsData.newMessageAdded
            let firstDialogLoad = props.messagesData.dialogsData.firstDialogLoad
            if (newMessageAdded || firstDialogLoad) {
                scrollToEnd()
                setNewMessageAdded(false)
                firstDialogLoadSet(false)
            }
        }
    })



    return (
        <div className={cln.messagesPage}>
            {/* Header */}
            <span className={cln.header}>Messages{activeContact}</span>
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
                            <textarea
                                ref={typeArea}
                                placeholder='Type here...'
                                rows='4'
                                onChange={(e) => type(e)}
                                value={props.messagesData.dialogsData.inputBox}
                                onKeyPress={(e) => handleKeyPress(e)}
                            > </textarea>
                            <button
                                onClick={addMessage}
                                className={cln.sendButton}
                            >Send</button>
                        </div>
                    </div> :
                    <></>
                }
            </div>
        </div>
    );
}

export default Messages;