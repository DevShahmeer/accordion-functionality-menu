# React Accordion Menu App

This is a simple React application that implements an Accordion menu functionality. The app allows you to create expandable sections with titles and descriptions, commonly used for FAQs or information display.
![Untitled design (5)](https://github.com/DevShahmeer/accordion-functionality-menu/assets/108333592/828c5238-a3f3-41e2-b974-a68f382057b1)


## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine:

   ```shell
   git clone https://DevShahmeer/accordion-functionality-menu.git
   ```

2. Navigate to the project directory:

   ```shell
   cd accordion-functionality-men
   ```

3. Install the required dependencies using Yarn:

   ```shell
   yarn install
   ```

4. Start the development server with Vite:

   ```shell
   yarn dev
   ```

5. Open your web browser and visit `http://localhost:5173` to see the app in action.

## Features

- Create expandable accordion sections with titles and descriptions.
- Toggle sections open and closed by clicking on the title.
- A clean and responsive user interface.

## Usage

In the `App.js` file, you can customize the accordion sections by adding or modifying the `<AccordionProps>` components. Each component represents a single accordion section and takes the following props:

- `title`: The title of the accordion section.
- `desc`: The description or content of the section.
- `active`: The currently active (open) section title.
- `setActive`: A function to set the active section.

```jsx
<AccordionProps 
  title='What crops are commonly grown in farming?' 
  desc='Corn, wheat, rice, and soybeans are some of the most common crops grown in farming. This varies with different locations and land.' 
  active={active} 
  setActive={setActive} 
/>
```

Feel free to add more sections or modify the existing ones according to your needs.

## Folder Structure

- `src/`: Contains the application source code.
  - `components/`: Contains React components, including the Accordion components.
    - `Accordion.jsx`: State management for active accordion item.
    - `AccordionPorps.jsx`: Accordion item with title, description, and toggle functionality
    - `Accordion.scss`: The content container accordion menu stylesheet for styling.
  - `App.js`: The main application component.
  - `App.scss`: The main stylesheet for styling the app.
- `public/`: Contains static assets such as the HTML template and images.

## Styling

The app uses CSS for styling. It includes a minimalistic and responsive design. You can customize the styles in the `App.scss` file to match your preferred look and feel.

## Contributing

Contributions to this project are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request. F
