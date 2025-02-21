document.querySelector('button').addEventListener('click', () => {
    //Getting the text from textarea
    const text = document.querySelector('textarea').value.trim();
    //Divide the text in paragraph...
    const paragraphs = text.split("\n");
    //Regular expression to extract the code, description and URL...
    const regrex = /([A-Z0-9-]+)\s+(.+)\s+(https?:\/\/[^\s]+)/;
    //Variable to store the result...
    let htmlResult = "";

    //Process each paragraph...
    paragraphs.forEach((paragraph, index) => {
        //Remove extra spaces at the beginning and end of the paragraph...
        paragraph = paragraph.trim();
        //Check if the paragraph is not empty...
        if (paragraph) {
            const match = paragraph.match(regrex);

            if (match) {
                const code = match[1].trim();
                //Delete multiple spaces...
                const description = match[2].trim().replace(/\s+/g, " "); 
                const url = match[3].trim();
                //Create the HTML code for this paragraph...
                htmlResult += `<li><a href="${url}"> ${code} - ${description}</a></li>\n\n`;
            
            } else {
                htmlResult += `<!-- Error in paragraph ${index + 1}: Incorrect format -->\n`; 
            }
        }
    });
    // Showing result...
    document.querySelector('pre').textContent = htmlResult;
});

// Copyright
const year = new Date().getFullYear();
document.querySelector('p').innerHTML = `© ${year} AA Innovation`;
