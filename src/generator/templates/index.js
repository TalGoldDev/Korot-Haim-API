import template1 from "./template1";

/**
 * Generates the LaTeX document based on the selected template
 * as well as the necessary options needed for it to create a
 * pdf via node-latex.
 *
 * @param data - The sanitized form data from the request body.
 *
 * @return The generated LaTeX document as well as its additional opts.
 */

function getTemplateData(data) {
  switch (data.selectedTemplate) {
    case 1:
      return {
        texDoc: template1(data),
        opts: {
          cmd: "xelatex",
        },
      };

    default:
      return {
        texDoc: template1(data),
        opts: {
          cmd: "xelatex",
        },
      };
  }
}

export default getTemplateData;
