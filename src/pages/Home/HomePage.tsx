"use client";

import React, {
  ElementRef,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

interface ModalData {
  number: number;
  visible: boolean;
}

export function HomePage() {
  // const modalRef = useRef<ElementRef<typeof ModalWithForwardRef>>(null);
  const [modalData, setModalData] = useState<ModalData>({
    number: 0,
    visible: false,
  });

  console.log("Paren rendered");

  const openModal = (number: number) => {
    setModalData({ number, visible: true });
  };

  const closeModal = (number: number) => {
    setModalData({ visible: false, number });
  };

  // const openModal = (number: number) => {
  //   modalRef.current?.open(number);
  // };

  return (
    <div className="grid justify-items-center gap-5">
      <Modal modalData={modalData} closeModal={closeModal} />
      {/* <ModalWithForwardRef ref={modalRef} /> */}
      <Users openModal={openModal} />
    </div>
  );
}

const Users = ({ openModal }: { openModal: (number: number) => void }) => {
  console.log("Users list rendered");

  const users = new Array(10).fill(1).map((item, index) => {
    console.log(`User ${index + 1} rendered`);

    return (
      <div key={index} className="flex p-3 border rounded-xl">
        <div className="w-10 h-10 bg-slate-600 rounded-xl text-white flex items-center justify-center mr-5">
          {index + 1}
        </div>
        <button onClick={() => openModal(index + 1)}>Open {index + 1}</button>
      </div>
    );
  });

  return users;
};

const Modal = ({
  modalData,
  closeModal,
}: {
  modalData: ModalData;
  closeModal: (number: number) => void;
}) => {
  console.log("Modal rendered");

  if (!modalData.visible) return null;

  return (
    <div className="absolute w-1/2 aspect-square bg-blue-400 rounded-2xl flex flex-col items-center justify-center px-8">
      <h2 className="text-2xl text-center mb-5">User {modalData.number}</h2>

      <button className="bg-white" onClick={() => closeModal(modalData.number)}>
        Close {modalData.number}
      </button>
    </div>
  );
};

// type ModalFunctions = {
//   open: (number: number) => void;
//   close: () => void;
// };

// const Modal: React.ForwardRefRenderFunction<ModalFunctions, {}> = (
//   props,
//   ref
// ) => {
//   const [userNumber, setUserNumber] = useState<number>();

//   useImperativeHandle(ref, () => ({
//     open: (data) => {
//       setUserNumber(data);
//     },
//     close: () => setUserNumber(undefined),
//   }));

//   console.log("Child rendered");
//   const close = () => setUserNumber(undefined);

//   if (!userNumber) return null;

//   return (
//     <div className="absolute w-1/2 aspect-square bg-blue-400 rounded-2xl flex flex-col items-center justify-center px-8">
//       <h2 className="text-2xl text-center mb-5">User {userNumber}</h2>

//       <button className="bg-white" onClick={close}>
//         Close {userNumber}
//       </button>
//     </div>
//   );
// };

// const ModalWithForwardRef = forwardRef<ModalFunctions>(Modal);
