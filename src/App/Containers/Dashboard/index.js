import React from 'react';
import {Row, Col} from 'antd';
import InfoCard from '../../Components/InfoCard';
import HeaderTitle from '../../Components/HeaderTitle';
import {connect} from 'react-redux';
import './index.scss';

class Dashboard extends React.Component{

    constructor(props){
        super(props);
        
    }

    render(){
        return(
            <div className="dashboard-container">
                <HeaderTitle title="Dashboard" subtitle="Dashboard of News App"/>
                <InfoCard {...this.props.dashboard} />
            </div>
        )
    }
}

const mapStateToProps = state=>{
    return{
        dashboard: state.user.dashboard_info
    }
}


export default connect(mapStateToProps,null) (Dashboard);