# Documentation
Hi Megha, this set of pages is your instruction manual.

Each page on the website is created using 3 parts -
1. The data files in `static/data/` which store the content of a page
2. The `.html` files which control how a page looks
3. The JavaScript files in `static/js/` which take the content you write and put them in the HTML files

Each page has its own data file, HTML file, and JavaScript file. They come together to create the page. Usually I will be editing the HTML and JavaScript files, and you will be editing the data files and adding/removing stuff from the `static/media/` folder. To make sure you are working with the latest version of all the files, **always remember to pull _before_ starting your work.** If you forget to pull, you won't be able to push your changes. If you pull _after_ you make your changes, there is a very small chance that you could get a merge conflict. In that case let me know.

## General Data File Format
All the data files follow a structured format with key-value pairs. Each key represents some property about an "object", and its corresponding value is written in front of it. 

For example, while describing a certification you have completed, the object is the certification itself. In this case, a key may be `"name"`, and its value may be `"Global Youth Climate Training"`. This is written in your data file as -

```yaml
- name: Global Youth Climate Training
```

A collection of these key-value pairs is used to describe an _object_. An object can be anything - from data about a certification to data about an op-ed, or publication, etc. For example, if you want to describe your degree at ILS as an object, you would write it as -

```yaml
- university: ILS Law College, Pune, India
- logo: static/media/Certification/ils.png
- degree: B.A, L.L.B
- date: May 2019 - May 2024
- modules: Environmental Law, International Economic Law, Economics (Macroeconomics and Microeconomics)
```

As you can see, this "object" contains all the data the JavaScript and HTML files need to create your Academics page. 

You can't put arbitrary keys in the object. Only the keys that the JavaScript code for that page supports will be used to create the page, and the other keys will be ignored. If you want to add new keys to an object let me know. 

For e.g, if you add a `"description"` key to this object, it will be ignored and your description will not be shown on the page, because the JavaScript for the academics page does not support the description key.

Between two objects in the same file, remember to add a `"--"`, surrounded by blank lines. For e.g,

```yaml
- name: Global Youth Climate Training
- awarded-by: University of Oxford
- link:
- logo: static/media/Certification/Oxford.png

--

- name: Constitution of India and Environmental Governance (All India Rank 1)
- awarded-by: Government of India, IISc (Indian Institute of Science)
- link:
- logo: static/media/Certification/IISc.jpeg
```

This helps the JavaScript identify where one object ends and another begins.

If the value of some key is large and has multiple lines, you can start the value on a new line instead of continuing it on the same line. For example, in the data file for the projects page, `projects.txt`, the `"description"` key is supported, which contains the description for a project. Since this description can have multiple lines, you can start it on a new line -

```yaml
- heading: Waterholes in Nagzira 
- photo: static/media/project-1-photo.jpg
- description:
Sentence 1.

Sentence 2.

Sentence 3.
```

This way, the description will also be shown on multiple lines on the page instead of in a single paragraph.

The next section lists the expected data format for each page, as well as the keys supported by each page.

## Pages
### Homepage
The homepage has two data files - `homepage-bio.txt` and `homepage-panels.txt`. 

The `homepage-bio.txt` file just has normal text that is shown on the front page. It does not need key value pairs, the text in that file is shown on the front page as it is.

The `homepage-panels.txt` file contains data for the `Featured` section of your homepage. You can add any number of objects in that file, and they will show up as a thumbnail on your homepage.

It supports the following keys -

1. `- image: ` - The image shown on the thumbnail. 
2. `- link: ` - The link to open when the user clicks on this thumbnail. The value for this key is optional. You can leave it blank if you don't have a link.
3. `- title: ` - The text to display under the image.

Example - 
```yaml
- image: static/media/toi.jpeg
- link: https://epaper.timesgroup.com/article-share?article=05_06_2023_004_010_toipuc_TOI
- title: Harnessing Youth Potential to Steer Conversations on Climate Crisis
```

### About Page
The about page has two data files - `about-bio.txt` and `favorites.txt`. Both of them are simple text files and require no special format like the other data files. The text in both files will be shown on the page as it is, with the only exception being that the first line of `about-bio.txt` will be shown in a large font.

To change the photo shown on the about page, replace the `static/media/about.jpg` file with your new photo.

### Publications Page
The publications page has one data file - `publications.txt`.

It supports the following keys -
1. `- heading: ` - The publication heading. This is shown in a large font
2. `- category: ` - The category of the publication. For e.g, Policy Paper, Research Article, or Blog
3. `- link: ` - The link to the publication
4. `- description: ` - A description of the publication. If the description is longer than 200 characters, it will be cropped automatically

The `link` and `description` keys are not strictly required, but highly recommended.

Example -
```yaml
- heading: Redesigning Urban Local Bodies For Climate Action
- category: Policy Paper
- link: https://puneinternationalcentre.org/publications/45-redesigning-urban-local-bodies-for-climate-action/
- description: This Policy paper puts forward the critical role of India’s Urban local bodies in tackling Climate change. The paper analyses the rising quantum of emissions that cities as hubs of economic activity contribute to and how ULBs can be empowered to mitigate them.
```
### Projects Page
The projects page has one data file - `projects.txt`.

It supports the following keys -
1. `- heading: ` - A short heading for the project
2. `- photo: ` - The thumbnail photo
3. `- description: ` - A long description of the project

Example -
```yaml
- heading: Waterholes in Nagzira
- photo: static/media/project-1-photo.jpg
- description:
Sentence 1.

Sentence 2.

Sentence 3.
```

### Op-Eds Page
The Op-Eds page has one data file - `op-eds.txt`.

It supports the following keys -
1. `- heading: ` - A short heading for the op-ed
2. `- link: ` - The link to the op-ed
3. `- photo: ` - The thumbnail photo

Example -
```yaml
- heading: Harnessing Youth potential to steer Conversations on Climate Crisis
- link: https://epaper.timesgroup.com/article-share?article=05_06_2023_004_010_toipuc_TOI
- photo: static/media/toi.jpeg
```
### Professional Experience Page
The professional experience page has one data file - `professional-experience.txt`.

It supports the following keys - 
1. `- position: ` - Your position in the company/org
2. `- company: ` - The name of the company/org
3. `- domains: ` - The domains associated with this experience, as a comma-separated list
4. `- logo: ` - The logo of the company/org
5. `- description: ` - A long description of your experience (can be multiple lines)

Example -
```yaml
- position: Climate Risk and Advisory Intern
- company: Clifford Chance
- domains: Climate Policy, Corporate Drafting
- logo: static/media/Certification/clifford chance.png
- description:
- Review and comment on Heads of Terms for an Emission Reductions purchase Agreement
- Management induction on climate-related disclosure duties
- Client counseling on pending Carbon-taxation US legislation
```

### Awards & Honors Page
The awards and honors page has one data file - `awards-honours.txt`.

It supports the following keys -
1. `- award: ` - The name of the award
2. `- awarded-by: ` - The organization giving the award
3. `- logo: ` - The logo of the organization/award
4. `- date: ` - Date awarded
5. `- description: ` - A long description for the award (can be multiple lines)

Example - 
```yaml
- award: DST Inspire Internship camp
- awarded-by: Government of India
- logo: static/media/gov.jpeg
- date: 2019
- description: Awarded to the students with top 1 percentile scores, by the Government of India.
```

### Certifications Page
The certifications page has one data file - `certifications.txt`.

It supports the following keys -
1. `- name: ` - The name of the certification
2. `- awarded-by: ` - The organization awarding the certification
3. `- link: ` - A link to the certificate (remember to add this link otherwise the certification will have a broken link)
4. `- logo: ` - The logo for the organization/certification

Example -
```yaml
- name: Global Youth Climate Training
- awarded-by: University of Oxford
- link:
- logo: static/media/Certification/Oxford.png
```

### Academics Page
The academics page has one data file - `academics.txt`.

It supports the following keys -
1. `- university: ` - The name of the university
2. `- logo: ` - The logo of the university
3. `- degree: ` - The name of the degree
4. `- date: ` - The dates you attended the program
5. `- modules: ` - The modules you want to highlight

Example - 
```yaml
- university: ILS Law College, Pune, India
- logo: static/media/Certification/ils.png
- degree: B.A, L.L.B
- date: May 2019 - May 2024
- modules: Environmental Law, International Economic Law, Economics (Macroeconomics and Microeconomics)
```

### Sketches Page
The sketches page has one data file - `sketches.txt`.

It supports the following keys -
1. `- photo: ` - The sketch photo

You can optionally also include a one line description just below the `photo` key.

Example -
```yaml
- photo: static/media/sketches/snake.jpg
Boiga sp. (Cat snake)
```