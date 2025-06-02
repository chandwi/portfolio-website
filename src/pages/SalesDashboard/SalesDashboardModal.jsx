import React from 'react';
import './SalesDashboardModal.css';

const SalesDashboardModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="project-modal">
        {/* Left Content Section */}
        <div className="modal-content">
          <div className="modal-header">
            <h2>Sales Dashboard</h2>
            <button className="close-btn" onClick={onClose}>&times;</button>
          </div>
          
          {/* Summary Section */}
          <div className="section">
            <h3>Summary</h3>
            <p>
              Interactive sales dashboard tracking $2.25M in revenue across 9,789 transactions. 
              The dashboard provides insights into customer behavior, sales trends, and product 
              performance with a 3.96% conversion rate.
            </p>
          </div>
          
          {/* Tools Used Section */}
          <div className="section">
            <h3>Tools Used</h3>
            <div className="tools-container">
              <span className="tool-tag">Power BI</span>
              <span className="tool-tag">SQL</span>
              <span className="tool-tag">Python</span>
              <span className="tool-tag">Data Modeling</span>
            </div>
          </div>
          
          {/* Key Metrics Section */}
          <div className="section">
            <h3>Key Metrics</h3>
            <div className="metrics-grid">
              <div className="metric-card">
                <p className="metric-label">Total Revenue</p>
                <p className="metric-value">$2.25M</p>
              </div>
              <div className="metric-card">
                <p className="metric-label">Transactions</p>
                <p className="metric-value">9,789</p>
              </div>
              <div className="metric-card">
                <p className="metric-label">Conversion Rate</p>
                <p className="metric-value">3.96%</p>
              </div>
              <div className="metric-card">
                <p className="metric-label">Customers</p>
                <p className="metric-value">23,012</p>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="action-buttons">
            <a href="#" className="action-btn notebook-btn">
              View Notebook
            </a>
            <a href="#" className="action-btn report-btn">
              View Report (PDF)
            </a>
            <a href="#" className="action-btn dataset-btn">
              View Dataset
            </a>
          </div>
        </div>
        
        {/* Right Screenshot Section */}
        <div className="screenshot-section">
          <div className="screenshot-placeholder">
            <p>Dashboard Screenshot</p>
          </div>
          <div className="screenshot-placeholder">
            <p>Data Model Diagram</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesDashboardModal;