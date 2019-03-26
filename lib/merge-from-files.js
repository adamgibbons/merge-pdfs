// Merge multiple, local PDFs from local into one PDF

const hummus = require('hummus')

const basePath = `${process.cwd()}/assets/`
const pdfWriter = hummus.createWriter(
  process.cwd() + '/output/merged-document.pdf',
  { version: hummus.ePDFVersion14 }
)

const pdfList = [
  'sq1',
  'sq2',
  'sq3'
]

pdfList.map((bol) => {
  return pdfWriter.appendPDFPagesFromPDF(`${basePath}${bol}.pdf`)
})

pdfWriter.end()
