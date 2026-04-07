// ============================================================
// SCD Inspection System — Apps Script (Enterprise Edition)
// Standard Control and Development · Inspection Management System
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

// 🟢 [NEW] ฟังก์ชันดึงการตั้งค่าระบบ (Dynamic KPI & Cost)
function getSystemConfig() {
  let config = {
    targetErrorRate: 5.0, // เป้าหมาย Error ปกติ (5%)
    copqPerError: 350,    // มูลค่าความสูญเสีย (บาท) ต่อ 1 Error (COPQ)
    currency: '฿'
  };
  
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("Config");
    if (sheet) {
      const data = sheet.getDataRange().getValues();
      data.forEach(row => {
        if (row[0] === 'TargetErrorRate') config.targetErrorRate = parseFloat(row[1]) || 5.0;
        if (row[0] === 'CostPerError') config.copqPerError = parseFloat(row[1]) || 350;
      });
    }
  } catch(e) { /* เงียบไว้ถ้ายังไม่มีชีต Config */ }
  
  return config;
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
  const rawData = sheet.getRange(2, 1, lastRow - 1, 10).getValues();
  return rawData.map(function(row) {
    if (row[0] === 'Checklist' && row[2] && row[2].toString().toLowerCase().indexOf('audit') !== -1) {
      row[4] = Math.round(row[4] / 2);
    }
    return row;
  });
}

function getPMWIMapping() {
  const pdfFolderId = "1yBcD10ODx9kQv_4KrJDSyPk8wQpjL1xL";
  const imgFolderId = "15U4oTa52XqrUZzUQUPpNe_7HLM99G8x3";
  let fileMap = {};
  try {
    const pdfFolder = DriveApp.getFolderById(pdfFolderId);
    const pdfFiles  = pdfFolder.getFiles();
    while (pdfFiles.hasNext()) {
      const file     = pdfFiles.next();
      const fullName = file.getName();
      const key      = fullName.split(' ')[0].replace(/\.(jpg|jpeg|png|gif|pdf|docx?)$/i,'').replace(/_/g,'/');
      if (!fileMap[key]) fileMap[key] = {};
      if (file.getMimeType().includes('pdf')) {
        fileMap[key].pdfUrl  = file.getUrl();
        fileMap[key].pdfName = fullName;
      }
    }
    const imgFolder = DriveApp.getFolderById(imgFolderId);
    const imgFiles  = imgFolder.getFiles();
    while (imgFiles.hasNext()) {
      const file     = imgFiles.next();
      const fullName = file.getName();
      const key      = fullName.split(' ')[0].replace(/\.(jpg|jpeg|png|gif|pdf|docx?)$/i,'').replace(/_/g,'/');
      if (!fileMap[key]) fileMap[key] = {};
      if (file.getMimeType().includes('image')) {
        fileMap[key].imageUrl     = file.getUrl();
        fileMap[key].thumbnailUrl = 'https://drive.google.com/thumbnail?id=' + file.getId() + '&sz=w800';
        fileMap[key].imageName    = fullName;
      }
    }
  } catch(e) { Logger.log("getPMWIMapping error: " + e.toString()); }
  return fileMap;
}

function searchMaster(barcode) {
  const ss   = SpreadsheetApp.getActiveSpreadsheet();
  const data = ss.getSheetByName("Master Art.").getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][2] && data[i][2].toString() === barcode.toString())
      return { article: data[i][0], desc: data[i][1] };
  }
  return null;
}

function searchByArticle(article) {
  const ss   = SpreadsheetApp.getActiveSpreadsheet();
  const data = ss.getSheetByName("Master Art.").getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] && data[i][0].toString() === article.toString())
      return { desc: data[i][1] };
  }
  return null;
}

function smartSearch(input) {
  const ss   = SpreadsheetApp.getActiveSpreadsheet();
  const data = ss.getSheetByName("Master Art.").getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] && data[i][0].toString() === input.toString())
      return { article: data[i][0], desc: data[i][1], found: true, type: 'article' };
  }
  for (let i = 1; i < data.length; i++) {
    if (data[i][2] && data[i][2].toString() === input.toString())
      return { article: data[i][0], desc: data[i][1], found: true, type: 'barcode' };
  }
  return { found: false };
}

function saveData(form) {
  try {
    const ss    = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("Check Area");
    if (!sheet) return "Error: ไม่พบชีต 'Check Area'";

    const dp = form.date.split('-');
    const formattedDate = dp[2] + '/' + dp[1] + '/' + dp[0];

    const folderName = "Area Inspection DCC";
    const folders = DriveApp.getFoldersByName(folderName);
    const folder  = folders.hasNext() ? folders.next() : DriveApp.createFolder(folderName);

    const imgUrls = ["","","",""];
    if (form.images && form.images.length > 0) {
      form.images.forEach((img, i) => {
        if (i < 4) {
          const blob = Utilities.newBlob(Utilities.base64Decode(img.data), img.type, img.name);
          const file = folder.createFile(blob);
          file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
          imgUrls[i] = file.getUrl();
        }
      });
    }

    sheet.appendRow([
      formattedDate, form.area,  form.location, form.problem,
      form.art1,     form.desc1, form.qty1,
      form.art2,     form.desc2, form.qty2,
      imgUrls[0],    imgUrls[1], imgUrls[2],    imgUrls[3],
      form.remark,   form.inspector,
      form.rootCause, form.issueStatus, form.actionOwner // 🟢🟢 เพิ่ม 3 ค่านี้ต่อท้าย!
    ]);
    return "บันทึก Area Inspection เรียบร้อย";
  } catch(e) { return "Error: " + e.toString(); }
}

function saveDCCData(form) {
  try {
    const ss    = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("DCC Data");
    if (!sheet) return "Error: ไม่พบชีต 'DCC Data'";

    const dp = form.dccDate.split('-');
    const formattedDate = dp[2] + '/' + dp[1] + '/' + dp[0];

    const dateObj  = new Date(form.dccDate);
    const monthStr = Utilities.formatDate(dateObj, "GMT+7", "MMM-yy");
    const rawWeek  = Utilities.formatDate(dateObj, "GMT+7", "w");
    const weekNum  = "W." + rawWeek;
    const funcWeek = form.func + "-" + monthStr + "-" + weekNum;
    const depWeek  = form.department + "-" + monthStr + "-" + weekNum;

    // 🟢 เพิ่มโค้ด 3 บรรทัดนี้ ดักจับถ้าผู้ใช้ไม่กรอก ให้บังคับเซฟเป็นเลข 0
    form.planUnit  = (form.planUnit === "" || form.planUnit == null) ? 0 : form.planUnit;
    form.unitCheck = (form.unitCheck === "" || form.unitCheck == null) ? 0 : form.unitCheck;
    form.errUnit   = (form.errUnit === "" || form.errUnit == null) ? 0 : form.errUnit;

    const folderName = "DCC Report Images";
    // ... โค้ดส่วนอัปโหลดรูปและบันทึกข้อมูลด้านล่างเหมือนเดิมทุกประการ ...
    const folders = DriveApp.getFoldersByName(folderName);
    const folder  = folders.hasNext() ? folders.next() : DriveApp.createFolder(folderName);

    const imgUrls = ["","",""];
    if (form.images && form.images.length > 0) {
      form.images.forEach((img, i) => {
        if (i < 3) {
          const blob = Utilities.newBlob(Utilities.base64Decode(img.data), img.type, img.name);
          const file = folder.createFile(blob);
          file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
          imgUrls[i] = file.getUrl();
        }
      });
    }

    sheet.appendRow([
      formattedDate, monthStr,
      weekNum, funcWeek, depWeek,
      form.type, form.department, form.func, form.subfunc,
      form.planUnit, form.unitCheck, form.errUnit,
      form.list1, form.list2, form.list3, form.list4, form.list5,
      form.remark, imgUrls[0], imgUrls[1], imgUrls[2],
      form.inspector
    ]);

    const newRow = sheet.getLastRow();
    sheet.getRange(newRow, 2).setNumberFormat("@");
    sheet.getRange(newRow, 4).setNumberFormat("@");
    sheet.getRange(newRow, 5).setNumberFormat("@");
    sheet.getRange(newRow, 2).setValue(monthStr);
    sheet.getRange(newRow, 4).setValue(funcWeek);
    sheet.getRange(newRow, 5).setValue(depWeek);

    return "บันทึก DCC Record เรียบร้อย";
  } catch(e) { return "Error DCC: " + e.toString(); }
}

// 🟢 [REFACTORED] อัปเกรดการดึงข้อมูลให้ไวขึ้นและแนบ Config ไปให้หน้าเว็บ
function getReportData() {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    Logger.log("=== START getReportData (Enterprise) ===");
    
    // ดึง Config ข้อมูลทางการเงินและเป้าหมาย
    const sysConfig = getSystemConfig();

    const dccSheet = ss.getSheetByName("DCC Data");
    if (!dccSheet) throw new Error("ไม่พบชีต 'DCC Data'");

    let dccCheckedData = [];
    const dccLastRow = dccSheet.getLastRow();
    if (dccLastRow > 1) {
      const rawValues = dccSheet.getRange(2, 1, dccLastRow - 1, 22).getDisplayValues();
      dccCheckedData = rawValues.map(row => {
        if(row[0] && row[0].includes(' ')) row[0] = row[0].split(' ')[0]; 
        return row;
      });
    }

    const masterSheet = ss.getSheetByName("Master DCC");
    let masterData = [];
    if (masterSheet && masterSheet.getLastRow() > 1)
      masterData = masterSheet.getRange(2, 1, masterSheet.getLastRow() - 1, 10).getValues();

    let areaData = [];
    try {
      const areaSheet = ss.getSheetByName("Check Area");
      if (areaSheet && areaSheet.getLastRow() > 1) {
        const aLastRow = areaSheet.getLastRow();
        const aLastCol = Math.max(areaSheet.getLastColumn(), 16);
        areaData = areaSheet.getRange(2, 1, aLastRow - 1, aLastCol).getDisplayValues()
          .filter(row => row[0] && row[1]); 
      }
    } catch(eArea) {}

    const waitingData = calculateWaiting(dccCheckedData, masterData);
    
    // 🟢 โยน config ไปให้ calculateSummary เพื่อคำนวณเงิน
    const summaryData = calculateSummary(dccCheckedData, sysConfig);

    Logger.log("DCC: " + dccCheckedData.length + " | Waiting: " + waitingData.length + " | Area: " + areaData.length);
    Logger.log("=== END getReportData ===");

    return {
      checked:    { dccData: dccCheckedData },
      waiting:    waitingData,
      summary:    summaryData,
      areaData:   areaData,
      masterData: masterData,
      config:     sysConfig // 🟢 ส่ง Config กลับไปให้ HTML JS ใช้งาน
    };

  } catch(e) {
    Logger.log("ERROR: " + e.toString() + "\nStack: " + e.stack);
    throw e;
  }
}

function calculateWaiting(dccData, masterData) {
  const waiting      = [];
  const currentDate  = new Date();
  const currentMonth = Utilities.formatDate(currentDate, "GMT+7", "MMM-yy");
  const currentMonthN = currentDate.getMonth() + 1;
  const halfYear     = currentMonthN <= 6 ? 'H1' : 'H2';

  let halfYearStart, halfYearEnd;
  if (halfYear === 'H1') {
    halfYearStart = new Date(currentDate.getFullYear(), 0, 1);
    halfYearEnd   = new Date(currentDate.getFullYear(), 5, 30);
  } else {
    halfYearStart = new Date(currentDate.getFullYear(), 6, 1);
    halfYearEnd   = new Date(currentDate.getFullYear(), 11, 31);
  }

  const checklistExact = {};   
  const checklistFunc  = {};   
  const pmwiMap        = {};   

  dccData.forEach(function(row) {
    const dateStr    = row[0]||'';
    const month      = row[1]||'';
    const type       = (row[5]||'').toString().trim();
    const dept       = (row[6]||'').toString().trim();
    const func       = (row[7]||'').toString().trim();
    const subfunc    = (row[8]||'').toString().trim();
    const unitCheck  = parseFloat(row[10])||0;

    let rowDate = null;
    if (dateStr) {
      const parts = dateStr.split('/');
      if (parts.length === 3) rowDate = new Date(parts[2], parts[1]-1, parts[0]);
    }

    if (type === 'PMWI' || type === 'PM/WI') {
      if (rowDate && rowDate >= halfYearStart && rowDate <= halfYearEnd) {
        const key = dept + '|' + subfunc;
        pmwiMap[key] = (pmwiMap[key]||0) + 1;
      }
    } else if (type === 'Checklist') {
      if (month === currentMonth) {
        const exactKey = dept + '|' + func + '|' + subfunc;
        checklistExact[exactKey] = (checklistExact[exactKey]||0) + unitCheck;
        const funcKey = dept + '|' + func;
        checklistFunc[funcKey] = (checklistFunc[funcKey]||0) + unitCheck;
      }
    }
  });

  const masterFuncGroup = {}; 
  masterData.forEach(function(row) {
    const type    = (row[0]||'').toString().trim();
    const dept    = (row[1]||'').toString().trim();
    const func    = (row[2]||'').toString().trim();
    const subfunc = (row[3]||'').toString().trim();
    const target  = parseFloat(row[4])||0;
    if (type !== 'Checklist') return;
    const fKey = dept + '|' + func;
    if (!masterFuncGroup[fKey]) masterFuncGroup[fKey] = [];
    masterFuncGroup[fKey].push({ dept:dept, func:func, subfunc:subfunc, target:target });
  });

  Object.keys(masterFuncGroup).forEach(function(fKey) {
    var items       = masterFuncGroup[fKey];
    var totalTarget = items.reduce(function(s,x){return s+x.target;},0);
    var funcChecked = checklistFunc[fKey] || 0;

    var anyExactMatch = items.some(function(item) {
      return checklistExact[item.dept + '|' + item.func + '|' + item.subfunc] !== undefined;
    });

    items.forEach(function(item) {
      var exactKey     = item.dept + '|' + item.func + '|' + item.subfunc;
      var exactChecked = checklistExact[exactKey];

      var checked;
      if (exactChecked !== undefined) {
        checked = exactChecked;
      } else if (items.length === 1 && !anyExactMatch) {
        checked = funcChecked;
      } else if (anyExactMatch) {
        checked = 0;
      } else {
        var ratio = totalTarget > 0 ? item.target / totalTarget : 0;
        checked = Math.round(funcChecked * ratio);
      }

      checked = Math.min(checked, item.target);
      var remaining = item.target - checked;
      if (remaining > 0) {
        waiting.push({
          type:        'Checklist',
          department:  item.dept,
          function:    item.func,
          subFunction: item.subfunc,
          target:      item.target,
          checked:     checked,
          remaining:   remaining,
          month:       currentMonth
        });
      }
    });
  });

  const pmwiByDept = {};
  masterData.forEach(function(row) {
    const type    = (row[0]||'').toString().trim();
    const dept    = (row[1]||'').toString().trim();
    const func    = (row[2]||'').toString().trim();
    const subfunc = (row[3]||'').toString().trim();
    if (type !== 'PMWI' && type !== 'PM/WI') return;
    if (!pmwiByDept[dept]) pmwiByDept[dept] = { department:dept, function:func, totalTarget:0, totalChecked:0 };
    pmwiByDept[dept].totalTarget  += 1;
    pmwiByDept[dept].totalChecked += (pmwiMap[dept+'|'+subfunc]||0);
  });

  Object.keys(pmwiByDept).forEach(function(dept) {
    const d = pmwiByDept[dept];
    const remaining = d.totalTarget - d.totalChecked;
    if (remaining > 0) {
      waiting.push({
        type:        'PMWI',
        department:  d.department,
        function:    d.function,
        subFunction: d.totalTarget + ' Sub-Functions',
        target:      d.totalTarget,
        checked:     d.totalChecked,
        remaining:   remaining,
        month:       halfYear + ' ' + currentDate.getFullYear()
      });
    }
  });

  return waiting;
}
