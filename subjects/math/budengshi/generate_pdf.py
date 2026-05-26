from weasyprint import HTML
import os

# 读取HTML文件
html_path = 'index.html'
pdf_path = 'budengshi_exercise.pdf'

if os.path.exists(html_path):
    with open(html_path, 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    # 生成PDF
    HTML(string=html_content).write_pdf(pdf_path)
    print(f"PDF已成功生成：{pdf_path}")
else:
    print(f"错误：未找到文件 {html_path}")
