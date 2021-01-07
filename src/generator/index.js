import latex from "node-latex";
import getTemplateData from "./templates";

/**
 * Generates a LaTeX document from the request body,
 * and then generates a PDF from that document.
 *
 * @param formData The request body received from the client.
 *
 * @return The generated PDF.
 */

function generatePDFFromData(formData) {
  const { texDoc, opts } = getTemplateData(formData);
  const pdf = latex(texDoc, opts);

  return pdf;
}

export { generatePDFFromData };
