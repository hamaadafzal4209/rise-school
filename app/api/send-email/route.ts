import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const data: any = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    const attachments: any[] = [];
    let cnicFrontCid = "";
    let feeVoucherCid = "";

    const cnicFront = formData.get("cnicFront");
    if (cnicFront && typeof cnicFront !== "string") {
      cnicFrontCid = "cnic-front-image";
      attachments.push({
        filename: cnicFront.name,
        content: Buffer.from(await cnicFront.arrayBuffer()),
        cid: cnicFrontCid,
      });
    }

    const feeVoucher = formData.get("feeVoucher");
    if (feeVoucher && typeof feeVoucher !== "string") {
      feeVoucherCid = "fee-voucher-image";
      attachments.push({
        filename: feeVoucher.name,
        content: Buffer.from(await feeVoucher.arrayBuffer()),
        cid: feeVoucherCid,
      });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS,
      },
    });

    const messageHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f7fa;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 800px;
            margin: 30px auto;
            background: #ffffff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }
          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 600;
          }
          .header p {
            margin: 5px 0 0;
            font-size: 14px;
            opacity: 0.9;
          }
          .content {
            padding: 30px;
          }
          .section {
            margin-bottom: 30px;
          }
          .section-title {
            font-size: 20px;
            font-weight: 600;
            color: #333;
            border-bottom: 2px solid #667eea;
            padding-bottom: 8px;
            margin-bottom: 15px;
          }
          .field-row {
            display: flex;
            margin-bottom: 12px;
            padding: 10px;
            border-radius: 5px;
            background-color: #f9fafb;
          }
          .field-row:nth-child(even) {
            background-color: #f3f4f6;
          }
          .field-label {
            font-weight: 600;
            color: #555;
            min-width: 200px;
            flex-shrink: 0;
          }
          .field-value {
            color: #333;
            word-break: break-word;
          }
          .course-item {
            background-color: #e0e7ff;
            padding: 12px;
            margin: 8px 0;
            border-radius: 5px;
            border-left: 4px solid #667eea;
          }
          .total-fee {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            font-size: 24px;
            font-weight: 700;
            margin-top: 20px;
          }
          .footer {
            background-color: #f9fafb;
            padding: 20px;
            text-align: center;
            color: #666;
            font-size: 13px;
            border-top: 1px solid #e5e7eb;
          }
          .attachments {
            background-color: #fef3c7;
            padding: 15px;
            border-radius: 5px;
            border-left: 4px solid #f59e0b;
            margin-top: 15px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎓 New Student Registration</h1>
            <p>RISE Premier Virtual - Student Enrollment Form</p>
          </div>
          
          <div class="content">
            <!-- Student Personal Information -->
            <div class="section">
              <div class="section-title">📋 Student Personal Information</div>
              <div class="field-row">
                <div class="field-label">First Name:</div>
                <div class="field-value">${data.firstName || 'N/A'}</div>
              </div>
              <div class="field-row">
                <div class="field-label">Last Name:</div>
                <div class="field-value">${data.lastName || 'N/A'}</div>
              </div>
              <div class="field-row">
                <div class="field-label">CNIC Number:</div>
                <div class="field-value">${data.cnic || 'N/A'}</div>
              </div>
              <div class="field-row">
                <div class="field-label">Date of Birth:</div>
                <div class="field-value">${data.dob || 'N/A'}</div>
              </div>
              <div class="field-row">
                <div class="field-label">Blood Group:</div>
                <div class="field-value">${data.bloodGroup || 'N/A'}</div>
              </div>
              <div class="field-row">
                <div class="field-label">Gender:</div>
                <div class="field-value">${data.gender || 'N/A'}</div>
              </div>
              <div class="field-row">
                <div class="field-label">ICAP CRN#:</div>
                <div class="field-value">${data.crn || 'N/A'}</div>
              </div>
              <div class="field-row">
                <div class="field-label">RISE ID:</div>
                <div class="field-value">${data.riseId || 'N/A (Optional)'}</div>
              </div>
            </div>

            <!-- Contact Information -->
            <div class="section">
              <div class="section-title">📞 Contact Information</div>
              <div class="field-row">
                <div class="field-label">Email:</div>
                <div class="field-value">${data.email || 'N/A'}</div>
              </div>
              <div class="field-row">
                <div class="field-label">Mobile Number:</div>
                <div class="field-value">${data.mobile || 'N/A'}</div>
              </div>
              <div class="field-row">
                <div class="field-label">WhatsApp Number:</div>
                <div class="field-value">${data.whatsapp || 'N/A'}</div>
              </div>
            </div>

            <!-- Location Information -->
            <div class="section">
              <div class="section-title">📍 Location Information</div>
              <div class="field-row">
                <div class="field-label">City:</div>
                <div class="field-value">${data.city || 'N/A'}</div>
              </div>
              <div class="field-row">
                <div class="field-label">Province:</div>
                <div class="field-value">${data.province || 'N/A'}</div>
              </div>
              <div class="field-row">
                <div class="field-label">Complete Address:</div>
                <div class="field-value">${data.address || 'N/A'}</div>
              </div>
            </div>

            <!-- Guardian Information -->
            <div class="section">
              <div class="section-title">👨‍👦 Father/Guardian Information</div>
              <div class="field-row">
                <div class="field-label">Father's First Name:</div>
                <div class="field-value">${data.fatherFirstName || 'N/A'}</div>
              </div>
              <div class="field-row">
                <div class="field-label">Father's Last Name:</div>
                <div class="field-value">${data.fatherLastName || 'N/A'}</div>
              </div>
              <div class="field-row">
                <div class="field-label">Father's CNIC:</div>
                <div class="field-value">${data.fatherCnic || 'N/A'}</div>
              </div>
              <div class="field-row">
                <div class="field-label">Father's Mobile:</div>
                <div class="field-value">${data.fatherMobile || 'N/A'}</div>
              </div>
            </div>

            <!-- Emergency Contact -->
            <div class="section">
              <div class="section-title">🚨 Emergency Contact Information</div>
              <div class="field-row">
                <div class="field-label">Emergency Contact Person:</div>
                <div class="field-value">${data.emergencyName || 'N/A'}</div>
              </div>
              <div class="field-row">
                <div class="field-label">Emergency Contact Number:</div>
                <div class="field-value">${data.emergencyMobile || 'N/A'}</div>
              </div>
            </div>

            <!-- Course Selection -->
            <div class="section">
              <div class="section-title">📚 Course Selections</div>
              ${data.caf01Normal ? `<div class="course-item"><strong>CAF-01 (FAR) Normal Batch:</strong><br/>${data.caf01Normal}</div>` : ''}
              ${data.caf01Brisk ? `<div class="course-item"><strong>CAF-01 (FAR) Brisk Batch:</strong><br/>${data.caf01Brisk}</div>` : ''}
              ${data.caf01Long ? `<div class="course-item"><strong>CAF-01 (FAR) Long Batch:</strong><br/>${data.caf01Long}</div>` : ''}
              ${data.caf02Normal ? `<div class="course-item"><strong>CAF-02 (TAX) Normal Batch:</strong><br/>${data.caf02Normal}</div>` : ''}
              ${data.caf02Long ? `<div class="course-item"><strong>CAF-02 (TAX) Long Batch:</strong><br/>${data.caf02Long}</div>` : ''}
              ${data.caf03Normal ? `<div class="course-item"><strong>CAF-03 (DSR) Normal Batch:</strong><br/>${data.caf03Normal}</div>` : ''}
              ${data.caf03Long ? `<div class="course-item"><strong>CAF-03 (DSR) Long Batch:</strong><br/>${data.caf03Long}</div>` : ''}
              ${data.caf04Normal ? `<div class="course-item"><strong>CAF-04 (BLD) Normal Batch:</strong><br/>${data.caf04Normal}</div>` : ''}
              ${data.caf04Brisk ? `<div class="course-item"><strong>CAF-04 (BLD) Brisk Batch:</strong><br/>${data.caf04Brisk}</div>` : ''}
              ${data.caf04Long ? `<div class="course-item"><strong>CAF-04 (BLD) Long Batch:</strong><br/>${data.caf04Long}</div>` : ''}
              ${data.caf05Normal ? `<div class="course-item"><strong>CAF-05 (MA) Normal Batch:</strong><br/>${data.caf05Normal}</div>` : ''}
              ${data.caf06Normal ? `<div class="course-item"><strong>CAF-06 (CR) Normal Batch:</strong><br/>${data.caf06Normal}</div>` : ''}
              ${data.caf07Normal ? `<div class="course-item"><strong>CAF-07 (BIA) Normal Batch:</strong><br/>${data.caf07Normal}</div>` : ''}
              ${data.caf08Normal ? `<div class="course-item"><strong>CAF-08 (AUD) Normal Batch:</strong><br/>${data.caf08Normal}</div>` : ''}
              ${!data.caf01Normal && !data.caf01Brisk && !data.caf01Long && !data.caf02Normal && !data.caf02Long && !data.caf03Normal && !data.caf03Long && !data.caf04Normal && !data.caf04Brisk && !data.caf04Long && !data.caf05Normal && !data.caf06Normal && !data.caf07Normal && !data.caf08Normal ? '<p style="color: #999; font-style: italic;">No courses selected</p>' : ''}
            </div>

            <!-- Fee Information -->
            <div class="section">
              <div class="section-title">💰 Fee Information</div>
              <div class="total-fee">
                Total Amount: PKR ${data.totalFee || '0'}
              </div>
              ${attachments.some((a: any) => a.filename.includes('feeVoucher') || a.filename.includes('voucher')) ? `
                <div class="attachments">
                  <strong>📎 Fee Voucher Attached</strong><br/>
                  <small>Bank deposit slip has been uploaded</small>
                </div>
              ` : ''}
            </div>

            <!-- Attachments -->
            ${attachments.length > 0 ? `
            <div class="section">
              <div class="section-title">📎 Uploaded Documents</div>
              ${cnicFrontCid ? `
                <div style="margin-bottom: 20px;">
                  <h4 style="color: #667eea; margin-bottom: 10px;">CNIC/B.Form Front Side</h4>
                  <img src="cid:${cnicFrontCid}" alt="CNIC Front" style="max-width: 100%; height: auto; border: 2px solid #e5e7eb; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" />
                </div>
              ` : ''}
              ${feeVoucherCid ? `
                <div style="margin-bottom: 20px;">
                  <h4 style="color: #667eea; margin-bottom: 10px;">Fee Voucher / Bank Deposit Slip</h4>
                  <img src="cid:${feeVoucherCid}" alt="Fee Voucher" style="max-width: 100%; height: auto; border: 2px solid #e5e7eb; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" />
                </div>
              ` : ''}
            </div>
            ` : ''}
          </div>

          <div class="footer">
            <p><strong>RISE Premier Virtual Pvt. Ltd.</strong></p>
            <p>This is an automated email from the student enrollment system.</p>
            <p style="margin-top: 10px; font-size: 12px; color: #999;">
              Received on ${new Date().toLocaleString('en-US', { 
                dateStyle: 'full', 
                timeStyle: 'short' 
              })}
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"RISE Registration" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Student Registration",
      html: messageHtml,
      attachments,
    });

    return NextResponse.json({ success: true, message: "Email Sent!" });

  } catch (error: any) {
    console.error("Email Send Error:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
