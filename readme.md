# Challenge 2 - Slicing Figma design into code with Tailwindcss

# Description

In this assignment, you'll translate a provided Figma design into a functional webpage using Tailwind CSS. Tailwind CSS is a utility-first CSS framework that will allow you to rapidly style your HTML.

You'll be provided with a basic project setup, and your task will be to implement the design by writing HTML and utilizing Tailwind's classes.

The design for this assignment is located at the following Figma link:

[Figma Design Link](https://www.figma.com/design/SiIl1A1UdSOVLKrtMjgHD2/Company-Profile---Batch-4?node-id=8411-143671&t=wyqKMkBKZYGo958y-1)

The goal is to assess your ability to:

- Interpret a design from Figma.
- Structure a webpage with HTML.
- Apply styles using Tailwind CSS.
- Create a responsive layout.

# Folder Structure

You are provided with the following folder structure:

```
root/
  ├── node_modules/
  ├── src/
  │ ├── css/
  │ │ ├── input.css
  │ │ └── output.css
  │ └── index.html
  ├── .gitignore
  ├── package-lock.json
  ├── package.json
  └── readme.md
```

You will only need to modify the public/index.html file for this assignment. All necessary configurations for Tailwind CSS are already set up.

# Assignment Objectives

- Figma to HTML: Accurately translate the Figma design into HTML. Create the necessary HTML elements to structure the page (divs, sections, headers, etc.).
- Tailwind CSS Styling: Use Tailwind CSS classes to style the HTML elements. Pay close attention to:
- Layout (Flexbox, Grid).
- Spacing (padding, margin).
- Typography (font sizes, weights, colors).
- Colors and Backgrounds.
- esponsive design (using Tailwind's responsive prefixes, e.g., md:, lg:).
- Responsive Design: Ensure your implementation is responsive across different screen sizes, as defined in the Figma design. Use Tailwind's responsive modifiers.
- Adherence to Design: Your final webpage should closely match the visual design provided in the Figma file.

# Getting Started

Don't forget to run

```
npm install
```

for this project first, then to run the app, run

```
npm run dev
```

on terminal

Study the Figma Design: Open the Figma link and thoroughly examine the design. Understand the layout, spacing, colors, typography, and responsive behavior.

HTML Structure: Open the public/index.html file. Begin by structuring the page with HTML elements that mirror the design.

Tailwind CSS: Use Tailwind CSS classes directly within your HTML elements to apply styles. For example:

<div class="flex justify-center items-center">...</div>

<h1 class="text-3xl font-bold text-blue-600">...</h1>

Test in the Browser: Run npm run dev to see it on your browsert

Iterate: Continue to refine your HTML and Tailwind CSS until your webpage accurately matches the Figma design.

# Important Notes

Only Modify index.html: Do not modify any other files in the project. All required Tailwind CSS configurations are already in place.

Tailwind CSS Documentation: Refer to the official Tailwind CSS documentation (https://tailwindcss.com/docs) for information on available classes and how to use them.

Figma Inspection: Use the "Inspect" feature in Figma to get precise measurements, colors, and font styles from the design.

# Evaluation System

The evaluation for this assignment will be based on the following criteria:

1.  **Design Accuracy:** How accurately your implementation matches the design provided in Figma across different screen sizes.
2.  **Semantic HTML Usage:** The correct and appropriate use of HTML tags according to the content structure.
3.  **Effective CSS Usage:** The correct and efficient use of CSS selectors, as well as understanding of basic CSS properties and _media queries_ (if responsiveness is implemented).
4.  **Code Readability and Organization:** HTML and CSS code that is well-structured, easy to read, and commented where necessary.

---

# How to Upload your Challenge

Check this module: [click this](https://orchid-clematis-3e4.notion.site/Panduan-Penggunaan-Git-Untuk-Upload-Assignment-e2d80a19b3684f5d8f1a4209dcf85445?pvs=73)

---

🎉 Congratulations on working on this assignment! Utilize the _playground_ feature in Figma to help you understand how the design should look on various devices. Keep experimenting and don't hesitate to look for references if you encounter difficulties. You can definitely produce great work! 🚀 Keep up the spirit, cheers! 🎈
