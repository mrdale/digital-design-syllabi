# Digital Design Syllabi

This website houses course syllabi, accurate MCOs and program/course change forms for the Digital Design Program. It has the following Goals:
* Allow instructors to collaborate on updates to courses used in Digital Design
* Allow instructors to map and standardize topics to credit increments in order to ease transitions for students moving between facilities and continuing education at other institutions
* Act as an up to date repository for Course MCOs
* Allow instructors easily generate Course syllabi for

### Requirements & Installation
1. Node.js & Node Package Manager (npm) must be present on the target computer. Download the installer from  the node website [here »](https://node.com) and install it on your machine

1. Verify that node and npm are installed type `node -v && npm -v` + return in a terminal
1. **First Time Only** From a terminal in this directory issue this command `npm install` to download and install all the node modules
1. Launch the website using the command `npm run dev`
1. Visit the syllabi website at [http://localhost:4321](http://localhost:4321)

### Editing Site Content
All classes are located in the `src/pages` directory and are in markdown format (file.md).

```
---
frontmatter stuff
---
```
The code between the `---` dividers is called frontmatter which has very specific uses and formatting in the generated pages. You can edit this area if needed, but don't unless you have a specific purpose in mind and know what you're doing.

Beyond the frontmatter fences is pure markdown (which is an abbreviated form of HTML).

Feel free to contribute your edits to this area as needed.
### Editing Program/Course Change Forms
All classes have corresponding change forms (required by curriculum council) for upcoming course updates (to restore variable credit and update MCOs)

These Word documents are located in the following directories
* `src/files/course-change-forms`
* `src/files/program-change-forms`

Any official adjustments to a course requires completing one of these documents and submitting it to the Curriculum Council prior to February 28 in order for that update to be available the following Fall.

### To Do
This site is a work in progress.
* Add your ideas here gentlemen!
* Style still needs to be finalized it's still pretty rough around the edges and there's too much yellow.
* Print specific style needs to be added so that we can easily generate good looking PDFs
* Generate PDFs automatically to a cached directory. Maybe we can add a mechanism via an existing node module to accomplish the automatic output of PDFs
