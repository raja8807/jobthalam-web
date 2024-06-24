import React from "react";
import { Image, Modal } from "react-bootstrap";
import styles from "./job_details.module.scss";
import CustomButton from "@/components/ui/custom_button/custom_button";
import {
  Briefcase,
  CalendarDate,
  ClockHistory,
  CurrencyRupee,
  GeoAlt,
  Layers,
  X,
} from "react-bootstrap-icons";

const JobDetails = ({ job, setJob }) => {
  const close = () => {
    setJob(null);
  };
  return (
    <Modal
      show={!!job}
      onHide={close}
      className={styles.JobDetailsModal}
      size="xl"
      centered
    >
      <Modal.Header className={styles.modalHead}>
        <div className={styles.head}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <Image src={job.logoUrl} alt="logo" height={50} />
            </div>
            <div className={styles.name}>
              <h4>{job.title}</h4>
              <p>at {job.companyName}</p>
            </div>
          </div>

          <div className={styles.right}>
            <CustomButton>Apply</CustomButton>
          </div>
          <X
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              close();
            }}
          />
        </div>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        <div className={styles.wrap}>
          <div className={styles.top}>
            <div className={styles.box}>
              <div className={styles.box1}>
                <div>
                  <h5>Salary (INR)</h5>
                  <p>&#8377; 1,20,000</p>
                  <small>Per Year</small>
                </div>
                <hr />
                <div>
                  <GeoAlt />
                  <p>Job Location</p>
                  <small>Chennai</small>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <h6>Job Overview</h6>
              <div className={styles.box2}>
                <div>
                  <CalendarDate />
                  <p>Job Posted:</p>
                  <span>14, Jan 2024</span>
                </div>
                <div>
                  <ClockHistory />
                  <p>JOB EXPIRES ON:</p>
                  <span>14, Jan 2024</span>
                </div>
                <div>
                  <Layers />
                  <p>JOB LEVEL:</p>
                  <span>Entry Level</span>
                </div>
                <div>
                  <CalendarDate />
                  <p>EXPERIENCE:</p>
                  <span>Freshers</span>
                </div>
                <div>
                  <Briefcase />
                  <p>EDUCATION:</p>
                  <span>Graduation</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.bottom}>
            <div className={styles.description}>
              <h6>Job Description</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
                perferendis rem reiciendis illum minus similique excepturi
                placeat, quod suscipit recusandae dolores sint tempore, neque
                vel expedita sequi doloribus dignissimos? Est recusandae velit
                numquam ex tempora, corrupti praesentium excepturi, rem quam
                consectetur nobis voluptates, sunt cum suscipit autem ut
                distinctio alias nostrum laudantium! Esse quis eaque cupiditate
                vero quo ab ipsa. Labore vitae commodi est ex quisquam
                exercitationem ducimus quia. Voluptatum vel exercitationem iste
                consequuntur, eligendi ratione repellat corrupti ipsa vitae
                laboriosam. Odit ab fuga tempora illo harum ducimus rem officia
                et a adipisci illum voluptas accusantium minima quae, laborum
                exercitationem!
              </p>
              <br />
              <h6>Company Details</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo neque optio, nobis sunt numquam aperiam suscipit
                magni, veritatis beatae modi natus pariatur, illum esse libero
                iure laborum reprehenderit mollitia velit. Aspernatur
                reprehenderit consequatur id rerum saepe atque vel, sit animi,
                delectus iure ducimus repudiandae provident soluta dolorem
                perferendis fugit ratione in, et ipsum cumque ex repellat
                inventore facere magni! Enim assumenda, soluta libero accusamus
                ullam dolore debitis vitae consectetur doloribus ab quia!
                Nostrum quas itaque non iste perferendis quia ab illo in, nam
                blanditiis reprehenderit. Pariatur voluptas consectetur
                repudiandae quisquam sunt, sequi autem officia fugiat,
                distinctio excepturi quasi cumque quas.
              </p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default JobDetails;
