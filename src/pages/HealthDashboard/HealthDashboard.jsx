import styles from './HealthDashboard.module.css';

const HealthDashboard = () => {
  return (
    <div className={styles.healthDashboard}>
      <h1>Health Analytics Dashboard</h1>
      <img src="/path-to-image.jpg" alt="Health Dashboard" className={styles.image} />
      <p>This project showcases an interactive Power BI dashboard that analyzes patient health metrics.</p>
      <ul>
        <li>Tools: Power BI, SQL</li>
        <li>Features: Drill-through, KPIs, dynamic filters</li>
        <li>Goal: Help healthcare providers track patient metrics efficiently</li>
      </ul>
    </div>
  );
};

export default HealthDashboard;
