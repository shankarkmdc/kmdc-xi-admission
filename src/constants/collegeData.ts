import { CollegeInfo, EligibleStudent, StudyGroup } from '../types';

export const COLLEGE_INFO: CollegeInfo = {
  nameBn: 'কসবা মহিলা ডিগ্রি কলেজ',
  nameEn: 'KASBA MOHILA DEGREE COLLEGE',
  eiin: '103379',
  address: 'আখাউড়া রোড, কসবা পৌরসভা, ব্রাহ্মণবাড়িয়া, ৩৪৬০',
  helpline1: '01309103379',
  helpline2: '01822721111',
  academicSession: '2026-2027',
};

export const TRACKING_RANGES: Record<StudyGroup, { prefix: string; start: number; end: number }> = {
  HUMANITIES: { prefix: 'KMDC-2026-', start: 1, end: 400 },
  SCIENCE: { prefix: 'KMDC-2026-', start: 401, end: 600 },
  'BUSINESS STUDIES': { prefix: 'KMDC-2026-', start: 601, end: 800 },
};

export const COMPULSORY_SUBJECTS = [
  'বাংলা (Bangla)',
  'ইংরেজি (English)',
  'তথ্য ও যোগাযোগ প্রযুক্তি (ICT)',
];

export const EDUCATION_BOARDS = [
  'COMILLA',
  'DHAKA',
  'CHITTAGONG',
  'RAJSHAHI',
  'JESSORE',
  'BARISAL',
  'SYLHET',
  'DINAJPUR',
  'MYMENSINGH',
  'MADRASAH',
  'TECHNICAL',
];

export const PASSING_YEARS = ['2026', '2025', '2024'];

// Sample initial data so that testing is immediately seamless
export const INITIAL_ELIGIBLE_STUDENTS: EligibleStudent[] = [
  {
    id: 'kmdc-el-001',
    studentName: 'NUSRAT JAHAN',
    sscRoll: '102145',
    sscBoard: 'COMILLA',
    passingYear: '2026',
    group: 'HUMANITIES',
    academicYear: '2026-2027',
  },
  {
    id: 'kmdc-el-002',
    studentName: 'SUMAIYA AKTER MIM',
    sscRoll: '102146',
    sscBoard: 'COMILLA',
    passingYear: '2026',
    group: 'HUMANITIES',
    academicYear: '2026-2027',
  },
  {
    id: 'kmdc-el-003',
    studentName: 'JANNATUL FERDOUS',
    sscRoll: '205412',
    sscBoard: 'COMILLA',
    passingYear: '2026',
    group: 'SCIENCE',
    academicYear: '2026-2027',
  },
  {
    id: 'kmdc-el-004',
    studentName: 'SADIA AFRIN',
    sscRoll: '205413',
    sscBoard: 'COMILLA',
    passingYear: '2026',
    group: 'SCIENCE',
    academicYear: '2026-2027',
  },
  {
    id: 'kmdc-el-005',
    studentName: 'FATEMA TUZ ZOHRA',
    sscRoll: '308921',
    sscBoard: 'COMILLA',
    passingYear: '2026',
    group: 'BUSINESS STUDIES',
    academicYear: '2026-2027',
  },
  {
    id: 'kmdc-el-006',
    studentName: 'MARZIA SULTANA',
    sscRoll: '308922',
    sscBoard: 'COMILLA',
    passingYear: '2026',
    group: 'BUSINESS STUDIES',
    academicYear: '2026-2027',
  },
];
