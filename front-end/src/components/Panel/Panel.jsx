import { useState, useEffect } from "react";
import { List } from "../List/List";
import { Form } from "../Form/Form";
import styles from "./Panel.module.css";

export function Panel() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/words")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setIsLoading(false);
      });
  }, []);

  function handleFormSubmit(formData) {
    fetch("http://localhost:3000/words", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then(() => {
      fetch("http://localhost:3000/words")
        .then((res) => res.json())
        .then((res) => {
          setData(res);
          setIsLoading(false);
        });
    });
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <section className={styles.section}>
        <Form onFormSunbmit={handleFormSubmit} />
        <List data={data} />
      </section>
    </>
  );
}
