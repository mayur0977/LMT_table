import { IBase } from "./core.model";

export interface TableHead {
  headerTitle: string;
  isSorting: boolean;
}

export interface LeadList {
  agentUserName?: any;
  onlineContactUserName?: any;
  generalName: string | null;
  customerID: number;
  firstName: string | null;
  lastName: string | null;
  leaseState: string | null;
  regulatoryState: string | null;
  deviceLogRptgClassCd: number;
  phoneNumber: string | null;
  initiatedDate: string | null;
  accountNote: string | null;
  dateOfLastOutBoundCall?: any;
  dateOfLastInBoundCall?: any;
  totalOutBoundCalls: number;
  outBoundCallMadeBy?: any;
  outBoundCallInLast3Days: number;
  outBoundCallSinceInstall: number;
  mostRecentDisposition: string | null;
  createUser: string | null;
  languageCd?: number | null;
  agentAssignedToName: string | null;
  agentAssignedToUser: string | null;
  agentAssignedDate?: string | null;
  followUpAgentName: string | null;
  followUpAgentUser: string | null;
  followUpDate?: string | null;
  doNotFollowUp: boolean;
  followUpDateAssignedDate?: string | null;
  pendAgentName: string | null;
  pendAgentUser: string | null;
  pendDate?: string | null;
  installAgentName: string | null;
  installAgentUser: string | null;
  installDate?: string | null;
  requiredDocumentCount: number;
  documentApprovalCount: number;
  nextContactDate?: string | null;
  nextContactDateSort: string | null;
  nextContactDateSortOrder: number;
  createUserName: string | null;
  leadAgent: string | null;
  pendAgent: string | null;
  followUpAgent: string | null;
  followUpAgentUserName: string | null;
  assignedToMe: string | null;
  name: string | null;
  languageCode: string | null;
  haveAllRequiredPaperwork: boolean;
}

export interface Data {
  leadList: LeadList[];
  stateFilterList: string[];
  languageCodeFilterList: string[];
  dispositionFilterList: string[];
  assignedToMeFilterList: string[];
}

export interface IPendWithInstallResponse
  extends IBase<{
    leadList: LeadList[];
    stateFilterList: string[];
    languageCodeFilterList: string[];
    dispositionFilterList: string[];
    assignedToMeFilterList: string[];
  }> {}

export interface TableFilter {
  State: string;
  Disposition: string;
  AssignedToMe: string;
  InitiatedDateFrom: string;
  InitiatedDateTo: string;
  LastInBoundCallToDate: string;
  LastInBoundCallFromDate: string;
  LastOutBoundCallToDate: string;
  LastOutBoundCallFromDate: string;
  TotalOutBounds: number;
  TotalOutBoundsMin: number;
  TotalOutBoundsMax: number;
  OutBoundLastThreeDays: number;
  OutBoundLastThreeDaysMin: number;
  OutBoundLastThreeDaysMax: number;
  NextContactTo: string;
  NextContactFrom: string;
  PendToDate: string;
  PendFromDate: string;
  InstallToDate: string;
  InstallFromDate: string;
  isNextContactDateRange: boolean;
  isNoContactDate: boolean;
  isDoNotFollowUp: boolean;
  LanguageCode: string;
  PW: string;
  SearchText: string;
}

export interface RootObject {
  success: boolean;
  statusCode: number;
  message: string;
  data: Data;
}
export const LeadListMockData: LeadList[] = [
  {
    agentUserName: null,
    onlineContactUserName: null,
    generalName: "AlokTestAgent",
    customerID: 1123730,
    firstName: "Eugene",
    lastName: "Grinberg",
    leaseState: "PA",
    regulatoryState: "PA",
    deviceLogRptgClassCd: 256,
    phoneNumber: "(515) 204-2558",
    initiatedDate: "2022-12-07T18:58:15.583",
    accountNote: "Install with competitor",
    dateOfLastOutBoundCall: null,
    dateOfLastInBoundCall: null,
    totalOutBoundCalls: 0,
    outBoundCallMadeBy: null,
    outBoundCallInLast3Days: 0,
    outBoundCallSinceInstall: 0,
    mostRecentDisposition: "Lost to Comp - Other",
    createUser: "AlokTestAgent",
    languageCd: 199,
    agentAssignedToName: "Alex Killam",
    agentAssignedToUser: "Akillam",
    agentAssignedDate: "2022-12-01T17:17:37.213",
    followUpAgentName: "Alex Killam",
    followUpAgentUser: "Akillam",
    followUpDate: "2022-12-01T17:17:36.213",
    doNotFollowUp: false,
    followUpDateAssignedDate: "2022-12-01T17:17:36.217",
    pendAgentName: "Sher Bond",
    pendAgentUser: "sbond",
    pendDate: "2022-08-17T08:32:36.727",
    installAgentName: null,
    installAgentUser: null,
    installDate: null,
    requiredDocumentCount: 1,
    documentApprovalCount: 0,
    nextContactDate: "2022-12-01T17:17:37.213",
    nextContactDateSort: "2022-12-01T17:17:37.213",
    nextContactDateSortOrder: 1,
    createUserName: "AlokTestAgent",
    leadAgent: "AlokTestAgent",
    pendAgent: "Sher Bond",
    followUpAgent: "Alex Killam",
    followUpAgentUserName: "Akillam",
    assignedToMe: "",
    name: "Eugene Grinberg",
    languageCode: "E",
    haveAllRequiredPaperwork: false,
  },
  {
    agentUserName: null,
    onlineContactUserName: null,
    generalName: "Shiree Richardson",
    customerID: 1131058,
    firstName: "RICKY",
    lastName: "DAVIS",
    leaseState: "VA",
    regulatoryState: "VA",
    deviceLogRptgClassCd: 89,
    phoneNumber: null,
    initiatedDate: "2022-12-07T18:58:15.583",
    accountNote: "obc lvm ",
    dateOfLastOutBoundCall: null,
    dateOfLastInBoundCall: null,
    totalOutBoundCalls: 0,
    outBoundCallMadeBy: null,
    outBoundCallInLast3Days: 0,
    outBoundCallSinceInstall: 0,
    mostRecentDisposition: "No Answer - LVM",
    createUser: "AlokTestAgent",
    languageCd: null,
    agentAssignedToName: null,
    agentAssignedToUser: null,
    agentAssignedDate: null,
    followUpAgentName: null,
    followUpAgentUser: null,
    followUpDate: null,
    doNotFollowUp: false,
    followUpDateAssignedDate: null,
    pendAgentName: "Shiree Richardson",
    pendAgentUser: "srichardson",
    pendDate: "2020-11-07T10:40:07.477",
    installAgentName: null,
    installAgentUser: null,
    installDate: null,
    requiredDocumentCount: 0,
    documentApprovalCount: 0,
    nextContactDate: null,
    nextContactDateSort: "1971-01-01T00:00:00",
    nextContactDateSortOrder: 2,
    createUserName: "Shiree Richardson",
    leadAgent: "Shiree Richardson",
    pendAgent: "Shiree Richardson",
    followUpAgent: "",
    followUpAgentUserName: "",
    assignedToMe: "",
    name: "RICKY DAVIS",
    languageCode: "",
    haveAllRequiredPaperwork: true,
  },
  {
    agentUserName: null,
    onlineContactUserName: null,
    generalName: "AlokTestAgent",
    customerID: 1180006,
    firstName: "Christina",
    lastName: "Cote",
    leaseState: "OR",
    regulatoryState: "OR",
    deviceLogRptgClassCd: 89,
    phoneNumber: "(515) 204-2558",
    initiatedDate: "2022-12-07T18:58:15.583",
    accountNote: "obc lm",
    dateOfLastOutBoundCall: null,
    dateOfLastInBoundCall: null,
    totalOutBoundCalls: 0,
    outBoundCallMadeBy: null,
    outBoundCallInLast3Days: 0,
    outBoundCallSinceInstall: 0,
    mostRecentDisposition: "No Answer - LVM",
    createUser: "AlokTestAgent",
    languageCd: 199,
    agentAssignedToName: null,
    agentAssignedToUser: null,
    agentAssignedDate: null,
    followUpAgentName: "Wendy Green",
    followUpAgentUser: "wgreen",
    followUpDate: "2022-11-29T17:28:53.427",
    doNotFollowUp: false,
    followUpDateAssignedDate: "2022-11-21T17:31:16.667",
    pendAgentName: "Wendy Green",
    pendAgentUser: "wgreen",
    pendDate: "2021-05-24T20:16:55.46",
    installAgentName: null,
    installAgentUser: null,
    installDate: null,
    requiredDocumentCount: 0,
    documentApprovalCount: 0,
    nextContactDate: "2022-11-29T17:28:53.427",
    nextContactDateSort: "2022-11-29T17:28:53.427",
    nextContactDateSortOrder: 1,
    createUserName: "AlokTestAgent",
    leadAgent: "AlokTestAgent",
    pendAgent: "Wendy Green",
    followUpAgent: "Wendy Green",
    followUpAgentUserName: "wgreen",
    assignedToMe: "",
    name: "Christina Cote",
    languageCode: "E",
    haveAllRequiredPaperwork: true,
  },
  {
    agentUserName: null,
    onlineContactUserName: null,
    generalName: "AlokTestAgent",
    customerID: 1197300,
    firstName: "ittest",
    lastName: "testing",
    leaseState: null,
    regulatoryState: null,
    deviceLogRptgClassCd: 0,
    phoneNumber: "(515) 204-2558",
    initiatedDate: "2022-12-07T18:58:15.583",
    accountNote: null,
    dateOfLastOutBoundCall: null,
    dateOfLastInBoundCall: null,
    totalOutBoundCalls: 0,
    outBoundCallMadeBy: null,
    outBoundCallInLast3Days: 0,
    outBoundCallSinceInstall: 0,
    mostRecentDisposition: null,
    createUser: "AlokTestAgent",
    languageCd: null,
    agentAssignedToName: null,
    agentAssignedToUser: null,
    agentAssignedDate: null,
    followUpAgentName: null,
    followUpAgentUser: null,
    followUpDate: null,
    doNotFollowUp: false,
    followUpDateAssignedDate: null,
    pendAgentName: null,
    pendAgentUser: null,
    pendDate: null,
    installAgentName: null,
    installAgentUser: null,
    installDate: null,
    requiredDocumentCount: 0,
    documentApprovalCount: 0,
    nextContactDate: null,
    nextContactDateSort: "1971-01-01T00:00:00",
    nextContactDateSortOrder: 2,
    createUserName: "AlokTestAgent",
    leadAgent: "AlokTestAgent",
    pendAgent: "",
    followUpAgent: "",
    followUpAgentUserName: "",
    assignedToMe: "",
    name: "ittest testing",
    languageCode: "",
    haveAllRequiredPaperwork: true,
  },
  {
    agentUserName: null,
    onlineContactUserName: null,
    generalName: "AlokTestAgent",
    customerID: 1197620,
    firstName: "Laura",
    lastName: "Nguyen",
    leaseState: null,
    regulatoryState: null,
    deviceLogRptgClassCd: 0,
    phoneNumber: "(515) 204-2558",
    initiatedDate: "2022-12-07T18:58:15.583",
    accountNote: null,
    dateOfLastOutBoundCall: null,
    dateOfLastInBoundCall: null,
    totalOutBoundCalls: 0,
    outBoundCallMadeBy: null,
    outBoundCallInLast3Days: 0,
    outBoundCallSinceInstall: 0,
    mostRecentDisposition: null,
    createUser: "AlokTestAgent",
    languageCd: null,
    agentAssignedToName: null,
    agentAssignedToUser: null,
    agentAssignedDate: null,
    followUpAgentName: null,
    followUpAgentUser: null,
    followUpDate: null,
    doNotFollowUp: false,
    followUpDateAssignedDate: null,
    pendAgentName: null,
    pendAgentUser: null,
    pendDate: null,
    installAgentName: null,
    installAgentUser: null,
    installDate: null,
    requiredDocumentCount: 0,
    documentApprovalCount: 0,
    nextContactDate: null,
    nextContactDateSort: "1971-01-01T00:00:00",
    nextContactDateSortOrder: 2,
    createUserName: "AlokTestAgent",
    leadAgent: "AlokTestAgent",
    pendAgent: "",
    followUpAgent: "",
    followUpAgentUserName: "",
    assignedToMe: "",
    name: "Laura Nguyen",
    languageCode: "",
    haveAllRequiredPaperwork: true,
  },
  {
    agentUserName: null,
    onlineContactUserName: null,
    generalName: "AlokTestAgent",
    customerID: 1202538,
    firstName: "Ittestv",
    lastName: "Test",
    leaseState: null,
    regulatoryState: "  ",
    deviceLogRptgClassCd: 0,
    phoneNumber: "(515) 204-2558",
    initiatedDate: "2022-12-07T18:58:15.583",
    accountNote: null,
    dateOfLastOutBoundCall: null,
    dateOfLastInBoundCall: null,
    totalOutBoundCalls: 0,
    outBoundCallMadeBy: null,
    outBoundCallInLast3Days: 0,
    outBoundCallSinceInstall: 0,
    mostRecentDisposition: null,
    createUser: "AlokTestAgent",
    languageCd: null,
    agentAssignedToName: null,
    agentAssignedToUser: null,
    agentAssignedDate: null,
    followUpAgentName: null,
    followUpAgentUser: null,
    followUpDate: null,
    doNotFollowUp: false,
    followUpDateAssignedDate: null,
    pendAgentName: null,
    pendAgentUser: null,
    pendDate: null,
    installAgentName: null,
    installAgentUser: null,
    installDate: null,
    requiredDocumentCount: 0,
    documentApprovalCount: 0,
    nextContactDate: null,
    nextContactDateSort: "1971-01-01T00:00:00",
    nextContactDateSortOrder: 2,
    createUserName: "AlokTestAgent",
    leadAgent: "AlokTestAgent",
    pendAgent: "",
    followUpAgent: "",
    followUpAgentUserName: "",
    assignedToMe: "",
    name: "Ittestv Test",
    languageCode: "",
    haveAllRequiredPaperwork: true,
  },
  {
    agentUserName: null,
    onlineContactUserName: null,
    generalName: "AlokTestAgent",
    customerID: 1202539,
    firstName: "TEST",
    lastName: "TEST",
    leaseState: null,
    regulatoryState: "IA",
    deviceLogRptgClassCd: 0,
    phoneNumber: null,
    initiatedDate: "2022-12-07T18:58:15.583",
    accountNote: null,
    dateOfLastOutBoundCall: null,
    dateOfLastInBoundCall: null,
    totalOutBoundCalls: 0,
    outBoundCallMadeBy: null,
    outBoundCallInLast3Days: 0,
    outBoundCallSinceInstall: 0,
    mostRecentDisposition: null,
    createUser: "AlokTestAgent",
    languageCd: null,
    agentAssignedToName: null,
    agentAssignedToUser: null,
    agentAssignedDate: null,
    followUpAgentName: null,
    followUpAgentUser: null,
    followUpDate: null,
    doNotFollowUp: false,
    followUpDateAssignedDate: null,
    pendAgentName: null,
    pendAgentUser: null,
    pendDate: null,
    installAgentName: null,
    installAgentUser: null,
    installDate: null,
    requiredDocumentCount: 0,
    documentApprovalCount: 0,
    nextContactDate: null,
    nextContactDateSort: "1971-01-01T00:00:00",
    nextContactDateSortOrder: 2,
    createUserName: "AlokTestAgent",
    leadAgent: "AlokTestAgent",
    pendAgent: "",
    followUpAgent: "",
    followUpAgentUserName: "",
    assignedToMe: "",
    name: "TEST TEST",
    languageCode: "",
    haveAllRequiredPaperwork: true,
  },
  {
    agentUserName: null,
    onlineContactUserName: null,
    generalName: "AlokTestAgent",
    customerID: 1202540,
    firstName: "Ittestamz",
    lastName: "donotcall",
    leaseState: null,
    regulatoryState: "  ",
    deviceLogRptgClassCd: 0,
    phoneNumber: "(515) 204-2558",
    initiatedDate: "2022-12-07T18:58:15.583",
    accountNote: null,
    dateOfLastOutBoundCall: null,
    dateOfLastInBoundCall: null,
    totalOutBoundCalls: 0,
    outBoundCallMadeBy: null,
    outBoundCallInLast3Days: 0,
    outBoundCallSinceInstall: 0,
    mostRecentDisposition: null,
    createUser: "AlokTestAgent",
    languageCd: null,
    agentAssignedToName: null,
    agentAssignedToUser: null,
    agentAssignedDate: null,
    followUpAgentName: null,
    followUpAgentUser: null,
    followUpDate: null,
    doNotFollowUp: false,
    followUpDateAssignedDate: null,
    pendAgentName: null,
    pendAgentUser: null,
    pendDate: null,
    installAgentName: null,
    installAgentUser: null,
    installDate: null,
    requiredDocumentCount: 0,
    documentApprovalCount: 0,
    nextContactDate: null,
    nextContactDateSort: "1971-01-01T00:00:00",
    nextContactDateSortOrder: 2,
    createUserName: "AlokTestAgent",
    leadAgent: "AlokTestAgent",
    pendAgent: "",
    followUpAgent: "",
    followUpAgentUserName: "",
    assignedToMe: "",
    name: "Ittestamz donotcall",
    languageCode: "",
    haveAllRequiredPaperwork: true,
  },
  {
    agentUserName: null,
    onlineContactUserName: null,
    generalName: "AlokTestAgent",
    customerID: 1202541,
    firstName: "ittestVttt",
    lastName: "test",
    leaseState: null,
    regulatoryState: "  ",
    deviceLogRptgClassCd: 0,
    phoneNumber: "(515) 204-2558",
    initiatedDate: "2022-12-07T18:58:15.583",
    accountNote: null,
    dateOfLastOutBoundCall: null,
    dateOfLastInBoundCall: null,
    totalOutBoundCalls: 0,
    outBoundCallMadeBy: null,
    outBoundCallInLast3Days: 0,
    outBoundCallSinceInstall: 0,
    mostRecentDisposition: null,
    createUser: "AlokTestAgent",
    languageCd: null,
    agentAssignedToName: null,
    agentAssignedToUser: null,
    agentAssignedDate: null,
    followUpAgentName: null,
    followUpAgentUser: null,
    followUpDate: null,
    doNotFollowUp: false,
    followUpDateAssignedDate: null,
    pendAgentName: null,
    pendAgentUser: null,
    pendDate: null,
    installAgentName: null,
    installAgentUser: null,
    installDate: null,
    requiredDocumentCount: 0,
    documentApprovalCount: 0,
    nextContactDate: null,
    nextContactDateSort: "1971-01-01T00:00:00",
    nextContactDateSortOrder: 2,
    createUserName: "AlokTestAgent",
    leadAgent: "AlokTestAgent",
    pendAgent: "",
    followUpAgent: "",
    followUpAgentUserName: "",
    assignedToMe: "",
    name: "ittestVttt test",
    languageCode: "",
    haveAllRequiredPaperwork: true,
  },
  {
    agentUserName: null,
    onlineContactUserName: null,
    generalName: "AlokTestAgent",
    customerID: 1202543,
    firstName: "Ittesamz",
    lastName: "donotcall",
    leaseState: null,
    regulatoryState: "  ",
    deviceLogRptgClassCd: 0,
    phoneNumber: "(515) 204-2558",
    initiatedDate: "2022-12-07T18:58:15.583",
    accountNote: null,
    dateOfLastOutBoundCall: null,
    dateOfLastInBoundCall: null,
    totalOutBoundCalls: 0,
    outBoundCallMadeBy: null,
    outBoundCallInLast3Days: 0,
    outBoundCallSinceInstall: 0,
    mostRecentDisposition: null,
    createUser: "AlokTestAgent",
    languageCd: null,
    agentAssignedToName: null,
    agentAssignedToUser: null,
    agentAssignedDate: null,
    followUpAgentName: null,
    followUpAgentUser: null,
    followUpDate: null,
    doNotFollowUp: false,
    followUpDateAssignedDate: null,
    pendAgentName: null,
    pendAgentUser: null,
    pendDate: null,
    installAgentName: null,
    installAgentUser: null,
    installDate: null,
    requiredDocumentCount: 0,
    documentApprovalCount: 0,
    nextContactDate: null,
    nextContactDateSort: "1971-01-01T00:00:00",
    nextContactDateSortOrder: 2,
    createUserName: "AlokTestAgent",
    leadAgent: "AlokTestAgent",
    pendAgent: "",
    followUpAgent: "",
    followUpAgentUserName: "",
    assignedToMe: "",
    name: "Ittesamz donotcall",
    languageCode: "",
    haveAllRequiredPaperwork: true,
  },
];

export const exampleLead = {
  agentUserName: null,
  onlineContactUserName: null,
  generalName: "AlokTestAgent", //Lead agent
  customerID: 1123730,
  firstName: "Eugene", // customer name
  lastName: "Grinberg", // customer name
  leaseState: "PA", //ST
  regulatoryState: "PA", //ST
  deviceLogRptgClassCd: 256,
  phoneNumber: "(515) 204-2558",
  initiatedDate: "2022-12-07T18:58:15.583", //Initiated Date
  accountNote: "Install with competitor", //Account Note
  dateOfLastOutBoundCall: null, // Last OB call
  dateOfLastInBoundCall: null, //Last IB call
  totalOutBoundCalls: 0, //Total OB
  outBoundCallMadeBy: null, //OB Made By
  outBoundCallInLast3Days: 0, //OB 3 Days
  outBoundCallSinceInstall: 0,
  mostRecentDisposition: "Lost to Comp - Other", //Mot recent desposition
  createUser: "AlokTestAgent",
  languageCd: 199,
  agentAssignedToName: "Alex Killam",
  agentAssignedToUser: "Akillam",
  agentAssignedDate: "2022-12-01T17:17:37.213",
  followUpAgentName: "Alex Killam",
  followUpAgentUser: "Akillam",
  followUpDate: "2022-12-01T17:17:36.213",
  doNotFollowUp: false,
  followUpDateAssignedDate: "2022-12-01T17:17:36.217",
  pendAgentName: "Sher Bond", //Pend Agent
  pendAgentUser: "sbond",
  pendDate: "2022-08-17T08:32:36.727", //Pend date
  installAgentName: null,
  installAgentUser: null,
  installDate: null,
  requiredDocumentCount: 1,
  documentApprovalCount: 0,
  nextContactDate: "2022-12-01T17:17:37.213", // Next Contact
  nextContactDateSort: "2022-12-01T17:17:37.213",
  nextContactDateSortOrder: 1,
  createUserName: "AlokTestAgent",
  leadAgent: "AlokTestAgent",
  pendAgent: "Sher Bond",
  followUpAgent: "Alex Killam", //Follow up agent
  followUpAgentUserName: "Akillam",
  assignedToMe: "",
  name: "Eugene Grinberg", //Customer Name
  languageCode: "E", // L
  haveAllRequiredPaperwork: false, //PW
};
