import React from 'react'

const TeamLeadCard = () => {
    return (
        <> <div className="card">
            <h5 className="card-header">Team Leads (Project-All)</h5>
            <div className="card-body p-0">
                <div className="table-responsive">
                    <table className="table">
                        <thead className="bg-light">
                            <tr className="border-0">
                                <th className="border-0" />
                                <th className="border-0">Team Lead</th>
                                <th className="border-0">Tasks</th>
                                <th className="border-0">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Team Lead A </td>
                                <td>6 Tasks </td>
                                <td><a href="#" title="View" className="fas view__icon fa-eye" /></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Team Lead B </td>
                                <td>2 Tasks </td>
                                <td><a href="#" title="View" className="fas view__icon fa-eye" /></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Team Lead C </td>
                                <td>1 Tasks </td>
                                <td><a href="#" title="View" className="fas view__icon fa-eye" /></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Team Lead D </td>
                                <td>3 Tasks </td>
                                <td><a href="#" title="View" className="fas view__icon fa-eye" /></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Team Lead E </td>
                                <td>4 Tasks </td>
                                <td><a href="#" title="View" className="fas view__icon fa-eye" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div></>
    )
}

export default TeamLeadCard