import React from 'react'

const UserManagement = () => {
    return (
        <div>
            <div className="container-fluid  dashboard-content">
                {/* ============================================================== */}
                {/* pageheader */}
                {/* ============================================================== */}
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="page-header">
                            <div className="page-breadcrumb">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html" className="breadcrumb-link">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">User Management</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="project__divDash">
                                <div className="projectList dropdown">
                                    <button className="btn btn-primary" type="button" data-toggle="modal" data-target="#AddUserModal">
                                        Add User <i className="fas fa-plus" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ============================================================== */}
                {/* end pageheader */}
                {/* ============================================================== */}
                <div className="row">
                    {/* ============================================================== */}
                    {/* basic table  */}
                    {/* ============================================================== */}
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-lg-4">
                        <div className="card">
                            <h5 className="card-header">User Management</h5>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-striped table-bordered first">
                                        <thead>
                                            <tr>
                                                <th>User Name</th>
                                                <th>Email</th>
                                                <th>Allocated Projects</th>
                                                <th>Mobile</th>
                                                <th>User Type</th>
                                                <th className="action__class-2">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Tiger Nixon</td>
                                                <td>Tiger@mail.com</td>
                                                <td>Project A</td>
                                                <td>9876543218</td>
                                                <td>Project Manager</td>
                                                <td><i className="fas fa-edit edit__btn" /> <i className="fas fa-trash-alt dlete__btn" /><i className="fas view__icon fa-eye" /></td>
                                            </tr>
                                            <tr>
                                                <td>Garrett Winters</td>
                                                <td>Garrett@mail.com</td>
                                                <td>Project B</td>
                                                <td>987654325</td>
                                                <td>Team Member</td>
                                                <td><i className="fas fa-edit edit__btn" /> <i className="fas fa-trash-alt dlete__btn" /><i className="fas view__icon fa-eye" /></td>
                                            </tr>
                                            <tr>
                                                <td>Cedric Winters</td>
                                                <td>Cedric@mail.com</td>
                                                <td>Project C</td>
                                                <td>987654325</td>
                                                <td>Project Manager</td>
                                                <td><i className="fas fa-edit edit__btn" /> <i className="fas fa-trash-alt dlete__btn" /><i className="fas view__icon fa-eye" /></td>
                                            </tr>
                                            <tr>
                                                <td>Airi Winters</td>
                                                <td>Accountant@mail.com</td>
                                                <td>Project D</td>
                                                <td>987654325</td>
                                                <td>Team Leader</td>
                                                <td><i className="fas fa-edit edit__btn" /> <i className="fas fa-trash-alt dlete__btn" /><i className="fas view__icon fa-eye" /></td>
                                            </tr>
                                            <tr>
                                                <td>Brielle Winters</td>
                                                <td>Brielle@mail.com</td>
                                                <td>Project E</td>
                                                <td>984564325</td>
                                                <td>Team Member</td>
                                                <td><i className="fas fa-edit edit__btn" /> <i className="fas fa-trash-alt dlete__btn" /><i className="fas view__icon fa-eye" /></td>
                                            </tr>
                                            <tr>
                                                <td>Herrod Winters</td>
                                                <td>Herrod@mail.com</td>
                                                <td>Project A</td>
                                                <td>984564325</td>
                                                <td>Team Leader</td>
                                                <td><i className="fas fa-edit edit__btn" /> <i className="fas fa-trash-alt dlete__btn" /><i className="fas view__icon fa-eye" /></td>
                                            </tr>
                                            <tr>
                                                <td>Rhona Winters</td>
                                                <td>Rhona@mail.com</td>
                                                <td>Project C</td>
                                                <td>984584325</td>
                                                <td>Project Manager</td>
                                                <td><i className="fas fa-edit edit__btn" /> <i className="fas fa-trash-alt dlete__btn" /><i className="fas view__icon fa-eye" /></td>
                                            </tr>
                                            <tr>
                                                <td>Colleen Winters</td>
                                                <td>Colleen@mail.com</td>
                                                <td>Project B</td>
                                                <td>984584325</td>
                                                <td>Project Manager</td>
                                                <td><i className="fas fa-edit edit__btn" /> <i className="fas fa-trash-alt dlete__btn" /><i className="fas view__icon fa-eye" /></td>
                                            </tr>
                                        </tbody></table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ============================================================== */}
                    {/* end basic table  */}
                    {/* ============================================================== */}
                </div>

                <div className="modal fade" id="AddUserModal" tabIndex={-1} role="dialog" aria-labelledby="AddUserModal" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add User</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-row">
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Full Name" />
                                        </div>
                                        <div className="col">
                                            <select className="form-control" name="userType" id="userType">
                                                <option value="admin">Select User Type
                                                </option><option value="admin">Team Lead</option>
                                                <option value="projectmanager">Project Manager</option>
                                                <option value="teammember">Team Member</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col">
                                            <input type="password" className="form-control" placeholder="Password" />
                                        </div>
                                        <div className="col">
                                            <input type="password" className="form-control" placeholder="Confirm Password" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col">
                                            <input type="email" className="form-control" placeholder="Email" />
                                        </div>
                                        <div className="col">
                                            <input type="tel" className="form-control" placeholder="Mobile No." />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col" id="allocated" style={{ display: 'none' }}>
                                            <select className="js-example-basic-multiple" multiple="multiple">
                                                <option value="Project_A" selected="selected">Project A</option>
                                                <option value="Project_B">Project B</option>
                                                <option value="Project_C" selected="selected">Project C</option>
                                                <option value="Project_D">Project D</option>
                                            </select>
                                        </div>
                                        {/*    selected="selected" to by default select */}
                                        <div className="col" id="allocated1" style={{ display: 'none' }}>
                                            <select className="js-example-basic-multiple" multiple="multiple" aria-placeholder="Select Team Lead">
                                                <option value="Teamlead_A" selected="selected">Team Lead A</option>
                                                <option value="Teamlead_B">Team Lead B</option>
                                                <option value="Teamlead_C">Team Lead C</option>
                                                <option value="Teamlead_D" selected="selected">Team Lead D</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserManagement