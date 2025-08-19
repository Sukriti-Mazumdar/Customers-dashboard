import React from 'react';

const Step2IncomeSelection = ({ 
  setCurrentStep, 
  selectedIncomeTypes, 
  handleIncomeTypeToggle, 
  styles 
}) => {
  const incomeOptions = [
    { id: 'salary', title: 'Income from Salary', icon: '💼' },
    { id: 'house', title: 'Income from House Property', icon: '🏠' },
    { id: 'business', title: 'Income from Business/Profession/Freelancing', icon: '💰' },
    { id: 'stocks', title: 'Income from sale of stocks/mutual funds/property', icon: '📈', fullWidth: true },
    { id: 'other', title: 'Other income like interest from banks/FDs, etc', icon: '🏛️', fullWidth: true }
  ];

  return (
    <div>
      <h1 style={styles.title}>What type of income do you have?</h1>
      <p style={styles.subtitle}>Select all that apply to help us prepare your tax return</p>

      <div style={styles.incomeGrid}>
        {incomeOptions.map(income => (
          <div
            key={income.id}
            style={income.fullWidth ? styles.incomeGridFull : {}}
          >
            <div
              style={{
                ...styles.incomeCard,
                ...(selectedIncomeTypes.includes(income.id) ? styles.incomeCardSelected : {})
              }}
              onClick={() => handleIncomeTypeToggle(income.id)}
            >
              <div style={styles.incomeIcon}>{income.icon}</div>
              <div style={styles.incomeTitle}>{income.title}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.navigationButtons}>
        <button style={styles.backBtn} onClick={() => setCurrentStep(1)}>
          Back
        </button>
        <button 
          style={styles.nextBtn} 
          onClick={() => setCurrentStep(selectedIncomeTypes.includes('salary') ? 3 : 4)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2IncomeSelection;