import React from 'react'
import LINK from 'next/link';

const Sidebar = (props) => {
    return (
        <>
            <div className="nav-left-sidebar sidebar-dark">
                <div className="menu-list">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="d-xl-none d-lg-none" >Dashboard</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav flex-column">
                                <li className="nav-divider">
                                    Menu
                                </li>
                                <LINK href='/' className="nav-item ">
                                    <a className="nav-link"><i className="fa fa-fw fa-user-circle" />Dashboard
                                        </a>
                                </LINK>
                                <LINK className="nav-item" href='/Components/ProjectManage'>
                                    <a className="nav-link" ><i className="fas fa-fw fa-chart-pie" />Projects</a>
                                </LINK>
                                <LINK href='/Components/UserManagement' className="nav-item ">
                                    <a className="nav-link" >
                                        <i className="fa fa-fw fa-user" />User Management </a>
                                </LINK>
                                <LINK href='/Components/TaskManagement'  className="nav-item">
                                    <a className="nav-link" ><i className="fa fa-fw fa-rocket" />Tasks
                                        Management</a>
                                </LINK>
                                <LINK className="nav-item " href='/Components/AllTask'>
                                    <a className="nav-link"><i className="fab fa-fw fa-wpforms" />All
                                        Tasks</a>
                                </LINK>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="collapse" aria-expanded="false" data-target="#submenu-4" aria-controls="submenu-4">
                                        <i className="fas fa-file-alt" />Reports</a>
                                    <div id="submenu-4" className="collapse submenu" style={{}}>
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link" >Completed Tasks</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link">Unassigned Tasks</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" >Day-Carryover Task</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link">Ongoing Task</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"><i className="fas fa-fw fa-table" />Task(Calender)</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Sidebar