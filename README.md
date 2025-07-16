<a id="readme-top"></a>
<img width="1500" height="700" alt="CulinAIze-1" src="https://github.com/user-attachments/assets/c31d0ba7-c5a2-4a43-9b39-98cb18f67e4f" />

<div align="center">

  <h1 align="center">🍳  CulinAIze  🧠</h1>

  <p align="center">
    Your everyday cooking assistant, ready to give you recipes to cook based on your needs.
    <br />
    <a href="https://culinaize.vercel.app">View Demo</a>
    &middot;
    <a href="https://github.com/bryanherdianto/culinaize/issues/newlabels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/bryanherdianto/culinaize/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#running-with-docker-local">Running with Docker (local)</a></li>
        <li><a href="#running-with-vercel-deployed">Running with Vercel (deployed)</a></li>
        <li><a href="#additional-notes">Additional Notes</a></li>
      </ul>
    </li>
    <li><a href="#documentation">Documentation</a></li>
    <li><a href="#future-features">Future Features</a></li>
    <li>
      <a href="#closing-notes">Closing Notes</a>
      <ul>
        <li><a href="#top-contributors">Top Contributors</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

CulinAIze is a cooking assistant that helps you find recipes based on your dietary preferences, available ingredients, and cooking time. It uses AI to suggest recipes based on your needs, like ingredients you have, dietary restrictions, intolerances, nutritional values, and so much more.

CulinAIze uses RAG (Retrieval-Augmented Generation) to provide you with the best recipes based on your needs, show the cooking steps, and provide cooking tips if needed. It uses a combination of tools to generate recipes, including Gemini model, Spoonacular API, n8n, and more below.

### Built With

CulinAIze is built with a combination of technologies to provide a seamless experience. Here are some of the key technologies used:

[![Next][Next.js]][Next.js-url]
[![Supabase][Supabase]][Supabase-url]
[![n8n][n8n]][n8n-url]
[![Spoonacular][Spoonacular]][Spoonacular-url]
[![GeminiAI][GeminiAI]][GeminiAI-url]
[![React.js][React.js]][React-url]
[![TypeScript][TypeScript]][TypeScript-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

<h3> How to use CulinAIze</h3>

To run locally, you can use Docker or run the deployed version with vercel. Below are the instructions for both methods.

### Running with Docker (local)
1. Clone the repo
   ```sh
   git clone https://github.com/bryanherdianto/culinaize.git
   ```

2. Navigate to the project directory
   ```sh
   cd culinaize
   ```

3. Build the Docker image
   ```sh
    docker build -t culinaize .
    ```

4. Run the Docker container
   ```sh
    docker run -p 3000:3000 culinaize
    ```

5. Open your browser and go to `http://localhost:3000`

### Running with Vercel (deployed)

1. Visit the deployed version at [https://culinaize.vercel.app](https://culinaize.vercel.app)

### Additional Notes

The backend is powered by n8n, which is a workflow automation tool that is hosted on cloud. The n8n instance is used to handle the communication between the frontend and the Spoonacular API, as well as the Gemini AI model. Therefore, the backend does not have to be run locally, as it is already hosted on the cloud.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Documentation

![picture 3](https://i.imgur.com/2NT1G1M.jpeg)  

![picture 0](https://i.imgur.com/Ohsq3pk.png)  

![picture 1](https://i.imgur.com/Tmfplgt.jpeg)  

![picture 2](https://i.imgur.com/6sZfvMK.jpeg)  


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Future Features

- Add more interactivity to the chat interface, such as more support for different file attachment types, a virtual "fridge" to store ingredients virtually.
- Add chat history to allow users to revisit past conversations.
- Implement a more advanced AI model for better recipe suggestions, and possibly to reduce wait time between queries.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Closing Notes

We sincerely hope you find CulinAIze useful in your cooking adventures! If you have any suggestions, improvements, or just want to share your experience, feel free to reach out the contributors of this project. Your feedback is invaluable to us!

### Top Contributors

<a href="https://github.com/bryanherdianto" target="_blank">
  <img src="https://avatars.githubusercontent.com/u/73747143?s=48&v=4" width="50" height="50" alt="Bryan Herdianto" style="border-radius: 50%;">
</a>
<a href="https://github.com/sleepingpolice-afk" target="_blank">
  <img src="https://avatars.githubusercontent.com/u/144752573?v=4" width="50" height="50" alt="Wesley Frederick Oh" style="border-radius: 50%;">
</a>

<!-- CONTACT -->
### Contact

Bryan Herdianto - [@bryan.herdianto17](https://www.instagram.com/bryan.herdianto17/) - bryan.herdianto17@gmail.com  
Wesley Frederick Oh - [@wesleyfo4004](https://instagram.com/wesleyfo4004) - pempekplg3@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Next.js]: https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next.js-url]: https://nextjs.org/

[Supabase]: https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white
[Supabase-url]: https://supabase.com/

[n8n]: https://img.shields.io/badge/n8n-FD723A?style=for-the-badge&logo=n8n&logoColor=white
[n8n-url]: https://n8n.io/

[React.js]: https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black
[React-url]: https://reactjs.org/

[Spoonacular]: https://img.shields.io/badge/Spoonacular-5A5E63?style=for-the-badge
[Spoonacular-url]: https://spoonacular.com/food-api

[GeminiAI]: https://img.shields.io/badge/Google%20Gemini-886FBF?style=for-the-badge&logo=googlegemini&logoColor=white
[GeminiAI-url]: https://gemini.google.com/

[TypeScript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
