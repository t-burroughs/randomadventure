const adventureSeeds = [
  { title: 'The long way home', summary: 'Pick a direction, find a green space, and let three small discoveries decide where you stop next.', tags: ['OUTDOORS', 'LOW-COST', '2-3 HOURS'], styles: ['outdoors', 'relaxed'] },
  { title: 'The secret staircase loop', summary: 'Build a walk around the least obvious paths in your neighborhood, ending at a view you have never photographed.', tags: ['ROUTE', 'WALKABLE', '2-4 HOURS'], styles: ['outdoors', 'surprising'] },
  { title: 'A table for somewhere new', summary: 'Choose a place neither of you has tried, then build a tiny food crawl around its best-looking neighbors.', tags: ['FOOD + CULTURE', 'FLEXIBLE', 'HALF DAY'], styles: ['food and culture', 'relaxed'] },
  { title: 'The one-dish city tour', summary: 'Pick one food you love and visit three places that make their own version. Score them on atmosphere, not just taste.', tags: ['FOOD + CULTURE', 'LOW-COST', '3 STOPS'], styles: ['food and culture', 'surprising'] },
  { title: 'Make something of it', summary: 'Find a local creative prompt, make a souvenir in an hour, and trade the results over a celebratory snack.', tags: ['MAKE + PLAY', 'INDOORS', '3 HOURS'], styles: ['creative and playful'] },
  { title: 'The neighborhood lottery', summary: 'Draw three nearby spots at random. Your only rule: the next stop must be stranger than the last.', tags: ['UNEXPECTED', 'WALKABLE', '2-4 HOURS'], styles: ['surprising', 'outdoors'] },
  { title: 'Golden hour, extended', summary: 'Start with a slow view of the sky and follow the evening toward somewhere warm, lively, and unplanned.', tags: ['RELAXED', 'OUTDOORS', 'LOW-COST'], styles: ['relaxed', 'outdoors'] },
  { title: 'The tiny festival', summary: 'Turn ordinary errands into a themed expedition with a soundtrack, a color, and one delightfully unnecessary detour.', tags: ['PLAYFUL', 'ANY WEATHER', 'FLEXIBLE'], styles: ['creative and playful', 'surprising'] },
  { title: 'The bike-and-bakery circuit', summary: 'Make a gentle loop through three interesting corners of town, with a pastry or coffee stop at the halfway point.', tags: ['BIKE LOOP', 'FOOD', 'HALF DAY'], styles: ['outdoors', 'food and culture'] },
  { title: 'The waterline hour', summary: 'Follow the nearest shoreline, river, or canal until you find a place for a swim, paddle, picnic, or simply a new view.', tags: ['OUTDOORS', 'CONDITIONS', 'FLEXIBLE'], styles: ['outdoors', 'relaxed'] },
  { title: 'Museum bingo', summary: 'Visit a museum or gallery with a five-item scavenger list: something tiny, strange, blue, handmade, and impossible to explain.', tags: ['CULTURE', 'INDOORS', '2 HOURS'], styles: ['food and culture', 'creative and playful'] },
  { title: 'The borrowed hobby', summary: 'Try an activity someone nearby loves but you have never considered, then ask a stranger what beginners usually miss.', tags: ['TRY SOMETHING NEW', 'SOCIAL', 'HALF DAY'], styles: ['creative and playful', 'surprising'] },
  { title: 'The weather dare', summary: 'Use today’s forecast as the brief: chase shade, find the best rain shelter, or make the wind part of the plan.', tags: ['WEATHER LED', 'BOLD', '2-3 HOURS'], styles: ['surprising', 'outdoors'] },
  { title: 'A pocket-sized day trip', summary: 'Take the shortest affordable ride out of town and spend the day following one local clue: a hill, market, beach, or old road.', tags: ['DAY TRIP', 'EXPLORING', 'FULL DAY'], styles: ['outdoors', 'surprising'] },
  { title: 'The quiet city challenge', summary: 'Find the calmest possible route through a busy city, with one bench, one view, and one place to read for twenty minutes.', tags: ['LOW-KEY', 'WALKABLE', 'LOW-COST'], styles: ['relaxed', 'outdoors'] },
  { title: 'The local legend hunt', summary: 'Choose an old story, landmark, or unusual local fact and build a route that lets you see the real places behind it.', tags: ['CULTURE', 'ROUTE', 'HALF DAY'], styles: ['food and culture', 'surprising'] },
  { title: 'The no-plan picnic', summary: 'Buy three unfamiliar things from a market, find the nearest beautiful patch of outside, and let the meal invent itself.', tags: ['FOOD', 'OUTDOORS', 'LOW-COST'], styles: ['food and culture', 'outdoors'] },
  { title: 'The after-dark constellation', summary: 'Find the darkest accessible spot nearby, bring a warm drink, and turn an ordinary evening into a small astronomy mission.', tags: ['NIGHT OUT', 'LOW-COST', 'WEATHER LED'], styles: ['relaxed', 'surprising'] },
  { title: 'Architecture without a ticket', summary: 'Choose a decade or design style and take a self-guided walk past the most interesting buildings in your city.', tags: ['CULTURE', 'WALKABLE', 'FREE'], styles: ['food and culture', 'outdoors'] },
  { title: 'Sunrise belongs to you', summary: 'Start before the city wakes up, walk toward the best eastern view, and reward yourselves with the first good breakfast you find.', tags: ['EARLY START', 'OUTDOORS', 'HALF DAY'], styles: ['outdoors', 'surprising'] },
  { title: 'The public art relay', summary: 'Find five murals, sculptures, or installations and let each one assign the next color, street, or direction.', tags: ['ART', 'WALKABLE', 'LOW-COST'], styles: ['food and culture', 'creative and playful'] },
  { title: 'One stop farther', summary: 'Take a bus, train, or tram one stop beyond your normal destination and explore the unfamiliar neighborhood on foot.', tags: ['TRANSIT', 'EXPLORING', '2-3 HOURS'], styles: ['surprising', 'outdoors'] },
  { title: 'The skill swap', summary: 'Teach each other one small skill, then find a public place where you can practice it in a completely different setting.', tags: ['PLAYFUL', 'SOCIAL', 'FLEXIBLE'], styles: ['creative and playful', 'surprising'] },
  { title: 'The free-things expedition', summary: 'Build a route from only free experiences: a public garden, a viewpoint, a library, a market sample, and a good bench.', tags: ['FREE', 'ROUTE', 'ANY WEATHER'], styles: ['relaxed', 'outdoors'] },
  { title: 'The local soundtrack', summary: 'Make a five-song soundtrack for your city and walk until every song has found a matching scene.', tags: ['CREATIVE', 'WALKABLE', 'LOW-COST'], styles: ['creative and playful', 'outdoors'] },
  { title: 'The tide-and-treat mission', summary: 'Check the water conditions, visit the safest interesting shoreline spot, and finish with the best nearby warm drink.', tags: ['WATER', 'CONDITIONS', 'HALF DAY'], styles: ['outdoors', 'food and culture'] },
  { title: 'The tiny kindness tour', summary: 'Plan a route around small acts of kindness: leave a note, support a local maker, or brighten someone’s ordinary afternoon.', tags: ['MEANINGFUL', 'CITY WALK', 'FLEXIBLE'], styles: ['creative and playful', 'relaxed'] },
  { title: 'The local history plot twist', summary: 'Start at a familiar landmark and follow the oldest available clue until the story leads somewhere you have never noticed.', tags: ['HISTORY', 'ROUTE', 'HALF DAY'], styles: ['food and culture', 'surprising'] },
  { title: 'The golden-hour photo hunt', summary: 'Choose three simple photo prompts and follow the changing light through a part of town you usually pass through.', tags: ['PHOTO WALK', 'OUTDOORS', 'LOW-COST'], styles: ['creative and playful', 'outdoors'] },
  { title: 'The rainy-day resistance', summary: 'Dress for the forecast and find the best indoor-to-indoor route through the city, with one dramatic puddle reflection along the way.', tags: ['RAIN READY', 'INDOORS', 'PLAYFUL'], styles: ['creative and playful', 'surprising'] },
  { title: 'The neighborhood field study', summary: 'Spend two hours observing one overlooked block like visitors from another planet, then choose its most interesting story.', tags: ['CURIOUS', 'WALKABLE', 'LOW-COST'], styles: ['surprising', 'relaxed'] },
  { title: 'The scenic detour commute', summary: 'Replace the usual route with a longer walk or ride and collect three small landmarks worth remembering.', tags: ['BIKE OR WALK', 'ROUTE', 'FLEXIBLE'], styles: ['outdoors', 'relaxed'] }
];

const activitySettings = [
  ['a riverside path', 'OUTDOORS', 'outdoors'], ['a hilltop viewpoint', 'OUTDOORS', 'outdoors'], ['a neighborhood market', 'FOOD + CULTURE', 'food and culture'],
  ['a small independent cinema', 'CULTURE', 'food and culture'], ['a public garden', 'OUTDOORS', 'outdoors'], ['a historic district', 'HISTORY', 'food and culture'],
  ['a hidden courtyard', 'DISCOVERY', 'surprising'], ['a local library', 'CULTURE', 'relaxed'], ['a makerspace or craft shop', 'MAKE + PLAY', 'creative and playful'],
  ['a waterfront promenade', 'OUTDOORS', 'outdoors'], ['a quiet café street', 'FOOD + CULTURE', 'relaxed'], ['a public art trail', 'ART', 'creative and playful'],
  ['a bike-friendly greenway', 'BIKE LOOP', 'outdoors'], ['a local music venue', 'CULTURE', 'food and culture'], ['a botanical collection', 'NATURE', 'relaxed'],
  ['an overlooked transit stop', 'EXPLORING', 'surprising'], ['a community sports court', 'PLAYFUL', 'creative and playful'], ['a secondhand book cluster', 'CULTURE', 'food and culture'],
  ['a beach, lake, or canal edge', 'WATER', 'outdoors'], ['a street known for unusual architecture', 'ARCHITECTURE', 'surprising']
];

const adventureFormats = [
  ['follow three clues', 'Write down three things to look for and let each discovery choose the next direction.', '2-3 HOURS'],
  ['make a tiny field guide', 'Document five details you would normally walk past and give each one a memorable name.', '2-3 HOURS'],
  ['turn it into a photo mission', 'Bring a phone or camera and collect a small set of images around one color, shape, or texture.', '2-3 HOURS'],
  ['build a snack route', 'Choose one local treat and compare three versions while exploring the nearby streets.', 'HALF DAY'],
  ['go at the quietest hour', 'Visit when it is usually overlooked and notice what changes when the crowds disappear.', '2-3 HOURS'],
  ['invite a friendly detour', 'Take the scenic option whenever there is a choice, even when it adds fifteen minutes.', 'HALF DAY'],
  ['make a sound map', 'Collect the changing sounds of the route and finish somewhere calm enough to hear your own thoughts.', '2-3 HOURS'],
  ['play local bingo', 'Create five simple prompts before leaving and do not finish until at least three have happened naturally.', 'HALF DAY'],
  ['trade the itinerary', 'Each person secretly chooses one stop, then reveal the full route one decision at a time.', 'HALF DAY'],
  ['follow an old story', 'Find one historical detail connected to the setting and follow its trail into the present day.', 'HALF DAY'],
  ['make it weather-led', 'Use the forecast as part of the design: chase shade, shelter, wind, warmth, reflections, or clear sky.', '2-3 HOURS'],
  ['finish with a small ritual', 'End the outing with a simple repeatable moment: a warm drink, a shared note, or a view at dusk.', 'HALF DAY']
];

activitySettings.forEach(([setting, category, style], settingIndex) => {
  adventureFormats.forEach(([format, action, duration], formatIndex) => {
    adventureSeeds.push({
      title: `${format.charAt(0).toUpperCase() + format.slice(1)} at ${setting}`,
      summary: `Use ${setting} as your starting point, then ${action.toLowerCase()} This is variation ${settingIndex + 1}-${formatIndex + 1}, so the same city can keep feeling new.`,
      tags: [category, duration, formatIndex % 3 === 0 ? 'LOW-COST' : 'FLEXIBLE'],
      styles: [style, formatIndex % 4 === 0 ? 'surprising' : 'outdoors']
    });
  });
});

const form = document.querySelector('#adventureForm');
const results = document.querySelector('#results');
const savedCount = document.querySelector('#savedCount');
const toast = document.querySelector('#toast');
let saved = JSON.parse(localStorage.getItem('random-adventures') || '[]');
let currentResults = [];

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function updateSavedCount() { savedCount.textContent = saved.length; }

function getPreferences() {
  const data = new FormData(form);
  return {
    location: data.get('location')?.trim() || 'your area',
    places: data.get('places')?.trim(),
    duration: data.get('duration'),
    budget: data.get('budget') || '60',
    energy: data.get('energy'),
    styles: data.getAll('style'),
    prompt: data.get('prompt')?.trim()
  };
}

function renderCards(items) {
  results.innerHTML = items.map((item, index) => {
    const isSaved = saved.some(savedItem => savedItem.title === item.title);
    return `<article class="adventure-card">
      <div class="card-actions"><button class="icon-button ${isSaved ? 'active' : ''}" data-action="save" data-index="${index}" title="${isSaved ? 'Remove from saved' : 'Save adventure'}" aria-label="${isSaved ? 'Remove from saved' : 'Save adventure'}">${isSaved ? '&#9829;' : '&#9825;'}</button><button class="icon-button" data-action="copy" data-index="${index}" title="Copy adventure" aria-label="Copy adventure">&#10697;</button><button class="icon-button" data-action="download" data-index="${index}" title="Download adventure" aria-label="Download adventure">&#8595;</button><button class="icon-button" data-action="share" data-index="${index}" title="Share adventure" aria-label="Share adventure">&#8599;</button></div>
      <span class="card-number">0${index + 1} / ADVENTURE</span><h3 class="card-title">${item.title}</h3><p class="card-summary">${item.summary}</p><div class="tags">${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
    </article>`;
  }).join('');
}

function generate() {
  const preferences = getPreferences();
  const promptWords = (preferences.prompt || '').toLowerCase().split(/\s+/);
  const ranked = adventureSeeds.map(item => {
    const styleMatch = preferences.styles.filter(style => item.styles.includes(style)).length * 4;
    const textMatch = promptWords.filter(word => word.length > 3 && `${item.title} ${item.summary} ${item.tags.join(' ')}`.toLowerCase().includes(word)).length * 3;
    return { item, score: styleMatch + textMatch + Math.random() * 5 };
  }).sort((a, b) => b.score - a.score);
  const shortlist = ranked.slice(0, 4).map(entry => entry.item);
  currentResults = shortlist.map(item => ({ ...item, summary: `${item.summary} Built for ${preferences.energy.toLowerCase()} energy in ${preferences.location}.` }));
  document.querySelector('#resultsTitle').textContent = preferences.prompt ? 'Plans shaped around your idea' : 'A few places to begin';
  renderCards(currentResults);
}

function download(item) {
  const content = `${item.title}\n\n${item.summary}\n\n${item.tags.join('  ·  ')}`;
  const link = document.createElement('a');
  link.href = URL.createObjectURL(new Blob([content], { type: 'text/plain' }));
  link.download = `${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.txt`;
  link.click();
  URL.revokeObjectURL(link.href);
}

results.addEventListener('click', event => {
  const button = event.target.closest('[data-action]');
  if (!button) return;
  const item = currentResults[Number(button.dataset.index)];
  if (button.dataset.action === 'save') {
    const existing = saved.findIndex(savedItem => savedItem.title === item.title);
    if (existing >= 0) { saved.splice(existing, 1); showToast('Removed from saved adventures'); }
    else { saved.push(item); showToast('Saved for later'); }
    localStorage.setItem('random-adventures', JSON.stringify(saved)); updateSavedCount(); renderCards(currentResults);
  } else if (button.dataset.action === 'download') {
    download(item);
    showToast('Adventure downloaded');
  } else if (button.dataset.action === 'share') {
    const text = `${item.title}\n\n${item.summary}\n\n${item.tags.join(' · ')}`;
    if (navigator.share) navigator.share({ title: item.title, text });
    else navigator.clipboard?.writeText(text);
    showToast(navigator.share ? 'Opening share sheet' : 'Adventure copied to clipboard');
  } else {
    navigator.clipboard?.writeText(`${item.title}\n\n${item.summary}\n\n${item.tags.join(' · ')}`);
    showToast('Adventure copied to clipboard');
  }
});

form.addEventListener('submit', event => { event.preventDefault(); generate(); });
document.querySelector('#reroll').addEventListener('click', generate);
document.querySelector('#savedToggle').addEventListener('click', () => {
  if (!saved.length) { showToast('No saved adventures yet'); return; }
  currentResults = saved;
  document.querySelector('#resultsTitle').textContent = 'Saved for later';
  renderCards(currentResults);
});
updateSavedCount(); generate();
