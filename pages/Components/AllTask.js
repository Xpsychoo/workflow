import React from 'react'

const AllTask = () => {
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
                                        <li className="breadcrumb-item active" aria-current="page">All Tasks</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="project__divDash">
                                <div className="projectList dropdown">
                                    <button className="btn btn-primary" type="button" data-toggle="modal" data-target="#MyTAskAdd">
                                        Add Task <i className="fas fa-plus" />
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
                            <div className="Table__filter_sec pd">
                                <div className="filter__inputs">
                                    <span className="main-filt"><label className="infield"> From</label></span><span><input type="date" /></span>
                                    <span className="main-filt"><label className="infield"> To</label></span><span><input type="date" /></span>
                                </div>
                                <span className="team__selct">
                                    <select name id>
                                        <option value="one">Select Team Lead</option>
                                        <option value="one"> Team Lead A</option>
                                        <option value="one"> Team Lead B</option>
                                        <option value="one"> Team Lead C</option>
                                        <option value="one"> Team Lead D</option>
                                        <option value="one"> Team Lead E</option>
                                        <option value="one"> Team Lead F</option>
                                    </select>
                                </span>
                                <span className="iconbxx"> <i title="Export" className="fas exportEyecon fa-file-pdf" /></span>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-striped table-bordered first">
                                        <thead>
                                            <tr>
                                                <th>Task no.</th>
                                                <th>Title</th>
                                                <th>Priority</th>
                                                <th>Start Date</th>
                                                <th>Due Date</th>
                                                <th>Status</th>
                                                <th>Progress</th>
                                                <th>Assigned Tean Lead</th>
                                                <th className="action__class-1">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td> 1001</td>
                                                <td>Task 1</td>
                                                <td>High</td>
                                                <td>22 feb 2022</td>
                                                <td>27 feb 2022</td>
                                                <td>in Progress</td>
                                                <td>
                                                    <div className="progress mb-3">
                                                        <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                                        </div>
                                                    </div>
                                                    <p style={{ textAlign: 'center', padding: '0px', margin: '0px' }}>25%</p>
                                                </td>
                                                <td>Team Lead A</td>
                                                <td><i className="fas fa-edit edit__btn" /> <i className="fas fa-trash-alt dlete__btn" />
                                                    <a href="task_dtl.html" className="fas view__icon fa-eye" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td> 1002</td>
                                                <td>Task 2</td>
                                                <td>low</td>
                                                <td>12 feb 2022</td>
                                                <td>18 feb 2022</td>
                                                <td>in Progress</td>
                                                <td>
                                                    <div className="progress mb-3">
                                                        <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    <p style={{ textAlign: 'center', padding: '0px', margin: '0px' }}>50%</p>
                                                </td>
                                                <td>Team Lead B</td>
                                                <td><i className="fas fa-edit edit__btn" /> <i className="fas fa-trash-alt dlete__btn" /><a href="task_dtl.html" className="fas view__icon fa-eye" /></td>
                                            </tr>
                                            <tr>
                                                <td> 1003</td>
                                                <td>Task 2</td>
                                                <td>medium</td>
                                                <td>16 feb 2022</td>
                                                <td>22 feb 2022</td>
                                                <td>in Progress</td>
                                                <td>
                                                    <div className="progress mb-3">
                                                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    <p style={{ textAlign: 'center', padding: '0px', margin: '0px' }}>75%</p>
                                                </td>
                                                <td>Team Lead C</td>
                                                <td><i className="fas fa-edit edit__btn" /> <i className="fas fa-trash-alt dlete__btn" /><a href="task_dtl.html" className="fas view__icon fa-eye" /></td>
                                            </tr>
                                            <tr>
                                                <td> 1004</td>
                                                <td>Task 2</td>
                                                <td>Low</td>
                                                <td>16 feb 2022</td>
                                                <td>22 feb 2022</td>
                                                <td>Completed</td>
                                                <td>
                                                    <div className="progress mb-3">
                                                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    <p style={{ textAlign: 'center', padding: '0px', margin: '0px' }}>100%</p>
                                                </td>
                                                <td>Team Lead D</td>
                                                <td><i className="fas fa-edit edit__btn" /> <i className="fas fa-trash-alt dlete__btn" /><a href="task_dtl.html" className="fas view__icon fa-eye" /></td>
                                            </tr>
                                        </tbody></table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="MyTAskAdd" tabIndex={-1} role="dialog" aria-labelledby="AddTAskManager" aria-hidden="true">
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
                                                <select className="form-control">
                                                    <option value="Select"> Select Project</option>
                                                    <option value="Select">Project A</option>
                                                    <option value="Select">Project B</option>
                                                    <option value="Select">Project C</option>
                                                </select>
                                            </div>
                                            <div className="col">
                                                <select className="form-control">
                                                    <option value="Select"> Select Task</option>
                                                    <option value="Select">Task A</option>
                                                    <option value="Select">Task B</option>
                                                    <option value="Select">Task C</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col">
                                                <select className="form-control">
                                                    <option value="Select"> Select Team Lead</option>
                                                    <option value="Select">Team Lead A</option>
                                                    <option value="Select">Team Lead B</option>
                                                    <option value="Select">Team Lead C</option>
                                                </select>
                                            </div>
                                            <div className="col">
                                                <select className="form-control">
                                                    <option value="Select"> Priority</option>
                                                    <option value="Select">High</option>
                                                    <option value="Select">Medium</option>
                                                    <option value="Select">Low</option>
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
                    {/* ============================================================== */}
                    {/* end basic table  */}
                    {/* ============================================================== */}
                </div>
            </div>
        </>
    )
}

export default AllTask