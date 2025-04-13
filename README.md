Here’s the updated README with a note specifying that the truth checker currently works only in the user dashboard, and the landing page support will be added in future improvements:

```markdown
<h1 align="center">A Quick Check System That Validates Claims</h1>

<p align="center">
  <strong>OdinsEye - Nigerian Information Verification Platform</strong>
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
   git clone https://github.com/your-repo/odinseye.git
   ```

2. Install dependencies  
   ```bash
   cd odinseye
   npm install
   cd frontend
   npm install
   ```

3. Set up environment variables  
   ```bash
   cp .env.example .env
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
odinseye/
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

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments
- Nigerian fact-checking organizations  
- Google Translate API team  
- Open-source community contributors
```