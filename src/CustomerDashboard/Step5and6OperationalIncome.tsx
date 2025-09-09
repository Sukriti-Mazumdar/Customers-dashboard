import React from 'react';

const TaxFilingSteps = ({ mainSetCurrentStep, currentStep }: { mainSetCurrentStep: (step: number) => void, currentStep: number }) => {

  const Step5 = () => (
    <div className="page-container">
      <main className="main-content">
        <div className="page-header">
          <h1 className="page-title">Operatorpital Gains Income</h1>
          <p className="page-subtitle">Upload documents for Operatorpital gains from various assets</p>
        </div>

        <div className="content-sections">
          <section className="income-section">
            <h2 className="section-title">Stocks/MFs/FnO/Crypto</h2>
            <div className="upload-item">
              <div className="upload-icon">↑</div>
              <div className="upload-content">
                <h3 className="upload-title">P&L Statements</h3>
                <p className="upload-description">Upload profit & loss statements</p>
              </div>
            </div>
          </section>

          <section className="income-section">
            <h2 className="section-title">RSUs/ESOPs</h2>
            <div className="upload-item">
              <div className="upload-icon">↑</div>
              <div className="upload-content">
                <h3 className="upload-title">RSU/ESOP P&L</h3>
                <p className="upload-description">Upload RSU/ESOP profit & loss statements</p>
              </div>
            </div>
          </section>

          <section className="income-section">
            <h2 className="section-title">Foreign Assets</h2>
            <div className="upload-item">
              <div className="upload-icon">↑</div>
              <div className="upload-content">
                <h3 className="upload-title">Foreign Asset Statements</h3>
                <p className="upload-description">Upload foreign asset statements</p>
              </div>
            </div>
          </section>

          <section className="income-section">
            <h2 className="section-title">Property Sale</h2>
            <div className="upload-item">
              <div className="upload-icon">↑</div>
              <div className="upload-content">
                <h3 className="upload-title">Sale Deed</h3>
                <p className="upload-description">Upload property sale deed</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <button className="nav-button secondary" onClick={() => mainSetCurrentStep(4)}>Back</button>
        <button className="nav-button primary" onClick={() => mainSetCurrentStep(6)}>Next</button>
      </footer>

      <button className="logout-button">⚊ Logout</button>
    </div>
  );

  const Step6 = () => (
    <div className="page-container">
      <main className="main-content">
        <div className="page-header">
          <h1 className="page-title">Other Income Sources</h1>
          <p className="page-subtitle">Please provide details about your other income sources</p>
        </div>

        <div className="content-sections">
          <section className="income-section">
            <h2 className="section-title">Interest/Dividends</h2>
            
            <div className="upload-item">
              <div className="upload-icon">↑</div>
              <div className="upload-content">
                <h3 className="upload-title">Bank Interest CertifiOperatorte</h3>
                <p className="upload-description">Upload bank interest certifiOperatortes</p>
              </div>
            </div>

            <div className="upload-item">
              <div className="upload-icon">↑</div>
              <div className="upload-content">
                <h3 className="upload-title">Dividend P&L</h3>
                <p className="upload-description">Upload dividend profit & loss statements</p>
              </div>
            </div>
          </section>

          <section className="income-section">
            <h2 className="section-title">Agriculture Income</h2>
            
            <div className="form-row">
              <label className="form-label">Gross Agriculture Receipts</label>
              <div className="input-group">
                <select className="currency-select">
                  <option>Rs. (₹)</option>
                </select>
                <input 
                  type="text" 
                  placeholder="Enter gross receipts amount" 
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row">
              <label className="form-label">Expenses</label>
              <div className="input-group">
                <select className="currency-select">
                  <option>Rs. (₹)</option>
                </select>
                <input 
                  type="text" 
                  placeholder="Enter expenses" 
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-row">
              <label className="form-label">Net Proceeds</label>
              <div className="input-group">
                <select className="currency-select">
                  <option>Rs. (₹)</option>
                </select>
                <input 
                  type="text" 
                  placeholder="Enter net proceeds" 
                  className="form-input"
                />
              </div>
            </div>
          </section>

          <section className="income-section">
            <h2 className="section-title">Gaming/Lottery</h2>
            
            <div className="form-row">
              <label className="form-label">Amount</label>
              <div className="input-group">
                <select className="currency-select">
                  <option>Rs. (₹)</option>
                </select>
                <input 
                  type="text" 
                  placeholder="Enter gaming/lottery income" 
                  className="form-input"
                />
              </div>
            </div>
          </section>

          <section className="income-section">
            <h2 className="section-title">Other Income</h2>
            
            <div className="form-row">
              <label className="form-label">Income Source Name</label>
              <input 
                type="text" 
                placeholder="Enter income source name" 
                className="form-input full-width"
              />
            </div>

            <div className="form-row">
              <label className="form-label">Amount</label>
              <div className="input-group">
                <select className="currency-select">
                  <option>Rs. (₹)</option>
                </select>
                <input 
                  type="text" 
                  placeholder="Enter amount" 
                  className="form-input"
                />
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <button className="nav-button secondary" onClick={() => mainSetCurrentStep(5)}>Back</button>
        <button className="nav-button primary" onClick={() => mainSetCurrentStep(7)}>Next</button>
      </footer>

      <button className="logout-button">⚊ Logout</button>
    </div>
  );

  return (
    <>
      {currentStep === 5 ? <Step5 /> : <Step6 />}
      
      <style >{`
        .page-container {
          min-height: 100vh;
          background-color: #f8f9fa;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          position: relative;
        }

        .header {
          background-color: #ffffff;
          border-bottom: 1px solid #e9ecef;
          padding: 16px 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo {
          background-color: #000000;
          color: #ffffff;
          padding: 8px 16px;
          font-weight: bold;
          font-size: 16px;
          border-radius: 4px;
        }

        .dashboard-text {
          font-size: 16px;
          color: #6c757d;
        }

        .back-to-dashboard {
          background: none;
          border: none;
          color: #6c757d;
          cursor: pointer;
          font-size: 14px;
          padding: 8px 0;
        }

        .back-to-dashboard:hover {
          color: #495057;
        }

        .main-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 48px 32px 120px;
        }

        .page-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .page-title {
          font-size: 32px;
          font-weight: 600;
          color: #212529;
          margin: 0 0 12px 0;
        }

        .page-subtitle {
          font-size: 16px;
          color: #6c757d;
          margin: 0;
        }

        .content-sections {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .income-section {
          background-color: #ffffff;
          border-radius: 8px;
          padding: 24px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .section-title {
          font-size: 20px;
          font-weight: 600;
          color: #212529;
          margin: 0 0 20px 0;
        }

        .upload-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          border: 2px dashed #dee2e6;
          border-radius: 8px;
          margin-bottom: 16px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .upload-item:hover {
          border-color: #adb5bd;
          background-color: #f8f9fa;
        }

        .upload-item:last-child {
          margin-bottom: 0;
        }

        .upload-icon {
          width: 40px;
          height: 40px;
          background-color: #f8f9fa;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #6c757d;
        }

        .upload-content {
          flex: 1;
        }

        .upload-title {
          font-size: 16px;
          font-weight: 600;
          color: #212529;
          margin: 0 0 4px 0;
        }

        .upload-description {
          font-size: 14px;
          color: #6c757d;
          margin: 0;
        }

        .form-row {
          margin-bottom: 20px;
        }

        .form-row:last-child {
          margin-bottom: 0;
        }

        .form-label {
          display: block;
          font-size: 14px;
          font-weight: 500;
          color: #212529;
          margin-bottom: 8px;
        }

        .input-group {
          display: flex;
          gap: 0;
        }

        .currency-select {
          background-color: #ffffff;
          border: 1px solid #ced4da;
          border-right: none;
          border-radius: 6px 0 0 6px;
          padding: 12px 16px;
          font-size: 14px;
          color: #495057;
          min-width: 100px;
        }

        .form-input {
          flex: 1;
          background-color: #ffffff;
          border: 1px solid #ced4da;
          border-radius: 0 6px 6px 0;
          padding: 12px 16px;
          font-size: 14px;
          color: #495057;
          transition: border-color 0.15s;
        }

        .form-input.full-width {
          width: 100%;
          border-radius: 6px;
        }

        .form-input:focus {
          outline: none;
          border-color: #80bdff;
          box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
        }

        .form-input::placeholder {
          color: #adb5bd;
        }

        .footer {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: #ffffff;
          border-top: 1px solid #e9ecef;
          padding: 16px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.1);
        }

        .nav-button {
          padding: 12px 24px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          border: 1px solid;
        }

        .nav-button.primary {
          background-color: #1a1a2e;
          color: #ffffff;
          border-color: #1a1a2e;
        }

        .nav-button.primary:hover {
          background-color: #16213e;
          border-color: #16213e;
        }

        .nav-button.secondary {
          background-color: #ffffff;
          color: #6c757d;
          border-color: #ced4da;
        }

        .nav-button.secondary:hover {
          background-color: #f8f9fa;
          border-color: #adb5bd;
        }

        .pagination {
          display: flex;
          gap: 8px;
        }

        .pagination-arrow {
          width: 40px;
          height: 40px;
          border: 1px solid #ced4da;
          background-color: #6c757d;
          color: #ffffff;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          transition: all 0.2s;
        }

        .pagination-arrow:hover {
          background-color: #5a6268;
        }

        .logout-button {
          position: fixed;
          bottom: 80px;
          left: 32px;
          background-color: #ffffff;
          border: 1px solid #ced4da;
          padding: 12px 20px;
          border-radius: 6px;
          font-size: 14px;
          color: #6c757d;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s;
        }

        .logout-button:hover {
          background-color: #f8f9fa;
          border-color: #adb5bd;
        }

        @media (max-width: 768px) {
          .header {
            padding: 16px 20px;
          }

          .main-content {
            padding: 32px 20px 120px;
          }

          .footer {
            padding: 16px 20px;
          }

          .nav-button {
            padding: 10px 20px;
            font-size: 13px;
          }

          .logout-button {
            bottom: 20px;
            left: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default TaxFilingSteps;