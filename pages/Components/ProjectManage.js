import React from 'react'
import LINK from 'next/link';

const ProjectManage = () => {
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
                                        <li className="breadcrumb-item"><LINK href="/" className="breadcrumb-link">Dashboard</LINK></li>
                                        <li className="breadcrumb-item active" aria-current="page">Pro  ect Management</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="project__divDash">
                                <div className="projectList dropdown">
                                    <button className="btn btn-primary" type="button" data-toggle="modal" data-target="#AddProjectModal">
                                        Add Project <i className="fas fa-plus" />
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
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card">
                            <h5 className="card-header">Project Management</h5>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-striped table-bordered first">
                                        <thead>
                                            <tr>
                                                <th>Project Name</th>
                                                <th>Project Address</th>
                                                <th>Project Type</th>
                                                <th>Assigned Team Lead</th>
                                                <th>Lat</th>
                                                <th>Long</th>
                                                <th className="action__class">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Project 1</td>
                                                <td>Dubai</td>
                                                <td>commercial</td>
                                                <td>Team Lead A ,<br /> Team Lead C</td>
                                                <td>43.65165</td>
                                                <td>96.65165</td>
                                                <td><i title="Edit" className="fas fa-edit edit__btn" />
                                                    <i title="Delete" className="fas fa-trash-alt dlete__btn" />
                                                    <i title="View" className="fas view__icon fa-eye" />
                                                    <i title="Assign to" type="button" data-toggle="modal" data-target="#Assgn2Mdl" className="assgn__btn fas fa-tags" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Project 2</td>
                                                <td>UAE</td>
                                                <td>commercial</td>
                                                <td>Team Lead B ,<br /> Team Lead D</td>
                                                <td>43.665165</td>
                                                <td>96.65665</td>
                                                <td><i title="Edit" className="fas fa-edit edit__btn" />
                                                    <i title="Delete" className="fas fa-trash-alt dlete__btn" />
                                                    <i title="View" className="fas view__icon fa-eye" />
                                                    <i title="Assign to" type="button" data-toggle="modal" data-target="#Assgn2Mdl" className="assgn__btn fas fa-tags" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Project 3</td>
                                                <td>Dubai</td>
                                                <td>Residential</td>
                                                <td>Team Lead B ,<br /> Team Lead C</td>
                                                <td>73.665165</td>
                                                <td>16.65665</td>
                                                <td><i title="Edit" className="fas fa-edit edit__btn" />
                                                    <i title="Delete" className="fas fa-trash-alt dlete__btn" />
                                                    <i title="View" className="fas view__icon fa-eye" />
                                                    <i title="Assign to" type="button" data-toggle="modal" data-target="#Assgn2Mdl" className="assgn__btn fas fa-tags" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Project 4</td>
                                                <td>Dubai</td>
                                                <td>commercial</td>
                                                <td>Team Lead A ,<br /> Team Lead B</td>
                                                <td>73.665165</td>
                                                <td>16.65665</td>
                                                <td><i title="Edit" className="fas fa-edit edit__btn" />
                                                    <i title="Delete" className="fas fa-trash-alt dlete__btn" />
                                                    <i title="View" className="fas view__icon fa-eye" />
                                                    <i title="Assign to" type="button" data-toggle="modal" data-target="#Assgn2Mdl" className="assgn__btn fas fa-tags" />
                                                </td>
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

                {/* ============================================================== */}
                {/* Modal is here */}
                {/* ============================================================== */}

                <div className="modal fade" id="AddProjectModal" tabIndex={-1} role="dialog" aria-labelledby="AddProjectModal" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add Project</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-row">
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Project Name" />
                                        </div>
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Project Address" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Lat" />
                                        </div>
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Long" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col">
                                            <select className="form-control">
                                                <option>Project Type</option>
                                                <option>Residential</option>
                                                <option>commercial</option>
                                            </select>
                                        </div>
                                    </div></form>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProjectManage    