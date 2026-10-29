
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #f7f8fa;
    color: #172033;
    min-height: 100vh;
}

.header {
    padding: 65px 8% 45px;
    background: #ffffff;
    border-bottom: 1px solid #e5e7eb;
}

.header h1 {
    font-size: clamp(32px, 5vw, 48px);
    letter-spacing: -2px;
    margin-bottom: 12px;
}

.header h1 span {
    color: #2563eb;
}

.header p {
    color: #6b7280;
    font-size: 15px;
}

.container {
    max-width: 1150px;
    margin: auto;
    padding: 45px 25px;
}

.section-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
}

.section-heading h2 {
    font-size: 25px;
}

.section-heading span {
    color: #6b7280;
    font-size: 13px;
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 22px;
}

.project-card {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 24px;
    transition: transform 0.2s, box-shadow 0.2s;
}

.project-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px #1720330d;
}

.project-number {
    display: inline-block;
    color: #2563eb;
    background: #eff6ff;
    padding: 9px 12px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 22px;
}

.project-card h3 {
    font-size: 20px;
    margin-bottom: 10px;
}

.project-card p {
    font-size: 14px;
    color: #6b7280;
    line-height: 1.7;
    margin-bottom: 22px;
}

.project-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #2563eb;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
}

.project-link:hover {
    color: #1d4ed8;
}

footer {
    text-align: center;
    padding: 25px;
    color: #6b7280;
    font-size: 13px;
    border-top: 1px solid #e5e7eb;
}

@media (max-width: 850px) {
    .project-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 550px) {
    .header {
        padding: 45px 6%;
    }

    .container {
        padding: 30px 18px;
    }

    .project-grid {
        grid-template-columns: 1fr;
    }
}
