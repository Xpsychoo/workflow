import React from 'react'

const TaskManagement = () => {
    return (
        <>
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
                                        <li className="breadcrumb-item active" aria-current="page">Task Management</li>
                                    </ol>
                                </nav>
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
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 projectXtask">
                        <div className="card ">
                            <div className="SelectInppt">
                                <h5 className="card-header">Task Management</h5>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Project A</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Project B</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Project C</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="import_export_btn">
                                <i type="button" data-toggle="modal" data-target="#AddCsw_modal" title="Import task from csv" className="fas csv_icn fa-file-excel" />
                                <i title="Add task" type="button" data-toggle="modal" data-target="#AddTAskManager" className="fas add_icon fa-plus" />
                            </div>
                            <div className="card-body">
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="table-responsive">
                                            <table className="table table-striped table-bordered first">
                                                <thead>
                                                    <tr>
                                                        <th>Task no.</th>
                                                        <th>Title</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td> 1</td>
                                                        <td>Task 1</td>
                                                        <td><i title="Allocate To" type="button" data-toggle="modal" data-target="#Assgn2Mdl" className="assgn__btn fas fa-tags" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td> 2</td>
                                                        <td>Task 2</td>
                                                        <td><i title="Allocate To" type="button" data-toggle="modal" data-target="#Assgn2Mdl" className="assgn__btn fas fa-tags" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td> 2</td>
                                                        <td>Task 2</td>
                                                        <td><i title="Allocate To" type="button" data-toggle="modal" data-target="#Assgn2Mdl" className="assgn__btn fas fa-tags" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td> 2</td>
                                                        <td>Task 2</td>
                                                        <td><i title="Allocate To" type="button" data-toggle="modal" data-target="#Assgn2Mdl" className="assgn__btn fas fa-tags" /></td>
                                                    </tr>
                                                </tbody></table>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="table-responsive">
                                            <table className="table table-striped table-bordered first">
                                                <thead>
                                                    <tr>
                                                        <th>Task no.</th>
                                                        <th>Title</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td> 1</td>
                                                        <td>Task 1</td>
                                                        <td><i title="Allocate To" type="button" data-toggle="modal" data-target="#Assgn2Mdl" className="assgn__btn fas fa-tags" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td> 2</td>
                                                        <td>Task 2</td>
                                                        <td><i title="Allocate To" type="button" data-toggle="modal" data-target="#Assgn2Mdl" className="assgn__btn fas fa-tags" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td> 2</td>
                                                        <td>Task 2</td>
                                                        <td><i title="Allocate To" type="button" data-toggle="modal" data-target="#Assgn2Mdl" className="assgn__btn fas fa-tags" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td> 2</td>
                                                        <td>Task 2</td>
                                                        <td><i title="Allocate To" type="button" data-toggle="modal" data-target="#Assgn2Mdl" className="assgn__btn fas fa-tags" /></td>
                                                    </tr>
                                                </tbody></table>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                        <div className="table-responsive">
                                            <table className="table table-striped table-bordered first">
                                                <thead>
                                                    <tr>
                                                        <th>Task no.</th>
                                                        <th>Title</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td> 1</td>
                                                        <td>Task 1</td>
                                                        <td><i title="Allocate To" type="button" data-toggle="modal" data-target="#Assgn2Mdl" className="assgn__btn fas fa-tags" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td> 2</td>
                                                        <td>Task 2</td>
                                                        <td><i title="Allocate To" type="button" data-toggle="modal" data-target="#Assgn2Mdl" className="assgn__btn fas fa-tags" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td> 2</td>
                                                        <td>Task 2</td>
                                                        <td><i title="Allocate To" type="button" data-toggle="modal" data-target="#Assgn2Mdl" className="assgn__btn fas fa-tags" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td> 2</td>
                                                        <td>Task 2</td>
                                                        <td><i title="Allocate To" type="button" data-toggle="modal" data-target="#Assgn2Mdl" className="assgn__btn fas fa-tags" /></td>
                                                    </tr>
                                                </tbody></table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ============================================================== */}
                    {/* end basic table  */}
                    {/* ============================================================== */}
                    {/* Assign to Modal Starts */}
                    {/* ============================================================== */}

                    <div className="modal fade" id="Assgn2Mdl" tabIndex={-1} role="dialog" aria-labelledby="AddProjectModal" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Asssign Team Leads</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="form-row">
                                            <div className="col-md-4 new--row">
                                                <h4 className="HdTxt">Team Leads</h4>
                                            </div>
                                            <div className="col-md-8">
                                                <select className="js-example-basic-multiple" multiple="multiple">
                                                    <option value="Yellow" selected="selected">Team Lead A</option>
                                                    <option value="White">Team Lead B</option>
                                                    <option value="Blue" selected="selected">Team Lead C</option>
                                                    <option value="White">Team Lead D</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-4 new--row">
                                                <h4 className="HdTxt">Due Date</h4>
                                            </div>
                                            <div className="col-md-8">
                                                <input className="datetmlcl" type="datetime-local" />
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


                    {/* ============================================================== */}
                    {/* Add Task Modal */}
                    {/* ============================================================== */}

                    <div className="modal fade" id="AddTAskManager" tabIndex={-1} role="dialog" aria-labelledby="AddTAskManager" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Add Task</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="form-row">
                                            <div className="col">
                                                <input type="text" className="form-control" placeholder="Task Name" />
                                            </div>
                                        </div>
                                        <div className="form-row ">
                                            <div className="col">
                                                <textarea className="txtArrtsk" placeholder="Description" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col">
                                                <div className="col">
                                                    <label htmlFor="file"> Attachments </label>   <input type="file" placeholder="Task Description" />
                                                </div>
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

                    {/* ============================================================== */}
                    {/*Upload File Modal */}
                    {/* ============================================================== */}

                    <div className="modal fade" id="AddCsw_modal" tabIndex={-1} role="dialog" aria-labelledby="AddProjectModal" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Upload File</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="form-row">
                                            <div className="col-md-4 new--row">
                                                <h4 className="HdTxt">Select Your File</h4>
                                            </div>
                                            <div className="col-md-8">
                                                <input className="datetmlcl" type="file" />
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
            </div></>
    )
}

export default TaskManagement