import React, { useState } from 'react';
import { styles } from './styles';
import Step1Welcome from './components/Step1Welcome';
import Step2IncomeSelection from './components/Step2IncomeSelection';
import Step3SalaryDocuments from './components/Step3SalaryDocuments';
import Step4BusinessDetails from './components/Step4BusinessDetails';
import Header from './components/Header';

const TaxFilingApp = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedIncomeTypes, setSelectedIncomeTypes] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [businessType, setBusinessType] = useState('trader-2cr');
  const [grossReceipts, setGrossReceipts] = useState('');

  const handleIncomeTypeToggle = (type) => {
    setSelectedIncomeTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const handleFileUpload = (event, fileType) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFiles(prev => [...prev, { type: fileType, file }]);
    }
  };

  const stepProps = {
    currentStep,
    setCurrentStep,
    selectedIncomeTypes,
    setSelectedIncomeTypes,
    uploadedFiles,
    setUploadedFiles,
    businessType,
    setBusinessType,
    grossReceipts,
    setGrossReceipts,
    handleIncomeTypeToggle,
    handleFileUpload,
    styles
  };

  return (
    <div style={styles.container}>
      <Header currentStep={currentStep} setCurrentStep={setCurrentStep} styles={styles} />
      
      <main style={styles.main}>
        {currentStep === 1 && <Step1Welcome {...stepProps} />}
        {currentStep === 2 && <Step2IncomeSelection {...stepProps} />}
        {currentStep === 3 && <Step3SalaryDocuments {...stepProps} />}
        {currentStep === 4 && <Step4BusinessDetails {...stepProps} />}
      </main>
    </div>
  );
};

export default TaxFilingApp;