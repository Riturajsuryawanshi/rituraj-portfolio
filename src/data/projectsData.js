// src/data/projectsData.js
import salesImage from '../assets/images/sales.jpg';
import dashboardImg from '../assets/images/dashboard.jpg';
import forecastImg from '../assets/images/personal.jpg';


const PROJECTS_DATA_PORTFOLIO = [
  {
    title: "Customer Engagement Dashboard for Marketing Insights",
    description: "Designed interactive dashboards to analyze customer engagement data using Power BI. Cleaned and processed CRM and social media datasets for accurate analysis. Performed Exploratory Data Analysis (EDA) and visualized key performance indicators (KPIs). Improved marketing ROI by 15% and reduced manual reporting efforts by 60%.",
    imageUrl: dashboardImg, // ✅ corrected
    imageAlt: 'Customer Engagement Dashboard',
    link: "https://github.com/Riturajsuryawanshi/Customer_Engagement_Dashboard",
    logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" ... class="lucide lucide-layout-dashboard">...</svg>`
  },
  {
    title: "Sales Data Optimization and Forecasting Tool",
    description: "Built a data-driven solution for sales forecasting and optimization. Automated data workflows using Python and developed interactive dashboards using Tableau. Conducted A/B testing to evaluate and optimize pricing strategies. Defined and monitored critical KPIs including churn rate, average order value (AOV), and customer retention.",
    imageUrl: salesImage, // ✅ You can reuse the same image or import another one
    imageAlt: 'Sales Data Optimization Tool',
    link: "https://github.com/Riturajsuryawanshi/Sales_Data_Optimization",
    logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" ... class="lucide lucide-bar-chart-2">...</svg>`
  },
  {
    title: "Personal Portfolio Website",
    description: "Personal portfolio site built with React and Tailwind CSS, showcasing projects and contact info.",
    imageUrl: forecastImg,
    imageAlt: 'Portfolio Website',
    link: "https://portfolio-khaki-seven-49.vercel.app/",
    logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" ... class="lucide lucide-monitor">...</svg>`
  }
];

export default PROJECTS_DATA_PORTFOLIO;
