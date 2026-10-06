(function(){
  function safeNumber(v, fallback = 0) {
    const n = Number(v);
    return Number.isFinite(n) ? n : fallback;
  }

  function normalizeAdvanceRow(row) {
    if (!row || typeof row !== 'object') return null;
    const employee = String(row.employee || row.employeeName || '').trim();
    const employeeId = String(row.employeeId || '').trim();
    const date = String(row.date || '').trim();
    const amount = Math.max(0, safeNumber(row.amount, 0));
    const note = String(row.note || '').trim();
    if (!employee && !employeeId && !date && amount <= 0) return null;
    return { employee, employeeId, date, amount, note };
  }

  function getAllAdvances() {
    if (!window.D || !Array.isArray(window.D.salaryAdvances)) {
      if (window.D) window.D.salaryAdvances = [];
      return [];
    }
    return window.D.salaryAdvances
      .map(normalizeAdvanceRow)
      .filter(Boolean)
      .sort((a, b) => (a.date || '').localeCompare(b.date || '') || (a.employee || '').localeCompare(b.employee || ''));
  }

  function getAdvanceTotalForEmployee(employee, from, to) {
    const emp = String(employee || '').trim();
    if (!emp) return 0;
    const rows = getAllAdvances().filter(r => r.employee === emp && r.date >= from && r.date <= to);
    return rows.reduce((sum, row) => sum + (Number(row.amount) || 0), 0);
  }

  function getAdvanceTotalForEmployeeDate(employee, date) {
    const emp = String(employee || '').trim();
    if (!emp || !date) return 0;
    return getAllAdvances().filter(r => r.employee === emp && r.date === date).reduce((sum, row) => sum + (Number(row.amount) || 0), 0);
  }

  function ensureAdvanceUi() {
    const payrollBody = document.getElementById('payrollBody');
    if (!payrollBody) return;
    if (payrollBody.dataset.advanceUi === '1') return;
    payrollBody.dataset.advanceUi = '1';
    const current = document.getElementById('salaryAdvanceForm');
    if (current) return;

    const empOptions = (window.employees ? window.employees() : []).map((name, idx) => `<option value="${window.escape ? window.escape(String(name)) : String(name).replace(/"/g, '&quot;')}">${String(name)}</option>`).join('');
    payrollBody.insertAdjacentHTML('beforeend', `
      <div class="card" id="salaryAdvanceForm" style="margin-top:12px;">
        <div class="section-title"><h3>💸 Tạm ứng lương</h3></div>
        <div class="grid2">
          <div class="field"><label>Nhân viên</label><select id="advanceEmployee">${empOptions || '<option value="">Chưa có nhân viên</option>'}</select></div>
          <div class="field"><label>Ngày</label><input id="advanceDate" type="date" value="${document.getElementById('pFrom')?.value || ''}"></div>
        </div>
        <div class="grid2">
          <div class="field"><label>Số tiền tạm ứng</label><input id="advanceAmount" type="number" min="0" step="1000" value="0"></div>
          <div class="field"><label>Ghi chú</label><input id="advanceNote" type="text" placeholder="Ví dụ: Tạm ứng giữa tháng"></div>
        </div>
        <button class="primary" type="button" onclick="window.addSalaryAdvanceFromForm()">＋ GHI TẠM ỨNG</button>
        <div id="advanceList"></div>
      </div>
    `);
    const n = document.getElementById('advanceList');
    if (n) n.innerHTML = renderAdvanceListHtml();
  }

  function renderAdvanceListHtml() {
    const rows = getAllAdvances();
    if (!rows.length) return '<div class="tiny muted" style="margin-top:8px">Chưa có tạm ứng nào.</div>';
    let html = '<div style="margin-top:10px"><div class="tiny muted">Lịch sử tạm ứng</div>';
    rows.forEach((row) => {
      html += `<div class="control-item"><div class="control-head"><div><div class="control-title">${String(row.employee || 'Nhân viên')}</div><div class="tiny muted">${row.date || '—'}${row.note ? ' · ' + row.note : ''}</div></div><b>${window.money ? window.money(row.amount) : new Intl.NumberFormat('vi-VN').format(Number(row.amount || 0)) + ' đ'}</b></div></div>`;
    });
    html += '</div>';
    return html;
  }

  function patchPayrollWithAdvances() {
    const originalPayrollEntries = window.payrollEntries;
    if (!originalPayrollEntries || window.__rollPayrollPatched) return;
    window.__rollPayrollPatched = true;

    window.payrollEntries = function(from, to) {
      const base = originalPayrollEntries.call(this, from, to);
      const names = Object.keys(base || {});
      names.forEach((employee) => {
        const entry = base[employee] || {};
        const totalAdvance = getAdvanceTotalForEmployee(employee, from, to);
        const gross = Number(entry.pay || 0) || 0;
        const adj = Number(entry.adjustment || 0) || 0;
        entry.adjustment = adj;
        entry.advance = totalAdvance;
        entry.net = gross + adj - totalAdvance;
        if (entry.days) {
          Object.keys(entry.days).forEach((date) => {
            const sub = entry.days[date] || {};
            const dayGross = Number(sub.basePay || sub.pay || 0) || 0;
            const dayAdjustment = Number(sub.adjustment || 0) || 0;
            const dayAdvance = getAdvanceTotalForEmployeeDate(employee, date);
            sub.advance = dayAdvance;
            sub.net = dayGross + dayAdjustment - dayAdvance;
          });
        }
      });
      return base;
    };

    const originalRenderPayroll = window.renderPayroll;
    window.renderPayroll = function() {
      const ret = originalRenderPayroll ? originalRenderPayroll.call(this) : undefined;
      ensureAdvanceUi();
      const advanceList = document.getElementById('advanceList');
      if (advanceList) advanceList.innerHTML = renderAdvanceListHtml();
      const advanceDate = document.getElementById('advanceDate');
      if (advanceDate && !advanceDate.value) {
        const from = document.getElementById('pFrom')?.value || '';
        if (from) advanceDate.value = from;
      }
      return ret;
    };

    window.addSalaryAdvanceFromForm = function() {
      const employee = (document.getElementById('advanceEmployee')?.value || '').trim();
      const date = (document.getElementById('advanceDate')?.value || '').trim();
      const amount = Number(document.getElementById('advanceAmount')?.value || 0);
      const note = (document.getElementById('advanceNote')?.value || '').trim();
      if (!employee || !date || !Number.isFinite(amount) || amount <= 0) {
        if (window.toast) window.toast('Vui lòng chọn nhân viên, ngày và số tiền tạm ứng > 0');
        return false;
      }
      if (!window.D) window.D = {};
      if (!Array.isArray(window.D.salaryAdvances)) window.D.salaryAdvances = [];
      window.D.salaryAdvances.push({ employee, date, amount, note, createdAt: Date.now() });
      if (window.localSaveOnly) window.localSaveOnly();
      if (window.save) window.save();
      const advanceList = document.getElementById('advanceList');
      if (advanceList) advanceList.innerHTML = renderAdvanceListHtml();
      if (window.toast) window.toast('✅ Đã ghi tạm ứng');
      if (window.renderPayroll) window.renderPayroll();
      return true;
    };

    const originalExportPayrollCsv = window.exportPayrollCsv;
    window.exportPayrollCsv = function() {
      const fromInput = document.getElementById('pFrom');
      const toInput = document.getElementById('pTo');
      const from = (fromInput && fromInput.value) || (window.START || '2026-09-01');
      const to = (toInput && toInput.value) || from;
      const by = window.payrollEntries ? window.payrollEntries(from, to) : {};
      const lines = [];
      lines.push(['Date','Employee','Plant quantity','Gross salary','Adjustment','Advance','Net salary','Cumulative gross','Cumulative net'].join(','));
      const employees = Array.isArray(window.employees) ? window.employees() : [];
      let cumulativeGross = 0;
      let cumulativeNet = 0;
      const dates = [];
      for (let d = from; d <= to; d = (() => {
        const dt = new Date(d + 'T00:00:00');
        dt.setDate(dt.getDate() + 1);
        return dt.toISOString().slice(0, 10);
      })()) {
        dates.push(d);
      }
      employees.forEach((emp) => {
        const entry = by[emp] || { qty: 0, pay: 0, adjustment: 0, advance: 0, net: 0, days: {} };
        let runningGross = 0;
        let runningNet = 0;
        dates.forEach((date) => {
          const day = entry.days && entry.days[date] ? entry.days[date] : { qty: 0, basePay: 0, adjustment: 0, advance: 0, pay: 0, net: 0 };
          const gross = Number(day.basePay || day.pay || 0) || 0;
          const adjustment = Number(day.adjustment || 0) || 0;
          const advance = Number(day.advance || 0) || 0;
          const net = gross + adjustment - advance;
          runningGross += gross;
          runningNet += net;
          cumulativeGross += gross;
          cumulativeNet += net;
          lines.push([date, emp, Math.round(Number(day.qty || 0) || 0), Math.round(gross), Math.round(adjustment), Math.round(advance), Math.round(net), Math.round(runningGross), Math.round(runningNet)].map((cell) => '"' + String(cell).replace(/"/g, '""') + '"').join(','));
        });
      });
      if (window.AndroidBridge && window.AndroidBridge.saveFile) {
        const text = lines.join('\n');
        const b64 = window.btoa(unescape(encodeURIComponent(text)));
        window.AndroidBridge.saveFile('payroll-' + from + '-' + to + '.csv', b64, 'text/csv');
        return true;
      }
      return false;
    };
  }

  function patchAssignPackSizeOptions() {
    const originalFillAssignOptions = window.fillAssignOptions;
    if (!originalFillAssignOptions || window.__rollAssignPatched) return;
    window.__rollAssignPatched = true;

    window.fillAssignOptions = function() {
      const ret = originalFillAssignOptions.call(this);
      const packSizeSelect = document.getElementById('assignPackSize');
      if (!packSizeSelect) return ret;
      const oldValue = packSizeSelect.value || '';
      packSizeSelect.innerHTML = '<option value="">-- Chọn quy cách --</option>' + Array.from({ length: 100 }, (_, i) => i + 1).map((n) => `<option value="${n}">${n} cây / combo</option>`).join('');
      if (oldValue) packSizeSelect.value = oldValue;
      return ret;
    };
  }

  function initFixes() {
    patchAssignPackSizeOptions();
    patchPayrollWithAdvances();
    document.addEventListener('DOMContentLoaded', () => {
      ensureAdvanceUi();
      const hold = document.getElementById('advanceDate');
      if (hold && !hold.value) {
        const from = document.getElementById('pFrom')?.value || '';
        if (from) hold.value = from;
      }
    });
  }

  initFixes();
})();
