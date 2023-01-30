import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

export default (columns, data) => {
  // eslint-disable-next-line new-cap
  const doc = new jsPDF()

  autoTable(doc, {
    head: [columns.map((col) => col.label)],
    body: [
      ...Object.values(data).map((col) => [
        col.title,
        col.price,
        col.type,
        col.city,
        col.district,
      ]),
    ],
  })

  doc.save('casasExport.pdf')
}
