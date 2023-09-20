
export let contractList;
contractList = [
    {
        contractNumber: 'HD001',
        startDate: '2023-01-15',
        endDate: '2023-03-15',
        depositAmount: 5000000,
        totalPaymentAmount: 15000000,
    },
    {
        contractNumber: 'HD002',
        startDate: '2023-02-10',
        endDate: '2023-04-10',
        depositAmount: 6000000,
        totalPaymentAmount: 18000000,
    },
    {
        contractNumber: 'HD003',
        startDate: '2023-03-05',
        endDate: '2023-05-05',
        depositAmount: 5500000,
        totalPaymentAmount: 16500000,
    },
    {
        contractNumber: 'HD004',
        startDate: '2023-04-20',
        endDate: '2023-06-20',
        depositAmount: 7000000,
        totalPaymentAmount: 21000000,
    },
    {
        contractNumber: 'HD005',
        startDate: '2023-05-15',
        endDate: '2023-07-15',
        depositAmount: 4500000,
        totalPaymentAmount: 13500000,
    },
    {
        contractNumber: 'HD006',
        startDate: '2023-06-08',
        endDate: '2023-08-08',
        depositAmount: 6500000,
        totalPaymentAmount: 19500000,
    },
];

export function contractDataList() {
    return contractList;
}

export default contractDataList;