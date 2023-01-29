import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

export default (columns, data) => {
  const doc = new jsPDF()
  console.log(data)

  autoTable(doc, {
    head: [columns.map(col => col.label)],
    body: [data.map(col => [col.title, col.price, col.city, col.district])],
  })
  
  doc.save('casasExport.pdf')
  }
  