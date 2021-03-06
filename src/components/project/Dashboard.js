import React, { Component } from 'react'
import ProjectList from './projectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect, firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { withRouter } from "react-router-dom";
// import {reteriveProject} from '../../store/project/projectActions'
import { reteriveProjectList } from '../../firebase/firebase.utils'




class Dashboard extends Component {
  render() {
    
    // console.log(this.props);
    const { projects } = this.props;
    
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
         
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    project: state.firestore.ordered.project,
    // firestoreConnect: ([
    //   { collection: 'Projects' }
    //  ])
  }
}

// export default compose(
//     connect(mapStateToProps)
//     // firestoreConnect ([
//     //  { collection: 'projects' }
//     // ])
//   )(Dashboard)


  // const mapStateToProps = ({ firebase, reteriveProjectList }) => ({
  //   firebase,
  //   reteriveProjectList,
   
    
  // });
  
  export default withRouter(connect(mapStateToProps, {reteriveProjectList})(Dashboard));
  