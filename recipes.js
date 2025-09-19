// Simple recipe data object (JSON-like). Add more recipes as needed.
const RECIPES = [
  {
    id:1, title:"Quinoa Salad", category:"Salad",
    img:"https://via.placeholder.com/300x180?text=Quinoa",
    desc:"Bright salad with quinoa, veg & lemon.",
    ingredients:["1 cup cooked quinoa","Cherry tomatoes","Cucumber","Olive oil","Lemon juice"],
    steps:["Cook quinoa","Chop veg","Mix and dress","Serve chilled"],
    nutrition:{calories:320, protein:8, carbs:45, fat:10}
  },
  {
    id:2, title:"Oat Banana Pancake", category:"Breakfast",
    img:"https://via.placeholder.com/300x180?text=Pancake",
    desc:"Quick pancakes with oats and banana.",
    ingredients:["1 ripe banana","1 egg","1/2 cup oats","Baking powder"],
    steps:["Blend ingredients","Fry small pancakes","Serve with fruit"],
    nutrition:{calories:250, protein:7, carbs:40, fat:6}
  }
];

function populateCategories(){
  const cat = document.getElementById('category');
  const cats = Array.from(new Set(RECIPES.map(r=>r.category)));
  cats.forEach(c=>{ const o=document.createElement('option'); o.value=c; o.textContent=c; cat.appendChild(o); });
}

function renderCards(list){
  const container = document.getElementById('cards');
  container.innerHTML='';
  list.forEach(r=>{
    const card = document.createElement('div'); card.className='card';
    card.innerHTML = `<img src="${r.img}" alt=""><h3>${r.title}</h3><p>${r.desc}</p><button data-id="${r.id}" class="openBtn">View</button>`;
    container.appendChild(card);
  });
  // attach listeners
  document.querySelectorAll('.openBtn').forEach(b=>{
    b.addEventListener('click', e=> openModal(Number(e.target.dataset.id)));
  });
}

function openModal(id){
  const r = RECIPES.find(x=>x.id===id);
  if(!r) return;
  document.getElementById('modalTitle').textContent = r.title;
  document.getElementById('modalDesc').textContent = r.desc;
  const ing = document.getElementById('modalIngredients'); ing.innerHTML=''; r.ingredients.forEach(i=>{ const li=document.createElement('li'); li.textContent=i; ing.appendChild(li); });
  const steps = document.getElementById('modalSteps'); steps.innerHTML=''; r.steps.forEach(s=>{ const li=document.createElement('li'); li.textContent=s; steps.appendChild(li); });
  const nut = document.getElementById('modalNutrition'); nut.innerHTML=''; 
  nut.innerHTML = '<tr><th>Item</th><th>Value</th></tr>' + Object.entries(r.nutrition).map(([k,v])=>`<tr><td>${k}</td><td>${v}</td></tr>`).join('');
  document.getElementById('modal').classList.remove('hidden');
}

document.getElementById && (function init(){
  populateCategories();
  renderCards(RECIPES);
  document.getElementById('closeModal').addEventListener('click', ()=> document.getElementById('modal').classList.add('hidden'));
  document.getElementById('search').addEventListener('input', filter);
  document.getElementById('category').addEventListener('change', filter);
})();

function filter(){
  const q = document.getElementById('search').value.toLowerCase();
  const cat = document.getElementById('category').value;
  const filtered = RECIPES.filter(r=>{
    return r.title.toLowerCase().includes(q) && (cat? r.category===cat : true);
  });
  renderCards(filtered);
}
