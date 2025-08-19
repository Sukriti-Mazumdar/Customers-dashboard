/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Header = ({ currentStep, setCurrentStep, styles }) => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>TAX</div>
      <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
        {currentStep === 1 ? (
          <>
            <a href="#" style={styles.dashboardLink}>Dashboard</a>
            <div style={styles.userIcon}>👤</div>
          </>
        ) : (
          <a 
            href="#" 
            style={styles.backButton} 
            onClick={(e) => {
              e.preventDefault();
              setCurrentStep(1);
            }}
          >
            ← Back to Dashboard
          </a>
        )}
      </div>
    </header>
  );
};

export default Header;