/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Step1Welcome = ({ setCurrentStep, styles }) => {
  return (
    <div>
      <div style={styles.welcomeSection}>
        <h1 style={styles.welcomeTitle}>Welcome, Arpita 👋</h1>
        <p style={styles.welcomeSubtitle}>
          Let's help you file taxes stress-free this year. Just follow a few simple steps.
        </p>
      </div>

      <div style={{...styles.card, ...styles.gradientCard}}>
        <div style={styles.stepHeader}>New User</div>
        <h2 style={styles.stepTitle}>You're on Step 1 of 4</h2>
        <p style={styles.stepDescription}>
          Great! You've started your tax filing journey. Continue where you left off
        </p>
        <button 
          style={styles.primaryButton}
          onClick={() => setCurrentStep(2)}
        >
          Begin Onboarding
        </button>
        <div style={styles.secureText}>
          🔒 Secure filing
        </div>
      </div>

      <div style={styles.journeySection}>
        <h3 style={styles.journeyTitle}>Your Filing Journey</h3>
        <div style={styles.journeySteps}>
          <div style={styles.journeyStep}>
            <div style={{...styles.journeyIcon, ...styles.journeyIconActive}}>
              📋
            </div>
            <div style={styles.journeyStepText}>Fill Personal & Income Details</div>
          </div>
          <div style={styles.journeyStep}>
            <div style={styles.journeyIcon}>
              ⬆️
            </div>
            <div style={styles.journeyStepText}>Upload Required Documents</div>
          </div>
          <div style={styles.journeyStep}>
            <div style={styles.journeyIcon}>
              👨‍💼
            </div>
            <div style={styles.journeyStepText}>Talk to Your Chartered Accountant</div>
          </div>
        </div>

        <div style={styles.bottomLinks}>
          <a href="#" style={styles.bottomLink}>Why we ask for these details?</a>
          <a href="#" style={styles.bottomLink}>Want to see a sample tax filing?</a>
        </div>
      </div>
    </div>
  );
};

export default Step1Welcome;