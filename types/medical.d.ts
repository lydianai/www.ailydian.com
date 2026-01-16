/**
 * Medical Expert System - TypeScript Type Definitions
 * Hospital-Grade Medical AI Platform with 0-Error Tolerance
 * HIPAA/GDPR Compliant - White-Hat Security Standards
 */

// ==================== CORE TYPES ====================

export type MedicalSpecialty =
  | 'general-medicine'
  | 'cardiology'
  | 'neurology'
  | 'radiology'
  | 'oncology'
  | 'pediatrics'
  | 'psychiatry'
  | 'orthopedics'
  | 'dermatology'
  | 'gastroenterology'
  | 'endocrinology'
  | 'nephrology'
  | 'pulmonology'
  | 'rheumatology'
  | 'urology'
  | 'ophthalmology'
  | 'otolaryngology'
  | 'emergency-medicine'
  | 'anesthesiology'
  | 'pathology';

export type Gender = 'male' | 'female' | 'other' | 'prefer-not-to-say';

export type BloodType = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

export type LanguageCode = 'en' | 'tr' | 'de' | 'ru' | 'ar' | 'zh';

export type MessageRole = 'user' | 'assistant' | 'system';

export type AIProvider = 'azure-openai' | 'anthropic-claude' | 'groq' | 'openai' | 'fallback';

export type QuantumDevice = 'cpu' | 'gpu' | 'mps.gpu' | 'ibm.heron' | 'quantinuum.h2';

// ==================== STATE MANAGEMENT ====================

export interface MedicalState {
  currentUser: User | null;
  sessionId: string | null;
  messages: Message[];
  currentSpecialization: MedicalSpecialty;
  uploadedFiles: UploadedFiles;
  hospitalSettings: HospitalSettings;
  currentPatient: PatientProfile | null;
}

export interface User {
  id: string;
  email: string;
  role: 'patient' | 'doctor' | 'nurse' | 'admin';
  name: string;
  verified: boolean;
  createdAt: string;
}

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: string;
  metadata?: MessageMetadata;
  verified?: boolean;
  confidence?: number;
}

export interface MessageMetadata {
  provider?: AIProvider;
  model?: string;
  responseTime?: number;
  tokenCount?: number;
  detectedTerms?: number;
  detectedConditions?: number;
  hasEmergency?: boolean;
  validationStatus?: 'pending' | 'verified' | 'flagged';
  clinicianReview?: boolean;
}

export interface UploadedFiles {
  images: MedicalImage[];
  documents: MedicalDocument[];
  labResults: LabResult[];
}

export interface MedicalImage {
  id: string;
  filename: string;
  url: string;
  type: 'xray' | 'mri' | 'ct' | 'ultrasound' | 'pet' | 'other';
  uploadedAt: string;
  analyzed: boolean;
  analysis?: ImageAnalysis;
  encrypted: boolean;
}

export interface ImageAnalysis {
  findings: string[];
  confidence: number;
  urgency: 'low' | 'medium' | 'high' | 'critical';
  reviewedBy?: string;
  reviewedAt?: string;
}

export interface MedicalDocument {
  id: string;
  filename: string;
  url: string;
  type: 'prescription' | 'lab-report' | 'discharge-summary' | 'referral' | 'other';
  uploadedAt: string;
  extracted: boolean;
  extractedData?: any;
  encrypted: boolean;
}

export interface LabResult {
  id: string;
  testName: string;
  value: number | string;
  unit: string;
  referenceRange: string;
  abnormal: boolean;
  uploadedAt: string;
  encrypted: boolean;
}

// ==================== HOSPITAL SETTINGS ====================

export interface HospitalSettings {
  hospitalName: string;
  hospitalId?: string;
  department: MedicalSpecialty;
  language: LanguageCode;
  aiTemperature: number;
  maxTokens: number;
  enableAudit: boolean;
  encryptionEnabled: boolean;
  hipaaCompliant: boolean;
  gdprCompliant: boolean;
  requireClinicalValidation: boolean;
  emergencyProtocols: boolean;
}

// ==================== PATIENT PROFILE ====================

export interface PatientProfile {
  id: string;
  age: number;
  gender: Gender;
  bloodType?: BloodType;
  height?: number; // cm
  weight?: number; // kg
  bmi?: number;
  history: MedicalHistory[];
  allergies: Allergy[];
  currentMedications: Medication[];
  vitalSigns?: VitalSigns;
  emergencyContact?: EmergencyContact;
  consent: ConsentRecord;
}

export interface MedicalHistory {
  condition: string;
  diagnosedDate: string;
  severity: 'mild' | 'moderate' | 'severe';
  status: 'active' | 'resolved' | 'chronic';
  notes?: string;
}

export interface Allergy {
  allergen: string;
  reaction: string;
  severity: 'mild' | 'moderate' | 'severe' | 'life-threatening';
  diagnosedDate: string;
}

export interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  startDate: string;
  endDate?: string;
  prescribedBy?: string;
  purpose: string;
}

export interface VitalSigns {
  bloodPressureSystolic?: number;
  bloodPressureDiastolic?: number;
  heartRate?: number; // bpm
  temperature?: number; // celsius
  respiratoryRate?: number; // breaths per minute
  oxygenSaturation?: number; // percentage
  recordedAt: string;
}

export interface EmergencyContact {
  name: string;
  relationship: string;
  phone: string;
  email?: string;
}

export interface ConsentRecord {
  dataProcessing: boolean;
  aiAssistance: boolean;
  dataSharing: boolean;
  researchParticipation: boolean;
  consentedAt: string;
  ipAddress: string;
  signature?: string;
}

// ==================== API TYPES ====================

export interface MedicalChatRequest {
  message: string;
  model?: string;
  specialty: MedicalSpecialty;
  language: LanguageCode;
  conversationHistory?: Message[];
  patientContext?: PatientProfile;
  requireValidation?: boolean;
  urgency?: 'low' | 'medium' | 'high' | 'critical';
}

export interface MedicalChatResponse {
  success: boolean;
  response: string;
  provider: AIProvider;
  model: string;
  aiAssistant: string;
  poweredBy: string;
  responseTime: number;
  metadata: MessageMetadata;
  timestamp: string;
  disclaimer: string;
  validationRequired: boolean;
  emergencyDetected: boolean;
}

export interface QuantumAnalysisRequest {
  molecule: string;
  bondDistance?: number;
  device: QuantumDevice | 'auto';
  budget: number;
  language: LanguageCode;
}

export interface QuantumAnalysisResponse {
  success: boolean;
  data: {
    molecule: string;
    quantumSimulation: QuantumSimulationResult;
    medicalAnalysis: {
      content: string;
      model: string;
    };
    performance: {
      totalTime: number;
      quantumTime: number;
      aiTime: number;
    };
  };
}

export interface QuantumSimulationResult {
  energy: {
    hartree: number;
    kcalMol: number;
  };
  device: QuantumDevice;
  cost: string;
  fromCache: boolean;
  executionTime: number;
}

// ==================== CLINICAL VALIDATION ====================

export interface ValidationRecord {
  id: string;
  messageId: string;
  aiResponse: string;
  validatedBy: string; // Clinician ID
  validatedAt: string;
  status: 'approved' | 'rejected' | 'modified';
  modifications?: string;
  notes?: string;
  confidence: number;
}

export interface AuditLog {
  id: string;
  timestamp: string;
  userId: string;
  action: string;
  resource: string;
  ipAddress: string;
  userAgent: string;
  success: boolean;
  details: any;
  encrypted: boolean;
}

// ==================== SECURITY & COMPLIANCE ====================

export interface EncryptionMetadata {
  algorithm: 'AES-256-GCM';
  keyId: string;
  iv: string;
  authTag: string;
  encryptedAt: string;
}

export interface DataRetentionPolicy {
  category: 'medical-data' | 'chat-logs' | 'audit-logs' | 'user-data';
  retentionPeriod: number; // days
  autoDelete: boolean;
  archiveAfter: number; // days
  requiresUserConsent: boolean;
}

export interface PrivacySettings {
  dataMinimization: boolean;
  pseudonymization: boolean;
  encryption: boolean;
  accessControl: 'role-based' | 'attribute-based';
  rightToErasure: boolean;
  dataPortability: boolean;
}

// ==================== ERROR HANDLING ====================

export interface MedicalError {
  code: string;
  message: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: string;
  context?: any;
  recoverable: boolean;
  userMessage: string;
  technicalDetails?: string;
}

export interface ErrorResponse {
  success: false;
  error: MedicalError;
  requestId: string;
  supportContact: string;
}

// ==================== MONITORING & METRICS ====================

export interface SystemMetrics {
  accuracy: string;
  totalRequests: number;
  successfulRequests: number;
  failedRequests: number;
  uptime: string;
  uptimeDuration: string;
  avgResponseTime: string;
  status: 'healthy' | 'degraded' | 'down';
  systemHealth: {
    api: 'operational' | 'degraded' | 'down';
    database: 'operational' | 'degraded' | 'down';
    aiProvider: 'operational' | 'degraded' | 'down';
    quantumGateway: 'operational' | 'degraded' | 'down';
  };
  lastUpdated: string;
}

// ==================== FHIR INTEGRATION ====================

export interface FHIRPatient {
  resourceType: 'Patient';
  id: string;
  identifier: FHIRIdentifier[];
  name: FHIRHumanName[];
  gender: 'male' | 'female' | 'other' | 'unknown';
  birthDate: string;
  address?: FHIRAddress[];
  telecom?: FHIRContactPoint[];
}

export interface FHIRIdentifier {
  system: string;
  value: string;
  type?: {
    coding: Array<{
      system: string;
      code: string;
      display: string;
    }>;
  };
}

export interface FHIRHumanName {
  use: 'official' | 'usual' | 'temp' | 'nickname' | 'anonymous' | 'old' | 'maiden';
  family: string;
  given: string[];
  prefix?: string[];
  suffix?: string[];
}

export interface FHIRAddress {
  use: 'home' | 'work' | 'temp' | 'old' | 'billing';
  line: string[];
  city: string;
  state?: string;
  postalCode: string;
  country: string;
}

export interface FHIRContactPoint {
  system: 'phone' | 'fax' | 'email' | 'pager' | 'url' | 'sms' | 'other';
  value: string;
  use: 'home' | 'work' | 'temp' | 'old' | 'mobile';
}

// ==================== UTILITY TYPES ====================

export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;

export type Async<T> = Promise<T>;

export type AsyncResult<T, E = MedicalError> = Promise<Result<T, E>>;

export type Result<T, E = MedicalError> =
  | { success: true; data: T }
  | { success: false; error: E };

// ==================== MODULE INTERFACES ====================

export interface IMedicalStateManager {
  init(): void;
  save(): void;
  addMessage(role: MessageRole, content: string, metadata?: MessageMetadata): void;
  setSpecialization(specialization: MedicalSpecialty): void;
  updateSettings(settings: Partial<HospitalSettings>): void;
  setPatient(patient: PatientProfile): void;
  reset(): void;
  getState(): MedicalState;
}

export interface IMedicalAPIClient {
  sendChatMessage(request: MedicalChatRequest): AsyncResult<MedicalChatResponse>;
  analyzeQuantum(request: QuantumAnalysisRequest): AsyncResult<QuantumAnalysisResponse>;
  analyzeImage(imageId: string): AsyncResult<ImageAnalysis>;
  getFHIRPatient(patientId: string): AsyncResult<FHIRPatient>;
  getMetrics(): AsyncResult<SystemMetrics>;
}

export interface IValidationService {
  validateResponse(messageId: string, aiResponse: string): AsyncResult<ValidationRecord>;
  flagForReview(messageId: string, reason: string): AsyncResult<boolean>;
  getValidationStatus(messageId: string): AsyncResult<ValidationRecord>;
}

export interface IAuditLogger {
  log(action: string, resource: string, details: any): Promise<void>;
  getAuditTrail(userId: string, startDate: string, endDate: string): AsyncResult<AuditLog[]>;
  exportAuditLogs(format: 'json' | 'csv'): AsyncResult<string>;
}

export interface IEncryptionService {
  encrypt(data: string): AsyncResult<{ encrypted: string; metadata: EncryptionMetadata }>;
  decrypt(encrypted: string, metadata: EncryptionMetadata): AsyncResult<string>;
  hashPassword(password: string): AsyncResult<string>;
  verifyPassword(password: string, hash: string): AsyncResult<boolean>;
}
