import { useState } from "react";
import { Modal, Button } from "antd";

const LeadershipModal = ({ isModalVisible, handleCancel }) => {
  const handleOk = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        // onOk={handleOk}
        // onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default LeadershipModal;
