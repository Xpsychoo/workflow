import React from 'react'

const ProjectCard = () => {
    return (
        <>
            <div className="card">
                <h5 className="card-header">Recent Unassigned Tasks</h5>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table">
                            <thead className="bg-light">
                                <tr className="border-0">
                                    <th className="border-0">##</th>
                                    <th className="border-0">Task Name</th>
                                    <th className="border-0">Task Creation Date &amp; time</th>
                                    <th className="border-0">Task Due Date &amp; time</th>
                                    <th className="border-0">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Task A </td>
                                    <td>27 june 2022 07:19 AM </td>
                                    <td>29 july 2022 08:13 AM</td>
                                    <td><a href="task_dtl.html" title="View" className="fas view__icon fa-eye" /></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Task B </td>
                                    <td>26 june 2022 04:19 AM</td>
                                    <td>27 june 2022 09:19 AM</td>
                                    <td><a href="task_dtl.html" title="View" className="fas view__icon fa-eye" /></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Task C </td>
                                    <td>25 june 2022 02:19 AM</td>
                                    <td>26 june 2022 01:19 AM</td>
                                    <td><a href="task_dtl.html" title="View" className="fas view__icon fa-eye" /></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Task D </td>
                                    <td>24 june 2022 06:12 PM</td>
                                    <td>25 june 2022 05:45 PM</td>
                                    <td><a href="task_dtl.html" title="View" className="fas view__icon fa-eye" /></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Task E</td>
                                    <td>23 june 2022 08:3 AM</td>
                                    <td>25 june 2022 02:09 PM</td>
                                    <td><a href="task_dtl.html" title="View" className="fas view__icon fa-eye" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div></>
    )
}

export default ProjectCard