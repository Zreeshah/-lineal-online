from pathlib import Path

from reportlab.lib.pagesizes import A4, LETTER, landscape
from reportlab.lib.units import inch, mm
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "public" / "downloads"


def draw_metric_ruler(pdf, start_x, baseline_y, length_mm):
    pdf.setStrokeColorRGB(0.08, 0.08, 0.1)
    pdf.setFillColorRGB(0.08, 0.08, 0.1)
    pdf.setLineWidth(0.6)
    pdf.line(start_x, baseline_y, start_x + length_mm * mm, baseline_y)

    for value in range(length_mm + 1):
        x = start_x + value * mm
        if value % 10 == 0:
            tick_height = 11 * mm
            pdf.setLineWidth(0.9)
        elif value % 5 == 0:
            tick_height = 7 * mm
            pdf.setLineWidth(0.65)
        else:
            tick_height = 4 * mm
            pdf.setLineWidth(0.35)
        pdf.line(x, baseline_y, x, baseline_y + tick_height)
        if value % 10 == 0:
            pdf.setFont("Helvetica", 8)
            pdf.drawCentredString(x, baseline_y + 13 * mm, str(value // 10))

    pdf.setFont("Helvetica-Bold", 10)
    pdf.drawString(start_x, baseline_y - 6 * mm, f"Metrische Skala: 0-{length_mm // 10} cm mit Millimeterteilung")


def draw_inch_ruler(pdf, start_x, baseline_y, length_inches):
    pdf.setStrokeColorRGB(0.23, 0.1, 0.45)
    pdf.setFillColorRGB(0.23, 0.1, 0.45)
    pdf.setLineWidth(0.7)
    pdf.line(start_x, baseline_y, start_x + length_inches * inch, baseline_y)

    subdivisions = length_inches * 16
    for value in range(subdivisions + 1):
        x = start_x + (value / 16) * inch
        if value % 16 == 0:
            tick_height = 11 * mm
            pdf.setLineWidth(0.9)
        elif value % 8 == 0:
            tick_height = 8 * mm
            pdf.setLineWidth(0.65)
        elif value % 4 == 0:
            tick_height = 6 * mm
            pdf.setLineWidth(0.5)
        elif value % 2 == 0:
            tick_height = 4.5 * mm
            pdf.setLineWidth(0.4)
        else:
            tick_height = 3 * mm
            pdf.setLineWidth(0.3)
        pdf.line(x, baseline_y, x, baseline_y + tick_height)
        if value % 16 == 0:
            pdf.setFont("Helvetica", 8)
            pdf.drawCentredString(x, baseline_y + 13 * mm, str(value // 16))

    pdf.setFont("Helvetica-Bold", 10)
    pdf.drawString(start_x, baseline_y - 6 * mm, f"Zollskala: 0-{length_inches} Zoll mit 1/16-Zoll-Teilung")


def draw_card_check(pdf, x, y):
    card_width = 85.60 * mm
    card_height = 53.98 * mm
    pdf.setStrokeColorRGB(0.1, 0.42, 0.32)
    pdf.setFillColorRGB(0.1, 0.42, 0.32)
    pdf.setLineWidth(0.8)
    pdf.rect(x, y, card_width, card_height, stroke=1, fill=0)
    pdf.setFont("Helvetica-Bold", 9)
    pdf.drawString(x, y + card_height + 4 * mm, "Kontrollfeld Bankkarte")
    pdf.setFont("Helvetica", 8)
    pdf.drawString(x + 4 * mm, y + card_height / 2, "85,60 x 53,98 mm")


def create_ruler_pdf(filename, page_size, paper_label, metric_length_mm, inch_length):
    width, height = landscape(page_size)
    output_path = OUTPUT_DIR / filename
    pdf = canvas.Canvas(str(output_path), pagesize=(width, height), pageCompression=1)
    pdf.setTitle(f"Lineal {paper_label} - cm, mm und Zoll")
    pdf.setAuthor("Lineal.online")
    pdf.setSubject("Druckbares Lineal in Originalgroesse")

    pdf.setFillColorRGB(0.11, 0.09, 0.16)
    pdf.setFont("Helvetica-Bold", 18)
    pdf.drawString(10 * mm, height - 15 * mm, f"Lineal zum Ausdrucken - {paper_label}")
    pdf.setFont("Helvetica", 9)
    pdf.drawString(10 * mm, height - 23 * mm, "Wichtig: Mit 100 % oder 'Tatsaechliche Groesse' drucken. 'An Seite anpassen' deaktivieren.")

    start_x = 8 * mm
    draw_metric_ruler(pdf, start_x, height - 58 * mm, metric_length_mm)
    draw_inch_ruler(pdf, start_x, height - 103 * mm, inch_length)
    draw_card_check(pdf, 15 * mm, 17 * mm)

    pdf.setFillColorRGB(0.2, 0.2, 0.24)
    pdf.setFont("Helvetica", 8)
    pdf.drawString(110 * mm, 61 * mm, "Kontrolle nach dem Druck:")
    pdf.drawString(110 * mm, 55 * mm, "1. Bankkarte in den Rahmen legen.")
    pdf.drawString(110 * mm, 49 * mm, "2. Eine 10-cm-Strecke nachmessen.")
    pdf.drawString(110 * mm, 43 * mm, "3. Bei Abweichung Papierformat und Skalierung pruefen.")
    pdf.drawRightString(width - 10 * mm, 8 * mm, "lineal.onl")

    pdf.showPage()
    pdf.save()
    return output_path


def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    create_ruler_pdf("lineal-a4-cm-mm-zoll.pdf", A4, "A4", 280, 11)
    create_ruler_pdf("lineal-us-letter-cm-mm-zoll.pdf", LETTER, "US Letter", 260, 10)


if __name__ == "__main__":
    main()
