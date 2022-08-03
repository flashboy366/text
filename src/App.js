import './App.css';
import HeaderLogo from './components/HeaderLogo/HeaderLogo';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Pages/Profile/Profile';
import HeaderBar from './components/HeaderBar/HeaderBar';
import {BrowserRouter} from "react-router-dom";
import News from "./components/Pages/News/News";
import Music from "./components/Pages/Music/Music";
import Settings from "./components/Pages/Settings/Settings";
import {Routes, Route} from "react-router-dom";
import Messages from "./components/Pages/Messages/Messages";


const App = (props) => {
    // Generate routes for each dialog
    let messageRoutes =
        props.appState.messagesData.dialogsData.dialogs.map(r => 
            <Route
                path={'/messages/' + r.id}
                element={
                    <Messages
                        messagesData={props.appState.messagesData}
                        addMessage={props.addMessage}
                        typeInput={props.typeInput}
                        setNewMessageAdded={props.setNewMessageAdded}
                        firstDialogLoadSet={props.firstDialogLoadSet}
                        dialogId={r.id}
                    />
                }
            />
    )

    return (
        <BrowserRouter>
            <div className='app-main'>
                <HeaderBar/>
                <HeaderLogo/>
                <Sidebar/>
                <div className='main-content'>
                    <Routes>
                        <Route
                            path='/news'
                            element={<News/>}
                        />
                        <Route
                            path='/*'
                            element={
                                <Profile
                                    profileData={props.appState.profileData}
                                    typeInput={props.typeInput}
                                    addPost={props.addPost}
                                    addLike={props.addLike}
                                />
                            }
                        />
                        <Route
                            path='/messages/'
                            element={
                                <Messages
                                    messagesData={props.appState.messagesData}
                                />
                            }
                        />
                        {messageRoutes}
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
