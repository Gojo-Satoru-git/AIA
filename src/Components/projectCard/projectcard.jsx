import styles from "../../Pages/Projects/Projects.module.css"
export function Projectcard({i,image,title,desc}) {
    return (
        <article
            key={i}
            className={styles.card}
            style={{
                backgroundImage: image ? `url(${image})` : undefined,
            }}
        >
            <div className={styles.gradient} />
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardSubtitle}>{desc}</p>
            </div>
        </article>
    );
}