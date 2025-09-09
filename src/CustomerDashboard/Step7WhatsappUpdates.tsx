import React, { useState } from 'react';

const TaxFilingStep7 = ({ setCurrentStep }: { setCurrentStep: (step: number) => void }) => {
  const [whatsappEnabled, setWhatsappEnabled] = useState(true);

  const summaryItems = [
    {
      title: "Salary Income",
      description: "Form 16: ✓, Payslips: ✓",
      hasData: true
    },
    {
      title: "Property Income", 
      description: "Rent: ₹12500",
      hasData: true
    },
    {
      title: "Business Income",
      description: "Type: trader-2cr, Receipts: ₹20000",
      hasData: true
    },
    {
      title: "Operatorpital Gains",
      description: "Operatorpital gains documents provided",
      hasData: true
    },
    {
      title: "Other Income",
      description: "",
      hasData: false
    }
  ];

  return (
    <div className="page-container">
      <main className="main-content">
        <div className="page-header">
          <h1 className="page-title">WhatsApp Updates & Summary</h1>
          <p className="page-subtitle">Review your information and choose your notification preferences</p>
        </div>

        <div className="content-sections">
          {/* WhatsApp Updates Section */}
          <section className="notification-section">
            <div className="notification-item">
              <div className="notification-content">
                <h3 className="notification-title">Receive Updates on WhatsApp</h3>
                <p className="notification-description">Get real-time updates about your tax filing progress</p>
              </div>
              <div className="toggle-container">
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={whatsappEnabled}
                    onChange={(e) => setWhatsappEnabled(e.target.checked)}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          </section>

          {/* Summary Section */}
          <section className="summary-section">
            <h2 className="section-title">Summary of Your Information</h2>
            
            <div className="summary-items">
              {summaryItems.map((item, index) => (
                <div key={index} className={`summary-item ${!item.hasData ? 'empty' : ''}`}>
                  <div className="summary-content">
                    <h3 className="summary-title">{item.title}</h3>
                    {item.description && (
                      <p className="summary-description">{item.description}</p>
                    )}
                  </div>
                  <button className="edit-button">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <button className="nav-button secondary" onClick={() => setCurrentStep(6)}>Back</button>
        <button className="nav-button primary submit-button">Submit</button>
      </footer>

      <style>{`
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

        .notification-section {
          background-color: #ffffff;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .notification-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .notification-content {
          flex: 1;
        }

        .notification-title {
          font-size: 18px;
          font-weight: 600;
          color: #212529;
          margin: 0 0 8px 0;
        }

        .notification-description {
          font-size: 14px;
          color: #6c757d;
          margin: 0;
        }

        .toggle-container {
          flex-shrink: 0;
        }

        .toggle-switch {
          position: relative;
          display: inline-block;
          width: 60px;
          height: 30px;
        }

        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .toggle-slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          transition: 0.3s;
          border-radius: 30px;
        }

        .toggle-slider:before {
          position: absolute;
          content: "";
          height: 24px;
          width: 24px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: 0.3s;
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        input:checked + .toggle-slider {
          background-color: #1a1a2e;
        }

        input:checked + .toggle-slider:before {
          transform: translateX(30px);
        }

        .summary-section {
          background-color: #ffffff;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .section-title {
          font-size: 20px;
          font-weight: 600;
          color: #212529;
          margin: 0 0 24px 0;
        }

        .summary-items {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .summary-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
          background-color: #f8f9fa;
          border-radius: 8px;
          border: 1px solid #e9ecef;
          transition: all 0.2s;
        }

        .summary-item:hover {
          background-color: #f1f3f4;
          border-color: #dee2e6;
        }

        .summary-item.empty {
          border-style: dashed;
          opacity: 0.7;
        }

        .summary-content {
          flex: 1;
        }

        .summary-title {
          font-size: 16px;
          font-weight: 600;
          color: #212529;
          margin: 0 0 4px 0;
        }

        .summary-description {
          font-size: 14px;
          color: #6c757d;
          margin: 0;
        }

        .edit-button {
          background: none;
          border: none;
          color: #6c757d;
          cursor: pointer;
          padding: 8px;
          border-radius: 4px;
          transition: all 0.2s;
        }

        .edit-button:hover {
          background-color: #e9ecef;
          color: #495057;
        }

        .footer {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: #ffffff;
          border-top: 1px solid #e9ecef;
          padding: 16px 32px;
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
          background-color: #6c5ce7;
          color: #ffffff;
          border-color: #6c5ce7;
        }

        .nav-button.primary:hover {
          background-color: #5a4fcf;
          border-color: #5a4fcf;
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

        .submit-button {
          min-width: 100px;
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

          .notification-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }

          .toggle-container {
            align-self: flex-end;
          }

          .summary-item {
            padding: 16px;
          }

          .nav-button {
            padding: 10px 20px;
            font-size: 13px;
          }
        }

        @media (max-width: 480px) {
          .page-title {
            font-size: 28px;
          }
          
          .notification-title {
            font-size: 16px;
          }
          
          .summary-title {
            font-size: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default TaxFilingStep7;