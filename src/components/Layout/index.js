import './index.scss';
import Sidebar from '../Sidebar/index.js'
import { Outlet } from 'react-router-dom'
const Layout = ()=>{
    return <>
    <div className="app">
        <Sidebar/>
        <div className="page">
            <p className="tags top-tags">&lt;body&gt;</p>
            <Outlet/>
            <p className="tags bottom-tags">&lt;/body&gt;</p>
        </div>

    </div>

    </>
}


export default Layout;



