export const styles = {
  container: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    backgroundColor: '#ffffff',
    minHeight: '100vh',
    padding: '0',
    margin: '0'
  },
  header: {
    backgroundColor: 'white',
    borderBottom: '1px solid #e5e7eb',
    padding: '20px 32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
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
  welcomeSection: {
    textAlign: 'center',
    marginBottom: '60px'
  },
  welcomeTitle: {
    fontSize: '36px',
    fontWeight: '500',
    color: '#111827',
    marginBottom: '12px'
  },
  welcomeSubtitle: {
    fontSize: '18px',
    color: '#6b7280',
    marginBottom: '40px'
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
  card: {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '40px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    marginBottom: '48px',
    border: '1px solid #f3f4f6'
  },
  gradientCard: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    color: 'white',
    marginBottom: '48px',
    boxShadow: '0 10px 25px -3px rgba(59, 130, 246, 0.3)'
  },
  stepHeader: {
    fontSize: '14px',
    color: '#f59e0b',
    backgroundColor: 'rgba(251, 191, 36, 0.1)',
    padding: '6px 16px',
    borderRadius: '20px',
    display: 'inline-block',
    marginBottom: '20px',
    fontWeight: '600'
  },
  stepTitle: {
    fontSize: '28px',
    fontWeight: '600',
    marginBottom: '12px'
  },
  stepDescription: {
    fontSize: '18px',
    opacity: '0.9',
    marginBottom: '32px',
    lineHeight: '1.6'
  },
  primaryButton: {
    backgroundColor: '#1f2937',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    padding: '18px 32px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    width: '100%',
    marginBottom: '16px',
    transition: 'all 0.2s ease'
  },
  secureText: {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  },
  journeySection: {
    textAlign: 'center'
  },
  journeyTitle: {
    fontSize: '28px',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '40px'
  },
  journeySteps: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '80px',
    marginBottom: '60px',
    flexWrap: 'wrap'
  },
  journeyStep: {
    textAlign: 'center',
    maxWidth: '160px',
    position: 'relative'
  },
  journeyIcon: {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    backgroundColor: '#f9fafb',
    border: '2px solid #e5e7eb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 16px',
    fontSize: '20px'
  },
  journeyIconActive: {
    backgroundColor: '#1f2937',
    borderColor: '#1f2937',
    color: 'white'
  },
  journeyStepText: {
    fontSize: '16px',
    color: '#374151',
    fontWeight: '500',
    lineHeight: '1.4'
  },
  bottomLinks: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '60px',
    paddingTop: '32px',
    borderTop: '1px solid #f3f4f6'
  },
  bottomLink: {
    color: '#6b7280',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500'
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
  },
  uploadSection: {
    marginBottom: '32px'
  },
  uploadItem: {
    border: '2px dashed #d1d5db',
    borderRadius: '12px',
    padding: '32px 24px',
    textAlign: 'center',
    marginBottom: '20px',
    backgroundColor: '#f9fafb',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  uploadedFile: {
    backgroundColor: '#eff6ff',
    border: '1px solid #bfdbfe',
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20px'
  },
  fileInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  fileName: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#111827'
  },
  fileSize: {
    fontSize: '14px',
    color: '#6b7280'
  },
  removeBtn: {
    background: 'none',
    border: 'none',
    color: '#ef4444',
    cursor: 'pointer',
    fontSize: '20px',
    fontWeight: 'bold'
  },
  formGroup: {
    marginBottom: '32px'
  },
  label: {
    display: 'block',
    fontSize: '18px',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '16px'
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  radioOption: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundColor: 'white',
    transition: 'all 0.2s ease'
  },
  radioInput: {
    margin: '0',
    width: '16px',
    height: '16px'
  },
  radioLabel: {
    fontSize: '16px',
    color: '#374151',
    fontWeight: '500'
  },
  input: {
    flex: '1',
    padding: '14px 16px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '16px',
    backgroundColor: 'white'
  },
  selectWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  select: {
    padding: '14px 16px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '16px',
    backgroundColor: 'white',
    minWidth: '120px'
  },
  hiddenInput: {
    display: 'none'
  },
  uploadLabel: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '8px'
  },
  uploadDescription: {
    fontSize: '14px',
    color: '#6b7280',
    marginBottom: '16px'
  },
  chooseFileBtn: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#3b82f6',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    textDecoration: 'underline'
  }
};