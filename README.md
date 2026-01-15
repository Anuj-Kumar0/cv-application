CV Generator (React)

A dynamic CV / Resume Generator built using React + Vite, allowing users to enter their information section by section and instantly preview a professional resume layout. The project focuses on React fundamentals such as state management, controlled components, conditional rendering, and list handling.

Features:

1)Live CV preview while entering data
2)Section-based navigation
3)Add multiple entries for:
a)Education
b)Work Experience
c)Skills
d)Certifications
e)Technical Projects
f)Languages
g)Achievements & Awards

4)Modal-based form inputs for better UX
5)Print-ready resume using browser print
6)Data persists while switching sections

What I Learned:

This project helped me understand and apply:

1)React component structure
2)Lifting state up
3)Controlled inputs
4)Managing complex state using objects and arrays
5)Rendering dynamic lists
6)Conditional rendering
7)Component communication using props
8)Basic UI/UX structuring for real-world applications

Tech Stack:

1)React
2)Vite
3)JavaScript (ES6+)
4)CSS

Project Structure (High Level):

1)App.jsx
Handles global state and section navigation

2)components/

a)Personal
b)Education
c)Experience
d)Skills & Certifications
e)Projects
f)Achievements

3)styles/
Section-specific CSS files

Application Flow:

a)User navigates between CV sections using the sidebar
b)Each section contains a form for data input
c)Submitted data is stored in state
d)Preview section renders data instantly
e)Multiple entries are stored using arrays
f)Resume can be printed directly from the browser

Print Feature:

The resume is optimized for printing using window.print(), allowing users to generate a physical or PDF copy of their CV.

Future Improvements (can be done):

a)Better preview styling (resume-like layout)
b)Edit individual entries
c)Drag-and-drop section ordering
d)Mobile responsiveness
e)Form validation improvements.
