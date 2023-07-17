import React from 'react'
import Footer from './Footer'
import HomeChart from './Dashboardcomponent/HomeChart'
import ProjectCard from './Dashboardcomponent/ProjectCard'
import TeamLeadCard from './Dashboardcomponent/TeamLeadCard'

const Homepage = () => {
  return (
    <>
        <div className="dashboard-ecommerce">
          <div className="container-fluid dashboard-content ">
            <div className="ecommerce-widget" style={{ marginTop: '1em' }}>
              <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="card green">
                    <div className="card-body">
                      <h5 className="text-light">All Completed Tasks</h5>
                      <div className="metric-value d-inline-block">
                        <h1 className="text-light">75</h1>
                      </div>
                      <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                        <a className="ViewDtllink" >View Details</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="card yellow">
                    <div className="card-body">
                      <h5 className="text-light">Progress Tasks</h5>
                      <div className="metric-value d-inline-block">
                        <h1 className="text-light">30</h1>
                      </div>
                      <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                        <a className="ViewDtllink" >View Details</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="card blue">
                    <div className="card-body">
                      <h5 className="text-light">Unassigned Tasks</h5>
                      <div className="metric-value d-inline-block">
                        <h1 className="text-light">12</h1>
                      </div>
                      <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                        <a className="ViewDtllink">View Details</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="card red">
                    <div className="card-body">
                      <h5 className="text-light">Hold/Cancelled Tasks</h5>
                      <div className="metric-value d-inline-block">
                        <h1 className="text-light">32</h1>
                      </div>
                      <div className="metric-label d-inline-block float-right text-success font-weight-bold">
                        <a className="ViewDtllink" >View Details</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="DashPrjMain_box card">
                <h5 className="card-header box_hd">Projects</h5>
                <div className=" btstrbx col-sm-6">
                  <a className="box-inside">
                    <h3 className="project_num"> Project A</h3>
                    <p className="txt_under"><label>Total Tasks </label>: 52</p>
                    <p className="txt_under"><label>Task in Progress</label>: 06</p>
                    <p className="txt_under"><label>Task Completed</label>: 12</p>
                  </a>
                </div>
                <div className=" btstrbx col-sm-6">
                  <a className="box-inside">
                    <h3 className="project_num"> Project B</h3>
                    <p className="txt_under"><label>Total Tasks :</label> 32</p>
                    <p className="txt_under"><label>Task in Progress:</label> 03</p>
                    <p className="txt_under"><label>Task Completed</label> 13</p>
                  </a>
                </div>
                <div className=" btstrbx col-sm-6">
                  <a className="box-inside">
                    <h3 className="project_num"> Project C</h3>
                    <p className="txt_under"><label>Total Tasks </label>: 45</p>
                    <p className="txt_under"><label>Task in Progress</label>: 04</p>
                    <p className="txt_under"><label>Task Completed</label>: 15</p>
                  </a>
                </div>
                <div className=" btstrbx col-sm-6">
                  <a className="box-inside">
                    <h3 className="project_num"> Project D</h3>
                    <p className="txt_under"><label>Total Tasks </label>: 52</p>
                    <p className="txt_under"><label>Task in Progress:</label>: 07</p>
                    <p className="txt_under"><label>Task Completed</label>: 12</p>
                  </a>
                </div>
                <div className=" btstrbx col-sm-6">
                  <a className="box-inside">
                    <h3 className="project_num"> Project E</h3>
                    <p className="txt_under"><label>Total Tasks </label>: 52</p>
                    <p className="txt_under"><label>Task in Progress</label>: 04</p>
                    <p className="txt_under"><label>Task Completed</label>: 18</p>
                  </a>
                </div>
                <div className=" btstrbx col-sm-6">
                  <a className="box-inside">
                    <h3 className="project_num"> Project F</h3>
                    <p className="txt_under"><label>Total Tasks </label>: 52</p>
                    <p className="txt_under"><label>Task in Progress</label>: 06</p>
                    <p className="txt_under"><label>Task Completed</label>: 15</p>
                  </a>
                </div>
                <div className="btstrbx col-sm-6">
                  <a className="box-inside">
                    <button className="btn btn-primary Add_project_btn"><i className="fas fa-plus" /> Add
                      Project</button>
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-lg-12 col-md-6 col-sm-12 col-12">
                  <ProjectCard />
                  <ProjectCard />
                </div>
                <div className="col-xl-6 col-lg-12 col-md-6 col-sm-12 col-12">
                  <ProjectCard />
                  <TeamLeadCard />
                </div>
              </div>
              <HomeChart />

              {/* footer */}


              {/* end footer */}

            </div>

            {/* end wrapper  */}

          </div>
        </div>
    </>
  )
}

export default Homepage