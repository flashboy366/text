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
                                    dispatch={props.dispatch}
                                />
                            }
                        />
                        <Route
                            path='/messages/'
                            element={
                                <Messages
                                    messagesData={props.appState.messagesData}
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
