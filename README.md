# Project Canary

Project Canary is a virus scanning website for links.

* Currently there is a CORS error which doesn't allow normal functionality.
* Reports back to you if a link is malicious
* Actively maintained by developers
* Feel free to make pull requests or Issues
* Uses Cypress as a testing tool.
* The project uses
  the [VirusTotal API](https://developers.virustotal.com/reference/overview) for
  analysis
* This project is initialised
  with [create-react-app](https://github.com/facebook/create-react-app) with
  typescript

## Preview

<img width="1440" alt="Screenshot 2022-04-07 at 10 30 11" src="https://user-images.githubusercontent.com/43650393/162156550-7990e017-a378-4339-bead-124c57adefff.png">
<img width="1440" alt="Screenshot 2022-04-07 at 10 30 42" src="https://user-images.githubusercontent.com/43650393/162156584-6cc47637-2c63-4324-94e5-765b9857629e.png">



## Installation

The steps below will allow you to run this website locally

1. Clone the repo
    1. `git clone https://github.com/GabrielMarisescu/Project-Canary`
    2. `cd Project-Canary`
2. Get your own VirusTotal API key
    1. Go to the Virus total [website](https://www.virustotal.com/)
    2. Sign up / Sign in with your account
    3. On home page, click your user avatar and select "API key"
    4. Copy the API Key
3. Add the API Key to your local environmental variable
    1. Create a file called .env in `Project-Canary` directory
    2. Add this line and replace xxx with your API key `REACT_APP_API_KEY=xxx` (
       no quotations marks are needed)
4. Install dependencies and run the website locally!
    1. `npm install`
    2. `npm start`
5. Enjoy and feel free to report
   any [bugs](https://github.com/GabrielMarisescu/Project-Canary)

## Contributing

Everyone is welcomed to contribute to our existing code base via pull requests,
find an existing issue and help us fix it.

If you wish to work on additional features, we would strongly recommend you to
create an issue with the appropriate tags and assign yourself to the issue or
comment appropriately on the issue that you are working on it.

1. Fork the repo
2. Follow steps on [Installation](#installation) from step 2

### File structure:

* **src/components**, Reusable components
* **src/assets**, Resources such as images
* **src/interfaces**, Typescript Interfaces
* **src/utils**, Utility functions
* **src/pages**, Pages (routes)
