import React from 'react';

const styles = {
  container: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    backgroundColor: '#ffffff',
    minHeight: '100vh',
    padding: '0',
    margin: '0'
  },
  
  logo: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#000',
    textDecoration: 'underline overline',
    textDecorationThickness: '3px',
  },
  dashboardLink: {
    color: '#6b7280',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500'
  },
  backButton: {
    color: '#6b7280',
    textDecoration: 'none',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontWeight: '500'
  },
  userIcon: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#f3f4f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  main: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '60px 32px'
  },
  title: {
    fontSize: '36px',
    fontWeight: '500',
    color: '#111827',
    textAlign: 'center',
    marginBottom: '12px'
  },
  subtitle: {
    fontSize: '18px',
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: '48px'
  },
  incomeGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    marginBottom: '48px',
    maxWidth: '700px',
    margin: '0 auto 48px'
  },
  incomeGridFull: {
    gridColumn: '1 / -1',
    maxWidth: '340px',
    margin: '0 auto'
  },
  incomeCard: {
    border: '2px solid #e5e7eb',
    borderRadius: '12px',
    padding: '32px 24px',
    textAlign: 'center',
    cursor: 'pointer',
    backgroundColor: 'white',
    transition: 'all 0.2s ease',
    minHeight: '120px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  incomeCardSelected: {
    borderColor: '#3b82f6',
    backgroundColor: '#eff6ff'
  },
  incomeIcon: {
    fontSize: '32px',
    marginBottom: '16px',
    display: 'block'
  },
  incomeTitle: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#111827',
    lineHeight: '1.4'
  },
  navigationButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '60px',
    paddingTop: '32px',
    borderTop: '1px solid #f3f4f6'
  },
  backBtn: {
    background: 'none',
    border: 'none',
    color: '#6b7280',
    fontSize: '16px',
    cursor: 'pointer',
    padding: '12px',
    fontWeight: '500'
  },
  nextBtn: {
    backgroundColor: '#1f2937',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    padding: '14px 32px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer'
  }
};

const Step2IncomeSelection = ({ 
  setCurrentStep, 
  selectedIncomeTypes, 
  handleIncomeTypeToggle 
}) => {
  const incomeOptions = [
    { id: 'salary', title: 'Income from Salary', icon: '💼' },
    { id: 'house', title: 'Income from House Property', icon: '🏠' },
    { id: 'business', title: 'Income from Business/Profession/Freelancing', icon: '💰', fullWidth: true },
    { id: 'stocks', title: 'Income from sale of stocks/mutual funds/property', icon: '📈' },
    { id: 'other', title: 'Other income like interest from banks/FDs, etc', icon: '🏛️' }
  ];

  return (
    <div style={styles.container}>
      <main style={styles.main}>
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
      </main>
    </div>
  );
};

export default Step2IncomeSelection;