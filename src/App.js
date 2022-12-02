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
import cln from './App.module.scss'
import { DropdownButton } from './components/Sidebar/DropdownButton/DropdownButton';
import { useState } from 'react';


const App = (props) => {
    // Dropdown menu functionality
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const mainContentClick = () => setDropdownOpen(false)

    // Generate routes for each dialog
    let messageRoutes =
        props.appState.messagesData.dialogsData.dialogs.map(r =>
            <Route
                key={r.id}
                path={'/messages/' + r.id}
                element={
                    <Messages
                        messagesData={props.appState.messagesData}
                        dialogID={r.id}
                        dispatch={props.dispatch}
                    />
                }
            />
    )


    return (
        <BrowserRouter basename={'/text'}>
            <div
                className={cln.appMain}
            >
                <div className={cln.header}>
                    <div className={cln.headerBar}>
                        <HeaderBar/>
                    </div>
                    <div className={cln.HeaderLogo}>
                        <HeaderLogo/>
                    </div>
                </div>
                <div
                    className={cln.menu}
                    dropdown-open={dropdownOpen.toString()}
                >
                    <div className={`${cln.dropdownButton}`}>
                        <DropdownButton
                            setDropdownOpen={setDropdownOpen}
                            dropdownOpen={dropdownOpen}
                        />
                    </div>
                    <div className={`${cln.sidebar}`}>
                        <Sidebar
                            setDropdownOpen={setDropdownOpen}
                        />
                    </div>
                </div>
                <div
                    className={cln.mainContent}
                    onClick={mainContentClick}
                >
                    <Routes>
                        <Route
                            path='/news'
                            element={<News/>}
                        />
                        <Route
                            path='/*'
                            element={
                                <Profile
                                    profileData
                                        ={props.appState.profileData}
                                    dispatch={props.dispatch}
                                />
                            }
                        />
                        <Route
                            path='/messages/'
                            element={
                                <Messages
                                    messagesData
                                        ={props.appState.messagesData}
                                    dispatch={props.dispatch}
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
