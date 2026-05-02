// SCD Inspection System — Apps Script (Full Version)
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
      row[4] = Math.ceil(row[4] / 2);
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
    const formattedDate = dp[2] + '/' + dp[1] + '/' + dp[0]; // เปลี่ยนเป็น วัน/เดือน/ปี

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
      form.remark,   form.inspector
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
    const formattedDate = dp[2] + '/' + dp[1] + '/' + dp[0]; // เปลี่ยนเป็น วัน/เดือน/ปี

    const dateObj  = new Date(form.dccDate);
    const monthStr = Utilities.formatDate(dateObj, "GMT+7", "MMM-yy");
    const rawWeek  = Utilities.formatDate(dateObj, "GMT+7", "w");
    const weekNum  = "W." + rawWeek;
    const funcWeek = form.func + "-" + monthStr + "-" + weekNum;
    const depWeek  = form.department + "-" + monthStr + "-" + weekNum;

    const folderName = "DCC Report Images";
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

    // ── บังคับ Col B (Month) เป็น plain text เสมอ ──────────────────
    // Sheets auto-convert "Jan-26" / "Feb-26" เป็น Date → ต้อง setNumberFormat("@")
    const newRow = sheet.getLastRow();
    sheet.getRange(newRow, 2).setNumberFormat("@");        // Col B = Month
    sheet.getRange(newRow, 4).setNumberFormat("@");        // Col D = FuncWeek
    sheet.getRange(newRow, 5).setNumberFormat("@");        // Col E = DepWeek
    // re-set ค่าใหม่หลัง format เพื่อให้ text แสดงถูกต้อง
    sheet.getRange(newRow, 2).setValue(monthStr);
    sheet.getRange(newRow, 4).setValue(funcWeek);
    sheet.getRange(newRow, 5).setValue(depWeek);

    return "บันทึก DCC Record เรียบร้อย";
  } catch(e) { return "Error DCC: " + e.toString(); }
}

function getReportData() {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    Logger.log("=== START getReportData ===");

    // ── DCC Data ──────────────────────────────────────────────────────
    // Columns: [0]=Date [1]=Month [2]=Week [3]=FuncWeek [4]=DepWeek
    //          [5]=Type [6]=Dept [7]=Func [8]=SubFunc
    //          [9]=PlanUnit [10]=UnitCheck [11]=ErrUnit
    //          [12-16]=List1-5 [17]=Remark [18-20]=Images [21]=Inspector
    const dccSheet = ss.getSheetByName("DCC Data");
    if (!dccSheet) throw new Error("ไม่พบชีต 'DCC Data'");

    let dccCheckedData = [];
    const lastRow = dccSheet.getLastRow();
    if (lastRow > 1) {
      dccCheckedData = dccSheet.getRange(2, 1, lastRow - 1, 22).getValues().map(function(row) {
        return row.map(function(cell, i) {
          if (i === 0 && Object.prototype.toString.call(cell) === '[object Date]')
            return Utilities.formatDate(cell, "GMT+7", "dd/MM/yyyy");
          if (i === 1) {
            if (Object.prototype.toString.call(cell) === '[object Date]')
              return Utilities.formatDate(cell, "GMT+7", "MMM-yy");
            return cell ? cell.toString() : '';
          }
          return (cell !== null && cell !== undefined && cell !== '') ? cell.toString() : '';
        });
      });
    }

    // ── Master DCC ────────────────────────────────────────────────────
    // Columns: [0]=Type [1]=Dept [2]=Func [3]=SubFunc [4]=Target(monthly)
    const masterSheet = ss.getSheetByName("Master DCC");
    let masterData = [];
    if (masterSheet && masterSheet.getLastRow() > 1)
      masterData = masterSheet.getRange(2, 1, masterSheet.getLastRow() - 1, 10).getValues();

    // ── Area Data ─────────────────────────────────────────────────────
    let areaData = [];
    try {
      const areaSheet = ss.getSheetByName("Check Area");
      if (areaSheet && areaSheet.getLastRow() > 1) {
        const aLastRow = areaSheet.getLastRow();
        const aLastCol = Math.max(areaSheet.getLastColumn(), 16);
        areaData = areaSheet.getRange(2, 1, aLastRow - 1, aLastCol).getValues()
          .filter(function(row) { return row[0] && row[1]; })
          .map(function(row) {
            return row.map(function(cell, i) {
              if (i === 0) {
                if (Object.prototype.toString.call(cell) === '[object Date]')
                  return Utilities.formatDate(cell, "GMT+7", "dd/MM/yyyy");
                return cell ? cell.toString() : '';
              }
              return (cell !== null && cell !== undefined && cell !== '') ? cell.toString() : '';
            });
          });
        Logger.log("Area data rows: " + areaData.length);
      }
    } catch(eArea) {
      Logger.log("Warning: Cannot load Check Area: " + eArea.toString());
    }

    const waitingData = calculateWaiting(dccCheckedData, masterData);
    const summaryData = calculateSummary(dccCheckedData);

    Logger.log("DCC: " + dccCheckedData.length + " | Waiting: " + waitingData.length + " | Area: " + areaData.length);
    Logger.log("=== END getReportData ===");

    return {
      checked:    { dccData: dccCheckedData },
      waiting:    waitingData,
      summary:    summaryData,
      areaData:   areaData,
      masterData: masterData
    };

  } catch(e) {
    Logger.log("ERROR: " + e.toString() + "\nStack: " + e.stack);
    throw e;
  }
}

// ================================================================
// calculateWaiting — แก้ไข matching logic
// เดิม: match ด้วย subfunc เดียว → พัง ถ้าชื่อไม่ตรงเป๊ะ
// ใหม่: match ด้วย dept + func (2 levels) → แม่นยำกว่า
//        และ aggregate unitCheck ทุก subfunc ที่อยู่ใน dept+func เดียวกัน
// ================================================================
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

  // ── Build checked maps ────────────────────────────────────────────
  // checklistMap: key = "dept|func|subfunc" (3-level exact) + "dept|func" (2-level aggregate)
  const checklistExact = {};   // dept|func|subfunc → unitCheck sum
  const checklistFunc  = {};   // dept|func         → unitCheck sum (fallback)
  const pmwiMap        = {};   // dept|subfunc       → count

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
        // 3-level exact key
        const exactKey = dept + '|' + func + '|' + subfunc;
        checklistExact[exactKey] = (checklistExact[exactKey]||0) + unitCheck;
        // 2-level aggregate key (fallback ถ้า subfunc ชื่อต่างกัน)
        const funcKey = dept + '|' + func;
        checklistFunc[funcKey] = (checklistFunc[funcKey]||0) + unitCheck;
      }
    }
  });

  // ── Match Checklist: Master → checked ────────────────────────────
  // Strategy: ลอง exact match ก่อน ถ้าไม่เจอใช้ func-level aggregate
  //           แบ่ง aggregate ตาม proportion ของ target แต่ละ subfunc
  
  // Group master Checklist by dept|func เพื่อคำนวณ proportion
  const masterFuncGroup = {}; // dept|func → [{subfunc, target}]
  masterData.forEach(function(row) {
    const type    = (row[0]||'').toString().trim();
    const dept    = (row[1]||'').toString().trim();
    const func    = (row[2]||'').toString().trim();
    const subfunc = (row[3]||'').toString().trim();
    const target  = Math.ceil(parseFloat(row[4])||0);
    if (type !== 'Checklist') return;
    const fKey = dept + '|' + func;
    if (!masterFuncGroup[fKey]) masterFuncGroup[fKey] = [];
    masterFuncGroup[fKey].push({ dept:dept, func:func, subfunc:subfunc, target:target });
  });

  // Process each master func group
  Object.keys(masterFuncGroup).forEach(function(fKey) {
    var items       = masterFuncGroup[fKey];
    var totalTarget = items.reduce(function(s,x){return s+x.target;},0);
    var funcChecked = checklistFunc[fKey] || 0;

    // ตรวจว่า func group นี้มี exact match อยู่บ้างไหม
    var anyExactMatch = items.some(function(item) {
      return checklistExact[item.dept + '|' + item.func + '|' + item.subfunc] !== undefined;
    });

    items.forEach(function(item) {
      var exactKey     = item.dept + '|' + item.func + '|' + item.subfunc;
      var exactChecked = checklistExact[exactKey];

      var checked;
      if (exactChecked !== undefined) {
        // ✅ exact match — ใช้ค่าจริง
        checked = exactChecked;

      } else if (items.length === 1 && !anyExactMatch) {
        // มีแค่ subfunc เดียวและไม่มี exact match → ใช้ func aggregate
        checked = funcChecked;

      } else if (anyExactMatch) {
        // func group นี้มี subfunc บางตัว exact match แล้ว
        // subfunc ที่ไม่มีข้อมูล = ยังไม่ได้ตรวจจริง → checked = 0
        checked = 0;

      } else {
        // ไม่มี exact match เลยใน func group → proportion fallback
        // (กรณีนี้เกิดเมื่อ subfunc ชื่อต่างกันทั้งหมด)
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

  // ── Match PMWI ────────────────────────────────────────────────────
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

function calculateSummary(dccData) {
  const summary = { byMonth:{}, byType:{ PMWI:{}, Checklist:{} } };
  dccData.forEach(function(row) {
    const month=row[1]||'', type=row[5]||'', dept=row[6]||'', subfunc=row[8]||'';
    const unitCheck=parseFloat(row[10])||0, errAmount=parseFloat(row[11])||0;
    if (!month) return;
    if (!summary.byMonth[month])
      summary.byMonth[month]={totalUnit:0,totalError:0,pmwiError:0,checklistError:0};
    summary.byMonth[month].totalUnit  += unitCheck;
    summary.byMonth[month].totalError += errAmount;
    if (type==='PMWI'||type==='PM/WI') {
      summary.byMonth[month].pmwiError += errAmount;
      if (!summary.byType.PMWI[dept]) summary.byType.PMWI[dept]={unitCheck:0,error:0};
      summary.byType.PMWI[dept].unitCheck += unitCheck;
      summary.byType.PMWI[dept].error     += errAmount;
    } else if (type==='Checklist') {
      summary.byMonth[month].checklistError += errAmount;
      if (!summary.byType.Checklist[subfunc]) summary.byType.Checklist[subfunc]={unitCheck:0,error:0};
      summary.byType.Checklist[subfunc].unitCheck += unitCheck;
      summary.byType.Checklist[subfunc].error     += errAmount;
    }
  });
  return summary;
}
