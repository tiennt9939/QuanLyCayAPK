
const DEFAULT_DATA = 
{"employees":["Luân lớn","Luân nhỏ","Huy","Mi","Hưng","Bé Hai"],"rates":[{"size":"C6","rate":2000.0},{"size":"C7","rate":2000.0},{"size":"C9","rate":3000.0},{"size":"C10","rate":5000.0},{"size":"C11","rate":7000.0},{"size":"C12","rate":10000.0}],"catalog":[{"stt":1,"name":"Vàng bạc","size":"C7","price":10000.0},{"stt":2,"name":"Vàng bạc","size":"C9","price":15000.0},{"stt":3,"name":"Vàng bạc","size":"C10","price":30000.0},{"stt":4,"name":"Vàng bạc","size":"C12","price":120000.0},{"stt":5,"name":"Nguyệt quế thái","size":"C7","price":10000.0},{"stt":6,"name":"Nguyệt quế thái","size":"C9","price":25000.0},{"stt":7,"name":"Nguyệt quế thái","size":"C10","price":70000.0},{"stt":8,"name":"Cẩm tú mai","size":"C7","price":0.0},{"stt":9,"name":"Cẩm tú mai","size":"C9","price":0.0},{"stt":10,"name":"Cẩm tú mai","size":"C10","price":0.0},{"stt":11,"name":"Cẩm tú mai","size":"C11","price":0.0},{"stt":12,"name":"Trầu bà thanh xuân","size":"C9","price":45000.0},{"stt":13,"name":"Trầu bà thanh xuân","size":"C10","price":60000.0},{"stt":14,"name":"Trầu bà thanh xuân","size":"C11","price":90000.0},{"stt":15,"name":"Trầu bà thanh xuân","size":"C13","price":180000.0},{"stt":16,"name":"Mai vạn phúc C9","size":"C9","price":16000.0},{"stt":17,"name":"Mai vạn phúc C10","size":"C10","price":28000.0},{"stt":18,"name":"Mai vạn phúc C11","size":"C11","price":45000.0},{"stt":19,"name":"Mai vạn phúc C16","size":"C16","price":160000.0},{"stt":20,"name":"Ngọc ngân","size":"C7","price":10000.0},{"stt":21,"name":"Ngọc ngân","size":"C9","price":0.0},{"stt":22,"name":"Phú quý c7","size":"C7","price":35000.0},{"stt":23,"name":"Phú quý c9","size":"C9","price":35000.0},{"stt":24,"name":"Táo thái","size":"","price":0.0},{"stt":25,"name":"Táo thái","size":"","price":0.0},{"stt":26,"name":"Hàm hương","size":"C7","price":40000.0},{"stt":27,"name":"Hàm hương","size":"C9","price":55000.0},{"stt":28,"name":"Bụp thấp nhiều màu","size":"C9","price":15000.0},{"stt":29,"name":"Lài Tây","size":"C9","price":13000.0},{"stt":30,"name":"Lài Tây","size":"C11","price":45000.0},{"stt":31,"name":"Dừa cạn nhiều màu","size":"","price":19000.0},{"stt":32,"name":"Phong lá đỏ C7","size":"C7","price":23000.0},{"stt":33,"name":"Trang thái (đỏ, vàng, hồng) C9","size":"C9","price":30000.0},{"stt":34,"name":"Trang thái (đỏ, vàng, hồng) C10","size":"C10","price":90000.0},{"stt":35,"name":"Trang thái (đỏ, vàng, hồng) T25","size":"T25","price":180000.0},{"stt":36,"name":"Trang thái (đỏ, vàng, hồng) T28","size":"T28","price":250000.0},{"stt":37,"name":"Trang thái (đỏ, vàng, hồng) tàng 1m","size":"tàng 1m","price":350000.0},{"stt":38,"name":"Hồng phụng C9","size":"C9","price":40000.0},{"stt":39,"name":"Hồng phụng C11","size":"C11","price":90000.0},{"stt":40,"name":"Hồng siêu nụ C9","size":"C9","price":45000.0},{"stt":41,"name":"Hồng siêu nụ C11","size":"C11","price":75000.0},{"stt":42,"name":"Sơn liễu C9","size":"C9","price":25000.0},{"stt":43,"name":"Sơn liễu C7","size":"C7","price":13000.0},{"stt":44,"name":"Trầu bà sữa C9","size":"C9","price":25000.0},{"stt":45,"name":"Trang mỹ hồng (hồng + đỏ + vàng) C9","size":"C9","price":30000.0},{"stt":46,"name":"Thiên lý C9","size":"C9","price":21000.0},{"stt":47,"name":"Cau Đài Loan C10","size":"C10","price":210000.0},{"stt":48,"name":"Chuối rẽ quạt C11","size":"C11","price":145000.0},{"stt":49,"name":"Cây không khí 1 bó","size":"1 bó","price":52000.0},{"stt":50,"name":"Vạn lộc C7","size":"C7","price":25000.0},{"stt":51,"name":"Vạn lộc C9","size":"C9","price":35000.0},{"stt":52,"name":"Nghệ tây C10","size":"C10","price":53000.0},{"stt":53,"name":"Bướm (hồng + trắng) C9","size":"C9","price":45000.0},{"stt":54,"name":"Địa lan tím C8","size":"C8","price":18000.0},{"stt":55,"name":"Chuối cẩm thạch C9","size":"C9","price":40000.0},{"stt":56,"name":"Chuối cẩm thạch C11","size":"C11","price":75000.0},{"stt":57,"name":"Tùng bồng lai tiên cảnh chậu gốm","size":"chậu gốm","price":120000.0},{"stt":58,"name":"Trúc quân tử (3 cây)","size":"3 cây","price":25000.0},{"stt":59,"name":"Kim Tiền","size":"C9","price":35000.0},{"stt":60,"name":"Kim Tiền","size":"C10","price":50000.0},{"stt":61,"name":"Kim Tiền","size":"C12","price":95000.0},{"stt":62,"name":"Thanh xà","size":"C9","price":25000.0},{"stt":63,"name":"Thanh xà","size":"C10","price":45000.0},{"stt":64,"name":"Hồng phát tài","size":"C7","price":20000.0},{"stt":65,"name":"Hồng phát tài","size":"C9","price":43000.0},{"stt":66,"name":"Lan chi","size":"C9","price":25000.0},{"stt":67,"name":"Polly","size":"C9","price":45000.0},{"stt":68,"name":"Lindini","size":"C7","price":60000.0},{"stt":69,"name":"Hạc cam","size":"C9","price":90000.0},{"stt":70,"name":"Hạc cam","size":"C10","price":110000.0},{"stt":71,"name":"Trầu bà lỗ","size":"C7","price":15000.0},{"stt":72,"name":"Như ý","size":"C7","price":15000.0},{"stt":73,"name":"Sơn liễu","size":"C7","price":15000.0},{"stt":74,"name":"Sơn liễu","size":"C9","price":25000.0},{"stt":75,"name":"Gia huy","size":"C9","price":15000.0},{"stt":76,"name":"Lá màu","size":"C9","price":15000.0},{"stt":77,"name":"Liễu 2 da cẩm thạch","size":"C9","price":23000.0},{"stt":78,"name":"Lan quân tử","size":"C9","price":45000.0},{"stt":79,"name":"Quỳnh hương đỏ vàng","size":"C9","price":23000.0},{"stt":80,"name":"Đuôi công xanh + tím + hồng","size":"C9","price":38000.0},{"stt":81,"name":"Phát tài lá đỏ","size":"C9","price":30000.0},{"stt":82,"name":"Phát tài mỹ","size":"C9","price":30000.0},{"stt":83,"name":"Thiết mộc lan","size":"C9","price":40000.0},{"stt":84,"name":"Thiết mộc lan","size":"C11","price":140000.0},{"stt":85,"name":"Cây trường sinh","size":"C7","price":15000.0},{"stt":86,"name":"Cây trường sinh","size":"C9","price":35000.0},{"stt":87,"name":"Thiên tuế","size":"C9","price":75000.0},{"stt":88,"name":"Thiên tuế","size":"C11","price":230000.0},{"stt":89,"name":"Thiên tuế","size":"C13","price":450000.0},{"stt":90,"name":"Đại phú","size":"C10","price":55000.0},{"stt":91,"name":"Đại phú","size":"C11","price":130000.0},{"stt":92,"name":"Bàng sing","size":"C9","price":55000.0},{"stt":93,"name":"Bàng sing","size":"C11","price":160000.0},{"stt":94,"name":"Tùng đuôi chồn","size":"C9","price":35000.0},{"stt":95,"name":"Tùng đuôi chồn","size":"C10","price":75000.0},{"stt":96,"name":"Tiểu trâm","size":"C9","price":15000.0},{"stt":97,"name":"Tiểu trâm","size":"C11","price":65000.0},{"stt":98,"name":"Hàm hương","size":"C7","price":40000.0},{"stt":99,"name":"Hàm hương","size":"C9","price":55000.0}],"daily":[{"date":"2026-09-01","plantIndex":0,"in":0.0,"counts":{"Luân lớn":80.0,"Luân nhỏ":50.0,"Huy":70.0}}],"opening":{"0":500.0,"1":0.0,"2":0.0,"3":0.0,"4":0.0,"5":0.0,"6":0.0,"7":0.0,"8":0.0,"9":0.0,"10":0.0,"11":0.0,"12":0.0,"13":0.0,"14":0.0,"15":0.0,"16":0.0,"17":0.0,"18":0.0,"19":0.0,"20":0.0,"21":0.0,"22":0.0,"23":0.0,"24":0.0,"25":0.0,"26":0.0,"27":0.0,"28":0.0,"29":0.0,"30":0.0,"31":0.0,"32":0.0,"33":0.0,"34":0.0,"35":0.0,"36":0.0,"37":0.0,"38":0.0,"39":0.0,"40":0.0,"41":0.0,"42":0.0,"43":0.0,"44":0.0,"45":0.0,"46":0.0,"47":0.0,"48":0.0,"49":0.0,"50":0.0,"51":0.0,"52":0.0,"53":0.0,"54":0.0,"55":0.0,"56":0.0,"57":0.0,"58":0.0,"59":0.0,"60":0.0,"61":0.0,"62":0.0,"63":0.0,"64":0.0,"65":0.0,"66":0.0,"67":0.0,"68":0.0,"69":0.0,"70":0.0,"71":0.0,"72":0.0,"73":0.0,"74":0.0,"75":0.0,"76":0.0,"77":0.0,"78":0.0,"79":0.0,"80":0.0,"81":0.0,"82":0.0,"83":0.0,"84":0.0,"85":0.0,"86":0.0,"87":0.0,"88":0.0,"89":0.0,"90":0.0,"91":0.0,"92":0.0,"93":0.0,"94":0.0,"95":0.0,"96":0.0,"97":0.0,"98":0.0},"periodStart":"2026-09-01","periodEnd":"2027-12-31","appVersion":"9.0.0"};
const START='2026-09-01',END='2027-12-31';
let D,entryMode='pack',stockFilter='all',selected={plantName:'',sizeIndex:null,empIndex:0,inPlantName:'',inSizeIndex:null},pickerMode='',pendingPlantImage=null,pendingPackPhoto='',packerEditingId=null,selectedOrderId=null;
let orderNotificationState={pending:0,completed:0,ready:false,role:''};
let orderAlertAudioCtx=null;
const $=id=>document.getElementById(id);const money=n=>new Intl.NumberFormat('vi-VN').format(Math.round(Number(n)||0))+' đ';const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const parts=s=>String(s).split('-').map(Number);const dateObj=s=>{let [y,m,d]=parts(s);return new Date(y,m-1,d)};const fmt=d=>{let y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,'0'),day=String(d.getDate()).padStart(2,'0');return `${y}-${m}-${day}`};const addDays=(s,n)=>{let d=dateObj(s);d.setDate(d.getDate()+n);return fmt(d)};const daysBetween=(a,b)=>Math.round((dateObj(b)-dateObj(a))/86400000);const fmtDMY=s=>{let [y,m,d]=parts(s);return `${d}/${m}/${y}`};
function toast(t){const e=$('toast');e.textContent=t;e.style.display='block';clearTimeout(window._tt);window._tt=setTimeout(()=>e.style.display='none',1900)}
function localSaveOnly(){localStorage.setItem('quanlycay',JSON.stringify(D));localStorage.setItem('quanlycay_local_updated',String(Date.now()))}
function save(){localSaveOnly();if(window.CloudSync)CloudSync.schedulePush()}
function repairCanonicalConfig(){
  // V20.8: không để dữ liệu Cloud rỗng ghi đè bộ cấu hình Excel gốc.
  // Đây là lớp tự phục hồi cho các bản đã lỡ bị đồng bộ catalog/rates = [].
  const def=DEFAULT_DATA;
  if(!Array.isArray(D.catalog)||D.catalog.length===0){D.catalog=structuredClone(def.catalog)}
  if(!Array.isArray(D.rates)||D.rates.length===0){D.rates=structuredClone(def.rates)}
  if(!Array.isArray(D.employees)||D.employees.length===0){D.employees=structuredClone(def.employees)}
  if(!D.opening||typeof D.opening!=='object')D.opening=structuredClone(def.opening||{});
  if(!Array.isArray(D.daily))D.daily=[];
  if(!Array.isArray(D.packerRecords))D.packerRecords=[];
  D.catalog.forEach((p,i)=>{if(D.opening[i]==null)D.opening[i]=0});
  D.daily.forEach(x=>{if(!x.counts)x.counts={};if(!Array.isArray(x.adjustments))x.adjustments=[]});
}
function load(){try{const x=JSON.parse(localStorage.getItem('quanlycay')||'null');D=x||structuredClone(DEFAULT_DATA)}catch(e){D=structuredClone(DEFAULT_DATA)}repairCanonicalConfig()}
function activeCatalog(){return D.catalog.map((p,i)=>({p,i})).filter(o=>!o.p.deleted)}
function employees(){return D.employees||[]}
function rate(size){const r=(D.rates||[]).find(x=>String(x.size).trim().toLowerCase()===String(size??'').trim().toLowerCase());return r?Number(r.rate)||0:0}
function rowsByName(name){return activeCatalog().filter(o=>String(o.p.name||'').trim()===String(name||'').trim())}
function plantNames(){return [...new Set(activeCatalog().map(o=>String(o.p.name||'').trim()).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'vi'))}
function rec(date,pi,create=false){let x=D.daily.find(x=>x.date===date&&Number(x.plantIndex)===Number(pi));if(!x&&create){x={date,plantIndex:Number(pi),in:0,counts:{}};D.daily.push(x)}return x}
function outOf(x){return Object.values(x?.counts||{}).reduce((a,b)=>a+(Number(b)||0),0)}
function adjustmentsOf(x,e){return (x?.adjustments||[]).filter(a=>a&&a.employee===e).reduce((s,a)=>s+(Number(a.amount)||0),0)}
function employeePay(x,e){const p=D.catalog[Number(x?.plantIndex)];return (Number(x?.counts?.[e])||0)*rate(p?.size)+adjustmentsOf(x,e)}
function imageSrc(p){return p?.image||'logo.png'}
function payOf(x){return employees().reduce((s,e)=>s+employeePay(x,e),0)}
function opening(pi,date){let v=Number(D.opening?.[pi]||0);for(const x of D.daily){if(x.date<date&&Number(x.plantIndex)===Number(pi))v+=(Number(x.in)||0)-outOf(x)}return v}
function closing(pi,date){const x=rec(date,pi);return opening(pi,date)+(Number(x?.in)||0)-outOf(x)}
function totalStock(date){return activeCatalog().reduce((s,o)=>s+Math.max(0,closing(o.i,date)),0)}
function totalPay(a,b){return D.daily.filter(x=>x.date>=a&&x.date<=b).reduce((s,x)=>s+payOf(x),0)}
function dayEntries(date){return D.daily.filter(x=>x.date===date&&((Number(x.in)||0)>0||outOf(x)>0)).sort((a,b)=>Number(a.plantIndex)-Number(b.plantIndex))}
function go(tab,mode){document.querySelectorAll('.bottomnav button').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x.id===tab));if(tab==='day'){if(mode)setEntryMode(mode);renderDay()}if(tab==='stock'){if(!$('stockDate').value)$('stockDate').value=$('dDate').value||START;renderStock()}if(tab==='summary')renderReport();if(tab==='control')renderControls();window.scrollTo(0,0)}
function shiftDay(n){const input=$('dDate');let d=dateObj(input.value||START);d.setDate(d.getDate()+n);let s=fmt(d);if(s<START)s=START;if(s>END)s=END;input.value=s;renderDay()}
function init(){
 const today=fmt(new Date());const start=today>=START&&today<=END?today:START;$('dDate').value=start;$('stockDate').value=start;$('rFrom').value=start;$('rTo').value=start;$('homeDateBadge').textContent=fmtDMY(start);syncReportDateLimits();renderAll();
}
function renderAll(){const d=$('dDate').value||START;$('sPlants').textContent=activeCatalog().length;$('sEmp').textContent=employees().length;$('sStock').textContent=Math.round(totalStock(d));$('homeDateBadge').textContent=fmtDMY(d);updateOrderNotificationUI(orderNotificationState.pending,orderNotificationState.completed);if($('stockDate')){$('stockDate').value=$('stockDate').value||d;$('stockDateBadge').textContent=fmtDMY($('stockDate').value||d)}renderCycles();renderDay();renderStock();renderReport();renderControls()}
function syncPackSelection(){
  const plantName=String(selected.plantName||'').trim();
  const rows=plantName?rowsByName(plantName):[];
  if(selected.sizeIndex!=null&&!rows.some(o=>Number(o.i)===Number(selected.sizeIndex))) selected.sizeIndex=null;
  const p=selected.sizeIndex!=null?D.catalog[Number(selected.sizeIndex)]:null;
  const emp=employees()[Number(selected.empIndex)];
  if($('plantValue'))$('plantValue').textContent=plantName||'Chọn cây';
  if($('sizeValue'))$('sizeValue').textContent=p?(p.size||'Không ghi kích thước'):'Chọn kích thước';
  if($('empValue'))$('empValue').textContent=emp||'Chọn nhân viên';
  const qty=Math.max(0,Math.floor(Number($('eQty')?.value)||0));
  const combo=Math.max(1,Number($('adminPackCombo')?.value)||1);
  const valid=!!p&&!!emp&&qty>0;
  if($('entryInfo')){
    $('entryInfo').innerHTML=valid
      ? `👤 ${esc(emp)} · ${Math.round(qty)} cây × ${money(rate(p.size))}/cây = <b>${money(qty*rate(p.size))}</b>${combo>1?` · Quy cách ${combo} cây/combo`:''}`
      : 'Chọn cây, kích thước và nhân viên để xem tiền công.';
  }
  if($('sizeSelector'))$('sizeSelector').disabled=!rows.length;
  if($('adminPackSubmitBtn'))$('adminPackSubmitBtn').disabled=!(valid&&!!pendingAdminPackPhoto&&!isPacker());
}
function syncInSelection(){
  const plantName=String(selected.inPlantName||'').trim();
  const rows=plantName?rowsByName(plantName):[];
  if(selected.inSizeIndex!=null&&!rows.some(o=>Number(o.i)===Number(selected.inSizeIndex))) selected.inSizeIndex=null;
  const p=selected.inSizeIndex!=null?D.catalog[Number(selected.inSizeIndex)]:null;
  if($('inPlantValue'))$('inPlantValue').textContent=plantName||'Chọn cây';
  if($('inSizeValue'))$('inSizeValue').textContent=p?(p.size||'Không ghi kích thước'):'Chọn kích thước';
  if($('inSizeSelector'))$('inSizeSelector').disabled=!rows.length;
  const qty=Math.max(0,Math.floor(Number($('inQty')?.value)||0));
  if($('inInfo')){
    if(p){
      const date=$('dDate')?.value||START;
      const current=Math.max(0,closing(Number(selected.inSizeIndex),date));
      $('inInfo').innerHTML=`📦 ${esc(p.name)} · ${esc(p.size||'Không ghi kích thước')} · Tồn hiện tại: <b>${Math.round(current)}</b>${qty>0?` · Sau khi nhập ${Math.round(qty)} cây: <b>${Math.round(current+qty)}</b>`:''}`;
    }else $('inInfo').textContent='Chọn cây và kích thước để xem tồn kho.';
  }
}
function openPicker(mode){
  if((mode==='size'||mode==='inSize') && !(mode==='size'?String(selected.plantName||'').trim():String(selected.inPlantName||'').trim())){toast('Hãy chọn cây trước');return}
  pickerMode=mode;
  const titles={plant:'Chọn cây',size:'Chọn kích thước',emp:'Chọn nhân viên',inPlant:'Chọn cây nhập kho',inSize:'Chọn kích thước nhập kho'};
  if($('pickerTitle'))$('pickerTitle').textContent=titles[mode]||'Chọn';
  if($('pickerSearch'))$('pickerSearch').value='';
  $('picker')?.classList.add('show');
  renderPicker();
  setTimeout(()=>$('pickerSearch')?.focus(),60);
}
function closePicker(){ $('picker')?.classList.remove('show'); pickerMode=''; }
function renderPicker(){
  const box=$('optionList');if(!box)return;
  const q=String($('pickerSearch')?.value||'').trim().toLowerCase();
  let opts=[];
  if(pickerMode==='plant'||pickerMode==='inPlant'){
    opts=plantNames().map(name=>({value:name,label:name}));
  }else if(pickerMode==='size'||pickerMode==='inSize'){
    const name=pickerMode==='size'?selected.plantName:selected.inPlantName;
    opts=rowsByName(name).map(o=>({value:o.i,label:o.p.size||'Không ghi kích thước',sub:o.p.name||''}));
  }else if(pickerMode==='emp'){
    opts=employees().map((e,i)=>({value:i,label:e}));
  }
  opts=opts.filter(o=>!q||`${o.label} ${o.sub||''}`.toLowerCase().includes(q));
  if(!opts.length){box.innerHTML='<div class="empty">Không tìm thấy lựa chọn phù hợp.</div>';return}
  box.innerHTML=opts.map((o,idx)=>`<button type="button" class="option" data-picker-index="${idx}"><div><b>${esc(o.label)}</b>${o.sub?`<div class="tiny muted">${esc(o.sub)}</div>`:''}</div></button>`).join('');
  box.querySelectorAll("[data-picker-index]").forEach(btn=>btn.addEventListener("click",()=>choosePickerOption(opts[Number(btn.dataset.pickerIndex)]?.value)));
}
function choosePickerOption(value){
  // Chọn từ danh sách phải luôn cập nhật trạng thái trước khi đóng cửa sổ.
  // Kiểm tra giá trị để tránh trường hợp danh sách có nhưng lựa chọn không được ghi nhận.
  try{
    if(pickerMode==='plant'){
      const name=String(value||'').trim();
      if(!name||!plantNames().includes(name)){toast('Không tìm thấy loại cây này');return}
      selected.plantName=name;selected.sizeIndex=null;syncPackSelection();
    }else if(pickerMode==='size'){
      const i=Number(value),ok=Number.isInteger(i)&&rowsByName(selected.plantName).some(o=>o.i===i);
      if(!ok){toast('Kích thước không hợp lệ');return}
      selected.sizeIndex=i;syncPackSelection();
    }else if(pickerMode==='emp'){
      const i=Number(value),ok=Number.isInteger(i)&&!!employees()[i];
      if(!ok){toast('Nhân viên không hợp lệ');return}
      selected.empIndex=i;syncPackSelection();
    }else if(pickerMode==='inPlant'){
      const name=String(value||'').trim();
      if(!name||!plantNames().includes(name)){toast('Không tìm thấy loại cây này');return}
      selected.inPlantName=name;selected.inSizeIndex=null;syncInSelection();
    }else if(pickerMode==='inSize'){
      const i=Number(value),ok=Number.isInteger(i)&&rowsByName(selected.inPlantName).some(o=>o.i===i);
      if(!ok){toast('Kích thước không hợp lệ');return}
      selected.inSizeIndex=i;syncInSelection();
    }
    closePicker();
  }catch(e){console.error('choosePickerOption',e);toast('Không thể chọn mục này');}
}
function updatePackInfo(){syncPackSelection()}
function updateInInfo(){syncInSelection()}
function currentPackerName(){
  const s=CloudSync?.state?.();
  return String(s?.profile?.employeeName||s?.profile?.displayName||s?.user?.email||'Nhân viên');
}
function rebuildPackerDaily(){
  // Đơn phân công hoàn thành được lưu riêng trong packingOrders/packerRecords.
  // Không chép chúng vào D.daily để tránh cộng sản lượng hai lần.
  if(!Array.isArray(D.packerRecords))D.packerRecords=[];
}
function deletePlant(i){
  const p=D.catalog[Number(i)];if(!p)return;
  if(!confirm(`Ẩn cây "${p.name||''}${p.size?' · '+p.size:''}" khỏi danh mục? Dữ liệu lịch sử sẽ được giữ nguyên.`))return;
  p.deleted=true;save();closeEdit();renderAll();toast('Đã ẩn cây khỏi danh mục; lịch sử vẫn được giữ.');
}
function installPermissionGuards(){
  if(window.__rollPermissionGuardsInstalled)return;
  window.__rollPermissionGuardsInstalled=true;
  document.addEventListener('click',ev=>{
    const btn=ev.target?.closest?.('[data-remove-pack]');
    if(!btn)return;
    ev.preventDefault();ev.stopPropagation();
    const s=CloudSync?.state?.();
    if(!s?.user||!CloudSync.can('pack')){toast('Tài khoản này không có quyền xóa bản ghi đóng hàng');return}
    const date=btn.dataset.date,pi=Number(btn.dataset.pi),emp=decodeURIComponent(btn.dataset.emp||'');
    removePack(date,pi,emp);
  },true);
}
function openCloudSync(){renderCloudBody();$('cloudModal')?.classList.add('show')}
function closeCloudSync(){$('cloudModal')?.classList.remove('show')}
async function syncNow(){
  try{
    const s=CloudSync.state();
    if(!s.user){showLoginGate();return false}
    if(s.role==='packer'){
      await s.loadPackerRecords();
    }else{
      const ok=await CloudSync.pushNow();
      if(!ok && !CloudSync.can('report')) return false;
      if(s.role==='admin')await s.loadAllPackerRecords();
    }
    renderCloudBody();renderAll();
    toast('☁️ Đồng bộ thành công');
    return true;
  }catch(e){console.error('syncNow',e);toast('Lỗi Cloud: '+(e?.message||e?.code||'Không xác định'));return false}
}

function setEntryMode(m){
  entryMode=m==='in'?'in':'pack';
  const packBtn=$('modePack'),inBtn=$('modeIn'),packForm=$('packForm'),inForm=$('inForm');
  if(packBtn)packBtn.classList.toggle('active',entryMode==='pack');
  if(inBtn)inBtn.classList.toggle('active',entryMode==='in');
  if(packForm){packForm.classList.remove('hidden');packForm.style.display=entryMode==='pack'?'block':'none';}
  if(inForm){inForm.classList.remove('hidden');inForm.style.display=entryMode==='in'?'block':'none';}
  if(entryMode==='pack'){
    if(!selected.plantName)selected.plantName=plantNames()[0]||'';
    if(selected.empIndex>=employees().length)selected.empIndex=0;
    syncPackSelection();
  }else{
    if(!selected.inPlantName)selected.inPlantName=plantNames()[0]||'';
    syncInSelection();
  }
}
function renderPackerOrders(){
  if(!isPacker())return;
  const rows=(D.packingOrders||[]).sort((a,b)=>Number(b.createdAtMs||0)-Number(a.createdAtMs||0));
  const pending=rows.filter(r=>r.status!=='completed');
  const done=rows.filter(r=>r.status==='completed');
  const n=$('packerOrderNotice');
  if(n){n.classList.toggle('hidden',!pending.length);n.innerHTML=pending.length?`🔔 Bạn có <b>${pending.length}</b> đơn cần đóng. Hãy chọn từng đơn, đóng đúng quy cách rồi chụp ảnh hoàn thành.`:''}
  const box=$('packerOrders');if(!box)return;
  let html='';
  if(!rows.length)html='<div class="card empty">Chưa có đơn được Admin phân công.</div>';
  rows.forEach(r=>{const done=r.status==='completed';const selected=r.id===selectedOrderId;const pay=(Number(r.packSize)||0)*rate(r.size);const img=r.completionImage?`<img src="${r.completionImage}" onclick="openImageSrc(this.src,'Ảnh hoàn thành đơn hàng')" alt="">`:'';html+=`<div class="order-card ${done?'done':'pending'}" style="${selected?'border:2px solid #0ca566':''}"><div class="order-head"><div><div class="order-title">🌿 ${esc(r.plantName||'Cây')} · ${esc(r.size||'')}</div><div class="order-meta">📦 Đơn #${esc(r.orderNo||r.id.slice(-6))} · ${esc(r.note||'')}</div><div class="order-pack">Combo ${Number(r.packSize)||0} cây · Công ${money(pay)}</div></div><span class="order-badge ${done?'done':''}">${done?'✅ Đã hoàn thành':'🔔 Chờ đóng'}</span></div>${done?`<div class="order-proof">${img}<div><b>Đã có ảnh hoàn thành</b><div class="tiny muted">${r.completedAtMs?new Date(r.completedAtMs).toLocaleString('vi-VN'):''}</div></div></div>`:`<button class="secondary" style="margin-top:9px;width:100%" onclick="selectAssignedOrder('${r.id}')">${selected?'Đã chọn đơn này':'👉 NHẬN / ĐÓNG ĐƠN NÀY'}</button>`}</div>`});
  box.innerHTML=html;
  const panel=$('packerProofPanel');if(panel)panel.classList.toggle('hidden',!selectedOrderId||!pending.some(r=>r.id===selectedOrderId));
}
function selectAssignedOrder(id){const r=(D.packingOrders||[]).find(x=>x.id===id);if(!r||r.status==='completed')return;selectedOrderId=id;pendingPackPhoto='';resetPackProof();selectedOrderId=id;renderPackerOrders();$('packProofStatus').textContent=`Đơn ${r.orderNo||r.id.slice(-6)} · Combo ${r.packSize} cây. Chụp ảnh sau khi đóng xong.`;toast('Đã chọn đơn cần đóng')}
function readPackProofImage(ev){
  const f=ev.target.files?.[0];if(!f)return;
  if(!String(f.type||'').startsWith('image/')){toast('Chỉ được chụp ảnh');ev.target.value='';return}
  const reader=new FileReader();reader.onload=()=>{const img=new Image();img.onload=()=>{const max=900,scale=Math.min(1,max/Math.max(img.width,img.height)),c=document.createElement('canvas');c.width=Math.max(1,Math.round(img.width*scale));c.height=Math.max(1,Math.round(img.height*scale));const ctx=c.getContext('2d');ctx.drawImage(img,0,0,c.width,c.height);pendingPackPhoto=c.toDataURL('image/jpeg',.76);const pv=$('packProofPreview');pv.classList.remove('hidden');pv.innerHTML=`<img src="${pendingPackPhoto}" onclick="openImageSrc(this.src,'Ảnh hoàn thành đơn hàng')" alt="Ảnh hoàn thành"><div><b>✅ Đã chụp ảnh</b><div class="tiny muted">Chỉ sau khi có ảnh mới được xác nhận hoàn thành.</div></div>`;$('packProofStatus').textContent='Ảnh hợp lệ. Có thể xác nhận hoàn thành đơn.';if($('packSubmitBtn'))$('packSubmitBtn').disabled=false};img.src=reader.result};reader.readAsDataURL(f);ev.target.value=''
}
function resetPackProof(){pendingPackPhoto='';packerEditingId=null;if($('packSubmitBtn')){$('packSubmitBtn').disabled=true;$('packSubmitBtn').textContent='🔒 XÁC NHẬN HOÀN THÀNH ĐƠN'}if($('packProofStatus'))$('packProofStatus').textContent='Chưa chọn đơn hoặc chưa chụp ảnh.';if($('packProofPreview')){$('packProofPreview').classList.add('hidden');$('packProofPreview').innerHTML=''}}
async function completeAssignedOrder(){if(!isPacker())return;if(!selectedOrderId){toast('Hãy chọn đơn cần đóng');return}if(!pendingPackPhoto){toast('📷 Phải chụp ảnh hoàn thành trước khi ghi nhận');return}try{const r=await CloudSync.state().completePackingOrder(selectedOrderId,pendingPackPhoto);const local=(D.packingOrders||[]).find(x=>x.id===selectedOrderId);if(local)Object.assign(local,r);D.packerRecords.unshift({id:r.id,...r,uid:CloudSync.state().user.uid,employee:currentPackerName(),qty:Number(r.packSize)||0,plantIndex:Number(r.plantIndex),date:r.date||String(r.createdAtDate||'')});rebuildPackerDaily();localSaveOnly();selectedOrderId=null;resetPackProof();renderAll();toast('✅ Đã hoàn thành đơn. Tiền công đã được ghi nhận');}catch(e){toast(e?.message||'Không thể hoàn thành đơn')}}
function readPackProofImage(ev){
  const f=ev.target.files?.[0];if(!f)return;
  if(!String(f.type||'').startsWith('image/')){toast('Chỉ được chụp ảnh');ev.target.value='';return}
  const reader=new FileReader();reader.onload=()=>{const img=new Image();img.onload=()=>{const max=900,scale=Math.min(1,max/Math.max(img.width,img.height)),c=document.createElement('canvas');c.width=Math.max(1,Math.round(img.width*scale));c.height=Math.max(1,Math.round(img.height*scale));const ctx=c.getContext('2d');ctx.drawImage(img,0,0,c.width,c.height);pendingPackPhoto=c.toDataURL('image/jpeg',.76);const pv=$('packProofPreview');pv.classList.remove('hidden');pv.innerHTML=`<img src="${pendingPackPhoto}" onclick="openImageSrc(this.src,'Ảnh bằng chứng đóng hàng')" alt="Ảnh bằng chứng"><div><b>✅ Đã chụp ảnh</b><div class="tiny muted">Ảnh sẽ được lưu cùng bản ghi đóng hàng.</div></div>`;$('packProofStatus').textContent='Ảnh hợp lệ. Có thể ghi nhận đóng hàng.';if($('packSubmitBtn'))$('packSubmitBtn').disabled=false};img.src=reader.result};reader.readAsDataURL(f);ev.target.value=''
}
function resetPackProof(){pendingPackPhoto='';packerEditingId=null;if($('packSubmitBtn')){$('packSubmitBtn').disabled=isPacker();$('packSubmitBtn').textContent='🔒 GHI NHẬN ĐÓNG HÀNG'}if($('packProofStatus'))$('packProofStatus').textContent='Chưa chụp ảnh. Chỉ được chụp trực tiếp bằng camera.';if($('packProofPreview')){$('packProofPreview').classList.add('hidden');$('packProofPreview').innerHTML=''}if($('packSubmitBtn'))$('packSubmitBtn').disabled=true}
async function addPackerEntry(){toast('Nhân viên không nhập số cây. Hãy chọn đơn Admin phân công và chụp ảnh hoàn thành.')}
function startPackerEdit(id){toast('Bản ghi đóng hàng theo đơn đã hoàn thành, không sửa từ màn hình nhân viên.')}
async function deletePackerRecord(id){toast('Nhân viên không được xóa đơn đã hoàn thành.')}
let pendingAdminPackPhoto='';
function readAdminPackProofImage(ev){
  const f=ev.target.files?.[0];if(!f)return;
  if(!String(f.type||'').startsWith('image/')){toast('Chỉ được chụp ảnh');ev.target.value='';return}
  const reader=new FileReader();reader.onload=()=>{const img=new Image();img.onload=()=>{const max=900,scale=Math.min(1,max/Math.max(img.width,img.height)),c=document.createElement('canvas');c.width=Math.max(1,Math.round(img.width*scale));c.height=Math.max(1,Math.round(img.height*scale));const ctx=c.getContext('2d');ctx.drawImage(img,0,0,c.width,c.height);pendingAdminPackPhoto=c.toDataURL('image/jpeg',.76);const pv=$('adminPackProofPreview');pv.classList.remove('hidden');pv.innerHTML=`<img src="${pendingAdminPackPhoto}" onclick="openImageSrc(this.src,'Ảnh bằng chứng đóng hàng')" alt="Ảnh bằng chứng"><div><b>✅ Đã chụp ảnh</b><div class="tiny muted">Có thể ghi nhận đóng hàng.</div></div>`;$('adminPackProofStatus').textContent='Ảnh hợp lệ. Có thể ghi nhận đóng hàng.';$('adminPackSubmitBtn').disabled=false};img.src=reader.result};reader.readAsDataURL(f);ev.target.value=''
}
function resetAdminPackProof(){pendingAdminPackPhoto='';if($('adminPackProofStatus'))$('adminPackProofStatus').textContent='Chưa chụp ảnh. Chỉ được chụp trực tiếp bằng camera.';if($('adminPackProofPreview')){$('adminPackProofPreview').classList.add('hidden');$('adminPackProofPreview').innerHTML=''}if($('adminPackSubmitBtn'))$('adminPackSubmitBtn').disabled=true}
function addPackEntry(){if(!CloudSync.can('pack')){toast('Tài khoản này không có quyền đóng hàng');return}if(isPacker())return addPackerEntry();const date=$('dDate').value||START,pi=Number(selected.sizeIndex),ei=Number(selected.empIndex),qty=Math.floor(Number($('eQty').value)||0),combo=Math.max(1,Number($('adminPackCombo')?.value)||1);if(!Number.isInteger(pi)||!D.catalog[pi]||!employees()[ei]||qty<=0){toast('Vui lòng chọn đủ cây, kích thước, nhân viên và số cây');return}if(!pendingAdminPackPhoto){toast('📷 Vui lòng chụp ảnh bằng chứng trước khi ghi nhận');return}const e=employees()[ei],x=rec(date,pi,true);x.counts=x.counts||{};x.counts[e]=(Number(x.counts[e])||0)+qty;x.comboSize=x.comboSize||{};x.comboSize[e]=combo;x.proofImages=x.proofImages||{};x.proofImages[e]=pendingAdminPackPhoto;save();$('eQty').value=1;if($('adminPackCombo'))$('adminPackCombo').value='1';resetAdminPackProof();renderAll();toast(`Đã ghi ${qty} cây · ${e}${combo>1?' · Combo '+combo+' cây':''}`)}
function addInEntry(){if(!CloudSync.can('in')){toast('Tài khoản này không có quyền nhập kho');return}const date=$('dDate').value||START,pi=Number(selected.inSizeIndex),qty=Math.floor(Number($('inQty').value)||0);if(!Number.isInteger(pi)||!D.catalog[pi]||qty<=0){toast('Vui lòng chọn cây, kích thước và số lượng');return}const x=rec(date,pi,true);x.in=(Number(x.in)||0)+qty;save();$('inQty').value=1;renderAll();toast(`Đã ghi nhập ${qty} cây`)}
function removePack(date,pi,e){if(!CloudSync.can('pack')){toast('Tài khoản này không có quyền xóa bản ghi đóng hàng');return}const x=rec(date,pi);const q=Number(x?.counts?.[e])||0;if(!x||q<=0){toast('Không tìm thấy số cây cần xóa');return}delete x.counts[e];if(x.adjustments)x.adjustments=x.adjustments.filter(a=>a.employee!==e);cleanupRec(x);save();renderAll();toast(`Đã xóa ${Math.round(q)} cây của ${e}`)}
function removeIn(date,pi,qty){if(!CloudSync.can('in')){toast('Tài khoản này không có quyền hoàn tác nhập kho');return}const x=rec(date,pi);if(!x)return;x.in=Math.max(0,(Number(x.in)||0)-Number(qty));cleanupRec(x);save();renderAll();toast('Đã hoàn tác nhập kho')}
function cleanupRec(x){if(!(Number(x.in)||0)&&!outOf(x)){const i=D.daily.indexOf(x);if(i>=0)D.daily.splice(i,1)}}
function renderPackerDay(){
  renderPackerOrders();
  const date=$('dDate').value||START;const rows=(D.packerRecords||[]).filter(r=>r.date===date);const total=rows.reduce((s,r)=>s+(Number(r.qty)||0),0);$('dayIn').textContent='—';$('dayOut').textContent=Math.round(total);$('dayPay').textContent=money(rows.reduce((s,r)=>s+(Number(r.qty)||0)*rate(r.size),0));$('dayTotalBadge').textContent=`${Math.round(total)} cây đã hoàn thành`;
  let html='';if(!rows.length)html=`<div class="card empty">Chưa có đơn hoàn thành trong ngày này.</div>`;rows.forEach(r=>{const img=r.image?`<img class="pack-record-photo" src="${r.image}" onclick="openImageSrc(this.src,'Ảnh hoàn thành đơn hàng')" alt="">`:'';html+=`<div class="card"><div class="section-title"><div class="plant-row">${img}<div><h3>${esc(r.plantName||'Cây')}</h3><div class="tiny muted">${esc(r.size||'')} · Combo ${Math.round(r.qty||0)} cây · ${money((Number(r.qty)||0)*rate(r.size))}</div></div></div><span class="pack-lock locked">✅ Đã hoàn thành</span></div></div>`});$('dayBody').innerHTML=html;updatePackInfo();updateInInfo();}
function isPacker(){
  try{
    return !!(window.CloudSync && CloudSync.state && CloudSync.state().role==='packer');
  }catch(e){
    return false;
  }
}
function isAdminUser(){return !!(window.CloudSync&&CloudSync.state().role==='admin')}
function renderAdminPackerRecords(date){
  if(!isAdminUser())return;const rows=(D.packerRecords||[]).filter(r=>r.date===date);if(!rows.length)return;let html=`<div class="card" style="border:2px solid #cfe8da"><div class="section-title"><h3>👑 Bản ghi đóng hàng của nhân viên</h3><span class="badge">Admin toàn quyền</span></div>`;
  rows.forEach(r=>{const img=r.image?`<img class="pack-record-photo" src="${r.image}" onclick="openImageSrc(this.src,'Ảnh bằng chứng · ${esc(r.employee||'')}')" alt="">`:'';html+=`<div class="entry"><div class="plant-row">${img}<div><div class="name">${esc(r.employee||'Nhân viên')} · ${esc(r.plantName||'')}</div><div class="meta">${esc(r.size||'')} · ${Math.round(r.qty||0)} cây · ${money((Number(r.qty)||0)*rate(r.size))}</div></div></div><div class="pack-record-actions"><button class="secondary" onclick="adminEditPackerQty('${r.id}')">Sửa SL</button><button class="remove" onclick="adminDeletePacker('${r.id}')">Xóa</button></div></div>`});html+='</div>';$('dayBody').insertAdjacentHTML('beforeend',html);
}
async function adminEditPackerQty(id){const r=(D.packerRecords||[]).find(x=>x.id===id);if(!r)return;const q=prompt('Nhập số cây mới cho bản ghi của '+(r.employee||'nhân viên'),String(Math.round(r.qty||0)));if(q===null)return;const qty=Math.floor(Number(q)||0);if(qty<=0){toast('Số lượng không hợp lệ');return}try{await CloudSync.adminUpdatePackerRecord(id,{qty});r.qty=qty;rebuildPackerDaily();localSaveOnly();renderAll();toast('Admin đã cập nhật số lượng')}catch(e){toast(e?.message||'Không thể cập nhật bản ghi')}}
async function adminDeletePacker(id){if(!confirm('Admin xóa bản ghi đóng hàng này?'))return;try{await CloudSync.adminDeletePackerRecord(id);D.packerRecords=D.packerRecords.filter(x=>x.id!==id);renderAll();toast('Admin đã xóa bản ghi')}catch(e){toast(e?.message||'Không thể xóa bản ghi')}}
function mergePackerTotalsIntoReport(by,from,to){let out=0,pay=0;(D.packerRecords||[]).filter(r=>r.date>=from&&r.date<=to).forEach(r=>{const e=r.employee||'Nhân viên';if(!by[e])by[e]={qty:0,pay:0};const q=Number(r.qty)||0;by[e].qty+=q;by[e].pay+=q*rate(r.size);out+=q;pay+=q*rate(r.size)});return {out,pay}}
function renderDay(){if(!$('dDate').value)$('dDate').value=START;if(isPacker()){renderPackerDay();return}setEntryMode(entryMode);const date=$('dDate').value;const allEntries=dayEntries(date);const entries=allEntries.filter(x=>entryMode==='in'?Number(x.in)>0:outOf(x)>0);let totalIn=0,totalOut=0,totalPay=0;allEntries.forEach(x=>{totalIn+=Number(x.in)||0;totalOut+=outOf(x);totalPay+=payOf(x)});$('dayIn').textContent=Math.round(totalIn);$('dayOut').textContent=Math.round(totalOut);$('dayPay').textContent=money(totalPay);$('dayTotalBadge').textContent=entryMode==='in'?`${Math.round(totalIn)} cây nhập`:`${Math.round(totalOut)} cây đóng`;
 let html='';if(!entries.length)html=`<div class="card empty">Chưa có dữ liệu ${entryMode==='in'?'nhập kho':'đóng hàng'} trong ngày này.<br><span class="tiny">Hãy chọn ${entryMode==='in'?'Nhập kho':'Đóng hàng'} ở phía trên.</span></div>`;else entries.forEach(x=>{const p=D.catalog[x.plantIndex];if(!p)return;const img=`<img class="plant-thumb plant-photo-click" src="${imageSrc(p)}" onerror="this.src='logo.png'" onclick="openPlantImage(${x.plantIndex})" alt="" title="Nhấn để phóng to">`;html+=`<div class="card"><div class="section-title"><div class="plant-row"><div>${img}</div><div><h3>${esc(p.name)}</h3><div class="tiny muted">${esc(p.size||'Không ghi kích thước')} · Tồn cuối: <b>${Math.round(closing(x.plantIndex,date))}</b></div></div></div><span class="badge">${entryMode==='in'?Math.round(x.in)+' nhập':Math.round(outOf(x))+' đóng'}</span></div>`;if(entryMode==='in'){html+=`<div class="entry"><div><div class="name">📦 Nhập kho</div><div class="meta">+${Math.round(x.in)} cây</div></div><div><button class="remove" onclick="removeIn('${date}',${x.plantIndex},${Number(x.in)})">− Hoàn tác</button></div></div>`}else{Object.entries(x.counts||{}).forEach(([emp,q])=>{const wage=rate(p.size),adj=adjustmentsOf(x,emp);html+=`<div class="entry"><div><div class="name">${esc(emp)}</div><div class="meta">${Math.round(q)} cây × ${money(wage)}/cây${adj?` · Điều chỉnh ${adj>0?'+':''}${money(adj)}`:''}</div></div><div style="display:flex;align-items:center;gap:5px;flex-wrap:wrap;justify-content:flex-end"><div class="amount">${money(Number(q)*wage+adj)}</div><button type="button" class="adjust" onclick="openAdjustMoney('${date}',${x.plantIndex},'${encodeURIComponent(emp)}')">± Tiền</button><button type="button" class="remove" data-remove-pack data-date="${date}" data-pi="${x.plantIndex}" data-emp="${encodeURIComponent(emp)}" aria-label="Xóa số cây đã ghi">− Xóa</button></div></div>`})}html+=`<div class="stock" style="margin-top:9px"><div class="box"><span>Đầu ngày</span><b>${Math.round(opening(x.plantIndex,date))}</b></div><div class="box closing"><span>Tồn cuối</span><b>${Math.round(closing(x.plantIndex,date))}</b></div></div></div>`});$('dayBody').innerHTML=html;renderAdminPackerRecords(date);if(isAdminUser()){const pr=(D.packerRecords||[]).filter(r=>r.date===date);totalOut+=pr.reduce((s,r)=>s+(Number(r.qty)||0),0);totalPay+=pr.reduce((s,r)=>s+(Number(r.qty)||0)*rate(r.size)+(Number(r.payAdjustment)||0),0);$('dayOut').textContent=Math.round(totalOut);$('dayPay').textContent=money(totalPay);$('dayTotalBadge').textContent=entryMode==='in'?`${Math.round(totalIn)} cây nhập`:`${Math.round(totalOut)} cây đóng`;}updatePackInfo();updateInInfo()}
function renderCycles(){const ref=$('dDate')?.value||START;let idx=Math.max(0,Math.floor(daysBetween(START,ref)/7));let html='';for(let k=Math.max(0,idx-5);k<=idx;k++){let s=addDays(START,k*7),e=addDays(s,6);if(s>END)break;if(e>END)e=END;let vals=employees().map(emp=>D.daily.filter(x=>x.date>=s&&x.date<=e).reduce((sum,x)=>sum+employeePay(x,emp),0));html+=`<div class="entry"><div><div class="name">Kỳ ${String(k+1).padStart(2,'0')}</div><div class="meta">${fmtDMY(s)} – ${fmtDMY(e)}</div></div><div class="amount">${money(vals.reduce((a,b)=>a+b,0))}</div></div>`}$('cycles').innerHTML=html||'<div class="empty">Chưa có dữ liệu.</div>'}
function shiftStockDay(n){const input=$('stockDate');let d=dateObj(input.value||START);d.setDate(d.getDate()+n);let s=fmt(d);if(s<START)s=START;if(s>END)s=END;input.value=s;renderStock()}
function clearStockSearch(){if($('stockSearch'))$('stockSearch').value='';renderStock()}
function setStockFilter(f){stockFilter=f;document.querySelectorAll('[data-stock-filter]').forEach(b=>b.classList.toggle('active',b.dataset.stockFilter===f));renderStock()}
function renderStock(){
 const date=$('stockDate')?.value||$('dDate').value||START;
 if($('stockDateBadge'))$('stockDateBadge').textContent=fmtDMY(date);
 const allRows=activeCatalog().map(o=>{const x=rec(date,o.i);return {o,in:Number(x?.in)||0,out:outOf(x),open:opening(o.i,date),close:closing(o.i,date)}});
 const totalIn=allRows.reduce((s,r)=>s+r.in,0),totalOut=allRows.reduce((s,r)=>s+r.out,0),totalClose=allRows.reduce((s,r)=>s+Math.max(0,r.close),0);
 const q=($('stockSearch')?.value||'').trim().toLowerCase();
 const rows=allRows.filter(r=>{
   const hay=`${r.o.p.name||''} ${r.o.p.size||''}`.toLowerCase();
   const match=!q||hay.includes(q); const c=Math.max(0,r.close);
   const status=stockFilter==='in'?c>0:stockFilter==='low'?c>0&&c<=10:stockFilter==='zero'?c<=0:true;
   return match&&status;
 }).sort((a,b)=>String(a.o.p.name||'').localeCompare(String(b.o.p.name||''),'vi')||String(a.o.p.size||'').localeCompare(String(b.o.p.size||''),'vi'));
 if($('stockCount'))$('stockCount').textContent=`Hiển thị ${rows.length}/${allRows.length} cây/kích thước`;
 let html=`<div class="card"><div class="section-title"><h3>Tổng quan ngày ${fmtDMY(date)}</h3><span class="badge">${Math.round(totalClose)} cây tồn</span></div><div class="grid2"><div class="stat"><span>Đầu ngày</span><b>${Math.round(allRows.reduce((s,r)=>s+r.open,0))}</b></div><div class="stat"><span>Nhập kho</span><b>${Math.round(totalIn)}</b></div><div class="stat"><span>Đóng hàng</span><b>${Math.round(totalOut)}</b></div><div class="stat"><span>Tồn cuối</span><b>${Math.round(totalClose)}</b></div></div></div>`;
 html+=rows.map(r=>{const c=Math.max(0,r.close);const status=c<=0?'<span class="stock-status empty">HẾT</span>':c<=10?'<span class="stock-status low">SẮP HẾT</span>':'<span class="stock-status">CÒN HÀNG</span>';return `<div class="card stock-card"><div class="stock-head"><div class="stock-main"><img class="plant-thumb-lg plant-photo-click" src="${imageSrc(r.o.p)}" onerror="this.src='logo.png'" onclick="openPlantImage(${r.o.i})" alt="" title="Nhấn để phóng to"><div style="min-width:0"><div class="stock-title">${esc(r.o.p.name)}</div><div class="tiny muted">${esc(r.o.p.size||'Không ghi kích thước')}</div></div></div>${status}</div><div class="stock-grid"><div class="mini"><span>Đầu ngày</span><b>${Math.round(r.open)}</b></div><div class="mini"><span>Nhập</span><b>${Math.round(r.in)}</b></div><div class="mini"><span>Đóng</span><b>${Math.round(r.out)}</b></div><div class="mini closing"><span>Tồn cuối</span><b>${Math.round(r.close)}</b></div></div></div>`}).join('');
 if(!rows.length)html+=`<div class="card empty">Không tìm thấy cây phù hợp. Hãy thử tên cây, mã C7/C9/C10... hoặc chọn “Tất cả”.</div>`;
 $('stockBody').innerHTML=html;
}

function syncReportDateLimits(){const a=$('rFrom').value||START,b=$('rTo').value||a;if(a&&b&&a>b)$('rTo').value=a;if($('rFrom')){$('rFrom').min=START;$('rFrom').max=END}if($('rTo')){$('rTo').min=START;$('rTo').max=END}}
function onReportFromChange(){const a=$('rFrom').value||START;if(($('rTo').value||'')<a)$('rTo').value=a;syncReportDateLimits();renderReport()}
function onReportToChange(){const b=$('rTo').value||START;if(($('rFrom').value||'')>b)$('rFrom').value=b;syncReportDateLimits();renderReport()}
function renderPackerReport(from,to){
  const rows=(D.packerRecords||[]).filter(r=>r.date>=from&&r.date<=to);const qty=rows.reduce((s,r)=>s+(Number(r.qty)||0),0);const pay=rows.reduce((s,r)=>s+(Number(r.qty)||0)*rate(r.size),0);let by={};rows.forEach(r=>{const k=r.date;by[k]=(by[k]||0)+(Number(r.qty)||0)});
  let html=`<div class="card"><div class="section-title"><h3>📊 Báo cáo của tôi · ${fmtDMY(from)} – ${fmtDMY(to)}</h3></div><div class="grid2"><div class="stat"><span>Cây đã đóng</span><b>${Math.round(qty)}</b></div><div class="stat"><span>Tiền công</span><b>${money(pay)}</b></div></div></div><div class="card"><div class="section-title"><h3>Chi tiết từng ngày</h3></div>`;
  const dates=[];for(let d=from;d<=to;d=addDays(d,1))dates.push(d);dates.forEach(d=>{html+=`<div class="report-row"><div class="top"><span>${fmtDMY(d)}</span><span>${Math.round(by[d]||0)} cây</span></div><div class="tiny muted">${money(rows.filter(r=>r.date===d).reduce((s,r)=>s+(Number(r.qty)||0)*rate(r.size),0))}</div></div>`});html+='</div>';$('reportBody').innerHTML=html;
}
function renderReport(){syncReportDateLimits();const from=$('rFrom').value||START,to=$('rTo').value||from;if(isPacker()){renderPackerReport(from,to);return}const by={};employees().forEach(e=>by[e]={qty:0,pay:0});let totalIn=0,totalOut=0;D.daily.filter(x=>x.date>=from&&x.date<=to).forEach(x=>{totalIn+=Number(x.in)||0;totalOut+=outOf(x);employees().forEach(e=>{by[e].qty+=Number(x.counts?.[e])||0;by[e].pay+=employeePay(x,e)})});if(isAdminUser()){const extra=mergePackerTotalsIntoReport(by,from,to);totalOut+=extra.out}const totalPayDay=Object.values(by).reduce((s,x)=>s+x.pay,0);let html=`<div class="card"><div class="section-title"><h3>Tổng hợp ${fmtDMY(from)} – ${fmtDMY(to)}</h3></div><div class="grid2"><div class="stat"><span>Nhập kho</span><b>${Math.round(totalIn)}</b></div><div class="stat"><span>Đóng hàng</span><b>${Math.round(totalOut)}</b></div><div class="stat"><span>Tiền công</span><b>${money(totalPayDay)}</b></div><div class="stat"><span>Tồn cuối</span><b>${Math.round(totalStock(to))}</b></div></div></div>`;
 const maxPay=Math.max(1,...Object.values(by).map(x=>x.pay));html+=`<div class="card"><div class="section-title"><h3>Tiền công theo nhân viên</h3></div>`;employees().forEach(e=>{html+=`<div class="report-row"><div class="top"><span>${esc(e)}</span><span>${money(by[e].pay)}</span></div><div class="tiny muted">${Math.round(by[e].qty)} cây</div><div class="bar"><i style="width:${Math.min(100,by[e].pay/maxPay*100)}%"></i></div></div>`});html+=`</div>`;
 // Hiển thị đầy đủ từng ngày trong đúng khoảng người dùng đã chọn, kể cả ngày không có phát sinh.
 html+=`<div class="card"><div class="section-title"><h3>Chi tiết từng ngày</h3><span class="badge">${fmtDMY(from)} → ${fmtDMY(to)}</span></div>`;
 for(let d=from; d<=to; d=addDays(d,1)){let dayRows=D.daily.filter(x=>x.date===d);let di=dayRows.reduce((s,x)=>s+(Number(x.in)||0),0);let dout=dayRows.reduce((s,x)=>s+outOf(x),0);let dpay=dayRows.reduce((s,x)=>s+payOf(x),0);html+=`<div class="entry"><div><div class="name">${fmtDMY(d)}</div><div class="meta">Nhập ${Math.round(di)} cây · Đóng ${Math.round(dout)} cây · Tồn cuối ${Math.round(totalStock(d))} cây</div></div><div class="amount">${money(dpay)}</div></div>`}html+=`</div>`;
 const plantTotals={};D.daily.filter(x=>x.date>=from&&x.date<=to).forEach(x=>{const p=D.catalog[x.plantIndex];if(!p)return;const key=x.plantIndex;plantTotals[key]=(plantTotals[key]||0)+outOf(x)});html+=`<div class="card"><div class="section-title"><h3>Sản lượng theo cây/kích thước</h3></div>`;const arr=Object.entries(plantTotals).sort((a,b)=>b[1]-a[1]);html+=arr.length?arr.map(([pi,q])=>{const p=D.catalog[pi];return `<div class="entry"><div><div class="name">${esc(p.name)}</div><div class="meta">${esc(p.size||'Không ghi kích thước')}</div></div><div class="amount">${Math.round(q)} cây</div></div>`}).join(''):'<div class="empty">Chưa có sản lượng trong khoảng này.</div>';html+=`</div>`;
 html+=`<div class="card"><div class="section-title"><h3>Kỳ trả lương 7 ngày (tham khảo)</h3></div>`;let no=1;for(let s=START;s<=END;s=addDays(s,7),no++){let e=addDays(s,6);if(e>END)e=END;if(e<from||s>to)continue;let aa=s<from?from:s,bb=e>to?to:e;let vals=employees().map(emp=>D.daily.filter(x=>x.date>=aa&&x.date<=bb).reduce((sum,x)=>sum+employeePay(x,emp),0));html+=`<div class="entry"><div><div class="name">Kỳ ${String(no).padStart(2,'0')}</div><div class="meta">${fmtDMY(aa)} – ${fmtDMY(bb)}</div></div><div class="amount">${money(vals.reduce((a,b)=>a+b,0))}</div></div>`}html+=`</div>`;$('reportBody').innerHTML=html}
function renderControls(){renderEmployees();renderRates();renderPlantControls();renderOpening();renderUserManagement();applyPermissionsUI()}
function renderEmployees(){$('empList').innerHTML=employees().length?employees().map((e,i)=>`<div class="control-item"><div class="control-head"><span class="control-title">${esc(e)}</span><button class="secondary" onclick="openEditEmployee(${i})">Sửa</button></div><div class="tiny muted">Tiền công được tự tính theo từng kích thước.</div></div>`).join(''):'<div class="empty">Chưa có nhân viên.</div>'}
function renderRates(){$('rateList').innerHTML=D.rates.length?D.rates.map((r,i)=>`<div class="control-item"><div class="control-head"><div><div class="control-title">${esc(r.size)}</div><div class="tiny muted">${money(r.rate)} / cây</div></div><div class="actions"><button class="secondary" onclick="openEditRate(${i})">Sửa</button><button class="danger" onclick="deleteRate(${i})">Xóa</button></div></div></div>`).join(''):'<div class="empty">Chưa có đơn giá.</div>'}
function renderPlantControls(){const q=($('plantSearch')?.value||'').trim().toLowerCase();const arr=activeCatalog().filter(o=>!q||String(o.p.name).toLowerCase().includes(q)||String(o.p.size).toLowerCase().includes(q));$('plantList').innerHTML=arr.slice(0,60).map(o=>`<div class="control-item"><div class="control-head"><div class="plant-row"><img class="plant-thumb plant-photo-click" src="${o.p.image||'logo.png'}" onerror="this.src='logo.png'" onclick="openPlantImage(${o.i})" alt="" title="Nhấn để phóng to"><div class="plant-main"><div class="control-title">${esc(o.p.name)}</div><div class="tiny muted">${esc(o.p.size||'Không ghi kích thước')} · Giá cây ${money(o.p.price)}</div></div></div><button class="secondary" onclick="openEditPlant(${o.i})">Sửa</button></div></div>`).join('')+(arr.length>60?`<div class="empty">Đang hiển thị 60 kết quả. Hãy tìm tên cây cụ thể.</div>`:'');}
function renderOpening(){$('openingList').innerHTML=activeCatalog().map(o=>`<div class="control-item"><div class="control-head"><div><div class="control-title">${esc(o.p.name)}</div><div class="tiny muted">${esc(o.p.size||'Không ghi kích thước')}</div></div><input style="width:110px;padding:9px;border:1px solid #d6e1dc;border-radius:10px;text-align:right" type="number" min="0" value="${Number(D.opening[o.i])||0}" onchange="D.opening[${o.i}]=Math.max(0,Number(this.value)||0);save();renderAll();toast('Đã lưu tồn đầu kỳ')"></div></div>`).join('')}
function openEditEmployee(i){$('editTitle').textContent=i<0?'Thêm nhân viên':'Sửa nhân viên';$('editBody').innerHTML=`<div class="field"><label>Tên nhân viên</label><input id="editName" value="${i>=0?esc(employees()[i]):''}" placeholder="Ví dụ: Nam"></div><button class="primary" onclick="saveEmployeeEdit(${i})">LƯU</button>${i>=0?`<div class="actions"><button class="danger" onclick="deleteEmployee(${i})">Xóa nhân viên</button></div>`:''}`;$('editModal').classList.add('show')}
function saveEmployeeEdit(i){const n=$('editName').value.trim();if(!n){toast('Tên nhân viên không được trống');return}if(i<0){if(employees().includes(n)){toast('Tên nhân viên đã tồn tại');return}D.employees.push(n)}else{const old=D.employees[i];if(n!==old&&employees().includes(n)){toast('Tên nhân viên đã tồn tại');return}D.employees[i]=n;D.daily.forEach(x=>{if(x.counts&&x.counts[old]!=null){x.counts[n]=(Number(x.counts[n])||0)+(Number(x.counts[old])||0);delete x.counts[old]}})}save();closeEdit();renderAll();toast('Đã lưu nhân viên')}
function deleteEmployee(i){const old=employees()[i];if(!confirm(`Xóa ${old}? Lịch sử của người này sẽ được bỏ khỏi báo cáo.`))return;D.employees.splice(i,1);D.daily.forEach(x=>{if(x.counts)delete x.counts[old]});save();closeEdit();renderAll();toast('Đã xóa nhân viên')}
function openEditRate(i){const r=i>=0?D.rates[i]:{size:'',rate:0};$('editTitle').textContent=i<0?'Thêm đơn giá':'Sửa đơn giá';$('editBody').innerHTML=`<div class="field"><label>Kích thước</label><input id="editSize" value="${esc(r.size)}" placeholder="C6, C7, C9..."></div><div class="field"><label>Tiền công / cây (VNĐ)</label><input id="editRate" type="number" min="0" value="${Number(r.rate)||0}"></div><button class="primary" onclick="saveRateEdit(${i})">LƯU</button>`;$('editModal').classList.add('show')}
function saveRateEdit(i){const size=$('editSize').value.trim();const ratev=Math.max(0,Number($('editRate').value)||0);if(!size){toast('Kích thước không được trống');return}if(D.rates.some((r,j)=>j!==i&&String(r.size).toLowerCase()===size.toLowerCase())){toast('Kích thước đã có đơn giá');return}if(i<0)D.rates.push({size,rate:ratev});else D.rates[i]={size,rate:ratev};save();closeEdit();renderAll();toast('Đã lưu đơn giá')}
function deleteRate(i){if(!confirm(`Xóa đơn giá ${D.rates[i].size}?`))return;D.rates.splice(i,1);save();renderAll();toast('Đã xóa đơn giá')}
function openEditPlant(i){const p=i>=0?D.catalog[i]:{name:'',size:'',price:0,image:''};pendingPlantImage=p.image||'';$('editTitle').textContent=i<0?'Thêm cây':'Sửa cây';$('editBody').innerHTML=`<div class="field"><label>Tên cây</label><input id="editPlantName" value="${esc(p.name)}"></div><div class="field"><label>Kích thước</label><input id="editPlantSize" value="${esc(p.size||'')}" placeholder="C7, C9..."></div><div class="field"><label>Giá cây (VNĐ)</label><input id="editPlantPrice" type="number" min="0" value="${Number(p.price)||0}"></div><div class="field"><label>Hình ảnh cây</label><div id="plantPhotoPreview" class="photo-preview">${p.image?`<img src="${p.image}" class="plant-photo-click" onclick="openImageSrc(this.src,'${esc(p.name)} ${esc(p.size||'')}')" alt="" title="Nhấn để phóng to">`:`<div class="empty-photo">🌿</div>`}<div><b>${p.image?'Đã có ảnh':'Chưa có ảnh'}</b><div class="tiny muted">Có thể thay ảnh nhiều lần.</div></div></div><div class="photo-actions"><button type="button" class="secondary" onclick="$('plantCameraInput').click()">📷 Chụp ảnh</button><button type="button" class="secondary" onclick="$('plantGalleryInput').click()">🖼️ Thư viện ảnh</button><button type="button" class="danger" onclick="clearPlantImage()">Xóa ảnh</button></div><input id="plantCameraInput" class="hidden" type="file" accept="image/*" capture="environment" onchange="readPlantImage(event)"><input id="plantGalleryInput" class="hidden" type="file" accept="image/*" onchange="readPlantImage(event)"></div><button class="primary" onclick="savePlantEdit(${i})">LƯU</button>${i>=0?`<div class="actions"><button class="danger" onclick="deletePlant(${i})">Ẩn/xóa khỏi danh mục</button></div>`:''}`;$('editModal').classList.add('show')}
function readPlantImage(ev){const f=ev.target.files?.[0];if(!f)return;const reader=new FileReader();reader.onload=()=>{const img=new Image();img.onload=()=>{const max=520,scale=Math.min(1,max/Math.max(img.width,img.height)),c=document.createElement('canvas');c.width=Math.max(1,Math.round(img.width*scale));c.height=Math.max(1,Math.round(img.height*scale));const ctx=c.getContext('2d');ctx.drawImage(img,0,0,c.width,c.height);pendingPlantImage=c.toDataURL('image/jpeg',.72);$('plantPhotoPreview').innerHTML=`<img src="${pendingPlantImage}" alt=""><div><b>Ảnh mới</b><div class="tiny muted">Ảnh sẽ được lưu gọn trong điện thoại.</div></div>`};img.src=reader.result};reader.readAsDataURL(f);ev.target.value=''}
function clearPlantImage(){pendingPlantImage='';if($('plantPhotoPreview'))$('plantPhotoPreview').innerHTML='<div class="empty-photo">🌿</div><div><b>Đã xóa ảnh</b><div class="tiny muted">Bấm LƯU để xác nhận.</div></div>'}
function savePlantEdit(i){const name=$('editPlantName').value.trim(),size=$('editPlantSize').value.trim(),price=Math.max(0,Number($('editPlantPrice').value)||0);if(!name){toast('Tên cây không được trống');return}if(i<0){D.catalog.push({stt:D.catalog.length+1,name,size,price,image:pendingPlantImage||''});D.opening[D.catalog.length-1]=0}else{D.catalog[i]={...D.catalog[i],name,size,price,image:pendingPlantImage||'',deleted:false}}save();closeEdit();renderAll();toast('Đã lưu cây')}
function openImageSrc(src,title='Ảnh cây'){if(!src)return;$('imageViewerImg').src=src;$('imageViewerTitle').textContent=title||'Ảnh cây';$('imageViewer').classList.add('show');document.body.style.overflow='hidden'}
function openPlantImage(i){const p=D?.catalog?.[Number(i)];if(!p)return;openImageSrc(imageSrc(p),`${p.name||'Cây'}${p.size?' · '+p.size:''}`)}
function closeImageViewer(){$('imageViewer').classList.remove('show');$('imageViewerImg').src='';document.body.style.overflow=''}
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('imageViewer')?.classList.contains('show'))closeImageViewer()});
function openAdjustMoney(date,pi,empEncoded){const emp=decodeURIComponent(empEncoded||'');const x=rec(date,pi,true);const current=adjustmentsOf(x,emp);$('editTitle').textContent='Điều chỉnh tiền công';$('editBody').innerHTML=`<div class="info"><b>${esc(emp)}</b><div class="tiny muted">${fmtDMY(date)} · ${esc(D.catalog[pi]?.name||'')} ${esc(D.catalog[pi]?.size||'')}</div><div class="money">Đang điều chỉnh: ${money(current)}</div></div><div class="field"><label>Số tiền điều chỉnh (VNĐ)</label><input id="adjAmount" type="number" step="1000" inputmode="numeric" value="0" placeholder="Ví dụ: 50000 hoặc -30000"></div><div class="field"><label>Ghi chú</label><input id="adjNote" placeholder="Thưởng, phụ cấp, trừ tiền..."></div><button class="primary" onclick="saveAdjustMoney('${date}',${pi},'${encodeURIComponent(emp)}')">LƯU ĐIỀU CHỈNH</button><div class="tiny muted" style="margin-top:8px">Nhập số dương để cộng, số âm để trừ. Có thể thực hiện nhiều lần.</div>`;$('editModal').classList.add('show')}
function saveAdjustMoney(date,pi,empEncoded){const emp=decodeURIComponent(empEncoded||''),amount=Number($('adjAmount').value)||0,note=$('adjNote').value.trim();if(!amount){toast('Số tiền phải khác 0');return}const x=rec(date,pi,true);x.adjustments=x.adjustments||[];x.adjustments.push({employee:emp,amount,note,at:Date.now()});save();closeEdit();renderAll();toast(`Đã ${amount>0?'cộng':'trừ'} ${money(Math.abs(amount))}`)}
function closeEdit(){$('editModal').classList.remove('show')}
function csvCell(v){const s=String(v??'');return '"'+s.replace(/"/g,'""')+'"'}
function downloadText(filename,text,mime='text/csv;charset=utf-8'){if(window.AndroidBridge&&AndroidBridge.saveFile){try{const b64=btoa(unescape(encodeURIComponent(text)));const ok=AndroidBridge.saveFile(filename,b64,mime);if(ok){toast('Đã lưu file vào Tải xuống / ROLL CÂY CẢNH');return}}catch(e){console.error(e)}}const blob=new Blob([text],{type:mime});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
function exportReportCsv(){syncReportDateLimits();const from=$('rFrom').value||START,to=$('rTo').value||from;const lines=[];lines.push([csvCell('BÁO CÁO ROLL CÂY CẢNH')].join(','));lines.push([csvCell('Từ ngày'),csvCell(fmtDMY(from)),csvCell('Đến ngày'),csvCell(fmtDMY(to))].join(','));let totalIn=0,totalOut=0,totalPayValue=0;D.daily.filter(x=>x.date>=from&&x.date<=to).forEach(x=>{totalIn+=Number(x.in)||0;totalOut+=outOf(x);totalPayValue+=payOf(x)});lines.push([csvCell('Tổng nhập kho'),Math.round(totalIn),csvCell('Tổng đóng hàng'),Math.round(totalOut),csvCell('Tổng tiền công'),Math.round(totalPayValue),csvCell('Tồn cuối'),Math.round(totalStock(to))].join(','));lines.push('');lines.push(['Ngày','Cây','Kích thước','Nhập kho','Nhân viên','Số cây đóng','Đơn giá/cây','Tiền theo cây','Điều chỉnh tiền','Tổng tiền công','Tồn đầu ngày','Tồn cuối','Ghi chú điều chỉnh'].map(csvCell).join(','));D.daily.filter(x=>x.date>=from&&x.date<=to).sort((a,b)=>a.date.localeCompare(b.date)||Number(a.plantIndex)-Number(b.plantIndex)).forEach(x=>{const p=D.catalog[x.plantIndex];if(!p)return;const names=new Set([...Object.keys(x.counts||{}),...(x.adjustments||[]).map(a=>a.employee)]);if(!names.size)names.add('');names.forEach(emp=>{const q=Number(x.counts?.[emp])||0,w=rate(p.size),adj=adjustmentsOf(x,emp),total=q*w+adj;const notes=(x.adjustments||[]).filter(a=>a.employee===emp&&a.note).map(a=>a.note).join(' | ');lines.push([x.date,p.name,p.size||'',Number(x.in)||0,emp,q,w,q*w,adj,total,Math.round(opening(x.plantIndex,x.date)),Math.round(closing(x.plantIndex,x.date)),notes].map(csvCell).join(','))})});lines.push('');lines.push(['Nhân viên','Số cây','Tiền công + điều chỉnh'].map(csvCell).join(','));employees().forEach(emp=>{let qty=0,pay=0;D.daily.filter(x=>x.date>=from&&x.date<=to).forEach(x=>{qty+=Number(x.counts?.[emp])||0;pay+=employeePay(x,emp)});lines.push([emp,Math.round(qty),Math.round(pay)].map(csvCell).join(','))});downloadText(`Bao-cao-ROLL-CAY-CANH-${from}-${to}.csv`,'\ufeff'+lines.join('\r\n'));if(!(window.AndroidBridge&&AndroidBridge.saveFile))toast('Đã xuất file báo cáo CSV')}
function exportData(){const blob=new Blob([JSON.stringify(D,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='ROLL-CAY-CANH-backup.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
function importData(ev){const f=ev.target.files?.[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{D=JSON.parse(r.result);if(!D.opening)D.opening={};D.catalog.forEach((_,i)=>{if(D.opening[i]==null)D.opening[i]=0});save();renderAll();toast('Đã nhập dữ liệu sao lưu')}catch(e){toast('File sao lưu không hợp lệ')}};r.readAsText(f);ev.target.value=''}
function restoreExcelDefaults(){if(!confirm('Khôi phục danh mục cây, nhân viên và đơn giá theo Excel gốc? Dữ liệu đã nhập theo ngày sẽ được giữ lại.'))return;const keepDaily=D.daily,keepOpening=D.opening;D=structuredClone(DEFAULT_DATA);D.daily=keepDaily;D.opening=keepOpening;save();renderAll();toast('Đã khôi phục danh mục Excel')}
const CLOUD_CONFIG = window.ROLL_CAY_FIREBASE_CONFIG || null;
const ADMIN_EMAIL='tiennt9939@gmail.com';
const ROLE_LABELS={admin:'Quản trị viên',manager:'Quản lý',packer:'Nhân viên đóng hàng',warehouse:'Nhân viên kho',viewer:'Chỉ xem'};
const ROLE_PERMS={admin:['pack','in','report','control','users'],manager:['pack','in','report'],packer:['pack'],warehouse:['in'],viewer:['report']};
function notificationKey(){const st=window.CloudSync?.state?.();return st?.role==='admin'?'admin':(st?.user?.uid||'guest')}
function updateOrderNotificationUI(pending,completed){orderNotificationState.pending=Math.max(0,Number(pending)||0);orderNotificationState.completed=Math.max(0,Number(completed)||0);const b=$('orderBellBadge'),bell=$('orderBell');if(b){b.textContent=orderNotificationState.pending>99?'99+':String(orderNotificationState.pending);b.classList.toggle('show',orderNotificationState.pending>0)}if(bell)bell.classList.toggle('has-alert',orderNotificationState.pending>0);const ac=$('adminOrderStats');const isAdmin=window.CloudSync?.state?.().role==='admin';if(ac)ac.classList.toggle('show',!!isAdmin);if(isAdmin){$('adminPendingCount')&&($('adminPendingCount').textContent=String(orderNotificationState.pending));$('adminCompletedCount')&&($('adminCompletedCount').textContent=String(orderNotificationState.completed))}}
function unlockOrderAlertAudio(){try{if(!orderAlertAudioCtx)orderAlertAudioCtx=new(window.AudioContext||window.webkitAudioContext)();if(orderAlertAudioCtx.state==='suspended')orderAlertAudioCtx.resume()}catch(e){}}
function playOrderAlertSound(){try{unlockOrderAlertAudio();if(!orderAlertAudioCtx)return;const ctx=orderAlertAudioCtx;[0,0.18,0.36].forEach((delay,i)=>{const o=ctx.createOscillator(),g=ctx.createGain();o.type='sine';o.frequency.value=i===1?880:660;g.gain.setValueAtTime(.0001,ctx.currentTime+delay);g.gain.exponentialRampToValueAtTime(.16,ctx.currentTime+delay+.02);g.gain.exponentialRampToValueAtTime(.0001,ctx.currentTime+delay+.14);o.connect(g);g.connect(ctx.destination);o.start(ctx.currentTime+delay);o.stop(ctx.currentTime+delay+.16)})}catch(e){}}
function vibrateOrderAlert(){try{navigator.vibrate&&navigator.vibrate([120,70,120,70,180])}catch(e){}}
function renderOrderAlertList(rows){
  const box=$('orderAlertList');if(!box)return;
  const pending=(Array.isArray(rows)?rows:[]).filter(x=>x&&x.status!=='completed');
  if(!pending.length){box.innerHTML='<div class="tiny muted">Không còn đơn chờ xử lý. Danh sách đã được cập nhật.</div>';return}
  box.innerHTML=pending.slice(0,30).map(r=>`<button type="button" class="order-alert-row" onclick="event.preventDefault();event.stopPropagation();openOrderFromAlert('${esc(String(r.id||''))}')"><div><b>${esc(r.plantName||'Cây')} · ${esc(r.size||'')}</b><div class="tiny muted">Đơn #${esc(r.orderNo||String(r.id||'').slice(-6))} · Combo ${Number(r.packSize)||0} cây${r.employee?` · ${esc(r.employee)}`:''}</div></div><span>›</span></button>`).join('')+(pending.length>30?`<div class="tiny muted" style="padding:7px 2px">Còn ${pending.length-30} đơn khác.</div>`:'');
}
function showOrderAlert(pending,source='',rows=[]){
  $('orderAlertCount')&&($('orderAlertCount').textContent=String(pending));
  $('orderAlertText')&&($('orderAlertText').textContent=source==='admin'?`Hiện có ${pending} đơn chưa hoàn tất trong hệ thống.`:`Bạn đang có ${pending} đơn được phân công cần đóng.`);
  renderOrderAlertList(rows);
  $('orderAlertModal')?.classList.add('show');playOrderAlertSound();vibrateOrderAlert();
}
async function refreshOrdersForNotification(){
  const st=window.CloudSync?.state?.();
  if(!st?.user){showLoginGate();return []}
  try{
    let rows=[];
    if(st.role==='packer'){await st.loadPackerRecords();rows=Array.isArray(D.packingOrders)?D.packingOrders:[]}
    else if(st.role==='admin'){rows=await st.adminListOrders();D.packingOrders=rows;localSaveOnly();await renderAssignmentControls()}
    else return [];
    const pending=rows.filter(x=>x.status!=='completed').length;
    const completed=rows.filter(x=>x.status==='completed').length;
    updateOrderNotificationUI(pending,completed);
    return rows;
  }catch(e){console.error('refreshOrdersForNotification',e);toast('Không tải được đơn: '+(e?.message||e?.code||'Lỗi Cloud'));return []}
}
async function openOrderNotifications(){
  unlockOrderAlertAudio();
  const rows=await refreshOrdersForNotification();
  const pending=rows.filter(x=>x.status!=='completed').length;
  if(pending>0)showOrderAlert(pending,window.CloudSync?.state?.().role==='admin'?'admin':'packer',rows);
  else toast('🔔 Hiện không có đơn nào đang chờ xử lý');
}
function closeOrderNotifications(){$('orderAlertModal')?.classList.remove('show')}
async function openOrderFromAlert(id){
  // Mở đơn từ chuông phải là thao tác điều hướng nội bộ, không được làm thay đổi phiên đăng nhập.
  // Chặn bubbling/default của nút thông báo để WebView không xử lý nhầm click như một thao tác khác.
  try{
    if(window.event){window.event.preventDefault?.();window.event.stopPropagation?.();}
    const st=window.CloudSync?.state?.();
    if(!st?.user){closeOrderNotifications();showLoginGate();return}
    const orderId=String(id||'').trim();
    if(!orderId){toast('Không xác định được đơn hàng');return}
    closeOrderNotifications();
    if(st.role==='packer'){
      // Tải lại từ Firebase trước khi chọn, tránh dùng đơn cũ trong bộ nhớ.
      await st.loadPackerRecords();
      const rows=Array.isArray(D.packingOrders)?D.packingOrders:[];
      const target=rows.find(x=>String(x.id)===orderId);
      if(!target){toast('Đơn hàng không còn tồn tại hoặc không thuộc tài khoản này');return}
      if(target.status==='completed'){toast('Đơn này đã hoàn thành');return}
      selectedOrderId=orderId;
      go('day','pack');
      renderPackerOrders();
      setTimeout(()=>{$('packerOrderPanel')?.scrollIntoView({behavior:'smooth',block:'start'});},120);
    }else if(st.role==='admin'){
      // Admin cũng tải lại danh sách để bảo đảm mở đúng dữ liệu Cloud hiện tại.
      const rows=await st.adminListOrders();
      D.packingOrders=rows;localSaveOnly();
      go('day','pack');
      await renderAssignmentControls();
      setTimeout(()=>{$('orderAssignCard')?.scrollIntoView({behavior:'smooth',block:'start'});},120);
    }else{
      toast('Tài khoản hiện tại không có quyền xem đơn đóng hàng');
    }
  }catch(e){
    console.error('openOrderFromAlert',e);
    toast('Không thể mở đơn: '+(e?.message||e?.code||'Lỗi Cloud'));
  }
}
async function goToPendingOrders(){
  closeOrderNotifications();
  const st=window.CloudSync?.state?.();
  if(!st?.user){showLoginGate();return}
  try{
    const rows=await refreshOrdersForNotification();
    if(st.role==='packer'){
      renderPackerOrders();go('day','pack');
      setTimeout(()=>{const el=$('packerOrders')||$('packerOrderPanel');el?.scrollIntoView({behavior:'smooth',block:'start'});},180);
    }else if(st.role==='admin'){
      D.packingOrders=rows;localSaveOnly();await renderAssignmentControls();
      go('day','pack');
      setTimeout(()=>{$('orderAssignCard')?.scrollIntoView({behavior:'smooth',block:'start'});},180);
    }
  }catch(e){console.error('goToPendingOrders',e);toast('Không tải được danh sách đơn: '+(e?.message||e?.code||'Lỗi Cloud'));}
}
function maybeAlertForPending(pending,roleName){const key='ROLL_CAY_LAST_PENDING_'+notificationKey();const raw=localStorage.getItem(key);const previous=raw===null?null:Number(raw);localStorage.setItem(key,String(pending));if(previous!==null&&pending>previous){showOrderAlert(pending,roleName);toast(`🔔 Có ${pending} đơn đang chờ đóng`)}else if(previous===null&&pending>0){showOrderAlert(pending,roleName);toast(roleName==='admin'?`🔔 Có ${pending} đơn chưa hoàn tất`:`🔔 Bạn có ${pending} đơn cần đóng`)}}
const CloudSync = (()=>{
  let app=null,auth=null,db=null,user=null,pushTimer=null,ready=false,profile=null,orderUnsubs=[],initPromise=null;
  const sharedRef=()=>db.collection('apps').doc('roll-cay-canh');
  const configRef=()=>db.collection('config').doc('roll-cay-canh');
  const packerEntriesRef=uid=>db.collection('packerRecords').doc(uid).collection('entries');
  const ordersRef=()=>db.collection('packingOrders');
  const profileRef=uid=>db.collection('users').doc(uid);
  function setStatus(text,kind=''){const s=$('cloudStatus'),d=$('cloudDot'),b=$('syncBadge'),u=$('syncUser');if(s)s.textContent=text;if(d)d.className='cloud-dot '+kind;if(b)b.textContent=text;if(u)u.innerHTML=user?`Tài khoản: ${esc(user.email||'')} · <span class="role-pill">${esc(ROLE_LABELS[profile?.role]||'Đang kiểm tra quyền')}</span>`:'Đăng nhập để dùng chung dữ liệu trên nhiều điện thoại.'}
  function available(){return !!(CLOUD_CONFIG&&CLOUD_CONFIG.apiKey&&CLOUD_CONFIG.projectId&&window.firebase)}
  function role(){return (user&&String(user.email||'').trim().toLowerCase()===ADMIN_EMAIL.toLowerCase())?'admin':(profile?.role||'viewer')}
  function can(permission){return !!user&&ROLE_PERMS[role()]?.includes(permission)}
  function requirePerm(permission){if(can(permission))return true;toast('Tài khoản này không có quyền thực hiện tác vụ này');return false}
  async function ensureProfile(){
    const ref=profileRef(user.uid),snap=await ref.get();
    if(!snap.exists){
      const r=(String(user.email||'').toLowerCase()===ADMIN_EMAIL.toLowerCase())?'admin':'viewer';
      await ref.set({email:user.email||'',displayName:user.displayName||'',role:r,active:true,createdAt:firebase.firestore.FieldValue.serverTimestamp(),updatedAt:firebase.firestore.FieldValue.serverTimestamp()});
      profile={email:user.email||'',displayName:user.displayName||'',role:r,active:true};
    } else { profile=snap.data(); if(profile.active===false){toast('Tài khoản đã bị khóa');await auth.signOut();return false;} }
    if(String(user.email||'').toLowerCase()===ADMIN_EMAIL.toLowerCase()){const patch={role:'admin',active:true,updatedAt:firebase.firestore.FieldValue.serverTimestamp()};if(profile.employeeId||profile.employeeName){patch.employeeId=firebase.firestore.FieldValue.delete();patch.employeeName=firebase.firestore.FieldValue.delete();}await ref.set(patch,{merge:true});profile={...profile,role:'admin',active:true};delete profile.employeeId;delete profile.employeeName;}
    return true;
  }
  function stopOrderWatch(){orderUnsubs.forEach(fn=>{try{fn&&fn()}catch(e){}});orderUnsubs=[];orderNotificationState={pending:0,completed:0,ready:false,role:''}}
  function startOrderWatch(){
    stopOrderWatch();
    if(!user||!db)return;
    const r=role();
    if(r!=='admin'&&r!=='packer')return;
    orderNotificationState.role=r;
    let q=ordersRef();
    if(r==='packer')q=q.where('assignedUid','==',user.uid);
    const unsub=q.onSnapshot(snap=>{
      const rows=normalizeOrders(snap.docs.map(d=>({id:d.id,...d.data()})));
      if(r==='packer'){
        D.packingOrders=rows;
        const completed=rows.filter(x=>x.status==='completed');
        D.packerRecords=completed.map(d=>({id:d.id,...d,uid:user.uid,qty:Number(d.packSize)||0,image:d.completionImage||'',createdAtMs:Number(d.completedAtMs||Date.now()),employee:d.employee||currentPackerName(),plantIndex:Number(d.plantIndex),plantName:d.plantName,size:d.size,date:d.date||String(d.createdAtDate||''),payAdjustment:Number(d.payAdjustment)||0,payAdjustmentNote:d.payAdjustmentNote||''}));
        rebuildPackerDaily();localSaveOnly();renderAll();
        const pending=rows.filter(x=>x.status!=='completed').length;
        updateOrderNotificationUI(pending,completed.length);
        maybeAlertForPending(pending,'packer');
      }else{
        const pending=rows.filter(x=>x.status!=='completed').length;
        const completed=rows.filter(x=>x.status==='completed').length;
        D.packingOrders=rows;
        updateOrderNotificationUI(pending,completed);
        renderAll();
        // Cập nhật ngay danh sách đơn trong giao diện Admin, không chỉ số trên chuông.
        renderAssignmentControls().catch(err=>console.error('renderAssignmentControls watcher',err));
        maybeAlertForPending(pending,'admin');
      }
    },e=>{console.error('packingOrders watcher',e);});
    orderUnsubs.push(unsub);
  }
  async function init(){
    if(initPromise)return initPromise;
    initPromise=(async()=>{
      if(!available()){setStatus('Chưa cấu hình Cloud','offline');showLoginGate();return false}
      try{
        app=firebase.apps.length?firebase.app():firebase.initializeApp(CLOUD_CONFIG);
        auth=firebase.auth();
        db=firebase.firestore();
        // Dùng SESSION để khi mở lại ứng dụng sẽ hiện màn hình đăng nhập; chỉ ghi nhớ email, không ghi mật khẩu.
        try{await auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)}catch(e){console.warn('Không đặt được SESSION persistence',e)}
        try{await db.enablePersistence({synchronizeTabs:true})}catch(e){}
        auth.onAuthStateChanged(async u=>{user=u;profile=null;ready=!!u;if(u){try{if(!(await ensureProfile())){showLoginGate();return}hideLoginGate();setStatus('Đã kết nối · '+(u.email||''),'online');renderCloudBody();applyPermissionsUI();if(role()==='packer'){await reconcile();await loadPackerRecords();startOrderWatch();go('day','pack')}else{await reconcile();if(role()==='admin'){await pushNow();await loadAllPackerRecords();await renderAssignmentControls();}startOrderWatch();renderControls();}}catch(e){console.error(e);setStatus('Lỗi đồng bộ · '+firebaseError(e),'offline');showLoginGateError(firebaseError(e))}}else{stopOrderWatch();showLoginGate();setStatus('Chưa đăng nhập · cần đăng nhập','offline');renderCloudBody();applyPermissionsUI();renderControls()}});
        return true;
      }catch(e){console.error(e);auth=null;db=null;setStatus('Lỗi cấu hình Cloud','offline');showLoginGateError(firebaseError(e));return false}
    })();
    return initPromise;
  }
  // V20.7: dùng /apps/roll-cay-canh làm đường dữ liệu tương thích với Rules cũ.
  // Không để /config làm hỏng đồng bộ/đóng hàng nếu Rules trên Firebase chưa được cập nhật.
  async function loadCloudCatalog(){ return true; }
  function cloudDataSnapshot(){
    const x=JSON.parse(JSON.stringify(D));
    // Giữ catalog/rates và đơn phân công trong document dùng chung để hoạt động với Rules V17/V20 cũ.
    x.packerRecords=[];
    x.catalog=Array.isArray(D.catalog)?D.catalog:[];
    x.rates=Array.isArray(D.rates)?D.rates:[];
    x.packingOrders=Array.isArray(D.packingOrders)?D.packingOrders:[];
    return x;
  }
  async function writeCloudCatalog(){
    // Catalog đã nằm trong /apps/roll-cay-canh.data, không cần ghi /config nữa.
    return true;
  }
  async function reconcile(){
    if(!user||!db)return;
    try{
      const ref=sharedRef(),snap=await ref.get();
      const localTs=Number(localStorage.getItem('quanlycay_local_updated')||0);
      if(!snap.exists){
        if(can('control')){
          const old=await db.collection('users').doc(user.uid).collection('apps').doc('roll-cay-canh').get();
          if(old.exists&&old.data().data){
            D={...D,...old.data().data,catalog:D.catalog||[],rates:D.rates||[],packingOrders:D.packingOrders||[]};
            await ref.set({data:cloudDataSnapshot(),updatedAtMs:Number(old.data().updatedAtMs||Date.now()),updatedAt:firebase.firestore.FieldValue.serverTimestamp(),appVersion:'V20.9',migratedFromUid:user.uid});
            localSaveOnly();renderAll();toast('☁️ Đã chuyển dữ liệu hiện tại lên kho dùng chung');
            return;
          }
          await pushNow();
        }else{
          setStatus('Chưa có dữ liệu dùng chung','offline');
        }
        return;
      }
      const cloud=snap.data();
      if(cloud.data){
        // V20.8: Cloud rỗng không được phép xoá cấu hình hiện có trên máy.
        // Catalog/rates/daily/opening là dữ liệu nghiệp vụ; chỉ nhận từ Cloud khi thực sự có dữ liệu.
        if(role()==='packer' || Number(cloud.updatedAtMs||0)>=localTs){
          const incoming=cloud.data||{};
          const localCatalog=Array.isArray(D.catalog)?D.catalog:[];
          const localRates=Array.isArray(D.rates)?D.rates:[];
          const localEmployees=Array.isArray(D.employees)?D.employees:[];
          const localDaily=Array.isArray(D.daily)?D.daily:[];
          const localOpening=(D.opening&&typeof D.opening==='object')?D.opening:{};
          const cloudCatalog=Array.isArray(incoming.catalog)?incoming.catalog:[];
          const cloudRates=Array.isArray(incoming.rates)?incoming.rates:[];
          const cloudEmployees=Array.isArray(incoming.employees)?incoming.employees:[];
          const cloudDaily=Array.isArray(incoming.daily)?incoming.daily:[];
          const cloudOpening=(incoming.opening&&typeof incoming.opening==='object')?incoming.opening:{};
          const cloudWasMissingConfig=cloudCatalog.length===0 || cloudRates.length===0;
          D={...D,...incoming,
            catalog:cloudCatalog.length?cloudCatalog:localCatalog,
            rates:cloudRates.length?cloudRates:localRates,
            employees:cloudEmployees.length?cloudEmployees:localEmployees,
            daily:cloudDaily.length?cloudDaily:localDaily,
            opening:Object.keys(cloudOpening).length?cloudOpening:localOpening};
          repairCanonicalConfig();
          if(role()==='packer')D.packingOrders=(Array.isArray(incoming.packingOrders)?incoming.packingOrders:[]).filter(x=>x.assignedUid===user.uid);
          localSaveOnly();renderAll();setStatus('Đã đồng bộ','online');
          // Nếu Cloud từng chứa catalog/rates rỗng, ghi lại bộ dữ liệu đã tự phục hồi.
          if(cloudWasMissingConfig && role()!=='packer')setTimeout(()=>pushNow(),0);
          return;
        }
      }
      if(localTs>Number(cloud.updatedAtMs||0) && (can('pack')||can('in')||can('control'))){
        await pushNow();
      }else{
        setStatus('Đã đồng bộ','online');
      }
    }catch(e){
      console.error(e);
      setStatus('Lỗi đồng bộ · '+firebaseError(e),'offline');
    }
  }
  async function pushNow(){if(!user||!db)return false;if(role()==='packer'){setStatus('Đã đồng bộ','online');return true}if(!can('pack')&&!can('in')&&!can('control')){setStatus('Chỉ xem · không ghi dữ liệu','online');return false}try{setStatus('Đang đồng bộ…','online');const ref=sharedRef(),ts=Date.now();try{await ref.set({data:cloudDataSnapshot(),updatedAtMs:ts,updatedAt:firebase.firestore.FieldValue.serverTimestamp(),appVersion:'V20.9'},{merge:true})}catch(e){throw new Error('Không ghi được dữ liệu chung /apps/roll-cay-canh: '+(e?.message||e?.code||e))}localStorage.setItem('quanlycay_local_updated',String(ts));setStatus('Đã đồng bộ','online');return true}catch(e){console.error(e);setStatus('Lỗi đồng bộ · '+(e?.message||firebaseError(e)),'offline');window.__lastCloudError=e?.message||firebaseError(e);return false}}
  function schedulePush(){clearTimeout(pushTimer);if(!user||role()==='packer'||(!can('pack')&&!can('in')&&!can('control')))return;pushTimer=setTimeout(()=>pushNow(),1200)}
  async function signIn(email,password,remember=true){
    if(!available()){showLoginGateError('Firebase chưa được cấu hình');return false}
    try{
      if(remember&&email)localStorage.setItem('ROLL_CAY_REMEMBER_EMAIL',email);else localStorage.removeItem('ROLL_CAY_REMEMBER_EMAIL');
      if(!email||!password){showLoginGateError('Vui lòng nhập tên đăng nhập và mật khẩu');return false}
      // Chặn lỗi race khi người dùng bấm ĐĂNG NHẬP trước khi CloudSync.init() hoàn tất.
      if(!auth)await init();
      if(!auth){showLoginGateError('Cloud chưa sẵn sàng. Vui lòng chờ ứng dụng kết nối rồi thử lại.');return false}
      try{await auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)}catch(e){}
      await auth.signInWithEmailAndPassword(email,password);clearLoginGateError();return true
    }catch(e){console.error('CloudSync.signIn',e);showLoginGateError(firebaseError(e));return false}
  }
  function normalizeOrders(data){return Array.isArray(data)?data.filter(Boolean).sort((a,b)=>Number(b.createdAtMs||0)-Number(a.createdAtMs||0)):[]}
  async function loadPackerRecords(){
    if(!user||!db||role()!=='packer')return;
    const snap=await ordersRef().where('assignedUid','==',user.uid).get();
    const all=normalizeOrders(snap.docs.map(d=>({id:d.id,...d.data()})));
    D.packingOrders=all;
    const completed=all.filter(x=>x.status==='completed');
    D.packerRecords=completed.map(d=>({id:d.id,...d,uid:user.uid,qty:Number(d.packSize)||0,image:d.completionImage||'',createdAtMs:Number(d.completedAtMs||Date.now()),employee:d.employee||currentPackerName(),plantIndex:Number(d.plantIndex),plantName:d.plantName,size:d.size,date:d.date||String(d.createdAtDate||''),payAdjustment:Number(d.payAdjustment)||0,payAdjustmentNote:d.payAdjustmentNote||''}));
    rebuildPackerDaily();localSaveOnly();renderAll();const pending=all.filter(x=>x.status!=='completed').length;if(pending)toast(`🔔 Bạn có ${pending} đơn mới cần đóng`);
  }
  async function createPackingOrder(data){
    if(!user||role()!=='admin')throw new Error('Chỉ Admin được phân công đơn');
    const ref=ordersRef().doc();
    const order={id:ref.id,...data,createdBy:user.uid,createdAtMs:Date.now(),status:'pending',payAdjustment:0,payAdjustmentNote:''};
    await ref.set(order);
    D.packingOrders=[...(D.packingOrders||[]),order];return order;
  }
  async function completePackingOrder(id,image){
    if(!user||role()!=='packer')throw new Error('Không có quyền');
    if(!image)throw new Error('Phải chụp ảnh hoàn thành');
    const ref=ordersRef().doc(id);const snap=await ref.get();
    if(!snap.exists)throw new Error('Không tìm thấy đơn được phân công');
    const old={id:snap.id,...snap.data()};
    if(old.assignedUid!==user.uid)throw new Error('Đơn này không được phân công cho tài khoản hiện tại');
    if(old.status==='completed')throw new Error('Đơn đã hoàn thành');
    const completedAtMs=Date.now();
    await ref.update({status:'completed',completionImage:image,completedAtMs,completedAt:firebase.firestore.FieldValue.serverTimestamp(),completedBy:user.uid});
    const done=await ref.get();
    return {id:done.id,...done.data()};
  }
  async function migrateLegacyOrdersToCollection(){
    if(!user||role()!=='admin')return;
    const existing=await ordersRef().get();
    if(!existing.empty)return;
    const legacy=await sharedRef().get();
    const rows=legacy.exists?((legacy.data()?.data?.packingOrders)||[]):[];
    if(!Array.isArray(rows)||!rows.length)return;
    const batch=db.batch();
    rows.filter(Boolean).forEach(o=>{const id=String(o.id||('PO-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,7)));batch.set(ordersRef().doc(id),{...o,id,payAdjustment:Number(o.payAdjustment)||0,payAdjustmentNote:o.payAdjustmentNote||''},{merge:true})});
    await batch.commit();
    toast(`☁️ Đã chuyển ${rows.length} đơn cũ sang kho phân công mới`);
  }
  async function adminListOrders(){if(!user||role()!=='admin')return[];const snap=await ordersRef().get();return normalizeOrders(snap.docs.map(d=>({id:d.id,...d.data()})))}
  async function adminDeleteOrder(id){if(!user||role()!=='admin')throw new Error('Không có quyền Admin');await ordersRef().doc(id).delete();D.packingOrders=(D.packingOrders||[]).filter(x=>x.id!==id)}
  async function adminUpdatePackingOrder(id,changes){
    if(!user||role()!=='admin')throw new Error('Không có quyền Admin');
    await ordersRef().doc(id).update(changes);
    const x=(D.packingOrders||[]).find(o=>o.id===id);if(x)Object.assign(x,changes);
  }
  async function createPackerRecord(data){if(!user||role()!=='packer')throw new Error('Tài khoản không có quyền đóng hàng');const ref=packerEntriesRef(user.uid).doc();await ref.set(data);const snap=await ref.get();return {id:ref.id,...snap.data(),createdAtMs:Number(snap.data()?.createdAtMs||Date.now())}}
  async function updatePackerRecord(id,changes){if(!user||role()!=='packer')throw new Error('Không có quyền');await packerEntriesRef(user.uid).doc(id).update({...changes,updatedAt:firebase.firestore.FieldValue.serverTimestamp()})}
  async function deletePackerRecord(id){if(!user||role()!=='packer')throw new Error('Không có quyền');await packerEntriesRef(user.uid).doc(id).delete()}
  async function loadAllPackerRecords(){
    if(!user||!db||role()!=='admin')return;
    await migrateLegacyOrdersToCollection();
    const snap=await ordersRef().get();const rows=normalizeOrders(snap.docs.map(d=>({id:d.id,...d.data()})));
    D.packerRecords=rows.filter(x=>x.status==='completed').map(x=>({...x,uid:x.assignedUid,employee:x.employee,qty:Number(x.packSize)||0,image:x.completionImage||'',date:x.date||String(x.completedAtDate||''),plantIndex:Number(x.plantIndex),payAdjustment:Number(x.payAdjustment)||0,payAdjustmentNote:x.payAdjustmentNote||''}));
    D.packingOrders=rows;localSaveOnly();renderAll();
  }
  async function adminUpdatePackerRecord(id,changes){return adminUpdatePackingOrder(id,changes)}
  async function adminDeletePackerRecord(id){return adminDeleteOrder(id)}
  async function createUser(email,password,employeeId,roleValue){if(!requirePerm('users'))return false;if(!email||!password||!employeeId){toast('Cần email, mật khẩu và chọn nhân viên có sẵn');return false}const emp=(D.employees||[])[Number(employeeId)];if(!emp){toast('Không tìm thấy nhân viên đã chọn');return false}let sec=null;try{const users=await listUsers();if(users.some(u=>u.employeeId===String(employeeId)&&u.active!==false)){toast('Nhân viên này đã được liên kết với một tài khoản');return false}sec=firebase.apps.find(a=>a.name==='USER_CREATOR')||firebase.initializeApp(CLOUD_CONFIG,'USER_CREATOR');const a=sec.auth();const cred=await a.createUserWithEmailAndPassword(email,password);await profileRef(cred.user.uid).set({email:email.trim(),displayName:emp,employeeId:String(employeeId),employeeName:emp,role:ROLE_LABELS[roleValue]?roleValue:'viewer',active:true,createdAt:firebase.firestore.FieldValue.serverTimestamp(),updatedAt:firebase.firestore.FieldValue.serverTimestamp()});await a.signOut();toast('✅ Đã cấp tài khoản cho '+emp);await renderUserManagement();return true}catch(e){console.error('createUser',e);let msg=firebaseError(e);if(e?.code==='permission-denied')msg='Không thể lưu hồ sơ nhân viên. Hãy Publish Firestore Rules V20 mới.';toast(msg);try{if(sec)await sec.auth().signOut()}catch(_){}return false}}
  async function listUsers(){if(!can('users'))return[];const snap=await db.collection('users').get();return snap.docs.map(d=>({uid:d.id,...d.data()})).sort((a,b)=>String(a.email||'').localeCompare(String(b.email||'')))}
  async function linkUserEmployee(uid,employeeId){if(!requirePerm('users'))return false;const target=(await listUsers()).find(u=>u.uid===uid);if(target?.role==='admin'){toast('⚠️ Tài khoản Quản trị viên không được gắn với nhân viên. Admin và nhân viên là hai vai trò riêng.');return false}const emp=(D.employees||[])[Number(employeeId)];if(!emp){toast('Hãy chọn nhân viên');return false}const users=await listUsers();const clash=users.find(u=>u.uid!==uid&&u.employeeId===String(employeeId)&&u.active!==false);if(clash){toast('Nhân viên này đã được liên kết với tài khoản '+(clash.email||''));return false}try{await profileRef(uid).set({employeeId:String(employeeId),employeeName:emp,displayName:emp,updatedAt:firebase.firestore.FieldValue.serverTimestamp()},{merge:true});toast('✅ Đã liên kết tài khoản với nhân viên '+emp);await renderUserManagement();return true}catch(e){toast(firebaseError(e));return false}}
  async function setUserRole(uid,roleValue){if(!requirePerm('users'))return;await profileRef(uid).set({role:roleValue,updatedAt:firebase.firestore.FieldValue.serverTimestamp()},{merge:true});toast('Đã cập nhật quyền');renderUserManagement()}
  async function setUserActive(uid,active){if(!requirePerm('users'))return;await profileRef(uid).set({active,updatedAt:firebase.firestore.FieldValue.serverTimestamp()},{merge:true});toast(active?'Đã mở khóa tài khoản':'Đã khóa tài khoản');renderUserManagement()}
  async function signOut(){if(auth)await auth.signOut();closeCloudSync();toast('Đã đăng xuất Cloud')}
  function firebaseError(e){const c=e?.code||'';if(c.includes('invalid-email'))return'Email không hợp lệ';if(c.includes('weak-password'))return'Mật khẩu cần ít nhất 6 ký tự';if(c.includes('wrong-password')||c.includes('invalid-credential'))return'Sai email hoặc mật khẩu';if(c.includes('email-already-in-use'))return'Email này đã được đăng ký';return'Lỗi Cloud: '+(e?.message||c)}
  function state(){return {user,profile,role:role(),ready,can,listUsers,linkUserEmployee,loadPackerRecords,createPackerRecord,updatePackerRecord,deletePackerRecord,loadAllPackerRecords,adminUpdatePackerRecord,adminDeletePackerRecord,createPackingOrder,completePackingOrder,adminListOrders,adminDeleteOrder,adminUpdatePackingOrder}}
  return {init,schedulePush,pushNow,signIn,signOut,state,can,requirePerm,createUser,listUsers,setUserRole,setUserActive};
})();
async function fillAssignOptions(){
  const s=CloudSync.state();if(!s.user||s.role!=='admin')return;
  const emp=$('assignEmployee'),plant=$('assignPlant'),ps=$('assignPackSize');if(!emp||!plant||!ps)return;
  const oldEmp=emp.value,oldPlant=plant.value,oldPack=ps.value;
  emp.innerHTML='<option value="">Đang tải nhân viên…</option>';
  try{
    const users=await s.listUsers();
    const packers=users.filter(u=>u.role==='packer'&&u.active!==false&&u.employeeId!=null&&String(u.employeeName||'').trim());
    emp.innerHTML=packers.length
      ? '<option value="">-- Chọn nhân viên đóng hàng --</option>'+packers.map(u=>`<option value="${esc(u.uid)}">${esc(u.employeeName)} · ${esc(u.email||'')}</option>`).join('')
      : '<option value="">Chưa có nhân viên đóng hàng đã liên kết tài khoản</option>';
    if(packers.some(u=>u.uid===oldEmp)) emp.value=oldEmp;
  }catch(e){
    console.error('fillAssignOptions users',e);
    emp.innerHTML='<option value="">Không đọc được tài khoản nhân viên — kiểm tra Firestore Rules V20</option>';
  }
  const plants=plantNames();
  plant.innerHTML=plants.length
    ? '<option value="">-- Chọn loại cây --</option>'+plants.map(n=>`<option value="${esc(n)}">${esc(n)}</option>`).join('')
    : '<option value="">Chưa có danh mục cây</option>';
  if(plants.includes(oldPlant)) plant.value=oldPlant;
  ps.innerHTML='<option value="">-- Chọn quy cách --</option>'+Array.from({length:99},(_,i)=>i+2).map(n=>`<option value="${n}">${n} cây / combo</option>`).join('');
  if(oldPack) ps.value=oldPack;
  renderAssignSizes();
}
function renderAssignSizes(){
  const p=String($('assignPlant')?.value||'').trim(),size=$('assignSize');
  if(!size)return;
  const rows=rowsByName(p);
  size.innerHTML=rows.length
    ? '<option value="">-- Chọn kích thước --</option>'+rows.map(o=>`<option value="${o.i}">${esc(o.p.size||'Không ghi kích thước')}</option>`).join('')
    : '<option value="">-- Chọn loại cây trước --</option>';
  size.disabled=!rows.length;
}
async function adminCreateAssignments(){if(!CloudSync.requirePerm('users'))return;const assignedUid=$('assignEmployee')?.value||'',sizeRaw=$('assignSize')?.value||'',pi=Number(sizeRaw),packSize=Number($('assignPackSize')?.value),count=Math.floor(Number($('assignOrderCount')?.value)||0),note=($('assignNote')?.value||'').trim();const p=D.catalog[pi];const users=await CloudSync.state().listUsers();const target=users.find(u=>u.uid===assignedUid&&u.role==='packer'&&u.active!==false&&u.employeeId&&u.employeeName);if(!target||!p||packSize<2||packSize>100||count<1){toast('Vui lòng chọn nhân viên đã liên kết, cây, kích thước, quy cách 2–100 và số đơn');return}const employee=target.employeeName;try{for(let i=0;i<count;i++){await CloudSync.state().createPackingOrder({assignedUid:target.uid,employee,employeeId:String(target.employeeId),plantIndex:pi,plantName:p.name||'',size:p.size||'',packSize,orderNo:`${new Date().getTime().toString().slice(-6)}-${String(i+1).padStart(2,'0')}`,status:'pending',date:($('dDate')?.value||START),note})}toast(`✅ Đã phân công ${count} đơn · Combo ${packSize} cây cho ${employee}`);if($('assignNote'))$('assignNote').value='';if($('assignOrderCount'))$('assignOrderCount').value=1;await renderAssignmentControls()}catch(e){toast(e?.message||'Không thể phân công đơn')}}
async function renderAssignmentControls(){const card=$('orderAssignCard');if(!card)return;const s=CloudSync.state();if(!s.user||s.role!=='admin'){card.classList.add('perm-hidden');return}card.classList.remove('perm-hidden');await fillAssignOptions();const box=$('assignmentList');if(!box)return;try{const rows=await s.adminListOrders();let html='';if(!rows.length)html='<div class="tiny muted">Chưa có đơn được phân công.</div>';rows.slice(0,30).forEach(r=>{const basePay=(Number(r.packSize)||0)*rate(r.size),adj=Number(r.payAdjustment)||0,totalPay=basePay+adj;html+=`<div class="order-card ${r.status==='completed'?'done':'pending'}"><div class="order-head"><div><div class="order-title">${esc(r.employee||'')} · ${esc(r.plantName||'')} · ${esc(r.size||'')}</div><div class="order-meta">Đơn #${esc(r.orderNo||r.id.slice(-6))} · Combo ${Number(r.packSize)||0} cây · ${r.status==='completed'?'Đã hoàn thành':'Đang chờ'}</div><div class="tiny muted">Tiền công gốc: <b>${money(basePay)}</b>${adj?` · Điều chỉnh: <b>${adj>0?'+':''}${money(adj)}</b>`:''} · <b>Tổng: ${money(totalPay)}</b></div></div><span class="order-badge ${r.status==='completed'?'done':''}">${r.status==='completed'?'✅ Hoàn thành':'🔔 Chờ'}</span></div>${r.status==='completed'&&r.completionImage?`<div class="order-proof"><img src="${r.completionImage}" onclick="openImageSrc(this.src,'Ảnh hoàn thành · ${esc(r.employee||'')}')" alt=""><div class="tiny muted">${r.payAdjustmentNote?`Ghi chú điều chỉnh: ${esc(r.payAdjustmentNote)}`:''}</div></div>`:''}<div style="display:flex;gap:7px;flex-wrap:wrap;margin-top:8px"><button class="secondary" onclick="openOrderAdjustMoney('${r.id}')">± Tiền công</button><button class="danger" onclick="adminRemoveAssignment('${r.id}')">Xóa đơn</button></div></div>`});box.innerHTML=html}catch(e){box.innerHTML='<div class="tiny muted">Không tải được danh sách phân công.</div>'}}
function openOrderAdjustMoney(id){
  const r=(D.packingOrders||[]).find(x=>x.id===id);if(!r)return;
  const base=(Number(r.packSize)||0)*rate(r.size),current=Number(r.payAdjustment)||0;
  $('editTitle').textContent='Điều chỉnh tiền công cho đơn hàng';
  $('editBody').innerHTML=`<div class="info"><b>Đơn #${esc(r.orderNo||r.id.slice(-6))}</b><div class="tiny muted">${esc(r.employee||'')} · ${esc(r.plantName||'')} · ${esc(r.size||'')} · Combo ${Number(r.packSize)||0} cây</div><div class="tiny muted">Tiền công gốc: ${money(base)} · Đang điều chỉnh: ${current>0?'+':''}${money(current)}</div><div class="money">Tổng hiện tại: ${money(base+current)}</div></div><div class="field"><label>Số tiền điều chỉnh (VNĐ)</label><input id="orderAdjAmount" type="number" step="1000" inputmode="numeric" value="0" placeholder="Ví dụ: 50000 hoặc -30000"></div><div class="field"><label>Ghi chú</label><input id="orderAdjNote" placeholder="Thưởng, phụ cấp, trừ tiền..."></div><button class="primary" onclick="saveOrderAdjustMoney('${id}')">LƯU ĐIỀU CHỈNH</button><div class="tiny muted" style="margin-top:8px">Số dương = cộng, số âm = trừ. Có thể điều chỉnh lại nhiều lần.</div>`;
  $('editModal').classList.add('show');
}
async function saveOrderAdjustMoney(id){
  const amount=Number($('orderAdjAmount')?.value)||0,note=String($('orderAdjNote')?.value||'').trim();
  if(!amount){toast('Số tiền phải khác 0');return}
  const r=(D.packingOrders||[]).find(x=>x.id===id);if(!r)return;
  const next=(Number(r.payAdjustment)||0)+amount;
  try{await CloudSync.state().adminUpdatePackingOrder(id,{payAdjustment:next,payAdjustmentNote:note,updatedAt:firebase.firestore.FieldValue.serverTimestamp()});closeEdit();await renderAssignmentControls();renderAll();toast(`Đã ${amount>0?'cộng':'trừ'} ${money(Math.abs(amount))} cho đơn`)}catch(e){toast(e?.message||'Không thể điều chỉnh tiền công')}
}
async function adminRemoveAssignment(id){if(!confirm('Xóa đơn phân công này?'))return;try{await CloudSync.state().adminDeleteOrder(id);await renderAssignmentControls();toast('Đã xóa đơn phân công')}catch(e){toast(e?.message||'Không thể xóa đơn')}}

function renderCloudBody(){const b=$('cloudBody');if(!b)return;const s=CloudSync.state();if(!CLOUD_CONFIG){b.innerHTML='<div class="info">☁️ Cloud chưa được cấu hình.</div>';return}if(s.user){b.innerHTML=`<div class="info"><b>Đã đăng nhập</b><div class="cloud-user">${esc(s.user.email||'')}</div><div style="margin-top:6px"><span class="role-pill">${esc(ROLE_LABELS[s.role]||'Chỉ xem')}</span></div></div><button class="primary" onclick="syncNow()">🔄 ĐỒNG BỘ NGAY</button><button class="secondary" style="margin-top:8px;width:100%" onclick="CloudSync.signOut()">Đăng xuất</button>`}else{const remembered=(localStorage.getItem('ROLL_CAY_REMEMBER_EMAIL')||'').replace(/"/g,'&quot;');b.innerHTML='<div class="info"><b>Đăng nhập để sử dụng Cloud</b><div class="tiny muted">Tài khoản do Quản trị viên cấp.</div></div><button class="primary" onclick="showLoginGate()">ĐĂNG NHẬP</button>'}}
async function renderUserManagement(){const card=$('userAdminCard');const list=$('userList');if(!card||!list)return;const s=CloudSync.state();const ok=s.user&&CloudSync.can('users');card.style.display=ok?'block':'none';if(!ok){list.innerHTML='';return}list.innerHTML='<div class="tiny muted">Đang tải danh sách tài khoản…</div>';try{const users=await CloudSync.listUsers();list.innerHTML=users.length?users.map(u=>{const role=u.role||'viewer';const active=u.active!==false;const self=u.uid===s.user.uid;const linked=role==='admin'?'<span class="role-pill">🔒 Admin · không gắn nhân viên</span>':(u.employeeName?`<span class="role-pill">${esc(u.employeeName)}</span>`:'<span class="tiny muted">⚪ Chưa liên kết nhân viên</span>');return `<div class="control-item"><div class="user-row"><div class="user-meta"><div class="user-email">${esc(u.email||u.uid)}</div><div class="tiny muted">${linked} · <span class="role-pill">${esc(ROLE_LABELS[role]||role)}</span> · ${active?'🟢 Đang hoạt động':'🔴 Đã khóa'}</div></div><div class="user-actions">${role!=='admin'?`<button class="secondary" onclick="openLinkEmployee('${u.uid}','${encodeURIComponent(u.employeeId||'')}')">${u.employeeName?'Đổi NV':'Gắn NV'}</button>`:''}<button class="secondary" onclick="changeUserRole('${u.uid}','${role}')" ${self?'disabled':''}>Quyền</button><button class="secondary" onclick="toggleUserActive('${u.uid}',${active})" ${self?'disabled':''}>${active?'Khóa':'Mở'}</button></div></div></div>`}).join(''):'<div class="empty">Chưa có tài khoản nào.</div>'}catch(e){console.error(e);list.innerHTML='<div class="empty">Không đọc được danh sách user. Kiểm tra Firestore Rules.</div>'}}
function employeeOptions(selected=''){return (D.employees||[]).map((e,i)=>`<option value="${i}" ${String(i)===String(selected)?'selected':''}>${esc(e)}</option>`).join('')}
function openLinkEmployee(uid,current=''){if(!CloudSync.requirePerm('users'))return;$('editTitle').textContent='Liên kết tài khoản với nhân viên';$('editBody').innerHTML=`<div class="info">Tài khoản này sẽ dùng đúng nhân viên đã có trong danh sách. Không tạo thêm nhân viên mới.</div><div class="field"><label>Nhân viên</label><select id="linkEmployeeId"><option value="">-- Chọn nhân viên --</option>${employeeOptions(decodeURIComponent(current||''))}</select></div><button class="primary" onclick="saveUserEmployeeLink('${uid}')">LƯU LIÊN KẾT</button>`;$('editModal').classList.add('show')}
async function saveUserEmployeeLink(uid){const id=$('linkEmployeeId')?.value;if(id===''){toast('Hãy chọn nhân viên');return}const ok=await CloudSync.state().linkUserEmployee(uid,id);if(ok)closeEdit()}
function openCreateUser(){if(!CloudSync.requirePerm('users'))return;$('editTitle').textContent='Cấp tài khoản cho nhân viên có sẵn';$('editBody').innerHTML=`<div class="info">Chọn một nhân viên đã có trong danh sách. Việc cấp tài khoản <b>không tạo thêm nhân viên</b>.</div><div class="field"><label>Nhân viên</label><select id="newUserEmployee"><option value="">-- Chọn nhân viên --</option>${employeeOptions()}</select></div><div class="field"><label>Email đăng nhập</label><input id="newUserEmail" type="email" placeholder="nhanvien@example.com"></div><div class="field"><label>Mật khẩu</label><input id="newUserPass" type="password" placeholder="Ít nhất 6 ký tự"></div><div class="field"><label>Quyền</label><select id="newUserRole"><option value="packer">Nhân viên đóng hàng</option><option value="warehouse">Nhân viên kho</option><option value="manager">Quản lý</option><option value="viewer">Chỉ xem</option></select></div><button class="primary" onclick="createNewUser()">CẤP TÀI KHOẢN</button><div class="tiny muted" style="margin-top:8px">Mật khẩu chỉ dùng để tạo tài khoản Firebase; app không lưu mật khẩu.</div>`;$('editModal').classList.add('show')}
async function createNewUser(){const ok=await CloudSync.createUser(($('newUserEmail')?.value||'').trim(),$('newUserPass')?.value||'', $('newUserEmployee')?.value||'', $('newUserRole')?.value||'viewer');if(ok){closeEdit();renderUserManagement();fillAssignOptions()}}
async function changeUserRole(uid,current){if(!CloudSync.requirePerm('users'))return;const roles=['manager','packer','warehouse','viewer'];const next=prompt('Nhập quyền: manager / packer / warehouse / viewer',current);if(!next||!roles.includes(next))return;await CloudSync.setUserRole(uid,next)}
async function toggleUserActive(uid,active){await CloudSync.setUserActive(uid,!active)}
function applyPermissionsUI(){
  const s=CloudSync.state();const isP=s.user&&s.role==='packer';const isA=s.user&&s.role==='admin';
  const hasPack=s.user&&CloudSync.can('pack'),hasIn=s.user&&CloudSync.can('in'),hasReport=s.user&&CloudSync.can('report'),hasControl=s.user&&CloudSync.can('control');
  const nav=document.querySelectorAll('.bottomnav button');nav.forEach(b=>{const t=b.dataset.tab;if(t==='home')b.style.display=isP?'none':'';if(t==='day')b.style.display=(hasPack||hasIn)?'':'none';if(t==='stock')b.style.display=isP?'none':'';if(t==='summary')b.style.display=hasReport?'':'none';if(t==='control')b.style.display=hasControl?'':'none'});
  if($('adminPackEntryPanel'))$('adminPackEntryPanel').style.display=(hasPack&&!isP)?'block':'none';
  if($('entryInfoPacker'))$('entryInfoPacker').classList.toggle('hidden',!isP);
  if($('packerOrderPanel'))$('packerOrderPanel').style.display=isP?'block':'none';
  if($('orderAssignCard'))$('orderAssignCard').style.display=isA?'block':'none';if(!isP)resetAdminPackProof();
  if(isP){$('modeIn')?.classList.add('hidden')}
  else {if($('modeIn'))$('modeIn').classList.toggle('hidden',!hasIn)}
  if($('modePack'))$('modePack').style.display=hasPack?'':'none';
  if($('packForm')){$('packForm').classList.remove('hidden');$('packForm').style.display=(hasPack&&entryMode==='pack')?'block':'none';}
  if($('inForm')){$('inForm').classList.remove('hidden');$('inForm').style.display=(hasIn&&entryMode==='in')?'block':'none';}
  const ids=['rateList','plantList','openingList','empList'];ids.forEach(id=>{const el=$(id);if(el)el.closest('.card')?.classList.toggle('perm-hidden',!hasControl)});
  if($('userAdminCard'))$('userAdminCard').style.display=s.user&&CloudSync.can('users')?'block':'none';if($('adminAssignmentShortcutCard'))$('adminAssignmentShortcutCard').style.display=isA?'block':'none';
  if(s.user&&!hasControl&&document.querySelector('.bottomnav button[data-tab="control"]')?.classList.contains('active'))go(hasReport?'summary':hasPack||hasIn?'day':'home');
}

document.querySelectorAll('.bottomnav button').forEach(b=>b.onclick=()=>go(b.dataset.tab));
$('rFrom').addEventListener('change',onReportFromChange);$('rTo').addEventListener('change',onReportToChange);
load();init();CloudSync.init().then(()=>{installPermissionGuards();applyPermissionsUI();renderUserManagement()});
