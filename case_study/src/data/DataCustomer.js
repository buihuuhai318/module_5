
export let customerList;
customerList = [
    {
        name: 'Nguyễn Văn A',
        birthday: '1990-05-15',
        gender: 'Nam',
        idCard: '123456789',
        phone: '0901234567',
        email: 'nguyenvana@example.com',
        type: 'Diamond',
        address: '123 Đường ABC, Quận XYZ, Thành phố HCM',
    },
    {
        name: 'Trần Thị B',
        birthday: '1985-02-20',
        gender: 'Nữ',
        idCard: '987654321',
        phone: '0912345678',
        email: 'tranthib@example.com',
        type: 'Platinum',
        address: '456 Đường XYZ, Quận ABC, Thành phố Hà Nội',
    },
    {
        name: 'Lê Văn C',
        birthday: '1992-09-10',
        gender: 'Nam',
        idCard: '567890123',
        phone: '0987654321',
        email: 'levanc@example.com',
        type: 'Gold',
        address: '789 Đường DEF, Quận MNO, Thành phố Đà Nẵng',
    },
    {
        name: 'Phạm Thị D',
        birthday: '1988-07-25',
        gender: 'Nữ',
        idCard: '345678901',
        phone: '0911111111',
        email: 'phamthid@example.com',
        type: 'Silver',
        address: '111 Đường GHI, Quận JKL, Thành phố Cần Thơ',
    },
    {
        name: 'Hoàng Văn E',
        birthday: '1995-03-30',
        gender: 'Nam',
        idCard: '234567890',
        phone: '0922222222',
        email: 'hoangvane@example.com',
        type: 'Member',
        address: '222 Đường STU, Quận VWX, Thành phố Hải Phòng',
    },
    {
        name: 'Mai Thị F',
        birthday: '1998-11-05',
        gender: 'Nữ',
        idCard: '456789012',
        phone: '0933333333',
        email: 'maithif@example.com',
        type: 'Member',
        address: '333 Đường YZ, Quận OPQ, Thành phố Vũng Tàu',
    },
];

export function customerDataList() {
    return customerList;
}

export default customerDataList;