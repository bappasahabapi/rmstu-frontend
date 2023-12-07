// import React, { useState } from 'react';
// import { Button, Modal } from 'antd';

// interface IModalProps {
//     visible: boolean;
//     onOk: () => void;
//     onCancel: () => void;
//     title: string;
//     // content: React.ReactNode;

// }

// const UMModal = ({ visible,
//     onOk,
//     onCancel,
//     title, }: IModalProps) => {
//     return (
//         <Modal title={title} visible={visible} onOk={onOk} onCancel={onCancel}>
//             <h1>Are You Want to Delete Department ???</h1>
//         </Modal>
//     )
// };


// export default UMModal;


import React, { useState } from 'react';
import { Button, Modal } from 'antd';

interface IModalProps {
    visible: boolean;
    onOk: () => void;
    onCancel: () => void;
    title: string;
    children: React.ReactNode; // Make content dynamic
}

const UMModal = ({ visible, onOk, onCancel, title, children }: IModalProps) => {
    return (
        <Modal title={title} visible={visible} onOk={onOk} onCancel={onCancel}>
            {children}
        </Modal>
    );
};

export default UMModal;