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
          <div className="section">
            <h3>Insights</h3>
            <p>
              The sales dashboard offers a comprehensive view of key performance indicators, enabling data-driven decision-making.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <a href="/superstore_sales_analysis.ipynb" className="action-btn notebook-btn" download>
              View Notebook
            </a>
            <a href="/report1.pdf" className="action-btn report-btn" download> 
              View Report (PDF)
            </a>
            <a
              href="https://www.kaggle.com/datasets/vivek468/superstore-dataset-final/data"
              className="action-btn dataset-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
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