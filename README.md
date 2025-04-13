Here’s the updated README with a note specifying that the truth checker currently works only in the user dashboard, and the landing page support will be added in future improvements:

```markdown
<h1 align="center">A Quick Check System That Validates Claims</h1>

<p align="center">
  <strong>Nigerian Information Verification Platform</strong><br>
  <a>deployed URL: https://truth-check-system.vercel.app/</a>
</p>

## 📌 Overview
OdinsEye is a truth verification system designed to help Nigerians validate the authenticity of circulating information. The platform serves multiple stakeholders including citizens, government agencies, media organizations, and tech developers in combating misinformation across Nigeria's diverse linguistic landscape.

> ⚠️ **Note:** The truth-checker currently works only within the user dashboard. Integration into the landing page will be implemented as part of future improvements.

## 🌟 Key Features
- **Multilingual Fact-Checking**: Supports English, Igbo, Hausa, and Yoruba  
- **Claim Validation**: Automated verification of circulating information  
- **Stakeholder Dashboards**: Custom views for different user types  
- **Source Reliability Scoring**: Rates credibility of information sources  
- **Cultural Context Analysis**: Considers regional and linguistic nuances  

## 🛠️ Technology Stack

### Frontend
- React with TypeScript  
- Multilingual UI Components  
- Responsive Design Framework  

### Backend
- Node.js with Express and TypeScript  
- MongoDB Database  
- Translation API Integration  
- Authentication System  

### Additional Services
- Google Translate API (for multilingual support)  
- Helmet.js (Security)  
- Winston (Logging)  

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)  
- MongoDB Atlas account or local MongoDB instance  
- Google Cloud API key (for translation services)  

### Installation
1. Clone the repository  
   ```bash
   git clone https://github.com/SAGE-OF-SIX-PATHS/Truth-Check-Sytem.git
   ```

2. Install dependencies  
   ```bash
   cd Truth-Check-System
   npm install
   cd frontend
   npm install
   ```

3. Set up environment variables  
   ```bash
   .env
   ```

4. Start development servers  
   ```bash
   # Backend
   npm run dev
   
   # Frontend (in another terminal)
   cd frontend
   npm start
   ```

## 📂 Project Structure
```
Truth-Check-System/
├── backend/            # TS-Node Express server
│   ├── src/
│   │   ├── config/     # Database and service configs
│   │   ├── controllers # Route controllers
│   │   ├── models/     # MongoDB schemas
│   │   ├── routes/     # API endpoints
│   │   └── utils/      # Helper functions
├── frontend/           # React application
│   ├── public/
│   └── src/
│       ├── components/ # Reusable UI components
│       ├── pages/      # Application screens
│       ├── providers/  # Context providers
│       └── utils/      # Frontend utilities
```

## 🤝 Contributing
We welcome contributions from developers passionate about combating misinformation. Please read our [Contribution Guidelines](CONTRIBUTING.md) before submitting pull requests.
These are the Active Contributors to the Web2 version of the Project:
Web2 team
FRONTEND DEVS
1.Chioma ugbam
2.Nnayamah joseph

BACKEND DEVS
1.Akpamgbo Nzubechukwu Philip
2.Ozioma Egole
3.Chibuikem Jonnwakalo


PRODUCT DESIGNERS
1.Chineye onwuzulike
2.chinyere okeke
3.ekeoma madu
4.odudu ukpanah

DATA ANALYSIS
1.Valerie Matta

QUALITY ASSURANCE 
Peace chinecherem

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments
- Nigerian fact-checking organizations  
- Google Translate API team  
- Open-source community contributors
```
