import React from 'react';

const Step3SalaryDocuments = ({ 
  setCurrentStep, 
  handleFileUpload, 
  styles 
}) => {
  return (
    <div>
      <h1 style={styles.title}>Upload Salary Income Documents</h1>
      <p style={styles.subtitle}>Please upload the required documents for salary income verification</p>

      <div style={styles.card}>
        <div style={styles.uploadSection}>
          {/* Example uploaded file */}
          <div style={styles.uploadedFile}>
            <div style={styles.fileInfo}>
              <span>✅</span>
              <div>
                <div style={styles.fileName}>Form_16.pdf</div>
                <div style={styles.fileSize}>0.25 MB</div>
              </div>
            </div>
            <button style={styles.removeBtn}>×</button>
          </div>

          {/* Payslips upload */}
          <div style={styles.uploadItem}>
            <div style={{marginBottom: '8px'}}>📤</div>
            <div style={{fontSize: '14px', fontWeight: '500', marginBottom: '4px'}}>
              Payslips<span style={{color: '#ef4444'}}>*</span>
            </div>
            <div style={{fontSize: '12px', color: '#6c757d'}}>
              Upload recent payslips (last 3 months)
            </div>
            <input 
              type="file" 
              style={styles.hiddenInput}
              onChange={(e) => handleFileUpload(e, 'payslips')}
              id="payslips"
            />
            <label 
              htmlFor="payslips" 
              style={{cursor: 'pointer', marginTop: '8px', display: 'inline-block'}}
            >
              Choose file
            </label>
          </div>

          {/* Offer Letter upload */}
          <div style={styles.uploadItem}>
            <div style={{marginBottom: '8px'}}>📤</div>
            <div style={{fontSize: '14px', fontWeight: '500', marginBottom: '4px'}}>
              Offer Letter
            </div>
            <div style={{fontSize: '12px', color: '#6c757d'}}>
              Upload your current offer letter (optional)
            </div>
            <input 
              type="file" 
              style={styles.hiddenInput}
              onChange={(e) => handleFileUpload(e, 'offer-letter')}
              id="offer-letter"
            />
            <label 
              htmlFor="offer-letter" 
              style={{cursor: 'pointer', marginTop: '8px', display: 'inline-block'}}
            >
              Choose file
            </label>
          </div>
        </div>
      </div>

      <div style={styles.navigationButtons}>
        <button style={styles.backBtn} onClick={() => setCurrentStep(2)}>
          Back
        </button>
        <button style={styles.nextBtn} onClick={() => setCurrentStep(4)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Step3SalaryDocuments;