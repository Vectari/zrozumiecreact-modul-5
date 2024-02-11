import { useState } from "react";
import { Button } from "../Button/Button";
import { List } from "../List/List";
import styles from "./Panel.module.css";

export function Panel() {
    const [data, setData] = useState([]);

    return (
        <>
            <Button onClick={() => {
                fetch("http://localhost:3000/words").then(res => res.json()).then(res => {
                    setData(res)
                })
            }}>Załaduje dane</Button>
            <section className={styles.section}>
                <List data={data}></List>
            </section>
        </>
    );
}
