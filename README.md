<div align=center>
  <img src="https://github.com/bitspaceorg/.github/assets/119417646/577c8581-499e-4cbb-a2f8-e78c643204bc" width="150" alt="Logo"/>
   <h1> VASHISHT-HACKATHON</h1>
  <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white">
<img src="https://img.shields.io/badge/:bitspace-%23121011?style=for-the-badge&logoColor=%23ffffff&color=%23000000">
<img src="https://img.shields.io/badge/vashisht-%23121011?style=for-the-badge&color=black">
<img src="https://img.shields.io/badge/iiitdm-%23121011?style=for-the-badge&logoColor=%23ffffff&color=%23000000">
<img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&color=black">
</div>

# Electronic Health Record (EHR) Frontend

## Introduction
Welcome to the frontend repository of our [Electronic Health Record (EHR)](https://iiitdm-vashisht.vercel.app/login) application. This frontend component is built using Next.js and is hosted on Vercel. It is a fully responsive and user-friendly application designed to provide a comprehensive healthcare management solution.

## To Use

Visit [https://iiitdm-vashisht.vercel.app/login](https://iiitdm-vashisht.vercel.app/login) to access the Electronic Health Record (EHR) application. You can `sign up` as a patient using your own credentials, or alternatively, you can use the provided doctor and hospital credentials for testing purposes.

### Doctor Credentials:
- **Username (UID):** d
- **Password:** d

### Hospital Credentials:
- **Username (UID):** h
- **Password:** h

If you sign up as a patient with a new account, there will be no existing records. However, you can `use the doctor and hospital credentials` to `add records to your account` for testing purposes.

Feel free to explore the application and its features using the provided credentials. If you encounter any issues or have any feedback, please don't hesitate to reach out to us.

## Features
- **User Authentication**: Secure login and registration system using Google OAuth for hospital, patient, and doctor roles. OTP verification is implemented using Amazon SES.
- **Role-based Access Control**: Different access levels for hospitals, patients, and doctors.
- **Hospital Interface**:
  - Admin can add, edit, and delete patient records and doctor records.
  - Detailed patient history and treatment details are accessible.
  - Centralized storage of patient records and medical history.
    ![hos](https://cdn.discordapp.com/attachments/1217865124820287508/1218824794661720125/image.png?ex=6609120b&is=65f69d0b&hm=f556d128da0375842cbf4634635b85b1c119b24ca0de83e6d7843519903050b6&)
- **Patient Interface**:
  - Access to full medical history, including treatment details, medications, and scans.
  - Graphical representation of disease forecast using D3 framework.
  - Capability to edit profile and grant access to hospitals and family members.
    ![pa](https://cdn.discordapp.com/attachments/1217865124820287508/1218823950730133504/image.png?ex=66091142&is=65f69c42&hm=1ee9cb6eb924084a256525ec464daa23f6805603a6721d62a4b6fba718fb80d6&)
    ![pa2](https://cdn.discordapp.com/attachments/1217865124820287508/1218824011954524251/image.png?ex=66091151&is=65f69c51&hm=bb3932ef2e640e26f15f656943b42911f33d930cf033a45912ba002600cbe6d0&)
- **Doctor Interface**:
  - Ability to maintain patient records, including treatment details and scans.
  - Option to edit profile and manage patient records.
    ![doc](https://cdn.discordapp.com/attachments/1217865124820287508/1218824708246605915/image.png?ex=660911f7&is=65f69cf7&hm=c81e0a63a2dfc269a0ec6505b72f499141ad45e722500de98c1d2c138d365ecc&)

## Tech Stack
- **Next.js**: React framework for building server-side rendered web applications.
- **TypeScript**: Typed superset of JavaScript for enhanced developer experience and code quality.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for building custom designs.
- **D3.js**: JavaScript library for data visualization, used for showing graphical forecasts.
- **Google OAuth**: Authentication mechanism for user login using Google accounts.
- **Amazon SES**: Service for sending OTP verification emails.
- **Vercel**: Hosting platform for deploying Next.js applications.

## Setup Instructions
To run the application locally, follow these steps:
1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Set up environment variables for API endpoints, authentication keys, and AWS credentials.
4. Run the development server using `npm run dev`.
5. Access the application in your browser at `http://localhost:3000`.

## Contributing
Contributions to the development and enhancement of this application are welcome! To contribute, please fork the repository, make your changes, and submit a pull request with descriptive comments.
