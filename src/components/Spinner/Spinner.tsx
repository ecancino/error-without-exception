import * as React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import styles from "./Spinner.module.css";

function Spinner() {
  return (
    <section className={styles.spinnerContainer}>
      <ScaleLoader
        color="#36d7b7"
        aria-label="Loading Indicator"
        data-testid="loader"
      />
    </section>
  );
}

export default Spinner;
