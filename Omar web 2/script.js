window.addEventListener('load', ()=>{
  const data = teethData;
  const container = document.getElementById('container');

  const colors = {
    "Yellow": {bg:"rgba(255,255,0,0.4)", border:"yellow"}, // قواطع
    "Red": {bg:"rgba(255,0,0,0.4)", border:"red"}, // انياب
    "Green": {bg:"rgba(0,255,0,0.4)", border:"lime"}, // ضواحك
    "Blue": {bg:"rgba(0,150,255,0.4)", border:"deepskyblue"}, // طواحن
    "Purple": {bg:"rgba(160,0,255,0.4)", border:"violet"} // ضرس عقل
  }

  const areas = [
    // ===== الفك العلوي - سايبه زي ما هو =====
    {color:"Yellow", x:38, y:3, w:24, h:7},
    {color:"Red", x:35, y:9, w:5, h:6},
    {color:"Red", x:60, y:9, w:5, h:6},
    {color:"Green", x:31, y:15, w:4, h:6},
    {color:"Green", x:28, y:21, w:4, h:6},
    {color:"Green", x:65, y:15, w:4, h:6},
    {color:"Green", x:68, y:21, w:4, h:6},
    {color:"Blue", x:25, y:27, w:6, h:8},
    {color:"Blue", x:24, y:35, w:6, h:8},
    {color:"Blue", x:69, y:27, w:6, h:8},
    {color:"Blue", x:70, y:35, w:6, h:8},
    {color:"Purple", x:18, y:43, w:6, h:7},
    {color:"Purple", x:76, y:43, w:6, h:7},

    // ===== الفك السفلي - مظبوط على الصورة الجديدة =====
    {color:"Yellow", x:38, y:95, w:24, h:5},
    {color:"Red", x:35, y:91, w:4, h:4},
    {color:"Red", x:61, y:91, w:4, h:4},
    {color:"Green", x:31, y:87, w:4, h:4},
    {color:"Green", x:28, y:82, w:4, h:4},
    {color:"Green", x:65, y:87, w:4, h:4},
    {color:"Green", x:68, y:82, w:4, h:4},
    {color:"Blue", x:24, y:75, w:5, h:6},
    {color:"Blue", x:22, y:68, w:5, h:6},
    {color:"Blue", x:72, y:75, w:5, h:6},
    {color:"Blue", x:74, y:68, w:5, h:6},
    {color:"Purple", x:20, y:62, w:5, h:5},
    {color:"Purple", x:76, y:62, w:5, h:5},
  ];

  areas.forEach(a=>{
    const div = document.createElement('div');
    div.className = 'area';
    div.style.left = a.x + '%';
    div.style.top = a.y + '%';
    div.style.width = a.w + '%';
    div.style.height = a.h + '%';
    div.style.background = colors[a.color].bg;
    div.style.borderColor = colors[a.color].border;
    div.onclick = ()=>{
      const d = data[a.color];
      document.getElementById('partName').innerText = d.name;
      document.getElementById('type').innerText = d.type;
      document.getElementById('count').innerText = d.count;
      document.getElementById('function').innerText = d.function;
      document.getElementById('shape').innerText = d.shape;
      document.getElementById('location').innerText = d.location;
      document.getElementById('age').innerText = d.age;
      document.getElementById('note').innerText = d.note;
      document.getElementById('info').classList.add('active');
    }
    container.appendChild(div);
  });
});