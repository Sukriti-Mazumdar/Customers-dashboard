import React from 'react';

const Step4BusinessDetails = ({ 
  setCurrentStep, 
  selectedIncomeTypes,
  businessType,
  setBusinessType,
  grossReceipts,
  setGrossReceipts,
  styles 
}) => {
  const businessTypeOptions = [
    { id: 'trader-2cr', label: 'Trader (Turnover < ₹2 Cr)' },
    { id: 'trader-3cr', label: 'Trader (95% online, Turnover < ₹3 Cr)' },
    { id: 'professional-50l', label: 'Professional (Receipts < ₹50 L)' },
    { id: 'professional-75l', label: 'Professional (95% online, Receipts < ₹75 L)' }
  ];

  return (
    <div>
      <h1 style={styles.title}>Business Income Details</h1>
      <p style={styles.subtitle}>Please provide information about your business income</p>

      <div style={styles.card}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Business Type</label>
          <div style={styles.radioGroup}>
            {businessTypeOptions.map(option => (
              <label key={option.id} style={styles.radioOption}>
                <input
                  type="radio"
                  name="businessType"
                  value={option.id}
                  checked={businessType === option.id}
                  onChange={(e) => setBusinessType(e.target.value)}
                  style={styles.radioInput}
                />
                <span style={styles.radioLabel}>{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Financial Details</label>
          <div style={{marginBottom: '24px'}}>
            <label style={{fontSize: '14px', color: '#6b7280', marginBottom: '8px', display: 'block'}}>
              Gross Receipts
            </label>
            <div style={styles.selectWrapper}>
              <select style={styles.select}>
                <option>Rs. (₹)</option>
              </select>
              <input
                type="text"
                placeholder="Enter gross receipts amount"
                value={grossReceipts}
                onChange={(e) => setGrossReceipts(e.target.value)}
                style={styles.input}
              />
            </div>
          </div>
        </div>

        <div style={styles.uploadSection}>
          <div style={styles.uploadItem}>
            <div style={{fontSize: '24px', marginBottom: '12px'}}>⬆️</div>
            <div style={styles.uploadLabel}>
              Bank Statement<span style={{color: '#ef4444'}}>*</span>
            </div>
            <div style={styles.uploadDescription}>
              Upload bank statements for the financial year
            </div>
          </div>

          <div style={styles.uploadItem}>
            <div style={{fontSize: '24px', marginBottom: '12px'}}>⬆️</div>
            <div style={styles.uploadLabel}>
              GST Return Files or GST Credentials<span style={{color: '#ef4444'}}>*</span>
            </div>
            <div style={styles.uploadDescription}>
              Upload GST returns or provide GST portal credentials
            </div>
          </div>
        </div>
      </div>

      <div style={styles.navigationButtons}>
        <button 
          style={styles.backBtn} 
          onClick={() => setCurrentStep(selectedIncomeTypes.includes('salary') ? 3 : 2)}
        >
          Back
        </button>
        <button style={styles.nextBtn}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Step4BusinessDetails;