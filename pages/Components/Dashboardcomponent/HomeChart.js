import React from 'react'

const HomeChart = () => {
    return (
        <>
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-lg-4">
                    <div className="card">
                        <h5 className="card-header">Tasks (Project Name)</h5>
                        <div className="card-body">
                            <div className="ct-chart ct-golden-section" style={{ height: '354px' }} />
                            <div className="text-center">
                                <span className="legend-item mr-2">
                                    <span className="fa-xs text-primary mr-1 legend-tile"><i className="fa fa-fw fa-square-full" /></span>
                                    <span className="legend-text">Completed</span>
                                </span>
                                <span className="legend-item mr-2">
                                    <span className="fa-xs text-secondary mr-1 legend-tile"><i className="fa fa-fw fa-square-full" /></span>
                                    <span className="legend-text">Pending</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeChart