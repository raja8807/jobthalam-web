import MainFrame from "@/components/ui/main_frame/main_frame";
import React, { useState } from "react";
import styles from "./update.module.scss";
import CustomInput from "@/components/ui/cuatom_input/cuatom_input";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { BuildingFill, PersonCircle } from "react-bootstrap-icons";
import CustomSkillSelector from "@/components/ui/select/custom_skills_selector/custom_skills_selector";
import { signOut } from "@/utils/supabase/libs";
import {
  createNewUser,
  updateCurrentUser,
} from "@/utils/supabase/queries/user";
import { createNewEmployer } from "@/utils/supabase/commands/user";

const UpdateForm = ({ setCurrentUser, currentUser, sessionUser }) => {
  const [role, setRole] = useState("Candidates");

  const [values, setValues] = useState(
    currentUser
      ? { ...currentUser }
      : {
          first_name: "",
          last_name: "",
          role,
          phone_number: "",
        }
  );

  const [compValues, setCompValues] = useState({
    name: "",
    industry_type: "",
  });

  const createUser = async () => {
    if (role === "Candidates") {
      const res = await createNewUser(
        {
          ...values,
          user_id: sessionUser?.id,
          email: sessionUser?.email,
          role,
        },
        role
      );
      setCurrentUser(res?.data);

    }

    if (role) {
      const res = await createNewEmployer(
        {
          ...values,
          user_id: sessionUser?.id,
          email: sessionUser?.email,
          role,
        },
        role,
        {
          ...compValues,
        }
      );
      setCurrentUser(res?.data);
    }

  };

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (currentUser) {
          alert();
        } else {
          await createUser();
        }
      }}
    >
      <div className={styles.select}>
        <p>Are you a</p>
        <div>
          <p
            onClick={() => {
              setRole("Candidates");
            }}
            className={role === "Candidates" ? styles.active : ""}
          >
            <PersonCircle />
            &nbsp;Candidate
          </p>
          <p
            onClick={() => {
              setRole("Employers");
            }}
            className={role === "Employers" ? styles.active : ""}
          >
            <BuildingFill />
            &nbsp;Employer
          </p>
        </div>
      </div>
      <div className={styles.name}>
        <CustomInput
          placeHolder="First Name"
          type="text"
          required
          onChange={(e, value) => {
            setValues((prev) => ({ ...prev, first_name: value }));
          }}
          value={values.first_name}
        />
        <CustomInput
          placeHolder="Last Name"
          type="text"
          required
          onChange={(e, value) => {
            setValues((prev) => ({ ...prev, last_name: value }));
          }}
          value={values.last_name}
        />
      </div>
      <CustomInput
        placeHolder="Phone Number"
        type="text"
        minLength={8}
        onChange={(e, value) => {
          setValues((prev) => ({ ...prev, phone_number: value }));
        }}
        value={values.phone_number}
      />

      {role === "Candidates" ? (
        <CustomSkillSelector />
      ) : (
        <>
          <CustomInput
            placeHolder="Company Name"
            type="text"
            onChange={(e, v) => {
              setCompValues((prev) => ({ ...prev, name: v }));
            }}
            value={compValues.name}
            required
          />
          <CustomInput
            placeHolder="Industry Type"
            type="text"
            onChange={(e, v) => {
              setCompValues((prev) => ({ ...prev, industry_type: v }));
            }}
            value={compValues.industry_type}
            required
          />
        </>
      )}
      <CustomButton wFull type="submit" btnText="Update" />
    </form>
  );
};

const UpdateScreen = ({
  setCurrentScreen,
  currentUser,
  sessionUser,
  setCurrentUser,
}) => {
  return (
    <MainFrame>
      <div className={styles.LoginScreen}>
        <div className={styles.box}>
          <h3>Update profile.</h3>

          <small className={styles.create}>
            Not now? &nbsp;
            <span
              onClick={() => {
                signOut();
              }}
            >
              Logout
            </span>
          </small>

          <UpdateForm
            setCurrentScreen={setCurrentScreen}
            currentUser={currentUser}
            sessionUser={sessionUser}
            setCurrentUser={setCurrentUser}
          />
        </div>
      </div>
    </MainFrame>
  );
};

export default UpdateScreen;
