import React from 'react';
import DashboardTabs from '../components/DashboardTabs';
import './Dashboard.css';


export default function Dashboard() {
    return (
        <div className="dashboardmain">
            <h1>Realtor Dashboard</h1>
            <DashboardTabs />
        </div>
    )
}
