import FileDrop from "@/components/file_drop/file_drop";
import CustomInput from "@/components/ui/cuatom_input/cuatom_input";
import CustomButton from "@/components/ui/custom_button/custom_button";
import React from "react";
import { Modal } from "react-bootstrap";

const NewResume = ({ show, setShow }) => {
  return (
    <Modal
      show={show}
      centered
      onHide={() => {
        setShow(false);
      }}
    >
      <Modal.Header closeButton>Add New Resume</Modal.Header>
      <Modal.Body>
        <form>
          <FileDrop label="Upload resume" />
          <br />
          <CustomInput label="Name" required />
          <br />
          <CustomButton>Add</CustomButton>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default NewResume;
