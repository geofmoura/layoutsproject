import { jsPDF } from "jspdf";

function generatePDF() {
    const doc = new jsPDF();
    const content = document.querySelector(".invoice");

    doc.text('Fatura', 10, 10);
    doc.text('Empresa XYZ', 10, 20);
    doc.text('Rua das Flores, 123', 10, 30);
    doc.text('Cidade, Estado, 12345-678', 10, 40);
    doc.text('CNPJ: 12.345.678/0001-90', 10, 50);
    doc.text('Informações do Cliente', 10, 60);
    doc.text('Nome do Cliente', 10, 70);
    doc.text('Rua do Cliente, 456', 10, 80);
    doc.text('Cidade, Estado, 87654-321', 10, 90);
    doc.text('CPF: 123.456.789-00', 10, 100);

    // Adicionar mais conteúdo conforme necessário

    doc.save('fatura.pdf');
}