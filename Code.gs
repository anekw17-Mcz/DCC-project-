// ============================================================
// SCD Inspection System — Full Integration Version
// ============================================================

function doGet() {
  return HtmlService.createTemplateFromFile('Form')
      .evaluate()
      .setTitle('SCD Inspection App')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no');
}

function getAppUrl() {
  return ScriptApp.getService().getUrl();
}

function getDropdownData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Dropdown");
  const data = sheet.getDataRange().getValues();
  return {
    areas:    data.slice(1).map(r => r[0]).filter(String),
    problems: data.slice(1).map(r => r[1]).filter(String),
    today:    Utilities.formatDate(new Date(), "GMT+7", "yyyy-MM-dd")
  };
}

function getDCCMasterData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Master DCC");
  if (!sheet) return [];
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];
  return sheet.getRange(2, 1, lastRow - 1, 10).getValues();
}

function getPMWIMapping() {
  const pdfFolderId = "1yBcD10ODx9kQv_4KrJDSyPk8wQpjL1xL";
  const imgFolderId = "15U4oTa52XqrUZzUQUPpNe_7HLM99G8x3";
  let fileMap = {};
  try {
    const pdfFolder = DriveApp.getFolderById(pdfFolderId);
    const pdfFiles  = pdfFolder.getFiles();
    while (pdfFiles.hasNext()) {
      const file = pdfFiles.next();
      const key = file.getName().split(' ')[0].replace(/\.[^/.]+$/, "").replace(/_/g,'/');
      if (!fileMap[key]) fileMap[key] = {};
      if (file.getMimeType().includes('pdf')) fileMap[key].pdfUrl = file.getUrl();
    }
    const imgFolder = DriveApp.getFolderById(imgFolderId);
    const imgFiles = imgFolder.getFiles();
    while (imgFiles.hasNext()) {
      const file = imgFiles.next();
      const key = file.getName().split(' ')[0].replace(/\.[^/.]+$/, "").replace(/_/g,'/');
      if (!fileMap[key]) fileMap[key] = {};
      if (file.getMimeType().includes('image')) {
        fileMap[key].imageUrl = file.getUrl();
        fileMap[key].thumbnailUrl = 'https://drive.google.com/thumbnail?id=' + file.getId() + '&sz=w800';
      }
    }
  } catch(e) { Logger.log("PMWI Error: " + e.toString()); }
  return fileMap;
}

function smartSearch(input) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const data = ss.getSheetByName("Master Art.").getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] && data[i][0].toString() === input.toString()) return { article: data[i][0], desc: data[i][1], found: true };
    if (data[i][2] && data[i][2].toString() === input.toString()) return { article: data[i][0], desc: data[i][1], found: true };
  }
  return { found: false };
}

function saveData(form) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("Check Area");
    const dp = form.date.split('-');
    const formattedDate = dp[2] + '/' + dp[1] + '/' + dp[0];
    sheet.appendRow([formattedDate, form.area, form.location, form.problem, form.art1, form.desc1, form.qty1, form.art2, form.desc2, form.qty2, "", "", "", "", form.remark, form.inspector]);
    return "บันทึกข้อมูลเรียบร้อย";
  } catch(e) { return "Error: " + e.toString(); }
}

function saveDCCData(form) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("DCC Data");
    const dateObj = new Date(form.dccDate);
    const monthStr = Utilities.formatDate(dateObj, "GMT+7", "MMM-yy");
    const weekNum = "W." + Utilities.formatDate(dateObj, "GMT+7", "w");
    sheet.appendRow([
      Utilities.formatDate(dateObj, "GMT+7", "dd/MM/yyyy"), monthStr, weekNum, "", "", 
      form.type, form.department, form.func, form.subfunc, 
      form.planUnit, form.unitCheck, form.errUnit, 
      form.list1, form.list2, form.list3, form.list4, form.list5, 
      form.remark, "", "", "", form.inspector
    ]);
    return "บันทึก DCC Record เรียบร้อย";
  } catch(e) { return "Error DCC: " + e.toString(); }
}

function getReportData() {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const dccSheet = ss.getSheetByName("DCC Data");
    const lastRow = dccSheet.getLastRow();
    const dccData = lastRow > 1 ? dccSheet.getRange(2, 1, lastRow - 1, 22).getValues() : [];
    const masterSheet = ss.getSheetByName("Master DCC");
    const masterData = masterSheet.getLastRow() > 1 ? masterSheet.getRange(2, 1, masterSheet.getLastRow() - 1, 10).getValues() : [];
    return { checked: { dccData: dccData }, summary: calculateSummary(dccData), masterData: masterData };
  } catch(e) { throw e; }
}

function calculateSummary(dccData) {
  const summary = { byMonth: {}, byType: { PMWI: {}, Checklist: {} } };
  dccData.forEach(row => {
    const month = row[1] || '';
    if (!month) return;
    if (!summary.byMonth[month]) summary.byMonth[month] = { totalUnit: 0, totalError: 0 };
    summary.byMonth[month].totalUnit += parseFloat(row[10]) || 0;
    summary.byMonth[month].totalError += parseFloat(row[11]) || 0;
  });
  return summary;
}

// 🧠 GEMINI AI INTEGRATION
function generateGeminiInsight(dataContext) {
  const apiKey = "AIzaSyBSdUq2RGmKZeMB_IqCcSXdzOVMknLi0CM"; 
  const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + apiKey;
  const payload = {
    "contents": [{
      "parts": [{
        "text": "คุณเป็นผู้จัดการฝ่ายคุณภาพคลังสินค้า จงสรุปข้อมูลนี้เพื่อใช้พรีเซนต์งานผู้บริหาร แบ่งเป็น 4 หัวข้อ (📊 ภาพรวม, 🚨 จุดวิกฤต, 🔍 วิเคราะห์สาเหตุ, 💡 แผนปฏิบัติการ) เขียนเป็น HTML สวยๆ: " + dataContext
      }]
    }]
  };
  const options = { "method": "post", "contentType": "application/json", "payload": JSON.stringify(payload), "muteHttpExceptions": true };
  try {
    const response = UrlFetchApp.fetch(apiUrl, options);
    const result = JSON.parse(response.getContentText());
    if (result.candidates && result.candidates.length > 0) {
      return result.candidates[0].content.parts[0].text;
    }
    return "AI ไม่สามารถสรุปข้อมูลได้";
  } catch (e) {
    return "AI Error: " + e.toString();
  }
}
