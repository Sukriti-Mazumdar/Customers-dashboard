/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { styles } from './styles';
import Step1Welcome from './components/Step1Welcome';
import Step2IncomeSelection from './components/Step2IncomeSelection';
import Step3SalaryDocuments from './components/Step3SalaryDocuments';
import Step4BusinessDetails from './components/Step4BusinessDetails';
import Header from './components/Header';

interface StepProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  selectedIncomeTypes: string[];
  setSelectedIncomeTypes: React.Dispatch<React.SetStateAction<string[]>>;
  uploadedFiles: { type: string; file: File }[];
  setUploadedFiles: React.Dispatch<React.SetStateAction<{ type: string; file: File }[]>>;
  businessType: string;
  setBusinessType: React.Dispatch<React.SetStateAction<string>>;
  grossReceipts: string;
  setGrossReceipts: React.Dispatch<React.SetStateAction<string>>;
  handleIncomeTypeToggle: (type: string) => void;
  handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>, fileType: string) => void;
  styles: { [key: string]: React.CSSProperties };
}

const TaxFilingApp: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedIncomeTypes, setSelectedIncomeTypes] = useState<string[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<{ type: string; file: File }[]>([]);
  const [businessType, setBusinessType] = useState<string>('trader-2cr');
  const [grossReceipts, setGrossReceipts] = useState<string>('');

  const handleIncomeTypeToggle = (type: string) => {
    setSelectedIncomeTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, fileType: string) => {
    const file = event.target.files?.[0];
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