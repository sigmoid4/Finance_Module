import UploadFile from './uploadFile';

const columns = [
  { name: 'Payee Details', uid: 'payeeDetails' },
  { name: 'Amount', uid: 'amount' },
  { name: 'Payer Acc No', uid: 'payerAccNo' },
  { name: 'Payee Acc No', uid: 'payeeAccNo' },
  { name: 'Txn ID', uid: 'txnId' },
  { name: 'Status', uid: 'status', sortable: true },
  { name: 'Payment', uid: 'payment' },
  { name: 'Deduction', uid: 'deduction' },
  { name: 'Recurring', uid: 'recurring' },
  { name: 'Upload', uid: 'upload' },
  { name: 'Actions', uid: 'actions' },
];

const statusOptions = [
  { name: 'Approved', uid: 'Approved' },
  { name: 'Rejected', uid: 'Rejected' },
  { name: 'Pending', uid: 'Pending' },
  { name: 'On Hold', uid: 'On Hold' },
];

const users = [
  {
    payeeDetails: 'Ajay',
    amount: '50000',
    payerAccNo: 'xxx12345',
    payeeAccNo: 'yyy12345',
    txnId: '123456789',
    status: 'Approved',
    payment: 'Salary',
    deduction: 'TDS',
    recurring: 'Yearly',
  },
  {
    payeeDetails: 'Rahul',
    amount: '52000',
    payerAccNo: 'xxx12346',
    payeeAccNo: 'yyy12345',
    txnId: '123456789',
    status: 'Rejected',
    payment: 'Salary',
    deduction: 'TDS',
    recurring: 'Yearly',
  },
  {
    payeeDetails: 'Vijay',
    amount: '50000',
    payerAccNo: 'xxx12345',
    payeeAccNo: 'yyy12345',
    txnId: '123456789',
    status: 'On Hold',
    payment: 'Salary',
    deduction: 'GST',
    recurring: 'Yearly',
  },
  {
    payeeDetails: 'Ajay',
    amount: '50000',
    payerAccNo: 'xxx12345',
    payeeAccNo: 'yyy12345',
    txnId: '123456789',
    status: 'Approved',
    payment: 'Salary',
    deduction: 'TDS',
    recurring: 'Yearly',
  },
  {
    payeeDetails: 'Ajay',
    amount: '50000',
    payerAccNo: 'xxx12345',
    payeeAccNo: 'yyy12345',
    txnId: '123456789',
    status: 'Approved',
    payment: 'Salary',
    deduction: 'TDS',
    recurring: 'Yearly',
  },
  {
    payeeDetails: 'Ajay',
    amount: '50000',
    payerAccNo: 'xxx12345',
    payeeAccNo: 'yyy12345',
    txnId: '123456789',
    status: 'Approved',
    payment: 'Salary',
    deduction: 'TDS',
    recurring: 'Yearly',
  },
  {
    payeeDetails: 'Ajay',
    amount: '50000',
    payerAccNo: 'xxx12345',
    payeeAccNo: 'yyy12345',
    txnId: '123456789',
    status: 'Approved',
    payment: 'Salary',
    deduction: 'TDS',
    recurring: 'Yearly',
  },
  {
    payeeDetails: 'Ajay',
    amount: '50000',
    payerAccNo: 'xxx12345',
    payeeAccNo: 'yyy12345',
    txnId: '123456789',
    status: 'Approved',
    payment: 'Salary',
    deduction: 'TDS',
    recurring: 'Yearly',
  },
];

export { columns, users, statusOptions };